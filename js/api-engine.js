/**
 * ================================================
 * EdukasiQ — Multi-Source Live Knowledge Engine
 * ================================================
 * Mengambil wawasan dari 6 API publik gratis secara bergiliran:
 *  1. Wikipedia Bahasa Indonesia
 *  2. NASA APOD (Astronomi Harian)
 *  3. Open Trivia DB (Fun Facts & Trivia)
 *  4. Numbers API (Fakta Angka & Tanggal)
 *  5. Quotable (Kutipan Inspiratif Tokoh Dunia)
 *  6. Wikidata (Fakta Terstruktur)
 *
 * Semua konten bahasa Inggris diterjemahkan otomatis ke
 * Bahasa Indonesia via MyMemory API (gratis, tanpa key).
 *
 * Jika semua sumber online gagal → fallback ke data lokal.
 */

class ApiEngine {
  constructor() {
    // Rotasi sumber: setiap klik berpindah ke sumber berikutnya
    this.sources = [
      'wikipedia',
      'nasa',
      'trivia',
      'numbers',
      'quotable',
      'wikidata',
    ];
    this.currentSourceIndex = 0;

    // Pre-fetch queue: selalu siapkan konten berikutnya di background
    this.prefetchQueue = [];
    this.MAX_QUEUE_SIZE = 3;
    this.isFetching = false;

    // Tracking sumber yang gagal agar skip
    this.failedSources = new Set();

    // Cache terjemahan agar tidak double-request
    this.translationCache = new Map();

    console.log('🌐 EdukasiQ API Engine siap — 6 sumber live aktif!');
  }

  /* =============================================
     ROUTING UTAMA
     ============================================= */

  async fetchNextFact() {
    const totalSources = this.sources.length;
    let attempts = 0;

    while (attempts < totalSources) {
      const sourceName = this.sources[this.currentSourceIndex];
      this.currentSourceIndex = (this.currentSourceIndex + 1) % totalSources;
      attempts++;

      try {
        const fact = await this.fetchFromSource(sourceName);
        if (fact) {
          this.failedSources.delete(sourceName);
          return fact;
        }
      } catch (e) {
        console.warn(`[ApiEngine] Sumber "${sourceName}" gagal:`, e.message);
        this.failedSources.add(sourceName);
      }
    }

    return null;
  }

  async fetchFromSource(sourceName) {
    switch (sourceName) {
      case 'wikipedia': return await this.fetchFromWikipedia();
      case 'nasa':      return await this.fetchFromNasa();
      case 'trivia':    return await this.fetchFromTrivia();
      case 'numbers':   return await this.fetchFromNumbers();
      case 'quotable':  return await this.fetchFromQuotable();
      case 'wikidata':  return await this.fetchFromWikidata();
      default:          return null;
    }
  }

  /* =============================================
     PRE-FETCH QUEUE SYSTEM
     ============================================= */

  async fillPrefetchQueue() {
    if (this.isFetching) return;
    if (this.prefetchQueue.length >= this.MAX_QUEUE_SIZE) return;

    this.isFetching = true;
    try {
      while (this.prefetchQueue.length < this.MAX_QUEUE_SIZE) {
        const fact = await this.fetchNextFact();
        if (fact) {
          this.prefetchQueue.push(fact);
        } else {
          break;
        }
      }
    } finally {
      this.isFetching = false;
    }
  }

  async getNextFact() {
    if (this.prefetchQueue.length > 0) {
      const fact = this.prefetchQueue.shift();
      this.fillPrefetchQueue();
      return fact;
    }
    const fact = await this.fetchNextFact();
    this.fillPrefetchQueue();
    return fact;
  }

  /* =============================================
     SUMBER 1: WIKIPEDIA BAHASA INDONESIA
     ============================================= */

