class EdukasiApp {
  constructor() {
    this.facts = (typeof FACTS_DATABASE !== 'undefined' ? FACTS_DATABASE : window.FACTS_DATABASE) || [];
    this.theme = this.loadLocalStorage('edukasiq_theme', 'dark');
    this.soundEnabled = this.loadLocalStorage('edukasiq_sound', true);

    this.lastRandomId = null;
    this.audioCtx = null;
    this.shuffleDeck = [];
    this.recentHistory = [];   // Hafal ID fakta yang baru saja ditampilkan
    this.lastCategory = null;  // Hafal kategori terakhir (cegah monoton)

    // Multi-Source API Engine (diinisialisasi di api-engine.js)
    // Referensi ke window.apiEngine yang sudah siap

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
      
      console.log('💡 EdukasiQ Siap! Total Fakta Lokal:', this.facts.length, '| API Engine:', window.apiEngine ? 'Aktif ✅' : 'Tidak tersedia ⚠️');
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
     (Wikipedia fetch lama digantikan oleh ApiEngine di api-engine.js)
     ========================================== */

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

    // ================================================
    // ALGORITMA SMART SHUFFLE UNLIMITED:
    // Fisher-Yates + History-Aware + Category-Aware
    // ================================================

    // Ukuran history: simpan 1/3 dari total fakta (min 3, max 8)
    const HISTORY_SIZE = Math.min(8, Math.max(3, Math.floor(this.facts.length / 3)));

    // Isi ulang deck jika habis
    if (!this.shuffleDeck || this.shuffleDeck.length === 0) {
      // Fisher-Yates Shuffle
      this.shuffleDeck = [...this.facts];
      for (let i = this.shuffleDeck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [this.shuffleDeck[i], this.shuffleDeck[j]] = [this.shuffleDeck[j], this.shuffleDeck[i]];
      }
      // Buang fakta yang baru saja ditampilkan dari awal deck (hindari pengulangan di batas siklus)
      if (this.recentHistory.length > 0) {
        const recentSet = new Set(this.recentHistory);
        // Pindahkan fakta dari history ke belakang deck
        const safe = this.shuffleDeck.filter(f => !recentSet.has(f.id));
        const recent = this.shuffleDeck.filter(f => recentSet.has(f.id));
        this.shuffleDeck = [...recent, ...safe]; // recent di belakang (diambil terakhir)
      }
    }

    // Pilih fakta berikutnya — cegah kategori yang sama muncul 2x berturut-turut
    let fact = null;
    for (let attempt = this.shuffleDeck.length - 1; attempt >= 0; attempt--) {
      const candidate = this.shuffleDeck[attempt];
      if (candidate.categoryName !== this.lastCategory) {
        // Ambil kandidat ini dari deck
        this.shuffleDeck.splice(attempt, 1);
        fact = candidate;
        break;
      }
    }
    // Fallback: jika semua sisa deck kategorinya sama (deck hampir habis), ambil yang teratas
    if (!fact) {
      fact = this.shuffleDeck.pop();
    }

    // Update history
    this.lastRandomId = fact.id;
    this.lastCategory = fact.categoryName;
    this.recentHistory.push(fact.id);
    if (this.recentHistory.length > HISTORY_SIZE) {
      this.recentHistory.shift(); // Hapus entri paling lama
    }

    // Hentikan suara jika sedang berbicara
    if ('speechSynthesis' in window) {
      try { window.speechSynthesis.cancel(); } catch(e){}
    }

    container.innerHTML = this.createExpandedScanCardHTML(fact);
    this.bindScanCardButtons(container, fact);
  }

