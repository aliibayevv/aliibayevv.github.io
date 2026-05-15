/* ==========================================================
   Hafta 7 — JavaScript
   1) Tema (koyu / açık) değiştirme
   2) Başvuru formundan özet oluşturma
   ========================================================== */

// ---------- Tema değiştirme ----------
const temaBtn = document.getElementById("temaBtn");

temaBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    temaBtn.textContent = "Açık Temaya Geç";
  } else {
    temaBtn.textContent = "Koyu Temaya Geç";
  }
});

// ---------- Form Submit ----------
const form         = document.getElementById("basvuruForm");
const sonucAlani   = document.getElementById("sonucAlani");
const temizleBtn   = document.getElementById("temizleBtn");

form.addEventListener("submit", function (event) {
  event.preventDefault();          // sayfa yenilenmesin

  // Alanları al
  const adSoyad = document.getElementById("adSoyad").value.trim();
  const eposta  = document.getElementById("eposta").value.trim();
  const bolum   = document.getElementById("bolum").value.trim();
  const sinif   = document.getElementById("sinif").value;
  const oturum  = document.getElementById("oturum").value;
  const tur     = document.getElementById("tur").value;
  const mesaj   = document.getElementById("mesaj").value.trim();
  const onay    = document.getElementById("onay").checked;

  // Eksik alan kontrolü
  if (!adSoyad || !eposta || !bolum || !sinif || !oturum || !tur || !mesaj) {
    sonucAlani.innerHTML =
      '<div class="alert alert-danger mb-0"><strong>Eksik alan!</strong> Lütfen tüm zorunlu alanları doldurunuz.</div>';
    return;
  }

  if (!onay) {
    sonucAlani.innerHTML =
      '<div class="alert alert-warning mb-0"><strong>Onay gerekli!</strong> Bilgilerinizin kullanılmasını onaylayın.</div>';
    return;
  }

  // E-posta basit doğrulama
  if (!eposta.includes("@") || !eposta.includes(".")) {
    sonucAlani.innerHTML =
      '<div class="alert alert-danger mb-0"><strong>Geçersiz e-posta!</strong> Lütfen geçerli bir e-posta giriniz.</div>';
    return;
  }

  // Başvuru özeti üret
  const ozet =
    '<div class="card border-success">' +
      '<div class="card-header bg-success text-white">' +
        '<strong>Başvuru Özeti</strong> · ' + adSoyad +
      '</div>' +
      '<div class="card-body">' +
        '<div class="row">' +
          '<div class="col-md-6">' +
            '<p class="mb-2"><strong>Ad Soyad:</strong><br>' + adSoyad + '</p>' +
            '<p class="mb-2"><strong>E-posta:</strong><br>' + eposta + '</p>' +
            '<p class="mb-2"><strong>Bölüm:</strong><br>' + bolum + '</p>' +
            '<p class="mb-2"><strong>Sınıf:</strong><br>' + sinif + '</p>' +
          '</div>' +
          '<div class="col-md-6">' +
            '<p class="mb-2"><strong>Oturum:</strong><br>' + oturum + '</p>' +
            '<p class="mb-2"><strong>Katılım Türü:</strong><br>' + tur + '</p>' +
            '<p class="mb-2"><strong>Mesaj:</strong><br>' + mesaj + '</p>' +
            '<p class="mb-0"><span class="badge bg-success">Onaylandı</span></p>' +
          '</div>' +
        '</div>' +
      '</div>' +
    '</div>';

  sonucAlani.innerHTML = ozet;

  // sayfa sonuca scroll
  sonucAlani.scrollIntoView({ behavior: "smooth", block: "start" });
});

// ---------- Form temizleme ----------
temizleBtn.addEventListener("click", function () {
  form.reset();
  sonucAlani.innerHTML =
    '<div class="alert placeholder-alert mb-0">Henüz başvuru özeti oluşturulmadı. Formu doldurduktan sonra sonuç burada görünecek.</div>';
});
