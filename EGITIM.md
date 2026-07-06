# EGITIM: HTML, CSS ve JavaScript Nedir?

Bu dosya, projedeki dosyalari anlaman icin cok basit bir rehberdir.

## 1. HTML Nedir?

HTML, sitenin iskeletidir.

Bir insan dusun:

- HTML = kemikler
- CSS = kiyafet ve gorunum
- JavaScript = hareket ve davranis

HTML ile sayfaya baslik, yazi, buton, resim ve link koyariz.

Ornek:

```html
<h1>Merhaba</h1>
<p>Bu benim ilk sitem.</p>
<button>Tikla</button>
```

Bu kod ekranda bir baslik, bir yazi ve bir buton gosterir.

Bu projede HTML dosyalari:

- `index.html`
- `pages/prokaryote.html`
- `pages/eukaryote.html`

## 2. CSS Nedir?

CSS, sitenin gorunumunu duzenler.

CSS ile sunlari yapariz:

- Renk veririz
- Yaziyi buyuturuz
- Butonu guzellestiririz
- Sayfayi mobil uyumlu yapariz
- Kutulari yan yana veya alt alta dizeriz

Ornek:

```css
h1 {
  color: blue;
  font-size: 40px;
}

button {
  background: green;
  color: white;
  padding: 10px;
}
```

Bu kod:

- `h1` basligini mavi yapar
- Basligi 40 piksel yapar
- Butonun arka planini yesil yapar
- Buton yazisini beyaz yapar

Bu projede CSS dosyasi:

```text
assets/css/styles.css
```

## 3. JavaScript Nedir?

JavaScript, siteye hareket ve akil katar.

JavaScript ile sunlari yapariz:

- Butona tiklayinca bir sey yaptiririz
- Dili degistiririz
- Yazilari degistiririz
- Tur adimlarini ileri geri aliriz
- Kullanici secimini hatirlatiriz

Ornek:

```html
<button id="buton">Tikla</button>
<p id="yazi">Henüz tiklanmadi.</p>
```

```js
var buton = document.getElementById("buton");
var yazi = document.getElementById("yazi");

buton.addEventListener("click", function () {
  yazi.textContent = "Butona tikladin!";
});
```

Bu kodda:

- JavaScript butonu bulur
- Yaziyi bulur
- Butona tiklaninca yaziyi degistirir

Bu projede JavaScript dosyalari:

- `assets/js/i18n.js`
- `assets/js/tours.js`
- `assets/js/app.js`

## 4. Bu Projede JavaScript Ne Yapiyor?

Bu sitede JavaScript uc ana is yapiyor.

### Dil degistirme

Ana sayfadaki `TR` ve `EN` butonlari JavaScript ile calisir.

Kullanici `EN` butonuna tiklayinca site Ingilizce olur.

Kullanici `TR` butonuna tiklayinca site Turkce olur.

### Tur adimlarini degistirme

Prokaryot veya okaryot tur sayfasinda ileri ve geri butonlari var.

Bu butonlara tiklayinca JavaScript yeni bilgiyi ekrana getirir.

### Noktalara tiklama

Hucre uzerindeki kucuk noktalara tiklayinca ilgili hucre parcasinin bilgisi acilir.

Mesela:

- Cekirdek
- Mitokondri
- Ribozom
- Hucre zari

## 5. Dosyalar Ne Ise Yarar?

```text
index.html
```

Ana sayfadir. Ilk acilan sayfa burasidir. Burada prokaryot veya okaryot secilir.

```text
pages/prokaryote.html
```

Prokaryot hucre turu sayfasidir.

```text
pages/eukaryote.html
```

Okaryot hucre turu sayfasidir.

```text
assets/css/styles.css
```

Sitenin renkleri, yazilari, kutulari ve hucre cizimleri buradadir.

```text
assets/js/i18n.js
```

Turkce ve Ingilizce ana sayfa yazilari buradadir.

```text
assets/js/tours.js
```

Hucre turundaki bilgiler buradadir.

```text
assets/js/app.js
```

Butonlarin calismasini, dil degisimini ve tur adimlarini yonetir.

## 6. Cok Basit Bir Ornek

Asagidaki uc parca birlikte calisir.

### HTML

```html
<button id="renkButonu">Rengi degistir</button>
<p id="mesaj">Merhaba!</p>
```

### CSS

```css
.kirmizi {
  color: red;
}
```

### JavaScript

```js
var buton = document.getElementById("renkButonu");
var mesaj = document.getElementById("mesaj");

buton.addEventListener("click", function () {
  mesaj.classList.add("kirmizi");
});
```

Sonuc:

Butona tiklayinca `Merhaba!` yazisi kirmizi olur.

## 7. Kisa Ozet

- HTML sayfaya eleman koyar.
- CSS elemanlari guzellestirir.
- JavaScript elemanlari hareketli ve tiklanabilir yapar.

Yani:

```text
HTML = Ne var?
CSS = Nasil gorunuyor?
JavaScript = Ne yapiyor?
```

