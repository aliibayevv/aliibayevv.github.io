// ===================================================
// Hafta 7 - JavaScript Etkileşimleri
// 1) Tema değiştirme
// 2) Form verilerinden başvuru özeti üretme
// ===================================================

// --- 1) TEMA DEĞİŞTİRME ---
const temaButonu = document.getElementById("temaButonu");

temaButonu.addEventListener("click", function () {
    // classList.toggle ile body üzerindeki 'koyu-tema' sınıfını aç/kapa
    document.body.classList.toggle("koyu-tema");

    // Butonun yazısını güncelle
    if (document.body.classList.contains("koyu-tema")) {
        temaButonu.textContent = "Açık Temaya Geç";
    } else {
        temaButonu.textContent = "Koyu Temaya Geç";
    }
});


// --- 2) FORM SUBMIT → BAŞVURU ÖZETİ ---
const form = document.getElementById("basvuruFormu");
const sonucAlani = document.getElementById("sonucAlani");

form.addEventListener("submit", function (event) {
    // Sayfanın yenilenmesini engelle
    event.preventDefault();

    // Form alanlarının değerlerini al
    const adSoyad = document.getElementById("adSoyad").value.trim();
    const eposta  = document.getElementById("eposta").value.trim();
    const bolum   = document.getElementById("bolum").value.trim();
    const sinif   = document.getElementById("sinif").value;
    const oturum  = document.getElementById("oturum").value;
    const katilim = document.getElementById("katilim").value;
    const mesaj   = document.getElementById("mesaj").value.trim();
    const onay    = document.getElementById("onay").checked;

    // Eksik alan kontrolü
    if (!adSoyad || !eposta || !bolum || !sinif || !oturum || !katilim) {
        sonucAlani.innerHTML = `
            <div class="alert alert-danger rounded-4" role="alert">
                <strong>Eksik alan var!</strong> Lütfen tüm zorunlu alanları doldurun.
            </div>
        `;
        return;
    }

    // E-posta basit format kontrolü
    if (!eposta.includes("@") || !eposta.includes(".")) {
        sonucAlani.innerHTML = `
            <div class="alert alert-warning rounded-4" role="alert">
                <strong>Geçersiz e-posta!</strong> Lütfen geçerli bir e-posta adresi girin.
            </div>
        `;
        return;
    }

    // Onay kutusu kontrolü
    if (!onay) {
        sonucAlani.innerHTML = `
            <div class="alert alert-warning rounded-4" role="alert">
                <strong>Onay gerekli!</strong> Devam etmek için onay kutusunu işaretleyin.
            </div>
        `;
        return;
    }

    // Tüm kontroller geçtiyse → başarılı özet kartı oluştur
    sonucAlani.innerHTML = `
        <div class="card shadow-sm rounded-4 border-0">
            <div class="card-body p-4">
                <div class="d-flex justify-content-between align-items-center flex-wrap mb-3">
                    <h4 class="fw-bold mb-0">Başvuru Özeti</h4>
                    <span class="badge bg-success px-3 py-2">Başarılı</span>
                </div>
                <p class="text-secondary">Aşağıdaki bilgilerle başvurunuz alınmıştır:</p>
                <ul class="list-group list-group-flush mb-3">
                    <li class="list-group-item d-flex justify-content-between px-0">
                        <span class="fw-semibold">Ad Soyad:</span> <span>${adSoyad}</span>
                    </li>
                    <li class="list-group-item d-flex justify-content-between px-0">
                        <span class="fw-semibold">E-posta:</span> <span>${eposta}</span>
                    </li>
                    <li class="list-group-item d-flex justify-content-between px-0">
                        <span class="fw-semibold">Bölüm:</span> <span>${bolum}</span>
                    </li>
                    <li class="list-group-item d-flex justify-content-between px-0">
                        <span class="fw-semibold">Sınıf:</span> <span>${sinif}</span>
                    </li>
                    <li class="list-group-item d-flex justify-content-between px-0">
                        <span class="fw-semibold">Oturum:</span> <span>${oturum}</span>
                    </li>
                    <li class="list-group-item d-flex justify-content-between px-0">
                        <span class="fw-semibold">Katılım Türü:</span> <span>${katilim}</span>
                    </li>
                    ${mesaj ? `
                    <li class="list-group-item px-0">
                        <div class="fw-semibold mb-1">Kısa Mesaj:</div>
                        <div class="text-secondary">${mesaj}</div>
                    </li>` : ""}
                </ul>
                <div class="alert alert-success mb-0 rounded-3">
                    Sayın <strong>${adSoyad}</strong>, başvurunuz başarıyla kayıt edilmiştir.
                    Bilgilendirme <strong>${eposta}</strong> adresine gönderilecektir.
                </div>
            </div>
        </div>
    `;

    // Sonuç alanına sayfayı kaydır
    sonucAlani.scrollIntoView({ behavior: "smooth", block: "start" });
});


// --- Formu temizleme butonuna bastığında sonuç alanını da sıfırla ---
form.addEventListener("reset", function () {
    sonucAlani.innerHTML = `
        <div class="alert alert-info rounded-4 mb-0" role="alert">
            Henüz başvuru özeti oluşturulmadı. Formu doldurduktan sonra sonuç burada görünecek.
        </div>
    `;
});