  async fetchFromWikipedia(retries = 3) {
    for (let i = 0; i < retries; i++) {
      try {
        const res = await this._fetch(
          'https://id.wikipedia.org/api/rest_v1/page/random/summary',
          { headers: { Accept: 'application/json' } }
        );
        const data = await res.json();

        const extract = (data.extract || '').trim();
        if (extract.length < 150 || data.type === 'disambiguation' || !data.title) continue;

        const firstSentence = extract.split(/\.\s+/)[0] + '.';
        const shortSummary = firstSentence.length > 220
          ? firstSentence.substring(0, 217) + '...'
          : firstSentence;

        return {
          id: `wiki-${data.pageid}-${Date.now()}`,
          sourceLabel: 'Wikipedia Indonesia',
          sourceIcon: '📖',
          sourceColor: '#3b82f6',
          categoryName: data.description || 'Ensiklopedia',
          title: data.title,
          shortSummary,
          fullExplanation: extract,
          funFact: 'Artikel ini berasal dari Wikipedia Bahasa Indonesia — ensiklopedia bebas terbesar di dunia yang dapat diverifikasi dan disunting oleh siapa saja secara terbuka.',
          source: 'Wikipedia Indonesia',
          sourceUrl: data.content_urls?.desktop?.page
            || `https://id.wikipedia.org/wiki/${encodeURIComponent(data.title)}`,
          isLive: true,
          quiz: [],
        };
      } catch (e) {
        // retry
      }
    }
    return null;
  }

  /* =============================================
     SUMBER 2: NASA APOD
     ============================================= */

  async fetchFromNasa() {
    try {
      const res = await this._fetch(
        'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=1'
      );
      const arr = await res.json();
      const data = Array.isArray(arr) ? arr[0] : arr;

      if (!data || !data.explanation || data.media_type !== 'image') return null;

      const [titleID, explainID] = await Promise.all([
        this.translate(data.title),
        this.translate(data.explanation),
      ]);

      const firstSentence = explainID.split(/\.\s+/)[0] + '.';
      const shortSummary = firstSentence.length > 220
        ? firstSentence.substring(0, 217) + '...'
        : firstSentence;

      return {
        id: `nasa-${data.date}-${Date.now()}`,
        sourceLabel: 'NASA APOD',
        sourceIcon: '🚀',
        sourceColor: '#f97316',
        categoryName: 'Astronomi & Luar Angkasa',
        title: titleID,
        shortSummary,
        fullExplanation: explainID,
        funFact: `Foto ini dipilih langsung oleh astronom NASA sebagai "Astronomy Picture of the Day" pada ${data.date}. Kredit: ${data.copyright || 'NASA / Domain Publik'}.`,
        source: `NASA APOD — ${data.date}`,
        sourceUrl: `https://apod.nasa.gov/apod/astropix.html`,
        imageUrl: data.url,
        isLive: true,
        quiz: [],
      };
    } catch (e) {
      return null;
    }
  }

  /* =============================================
     SUMBER 3: OPEN TRIVIA DB
     ============================================= */

