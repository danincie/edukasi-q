/**
 * Logika Utama & Interaktivitas - EdukasiQ
 * Proker KKN - Wawasan Baru Setiap Scan!
 * Versi Minimalis: 100% Fokus Pada Bacaan Ilmu Pengetahuan Acak.
 */

class EdukasiApp {
  constructor() {
    this.facts = window.FACTS_DATABASE || [];
    this.theme = this.loadLocalStorage('edukasiq_theme', 'dark');
    this.soundEnabled = this.loadLocalStorage('edukasiq_sound', true);

    this.lastRandomId = null;
    this.audioCtx = null;

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

  /* ==========================================
     LOCAL STORAGE UTILS
     ========================================== */
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

  /* ==========================================
     THEME & AUDIO CONTROLS
     ========================================== */
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
    const randomBtn = document.getElementById('scanRandomBtn');

    if (themeBtn) themeBtn.addEventListener('click', () => this.toggleTheme());
    if (soundBtn) soundBtn.addEventListener('click', () => this.toggleSound());
    if (randomBtn) {
      randomBtn.addEventListener('click', () => {
        this.showScanFact('random');
      });
    }
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

    // Pilih fakta acak yang berbeda dari sebelumnya agar selalu fresh
    let availableFacts = this.facts.filter(f => f.id !== this.lastRandomId);
    if (availableFacts.length === 0) availableFacts = this.facts;

    const randomIndex = Math.floor(Math.random() * availableFacts.length);
    const fact = availableFacts[randomIndex];
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
      <article class="featured-fact-card" style="width: 100%; max-width: 1200px; margin: 0 auto; padding: 44px 4vw; border: 1px solid var(--glass-border); border-radius: 28px; background: var(--glass-bg); backdrop-filter: blur(24px); box-shadow: 0 20px 50px rgba(0,0,0,0.4); transition: all 0.3s ease;">
        
        <!-- Header Bar: Kategori & Sumber Referensi -->
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px; flex-wrap: wrap; gap: 12px;">
          <span class="category-badge badge-${fact.category}" style="font-size: 0.9rem; padding: 8px 18px; border-radius: 99px;">
            <span>${fact.icon}</span> ${fact.categoryName}
          </span>
          <span style="font-size:0.85rem; font-weight:700; color:var(--text-tertiary); background: rgba(255,255,255,0.06); padding: 6px 16px; border-radius: 20px; display: inline-flex; align-items: center; gap: 6px;">
            <span style="color:#10b981;">✔</span> Terverifikasi: <b style="color:var(--text-secondary); font-weight:600;">${fact.source}</b>
          </span>
        </div>

        <!-- Judul Fakta yang Kuat & Jelas -->
        <h2 class="card-title" style="font-size: 2.2rem; font-weight: 800; line-height: 1.25; margin-bottom: 24px; color: var(--text-primary); letter-spacing: -0.5px;">
          ${fact.title}
        </h2>
        
        <!-- Inti Wawasan / Quote (Fokus Utama) -->
        <div style="font-size: 1.25rem; color: #fff; font-weight: 600; line-height: 1.6; margin-bottom: 24px; padding: 22px 26px; background: linear-gradient(135deg, rgba(0,242,254,0.12) 0%, rgba(37,99,235,0.08) 100%); border-left: 5px solid #00F2FE; border-radius: 16px; box-shadow: 0 10px 25px rgba(0,242,254,0.05);">
          💡 "${fact.shortSummary}"
        </div>

        <!-- Ringkasan Padat / Penjelasan Singkat -->
        <p style="font-size: 1.1rem; color: var(--text-secondary); line-height: 1.75; margin-bottom: 30px;">
          ${briefText}
        </p>

        <!-- Pilihan Opsi: Baca Penjelasan Mendalam (Collapse/Expand) -->
        <details style="margin-bottom: 32px; background: rgba(255, 255, 255, 0.03); border: 1px solid var(--glass-border); border-radius: 16px; padding: 16px 20px;">
          <summary style="cursor: pointer; font-size: 0.95rem; font-weight: 700; color: #00F2FE; outline: none; list-style: none; display: flex; align-items: center; gap: 8px;">
            <span>📖 Baca Penjelasan Selengkapnya & Fakta Unik ▾</span>
          </summary>
          <div style="margin-top: 16px; padding-top: 16px; border-top: 1px dashed rgba(255,255,255,0.1); font-size: 1.05rem; color: var(--text-secondary); line-height: 1.8; white-space: pre-line;">
            ${fact.fullExplanation}
            
            <div style="margin-top: 20px; background: rgba(254, 225, 64, 0.08); border-left: 4px solid #fee140; padding: 14px 18px; border-radius: 8px;">
              <b style="color: #fee140;">⚡ Tahukah Kamu?</b><br>
              <span style="color: var(--text-primary); font-weight: 600;">${fact.funFact}</span>
            </div>
          </div>
        </details>

        <!-- Action Bar: Simpel, Bersih, Profesional -->
        <div style="display: flex; gap: 14px; flex-wrap: wrap; border-top: 1px solid var(--glass-border); padding-top: 24px;">
          <button id="tts-btn-${fact.id}" class="btn-secondary btn-tts-scan" style="padding: 12px 24px; font-size: 0.95rem; border-color: #00f2fe; color: #00f2fe; background: rgba(0,242,254,0.08); font-weight: 700; border-radius: 12px;">
            <span>🔊</span> Dengarkan Suara
          </button>
          
          <button class="btn-secondary btn-share" data-id="${fact.id}" style="padding: 12px 24px; font-size: 0.95rem; font-weight: 700; border-radius: 12px;">
            <span>📢</span> Bagikan Ilmu Ini
          </button>
        </div>

      </article>
    `;
  }

  bindScanCardButtons(parentEl, fact) {
    const ttsBtn = parentEl.querySelector('.btn-tts-scan');
    const shareBtn = parentEl.querySelector('.btn-share');

    if (ttsBtn) {
      ttsBtn.addEventListener('click', () => {
        this.speakScanFact(fact);
      });
    }

    if (shareBtn) {
      shareBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        this.shareFact(fact.id);
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

  shareFact(factId) {
    this.playSound('pop');
    const fact = this.facts.find(f => f.id === factId);
    if (!fact) return;

    const shareText = `💡 TAHUKAH KAMU?\n\n*${fact.title}*\n\n"${fact.shortSummary}"\n\n⚡ ${fact.funFact}\n\n📚 Sumber: ${fact.source}\n\n👉 Scan Barcode / Kunjungi Web EdukasiQ KKN untuk pengetahuan unik terverifikasi lainnya setiap hari!`;

    if (navigator.share) {
      navigator.share({
        title: `EdukasiQ: ${fact.title}`,
        text: shareText,
        url: window.location.href
      }).catch(err => console.log('Share canceled', err));
    } else {
      navigator.clipboard.writeText(shareText).then(() => {
        this.showToast('📋 Teks Fakta Berhasil Disalin! Siap dibagikan ke WhatsApp / IG Story!');
      }).catch(() => {
        alert(shareText);
      });
    }
  }

  /* ==========================================
     STUDIO QR STIKER (MODAL FOOTER)
     ========================================== */
  setupQrModalActions() {
    const openBtn = document.getElementById('openQrModalBtn');
    const closeBtn = document.getElementById('closeQrModalBtn');
    const modal = document.getElementById('qrModal');

    if (openBtn && modal) {
      openBtn.addEventListener('click', (e) => {
        e.preventDefault();
        this.playSound('click');
        modal.classList.add('active');
        if (window.qrStudio && typeof window.qrStudio.renderQrCode === 'function') {
          window.qrStudio.renderQrCode();
        }
      });
    }

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
