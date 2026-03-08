const {
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
} = require("../src/puzzle");

// ╔═══════════════════════════════════════════════════════════╗
// ║  🔍 KAYIP YAZILIMCININ ŞİFRESİ — TEST DOSYASI           ║
// ║                                                           ║
// ║  ⚠️  BU DOSYAYI DEĞİŞTİRMEYİN!                          ║
// ║  📝  Sadece src/puzzle.js dosyasını düzenleyin.            ║
// ║                                                           ║
// ║  Her geçen test bir ipucu kelimesi ortaya çıkarır.         ║
// ║  Tüm testler geçtiğinde Ada'nın mesajı açığa çıkar!       ║
// ╚═══════════════════════════════════════════════════════════╝

const IPUCLARI = {};

// ─────────────────────────────────────
// 📌 İPUCU 1/10 — Toplama
// ─────────────────────────────────────
describe("İpucu 1: Toplama", () => {
  test("iki pozitif sayıyı toplar", () => {
    expect(topla(3, 5)).toBe(8);
  });

  test("negatif sayılarla çalışır", () => {
    expect(topla(-3, -7)).toBe(-10);
  });

  test("sıfır ile çalışır", () => {
    expect(topla(0, 42)).toBe(42);
  });

  test("🔑 İpucu kelimesi ortaya çıktı!", () => {
    expect(topla(100, 200)).toBe(300);
    IPUCLARI[1] = "KODLAMAK";
    console.log('\n    🟢 İpucu 1/10: "KODLAMAK"\n');
  });
});

// ─────────────────────────────────────
// 📌 İPUCU 2/10 — Tersine Çevirme
// ─────────────────────────────────────
describe("İpucu 2: Tersine Çevirme", () => {
  test("basit metni çevirir", () => {
    expect(terstenYaz("merhaba")).toBe("abahrem");
  });

  test("tek karakteri döndürür", () => {
    expect(terstenYaz("a")).toBe("a");
  });

  test("🔑 İpucu kelimesi ortaya çıktı!", () => {
    expect(terstenYaz("rib")).toBe("bir");
    IPUCLARI[2] = "BIR";
    console.log('\n    🟢 İpucu 2/10: "BİR"\n');
  });
});

// ─────────────────────────────────────
// 📌 İPUCU 3/10 — Baş Harf Büyütme
// ─────────────────────────────────────
describe("İpucu 3: Baş Harf Büyütme", () => {
  test("tek kelimeyi büyütür", () => {
    expect(basHarfBuyut("merhaba")).toBe("Merhaba");
  });

  test("birden fazla kelimeyi büyütür", () => {
    expect(basHarfBuyut("merhaba dünya")).toBe("Merhaba Dünya");
  });

  test("zaten büyük harfleri korur", () => {
    expect(basHarfBuyut("javaScript dili")).toBe("JavaScript Dili");
  });

  test("🔑 İpucu kelimesi ortaya çıktı!", () => {
    expect(basHarfBuyut("süper güç")).toBe("Süper Güç");
    IPUCLARI[3] = "SUPER";
    console.log('\n    🟢 İpucu 3/10: "SÜPER"\n');
  });
});

// ─────────────────────────────────────
// 📌 İPUCU 4/10 — Tek Sayı Filtreleme
// ─────────────────────────────────────
describe("İpucu 4: Tek Sayıları Filtrele", () => {
  test("karışık diziden tek sayıları seçer", () => {
    expect(tekSayilariFiltrele([1, 2, 3, 4, 5])).toEqual([1, 3, 5]);
  });

  test("tüm çift dizide boş döner", () => {
    expect(tekSayilariFiltrele([2, 4, 6])).toEqual([]);
  });

  test("negatif tek sayıları da bulur", () => {
    expect(tekSayilariFiltrele([-3, -2, -1, 0])).toEqual([-3, -1]);
  });

  test("🔑 İpucu kelimesi ortaya çıktı!", () => {
    const sonuc = tekSayilariFiltrele([10, 21, 32, 43, 54]);
    expect(sonuc).toEqual([21, 43]);
    IPUCLARI[4] = "GUC";
    console.log('\n    🟢 İpucu 4/10: "GÜÇ"\n');
  });
});

// ─────────────────────────────────────
// 📌 İPUCU 5/10 — En Büyük Eleman
// ─────────────────────────────────────
describe("İpucu 5: En Büyük Elemanı Bul", () => {
  test("pozitif sayılardan en büyüğünü bulur", () => {
    expect(enBuyukBul([3, 7, 2, 9, 1])).toBe(9);
  });

  test("negatif sayılarla çalışır", () => {
    expect(enBuyukBul([-5, -1, -10])).toBe(-1);
  });

  test("tek elemanlı dizi", () => {
    expect(enBuyukBul([42])).toBe(42);
  });

  test("🔑 İpucu kelimesi ortaya çıktı!", () => {
    expect(enBuyukBul([88, 12, 55, 3, 99, 44])).toBe(99);
    IPUCLARI[5] = "DEGIL";
    console.log('\n    🟢 İpucu 5/10: "DEĞİL"\n');
  });
});

// ─────────────────────────────────────
// 📌 İPUCU 6/10 — Palindrom Kontrolü
// ─────────────────────────────────────
describe("İpucu 6: Palindrom Kontrolü", () => {
  test("palindromu tanır", () => {
    expect(palindromMu("aba")).toBe(true);
  });

  test("palindrom olmayanı reddeder", () => {
    expect(palindromMu("merhaba")).toBe(false);
  });

  test("büyük/küçük harf farkını yok sayar", () => {
    expect(palindromMu("Ana")).toBe(true);
  });

  test("boşlukları yok sayar", () => {
    expect(palindromMu("a man a plan a canal panama")).toBe(true);
  });

  test("🔑 İpucu kelimesi ortaya çıktı!", () => {
    expect(palindromMu("kayak")).toBe(true);
    expect(palindromMu("javascript")).toBe(false);
    IPUCLARI[6] = "AMA";
    console.log('\n    🟢 İpucu 6/10: "AMA"\n');
  });
});

