# Oyun Motoru Rehberi (Unreal + Unity)

Tarayici tabanli, tek panel uzerinden hem Unreal Engine 5 hem Unity egitim icerigi sunan rehber uygulamasi.
Proje; sifirdan baslayan kullanicilarin da takip edebilecegi adim adim anlatimlari, arama ekranlarini, kisayol listelerini ve detayli konu dagilimlarini bir arada verir.

> Uygulama tamamen istemci tarafinda calisir. Sunucu tarafinda ekstra bir framework veya veritabani bagimliligi yoktur.

![Vite](https://img.shields.io/badge/Vite-6.x-646CFF?logo=vite&logoColor=white)
![Vanilla JS](https://img.shields.io/badge/Vanilla-JS-F7DF1E?logo=javascript&logoColor=black)
![License](https://img.shields.io/badge/License-MIT-green)

---

## Icindekiler

- [Genel Bakis](#genel-bakis)
- [Icerik Kapsami](#icerik-kapsami)
- [Kurulum](#kurulum)
- [Kullanilan Kutuphane ve Araclar](#kullanilan-kutuphane-ve-araclar)
- [NPM Komutlari](#npm-komutlari)
- [Proje Yapisi](#proje-yapisi)
- [GitHub Repo Icin Yayin Notlari](#github-repo-icin-yayin-notlari)
- [Katki](#katki)
- [Lisans](#lisans)

---

## Genel Bakis

Bu proje iki farkli motoru tek bir giris ekraninda birlestirir:

- **Unreal Engine 5** tarafi: Blueprint odakli rehberler, actor tabanli konu akisi, node ve kisayol kaynaklari
- **Unity** tarafi: C# odakli rehberler, component tabanli konu akisi, API arama ve kisayol kaynaklari

Uygulama acilisinda motor secimi yapilir ve secilen motora gore icerik paneli yuklenir.

---

## Icerik Kapsami

### Unreal Engine 5

- **1416 rehber**
- **120 kategori**
- Blueprint odakli akislar (`blueprintFlow`)
- Baslangic, orta ve ileri seviye konu dagilimi
- Oyun mekanigi, AI, UI, multiplayer, optimizasyon, VFX, materyal, fizik, animasyon ve daha fazlasi

### Unity

- **1324 rehber**
- **109 kategori**
- C# odakli akislar (`codeFlow`)
- Baslangic, orta ve ileri seviye konu dagilimi
- Component sistemi, API kullanimlari, gameplay, UI, performans ve tooling basliklari

### Toplam

- **2740 rehber** (Unreal + Unity)

---

## Kurulum

### Gereksinimler

Kurulum icin gerekli minimum araclar:

- **Node.js 18+** (npm ile birlikte gelir)

Opsiyonel fakat tavsiye edilen:

- **Git** (repo klonlamak ve surum takibi icin)

### 1) Repoyu klonla

```bash
git clone https://github.com/00printrandom11/unreal-unity-rehber
cd unreal-unity-rehber
```

### 2) Bagimliliklari kur

```bash
npm install
```

### 3) Gelistirme sunucusunu calistir

```bash
npm run dev
```

Varsayilan adres:

- `http://localhost:5173`

### Windows hizli baslatma (opsiyonel)

Windows kullaniyorsan `start_server.bat` dosyasini cift tiklayarak da projeyi ayaga kaldirabilirsin.
Script gerekli kontrolu yapar, eksik bagimliliklari kurar ve uygun bir portta Vite sunucusunu baslatir.

---

## Kullanilan Kutuphane ve Araclar

Bu projede bilerek sade bir stack kullanildi:

- **Vite (`vite`)**
  - Gelistirme sunucusu
  - Build ve preview sureci
- **Vanilla JavaScript (ES Modules)**
  - Framework yok
  - Dogrudan tarayici dostu moduler yapi
- **CSS**
  - Arayuz tasarimi, tema yonetimi, responsive duzen

### package.json bagimlilik ozeti

```json
{
  "devDependencies": {
    "vite": "^6.0.0"
  }
}
```

Yani kurulum tarafinda ekstra React/Vue/Angular vb. bagimliliklar yok; `npm install` yeterli.

---

## NPM Komutlari

- `npm run dev`  
  Gelistirme sunucusunu baslatir.

- `npm run build`  
  Uretim ciktilarini `dist/` klasorune alir.

- `npm run preview`  
  Build alinmis dosyalari lokalde test etmek icin sunar.

---

## Proje Yapisi

```text
unreal-rehber/
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
├── start_server.bat
├── README.md
└── src/
    ├── main.js
    ├── style.css
    ├── guideData.js
    ├── unityGuideData.js
    ├── data.js
    ├── unityData.js
    └── components/
        ├── Sidebar.js
        ├── ContentArea.js
        └── UnityContentArea.js
```

---

## GitHub Repo Icin Yayin Notlari

Repoyu GitHub'a yuklerken asagidaki dosya/klasorleri repoya dahil etme:

- `node_modules/`
- `dist/` (sadece build artefakti tutmak istemiyorsan)

Bu iki klasor zaten `.gitignore` tarafindan disarida tutuluyor.

### Onerilen ilk kurulum akisi (yeni cloner icin)

```bash
npm install
npm run dev
```

### Uretim dagitimi

```bash
npm run build
```

Olusan `dist/` klasoru Netlify, Vercel, GitHub Pages veya herhangi bir statik hosting servisine yuklenebilir.

---

## Katki

Katki gondermek icin standart git akisinin takip edilmesi yeterli:

1. Fork al
2. Yeni branch ac (`feature/...`)
3. Degisikliklerini commit et
4. Branch'i push et
5. Pull Request olustur

Rehber verisi uzerinde calisirken mevcut obje semasini koruman onemli:

- Unreal icerikleri: `src/guideData.js`
- Unity icerikleri: `src/unityGuideData.js`

---

## Lisans

MIT License
