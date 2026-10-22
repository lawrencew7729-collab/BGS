/* BGS ELECTRICAL TRADING — EN/BM language switcher (standalone, zero deps) */
(function () {
  var KEY = 'bgs-lang';
  var DEF = 'en';

  /* BM translations only. EN is the authored HTML (captured at load & restored). */
  var T = {
    ms: {
      'nav.home': 'Utama',
      'nav.about': 'Tentang Kami',
      'nav.products': 'Produk',
      'nav.products.m': 'Produk',
      'p.essential': 'Produk LV Penting',
      'p.cables': 'Kabel',
      'p.automation': 'Komponen Automasi Elektrik Industri',
      'p.automation.m': 'Automasi Industri',
      'p.measuring': 'Alat Pengukur Elektrik',
      'p.measuring.m': 'Alat Pengukur',
      'p.hand': 'Alat Tangan',
      'p.plug': 'Palam & Soket (IP MAN)',
      'p.lighting': 'Pencahayaan',
      'p.switches': 'Suis',
      'p.pvc': 'Paip PVC',
      'p.trunking': 'Trunking',
      'p.fans': 'Kipas',
      'p.water': 'Pemanas Air',
      'p.exit': 'Tanda Keluar & Lampu Kecemasan',
      'p.exit.m': 'Tanda Keluar & Kecemasan',
      'p.metal': 'Kotak Logam',
      'p.earthing': 'Pembumian &amp; Perlindungan Kilat',
      'pd.earthing': 'Sistem pembumian dan perlindungan kilat untuk pemasangan yang selamat dan boleh dipercayai.',
      'seo.about.title': 'Tentang Produk Elektrik Kami',
      'seo.about.p1': 'BGS Electrical Trading ialah pembekal elektrik yang berpangkalan di Taman Permata, Kuala Lumpur, melayani kontraktor, pemaju, peruncit dan pasukan penyelenggaraan di seluruh Kuala Lumpur, Selangor dan Lembah Klang. Rangkaian kami merangkumi produk penting yang diperlukan untuk memastikan pemasangan elektrik kediaman, komersial dan industri beroperasi dengan lancar — dari bekalan masuk sehingga ke titik penggunaan akhir.',
      'seo.about.p2': 'Rangkaian kabel kami termasuk kabel berpenebat PVC, kabel berperisai dan kabel kalis api untuk pengagihan kuasa, sub-mains dan litar keselamatan nyawa, bersama kord fleksibel dan pendawaian gred industri. Untuk papan suis dan papan pengagihan kami membekalkan keperluan voltan rendah seperti MCCB, ELCB, kontaktor, geganti beban lampau, butang tekan dan lampu pandu, termasuk rangkaian Metasol MCCB dan MC/TOR.',
      'seo.about.p3': 'Untuk kerja automasi dan kawalan kami menyediakan pemasa, pembilang, geganti perlindungan, komponen kawalan motor serta palam dan soket industri, termasuk rangkaian kalis cuaca berkadar IP untuk pemasangan luar dan kawasan basah. Pilihan pencahayaan kami merangkumi panel LED, batten, lampu siling dan lampu limpah daripada Philips dan Toshiba, manakala rangkaian suis dan soket kami termasuk aksesori pendawaian Honeywell, MK, Schneider, Mind dan Crown.',
      'seo.about.p4': 'Produk pemasangan menjadi tulang belakang setiap projek. Kami menyimpan konduit dan trunking PVC, dulang kabel wire mesh, kotak logam, aksesori pembumian loyang dan tembaga, komponen perlindungan kilat, gland kabel dan lug. Rangkaian alat kami merangkumi alat tangan profesional dan instrumen pengukur ketepatan daripada Kyoritsu, Sanwa, Uni-T dan Anly untuk kerja ujian, pentauliahan dan penyelenggaraan. Kami juga membekalkan kipas siling, kipas ekzos dan pemanas air Joven untuk pemasangan kediaman dan komersial.',
      'seo.faq.title': 'Soalan Lazim',
      'seo.faq.q1': 'Adakah anda menghantar di luar Kuala Lumpur?',
      'seo.faq.a1': 'Ya. Kami membekalkan pelanggan di seluruh Kuala Lumpur, Selangor dan Lembah Klang. Urusan penghantaran bergantung pada saiz pesanan dan lokasi — hubungi kami di 03-4161 3968 untuk pengesahan.',
      'seo.faq.q2': 'Jenama apa yang anda bawa?',
      'seo.faq.a2': 'Kabel: Fajar, Megakabel, Southern, Champion, Feema, Super-A, Fighter dan YLI. Suis dan kawalan: Metasol MCCB, Metasol MC/TOR, Taian, Schneider dan Anly. Pencahayaan: Philips, Toshiba, YLI, Nikkon dan Perkunas. Suis dan soket: Honeywell, MK, Schneider, Mind dan Crown. Instrumen ujian: Kyoritsu, Sanwa, Uni-T dan Anly. Pembumian dan perlindungan kilat: Toyo.',
      'seo.faq.q3': 'Adakah anda membekalkan kepada kontraktor dan pemaju?',
      'seo.faq.a3': 'Ya. Sebahagian besar perniagaan kami membekalkan kontraktor elektrik, perunding M&amp;E dan pemaju hartanah dengan kuantiti projek dan penghantaran berperingkat.',
      'seo.faq.q4': 'Bolehkah saya meminta sebut harga atau harga pukal?',
      'seo.faq.a4': 'Ya. Hantar senarai item dan kuantiti anda melalui telefon atau WhatsApp (03-4161 3968 / +60 12-299 7839) dan kami akan mengesahkan harga serta ketersediaan stok.',
      'seo.faq.q5': 'Bolehkah saya memuat turun katalog produk?',
      'seo.faq.a5': 'Ya. Setiap logo jenama di halaman ini dipautkan ke PDF katalognya, lengkap dengan spesifikasi teknikal, dimensi dan kod pesanan.',
      'seo.faq.q6': 'Adakah anda memberi nasihat teknikal tentang pemilihan produk?',
      'seo.faq.a6': 'Ya. Pasukan kami boleh membantu memadankan saiz kabel, kadaran pemutus, jenis konduit, spesifikasi pencahayaan dan keperluan pembumian dengan projek anda.',
      'seo.faq.q7': 'Apakah waktu perniagaan dan lokasi anda?',
      'seo.faq.a7': 'Isnin hingga Jumaat 8:30pg–6:00ptg, Sabtu 8:30pg–5:00ptg. Kami terletak di 2719, Jalan Permata 4, Taman Permata, 53300 Kuala Lumpur.',
      'seo.faq.q8': 'Adakah anda membekalkan produk pembumian dan perlindungan kilat?',
      'seo.faq.a8': 'Ya. Kami membawa produk pembumian dan perlindungan kilat Toyo termasuk tag bumi tembaga, rod bumi, kotak pautan ujian, terminal udara dan aksesori perlindungan kilat.',
      'hero.title': 'Kuasa Untuk Masa Depan Anda',
      'hero.sub': 'Pembekal elektrik di Kuala Lumpur — dipercayai untuk kabel, suis, pencahayaan dan automasi di seluruh Lembah Klang.',
      'hero.cta': 'Terokai Produk',
      'f1.title': 'Kualiti Boleh Dipercayai',
      'f1.desc': 'Bekalan elektrik yang diuji dan diperakui untuk keselamatan dan prestasi maksimum.',
      'f2.title': 'Penghantaran Pantas',
      'f2.desc': 'Logistik yang cekap memastikan bahan projek anda tiba tepat pada masanya.',
      'f3.title': 'Sokongan Pakar',
      'f3.desc': 'Pasukan khusus menyediakan nasihat dan bantuan teknikal profesional.',
      'brands.title': 'Jenama Dipercayai',
      'brands.sub': 'Kami bekerjasama dengan jenama terkemuka yang boleh anda percayai',
      'about.kicker': 'Temui Kisah Kami',
      'about.heading': 'Tentang BGS<br>Electrical Trading',
      'about.p1': '<strong class="text-gray-900 font-bold text-xl">BGS ELECTRICAL TRADING</strong> ialah pembekal elektrik yang mantap, komited untuk menyediakan kabel, paip, dan komponen elektrik am berkualiti tinggi kepada kontraktor, pemaju, dan peruncit di seluruh rantau ini.',
      'about.p2': 'Kami berbangga menawarkan pelbagai produk diperakui termasuk Kabel Kalis Api, Kabel Berperisai, Kabel Berpenebat PVC, dan paip tugas berat yang direka untuk memenuhi piawaian keselamatan dan industri yang ketat.',
      'about.vision.title': 'Visi Kami',
      'about.vision.desc': 'Untuk menjadi rakan kongsi yang paling dipercayai dan diutamakan dalam industri rantaian bekalan elektrik, dikenali kerana integriti dan kecemerlangan.',
      'about.mission.title': 'Misi Kami',
      'about.mission.desc': 'Untuk sentiasa menyampaikan penyelesaian elektrik yang selamat, inovatif, dan kos efektif sambil mengutamakan kepuasan pelanggan.',
      'prods.title': 'Produk Kami',
      'prods.sub': 'Pelbagai produk elektrik daripada jenama yang dipercayai.',
      'pd.essential': 'Keperluan elektrik Voltan Rendah untuk operasi harian.',
      'pd.automation': 'Komponen elektrik industri dan automasi.',
      'pd.measuring': 'Instrumen pengukur ketepatan untuk ujian elektrik.',
      'pd.hand': 'Alat tangan profesional untuk kerja elektrik.',
      'pd.plug': 'Palam dan soket industri kalis cuaca. <span class="rainbow-text">Saya Tak Takut HUJAN! 💪</span>',
      'pd.lighting': 'Penyelesaian pencahayaan lengkap untuk kediaman dan komersial.',
      'pd.switches': 'Suis dan aksesori pendawaian berkualiti.',
      'pd.pvc': 'Paip PVC dan penyelesaian konduit untuk kegunaan elektrik dan industri.',
      'pd.trunking': 'Sistem trunking dan pengurusan kabel.',
      'pd.fans': 'Kipas Siling & Kipas Ekzos (Industri & Rumah).',
      'pd.water': 'Penyelesaian pemanas air segera dan simpanan. Kualiti premium daripada Joven.',
      'pd.cables': 'Kabel berkualiti tinggi: berpenebat PVC, berperisai, kalis api &amp; pendawaian gred industri.',
      'pd.exit': 'Papan tanda keselamatan dan pencahayaan kecemasan.',
      'pd.metal': 'Kotak logam untuk pemasangan elektrik.',
      'b.weatherproof': 'Kalis Cuaca',
      'b.pvc': 'Berpenebat PVC',
      'b.armoured': 'Berperisai',
      'b.fr': 'Kalis Api',
      'ft.hq': 'Ibu Pejabat',
      'ft.hours': 'Waktu Operasi',
      'ft.monfri': 'Isn - Jumaat : 8:30pg - 6:00ptg',
      'ft.sat': 'Sabtu : 8:30pg - 5:00ptg',
      'ft.sunday': 'Ahad dibuka secara bergilir-gilir, sila hubungi kami terlebih dahulu untuk menyemak ketersediaan.',
      'ft.copy': 'Hak Cipta © 2026 BGS ELECTRICAL TRADING. Semua Hak Terpelihara.'
    }
  };

  var originals = {};
  function capture() {
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var k = el.getAttribute('data-i18n');
      if (!(k in originals)) originals[k] = el.innerHTML;
    });
  }

  function applyLang() {
    var lang = localStorage.getItem(KEY) || DEF;
    if (T[lang] !== undefined || lang === DEF) {
      document.documentElement.lang = (lang === 'ms') ? 'ms' : 'en';
      document.querySelectorAll('[data-i18n]').forEach(function (el) {
        var k = el.getAttribute('data-i18n');
        if (lang === DEF) { el.innerHTML = originals[k]; return; }
        var txt = T[lang][k];
        if (txt !== undefined) el.innerHTML = txt;
      });
    }
    /* active state on all lang buttons */
    document.querySelectorAll('.lang-btn').forEach(function (b) {
      var on = b.getAttribute('data-lang') === lang;
      b.classList.toggle('lang-on', on);
      b.setAttribute('aria-pressed', on ? 'true' : 'false');
    });
  }

  window.switchLang = function (lang) {
    if (lang === 'en' || T[lang]) { localStorage.setItem(KEY, lang); applyLang(); }
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () { capture(); applyLang(); });
  } else { capture(); applyLang(); }
})();