  async fetchFromTrivia() {
    try {
      const categories = [17, 18, 19, 22, 23, 30];
      const cat = categories[Math.floor(Math.random() * categories.length)];

      const res = await this._fetch(
        `https://opentdb.com/api.php?amount=1&category=${cat}&type=multiple&encode=url3986`
      );
      const json = await res.json();

      if (json.response_code !== 0 || !json.results?.length) return null;

      const item = json.results[0];
      const decode = (s) => decodeURIComponent(s);

      const rawQ       = decode(item.question);
      const rawCat     = decode(item.category);
      const correct    = decode(item.correct_answer);
      const incorrects = item.incorrect_answers.map(decode);
      const allOpts    = [...incorrects, correct].sort(() => Math.random() - 0.5);

      const [questionID, correctID, catID, ...optsID] = await Promise.all([
        this.translate(rawQ),
        this.translate(correct),
        this.translate(rawCat),
        ...allOpts.map(o => this.translate(o)),
      ]);

      const correctIdx = optsID.indexOf(correctID) >= 0
        ? optsID.indexOf(correctID)
        : optsID.findIndex((_, i) => allOpts[i] === correct);

      const diffLabel = item.difficulty === 'easy' ? 'mudah' : item.difficulty === 'medium' ? 'menengah' : 'sulit';

      return {
        id: `trivia-${Date.now()}`,
        sourceLabel: 'Open Trivia DB',
        sourceIcon: '🎯',
        sourceColor: '#8b5cf6',
        categoryName: catID,
        title: questionID,
        shortSummary: `Pertanyaan Trivia: ${questionID.length > 180 ? questionID.substring(0, 177) + '...' : questionID}`,
        fullExplanation: `${questionID}\n\nPilihan jawaban:\n${optsID.map((o, i) => `${i + 1}. ${o}`).join('\n')}\n\n✅ Jawaban benar: **${correctID}**`,
        funFact: `Fakta dari Open Trivia DB — database trivia komunitas global dengan ratusan ribu pertanyaan terverifikasi. Tingkat kesulitan: ${diffLabel}.`,
        source: `Open Trivia DB — ${rawCat}`,
        sourceUrl: 'https://opentdb.com/',
        isLive: true,
        quiz: optsID.length >= 4 ? [{
          question: questionID,
          options: optsID,
          correctAnswer: correctIdx >= 0 ? correctIdx : 0,
          explanation: `Jawaban benar: **${correctID}**. Pertanyaan ini dikategorikan sebagai tingkat ${diffLabel}.`,
        }] : [],
      };
    } catch (e) {
      return null;
    }
  }

  /* =============================================
     SUMBER 4: NUMBERS API
     ============================================= */

  async fetchFromNumbers() {
    try {
      const now   = new Date();
      const month = now.getMonth() + 1;
      const day   = now.getDate();
      const useDate = Math.random() > 0.5;

      let rawUrl, typeLabel;
      if (useDate) {
        rawUrl    = `http://numbersapi.com/${month}/${day}/date?json`;
        typeLabel = `${day}/${month}`;
      } else {
        const num = Math.floor(Math.random() * 1000) + 1;
        rawUrl    = `http://numbersapi.com/${num}/trivia?json`;
        typeLabel = `Angka ${num}`;
      }

      const proxyUrl = `https://corsproxy.io/?${encodeURIComponent(rawUrl)}`;
      const res  = await this._fetch(proxyUrl);
      const data = await res.json();

      if (!data.text) return null;

      const textID = await this.translate(data.text);

      return {
        id: `numbers-${data.number}-${Date.now()}`,
        sourceLabel: 'Numbers API',
        sourceIcon: '🔢',
        sourceColor: '#10b981',
        categoryName: useDate ? 'Sejarah & Tanggal' : 'Matematika & Sains',
        title: useDate ? `Fakta Sejarah Hari Ini (${typeLabel})` : `Fakta Unik tentang Angka ${data.number}`,
        shortSummary: textID.length > 220 ? textID.substring(0, 217) + '...' : textID,
        fullExplanation: `${textID}\n\nAngka dan tanggal menyimpan kisah tersembunyi yang membentuk peradaban manusia. Setiap hari dalam kalender adalah jendela menuju sejarah dunia.`,
        funFact: 'Fakta ini berasal dari Numbers API — database fakta numerik & sejarah tanggal yang dikembangkan oleh komunitas open source global.',
        source: 'Numbers API',
        sourceUrl: 'http://numbersapi.com/',
        isLive: true,
        quiz: [],
      };
    } catch (e) {
      return null;
    }
  }

  /* =============================================
     SUMBER 5: QUOTABLE
     ============================================= */

