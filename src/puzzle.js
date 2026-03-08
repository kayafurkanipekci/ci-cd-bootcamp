// ╔══════════════════════════════════════════════════════════════╗
// ║  🔍 KAYIP YAZILIMCININ ŞİFRESİ                              ║
// ║                                                              ║
// ║  Efsanevi yazılımcı Ada, şirketten ayrılmadan önce           ║
// ║  gizli bir mesaj bıraktı. Bu mesajı çözmek için              ║
// ║  aşağıdaki 10 fonksiyonu doğru şekilde tamamlamalısın.       ║
// ║                                                              ║
// ║  Her geçen test bir İPUCU KELİMESİ ortaya çıkaracak.         ║
// ║  Tüm ipuçları bir araya geldiğinde Ada'nın gizli             ║
// ║  mesajını okuyabileceksin!                                   ║
// ║                                                              ║
// ║  ⚠️  Sadece TODO yazan yerleri düzenle!                      ║
// ║  ⚠️  Her fonksiyonu tamamladıktan sonra git push yap!        ║
// ║  ⚠️  GitHub Actions sekmesinden testleri takip et!            ║
// ╚══════════════════════════════════════════════════════════════╝

// ═══════════════════════════════════════
// 📌 İPUCU 1/10 — Toplama
// Zorluk: ⭐
// ═══════════════════════════════════════
// İki sayıyı toplayıp sonucu döndürün.
// Örnek: topla(3, 5) → 8
function topla(a, b) {
  // TODO: Kodunuzu buraya yazın

}

// ═══════════════════════════════════════
// 📌 İPUCU 2/10 — Tersine Çevirme
// Zorluk: ⭐
// ═══════════════════════════════════════
// Verilen metni tersine çevirin.
// Örnek: terstenYaz("merhaba") → "abahrem"
function terstenYaz(str) {
  // TODO: Kodunuzu buraya yazın

}

// ═══════════════════════════════════════
// 📌 İPUCU 3/10 — Baş Harf Büyütme
// Zorluk: ⭐⭐
// ═══════════════════════════════════════
// Her kelimenin ilk harfini büyük yapın.
// Örnek: basHarfBuyut("merhaba dünya") → "Merhaba Dünya"
function basHarfBuyut(str) {
  // TODO: Kodunuzu buraya yazın

}

// ═══════════════════════════════════════
// 📌 İPUCU 4/10 — Tek Sayıları Filtrele
// Zorluk: ⭐⭐
// ═══════════════════════════════════════
// Bir diziden sadece tek sayıları döndürün.
// Örnek: tekSayilariFiltrele([1,2,3,4,5]) → [1,3,5]
function tekSayilariFiltrele(dizi) {
  // TODO: Kodunuzu buraya yazın

}

// ═══════════════════════════════════════
// 📌 İPUCU 5/10 — En Büyük Elemanı Bul
// Zorluk: ⭐⭐
// ═══════════════════════════════════════
// Bir dizideki en büyük sayıyı bulun.
// Math.max KULLANMADAN çözün (döngü ile).
// Örnek: enBuyukBul([3, 7, 2, 9, 1]) → 9
function enBuyukBul(dizi) {
  // TODO: Kodunuzu buraya yazın (Math.max kullanmayın!)

}

// ═══════════════════════════════════════
// 📌 İPUCU 6/10 — Palindrom Kontrolü
// Zorluk: ⭐⭐⭐
// ═══════════════════════════════════════
// Verilen metin palindrom mu kontrol edin.
// Büyük/küçük harf ve boşlukları yok sayın.
// Örnek: palindromMu("Ana") → true
// Örnek: palindromMu("Kod") → false
function palindromMu(str) {
  // TODO: Kodunuzu buraya yazın

}

// ═══════════════════════════════════════
// 📌 İPUCU 7/10 — Kelime Sayacı
// Zorluk: ⭐⭐⭐
// ═══════════════════════════════════════
// Bir metindeki kelime sayısını döndürün.
// Birden fazla boşluk olabilir, dikkat!
// Örnek: kelimeSay("  Merhaba   dünya  ") → 2
function kelimeSay(str) {
  // TODO: Kodunuzu buraya yazın

}

// ═══════════════════════════════════════
// 📌 İPUCU 8/10 — Asal Sayı Kontrolü
// Zorluk: ⭐⭐⭐
// ═══════════════════════════════════════
// Verilen sayının asal olup olmadığını kontrol edin.
// Örnek: asalMi(7) → true
// Örnek: asalMi(4) → false
// Örnek: asalMi(1) → false
function asalMi(n) {
  // TODO: Kodunuzu buraya yazın

}

// ═══════════════════════════════════════
// 📌 İPUCU 9/10 — Sezar Şifre Çözücü
// Zorluk: ⭐⭐⭐⭐
// ═══════════════════════════════════════
// Sezar şifresini çözün! Her harf, alfabede
// 'kaydırma' kadar geri kaydırılmalı.
// Sadece büyük İngilizce harflerle (A-Z) çalışın.
// Örnek: sezarCoz("CDE", 2) → "ABC"
// Örnek: sezarCoz("BCD", 1) → "ABC"
function sezarCoz(str, kaydirma) {
  // TODO: Kodunuzu buraya yazın

}

// ═══════════════════════════════════════
// 📌 İPUCU 10/10 — Gizli Mesajı Birleştir
// Zorluk: ⭐⭐⭐⭐
// ═══════════════════════════════════════
// Bir nesne (object) içindeki ipuçlarını
// anahtar sırasına göre birleştirip tek bir
// cümle olarak döndürün.
// Örnek:
//   gizliMesaj({2: "dünya", 1: "merhaba"})
//   → "merhaba dünya"
function gizliMesaj(ipuclari) {
  // TODO: Kodunuzu buraya yazın

}

// ════════════════════════════════════════
// 🚫 AŞAĞISINI DEĞİŞTİRMEYİN!
// ════════════════════════════════════════
module.exports = {
  topla,
  terstenYaz,
  basHarfBuyut,
  tekSayilariFiltrele,
  enBuyukBul,
  palindromMu,
  kelimeSay,
  asalMi,
  sezarCoz,
  gizliMesaj,
};
