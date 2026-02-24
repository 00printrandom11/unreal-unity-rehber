# Unreal Engine 5 - Turkce Rehber

Unreal Engine 5 ile oyun gelistirmeyi ogrenmeniz icin hazirlanmis kapsamli Turkce rehber uygulamasi. Tarayicinizda calisan bu lokal panel; Blueprint sema diyagramlari, adim adim rehberler, actor hiyerarsisi, degisken/node referanslari ve kisayollari tek bir arayuzde sunar.

**88 kategori**, **486 rehber**, **1423 adim** icerir. Baslangic seviyesinden ileri seviyeye kadar tum konulari kapsar.

![Vite](https://img.shields.io/badge/Vite-6.0-646CFF?logo=vite&logoColor=white)
![Vanilla JS](https://img.shields.io/badge/Vanilla-JS-F7DF1E?logo=javascript&logoColor=black)
![License](https://img.shields.io/badge/License-MIT-green)

---

## Icindekiler

- [Ozellikler](#ozellikler)
- [Kurulum ve Calistirma](#kurulum-ve-calistirma)
- [Icerik Dagilimi](#icerik-dagilimi)
- [Proje Yapisi](#proje-yapisi)
- [Teknoloji](#teknoloji)
- [Katkida Bulunma](#katkida-bulunma)
- [Lisans](#lisans)

---

## Ozellikler

| Ozellik | Aciklama |
|---------|----------|
| **486 Rehber** | Baslangic (238), Orta (144), Ileri (104) seviye. 88 kategori, 1423 adim. |
| **Blueprint Semalari** | Her rehberde renkli ASCII akis diyagramlari, degisken/event listeleri. |
| **Arama & Filtreleme** | Rehberler arasinda anlik arama, zorluk seviyesine gore filtreleme. |
| **Actor Hiyerarsisi** | 52 node. Renkli kartlar, Properties, Events, Methods, Blueprint notlari. |
| **Degisken Referansi** | Boolean, Integer, Float, Vector, String, Rotator, Transform, Enum tipleri. |
| **Node Katalogu** | 200+ Blueprint node aciklamasi ve kullanim ornekleri. |
| **Kisayollar** | Unreal Editor klavye kisayollari listesi. |
| **Modern Koyu Tema** | Tutarli renk paleti, CSS custom properties, premium UI. |

---

## Kurulum ve Calistirma

### Gereksinimler

- [Node.js](https://nodejs.org/) v18 veya ustu

> Node.js yuklu degilse [https://nodejs.org](https://nodejs.org) adresinden indirip kurun. Kurulum sirasinda varsayilan ayarlar yeterlidir.

### Yontem 1 - Hizli Baslatma (Windows)

1. Bu repoyu indirin (Code > Download ZIP) veya `git clone` yapin.
2. Klasorun icindeki **`start_server.bat`** dosyasina cift tiklayin.
3. Ilk calistirmada bagimliliklar otomatik yuklenir.
4. Tarayiciniz otomatik acilir. Acilmazsa terminalde gosterilen `http://localhost:XXXX` adresine gidin.

### Yontem 2 - Terminal ile Calistirma

```bash
# 1. Repoyu klonlayin
git clone https://github.com/KULLANICI_ADI/unreal-rehber.git

# 2. Proje klasorune girin
cd unreal-rehber

# 3. Bagimliliklari yukleyin (sadece ilk seferde)
npm install

# 4. Gelistirme sunucusunu baslatin
npm run dev
```

Tarayicida **http://localhost:5173** adresine gidin.

### Yontem 3 - Production Build (Opsiyonel)

Statik dosyalar olusturup herhangi bir web sunucusunda yayinlayabilirsiniz:

```bash
npm run build
npm run preview
```

`dist/` klasorundeki dosyalar herhangi bir hosting servisine yuklenebilir.

### Sorun Giderme

| Sorun | Cozum |
|-------|-------|
| `node` komutu bulunamadi | Node.js kurun ve terminali yeniden acin. |
| `npm install` hata veriyor | Node.js v18+ yuklu oldugundan emin olun (`node -v`). |
| Tarayici acilmiyor | Terminal ciktisindaki `http://localhost:XXXX` adresini manuel acin. |
| Port kullanimda hatasi | Farkli port deneyin: `npx vite --port 4000` |

---

## Icerik Dagilimi

| | Sayi |
|--|:----:|
| Kategori | 88 |
| Rehber | 486 |
| Adim | 1423 |

| Seviye | Rehber Sayisi | Aciklama |
|--------|:------------:|----------|
| Baslangic | 238 | UE5 arayuzu, Blueprint temelleri, collision, sahne yonetimi, basit mekanikler, animasyon, UI, ses |
| Orta | 144 | Blueprint iletisim, AI, multiplayer, materyal, optimizasyon, level design, veri yapilari |
| Ileri | 104 | C++ entegrasyonu, GAS, network replication, rendering pipeline, editor scripting, VR/XR |
| **Toplam** | **486** | |

### Kapsanan Konu Basliklari

- Karakter hareketi, ziplama, yuzme, tirmanma
- Silah sistemleri (mermi, yakin dovus, uzak menzil)
- AI sistemi (Behavior Tree, Blackboard, Perception, EQS, Patrol)
- UI/HUD (Widget, saglik bari, minimap, menu, drag-drop)
- Envanter, crafting, ticaret, quest sistemi
- Save/Load, checkpoint, XP/Level sistemi
- Niagara partikul, ses, muzik, ambient sound
- Multiplayer (Listen Server, Dedicated, RPC, Replication)
- Materyal, aydinlatma, post-process, PBR
- Gameplay Ability System (GAS)
- C++ ve Blueprint entegrasyonu (UCLASS, UFUNCTION, UPROPERTY)
- World Partition, Level Streaming, Sub-Level
- Nanite, Lumen, Virtual Texture optimizasyonu
- Procedural generation, Marching Cubes, PCG Framework
- Network (lag compensation, bandwidth, net dormancy)
- VR/XR (teleportation, grab interaction, motion controller)
- Editor Scripting, Python, Blutility
- Platform Deploy (Windows, Android, iOS, Steam, Epic Store)

---

## Proje Yapisi

```
unreal-rehber/
├── index.html               # Ana HTML sayfasi
├── package.json             # Node.js bagimliliklari
├── vite.config.js           # Vite yapilandirmasi
├── start_server.bat         # Windows hizli baslatma scripti
├── .gitignore               # Git ignore kurallari
├── README.md                # Bu dosya
└── src/
    ├── main.js              # Uygulama giris noktasi
    ├── style.css            # Tum stiller (28 KB)
    ├── data.js              # Actor (52 node), degisken, node, kisayol verileri (164 KB)
    ├── guideData.js         # 486 rehber + blueprint semalari (1.2 MB)
    └── components/
        ├── Sidebar.js       # Sol navigasyon paneli
        └── ContentArea.js   # Icerik render motoru (31 KB)
```

> `node_modules/` ve `dist/` klasorleri `.gitignore` ile haric tutulmustur. `npm install` komutu ile otomatik olusturulur.

---

## Teknoloji

| Arac | Aciklama |
|------|----------|
| [Vite](https://vitejs.dev/) | Hizli gelistirme sunucusu ve build araci |
| Vanilla JavaScript | ES Modules, herhangi bir framework kullanilmadan |
| CSS | Custom properties (degiskenler), Flexbox, Grid |

---

## Katkida Bulunma

1. Repoyu fork edin
2. Feature branch olusturun (`git checkout -b yeni-ozellik`)
3. Degisikliklerinizi commit edin (`git commit -m "Yeni rehber eklendi"`)
4. Push edin (`git push origin yeni-ozellik`)
5. Pull Request acin

Yeni rehber eklemek icin `src/guideData.js` dosyasina, mevcut format ile uyumlu yeni bir obje ekleyin. Her rehberde `id`, `title`, `difficulty`, `description`, `steps`, `blueprintFlow`, `tips`, `warnings` alanlari olmalidir.

---

## Lisans

MIT License

Copyright (c) 2025

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