  async fetchFromQuotable(retries = 3) {
    for (let i = 0; i < retries; i++) {
      try {
        const tags = ['wisdom', 'inspirational', 'science', 'education', 'knowledge', 'philosophy'];
        const tag  = tags[Math.floor(Math.random() * tags.length)];

        const res  = await this._fetch(
          `https://api.quotable.kurokeita.dev/api/quotes/random?tags=${tag}`
        );
        const data = await res.json();

        const quote = Array.isArray(data?.data) ? data.data[0] : (data?.data || data);
        if (!quote?.content || !quote?.author) continue;

        const rawContent = quote.content;
        const rawAuthor  = typeof quote.author === 'object' ? (quote.author.name || 'Anonim') : (quote.author || 'Anonim');
        const rawTags    = Array.isArray(quote.tags) ? quote.tags.join(', ') : '';

        const contentID = await this.translate(rawContent);

        return {
          id: `quote-${Date.now()}`,
          sourceLabel: 'Quotable',
          sourceIcon: '💬',
          sourceColor: '#ec4899',
          categoryName: 'Inspirasi & Kebijaksanaan',
          title: `"${contentID}"`,
          shortSummary: contentID.length > 220 ? contentID.substring(0, 217) + '...' : contentID,
          fullExplanation: `"${contentID}"\n\n— ${rawAuthor}\n\nKutipan ini mencerminkan kebijaksanaan yang telah menginspirasi jutaan orang di seluruh dunia.${rawTags ? ` Kategori: ${rawTags}.` : ''}`,
          funFact: `Kutipan ini diucapkan oleh **${rawAuthor}** — tokoh berpengaruh yang kata-katanya terus menginspirasi generasi hingga hari ini.`,
          source: `Quotable — ${rawAuthor}`,
          sourceUrl: 'https://github.com/lukePeavey/quotable',
          isLive: true,
          quiz: [],
        };
      } catch (e) {
        // retry
      }
    }
    return null;
  }

  /* =============================================
     SUMBER 6: WIKIDATA
     ============================================= */

  async fetchFromWikidata() {
    try {
      const queries = [
        `SELECT ?label ?description WHERE {
          ?item wdt:P31 wd:Q16521 .
          ?item rdfs:label ?label FILTER (lang(?label) = "id") .
          OPTIONAL { ?item schema:description ?description FILTER (lang(?description) = "id") }
          FILTER(BOUND(?description))
        } ORDER BY RAND() LIMIT 1`,
        `SELECT ?label ?description WHERE {
          ?item wdt:P31 wd:Q5 .
          ?item wdt:P106 wd:Q901 .
          ?item rdfs:label ?label FILTER (lang(?label) = "id") .
          OPTIONAL { ?item schema:description ?description FILTER (lang(?description) = "id") }
          FILTER(BOUND(?description))
        } ORDER BY RAND() LIMIT 1`,
        `SELECT ?label ?description WHERE {
          ?item wdt:P31 wd:Q3624078 .
          ?item rdfs:label ?label FILTER (lang(?label) = "id") .
          OPTIONAL { ?item schema:description ?description FILTER (lang(?description) = "id") }
          FILTER(BOUND(?description))
        } ORDER BY RAND() LIMIT 1`,
      ];

      const query = queries[Math.floor(Math.random() * queries.length)];
      const url   = `https://query.wikidata.org/sparql?query=${encodeURIComponent(query)}&format=json`;

      const res  = await this._fetch(url, { headers: { Accept: 'application/sparql-results+json' } }, 10000);
      const json = await res.json();

      const bindings = json?.results?.bindings;
      if (!bindings?.length) return null;

      const item  = bindings[0];
      const label = item.label?.value;
      const desc  = item.description?.value;

      if (!label || !desc || desc.length < 20) return null;

      return {
        id: `wikidata-${Date.now()}`,
        sourceLabel: 'Wikidata',
        sourceIcon: '🌐',
        sourceColor: '#06b6d4',
        categoryName: 'Pengetahuan Terstruktur',
        title: label,
        shortSummary: desc.length > 220 ? desc.substring(0, 217) + '...' : desc,
        fullExplanation: `**${label}** — ${desc}\n\nData ini bersumber dari Wikidata, database pengetahuan terstruktur terbuka yang mendukung Wikipedia, Google Knowledge Graph, dan ratusan aplikasi global lainnya. Informasi ini dapat diverifikasi secara bebas oleh siapa saja.`,
        funFact: 'Wikidata adalah proyek saudara Wikipedia yang menyimpan lebih dari 100 juta pernyataan fakta terstruktur dalam format yang dapat dibaca mesin maupun manusia.',
        source: 'Wikidata — Wikimedia Foundation',
        sourceUrl: 'https://www.wikidata.org/',
        isLive: true,
        quiz: [],
      };
    } catch (e) {
      return null;
    }
  }

