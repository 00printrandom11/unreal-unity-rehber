# Unreal Engine Rehberi

Unreal Engine 5 icin kapsamli Turkce rehber uygulamasi. Blueprint sema diyagramlari, adim adim rehberler, degisken/node referanslari ve kisayollar tek bir arayuzde.

![Vite](https://img.shields.io/badge/Vite-6.0-646CFF?logo=vite&logoColor=white)
![Vanilla JS](https://img.shields.io/badge/Vanilla-JS-F7DF1E?logo=javascript&logoColor=black)
![License](https://img.shields.io/badge/License-MIT-green)

## Ozellikler

- **152 Rehber** - Baslangic, orta ve ileri seviye (70 kategori)
- **Blueprint Sema Diyagramlari** - Renkli ASCII akis diyagramlari ile node baglantilari
- **Arama & Filtreleme** - Rehberler arasinda anlik arama, zorluk seviyesine gore filtreleme
- **Actor Hiyerarsisi** - AActor, APawn, ACharacter, AController agac yapisi
- **Degisken Referansi** - Boolean, Integer, Float, Vector, String, Enum tipleri
- **Node Katalogu** - 200+ Blueprint node aciklamasi
- **Kisayollar** - Unreal Editor klavye kisayollari

## Icerik Dagilimi

| Seviye | Rehber Sayisi |
|--------|--------------|
| Baslangic | 68 |
| Orta | 55 |
| Ileri | 29 |
| **Toplam** | **152** |

### Kapsanan Konular

- Karakter hareketi, zipma, yuzme, tirmanma
- Silah sistemleri (mermi, yakin dovus, uzak menzil)
- AI sistemi (Behavior Tree, Perception, Patrol)
- UI/HUD (widget, saglik bari, minimap, menu)
- Envanter, crafting, ticaret, quest sistemi
- Save/Load, checkpoint, XP/Level sistemi
- Niagara partikul, ses, muzik sistemi
- Multiplayer temelleri ve ileri replikasyon
- Materyal, aydinlatma, post-process
- Gameplay Ability System (GAS)
- C++ - Blueprint entegrasyonu
- World Partition, Level Streaming
- Nanite/Lumen optimizasyonu
- Procedural Mesh, Shader, Custom Plugin

## Kurulum

### Gereksinimler

- [Node.js](https://nodejs.org/) (v18+)

### Adimlar

```bash
git clone https://github.com/KULLANICI_ADI/unreal-rehber.git
cd unreal-rehber
npm install
npm run dev
```

Tarayicida `http://localhost:5173` adresine gidin.

### Hizli Baslatma (Windows)

`start_server.bat` dosyasina cift tiklayin. Otomatik olarak bagimliliklari yukler, sunucuyu baslatir ve tarayiciyi acar.

### Production Build

```bash
npm run build
npm run preview
```

## Proje Yapisi

```
unreal-rehber/
├── index.html
├── package.json
├── vite.config.js
├── start_server.bat
├── src/
│   ├── main.js              # Uygulama giris noktasi
│   ├── style.css             # Tum stiller
│   ├── data.js               # Actor, degisken, node, kisayol verileri
│   ├── guideData.js          # 152 rehber + blueprint semalari (~1.2 MB)
│   └── components/
│       ├── Sidebar.js        # Sol navigasyon paneli
│       └── ContentArea.js    # Icerik render motoru
```

## Teknoloji

- **Vite** - Gelistirme sunucusu ve build araci
- **Vanilla JavaScript** - ES Modules, framework yok
- **CSS** - Custom properties, flexbox, grid

## Ekran Goruntuleri

Uygulama koyu tema ile gelir. Sol panelden sekme secin, rehber sekmesinde arama kutusunu kullanarak istediginiz konuyu bulun.

## Katkida Bulunma

1. Fork edin
2. Feature branch olusturun (`git checkout -b yeni-ozellik`)
3. Degisikliklerinizi commit edin (`git commit -m "Yeni rehber eklendi"`)
4. Push edin (`git push origin yeni-ozellik`)
5. Pull Request acin

## Lisans

MIT
