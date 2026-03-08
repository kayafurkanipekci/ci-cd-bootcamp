const cevaplar = require("../cevaplar");

// ╔══════════════════════════════════════════════════════════╗
// ║  🔍 KAYIP YAZILIMCININ ŞİFRESİ — TEST DOSYASI           ║
// ║                                                           ║
// ║  ⚠️  BU DOSYAYI DEĞİŞTİRMEYİN!                          ║
// ║  📝  Sadece cevaplar.js dosyasını düzenleyin.             ║
// ║                                                           ║
// ║  Her doğru cevap, Ada'nın mesajından bir kelime açar.     ║
// ╚══════════════════════════════════════════════════════════╝

// Türkçe karakterleri normalize eden yardımcı fonksiyon
function n(str) {
  return str
    .toString()
    .toLowerCase()
    .replace(/ş/g, "s")
    .replace(/ç/g, "c")
    .replace(/ğ/g, "g")
    .replace(/ü/g, "u")
    .replace(/ö/g, "o")
    .replace(/ı/g, "i")
    .replace(/İ/g, "i")
    .replace(/Ş/g, "s")
    .replace(/Ç/g, "c")
    .replace(/Ğ/g, "g")
    .replace(/Ü/g, "u")
    .replace(/Ö/g, "o")
    .trim();
}

// ─────────────────────────────────────
// 📁 VAKA 1 — Ayna Yazısı
// Cevap: MERHABA (ABAHREM tersten)
// ─────────────────────────────────────
describe("Vaka 1: Ayna Yazısı", () => {
  test("🔍 Ters yazı çözüldü mü?", () => {
    expect(n(cevaplar.vaka1)).toBe("merhaba");
    console.log('\n    🟢 Vaka 1 ÇÖZÜLDÜ! Ada\'nın mesajından kelime 1: "Kodlamak"\n');
  });
});

// ─────────────────────────────────────
// 📁 VAKA 2 — Sayı Alfabesi
// Cevap: ADA (1-4-1)
// ─────────────────────────────────────
describe("Vaka 2: Sayı Alfabesi", () => {
  test("🔍 Sayı şifresi çözüldü mü?", () => {
    expect(n(cevaplar.vaka2)).toBe("ada");
    console.log('\n    🟢 Vaka 2 ÇÖZÜLDÜ! Ada\'nın mesajından kelime 2: "bir"\n');
  });
});

// ─────────────────────────────────────
// 📁 VAKA 3 — Sezar'ın Mirası
// Cevap: GITHUB (JLWKXE shift -3)
// ─────────────────────────────────────
describe("Vaka 3: Sezar'ın Mirası", () => {
  test("🔍 Sezar şifresi çözüldü mü?", () => {
    expect(n(cevaplar.vaka3)).toBe("github");
    console.log(
      '\n    🟢 Vaka 3 ÇÖZÜLDÜ! Ada\'nın mesajından kelime 3: "süper"\n'
    );
  });
});

// ─────────────────────────────────────
// 📁 VAKA 4 — Görünmez Dosya
// Cevap: LIMAN (gizli dosyada yazıyor)
// ─────────────────────────────────────
describe("Vaka 4: Görünmez Dosya", () => {
  test("🔍 Gizli dosya bulundu mu?", () => {
    expect(n(cevaplar.vaka4)).toBe("liman");
    console.log(
      '\n    🟢 Vaka 4 ÇÖZÜLDÜ! Ada\'nın mesajından kelime 4: "güç"\n'
    );
  });
});

// ─────────────────────────────────────
// 📁 VAKA 5 — Üç Şüpheli
// Cevap: DEFNE
// ─────────────────────────────────────
describe("Vaka 5: Üç Şüpheli", () => {
  test("🔍 Doğru şüpheli bulundu mu?", () => {
    expect(n(cevaplar.vaka5)).toBe("defne");
    console.log(
      '\n    🟢 Vaka 5 ÇÖZÜLDÜ! Ada\'nın mesajından kelime 5: "değil"\n'
    );
  });
});

