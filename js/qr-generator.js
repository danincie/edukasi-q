/**
 * QR Code & Share Link Generator - EdukasiQ
 * Fitur Unduh Gambar Barcode QR & Bagikan Tautan Web
 */

class QrStudio {
  constructor() {
    this.qriousInstance = null;
    this.init();
  }

  init() {
    const onReady = () => {
      this.cacheDOM();
      this.setupListeners();
      this.renderQrCode();
    };

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', onReady);
    } else {
      onReady();
    }
  }

  cacheDOM() {
    this.qrCanvas = document.getElementById('qrCanvas');
    this.downloadBtn = document.getElementById('downloadStickerBtn');
    this.shareUrlInput = document.getElementById('shareUrlInput');
    this.copyLinkBtn = document.getElementById('copyLinkBtn');
    this.shareWebBtn = document.getElementById('shareWebBtn');
  }

  setupListeners() {
    if (this.downloadBtn) {
      this.downloadBtn.addEventListener('click', () => {
        this.downloadQrImage();
      });
    }
    if (this.copyLinkBtn) {
      this.copyLinkBtn.addEventListener('click', () => {
        this.copyWebLink();
      });
    }
    if (this.shareWebBtn) {
      this.shareWebBtn.addEventListener('click', () => {
        this.shareWebLink();
      });
    }
  }

  getWebUrl() {
    return window.location.origin && window.location.origin !== 'null' && !window.location.origin.includes('file://') 
      ? window.location.href 
      : 'https://edukasiq-kkn.vercel.app';
  }

  renderQrCode() {
    if (typeof QRious === 'undefined' || !this.qrCanvas) return;

    const url = this.getWebUrl();
    if (this.shareUrlInput) {
      this.shareUrlInput.value = url;
    }

    if (!this.qriousInstance) {
      this.qriousInstance = new QRious({
        element: this.qrCanvas,
        size: 240,
        level: 'H', // High error correction agar tetap terbaca dengan jernih
        value: url,
        foreground: '#0F172A',
        background: '#FFFFFF'
      });
    } else {
      this.qriousInstance.value = url;
    }
  }

  /**
   * Fitur 1: Mengunduh Gambar QR Code PNG Bersih & Resolusi Tinggi
   */
  downloadQrImage() {
    if (!this.qrCanvas) return;

    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    // Resolusi tinggi bersih (500 x 580 px)
    const width = 500;
    const height = 580;
    canvas.width = width;
    canvas.height = height;

    // 1. Latar belakang putih bersih
    ctx.fillStyle = '#FFFFFF';
    this.roundRect(ctx, 0, 0, width, height, 32, true, false);

    // 2. Gambar bingkai tipis elegan
    ctx.lineWidth = 12;
    ctx.strokeStyle = '#00F2FE';
    this.roundRect(ctx, 12, 12, width - 24, height - 24, 24, false, true);

    // 3. Gambar QR Code di tengah
    const qrImage = new Image();
    qrImage.src = this.qrCanvas.toDataURL('image/png');
    qrImage.onload = () => {
      const qrSize = 360;
      const qrX = (width - qrSize) / 2;
      const qrY = 60;
      
      ctx.drawImage(qrImage, qrX, qrY, qrSize, qrSize);

      // 4. Teks Nama Web di bawah QR Code
      ctx.fillStyle = '#0F172A';
      ctx.font = '800 32px "Outfit", sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('EdukasiQ', width / 2, 475);

      ctx.fillStyle = '#64748b';
      ctx.font = '700 18px "Plus Jakarta Sans", sans-serif';
      ctx.fillText('Scan untuk Wawasan Ilmu Baru', width / 2, 515);

      // 5. Unduh File Gambar PNG
      const link = document.createElement('a');
      link.download = `QR-Code-EdukasiQ-${Date.now()}.png`;
      link.href = canvas.toDataURL('image/png');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      this.showToast('✅ Gambar QR Code Berhasil Diunduh! Siap Disebarkan!');
      this.triggerConfetti();
    };
  }

  /**
   * Fitur 2: Menyalin Tautan Link Website ke Clipboard
   */
  copyWebLink() {
    const url = this.getWebUrl();
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(url).then(() => {
        this.showToast('📋 Link web berhasil disalin! Siap ditempel & disebar!');
        this.triggerConfetti();
      }).catch(() => {
        this.fallbackCopyText(url);
      });
    } else {
      this.fallbackCopyText(url);
    }
  }

  fallbackCopyText(text) {
    if (this.shareUrlInput) {
      this.shareUrlInput.select();
      try {
        document.execCommand('copy');
        this.showToast('📋 Link web berhasil disalin! Siap ditempel & disebar!');
        this.triggerConfetti();
      } catch (err) {
        prompt('Salin link berikut secara manual:', text);
      }
    }
  }

  /**
   * Fitur 3: Membagikan Langsung ke WhatsApp / Sosial Media
   */
  shareWebLink() {
    const url = this.getWebUrl();
    const title = 'EdukasiQ - Wawasan Baru Setiap Scan';
    const text = '💡 Yuk scan & dapatkan ilmu pengetahuan baru yang mendidik serta terverifikasi setiap hari di EdukasiQ!';

    if (navigator.share) {
      navigator.share({
        title: title,
        text: text,
        url: url
      }).then(() => {
        this.showToast('✨ Terima kasih telah membagikan wawasan EdukasiQ!');
        this.triggerConfetti();
      }).catch((e) => {
        console.log('Share error or cancelled:', e);
      });
    } else {
      // Fallback: Langsung buka WhatsApp Share di browser/desktop
      const waUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(text + ' ' + url)}`;
      window.open(waUrl, '_blank');
      this.showToast('💬 Membuka WhatsApp untuk membagikan wawasan!');
      this.triggerConfetti();
    }
  }

  roundRect(ctx, x, y, width, height, radius, fill, stroke) {
    if (typeof radius === 'undefined') radius = 5;
    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.lineTo(x + width - radius, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
    ctx.lineTo(x + width, y + height - radius);
    ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
    ctx.lineTo(x + radius, y + height);
    ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
    ctx.lineTo(x, y + radius);
    ctx.quadraticCurveTo(x, y, x + radius, y);
    ctx.closePath();
    if (fill) ctx.fill();
    if (stroke) ctx.stroke();
  }

  showToast(message) {
    if (window.edukasiApp && typeof window.edukasiApp.showToast === 'function') {
      window.edukasiApp.showToast(message);
    } else {
      alert(message);
    }
  }

  triggerConfetti() {
    if (typeof confetti === 'function') {
      try { confetti({ particleCount: 60, spread: 60, origin: { y: 0.7 } }); } catch(e){}
    }
  }
}

const qrStudio = new QrStudio();
if (typeof window !== 'undefined') {
  window.qrStudio = qrStudio;
}
