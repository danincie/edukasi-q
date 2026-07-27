/**
 * Basis Data Fakta Edukatif - EdukasiQ
 * Proker KKN - Wawasan Baru Setiap Scan!
 * Data terverifikasi dan bergizi ilmu untuk generasi muda & khalayak umum.
 */

var FACTS_DATABASE = [
  // ==========================================
  // KATEGORI 1: SAINS & TEKNOLOGI
  // ==========================================
  {
    id: 1,
    title: "Air di Bumi Lebih Tua dari Matahari Kita!",
    category: "sains",
    categoryName: "Sains & Teknologi",
    icon: "💧",
    shortSummary: "Hampir setengah dari air di samudra dan minuman kita sebenarnya terbentuk sebelum Tata Surya lahir.",
    fullExplanation: `Penelitian dari astrofisikawan menunjukkan bahwa sekitar 30% hingga 50% air di planet Bumi berasal dari es antarbintang yang sudah ada di awan gas jauh sebelum Matahari terbentuk (sekitar 4,6 miliar tahun lalu). 

Ketika tata surya kita baru berupa debu kosmik, molekul air (H2O) yang mengandung deuterium (hidrogen berat) telah berlayar melintasi alam semesta. Ini berarti setiap kali kita minum air putih, sebagian dari tetesan air tersebut berumur lebih dari 4,6 miliar tahun—lebih tua dari Matahari dan Bumi itu sendiri!`,
    funFact: "Secara harfiah, segelas air yang kamu minum hari ini pernah berputar di luar angkasa sebagai es antarbintang yang sangat dingin!",
    source: "NASA & Jurnal Science (University of Michigan Study)",
    quiz: [
      {
        question: "Berapa perkiraan usia air antarbintang yang ada di Bumi?",
        options: [
          "Lebih muda dari manusia purba",
          "Sekitar 1 juta tahun lalu",
          "Lebih tua dari Matahari (> 4,6 miliar tahun)",
          "Baru terbentuk saat dinosaurus punah"
        ],
        correctAnswer: 2,
        explanation: "Sekitar 30-50% air di Bumi berasal dari awan es antarbintang yang ada sebelum Matahari lahir pada 4,6 miliar tahun lalu."
      },
      {
        question: "Unsur kimia apa yang digunakan ilmuwan untuk melacak usia air kosmik?",
        options: [
          "Karbon-14",
          "Deuterium (Hidrogen Berat)",
          "Uranium",
          "Helium-3"
        ],
        correctAnswer: 1,
        explanation: "Ilmuwan melacak rasio deuterium (hidrogen berat) dibanding hidrogen biasa untuk mengetahui asal usul air kosmik."
      }
    ]
  },
  {
    id: 2,
    title: "Tardigrada: Hewan Super yang Bisa Hidup di Luar Angkasa",
    category: "sains",
    categoryName: "Sains & Teknologi",
    icon: "🔬",
    shortSummary: "Hewan mikroskopis berjuluk 'Beruang Air' ini bisa bertahan hidup di dalam vakum luar angkasa dan suhu ekstrem.",
    fullExplanation: `Tardigrada adalah organisme mikroskopis berkaki delapan yang berukuran sekitar 0,5 mm. Mereka dianggap sebagai salah satu makhluk paling tangguh di Bumi karena memiliki kemampuan luar biasa bernama *kriptobiosis*.

Dalam kondisi ekstrem, Tardigrada bisa mengeluarkan hampir seluruh air dari tubuhnya dan menggulung diri menjadi bola mati suri yang disebut 'tun'. Dalam kondisi ini, mereka mampu bertahan pada suhu absolut (-272°C), panas mendidih hingga 150°C, radiasi 1.000 kali lipat dari batas fatal manusia, bahkan bertahan di ruang hampa udara (vakum) luar angkasa selama berhari-hari tanpa pakaian pelindung!`,
    funFact: "Pada tahun 2007, misi satelit FOTON-M3 milik Badan Antariksa Eropa membawa Tardigrada ke luar angkasa terbuka, dan mereka kembali ke Bumi dalam keadaan hidup!",
    source: "European Space Agency (ESA) & Nature Biology",
    quiz: [
      {
        question: "Apa julukan populer untuk makhluk mikroskopis Tardigrada?",
        options: [
          "Laba-laba Besi",
          "Beruang Air (Water Bear)",
          "Kutu Udara",
          "Ulat Kristal"
        ],
        correctAnswer: 1,
        explanation: "Tardigrada sering dinamakan 'Beruang Air' (Water Bear) atau 'Anak Babi Lumut' karena bentuk tubuh dan cara jalannya."
      },
      {
        question: "Apa nama mekanisme mati suri yang dilakukan Tardigrada saat kondisi ekstrem?",
        options: [
          "Hibernasi",
          "Fotosintesis",
          "Kriptobiosis",
          "Metamorfosis"
        ],
        correctAnswer: 2,
        explanation: "Kriptobiosis adalah kondisi di mana aktivitas metabolisme melambat hingga hampir nol untuk bertahan dari kondisi lingkungan yang mematikan."
      }
    ]
  },
  {
    id: 3,
    title: "Mengapa Langit Berwarna Biru saat Siang dan Merah saat Senja?",
    category: "sains",
    categoryName: "Sains & Teknologi",
    icon: "🌅",
    shortSummary: "Fenomena fisika bernama 'Hamburan Rayleigh' menjelaskan mengapa warna langit berubah secara drastis dari siang ke sore hari.",
    fullExplanation: `Cahaya Matahari tampak putih, tetapi sebenarnya terdiri dari seluruh warna pelangi. Ketika cahaya ini memasuki atmosfer Bumi, ia menabrak molekul gas nitrogen dan oksigen di udara. 

Warna dengan panjang gelombang pendek seperti biru dan ungu dihamburkan ke segala arah oleh molekul udara tersebut jauh lebih efektif dibanding warna merah. Karena mata manusia lebih sensitif terhadap warna biru daripada ungu, langit siang hari terlihat biru indah. Namun, saat senja, Matahari berada di posisi rendah sehingga cahayanya harus menempuh atmosfer yang lebih tebal. Warna biru habis terhambur sebelum sampai ke mata kita, menyisakan warna merah dan jingga yang memiliki gelombang lebih panjang!`,
    funFact: "Di Planet Mars, kebalikannya yang terjadi! Karena atmosfer Mars tipis dan penuh debu kaya zat besi, langit siangnya berwarna merah bata/kecokelatan, sedangkan saat matahari terbenam warnanya membiru!",
    source: "NASA Science & National Geographic",
    quiz: [
      {
        question: "Fenomena fisika apa yang menyebabkan cahaya biru terhambur di atmosfer Bumi?",
        options: [
          "Efek Doppler",
          "Hamburan Rayleigh (Rayleigh Scattering)",
          "Pembiasan Newton",
          "Efek Rumah Kaca"
        ],
        correctAnswer: 1,
        explanation: "Hamburan Rayleigh adalah penghamburan cahaya oleh partikel yang jauh lebih kecil dari panjang gelombang cahaya itu sendiri."
      },
      {
        question: "Apa warna langit saat matahari terbenam (sunset) di planet Mars?",
        options: [
          "Merah menyala",
          "Hijau zamrud",
          "Biru redup (kebalikan dari Bumi)",
          "Hitam kelam"
        ],
        correctAnswer: 2,
        explanation: "Debu di atmosfer Mars menghamburkan cahaya merah saat siang, sehingga menyisakan spektrum cahaya biru di sekitar matahari terbenam."
      }
    ]
  },
  {
    id: 4,
    title: "DNA Manusia 50% Identik dengan Buah Pisang!",
    category: "sains",
    categoryName: "Sains & Teknologi",
    icon: "🍌",
    shortSummary: "Secara genetika dasar, seluruh makhluk hidup di Bumi terhubung oleh 'bahasa kode' DNA yang sangat mirip.",
    fullExplanation: `Ketika ilmuwan memetakan genom manusia, mereka menemukan fakta mengejutkan: sekitar 50% hingga 60% dari gen kita memiliki kemiripan struktur fungsional dengan buah pisang! 

Mengapa bisa begitu? Karena pada tingkat seluler yang paling dasar, manusia dan tanaman pisang sama-sama melakukan fungsi vital kehidupan seperti mereplikasi DNA, membelah sel, menghasilkan energi (ATP), dan memperbaiki kerusakan sel. Gen-gen 'pengatur kehidupan dasar' inilah yang diwariskan dari nenek moyang organisme bersel tunggal ribuan juta tahun lalu dan tetap dilestarikan di hampir seluruh makhluk hidup.`,
    funFact: "Selain pisang, DNA manusia juga 98,8% mirip dengan simpanse, 85% mirip dengan mencit (tikus laboratorium), dan 60% mirip dengan lalat buah!",
    source: "National Human Genome Research Institute (NHGRI) & Nature Genetics",
    quiz: [
      {
        question: "Mengapa DNA manusia bisa mirip hingga 50% dengan buah pisang?",
        options: [
          "Karena manusia berevolusi langsung dari pohon pisang",
          "Karena kita memiliki fungsi seluler dasar yang sama (membelah sel, menghasilkan energi)",
          "Karena pisang menyerap DNA manusia saat dimakan",
          "Itu hanyalah mitos laboratorium"
        ],
        correctAnswer: 1,
        explanation: "Semua organisme eukariota berbagi gen-gen housekeeping (pengatur fungsi dasar kehidupan seluler) dari nenek moyang seluler yang sama."
      },
      {
        question: "Berapa persentase kemiripan genetik antara manusia dengan simpanse?",
        options: [
          "Sekitar 50%",
          "Sekitar 75%",
          "Sekitar 98,8%",
          "100% sama persis"
        ],
        correctAnswer: 2,
        explanation: "Simpanse dan bonobo adalah kerabat biologis terdekat manusia dengan kesamaan DNA mencapai 98,8%."
      }
    ]
  },
  {
    id: 5,
    title: "Graphene: Material Setipis Atom yang 200 Kali Lebih Kuat dari Baja!",
    category: "sains",
    categoryName: "Sains & Teknologi",
    icon: "🛡️",
    shortSummary: "Ditemukan dari serpihan pensil biasa, material ini berpotensi merevolusi teknologi elektronik dan kedirgantaraan masa depan.",
    fullExplanation: `Graphene (grafena) adalah lapisan karbon tunggal yang disusun dalam kisi segi enam mirip sarang lebah dengan ketebalan hanya 1 atom! Material super ini ditemukan secara tidak sengaja oleh dua ilmuwan Universitas Manchester tahun 2004 hanya dengan menggunakan selotip untuk mengelupas lapisan grafit dari isi pensil biasa.

Meskipun sangat ringan dan transparan, hubungan ikatan atom karbon dalam graphene menjadikannya 200 kali lebih kuat dibanding baja terkuat dengan ketebalan yang sama. Selain itu, graphene adalah penghantar listrik dan panas terbaik yang pernah diketahui manusia, jauh mengalahkan tembaga!`,
    funFact: "Jika kamu membuat lembaran graphene setipis plastik pembungkus makanan, kamu bisa meletakkan seekor gajah dewasa di atas sebuah pensil yang meruncing di atas lembaran tersebut, dan lembarannya tidak akan tembus atau robek!",
    source: "Nobel Prize in Physics 2010 (Geim & Novoselov) & ACS Nano",
    quiz: [
      {
        question: "Berapa ketebalan dari satu lembar murni Graphene (Grafena)?",
        options: [
          "Setipis sehelai rambut manusia",
          "1 milimeter",
          "Hanya 1 atom karbon",
          "1 sentimeter"
        ],
        correctAnswer: 2,
        explanation: "Graphene adalah material dwimatra (2D) pertama di dunia dengan ketebalan tepat satu lapisan atom karbon."
      },
      {
        question: "Dari benda sehari-hari apa ilmuwan pertama kali mengisolasi Graphene?",
        options: [
          "Kaca jendela",
          "Isi pensil (grafit) dengan selotip",
          "Batu bara dibakar",
          "Minyak bumi yang disuling"
        ],
        correctAnswer: 1,
        explanation: "Andre Geim dan Konstantin Novoselov memenangkan Hadiah Nobel setelah berhasil mengisolasi graphene menggunakan metode selotip pada grafit pensil."
      }
    ]
  },
  {
    id: 6,
    title: "Kecerdasan Buatan (AI) & Komputasi Kuantum: Revolusi Masa Depan",
    category: "sains",
    categoryName: "Sains & Teknologi",
    icon: "🤖",
    shortSummary: "Komputer kuantum mampu memecahkan perhitungan rumit dalam hitungan detik yang butuh ribuan tahun bagi superkomputer biasa.",
    fullExplanation: `Komputer tradisional yang kita gunakan sehari-hari memproses informasi menggunakan 'bit' yang bernilai 0 ATAU 1. Namun, Komputer Kuantum memanfaatkan prinsip fisika kuantum superposisi dan keterikatan (entanglement), menggunakan 'qubit' yang dapat bernilai 0, 1, ATAU KEDUANYA secara bersamaan!

Dengan kecepatan komputasi yang luar biasa ini, dipadukan dengan Kecerdasan Buatan (AI), ilmuwan kini dapat merancang obat-obatan baru dalam hitungan hari, memodelkan perubahan iklim secara presisi, dan memecahkan teka-teki genetika yang sebelumnya dianggap mustahil dipetakan.`,
    funFact: "Pada tahun 2019, komputer kuantum Sycamore milik Google menyelesaikan perhitungan matematika kompleks hanya dalam 200 detik—tugas yang diperkirakan butuh waktu 10.000 tahun bagi superkomputer tercepat dunia saat itu!",
    source: "IBM Quantum & Google AI Research",
    quiz: [
      {
        question: "Apa nama satuan dasar pemrosesan informasi pada Komputer Kuantum?",
        options: [
          "Megabit",
          "Qubit (Quantum Bit)",
          "Terabyte",
          "Pixel"
        ],
        correctAnswer: 1,
        explanation: "Qubit (Quantum Bit) mampu berada dalam keadaan superposisi, yakni merepresentasikan nilai 0 dan 1 secara bersamaan."
      },
      {
        question: "Apa keunggulan utama paduan AI dan Komputasi Kuantum di dunia medis?",
        options: [
          "Menggantikan seluruh dokter di rumah sakit",
          "Merancang molekul obat baru dalam hitungan hari/jam",
          "Membuat rumah sakit tanpa listrik",
          "Menghilangkan rasa sakit secara gaib"
        ],
        correctAnswer: 1,
        explanation: "Komputasi kuantum memangkas waktu simulasi molekuler dari bertahun-tahun menjadi hanya hitungan hari untuk penemuan obat (drug discovery)."
      }
    ]
  },
  {
    id: 7,
    title: "Satu Sendok Bintang Neutron Beratnya Setara Gunung Everest!",
    category: "sains",
    categoryName: "Sains & Teknologi",
    icon: "⭐",
    shortSummary: "Bintang neutron adalah objek paling padat di alam semesta setelah lubang hitam.",
    fullExplanation: `Ketika sebuah bintang raksasa kehabisan bahan bakarnya dan meledak dalam peristiwa Supernova yang dahsyat, intinya dapat runtuh ke dalam dirinya sendiri dan membentuk Bintang Neutron. 

Bintang neutron memiliki diameter sangat kecil—hanya seukuran kota kecil (sekitar 20 kilometer)—tetapi massanya lebih besar dari Matahari kita! Karena kepadatannya yang sungguh di luar nalar manusia, satu sendok teh materi dari bintang neutron seberat sekitar 6 miliar ton di Bumi, setara dengan berat keseluruhan Gunung Everest atau populasi seluruh manusia di Bumi digabungkan!`,
    funFact: "Bintang neutron berputar sangat cepat! Beberapa jenis bintang neutron yang disebut 'Pulsar' dapat berputar pada porosnya hingga 716 kali dalam satu detik!",
    source: "NASA Astrophysics & ESA Science",
    quiz: [
      {
        question: "Berapa perkiraan berat 1 sendok teh materi dari Bintang Neutron di Bumi?",
        options: [
          "Sekitar 1 kilogram",
          "Sekitar 1 ton",
          "Sekitar 6 miliar ton (setara Gunung Everest)",
          "Tidak memiliki berat sama sekali"
        ],
        correctAnswer: 2,
        explanation: "Kepadatan bintang neutron begitu ekstrem sehingga 1 sendok teh materinya berbobot sekitar 6 miliar ton."
      },
      {
        question: "Apa nama peristiwa ledakan bintang raksasa yang melahirkan Bintang Neutron?",
        options: [
          "Gerhana Matahari",
          "Supernova",
          "Big Bang",
          "Aurora Borealis"
        ],
        correctAnswer: 1,
        explanation: "Supernova adalah ledakan bintang bermassa besar di akhir siklus hidupnya yang dapat menyisakan lubang hitam atau bintang neutron."
      }
    ]
  },

  // ==========================================
  // KATEGORI 2: SEJARAH & BUDAYA NUSANTARA
  // ==========================================
  {
    id: 8,
    title: "Candi Borobudur Dibangun Tanpa Menggunakan Semen atau Lem!",
    category: "sejarah",
    categoryName: "Sejarah & Budaya Nusantara",
    icon: "🏛️",
    shortSummary: "Monumen Buddha terbesar di dunia asal Jawa Tengah ini dirakit dengan teknik kuncian batu yang mahakarya.",
    fullExplanation: `Candi Borobudur di Magelang, Jawa Tengah, dibangun pada abad ke-8 hingga ke-9 Masehi oleh Dinasti Syailendra. Monumen megah ini tersusun dari sekitar 2 juta balok batu vulkanik dari sungai-sungai di sekitarnya.

Yang paling menakjubkan bagi para insinyur dunia adalah: Candi Borobudur dibangun tanpa menggunakan semen, mortar, atau perekat sama sekali! Para arsitek Nusantara masa itu menggunakan teknik penguncian batu bergaya 'ekor burung' (dovetail joint) dan kuncian takikan. Balok-balok batu dipahat sedemikian presisi sehingga saling mengunci satu sama lain, membuat candi ini tetap kokoh berdiri menahan gempa bumi dan letusan gunung berapi selama lebih dari 1.200 tahun!`,
    funFact: "Jika dilihat dari udara, bentuk keseluruhan Candi Borobudur menyerupai bunga teratai raksasa yang sedang mekar di atas bukit, melambangkan kesucian dalam ajaran Buddha.",
    source: "UNESCO World Heritage Centre & Balai Konservasi Borobudur",
    quiz: [
      {
        question: "Teknik arsitektur apa yang digunakan untuk menyatukan 2 juta blok batu Candi Borobudur tanpa semen?",
        options: [
          "Menggunakan lem getah pohon purba",
          "Teknik kuncian batu 'ekor burung' (dovetail joint)",
          "Menggunakan paku besi raksasa",
          "Melelehkan batu dengan api"
        ],
        correctAnswer: 1,
        explanation: "Arsitek kuno Nusantara memahat batu dengan sistem kuncian takikan dan ekor burung sehingga saling mengunci dengan sempurna."
      },
      {
        question: "Pada masa dinasti kerajaan apakah Candi Borobudur dibangun pada abad ke-8 Masehi?",
        options: [
          "Dinasti Majapahit",
          "Dinasti Syailendra",
          "Dinasti Sanjaya",
          "Dinasti Sriwijaya"
        ],
        correctAnswer: 1,
        explanation: "Borobudur dibangun pada masa keemasan Wangsa Syailendra di Kerajaan Medang (Mataram Kuno)."
      }
    ]
  },
  {
    id: 9,
    title: "Letusan Gunung Tambora 1815: Mengubah Iklim Seluruh Dunia!",
    category: "sejarah",
    categoryName: "Sejarah & Budaya Nusantara",
    icon: "🌋",
    shortSummary: "Letusan gunung di Pulau Sumbawa ini begitu dahsyat hingga menyebabkan 'Tahun Tanpa Musim Panas' di Eropa dan Amerika.",
    fullExplanation: `Pada April 1815, Gunung Tambora di Nusa Tenggara Barat meletus dengan kekuatan letusan terbesar yang pernah dicatat dalam sejarah peradaban manusia Modern (Volcanic Explosivity Index kelas 7). Letusan ini terdengar hingga Pulau Sumatra yang berjarak lebih dari 2.000 km!

Tambora menyemburkan sekitar 100 mil kubik abu dan gas sulfur dioksida ke lapisan stratosfer bumi. Tirai debu ini menutupi sinar Matahari di seluruh globe, menyebabkan anomali iklim global pada tahun 1816 yang dikenal sebagai 'Tahun Tanpa Musim Panas' (The Year Without a Summer). Di Eropa dan Amerika Utara, salju turun di bulan Juli, memicu gagal panen massal dan kelaparan dunia.`,
    funFact: "Karena terjebak di dalam rumah akibat cuaca dingin dan gelap di Swiss saat 'Tahun Tanpa Musim Panas' 1816, penulis Mary Shelley akhirnya menulis novel horor legendaris: Frankenstein!",
    source: "Smithsonian Institution Global Volcanism Program & BRIN",
    quiz: [
      {
        question: "Apa fenomena iklim global yang terjadi pada tahun 1816 akibat letusan Gunung Tambora?",
        options: [
          "Zaman Es Baru",
          "Tahun Tanpa Musim Panas (Year Without a Summer)",
          "Gelombang Panas Ekstrem 50°C",
          "Badai Gurun Pasir di Asia"
        ],
        correctAnswer: 1,
        explanation: "Gas sulfur dioksida dari Tambora memantulkan sinar matahari di stratosfer, menurunkan suhu bumi dan menyebabkan salju turun saat musim panas di Eropa dan Amerika."
      },
      {
        question: "Novel legendaris dunia apa yang tercipta karena penulisnya terjebak cuaca dingin akibat Tambora?",
        options: [
          "Harry Potter",
          "Frankenstein karya Mary Shelley",
          "Sherlock Holmes",
          "Dracula"
        ],
        correctAnswer: 1,
        explanation: "Mary Shelley menulis novel Frankenstein saat berlibur di Danau Jenewa, Swiss, karena cuaca luar ruangan sangat gelap dan dingin akibat dampak Tambora."
      }
    ]
  },
  {
    id: 10,
    title: "Kapal Pinisi: Mahakarya Pelaut Nusantara Tanpa Cetak Biru (Blue Print)",
    category: "sejarah",
    categoryName: "Sejarah & Budaya Nusantara",
    icon: "⛵",
    shortSummary: "Diakui oleh UNESCO, kapal layar tradisional suku Bugis-Makassar ini dirakit tanpa sketsa tertulis atau paku besi modern.",
    fullExplanation: `Kapal Pinisi adalah kapal layar tradisional kebanggaan pelaut suku Bugis dan Makassar dari Sulawesi Selatan yang telah berlayar menembus samudra dunia sejak berabad-abad lalu. Pada tahun 2017, seni pembuatan Kapal Pinisi resmi ditetapkan sebagai Warisan Budaya Takbenda Dunia oleh UNESCO.

Kehebatan luar biasa dari para pengrajin kapal di Bulukumba (Bira) adalah: mereka merakit kapal kayu berukuran raksasa ini sepenuhnya berdasarkan ingatan turun-temurun tanpa menggunakan sketsa, gambar arsitektur, atau cetak biru tertulis sama sekali! Pemasangan papan kayu disatukan menggunakan pasak kayu ulin berkualitas tinggi, bukan paku besi yang bisa berkarat terkena air laut.`,
    funFact: "Kapal Pinisi memiliki ciri khas 2 tiang layar utama dan 7 buah layar. Angka 7 ini melambangkan kemampuan pelaut Nusantara dalam mengarungi 7 samudra luas di dunia!",
    source: "UNESCO Intangible Cultural Heritage & Kemendikbudristek RI",
    quiz: [
      {
        question: "Suku Nusantara dari daerah manakah yang merupakan pencipta dan pelaut utama Kapal Pinisi?",
        options: [
          "Suku Dayak di Kalimantan",
          "Suku Bugis-Makassar di Sulawesi Selatan",
          "Suku Asmat di Papua",
          "Suku Minang di Sumatera Barat"
        ],
        correctAnswer: 1,
        explanation: "Suku Bugis dan Makassar dari Sulawesi Selatan (khususnya Bulukumba) terkenal sebagai pelaut ulung pembuat Kapal Pinisi."
      },
      {
        question: "Berapa jumlah layar tradisional yang menjadi ciri khas Kapal Pinisi?",
        options: [
          "3 layar",
          "5 layar",
          "7 layar (melambangkan 7 samudra)",
          "10 layar"
        ],
        correctAnswer: 2,
        explanation: "Dua tiang utama dan tujuh layar merupakan filosofi bahwa pelaut Nusantara mampu menyeberangi tujuh samudra di dunia."
      }
    ]
  },
  {
    id: 11,
    title: "Jalur Rempah Nusantara: Sejarah Nyata Penjelajahan Dunia",
    category: "sejarah",
    categoryName: "Sejarah & Budaya Nusantara",
    icon: "🌿",
    shortSummary: "Sebelum ada Jalur Sutra, pala dan cengkeh dari Maluku telah memicu era penjelajahan samudra oleh bangsa Eropa.",
    fullExplanation: `Berabad-abad sebelum era modern, Nusantara (khususnya Kepulauan Maluku seperti Banda dan Ternate) adalah satu-satunya sumber di planet Bumi yang menghasilkan pala, fuli, dan cengkeh. Pada abad ke-16, harga 1 kilogram pala di Eropa setara dengan harga 7 ekor sapi gemuk atau emas murni dengan berat yang sama!

Untuk mencari rahasia letak 'Kepulauan Rempah' (Spices Islands) Nusantara inilah bangsa Eropa seperti Portugis, Spanyol, Belanda, dan Inggris memulai Era Penjelajahan Samudra (Age of Discovery). Bahkan, pada tahun 1667, Inggris dan Belanda melakukan pertukaran pulau bersejarah melalui Perjanjian Breda: Inggris menyerahkan Pulau Run di Maluku (penghasil pala) kepada Belanda, dan sebagai gantinya Inggris mendapatkan Pulau Manhattan di Amerika dari Belanda (yang kini menjadi Kota New York)!`,
    funFact: "Pulau Manhattan (pusat perekonomian New York saat ini) dulunya ditukar oleh Belanda hanya demi mendapatkan Pulau Run di Maluku yang kaya akan rempah pala!",
    source: "Arsip Nasional RI & UNESCO Maritime Spice Routes",
    quiz: [
      {
        question: "Pulau apa di New York, Amerika Serikat, yang dulu ditukar dengan Pulau Run di Maluku dalam Perjanjian Breda 1667?",
        options: [
          "Pulau Hawaii",
          "Pulau Manhattan (New York)",
          "Pulau Alcatraz",
          "Pulau Miami"
        ],
        correctAnswer: 1,
        explanation: "Melalui Perjanjian Breda (1667), Inggris menukar Pulau Run di Kepulauan Banda dengan Pulau Manhattan di Amerika yang dikuasai Belanda."
      },
      {
        question: "Rempah-rempah apa yang pada abad abad pertengahan harganya setara dengan emas di Eropa?",
        options: [
          "Bawang merah dan bawang putih",
          "Pala dan cengkeh dari Maluku",
          "Cabai rawit dan jahe",
          "Daun salam dan serai"
        ],
        correctAnswer: 1,
        explanation: "Pala dan cengkeh dari Kepulauan Maluku sangat berharga sebagai pengawet makanan dan obat di masa dingin ekstrem Eropa."
      }
    ]
  },
  {
    id: 12,
    title: "Sistem Subak Bali: Filosofi Tri Hita Karana dalam Pertanian",
    category: "sejarah",
    categoryName: "Sejarah & Budaya Nusantara",
    icon: "🌾",
    shortSummary: "Lebih dari sekadar sistem irigasi sawah, Subak adalah organisasi sosial-keagamaan yang diakui UNESCO sebagai Warisan Dunia.",
    fullExplanation: `Subak yang kita lihat sebagai sawah terasering indah di Bali sebenarnya bukan sekadar teknik pengairan biasa. Subak adalah sistem manajemen air berbasis masyarakat adat yang telah berlangsung sejak abad ke-9 Masehi!

Sistem Subak berlandaskan filosofi Hindu Bali 'Tri Hita Karana', yaitu harmonisasi keharmonisan antara manusia dengan Tuhan (Parhyangan), manusia dengan sesama manusia (Pawongan), dan manusia dengan alam lingkungan (Palemahan). Melalui musyawarah adat di pura pengairan (Pura Subak), para petani membagikan air sawah secara adil dari sumber air pegunungan ke ribuan petak sawah tanpa ada konflik atau keserakahan, menjaga ekosistem tetap lestari selama seribu tahun.`,
    funFact: "Sistem irigasi Subak begitu efektif dalam mengendalikan hama secara alami tanpa pestisida kimia karena penggenangan dan pengeringan sawah dilakukan serentak sesuai kalender adat!",
    source: "UNESCO Cultural Landscape of Bali Province & Kementan RI",
    quiz: [
      {
        question: "Apa nama filosofi Bali yang menjadi landasan utama dalam sistem irigasi Subak?",
        options: [
          "Bhinneka Tunggal Ika",
          "Tri Hita Karana",
          "Gotong Royong",
          "Satu Nusa Satu Bangsa"
        ],
        correctAnswer: 1,
        explanation: "Tri Hita Karana adalah filosofi menjaga tiga keharmonisan hidup: dengan Tuhan, sesama manusia, dan alam semesta."
      },
      {
        question: "Sejak abad ke berapakah sistem irigasi Subak diperkirakan mulai berkembang di Bali?",
        options: [
          "Abad ke-19 (saat penjajahan Belanda)",
          "Abad ke-9 Masehi",
          "Tahun 1990",
          "Abad ke-20 Masehi"
        ],
        correctAnswer: 1,
        explanation: "Prasasti kuno menunjukkan bahwa sistem organisasi irigasi Subak telah ada di Bali sejak abad ke-9 Masehi."
      }
    ]
  },
  {
    id: 13,
    title: "Prasasti Kebon Kopi: Jejak Telapak Kaki Gajah Penguasa Tarumanagara",
    category: "sejarah",
    categoryName: "Sejarah & Budaya Nusantara",
    icon: "🐘",
    shortSummary: "Situs bersejarah di Bogor ini menyimpan pahatan telapak kaki gajah tunggangan Raja Purnawarman dari abad ke-5 Masehi.",
    fullExplanation: `Prasasti Kebon Kopi I (juga disebut Prasasti Tapak Gajah) ditemukan di Desa Ciaruteun Ilir, Cibungbulang, Bogor, Jawa Barat. Prasasti ini merupakan peninggalan Kerajaan Tarumanagara yang memerintah di barat Pulau Jawa sekitar abad ke-5 Masehi di bawah pimpinan Raja Purnawarman.

Yang unik dari prasasti ini adalah adanya pahatan dua telapak kaki gajah yang sangat jelas di atas batu kali raksasa, disertai prasasti beraksara Pallawa dan berbahasa Sanskerta. Teksnya berbunyi: *"Di sini tampak sepasang telapak kaki... yang seperti Airawata, gajah penguasa Taruma yang agung dan kejayaannya bersinar"*. Airawata adalah nama gajah mitologi tunggangan Dewa Indra, melambangkan kebesaran dan kekuatan Raja Purnawarman dalam melindungi rakyatnya.`,
    funFact: "Raja Purnawarman dikenal sebagai raja yang sangat peduli pada kesejahteraan rakyat dan irigasi; ia membangun Saluran Gomati sepanjang 11 kilometer hanya dalam waktu 21 hari untuk mencegah banjir di musim hujan!",
    source: "Museum Nasional Indonesia & Balai Arkeologi Jawa Barat",
    quiz: [
      {
        question: "Peninggalan kerajaan apakah Prasasti Kebon Kopi yang ditemukan di Bogor?",
        options: [
          "Kerajaan Majapahit",
          "Kerajaan Tarumanagara",
          "Kerajaan Singasari",
          "Kerajaan Kutai"
        ],
        correctAnswer: 1,
        explanation: "Prasasti ini merupakan bukti bukti kebesaran Kerajaan Tarumanagara di bawah pemerintahan Raja Purnawarman pada abad ke-5 Masehi."
      },
      {
        question: "Pahatan gambar apa yang menjadi keunikan utama pada batu Prasasti Kebon Kopi I?",
        options: [
          "Gambar mahkota raja dari emas",
          "Sepasang telapak kaki gajah (seperti gajah Airawata)",
          "Gambar kapal perang layar",
          "Peta kepulauan Indonesia"
        ],
        correctAnswer: 1,
        explanation: "Batu prasasti ini dihiasi pahatan sepasang telapak kaki gajah raja yang disamakan dengan gajah Airawata tunggangan Dewa Indra."
      }
    ]
  },
  {
    id: 14,
    title: "Rendang: Kuliner Tradisional Minangkabau yang Menembus Luar Angkasa!",
    category: "sejarah",
    categoryName: "Sejarah & Budaya Nusantara",
    icon: "🍛",
    shortSummary: "Rendang bukan sekadar makanan lezat nomor 1 dunia, melainkan memiliki teknologi pengawetan alami dari budaya Minang.",
    fullExplanation: `Rendang dari Sumatera Barat telah berulang kali dinobatkan sebagai Makanan Terlezat Nomor 1 di Dunia oleh CNN Travel. Namun tahukah kamu? Dalam budaya Minangkabau, rendang awalnya diciptakan bukan sekadar untuk pesta, melainkan sebagai bekal pengembaraan panjang (merantau) melintasi sungai dan hutan berbulan-bulan!

Proses memasak rendang yang lambat (low and slow) menggunakan santan kelapa pekat dan melimpahnya rempah alami (seperti lengkuas, serai, bawang, cabai, dan kunyit) berfungsi sebagai pengawet antimikroba alami yang luar biasa. Rendang murni yang dimasak sampai kering hitam (Rendang Darek) dapat bertahan hingga 3 bulan di suhu ruang tanpa bahan pengawet kimia atau kulkas!`,
    funFact: "Pada tahun 2018, kuliner khas Indonesia termasuk Rendang dan Nasi Goreng dikirim sebagai perbekalan astronot untuk astronaut di Stasiun Luar Angkasa Internasional (ISS) karena kandungan gizinya dan keawetannya!",
    source: "Kuliner Warisan Budaya Kemendikbud & CNN Travel 50 Best Foods",
    quiz: [
      {
        question: "Mengapa rendang tradisional Minangkabau bisa tahan berbulan-bulan di suhu ruang tanpa basi?",
        options: [
          "Karena dicampur dengan bahan pengawet formalin kimiawi",
          "Karena dimasak lambat hingga kering dan rempah alami berfungsi sebagai antimikroba",
          "Karena selalu dibungkus dalam plastik kedap udara saat panas",
          "Karena dagingnya dijemur di bawah matahari 7 hari"
        ],
        correctAnswer: 1,
        explanation: "Rempah-rempah kaya antioksidan dan antimikroba serta proses karamelisasi santan hingga kering membuat bakteri tidak dapat berkembang biak."
      },
      {
        question: "Apa istilah tradisional Minangkabau untuk menyebut proses merantau yang menjadi cikal bakal bekal rendang?",
        options: [
          "Mudik Lebaran",
          "Merantau / Marantau",
          "Transmigrasi",
          "Wisata Alam"
        ],
        correctAnswer: 1,
        explanation: "Budaya merantau pemuda Minang membutuhkan bekal makanan yang tahan lama saat perjalanan jauh di masa lalu, sehingga terciptalah rendang."
      }
    ]
  },

  // ==========================================
  // KATEGORI 3: KESEHATAN & TUBUH KITA
  // ==========================================
  {
    id: 15,
    title: "Otak Manusia Menghasilkan Listrik yang Bisa Menyalakan Lampu!",
    category: "kesehatan",
    categoryName: "Kesehatan & Tubuh Kita",
    icon: "🧠",
    shortSummary: "Saat kamu bangun dan berpikir, impuls saraf di otakmu menghasilkan daya listrik sekitar 12 hingga 25 watt.",
    fullExplanation: `Otak manusia adalah organ superkomputer biologis yang terdiri dari sekitar 86 miliar sel saraf (neuron). Setiap kali kita berpikir, melihat, mendengar, atau bergerak, neuron-neuron ini berkomunikasi satu sama lain melalui sinyal listrik kecil yang disebut potensial aksi.

Meskipun tegangan dari satu neuron sangat kecil (sekitar 70 milivolt), jika seluruh aktivitas listrik dari 86 miliar neuron di otakmu digabungkan saat kamu sadar dan aktif berpikir, dayanya mencapai sekitar 12 hingga 25 watt listrik! Jumlah energi listrik ini cukup untuk menyalakan sebuah lampu bohlam LED kecil di kamarmu!`,
    funFact: "Otak hanya menyumbang 2% dari total berat badan manusia, tetapi ia mengonsumsi sekitar 20% dari seluruh oksigen dan kalori yang kamu konsumsi setiap hari!",
    source: "Johns Hopkins Medicine & Journal of Neuroscience",
    quiz: [
      {
        question: "Berapa perkiraan daya listrik gabungan yang dihasilkan oleh otak manusia saat sadar?",
        options: [
          "Sekitar 1 Watt",
          "Sekitar 12 hingga 25 Watt (Cukup untuk lampu LED)",
          "1.000 Watt (Setara setrika listrik)",
          "Tidak menghasilkan listrik sama sekali"
        ],
        correctAnswer: 1,
        explanation: "Aktivitas dari 86 miliar neuron di otak menghasilkan daya listrik kolektif sekitar 12-25 watt saat manusia sadar."
      },
      {
        question: "Meskipun beratnya hanya 2% dari tubuh, berapa persentase asupan energi/oksigen yang dikonsumsi otak?",
        options: [
          "Hanya 2%",
          "Sekitar 5%",
          "Sekitar 20%",
          "Lebih dari 80%"
        ],
        correctAnswer: 2,
        explanation: "Otak adalah organ yang paling lapar energi, mengonsumsi sekitar 20% glukosa dan oksigen dari tubuh kita."
      }
    ]
  },
  {
    id: 16,
    title: "Pembuluh Darah Kita Bisa Mengelilingi Bumi 2,5 Kali!",
    category: "kesehatan",
    categoryName: "Kesehatan & Tubuh Kita",
    icon: "🫀",
    shortSummary: "Jika seluruh pembuluh darah dalam tubuh 1 orang direntangkan dalam satu garis lurus, panjangnya mencapai 100.000 kilometer.",
    fullExplanation: `Sistem peredaran darah manusia adalah jaringan pipa biologis yang sungguh luar biasa rumitnya. Jaringan ini terdiri dari arteri (yang membawa darah kaya oksigen dari jantung), vena (yang membawa darah kembali), serta miliaran kapiler mikroskopis yang menyalurkan nutrisi ke setiap sel di ujung jari hingga otak.

Menurut British Heart Foundation, jika seluruh pembuluh darah arteri, vena, dan kapiler dari satu tubuh manusia dewasa disambungkan menjadi satu garis lurus, panjang totalnya akan mencapai sekitar 100.000 kilometer (60.000 mil)! Mengingat keliling khatulistiwa Bumi adalah sekitar 40.075 kilometer, maka pembuluh darah di tubuhmu bisa melilit planet Bumi hingga dua setengah kali!`,
    funFact: "Jantung manusia berdetak sekitar 100.000 kali setiap hari untuk memompa sekitar 7.500 liter darah melalui jaringan saluran sepanjang 100.000 km ini tanpa henti dari kita lahir sampai tua!",
    source: "British Heart Foundation & National Institutes of Health (NIH)",
    quiz: [
      {
        question: "Berapa perkiraan panjang total pembuluh darah manusia dewasa jika direntangkan lurus?",
        options: [
          "100 meter",
          "1.000 kilometer",
          "100.000 kilometer (Bisa mengelilingi Bumi 2,5 kali)",
          "1.000.000 kilometer (Sampai ke Bulan)"
        ],
        correctAnswer: 2,
        explanation: "Jaringan kapiler mikroskopis yang sangat padat membuat total panjang pembuluh darah manusia mencapai sekitar 100.000 km."
      },
      {
        question: "Berapa kali rata-rata jantung manusia berdetak dalam satu hari penuh?",
        options: [
          "1.000 kali",
          "10.000 kali",
          "Sekitar 100.000 kali",
          "1 juta kali"
        ],
        correctAnswer: 2,
        explanation: "Dengan rata-rata 70-80 detak per menit, jantung berdetak sekitar 100.000 kali dalam 24 jam."
      }
    ]
  },
  {
    id: 17,
    title: "Rahasia Tidur: Otak Kita Mandi dan Membersihkan Limbah saat Tidur Nyenyak!",
    category: "kesehatan",
    categoryName: "Kesehatan & Tubuh Kita",
    icon: "😴",
    shortSummary: "Tidur bukan sekadar istirahat; saat tidur nyenyak, sistem glimfatik di otak bekerja ekstra mencuci racun berbahaya.",
    fullExplanation: `Mengapa manusia dan hewan bisa mati jika tidak pernah tidur? Penemuan medis revolusioner dari University of Rochester menemukan mekanisme pembersihan otak yang disebut Sistem Glimfatik (Glymphatic System).

Selama kita terjaga dan berpikir seharian, otak menghasilkan limbah metabolik berbahaya, termasuk protein beta-amiloid (racun yang jika menumpuk dapat memicu penyakit Alzheimer/pikun). Ketika kita memasuki fase tidur nyenyak (*deep sleep*), sel-sel otak kita menyusut hingga 60%, memungkinkan cairan serebrospinal mengalir deras seperti pancuran shower untuk 'mencuci' dan membilas racun-racun tersebut ke saluran pembuangan tubuh!`,
    funFact: "Begitu pentingnya proses mencuci otak ini sehingga bergadang atau kekurangan tidur chronic hanya satu malam saja dapat menurunkan konsentrasi, melemahkan sistem imun, dan meningkatkan hormon stres kortisol secara drastis!",
    source: "National Sleep Foundation & Science Translational Medicine Study",
    quiz: [
      {
        question: "Apa nama sistem pembersihan limbah racun di otak yang bekerja aktif saat kita tidur nyenyak?",
        options: [
          "Sistem Pencernaan",
          "Sistem Glimfatik (Glymphatic System)",
          "Sistem Respirasi",
          "Sistem Limfatik Jantung"
        ],
        correctAnswer: 1,
        explanation: "Sistem Glimfatik adalah jaringan pembuangan limbah di sistem saraf pusat yang aktif membilas racun saat tidur dalam (deep sleep)."
      },
      {
        question: "Protein berbahaya apa yang dibersihkan oleh otak saat tidur untuk mencegah risiko Alzheimer/pikun?",
        options: [
          "Protein Kolagen",
          "Protein Beta-amiloid",
          "Protein Whey",
          "Protein Keratin"
        ],
        correctAnswer: 1,
        explanation: "Penumpukan plak beta-amiloid di otak merupakan penanda utama kerusakan saraf pada penyakit Alzheimer."
      }
    ]
  },
  {
    id: 18,
    title: "Otot Terkuat di Tubuh Manusia Ternyata Ada di Rahang Mulut!",
    category: "kesehatan",
    categoryName: "Kesehatan & Tubuh Kita",
    icon: "💪",
    shortSummary: "Bukan otot lengan atau paha, otot masseter pengunyah makanan memiliki daya tekan paling besar terhadap posisinya.",
    fullExplanation: `Jika ditanya di mana letak otot terkuat di tubuh manusia, banyak orang akan menebak otot bisep di lengan, otot dada, atau otot paha (gluteus maximus). Secara ukuran fisik, otot bokong/paha memang yang terbesar. Namun, berdasarkan kekuatan daya tekan terhadap ukurannya, pemenangnya adalah Otot Masseter di rahang pipi kita!

Otot masseter adalah otot tebal yang menghubungkan tulang rahang bawah dengan tulang pipi dan bertugas untuk mengunyah makanan. Berdasarkan Buku Rekor Dunia Guinness, saat rahang kita mengatup rapat, otot masseter manusia mampu menghasilkan daya gigitan atau tekanan seberat 89 kilogram (195 pon) pada gigi geraham belakang!`,
    funFact: "Tulang paha manusia (femur) yang bekerja sama dengan otot paha sangatlah kuat; tulang femur mampu menahan beban tekanan 30 kali berat badan manusia, lebih kuat dibandingkan beton konstruksi dengan berat yang sama!",
    source: "Guinness World Records & Journal of Anatomy",
    quiz: [
      {
        question: "Otot apakah di tubuh manusia yang mampu menghasilkan daya tekan terkuat terhadap ukurannya (hingga 89 kg)?",
        options: [
          "Otot Bisep di lengan bawah",
          "Otot Masseter di rahang pengunyah",
          "Otot Betis di kaki",
          "Otot Lidah"
        ],
        correctAnswer: 1,
        explanation: "Otot masseter yang berfungsi untuk mengunyah adalah otot terkuat berdasarkan rasio daya tekan terhadap area volumenya."
      },
      {
        question: "Tulang apakah di tubuh manusia yang kekuatannya menahan beban melebihi beton konstruksi?",
        options: [
          "Tulang Paha (Femur)",
          "Tulang Rusuk",
          "Tulang Jari Tangan",
          "Tulang Hidung"
        ],
        correctAnswer: 0,
        explanation: "Tulang femur (paha) adalah tulang terpanjang, terberat, dan terkuat dalam kerangka tubuh manusia."
      }
    ]
  },
  {
    id: 19,
    title: "Mengapa Menguap Bisa Menular? Bukti Kita Mahkluk Empati!",
    category: "kesehatan",
    categoryName: "Kesehatan & Tubuh Kita",
    icon: "🥱",
    shortSummary: "Melihat, mendengar, bahkan membaca kata 'menguap' bisa membuat kita ikut menguap karena neuron cermin di otak.",
    fullExplanation: `Apakah kamu merasa ingin menguap saat melihat temanmu menguap, atau bahkan saat membaca judul fakta ini? Fenomena 'menguap menular' (contagious yawning) ini adalah respons refleks psikologis dan neurologis yang normal pada manusia.

Penelitian pemindai otak fMRI menunjukkan bahwa menguap menular dikendalikan oleh 'Neuron Cermin' (Mirror Neurons) di korteks motorik otak kita. Neuron cermin adalah sel saraf yang berperan dalam empati sosial, membantu kita memahami perasaan dan tindakan orang lain. Semakin tinggi tingkat empati seseorang terhadap orang dekat (keluarga atau sahabat), semakin cepat ia ikut menguap saat melihat mereka menguap!`,
    funFact: "Selain manusia, hewan sosial yang memiliki kecerdasan tinggi seperti anjing, simpanse, dan serigala juga terbukti mengalami fenomena menguap menular dari anggota kelompok atau pemiliknya!",
    source: "State University of New York Study & Biology Letters",
    quiz: [
      {
        question: "Sel saraf apa di otak manusia yang bertanggung jawab atas fenomena menguap yang menular?",
        options: [
          "Neuron Optik",
          "Neuron Cermin (Mirror Neurons)",
          "Neuron Pembau",
          "Neuron Motorik Kasar"
        ],
        correctAnswer: 1,
        explanation: "Neuron cermin bereaksi ketika kita melakukan tindakan atau melihat organisme lain melakukan tindakan serupa, yang menjadi dasar empati sosial."
      },
      {
        question: "Selain untuk mengambil oksigen, apa arti psikologis saat seseorang mudah tertular menguap dari orang lain?",
        options: [
          "Menandakan ia sedang sangat marah",
          "Menandakan tingkat empati dan ikatan sosial yang baik",
          "Menandakan ia kekurangan vitamin C",
          "Menandakan ia memiliki alergi udara"
        ],
        correctAnswer: 1,
        explanation: "Studi psikologi dan neurosains menemukan korelasi kuat antara empati emosional dengan kecenderungan menularnya uapan."
      }
    ]
  },
  {
    id: 20,
    title: "Mikroba di Usus Kita Lebih Banyak dari Penduduk Bumi!",
    category: "kesehatan",
    categoryName: "Kesehatan & Tubuh Kita",
    icon: "🦠",
    shortSummary: "Ada sekitar 38 triliun bakteri baik di dalam sistem pencernaanmu yang mengatur imun dan suasana hatimu.",
    fullExplanation: `Tubuh manusia sebenarnya adalah sebuah ekosistem planet mini! Di dalam saluran pencernaan kita (terutama usus besar), hidup kumpulan mikroorganisme yang disebut Mikrobioma Usus (Gut Microbiome). Jumlah bakteri baik dan mikroba di dalam usus kita diperkirakan mencapai 38 triliun—jauh melebihi jumlah 8 miliar manusia yang hidup di planet Bumi saat ini!

Bakteri-bakteri baik ini bukan parasit, melainkan sahabat setia yang membantu mencerna serat makanan yang tidak bisa diproses lambung, memproduksi Vitamin K dan B12, melatih sel kekebalan tubuh (70% imun kita ada di usus!), bahkan memproduksi 90% hormon serotonin (hormon kebahagiaan) yang menentukan suasana hati (mood) kita!`,
    funFact: "Jika seluruh bakteri dan mikroba di dalam ususmu dikumpulkan dan ditimbang di atas timbangan, berat totalnya bisa mencapai 1,5 hingga 2 kilogram, setara dengan berat otak manusia!",
    source: "American Society for Microbiology & Harvard Health",
    quiz: [
      {
        question: "Berapa persentase hormon kebahagiaan (serotonin) dalam tubuh yang diproduksi oleh bantuan mikrobioma di usus?",
        options: [
          "Hanya 5%",
          "Sekitar 25%",
          "Sekitar 90%",
          "0% (Semua diproduksi langsung di kulit)"
        ],
        correctAnswer: 2,
        explanation: "Sekitar 90% serotonin neurotransmitter diproduksi di sel enterokromafin saluran pencernaan dengan dukungan mikrobioma usus."
      },
      {
        question: "Berapa persentase sistem kekebalan tubuh (imunitas) manusia yang berpusat di saluran pencernaan/usus?",
        options: [
          "Sekitar 10%",
          "Sekitar 70%",
          "100%",
          "30%"
        ],
        correctAnswer: 1,
        explanation: "Sekitar 70% sel sistem imun tubuh tinggal di jaringan limfoid yang terkait dengan usus (GALT) untuk melindungi dari patogen yang masuk lewat makanan."
      }
    ]
  },
  {
    id: 21,
    title: "Pentingnya Minum Air Putih: Cegah Dehidrasi Otak dan Ginjal!",
    category: "kesehatan",
    categoryName: "Kesehatan & Tubuh Kita",
    icon: "🚰",
    shortSummary: "Kehilangan hanya 2% cairan tubuh sudah cukup untuk membuat konsentrasi melorot dan memicu sakit kepala.",
    fullExplanation: `Sebagian besar tubuh manusia, sekitar 60%, terdiri dari air. Air adalah pelarut kehidupan yang membawa nutrisi ke seluruh sel, membuang limbah metabolisme melalui ginjal, dan menjaga suhu tubuh tetap stabil melalui keringat.

Banyak pemuda dan pelajar sering lupa minum air putih dan menggantinya dengan minuman manis/bersoda. Padahal, menurut studi dari Journal of Nutrition, dehidrasi ringan—yaitu kehilangan hanya 1% hingga 2% dari berat air tubuh—sudah cukup untuk merusak konsentrasi belajar, menurunkan memori jangka pendek, memicu kelelahan ekstrem, dan menyebabkan sakit kepala/migrain! Selain itu, kurang minum air putih jangka panjang adalah penyebab nomor satu terbentuknya batu ginjal yang sangat menyakitkan.`,
    funFact: "Cara termudah mengecek apakah kamu cukup minum air putih atau belum adalah melihat warna urinmu: warna kuning pucat atau bening berarti kamu terhidrasi dengan baik, sedangkan kuning pekat seperti teh berarti tubuhmu berteriak minta air!",
    source: "Kemenkes RI (Pedoman Gizi Seimbang) & Journal of Nutrition",
    quiz: [
      {
        question: "Kehilangan berapa persentase cairan tubuh (dehidrasi ringan) yang sudah dapat menurunkan konsentrasi dan memori belajar?",
        options: [
          "Kehilangan 1% hingga 2% cairan tubuh",
          "Kehilangan 50% cairan tubuh",
          "Kehilangan 20% cairan tubuh",
          "Harus kehilangan seluruh darah dulu"
        ],
        correctAnswer: 0,
        explanation: "Dehidrasi ringan sebesar 1-2% sudah terbukti secara klinis menurunkan fungsi kognitif, fokus, dan memicu suasana hati buruk."
      },
      {
        question: "Penyakit berbahaya apa pada ginjal yang risiko utamanya disebabkan oleh kebiasaan kurang minum air putih jangka panjang?",
        options: [
          "Rabun dekat",
          "Batu Ginjal (Nefrolitiasis)",
          "Flu Burung",
          "Osteoporosis (tulang keropos)"
        ],
        correctAnswer: 1,
        explanation: "Kurang asupan cairan membuat mineral kalsium dan oksalat dalam urin mengendap dan mengkristal menjadi batu ginjal."
      }
    ]
  },

  // ==========================================
  // KATEGORI 4: LINGKUNGAN & ALAM
  // ==========================================
  {
    id: 22,
    title: "Pohon Berkomunikasi dan Saling Tolong Lewat Jaringan Jamur!",
    category: "alam",
    categoryName: "Lingkungan & Alam",
    icon: "🌳",
    shortSummary: "Hutan bukanlah sekumpulan pohon individual, melainkan internet biologis bawah tanah bernama 'Wood Wide Web'.",
    fullExplanation: `Jika kamu berjalan di dalam hutan, pohon-pohon tampak diam dan berdiri sendiri. Namun, di bawah permukaan tanah, terjadi keajaiban sosial yang luar biasa! Ekolog hutan Dr. Suzanne Simard menemukan bahwa pohon-pohon di hutan terhubung satu sama lain melalui jaringan benang jamur bawah tanah yang disebut mikoriza (Mycorrhizal Network), atau populer disapa 'Wood Wide Web'.

Lewat internet biologis bawah tanah ini, pohon-pohon bisa saling berkirim pesan kimiawi dan bertukar nutrisi! Jika ada pohon tua yang sakit atau kekurangan sinar matahari, pohon-pohon sehat di sekitarnya akan mengirimkan karbon, gula, dan air melalui jaringan jamur untuk menolongnya. Selain itu, jika satu pohon diserang serangga hama, ia akan mengirimkan sinyal tanda bahaya melalui akar agar pohon lain segera memproduksi zat penolak hama sebelum terserang!`,
    funFact: "Pohon terbesar dan tertua di hutan bertindak sebagai 'Pohon Ibu' (Mother Trees) yang merawat ratusan bibit pohon muda di sekitarnya lewat aliran nutrisi mikoriza ini!",
    source: "Dr. Suzanne Simard (University of British Columbia) & Nature Ecology",
    quiz: [
      {
        question: "Apa julukan populer untuk jaringan jamur bawah tanah (mikoriza) yang menghubungkan komunikasi pohon di hutan?",
        options: [
          "Green Bluetooth",
          "Wood Wide Web",
          "Jungle Wifi",
          "Forest Network 5G"
        ],
        correctAnswer: 1,
        explanation: "Jaringan mikoriza dinamakan 'Wood Wide Web' karena fungsinya mirip jaringan internet World Wide Web bagi tumbuhan."
      },
      {
        question: "Apa yang dilakukan pohon di hutan ketika menerima sinyal bahaya serangan hama dari pohon lain via akar?",
        options: [
          "Mencabut akarnya dan berlari",
          "Segera memproduksi zat kimia penolak hama/racun pada daunnya",
          "Menyerap seluruh air tanah sampai kering",
          "Menggugurkan seluruh cabangnya dalam 1 detik"
        ],
        correctAnswer: 1,
        explanation: "Pohon yang mendapat sinyal peringatan akan meningkatkan pertahanan kimiawi alami di daun mereka agar tidak enak dimakan hama serangga."
      }
    ]
  },
  {
    id: 23,
    title: "Fitoplankton Lautan: Pahlawan Oksigen Sejati Bumi Kita!",
    category: "alam",
    categoryName: "Lingkungan & Alam",
    icon: "🌊",
    shortSummary: "Lebih dari 50% oksigen yang kita hirup setiap hari bukan berasal dari hutan daratan, melainkan dari ganggang mikro di samudra.",
    fullExplanation: `Hutan Amazon sering disebut sebagai 'Paru-paru Dunia', dan pelestarian hutan daratan memang sangat krusial. Namun tahukah kamu? Menurut penelitian National Oceanic and Atmospheric Administration (NOAA) NASA, antara 50% hingga 85% dari seluruh oksigen di planet Bumi diproduksi oleh lautan!

Pahlawan tak kasat mata di balik suplai napas kita ini adalah Fitoplankton—yaitu organisme mikroskopis bersel tunggal (seperti alga dan cyanobacteria) yang melayang di permukaan samudra yang terkena sinar matahari. Sama seperti tumbuhan darat, fitoplankton melakukan fotosintesis: mereka menyerap gas rumah kaca karbon dioksida (CO2) dalam jumlah masif dari atmosfer dan melepaskan oksigen murni ke udara yang kita hirup sekarang!`,
    funFact: "Satu spesies cyanobacteria laut bernama Prochlorococcus begitu melimpah sehingga satu spesies ini saja bertanggung jawab menghasilkan 20% dari seluruh oksigen di atmosfer Bumi—lebih banyak dari seluruh hutan tropis daratan digabungkan!",
    source: "NASA Earth Observatory & NOAA Ocean Facts",
    quiz: [
      {
        question: "Organisme mikroskopis laut apa yang menghasilkan lebih dari 50% oksigen di planet Bumi?",
        options: [
          "Ikan Paus Biru",
          "Fitoplankton (alga mikro laut)",
          "Ubur-ubur Kotak",
          "Rumput Laut Merah"
        ],
        correctAnswer: 1,
        explanation: "Fitoplankton melimpah di seluruh samudra dunia dan menyumbang antara 50-85% oksigen atmosfer melalui fotosintesis."
      },
      {
        question: "Selain menghasilkan oksigen, apa peran vital fitoplankton terhadap perubahan iklim global?",
        options: [
          "Menyerap dan mengikat karbon dioksida (CO2) dalam jumlah besar dari atmosfer",
          "Memanaskan air laut hingga mendidih",
          "Menciptakan tsunami pasir",
          "Menghancurkan terumbu karang"
        ],
        correctAnswer: 0,
        explanation: "Fitoplankton adalah penyerap karbon (carbon sink) terbesar di lautan yang menekan laju pemanasan global."
      }
    ]
  },
  {
    id: 24,
    title: "Bunga Rafflesia Arnoldii: Bunga Terbesar di Dunia Ada di Indonesia!",
    category: "alam",
    categoryName: "Lingkungan & Alam",
    icon: "🌺",
    shortSummary: "Bunga langka kebanggaan Bengkulu dan Sumatera ini bisa berdiameter 1 meter dengan berat mencapai 11 kilogram.",
    fullExplanation: `Rafflesia arnoldii (sering disapa Bunga Padma Raksasa) adalah bunga tunggal terbesar di planet Bumi yang merupakan pusaka keanekaragaman hayati Indonesia, khususnya ditemukan di hutan hujan tropis Sumatera dan Kalimantan (seperti Bengkulu).

Keunikan bunga langka ini sangat aneh dan menakjubkan: Rafflesia arnoldii adalah tumbuhan parasit sempurna (holoparasit) yang tidak memiliki daun, tidak memiliki batang, tidak memiliki akar sejati, dan tidak mampu melakukan fotosintesis! Ia hidup di dalam jaringan tumbuhan merambat Tetrastigma. Ketika mekar sempurna (yang hanya berlangsung 5 sampai 7 hari sebelum layu mati), diameternya bisa mencapai 1 meter dengan bobot 11 kilogram!`,
    funFact: "Jangan samakan Rafflesia arnoldii dengan Bunga Bangkai (Amorphophallus titanum)! Meskipun keduanya sama-sama mengeluarkan bau busuk untuk menarik lalat penyerbuk dan asli Indonesia, Rafflesia melebar ke samping (bunga tunggal terbesar), sedangkan Bunga Bangkai tumbuh menjulang tinggi ke atas (bunga majemuk tertinggi di dunia)!",
    source: "BRIN / LIPI & Kebun Raya Bogor",
    quiz: [
      {
        question: "Apa perbedaan utama antara Bunga Rafflesia arnoldii dengan Bunga Bangkai (Amorphophallus titanum)?",
        options: [
          "Rafflesia hidup di gurun pasir, Bunga Bangkai hidup di laut",
          "Rafflesia adalah bunga tunggal terbesar melebar ke samping, Bunga Bangkai adalah bunga majemuk tertinggi menjulang ke atas",
          "Rafflesia harum seperti mawar, Bunga Bangkai bau busuk",
          "Rafflesia buatan manusia, Bunga Bangkai asli alam"
        ],
        correctAnswer: 1,
        explanation: "Keduanya sering tertukar; Rafflesia arnoldii adalah bunga tunggal terbesar, sedangkan Amorphophallus titanum adalah perbungaan majemuk tertinggi."
      },
      {
        question: "Mengapa Bunga Padma Raksasa (Rafflesia arnoldii) tidak memiliki daun dan tidak bisa fotosintesis?",
        options: [
          "Karena ia adalah tumbuhan holoparasit yang mengambil nutrisi dari tanaman merambat inangnya",
          "Karena ia hidup di dalam gua gelap",
          "Karena daunnya dimakan oleh singa hutan",
          "Karena ia sebenarnya adalah hewan"
        ],
        correctAnswer: 0,
        explanation: "Rafflesia adalah tumbuhan holoparasit sejati yang sepenuhnya bergantung pada nutrisi dan air dari akar tumbuhan merambat Tetrastigma."
      }
    ]
  },
  {
    id: 25,
    title: "Terumbu Karang: Hewan Koloni yang Mengasuh 25% Kehidupan Laut!",
    category: "alam",
    categoryName: "Lingkungan & Alam",
    icon: "🪸",
    shortSummary: "Bentuknya mirip batu atau tumbuhan warna-warni, tetapi terumbu karang sebenarnya adalah kumpulan ribuan hewan kecil.",
    fullExplanation: `Ketika kita berenang atau menyelam di lautan Nusantara yang indah seperti Raja Ampat, Bunaken, atau Bali, kita akan melihat terumbu karang yang menakjubkan. Banyak orang menyangka terumbu karang adalah batu atau tanaman laut. Faktanya, terumbu karang adalah HEWAN!

Terumbu karang terdiri dari ribuan hewan lunak berukuran mini yang disebut Polip Karang (coral polyp) yang masih berkerabat dengan ubur-ubur dan anemon laut. Para polip ini mengeluarkan kerangka kalsium karbonat (kapur) yang keras untuk melindungi diri mereka, yang lama-kelamaan bertumpuk membentuk struktur terumbu raksasa selama ribuan tahun. Meskipun luas terumbu karang hanya menutupi kurang dari 1% dasar laut Bumi, ia menjadi rumah, tempat kawin, dan mencari makan bagi lebih dari 25% seluruh spesies kehidupan laut!`,
    funFact: "Indonesia berada di jantung 'Segitiga Karang Dunia' (Coral Triangle) dan memiliki keragaman spesies terumbu karang tertinggi di planet Bumi, menampung sekitar 76% dari seluruh jenis karang yang ada di dunia!",
    source: "WWF Coral Triangle & NOAA Coral Reef Conservation",
    quiz: [
      {
        question: "Secara taksonomi biologi, tergolong dalam kelompok makhluk hidup apakah Terumbu Karang?",
        options: [
          "Tumbuhan berbunga laut",
          "Batu mineral mati",
          "Hewan koloni (terdiri dari polip karang)",
          "Jamur laut"
        ],
        correctAnswer: 2,
        explanation: "Karang dibentuk oleh koloni ribuan hewan kecil bernama polip yang berkerabat dengan anemon laut dan ubur-ubur."
      },
      {
        question: "Meskipun hanya menutupi kurang dari 1% dasar samudra, berapa persentase kehidupan laut yang bergantung pada terumbu karang?",
        options: [
          "Hanya 2% spesies laut",
          "Sekitar 25% (seperempat) seluruh spesies laut",
          "100% spesies laut",
          "5% spesies laut"
        ],
        correctAnswer: 1,
        explanation: "Terumbu karang adalah ekosistem paling bergam di laut, mendukung kehidupan 25% spesies ikan dan biota laut dunia."
      }
    ]
  },
  {
    id: 26,
    title: "Lebah Madu Punya Cermin GPS Matahari dan Bisa Mengenali Wajah Manusia!",
    category: "alam",
    categoryName: "Lingkungan & Alam",
    icon: "🐝",
    shortSummary: "Serangga kecil ini melakukan 'tarian goyang' untuk memberi tahu teman-temannya lokasi bunga dengan presisi tinggi.",
    fullExplanation: `Lebah madu adalah salah satu serangga dengan kecerdasan navigasi dan komunikasi paling canggih di alam raya. Ketika seekor lebah pekerja menemukan ladang bunga yang penuh nektar manis, ia pulang ke sarang dan melakukan tarian khusus yang disebut 'Tarian Goyang' (Waggle Dance).

Lewat sudut tarian dan durasi goyangan tubuhnya di dalam sarang yang gelap, lebah tersebut mampu memberitahukan jarak pasti serta arah kompas lokasi bunga berdasarkan posisi Matahari saat itu kepada ribuan lebah lainnya dengan akurasi yang mengagumkan! Lebih mengejutkan lagi, eksperimen neurobiologi dari Universitas Monash membuktikan bahwa otak lebah yang sekecil biji wijen mampu memindai dan mengingat pola wajah manusia yang berbeda-beda!`,
    funFact: "Tanpa penyerbukan yang dilakukan oleh lebah dan serangga penyerbuk, sekitar 70% dari tanaman pangan dunia (seperti apel, stroberi, kopi, tomat, dan alpukat) akan lenyap dari meja makan kita!",
    source: "Monash University Study & Journal of Experimental Biology",
    quiz: [
      {
        question: "Apa nama tarian khusus yang dilakukan lebah madu untuk memberi tahu arah dan jarak ladang bunga kepada kawanannya?",
        options: [
          "Tarian Lebah Ratu",
          "Tarian Goyang (Waggle Dance)",
          "Tarian Hujan Nektar",
          "Tarian Terbang Muter"
        ],
        correctAnswer: 1,
        explanation: "Waggle Dance menggunakan sudut orientasi matahari dan kecepatan getaran untuk mengomunikasikan koordinat lokasi makanan."
      },
      {
        question: "Berapa persentase tanaman pangan dunia yang bergantung pada jasa penyerbukan lebah dan serangga?",
        options: [
          "Sekitar 10%",
          "Sekitar 30%",
          "Sekitar 70%",
          "99%"
        ],
        correctAnswer: 2,
        explanation: "Organisasi Pangan Dunia (FAO) menyatakan sekitar 70% tanaman pangan utama umat manusia bergantung pada penyerbukan alami lebah."
      }
    ]
  },
  {
    id: 27,
    title: "Komodo: Naga Terakhir Bumi Asli dari Nusa Tenggara Timur!",
    category: "alam",
    categoryName: "Lingkungan & Alam",
    icon: "🦎",
    shortSummary: "Kadal raksasa terbesar di dunia ini tidak hanya mengandalkan gigitan bakteri, tapi memiliki kelenjar bisa beracun mematikan.",
    fullExplanation: `Komodo (Varanus komodoensis) adalah spesies kadal terbesar dan terberat di dunia yang hanya bisa ditemukan hidup secara alami di alam liar kepulauan Indonesia, yaitu di Pulau Komodo, Rinca, Flores, dan Gili Motang di Provinsi Nusa Tenggara Timur (NTT).

Selama puluhan tahun, buku pelajaran kuno menulis bahwa gigitan komodo mematikan karena mulutnya dipenuhi bakteri busuk sisa bangkai. Namun, penelitian modern menggunakan pemindai MRI oleh Dr. Bryan Fry tahun 2009 mematahkan mitos tersebut! Komodo terbukti memiliki kelenjar racun (bisa) sejati di rahang bawahnya! Ketika menggigit mangsa seperti kerbau atau rusa, komodo menyuntikkan racun protein yang mencegah pembekuan darah dan menurunkan tekanan darah mangsa secara drastis hingga mangsanya lemas syok tidak berdaya.`,
    funFact: "Komodo memiliki penciuman yang begitu tajam! Dengan menjulur-julurkan lidah kuning bercabang menggunakan organ Jacobson di langit-langit mulutnya, seekor komodo bisa mendeteksi bau bau bangkai atau darah dari jarak 4 hingga 9 kilometer!",
    source: "Taman Nasional Komodo & Proceedings of the National Academy of Sciences (PNAS)",
    quiz: [
      {
        question: "Penelitian modern membuktikan bahwa gigitan komodo mematikan terutama karena apa?",
        options: [
          "Karena komodo menyemprotkan api dari hidungnya",
          "Karena komodo menyuntikkan racun (bisa) yang menurunkan tekanan darah dan mencegah pembekuan darah",
          "Murni hanya karena gigitannya keras seperti buaya",
          "Karena giginya terbuat dari besi murni"
        ],
        correctAnswer: 1,
        explanation: "Peneliti Dr. Bryan Fry menemukan kelenjar bisa di rahang komodo yang menghasilkan toksin penurun tekanan darah instan pada mangsa."
      },
      {
        question: "Apa nama organ khusus di langit-langit mulut komodo yang digunakan bersama lidahnya untuk mencium bau dari jarak 9 km?",
        options: [
          "Organ Jacobson (Vomeronasal organ)",
          "Organ Corti",
          "Organ Vestibular",
          "Organ Lateral Line"
        ],
        correctAnswer: 0,
        explanation: "Organ Jacobson berfungsi mendeteksi partikel kimia aroma di udara yang ditangkap oleh lidah bercabang komodo."
      }
    ]
  },

  // ==========================================
  // KATEGORI 5: LITERASI KEUANGAN & DIGITAL
  // ==========================================
  {
    id: 28,
    title: "Aturan Emas 50-30-20: Cara Cerdas Kelola Uang Saku dan Gaji!",
    category: "literasi",
    categoryName: "Literasi Keuangan & Digital",
    icon: "💰",
    shortSummary: "Metode sederhana dari Senator Elizabeth Warren ini membantu anak muda bebas dari jebakan 'kanker' keuangan (boros di awal bulan).",
    fullExplanation: `Salah satu kesalahan terbesar pemuda saat pertama kali mandiri atau menerima uang saku/gaji adalah langsung membelanjakannya tanpa rencana, sehingga kehabisan uang di akhir bulan. Untuk mengatasinya, pakar keuangan merekomendasikan metode pembagian sederhana yang terkenal: Aturan 50-30-20.

Cara kerjanya: Begitu menerima uang, langsung bagi menjadi 3 pos:
1. **50% untuk Kebutuhan Pokok (Needs):** Makan sehari-hari, sewa kos/kontrakan, transportasi, dan pulsa/kuota belajar wajib.
2. **30% untuk Keinginan & Hiburan (Wants):** Nongkrong di kafe, beli baju baru, nonton bioskop, atau hobi. Ini penting agar hidup tetap menyenangkan tapi terkontrol!
3. **20% untuk Tabungan & Investasi (Savings/Investments):** Dana darurat, tabungan masa depan, atau investasi reksa dana/emas yang tidak boleh diganggu gugat.`,
    funFact: "Kunci sukses dari aturan ini adalah mendahulukan menyisihkan 20% untuk tabungan DI AWAL saat uang baru diterima, bukan menabung dari 'sisa uang' di akhir bulan (karena biasanya tidak akan pernah ada sisanya)!",
    source: "Otoritas Jasa Keuangan (OJK) Literasi Keuangan & Buku All Your Worth",
    quiz: [
      {
        question: "Dalam Aturan Keuangan 50-30-20, porsi 50% harus dialokasikan untuk kebutuhan apa?",
        options: [
          "Liburan ke luar negeri dan belanja barang mewah",
          "Kebutuhan Pokok Wajib (Makan, sewa kos/rumah, transportasi, listrik)",
          "Dibagikan seluruhnya ke teman-teman nongkrong",
          "Membeli lotre atau judi online"
        ],
        correctAnswer: 1,
        explanation: "Setengah (50%) dari pendapatan dialokasikan khusus untuk kebutuhan survival wajib yang tidak bisa ditunda atau dihilangkan."
      },
      {
        question: "Kapan waktu yang paling tepat dan bijak untuk menyisihkan porsi 20% Tabungan/Investasi?",
        options: [
          "Menunggu jika ada sisa uang di hari terakhir akhir bulan",
          "Langsung disisihkan di awal hari pada saat uang/gaji baru diterima",
          "Setiap 5 tahun sekali",
          "Saat sudah mau bangkrut baru menabung"
        ],
        correctAnswer: 1,
        explanation: "Prinsip emas perencaan keuangan adalah 'Pay Yourself First', yaitu menyisihkan tabungan di awal agar tidak habis terpakai keinginan konsumtif."
      }
    ]
  },
  {
    id: 29,
    title: "Bahaya Phishing: Jangan Asal Klik Tautan Hadiah Palsu!",
    category: "literasi",
    categoryName: "Literasi Keuangan & Digital",
    icon: "🎣",
    shortSummary: "Lebih dari 80% peretasan akun media sosial dan m-banking berawal dari teknik pengelabuan psikologis yang disebut Phishing.",
    fullExplanation: `Pernahkah kamu menerima pesan WhatsApp, SMS, atau email yang menyatakan: *"Selamat! Anda memenangkan undian Rp 50 Juta dari Bank X, klik link ini untuk klaim hadiah"* atau pesan undangan pernikahan dari nomor tak dikenal dalam format file ".APK"? Waspadalah, itu adalah kejahatan siber bernama **Phishing**!

Phishing (berasal dari kata *fishing* / memancing) adalah teknik penipuan digital di mana pelaku menyamar sebagai lembaga resmi, bank, atau teman dekat untuk memancing korban agar menyerahkan data rahasia seperti Password, PIN, kode OTP (One Time Password), atau menginstal aplikasi penguras rekening. Ingat aturan emas keamanan siber: **Bank resmi atau institusi pemerintah TIDAK AKAN PERNAH meminta kode OTP atau PIN Anda melalui pesan chat atau telepon!**`,
    funFact: "Kode OTP (One Time Password) ibarat kunci emas rumahmu! Jika ada orang yang meminta kode OTP berdigit angka yang masuk via SMS/WhatsApp dengan alasan apapun, 100% dipastikan itu adalah penipu!",
    source: "Badan Siber dan Sandi Negara (BSSN) & Kementerian Kominfo RI",
    quiz: [
      {
        question: "Apa definisi utama dari kejahatan siber yang disebut Phishing?",
        options: [
          "Memancing ikan di sungai menggunakan aplikasi smartphone",
          "Teknik pengelabuan/penipuan menyamar sebagai pihak resmi untuk mencuri password, PIN, atau kode OTP",
          "Membuat website belanja online yang sah dan murah",
          "Memperbaiki komputer yang rusak karena kena air"
        ],
        correctAnswer: 1,
        explanation: "Phishing adalah kejahatan rekayasa sosial (social engineering) untuk mengelabui korban agar menyerahkan informasi sensitif."
      },
      {
        question: "Jika ada seseorang mengaku dari pegawai bank atau customer service meminta kode OTP yang masuk ke SMS Anda, apa yang harus Anda lakukan?",
        options: [
          "Segera membacakan kode OTP tersebut agar rekening aman",
          "Menolak tegas dan memblokir nomor tersebut karena kode OTP bersifat sangat rahasia",
          "Mengirimkan foto KTP beserta kartu ATM ke nomor tersebut",
          "Mentransfer uang ke rekening penipu"
        ],
        correctAnswer: 1,
        explanation: "Kode OTP adalah verifikasi keamanan akhir milik Anda. Pihak bank atau perusahaan resmi tidak akan pernah meminta kode OTP nasabahnya."
      }
    ]
  },
  {
    id: 30,
    title: "Keajaiban Bunga Berbunga (Compound Interest): Rahasia Kaya Raya Albert Einstein!",
    category: "literasi",
    categoryName: "Literasi Keuangan & Digital",
    icon: "📈",
    shortSummary: "Mengapa mulai berinvestasi sejak umur 18 tahun jauh lebih hebat dibanding mulai di umur 35 tahun? Ini rahasia matematikanya.",
    fullExplanation: `Fisikawan genius Albert Einstein pernah berkata: *"Bunga berbunga (Compound Interest) adalah keajaiban dunia ke-8. Siapa yang memahaminya, dia akan mendapatkannya; siapa yang tidak paham, dia akan membayarnya"*. 

Apa maksudnya? Bunga berbunga adalah efek bola salju di mana bunga atau keuntungan dari tabungan/investasimu tidak ditarik, melainkan diinvestasikan kembali sehingga ikut menghasilkan bunga baru di tahun-tahun berikutnya. 

Contoh nyata: Jika seorang pemuda berumur 20 tahun menabung Rp 200.000 per bulan secara rutin di instrumen berimbal hasil 10% per tahun, pada usia 50 tahun ia akan memiliki uang sekitar **Rp 450 Juta** (padahal modal aslinya hanya Rp 72 Juta!). Sebaliknya, jika ia baru mulai menabung dengan jumlah yang sama saat berumur 35 tahun, di usia 50 tahun uangnya hanya terkumpul sekitar **Rp 83 Juta**. Waktu adalah sahabat terbaik dalam literasi keuangan!`,
    funFact: "Warren Buffett, salah satu orang terkaya di dunia, mendapatkan 99% dari total kekayaan triliunan rupiahnya setelah ia berusia 50 tahun berkat kesabarannya membiarkan efek bunga berbunga bekerja sejak ia kecil!",
    source: "Bursa Efek Indonesia (BEI) Yuk Nabung Saham & OJK",
    quiz: [
      {
        question: "Apa yang dimaksud dengan efek 'Bunga Berbunga' (Compound Interest) dalam investasi?",
        options: [
          "Bunga bank yang selalu turun setiap tahun menjadi nol",
          "Keuntungan investasi yang diinvestasikan kembali sehingga ikut menghasilkan keuntungan baru (efek bola salju)",
          "Membeli bunga mawar dan melati di pasar malam",
          "Meminjam uang ke rentenir dengan bunga 100% per hari"
        ],
        correctAnswer: 1,
        explanation: "Compound interest adalah penghitungan bunga dari pokok awal ditambah akumulasi bunga dari periode-periode sebelumnya."
      },
      {
        question: "Faktor apa yang paling krusial dan menentukan dalam memaksimalkan hasil dari efek bunga berbunga?",
        options: [
          "Waktu (memulai sedini mungkin di usia muda)",
          "Harus memiliki gelar doktor ekonomi dulu",
          "Harus memiliki modal minimal 1 Miliar rupiah di awal",
          "Menabung di bawah kasur tempat tidur"
        ],
        correctAnswer: 0,
        explanation: "Karena rumusnya bersifat eksponensial terhadap waktu, memulai investasi 5 atau 10 tahun lebih awal memberikan perbedaan hasil yang masif."
      }
    ]
  },
  {
    id: 31,
    title: "Jejak Digital Tidak Pernah Hilang: Bijaklah di Media Sosial!",
    category: "literasi",
    categoryName: "Literasi Keuangan & Digital",
    icon: "📱",
    shortSummary: "Apa yang kamu posting hari ini di internet bisa dilihat oleh calon bos atau universitasmu 10 tahun ke depan.",
    fullExplanation: `Di era internet modern, muncul aturan emas baru: **"Internet tidak pernah lupa" (The Internet Never Forgets)**. Setiap komentar, foto, video, status kemarahan, atau riwayat pencarian yang pernah kita posting di media sosial (Instagram, TikTok, X/Twitter, Facebook) membentuk apa yang disebut **Jejak Digital (Digital Footprint)**.

Meskipun kamu sudah menekan tombol *Delete* atau menghapus postingan tersebut 5 menit kemudian, server mesin pencari, sistem *cache*, atau *screenshot* dari orang lain sudah dapat menyimpan rekamannya secara permanen. Saat ini, lebih dari 70% departemen HRD perusahaan besar dan universitas terkemuka di dunia melakukan pemeriksaan rekam jejak digital calon karyawan atau mahasiswa sebelum menerima mereka! Satu postingan ujaran kebencian masa lalu bisa menghancurkan karir masa depanmu.`,
    funFact: "Aturan T.H.I.N.K. sebelum memposting sesuatu di internet: Apakah itu True (Benar)? Helpful (Bermanfaat)? Inspiring (Menginspirasi)? Necessary (Penting)? Kind (Santun)? Jika tidak memenuhi kriteria ini, lebih baik simpan di draf!",
    source: "Kementerian Kominfo RI (Literasi Digital Makin Cakap Digital) & UNICEF",
    quiz: [
      {
        question: "Mengapa menghapus postingan di media sosial tidak menjamin bahwa data tersebut hilang sepenuhnya dari internet?",
        options: [
          "Karena smartphone kita akan bergetar terus-menerus",
          "Karena sistem server, web cache, archive, dan screenshot orang lain dapat menyimpan salinannya secara permanen",
          "Karena internet diatur oleh alien dari luar angkasa",
          "Karena tombol delete di ponsel hanyalah hiasan palsu"
        ],
        correctAnswer: 1,
        explanation: "Data digital yang telah dipublikasikan ke internet berpotensi diindeks oleh mesin pencari atau diunduh oleh pihak ketiga sebelum dihapus."
      },
      {
        question: "Apa singkatan dari metode pengujian T.H.I.N.K. sebelum kita memposting sesuatu di media sosial?",
        options: [
          "Tall, High, Ice, Nice, Cool",
          "True, Helpful, Inspiring, Necessary, Kind",
          "Time, Hour, Instant, Now, Know",
          "Total, Heavy, Iron, Neon, King"
        ],
        correctAnswer: 1,
        explanation: "T.H.I.N.K (True, Helpful, Inspiring, Necessary, Kind) adalah pedoman etika digital global untuk menyaring konten sebelum dipublikasikan."
      }
    ]
  },
  {
    id: 32,
    title: "Dana Darurat: Bumper Pengaman Sebelum Mulai Berinvestasi",
    category: "literasi",
    categoryName: "Literasi Keuangan & Digital",
    icon: "🛡️",
    shortSummary: "Jangan gunakan uang dapur untuk investasi berisiko; siapkan dulu tabungan dana darurat untuk situasi tak terduga.",
    fullExplanation: `Banyak pemuda tergiur oleh *hype* investasi saham atau kripto yang menjanjikan cepat kaya, lalu nekat memakai seluruh uang tabungan mereka atau bahkan meminjam di pinjaman online (pinjol). Ketika pasar turun atau terjadi musibah tiba-tiba (seperti sakit, motor rusak, atau kehilangan pekerjaan), mereka terpaksa menjual rugi investasi mereka atau terjerat hutang bunga tinggi.

Pakar keuangan OJK mengingatkan: Sebelum berinvestasi di instrumen berisiko apa pun, fondasi pertama yang wajib dimiliki adalah **Dana Darurat (Emergency Fund)**! Dana darurat adalah uang tunai yang mudah dicairkan (seperti di tabungan bank atau reksa dana pasar uang) yang khusus disimpan untuk keadaan darurat sejati, bukan untuk liburan atau belanja konsumtif.`,
    funFact: "Berapa besaran ideal dana darurat? Untuk kamu yang masih lajang/bujang, idealnya adalah 3 hingga 6 kali pengeluaran bulananmu. Untuk yang sudah berkeluarga, minimal 6 hingga 12 kali pengeluaran bulanan!",
    source: "Otoritas Jasa Keuangan (OJK) & Perencana Keuangan Independen",
    quiz: [
      {
        question: "Berapakah jumlah ideal tabungan Dana Darurat untuk seseorang yang masih lajang/bujang (belum menikah)?",
        options: [
          "Setara dengan 1 hari pengeluaran",
          "Setara dengan 3 hingga 6 kali pengeluaran bulanan",
          "Setara dengan harga 1 unit mobil sport",
          "Tidak perlu punya dana darurat sama sekali"
        ],
        correctAnswer: 1,
        explanation: "Memiliki 3-6 bulan biaya hidup pengeluaran bulanan memberikan perlindungan finansial jika terjadi kehilangan pendapatan atau musibah tak terduga."
      },
      {
        question: "Di instrumen keuangan manakah Dana Darurat sebaiknya disimpan agar aman dan mudah dicairkan saat genting?",
        options: [
          "Di judi online atau kripto berisiko tinggi",
          "Di tabungan bank yang likuid atau reksa dana pasar uang",
          "Dibelikan tanah sawah di pedalaman yang sulit dijual",
          "Dibelikan baju-baju mewah di lemari"
        ],
        correctAnswer: 1,
        explanation: "Dana darurat membutuhkan instrumen berisiko sangat rendah dengan likuiditas tinggi (bisa dicairkan seketika dalam hitungan menit/hari saat dibutuhkan)."
      }
    ]
  },
  {
    id: 33,
    title: "Mengapa Kata Sandi (Password) Harus Unik dan Gunakan 2FA?",
    category: "literasi",
    categoryName: "Literasi Keuangan & Digital",
    icon: "🔐",
    shortSummary: "Menggunakan sandi '123456' atau 'tanggal lahir' bisa dibobol peretas menggunakan software dalam hitungan detik!",
    fullExplanation: `Menurut laporan tahunan perusahaan keamanan siber NordPass, kata sandi yang paling banyak digunakan di dunia (termasuk di Indonesia) setiap tahunnya masih saja: **"123456"**, **"password"**, **"qwerty"**, atau nama sendiri ditambah tanggal lahir! 

Peretas modern tidak menebak kata sandimu satu per satu secara manual. Mereka menggunakan program komputer *Brute Force* yang mampu mencoba jutaan kombinasi kata sandi dalam satu detik! Kata sandi pendek seperti "123456" atau "budi1995" dapat dibobol komputer peretas dalam waktu kurang dari 1 detik! 

Untuk mengamankan akun pentingmu (email, m-banking, media sosial), gunakan metode *Passphrase* (gabungan 3-4 kata acak yang panjang seperti "KucingMelompatLangitBiru99!") dan wajib aktifkan **Autentikasi Dua Faktor (2FA)**!`,
    funFact: "Dengan mengaktifkan Autentikasi Dua Faktor (2FA), meskipun seorang peretas berhasil mengetahui passwordmu, mereka tetap tidak bisa masuk ke akunmu karena membutuhkan kode verifikasi kedua yang hanya ada di ponsel genggammu!",
    source: "Cybersecurity & Infrastructure Security Agency (CISA) & NordPass",
    quiz: [
      {
        question: "Apa nama metode peretasan otomatis di mana komputer mencoba jutaan kombinasi password dalam 1 detik?",
        options: [
          "Serangan Harimau (Tiger Attack)",
          "Brute Force Attack",
          "Bluetooth Hacking",
          "Solar Flare Attack"
        ],
        correctAnswer: 1,
        explanation: "Brute Force Attack adalah metode pencocokan otomatis yang menebak kombinasi karakter sandi secara masif dan cepat oleh komputer."
      },
      {
        question: "Fitur keamanan ganda apa yang sangat dianjurkan untuk diaktifkan agar akun tetap aman meski password dibobol?",
        options: [
          "Autentikasi Dua Faktor (2FA / Two-Factor Authentication)",
          "Mode Pesawat (Airplane Mode)",
          "Wallpaper Gelap di layar ponsel",
          "Menghapus seluruh kontak telepon"
        ],
        correctAnswer: 0,
        explanation: "2FA menambahkan lapisan perlindungan ekstra dengan meminta bukti kepemilikan perangkat fisik (seperti aplikasi authenticator atau biometrik)."
      }
    ]
  },
  {
    id: 34,
    title: "Jam Atom: Penunjuk Waktu Paling Akurat untuk Navigasi GPS!",
    category: "sains",
    categoryName: "Sains & Teknologi",
    icon: "⏱️",
    shortSummary: "Tanpa jam atom yang super akurat di satelit luar angkasa, aplikasi peta dan ojek online di HP-mu akan tersesat berkilometer-kilometer!",
    fullExplanation: `Bagaimana aplikasi navigasi GPS (Global Positioning System) di ponselmu bisa mengetahui lokasimu di jalan raya dengan ketepatan beberapa meter saja? Rahasianya terletak pada **Jam Atom (Atomic Clock)** yang terpasang di 24 satelit GPS yang mengorbit bumi!

Jam biasa atau jam tangan kuarsa (quartz) bisa meleset beberapa detik setiap bulannya. Namun, Jam Atom mengukur waktu berdasarkan getaran frekuensi gelombang mikro dari atom Cesium-133 yang bergetar tepat 9.192.631.770 kali setiap detiknya! Keakuratan jam atom sangat mutlak: jam ini hanya akan meleset 1 detik setelah beroperasi selama **300 juta tahun**! Jika jam atom di satelit GPS meleset hanya 1 mikrodetik (seperjuta detik) saja, peta navigasimu di Bumi akan meleset sejauh 300 meter!`,
    funFact: "Karena efek teori relativitas Einstein, waktu di orbit satelit luar angkasa berjalan sedikit lebih cepat sekitar 38 mikrodetik per hari dibanding jam di bumi, sehingga teknisi NASA/GPS harus terus mengoreksi jam atom satelit setiap hari agar navigasi kita tetap akurat!",
    source: "National Institute of Standards and Technology (NIST) & NASA GPS Science",
    quiz: [
      {
        question: "Unsur atom apakah yang paling umum digunakan sebagai standar internasional hitungan detik pada Jam Atom?",
        options: [
          "Besi-56",
          "Cesium-133",
          "Emas-197",
          "Oksigen-16"
        ],
        correctAnswer: 1,
        explanation: "Definisi internasional 1 detik didasarkan pada 9.192.631.770 kali siklus transisi radiasi atom Cesium-133."
      },
      {
        question: "Berapa lama waktu yang dibutuhkan bagi sebuah Jam Atom optik modern untuk meleset sebanyak 1 detik?",
        options: [
          "Sekitar 1 minggu",
          "Sekitar 1 tahun",
          "Sekitar 300 juta tahun",
          "1.000 tahun"
        ],
        correctAnswer: 2,
        explanation: "Kejepitan jam atom tingkat tinggi begitu stabil sehingga simpangan kesalahannya hanya 1 detik setiap ratusan juta tahun."
      }
    ]
  },
  {
    id: 35,
    title: "Burung Garuda Nusantara: Terinspirasi dari Elang Jawa yang Langka!",
    category: "sejarah",
    categoryName: "Sejarah & Budaya Nusantara",
    icon: "🦅",
    shortSummary: "Lambang negara Indonesia, Garuda Pancasila, diwujudkan berdasarkan sosok nyata burung Elang Jawa yang gagah berani dan terancam punah.",
    fullExplanation: `Lambang negara kita, Garuda Pancasila, dirancang oleh Sultan Hamid II dari Pontianak dan diresmikan oleh Presiden Soekarno pada tahun 1950. Dalam mitologi Hindu purba, Garuda adalah kendaraan Dewa Wisnu yang melambangkan kebaikan, kekuatan, dan keberanian.

Namun, apakah Garuda ada di dunia nyata? Ya! Secara zoologi ilmiah, sosok fisik Burung Garuda diidentifikasikan dengan **Elang Jawa (Nisaetus bartelsi)**, satwa endemik pulau Jawa. Ciri khas Elang Jawa yang membuatnya sangat identik dengan Garuda Pancasila adalah adanya jambul (mahkota bulu) sepanjang 12 cm di kepala yang tegak berdiri berwibawa! Sayangnya, Elang Jawa kini berstatus Terancam Punah (Endangered) dengan populasi di alam liar diperkirakan tinggal sekitar 300 hingga 500 pasang saja akibat deforestasi hutan.`,
    funFact: "Jumlah bulu pada Garuda Pancasila melambangkan hari kemerdekaan Indonesia: 17 helai bulu di masing-masing sayap (tanggal 17), 8 helai bulu di ekor (bulan Agustus / bulan ke-8), 19 helai bulu di pangkal ekor, dan 45 helai bulu di leher (tahun 1945)!",
    source: "Sultan Hamid II Archives & Kementerian Lingkungan Hidup dan Kehutanan RI (KLHK)",
    quiz: [
      {
        question: "Burung endemik asli Indonesia spesies apakah yang menjadi referensi visual nyata dari lambang Garuda Pancasila?",
        options: [
          "Burung Cendrawasih Papua",
          "Elang Jawa (Nisaetus bartelsi)",
          "Elang Bondol Jakarta",
          "Burung Merak Hijau"
        ],
        correctAnswer: 1,
        explanation: "Elang Jawa dipilih sebagai satwa nasional maskot langka Indonesia dan bentuk fisiknya yang berjambul menjadi representasi Garuda Pancasila."
      },
      {
        question: "Apa makna historis dari jumlah 17 helai bulu sayap dan 8 helai bulu ekor pada lambang Garuda Pancasila?",
        options: [
          "Jumlah pulau terbesar di Indonesia",
          "Melambangkan tanggal 17 dan bulan 8 (Agustus) hari Proklamasi Kemerdekaan RI",
          "Jumlah raja-raja Nusantara zaman dulu",
          "Jumlah pasal dalam UUD 1945"
        ],
        correctAnswer: 1,
        explanation: "Konstruksi jumlah bulu Garuda Pancasila (17-8-19-45) secara khusus menyimbolkan tanggal bersejarah Kemerdekaan Indonesia, 17 Agustus 1945."
      }
    ]
  }
];

// Ekspor data jika digunakan di modul atau jadikan variabel global window
if (typeof window !== 'undefined') {
  window.FACTS_DATABASE = FACTS_DATABASE;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = FACTS_DATABASE;
}