// ─────────────────────────────────────
// 📌 İPUCU 7/10 — Kelime Sayacı
// ─────────────────────────────────────
describe("İpucu 7: Kelime Sayacı", () => {
  test("basit cümledeki kelimeleri sayar", () => {
    expect(kelimeSay("merhaba dünya")).toBe(2);
  });

  test("fazla boşlukları yok sayar", () => {
    expect(kelimeSay("  bir   iki   üç  ")).toBe(3);
  });

  test("tek kelime", () => {
    expect(kelimeSay("merhaba")).toBe(1);
  });

  test("boş string sıfır döner", () => {
    expect(kelimeSay("")).toBe(0);
    expect(kelimeSay("   ")).toBe(0);
  });

  test("🔑 İpucu kelimesi ortaya çıktı!", () => {
    expect(kelimeSay("CI CD pipeline deploy test")).toBe(5);
    IPUCLARI[7] = "EN";
    console.log('\n    🟢 İpucu 7/10: "EN"\n');
  });
});

// ─────────────────────────────────────
// 📌 İPUCU 8/10 — Asal Sayı Kontrolü
// ─────────────────────────────────────
describe("İpucu 8: Asal Sayı Kontrolü", () => {
  test("asal sayıları tanır", () => {
    expect(asalMi(2)).toBe(true);
    expect(asalMi(7)).toBe(true);
    expect(asalMi(13)).toBe(true);
  });

  test("asal olmayan sayıları reddeder", () => {
    expect(asalMi(4)).toBe(false);
    expect(asalMi(9)).toBe(false);
    expect(asalMi(15)).toBe(false);
  });

  test("özel durumları doğru döner", () => {
    expect(asalMi(0)).toBe(false);
    expect(asalMi(1)).toBe(false);
    expect(asalMi(-5)).toBe(false);
  });

  test("🔑 İpucu kelimesi ortaya çıktı!", () => {
    expect(asalMi(97)).toBe(true);
    expect(asalMi(100)).toBe(false);
    IPUCLARI[8] = "YAKIN";
    console.log('\n    🟢 İpucu 8/10: "YAKIN"\n');
  });
});

// ─────────────────────────────────────
// 📌 İPUCU 9/10 — Sezar Şifre Çözücü
// ─────────────────────────────────────
describe("İpucu 9: Sezar Şifre Çözücü", () => {
  test("basit kaydırma çözer", () => {
    expect(sezarCoz("CDE", 2)).toBe("ABC");
  });

  test("Z'yi geçen kaydırmayı çözer (wrap around)", () => {
    expect(sezarCoz("ABC", 3)).toBe("XYZ");
  });

  test("büyük kaydırma değeri ile çalışır", () => {
    expect(sezarCoz("LIPPS", 4)).toBe("HELLO");
  });

  test("🔑 İpucu kelimesi ortaya çıktı!", () => {
    expect(sezarCoz("VHB", 5)).toBe("QCW");
    // Asıl ipucu bu şifrede gizli:
    expect(sezarCoz("FRGODPDN", 3)).toBe("CODLAMAK");
    IPUCLARI[9] = "SEY";
    console.log('\n    🟢 İpucu 9/10: "ŞEY"\n');
  });
});

// ─────────────────────────────────────
// 📌 İPUCU 10/10 — Gizli Mesajı Birleştir
// ─────────────────────────────────────
describe("İpucu 10: Gizli Mesajı Birleştir", () => {
  test("sıralı anahtarları birleştirir", () => {
    expect(gizliMesaj({ 1: "hello", 2: "world" })).toBe("hello world");
  });

  test("karışık sıralı anahtarları düzgün birleştirir", () => {
    expect(gizliMesaj({ 3: "!", 1: "CI", 2: "CD" })).toBe("CI CD !");
  });

  test("tek ipucu", () => {
    expect(gizliMesaj({ 1: "merhaba" })).toBe("merhaba");
  });

  test("🔑 Son ipucu! Ada'nın mesajı ortaya çıkıyor!", () => {
    const adaninMesaji = gizliMesaj({
      5: "degil",
      2: "bir",
      8: "yakin",
      1: "Kodlamak",
      4: "guc",
      10: "odur",
      6: "ama",
      3: "super",
      9: "sey",
      7: "en",
    });
    expect(adaninMesaji).toBe(
      "Kodlamak bir super guc degil ama en yakin sey odur"
    );
    IPUCLARI[10] = "ODUR";

    console.log("\n");
    console.log("    ╔═══════════════════════════════════════════════════╗");
    console.log("    ║  🎉 TEBRİKLER! TÜM İPUÇLARINI ÇÖZDÜN!          ║");
    console.log("    ║                                                   ║");
    console.log('    ║  Ada\'nın Gizli Mesajı:                            ║');
    console.log('    ║  "Kodlamak bir süper güç değil,                   ║');
    console.log('    ║   ama en yakın şey odur."                         ║');
    console.log("    ║                                                   ║");
    console.log("    ║  🚀 Pipeline yeşil! Deploy başlıyor...            ║");
    console.log("    ╚═══════════════════════════════════════════════════╝");
    console.log("\n");
  });
});