// ─────────────────────────────────────
// 📁 VAKA 6 — Makinelerin Dili
// Cevap: BULUT (binary decode)
// ─────────────────────────────────────
describe("Vaka 6: Makinelerin Dili", () => {
  test("🔍 Binary kod çözüldü mü?", () => {
    expect(n(cevaplar.vaka6)).toBe("bulut");
    console.log(
      '\n    🟢 Vaka 6 ÇÖZÜLDÜ! Ada\'nın mesajından kelime 6: "ama"\n'
    );
  });
});

// ─────────────────────────────────────
// 📁 VAKA 7 — Şiirin Sırrı
// Cevap: YAZILIM (akrostiş)
// ─────────────────────────────────────
describe("Vaka 7: Şiirin Sırrı", () => {
  test("🔍 Akrostiş çözüldü mü?", () => {
    expect(n(cevaplar.vaka7)).toBe("yazilim");
    console.log(
      '\n    🟢 Vaka 7 ÇÖZÜLDÜ! Ada\'nın mesajından kelime 7: "en"\n'
    );
  });
});

// ─────────────────────────────────────
// 📁 VAKA 8 — Hazine Haritası
// Cevap: SIFRE (grid coordinates)
// ─────────────────────────────────────
describe("Vaka 8: Hazine Haritası", () => {
  test("🔍 Koordinatlar çözüldü mü?", () => {
    expect(n(cevaplar.vaka8)).toBe("sifre");
    console.log(
      '\n    🟢 Vaka 8 ÇÖZÜLDÜ! Ada\'nın mesajından kelime 8: "yakın"\n'
    );
  });
});

// ─────────────────────────────────────
// 📁 VAKA 9 — Bip Bip Biiiip
// Cevap: HAZIR (morse code)
// ─────────────────────────────────────
describe("Vaka 9: Bip Bip Biiiip", () => {
  test("🔍 Mors kodu çözüldü mü?", () => {
    expect(n(cevaplar.vaka9)).toBe("hazir");
    console.log(
      '\n    🟢 Vaka 9 ÇÖZÜLDÜ! Ada\'nın mesajından kelime 9: "şey"\n'
    );
  });
});

// ─────────────────────────────────────
// 📁 VAKA 10 — Son Kilit
// Cevap: MUHENDIS (meta-puzzle)
// M(erhaba) U(bulut) H(azir) E(defne)
// N(liman) D(ada) I(github) S(ifre)
// ─────────────────────────────────────
describe("Vaka 10: Son Kilit", () => {
  test("🔍 Son şifre çözüldü mü?", () => {
    expect(n(cevaplar.vaka10)).toBe("muhendis");

    console.log("\n");
    console.log(
      "    ╔═══════════════════════════════════════════════════════╗"
    );
    console.log(
      "    ║                                                       ║"
    );
    console.log(
      "    ║   🎉 TEBRİKLER! TÜM VAKALARI ÇÖZDÜN!                ║"
    );
    console.log(
      "    ║                                                       ║"
    );
    console.log(
      '    ║   Ada\'nın Gizli Mesajı:                               ║'
    );
    console.log(
      '    ║   "Kodlamak bir süper güç değil,                      ║'
    );
    console.log(
      '    ║    ama en yakın şey odur."                            ║'
    );
    console.log(
      "    ║                                                       ║"
    );
    console.log(
      "    ║   Ada'nın Gerçek Kimliği: MÜHENDİS                   ║"
    );
    console.log(
      "    ║                                                       ║"
    );
    console.log(
      "    ║   🚀 Pipeline yeşil! Siten deploy ediliyor...         ║"
    );
    console.log(
      "    ╚═══════════════════════════════════════════════════════╝"
    );
    console.log("\n");
  });
});
