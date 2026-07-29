
class EdukasiApp {
  constructor() {
    this.facts = (typeof FACTS_DATABASE !== 'undefined' ? FACTS_DATABASE : window.FACTS_DATABASE) || [];
    this.theme = this.loadLocalStorage('edukasiq_theme', 'dark');
    this.soundEnabled = this.loadLocalStorage('edukasiq_sound', true);

    this.lastRandomId = null;
    this.audioCtx = null;
    this.shuffleDeck = [];

    this.init();
  }

  init() {
    const onReady = () => {
      this.applyTheme(this.theme);
      this.updateSoundBtn();
      this.setupHeaderActions();
      this.setupQrModalActions();
      
      // Tampilkan fakta edukasi acak secara langsung!
      this.showScanFact('random', true);
      
      console.log('💡 EdukasiQ Proker KKN Siap Digunakan! Total Fakta Valid:', this.facts.length);
    };

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', onReady);
    } else {
      onReady();
    }
  }

  loadLocalStorage(key, defaultValue) {
    try {
      const data = localStorage.getItem(key);
      return data ? JSON.parse(data) : defaultValue;
    } catch (e) {
      console.warn('LocalStorage error:', e);
      return defaultValue;
    }
  }

  saveLocalStorage(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.warn('LocalStorage save error:', e);
    }
  }

  applyTheme(themeName) {
    this.theme = themeName;
    document.documentElement.setAttribute('data-theme', themeName);
    this.saveLocalStorage('edukasiq_theme', themeName);
    
    const themeBtn = document.getElementById('themeToggleBtn');
    if (themeBtn) {
      themeBtn.innerHTML = themeName === 'dark' ? '☀️' : '🌙';
      themeBtn.title = themeName === 'dark' ? 'Ganti ke Tema Terang' : 'Ganti ke Tema Gelap';
    }
  }

  toggleTheme() {
    this.playSound('click');
    const newTheme = this.theme === 'dark' ? 'light' : 'dark';
    this.applyTheme(newTheme);
    this.showToast(`✨ Tema Berubah ke Mode ${newTheme === 'dark' ? 'Gelap 🌙' : 'Terang ☀️'}`);
  }

  updateSoundBtn() {
    const btn = document.getElementById('soundToggleBtn');
    if (btn) {
      btn.innerHTML = this.soundEnabled ? '🔊' : '🔇';
      btn.title = this.soundEnabled ? 'Matikan Suara Efek' : 'Aktifkan Suara Efek';
    }
  }

  toggleSound() {
    this.soundEnabled = !this.soundEnabled;
    this.saveLocalStorage('edukasiq_sound', this.soundEnabled);
    this.updateSoundBtn();
    if (this.soundEnabled) {
      this.playSound('chime');
      this.showToast('🔊 Efek Suara Diaktifkan!');
    } else {
      this.showToast('🔇 Efek Suara Dimatikan');
    }
  }

  /**
   * Sintesis Audio Web API (Ringan, tanpa file .mp3 eksternal)
   */
  playSound(type = 'click') {
    if (!this.soundEnabled) return;
    try {
      if (!this.audioCtx) {
        this.audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      }
      if (this.audioCtx.state === 'suspended') {
        this.audioCtx.resume();
      }

      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();
      osc.connect(gain);
      gain.connect(this.audioCtx.destination);

      const now = this.audioCtx.currentTime;

      if (type === 'click') {
        osc.frequency.setValueAtTime(440, now);
        osc.frequency.exponentialRampToValueAtTime(880, now + 0.05);
        gain.gain.setValueAtTime(0.1, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.05);
        osc.start(now);
        osc.stop(now + 0.05);
      } else if (type === 'pop') {
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(300, now);
        osc.frequency.exponentialRampToValueAtTime(600, now + 0.15);
        gain.gain.setValueAtTime(0.2, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.15);
        osc.start(now);
        osc.stop(now + 0.15);
      } else if (type === 'chime') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(523.25, now); // C5
        osc.frequency.setValueAtTime(659.25, now + 0.1); // E5
        osc.frequency.setValueAtTime(783.99, now + 0.2); // G5
        gain.gain.setValueAtTime(0.2, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.4);
        osc.start(now);
        osc.stop(now + 0.4);
      }
    } catch (e) {
      console.warn('Audio play error:', e);
    }
  }

  setupHeaderActions() {
    const themeBtn = document.getElementById('themeToggleBtn');
    const soundBtn = document.getElementById('soundToggleBtn');

    if (themeBtn) themeBtn.addEventListener('click', () => this.toggleTheme());
    if (soundBtn) soundBtn.addEventListener('click', () => this.toggleSound());
  }

  /* ==========================================
     FOKUS UTAMA: PENGAJAK ILMU EDUKASI ACAK
     ========================================== */
  showScanFact(mode = 'random', isInitialLoad = false) {
    const container = document.getElementById('scanDisplayContainer');
    if (!container || !this.facts || this.facts.length === 0) return;

    if (!isInitialLoad) {
      this.playSound('pop');
      if (typeof confetti === 'function') {
        try { confetti({ particleCount: 50, spread: 60, origin: { y: 0.6 } }); } catch(e){}
      }
    }

    // Algoritma Smart Shuffle Deck (Anti-Pengulangan 0% Duplikasi):
    // Jika tumpukan kartu habis atau belum dibuat, isi ulang dengan seluruh fakta dan kocok secara acak (Fisher-Yates Shuffle)
    if (!this.shuffleDeck || this.shuffleDeck.length === 0) {
      this.shuffleDeck = [...this.facts];
      for (let i = this.shuffleDeck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [this.shuffleDeck[i], this.shuffleDeck[j]] = [this.shuffleDeck[j], this.shuffleDeck[i]];
      }
      // Pastikan fakta pertama di putaran baru tidak sama dengan fakta terakhir yang baru saja dibaca
      if (this.shuffleDeck.length > 1 && this.shuffleDeck[this.shuffleDeck.length - 1].id === this.lastRandomId) {
        // Tukar kartu teratas dengan kartu di bawahnya
        const topIdx = this.shuffleDeck.length - 1;
        [this.shuffleDeck[topIdx], this.shuffleDeck[0]] = [this.shuffleDeck[0], this.shuffleDeck[topIdx]];
      }
    }

    // Ambil fakta teratas dari dek kartu yang sudah dikocok
    const fact = this.shuffleDeck.pop();
    this.lastRandomId = fact.id;

    // Hentikan suara jika sedang berbicara
    if ('speechSynthesis' in window) {
      try { window.speechSynthesis.cancel(); } catch(e){}
    }

    container.innerHTML = this.createExpandedScanCardHTML(fact);
    this.bindScanCardButtons(container, fact);
  }

  createExpandedScanCardHTML(fact) {
    // Ambil hanya paragraf pertama dari penjelasan agar singkat dan mudah dicerna
    const briefText = (fact.fullExplanation || '').split('\n\n')[0].split('\n')[0];

    return `
      <article class="featured-fact-card" style="width: 100%; max-width: 100%; margin: 0 auto; padding: clamp(20px, 4vw, 40px); border: 1px solid var(--glass-border); border-radius: 24px; background: var(--glass-bg); backdrop-filter: blur(24px); box-shadow: 0 20px 50px rgba(0,0,0,0.4); transition: all 0.3s ease;">
        
        <!-- Header Bar: Akreditasi & Referensi Ilmiah -->
        <div style="display: flex; flex-direction: column; gap: 12px; margin-bottom: 20px; padding-bottom: 16px; border-bottom: 1px solid rgba(255,255,255,0.08);">
          <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: nowrap; gap: 12px;">
            <span style="font-size: 0.75rem; font-weight: 700; text-transform: uppercase; letter-spacing: 1.2px; color: #00F2FE; background: rgba(0, 242, 254, 0.08); padding: 6px 10px; border-radius: 6px; border: 1px solid rgba(0, 242, 254, 0.25); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; flex: 1;">
              BIDANG: ${fact.categoryName.toUpperCase()}
            </span>
            <!-- Tombol Aksi TTS dan Share (Ikon) -->
            <div style="display: flex; gap: 8px; align-items: center; flex-shrink: 0;">
              <button id="tts-btn-${fact.id}" class="btn-secondary btn-tts-scan" title="Dengarkan Narasi" style="width: 36px; height: 36px; padding: 0; display: flex; justify-content: center; align-items: center; border: 1px solid rgba(0, 242, 254, 0.4); color: #00f2fe; background: rgba(0, 242, 254, 0.05); border-radius: 8px; cursor: pointer; transition: all 0.2s; flex-shrink: 0;">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>
              </button>
              <button class="btn-secondary btn-share-portal" title="Bagikan Portal" style="width: 36px; height: 36px; padding: 0; display: flex; justify-content: center; align-items: center; border: 1px solid rgba(255, 255, 255, 0.15); color: #fff; background: rgba(255, 255, 255, 0.05); border-radius: 8px; cursor: pointer; transition: all 0.2s; flex-shrink: 0;">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path><polyline points="16 6 12 2 8 6"></polyline><line x1="12" y1="2" x2="12" y2="15"></line></svg>
              </button>
            </div>
          </div>
          <span style="font-size: 0.8rem; font-weight: 600; color: var(--text-secondary); background: rgba(255, 255, 255, 0.04); padding: 6px 14px; border-radius: 6px; border: 1px solid rgba(255, 255, 255, 0.1); display: inline-flex; align-items: center; gap: 8px; width: fit-content;">
            <span style="display:inline-block; width:6px; height:6px; background:#10b981; border-radius:50%; box-shadow: 0 0 8px #10b981;"></span>
            Referensi Valid: <strong style="color: #fff; font-weight: 700;">${fact.source}</strong>
          </span>
        </div>

        <!-- Judul Fakta yang Kuat & Jelas -->
        <h1 class="card-title" style="font-size: clamp(1.4rem, 5vw, 2.2rem); font-weight: 800; line-height: 1.35; margin-bottom: 20px; color: var(--text-primary); letter-spacing: -0.5px; text-align: left;">
          ${fact.title}
        </h1>
        
        <!-- Inti Wawasan / Quote (Fokus Utama Tanpa Emoji) -->
        <blockquote style="margin: 0 0 20px 0; padding: clamp(16px, 4vw, 24px); background: linear-gradient(135deg, rgba(0, 242, 254, 0.08) 0%, rgba(37, 99, 235, 0.04) 100%); border-left: 4px solid #00F2FE; border-radius: 0 12px 12px 0; font-size: clamp(1rem, 3vw, 1.15rem); color: #fff; font-weight: 600; line-height: 1.7; text-align: left;">
          "${fact.shortSummary}"
        </blockquote>

        <!-- Ringkasan Padat / Penjelasan Singkat -->
        <div style="font-size: clamp(0.95rem, 3vw, 1.05rem); color: var(--text-secondary); line-height: 1.8; margin-bottom: 28px; text-align: justify; word-spacing: 0.05em; letter-spacing: 0.2px;">
          ${briefText}
        </div>

        <!-- Pilihan Opsi: Baca Penjelasan Mendalam (Collapse/Expand) -->
        <details style="margin-bottom: 28px; background: rgba(255, 255, 255, 0.02); border: 1px solid var(--glass-border); border-radius: 12px; padding: clamp(12px, 3vw, 16px) clamp(16px, 4vw, 20px); transition: background 0.3s;">
          <summary style="cursor: pointer; font-size: clamp(0.85rem, 2.5vw, 0.9rem); font-weight: 700; color: #00F2FE; outline: none; list-style: none; display: flex; align-items: center; justify-content: space-between; letter-spacing: 0.5px;">
            <span>BACA ANALISIS ILMIAH & PENJELASAN MENDALAM</span>
            <span style="font-size: 1.2rem; transition: transform 0.2s;">▾</span>
          </summary>
          <div style="margin-top: 16px; padding-top: 16px; border-top: 1px solid rgba(255, 255, 255, 0.08); font-size: clamp(0.95rem, 3vw, 1rem); color: var(--text-secondary); line-height: 1.8; text-align: justify; white-space: pre-line; word-spacing: 0.05em; letter-spacing: 0.2px;">
            ${fact.fullExplanation}
            
            <div style="margin-top: 20px; background: rgba(255, 255, 255, 0.03); border-left: 3px solid #60a5fa; padding: 14px 18px; border-radius: 0 8px 8px 0; text-align: left;">
              <div style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 1px; color: #60a5fa; font-weight: 700; margin-bottom: 4px;">Catatan Kritis & Analisis Tambahan</div>
              <div style="color: var(--text-primary); font-weight: 500; font-size: clamp(0.9rem, 2.8vw, 0.95rem); line-height: 1.6;">${fact.funFact}</div>
            </div>
          </div>
        </details>

        <!-- Separator dihapus karena tombol aksi sudah di atas -->
        
        <!-- Tombol Eksplorasi Utama -->
        <div style="margin-top: 24px; text-align: center;">
          <button id="scanRandomBtnInside" class="btn-primary" style="width: 100%; background: var(--accent-gradient); color: #fff; border: none; font-size: clamp(0.95rem, 3vw, 1.05rem); font-weight: 700; padding: 16px 24px; border-radius: 12px; box-shadow: 0 8px 24px rgba(0,242,254,0.25); cursor: pointer; transition: transform 0.2s, box-shadow 0.2s; display: inline-flex; justify-content: center; align-items: center; gap: 10px; letter-spacing: 0.5px;">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 3 21 3 21 8"></polyline><line x1="4" y1="20" x2="21" y2="3"></line><polyline points="21 16 21 21 16 21"></polyline><line x1="15" y1="15" x2="21" y2="21"></line><line x1="4" y1="4" x2="9" y2="9"></line></svg>
            <span>Eksplorasi Wawasan Berikutnya</span>
          </button>
        </div>

      </article>
    `;
  }

  bindScanCardButtons(parentEl, fact) {
    const ttsBtn = parentEl.querySelector('.btn-tts-scan');
    const sharePortalBtn = parentEl.querySelector('.btn-share-portal');
    const randomBtnInside = parentEl.querySelector('#scanRandomBtnInside');

    if (ttsBtn) {
      ttsBtn.addEventListener('click', () => {
        this.speakScanFact(fact);
      });
    }

    if (sharePortalBtn) {
      sharePortalBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        this.openQrModal();
      });
    }
    
    if (randomBtnInside) {
      randomBtnInside.addEventListener('click', () => {
        this.showScanFact('random');
      });
    }
  }

  speakScanFact(fact) {
    if (!('speechSynthesis' in window)) {
      this.showToast('⚠️ Maaf, browser Anda belum mendukung fitur pembacaan suara otomatis.');
      return;
    }
    const synth = window.speechSynthesis;
    const btnEl = document.getElementById(`tts-btn-${fact.id}`);

    if (synth.speaking) {
      synth.cancel();
      this.showToast('🛑 Suara Dihentikan');
      if (btnEl) btnEl.innerHTML = '<span>🔊</span> Dengarkan Suara (Bahasa Indonesia)';
      return;
    }

    this.playSound('click');
    const fullText = `${fact.title}. ${fact.fullExplanation}. Tahukah kamu? ${fact.funFact}`;
    const utterance = new SpeechSynthesisUtterance(fullText);
    utterance.lang = 'id-ID';
    utterance.rate = 0.95;
    
    utterance.onstart = () => {
      if (btnEl) btnEl.innerHTML = '<span>🛑</span> Hentikan Suara';
      this.showToast('🔊 Membacakan fakta dalam Bahasa Indonesia...');
    };
    utterance.onend = () => {
      if (btnEl) btnEl.innerHTML = '<span>🔊</span> Dengarkan Suara (Bahasa Indonesia)';
    };
    utterance.onerror = () => {
      if (btnEl) btnEl.innerHTML = '<span>🔊</span> Dengarkan Suara (Bahasa Indonesia)';
    };
    synth.speak(utterance);
  }

  openQrModal() {
    this.playSound('click');
    const modal = document.getElementById('qrModal');
    if (modal) {
      modal.classList.add('active');
      if (window.qrStudio && typeof window.qrStudio.renderQrCode === 'function') {
        window.qrStudio.renderQrCode();
      }
    }
  }

  /* ==========================================
     STUDIO QR STIKER (MODAL FOOTER)
     ========================================== */
  setupQrModalActions() {
    const closeBtn = document.getElementById('closeQrModalBtn');
    const modal = document.getElementById('qrModal');

    const closeModalFunc = () => {
      this.playSound('click');
      if (modal) modal.classList.remove('active');
    };

    if (closeBtn) closeBtn.addEventListener('click', closeModalFunc);
    if (modal) {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModalFunc();
      });
    }
  }

  /* ==========================================
     TOAST NOTIFICATION FEEDBACK
     ========================================== */
  showToast(message) {
    let toast = document.getElementById('edukasi-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'edukasi-toast';
      toast.style.cssText = `
        position: fixed;
        bottom: 30px;
        left: 50%;
        transform: translateX(-50%) translateY(100px);
        background: var(--bg-secondary);
        color: var(--text-primary);
        border: 1px solid var(--accent-primary);
        padding: 14px 24px;
        border-radius: 999px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.5);
        font-weight: 600;
        font-size: 0.95rem;
        z-index: 99999;
        transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        display: flex;
        align-items: center;
        gap: 10px;
        backdrop-filter: blur(12px);
      `;
      document.body.appendChild(toast);
    }

    toast.innerHTML = message;
    toast.style.transform = 'translateX(-50%) translateY(0)';

    if (this.toastTimeout) clearTimeout(this.toastTimeout);
    this.toastTimeout = setTimeout(() => {
      toast.style.transform = 'translateX(-50%) translateY(100px)';
    }, 3500);
  }
}

// Inisialisasi Aplikasi EdukasiQ
const edukasiApp = new EdukasiApp();
if (typeof window !== 'undefined') {
  window.edukasiApp = edukasiApp;
}
