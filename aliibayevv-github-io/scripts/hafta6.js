/* ==========================================================
   Hafta 6 — JavaScript
   1) Öğrenci Not Hesaplama
   2) Birim Dönüştürücü
   ========================================================== */

// =========== Uygulama 1: Not Hesaplama ===========
document.getElementById("notHesaplaBtn").addEventListener("click", function () {
  const adInput   = document.getElementById("adSoyad");
  const vizeInput = document.getElementById("vize");
  const finalInput= document.getElementById("final");
  const sonuc     = document.getElementById("notSonuc");

  const ad    = adInput.value.trim();
  const vize  = parseFloat(vizeInput.value);
  const fin   = parseFloat(finalInput.value);

  // Eksik alan kontrolü
  if (!ad || isNaN(vize) || isNaN(fin)) {
    sonuc.className = "result fail";
    sonuc.innerHTML = "Lütfen tüm alanları doğru şekilde doldurunuz.";
    return;
  }
  if (vize < 0 || vize > 100 || fin < 0 || fin > 100) {
    sonuc.className = "result fail";
    sonuc.innerHTML = "Notlar 0 ile 100 arasında olmalıdır.";
    return;
  }

  // Ortalama: vize %40, final %60
  const ortalama = (vize * 0.4) + (fin * 0.6);

  // Harf notu
  let harf = "";
  if      (ortalama >= 90) harf = "AA";
  else if (ortalama >= 85) harf = "BA";
  else if (ortalama >= 75) harf = "BB";
  else if (ortalama >= 65) harf = "CB";
  else if (ortalama >= 55) harf = "CC";
  else if (ortalama >= 50) harf = "DC";
  else if (ortalama >= 40) harf = "DD";
  else                     harf = "FF";

  // Durum
  const durum = (ortalama >= 50) ? "Geçti" : "Kaldı";

  sonuc.className = (ortalama >= 50) ? "result success" : "result fail";
  sonuc.innerHTML =
    "<span class='name'>" + ad + "</span>" +
    "<span class='line'>Ortalama: " + ortalama.toFixed(2) + "</span>" +
    "<span class='line'>Harf Notu: " + harf + "</span>" +
    "<span class='line'>Durum: " + durum + "</span>";
});

// =========== Uygulama 2: Birim Dönüştürücü ===========
document.getElementById("birimHesaplaBtn").addEventListener("click", function () {
  const deger = parseFloat(document.getElementById("deger").value);
  const tip   = document.getElementById("donusumTipi").value;
  const cikti = document.getElementById("birimSonuc");

  if (isNaN(deger)) {
    cikti.className = "result fail";
    cikti.innerHTML = "Lütfen geçerli bir sayı giriniz.";
    return;
  }

  let sonuc = 0;
  let etiket = "";

  switch (tip) {
    case "c-f":
      sonuc = (deger * 9/5) + 32;
      etiket = deger + " °C = " + sonuc.toFixed(2) + " °F";
      break;
    case "f-c":
      sonuc = (deger - 32) * 5/9;
      etiket = deger + " °F = " + sonuc.toFixed(2) + " °C";
      break;
    case "c-k":
      sonuc = deger + 273.15;
      etiket = deger + " °C = " + sonuc.toFixed(2) + " K";
      break;
    case "m-km":
      sonuc = deger / 1000;
      etiket = deger + " m = " + sonuc.toFixed(3) + " km";
      break;
    case "km-m":
      sonuc = deger * 1000;
      etiket = deger + " km = " + sonuc.toFixed(2) + " m";
      break;
    case "km-mil":
      sonuc = deger * 0.621371;
      etiket = deger + " km = " + sonuc.toFixed(3) + " mil";
      break;
    case "mil-km":
      sonuc = deger / 0.621371;
      etiket = deger + " mil = " + sonuc.toFixed(3) + " km";
      break;
    case "kg-g":
      sonuc = deger * 1000;
      etiket = deger + " kg = " + sonuc.toFixed(2) + " g";
      break;
    case "g-kg":
      sonuc = deger / 1000;
      etiket = deger + " g = " + sonuc.toFixed(3) + " kg";
      break;
    default:
      etiket = "Bilinmeyen dönüşüm.";
  }

  cikti.className = "result success";
  cikti.innerHTML = "<span class='name'>Sonuç</span><span class='line'>" + etiket + "</span>";
});