  /* =============================================
     PENERJEMAH OTOMATIS — MyMemory API
     ============================================= */

  async translate(text) {
    if (!text) return text;
    if (this.isLikelyIndonesian(text)) return text;

    const cacheKey = text.substring(0, 120);
    if (this.translationCache.has(cacheKey)) {
      return this.translationCache.get(cacheKey);
    }

    try {
      const MAX_CHARS = 460;
      let result;

      if (text.length > MAX_CHARS) {
        const sentences = text.match(/[^.!?]+[.!?]*/g) || [text];
        const translated = [];
        let chunk = '';

        for (const sentence of sentences) {
          if ((chunk + sentence).length < MAX_CHARS) {
            chunk += sentence;
          } else {
            if (chunk.trim()) translated.push(await this._translateChunk(chunk.trim()));
            chunk = sentence;
          }
        }
        if (chunk.trim()) translated.push(await this._translateChunk(chunk.trim()));
        result = translated.join(' ');
      } else {
        result = await this._translateChunk(text);
      }

      this.translationCache.set(cacheKey, result);
      return result;
    } catch (e) {
      console.warn('[ApiEngine] Terjemahan gagal:', e.message);
      return text;
    }
  }

  async _translateChunk(text) {
    if (!text || text.length < 3) return text;
    const url  = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=en|id`;
    const res  = await this._fetch(url, {}, 6000);
    const json = await res.json();

    const translated = json?.responseData?.translatedText;
    if (!translated || translated === text) return text;
    if (translated.toLowerCase().includes('mymemory warning')) return text;

    return translated;
  }

  isLikelyIndonesian(text) {
    const idWords = [
      'dan', 'yang', 'ini', 'itu', 'adalah', 'dengan', 'untuk', 'dari',
      'di', 'ke', 'pada', 'oleh', 'atau', 'tidak', 'dapat', 'akan',
      'juga', 'ada', 'telah', 'bisa', 'lebih', 'dalam', 'merupakan',
      'serta', 'namun', 'hingga', 'karena', 'ketika', 'setelah',
    ];
    const words   = text.toLowerCase().split(/\s+/);
    const idCount = words.filter(w => idWords.includes(w)).length;
    return idCount >= 3 || (words.length > 5 && idCount / words.length >= 0.08);
  }

  /* =============================================
     HELPER FETCH DENGAN TIMEOUT
     ============================================= */

  async _fetch(url, options = {}, timeoutMs = 8000) {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), timeoutMs);
    try {
      const res = await fetch(url, { ...options, signal: controller.signal });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return res;
    } finally {
      clearTimeout(timer);
    }
  }

  /* =============================================
     STATUS & DIAGNOSTIK
     ============================================= */

  getStatus() {
    return {
      currentSource: this.sources[this.currentSourceIndex],
      queueSize: this.prefetchQueue.length,
      failedSources: [...this.failedSources],
      translationCacheSize: this.translationCache.size,
    };
  }
}

// Inisialisasi global
window.apiEngine = new ApiEngine();

// Pre-fetch di background saat halaman load
document.addEventListener('DOMContentLoaded', () => {
  if (window.apiEngine) {
    setTimeout(() => window.apiEngine.fillPrefetchQueue(), 1500);
  }
});
