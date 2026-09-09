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
      'hero.title': 'Kuasa Untuk Masa Depan Anda',
      'hero.sub': 'BGS ELECTRICAL TRADING ialah pembekal utama anda untuk kabel, paip, dan aksesori elektrik yang sangat boleh dipercayai.',
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
      'pd.cables': 'Pelbagai kabel elektrik berkualiti tinggi termasuk kabel berpenebat PVC, berperisai, kalis api, dan pendawaian gred industri untuk aplikasi kediaman, komersial, dan industri.',
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