  createExpandedScanCardHTML(fact) {
    // Parser markdown sederhana untuk format teks tebal (**teks**)
    const formatText = (text) => (text || '').replace(/\*\*(.*?)\*\*/g, '<strong style="color: var(--text-primary); font-weight: 700;">$1</strong>');

    // Ambil hanya paragraf pertama dari penjelasan agar singkat dan mudah dicerna
    const briefText = formatText((fact.fullExplanation || '').split('\n\n')[0].split('\n')[0]);
    const fullExpHTML = formatText(fact.fullExplanation);

    return `
      <article class="featured-fact-card" style="width: 100%; max-width: 100%; margin: 0 auto; padding: clamp(20px, 4vw, 40px); border: 1px solid var(--glass-border); border-radius: 24px; background: var(--glass-bg); backdrop-filter: blur(24px); box-shadow: 0 20px 50px rgba(0,0,0,0.4); transition: all 0.3s ease;">
        
        <!-- Header Bar: Akreditasi & Referensi Ilmiah -->
        <div style="display: flex; flex-direction: column; gap: 12px; margin-bottom: 20px; padding-bottom: 16px; border-bottom: 1px solid var(--glass-border);">
          <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: nowrap; gap: 12px;">
            <div class="marquee-container">
              <div class="marquee-text">
                ${fact.isLive ? `<span class="live-badge" style="display:inline-flex;align-items:center;gap:5px;background:${fact.sourceColor || '#00f2fe'}22;color:${fact.sourceColor || '#00f2fe'};border:1px solid ${fact.sourceColor || '#00f2fe'}55;border-radius:999px;padding:2px 9px;font-size:0.7rem;font-weight:700;letter-spacing:0.5px;margin-right:8px;"><span class="live-dot" style="width:6px;height:6px;border-radius:50%;background:${fact.sourceColor || '#00f2fe'};animation:livePulse 1.5s ease-in-out infinite;"></span>${fact.sourceIcon || '🌐'} ${fact.sourceLabel || 'LIVE'}</span>` : ''}${fact.categoryName.toUpperCase()}
              </div>
            </div>
            <!-- Tombol Aksi TTS dan Share (Ikon) -->
            <div style="display: flex; gap: 8px; align-items: center; flex-shrink: 0;">
              <button id="tts-btn-${fact.id}" class="btn-secondary btn-tts-scan" style="width: 36px; height: 36px; padding: 0; display: flex; justify-content: center; align-items: center; border: 1px solid rgba(0, 242, 254, 0.4); color: #00f2fe; background: rgba(0, 242, 254, 0.05); border-radius: 8px; cursor: pointer; transition: all 0.2s; flex-shrink: 0;">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>
              </button>
              <button class="btn-secondary btn-share-portal" style="width: 36px; height: 36px; padding: 0; display: flex; justify-content: center; align-items: center; border: 1px solid var(--glass-border); color: var(--text-primary); background: var(--glass-bg); border-radius: 8px; cursor: pointer; transition: all 0.2s; flex-shrink: 0;">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path><polyline points="16 6 12 2 8 6"></polyline><line x1="12" y1="2" x2="12" y2="15"></line></svg>
              </button>
            </div>
          </div>
        </div>

        <!-- Judul Fakta yang Kuat & Jelas -->
        <h1 class="card-title" style="font-size: clamp(1.4rem, 5vw, 2.2rem); font-weight: 800; line-height: 1.35; margin-bottom: 14px; color: var(--text-primary); letter-spacing: -0.5px; text-align: left;">
          ${fact.title}
        </h1>
        
        ${fact.imageUrl ? `
        <!-- Gambar NASA APOD -->
        <div class="nasa-image-wrapper">
          <img src="${fact.imageUrl}" alt="${fact.title}" loading="lazy" />
          <div class="nasa-image-credit">📸 NASA Astronomy Picture of the Day</div>
        </div>` : ''}
        
        <!-- Inti Wawasan / Quote (Fokus Utama Tanpa Emoji) -->
        <blockquote style="margin: 0 0 14px 0; padding: clamp(12px, 3vw, 18px); background: var(--glass-bg); border-left: 4px solid ${fact.sourceColor || 'var(--accent-primary)'}; border-radius: 0 12px 12px 0; font-size: clamp(1rem, 3vw, 1.15rem); color: var(--text-primary); font-weight: 600; line-height: 1.7; text-align: left;">
          "${fact.shortSummary}"
        </blockquote>

        <!-- Ringkasan Padat / Penjelasan Singkat -->
        <div style="font-size: clamp(0.95rem, 3vw, 1.05rem); color: var(--text-secondary); line-height: 1.8; margin-bottom: 14px; text-align: justify; word-spacing: 0.05em; letter-spacing: 0.2px;">
          ${briefText}
        </div>

        <!-- Pilihan Opsi: Baca Penjelasan Mendalam (Collapse/Expand) -->
        <details style="margin-bottom: 14px; background: var(--glass-bg); border: 1px solid var(--glass-border); border-radius: 12px; padding: clamp(10px, 2.5vw, 14px) clamp(14px, 3.5vw, 18px); transition: background 0.3s;">
          <summary style="cursor: pointer; font-size: clamp(0.85rem, 2.5vw, 0.9rem); font-weight: 700; color: var(--accent-primary); outline: none; list-style: none; display: flex; align-items: center; justify-content: space-between; letter-spacing: 0.5px;">
            <span>BACA ANALISIS ILMIAH & PENJELASAN MENDALAM</span>
            <span style="font-size: 1.2rem; transition: transform 0.2s;">▾</span>
          </summary>
          <div style="margin-top: 12px; padding-top: 12px; border-top: 1px solid var(--glass-border); font-size: clamp(0.95rem, 3vw, 1rem); color: var(--text-secondary); line-height: 1.7; text-align: justify; white-space: pre-line; word-spacing: 0.05em; letter-spacing: 0.2px;">
            ${fullExpHTML}
            
            <div style="margin-top: 12px; background: var(--glass-bg); border-left: 3px solid var(--accent-primary); padding: 10px 14px; border-radius: 0 8px 8px 0; text-align: left;">
              <div style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 1px; color: var(--accent-primary); font-weight: 700; margin-bottom: 4px;">Catatan Kritis & Analisis Tambahan</div>
              <div style="color: var(--text-primary); font-weight: 500; font-size: clamp(0.9rem, 2.8vw, 0.95rem); line-height: 1.6;">${formatText(fact.funFact)}</div>
            </div>
            
            <div style="margin-top: 10px; opacity: 0.85;">
              <div class="reference-badge" onclick="this.classList.toggle('expanded')" title="Ketuk untuk melihat full referensi">
                <div class="reference-content">
                  <span class="reference-text">Referensi: <a href="${fact.sourceUrl || `https://www.google.com/search?q=${encodeURIComponent(fact.source + ' ' + fact.title)}`}" target="_blank" onclick="event.stopPropagation()" title="Buka sumber referensi di tab baru" style="color: var(--accent-primary); font-weight: 700; text-decoration: none;">${fact.source}</a></span>
                </div>
                <svg class="reference-chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </div>
            </div>
          </div>
        </details>

        <!-- Separator dihapus karena tombol aksi sudah di atas -->
        
        <!-- Tombol Eksplorasi Utama -->
        <div style="margin-top: 14px; text-align: center;">
          <button id="scanRandomBtnInside" class="btn-primary" style="width: 100%; background: var(--accent-gradient); color: #fff; border: none; font-size: clamp(0.95rem, 3vw, 1.05rem); font-weight: 700; padding: 16px 24px; border-radius: 12px; box-shadow: 0 8px 24px rgba(0,242,254,0.25); cursor: pointer; transition: transform 0.2s, box-shadow 0.2s; display: inline-flex; justify-content: center; align-items: center; gap: 10px; letter-spacing: 0.5px;">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 3 21 3 21 8"></polyline><line x1="4" y1="20" x2="21" y2="3"></line><polyline points="21 16 21 21 16 21"></polyline><line x1="15" y1="15" x2="21" y2="21"></line><line x1="4" y1="4" x2="9" y2="9"></line></svg>
            <span>Eksplorasi Wawasan Berikutnya</span>
          </button>
        </div>

      </article>
    `;
  }

  async showNextFact() {
    const container = document.getElementById('scanDisplayContainer');
    if (!container) return;

    this.playSound('pop');
    if (typeof confetti === 'function') {
      try { confetti({ particleCount: 50, spread: 60, origin: { y: 0.6 } }); } catch(e){}
    }
    if ('speechSynthesis' in window) {
      try { window.speechSynthesis.cancel(); } catch(e){}
    }

    const engine = window.apiEngine;

    // Jika ApiEngine tersedia, coba ambil konten live
    if (engine) {
      // Jika queue sudah ada isi → tampilkan instan (sudah di-prefetch)
      if (engine.prefetchQueue.length > 0) {
        const fact = await engine.getNextFact();
        if (fact) {
          container.innerHTML = this.createExpandedScanCardHTML(fact);
          this.bindScanCardButtons(container, fact);
          return;
        }
      }

      // Queue kosong → tampilkan loading, fetch sekarang
      const nextSource = engine.sources[engine.currentSourceIndex];
      container.innerHTML = this.createLoadingHTML(nextSource);

      const fact = await engine.getNextFact();
      if (fact) {
        container.innerHTML = this.createExpandedScanCardHTML(fact);
        this.bindScanCardButtons(container, fact);
        return;
      }
    }

    // Fallback: gunakan data lokal jika semua API gagal
    this.showToast('⚠️ Koneksi terbatas — menampilkan fakta lokal');
    this.showScanFact('random');
  }

  createLoadingHTML(sourceName = '') {
    const sourceLabels = {
      wikipedia: { label: 'Wikipedia Indonesia', icon: '📖', color: '#3b82f6' },
      nasa:      { label: 'NASA APOD',           icon: '🚀', color: '#f97316' },
      trivia:    { label: 'Open Trivia DB',      icon: '🎯', color: '#8b5cf6' },
      numbers:   { label: 'Numbers API',         icon: '🔢', color: '#10b981' },
      quotable:  { label: 'Quotable',            icon: '💬', color: '#ec4899' },
      wikidata:  { label: 'Wikidata',            icon: '🌐', color: '#06b6d4' },
    };
    const src   = sourceLabels[sourceName] || { label: 'Multi-Source API', icon: '🌐', color: '#00F2FE' };
    const color = src.color;

    return `
      <article class="featured-fact-card" style="width:100%;max-width:100%;margin:0 auto;padding:clamp(20px,4vw,40px);border:1px solid var(--glass-border);border-radius:24px;background:var(--glass-bg);backdrop-filter:blur(24px);box-shadow:0 20px 50px rgba(0,0,0,0.4);min-height:300px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:20px;">
        <div style="font-size:2.5rem;animation:spinPulse 1.5s ease-in-out infinite;">${src.icon}</div>
        <div style="display:flex;gap:8px;">
          <span style="width:10px;height:10px;border-radius:50%;background:${color};animation:bounce 0.8s ease-in-out infinite;"></span>
          <span style="width:10px;height:10px;border-radius:50%;background:${color};animation:bounce 0.8s ease-in-out 0.15s infinite;"></span>
          <span style="width:10px;height:10px;border-radius:50%;background:${color};animation:bounce 0.8s ease-in-out 0.3s infinite;"></span>
        </div>
        <div style="text-align:center;">
          <p style="color:var(--text-primary);font-size:1rem;font-weight:700;margin:0 0 6px 0;">Mengambil Wawasan Baru...</p>
          <p style="color:${color};font-size:0.85rem;font-weight:600;margin:0;display:flex;align-items:center;justify-content:center;gap:6px;">
            <span style="width:6px;height:6px;border-radius:50%;background:${color};animation:livePulse 1.5s ease-in-out infinite;"></span>
            ${src.icon} ${src.label}
          </p>
        </div>
        <style>
          @keyframes bounce{0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}}
          @keyframes spinPulse{0%,100%{transform:scale(1) rotate(0deg);opacity:1}50%{transform:scale(1.15) rotate(5deg);opacity:0.7}}
        </style>
      </article>
    `;
  }

  bindScanCardButtons(parentEl, fact) {
    const ttsBtn = parentEl.querySelector('.btn-tts-scan');
    const sharePortalBtn = parentEl.querySelector('.btn-share-portal');
    const randomBtnInside = parentEl.querySelector('#scanRandomBtnInside');

    // Cek apakah teks marquee terlalu panjang dan butuh berjalan
    const marqueeContainer = parentEl.querySelector('.marquee-container');
    const marqueeText = parentEl.querySelector('.marquee-text');
    if (marqueeContainer && marqueeText) {
      // Gunakan setTimeout agar browser selesai me-render dan menghitung layout
      setTimeout(() => {
        // Buat clone rahasia tanpa batasan CSS untuk mengukur dimensi asli teks secara 100% akurat
        const clone = marqueeText.cloneNode(true);
        clone.style.position = 'absolute';
        clone.style.visibility = 'hidden';
        clone.style.width = 'auto';
        clone.style.whiteSpace = 'nowrap';
        document.body.appendChild(clone);
        
        const realWidth = clone.clientWidth;
        document.body.removeChild(clone);

        if (realWidth > marqueeContainer.clientWidth) {
          marqueeContainer.classList.add('is-running');
        }
      }, 50);
    }

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
        this.showNextFact();
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

    const playIcon = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>`;
    const stopIcon = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg>`;

    if (synth.speaking) {
      synth.cancel();
      this.showToast('🛑 Suara Dihentikan');
      if (btnEl) btnEl.innerHTML = playIcon;
      return;
    }

    this.playSound('click');
    const fullText = `${fact.title}. ${fact.fullExplanation}. Tahukah kamu? ${fact.funFact}`;
    const utterance = new SpeechSynthesisUtterance(fullText);
    utterance.lang = 'id-ID';
    utterance.rate = 0.95;
    
    utterance.onstart = () => {
      if (btnEl) btnEl.innerHTML = stopIcon;
      this.showToast('🔊 Membacakan fakta dalam Bahasa Indonesia...');
    };
    utterance.onend = () => {
      if (btnEl) btnEl.innerHTML = playIcon;
    };
    utterance.onerror = () => {
      if (btnEl) btnEl.innerHTML = playIcon;
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
    // Dinonaktifkan sesuai permintaan: notifikasi (toast) dianggap mengganggu
    return;
  }
}

// Inisialisasi Aplikasi EdukasiQ
const edukasiApp = new EdukasiApp();
if (typeof window !== 'undefined') {
  window.edukasiApp = edukasiApp;
}
