---
title: "Apa Itu Typescript"
date: "2022-11-18"
---

Typescript Adalah **Superset Sintaksis JavaScript** Ya Lebih Intinya Sih Typescript Adalah Perpaduan
Dari Bahasa Pemrograman Dengan Pengetikan Statis Seperti Java Scala Dll.

Keunggulan Dan Fitur - Fitur Typescript

TypeScript menawarkan class, module, dan interface yang membuat developer bisa mengembangkan aplikasi kompleks dengan lebih mudah diantara keunggulan dan fitur - fiturnya antara lain:

- Support Class Dan Module
- Static Type Checking
- Support ES6 Feature
- Clear Library API Definition
- Build-in Support Untuk JavaScript Packaging
- Kesamaan Styntax Untuk Beckend
- Superset Dari JavaScript

Class dan Module Support

Keywords seperti class, interface, extends dan module tersedia pada TypeScript. Kamu bisa mendefinisikan sebuah class seperti berikut:

```
// class define in TypeScript
class VirtualPageTracker extends Tracker {
    private virtualPageName: string = '';
    constructor(name) {
        super(name);
    }
    getName(): void {
        return this.virtualPageName;
    }
    static getTrackerName(): string {
        return  'VirtualPageTracker';
    }
}
```

Static Type-checking

Compiler TypeScript akan memeriksa pengetikan (akan ditampilkan peringatan pada pengetikan yang error pada saat waktu compile).

```
var name: string;
name = 2;
function foo(value: number) {}
foo('');
interface Bar {
    setName: (name: string) => void;
    getName: () => string;
}
var bar: Bar = {
    getName: function() {
        return 'myName';
    }
}
```

ES6 Feature Support

Ini adalah versi terbaru dari ECMAScript Language Spesification dengan fitur bahasa yang lebih. Dengan TypeScript, anda dapat memulai menggunakan banyak fitur ES6 meskipun mungkin tidak support pada target browser anda. Dibawah ini beberapa fitur yang sangat berguna seperti :

```
// for..of loops
var arr = ['a', 'b', 'c'];
for (let item of arr) {
    console.log(item);
}
```

Dikompilasi Menjadi

```
// for..of loops
var arr = ['a', 'b', 'c'];
for (var _i = 0; _i < arr.length; _i++) {
    var item = arr[_i];
    console.log(item);
}
```

Clear Library API Definition

Untuk membiarkan library TypeScript lainnya menggunakan library anda, Anda perlu membuat file .d.ts untuk mendeklarasikan semua jenis public dan API dari Library Anda. File definisi ini ternyata menjadi referensi yang jelas dan akurat dari API publik karena mereka selalu dipelihara dan up-to-date karena anda selalu membutuhkan mereka jika Anda menulis tes Anda di TypeScript lagi.
Build-in Support untuk JavaScript Packaging

Anda dapat menentukan satu file entri ts utama dan mengacu pada semua file ts yang Anda butuhkan dalam file output js. Kompilasi file utama entri ts dengan pilihan -out , compiler akan menggabungkan semua file ts langsung atau tidak langsung dirujuk ke dalam satu file js secara berurutan.

Dengan demikian , kita dapat dengan mudah menyesuaikan library kita menjadi beberapa versi. Misalnya, dengan basis kode yang sama, kita dapat menghasilkan versi tertentu dari agen Browser untuk desktop dan mobile secara masing-masing. Kita hanya perlu membuat satu file entri untuk setiap versi dengan file ts yang berbeda tersebut di dalamnya.

Kesamaan Syntax untuk Backend (Java, Scala)

Kita menggunakan java dan scala diback-end. Kesamaan TypeScript untuk bahasa - bahasa, ini memungkinkan developer kita untuk dapat beralih antara front-end dan back-end untuk membuat pemrograman menjadi lebih lancar.

Superset dari JavaScript

Sebagai superset dari JavaScript, TypeScript memiliki cara belajar yang mudah untuk pengembang JavaScript. Ini berarti Anda dapat mengadopsi TypeScript dalam proyek JavaScript Anda yang ada dengan cepat dengan cara yang kurang mengganggu daripada CoffeeScript atau ClojureScript.

Referensi Dari **_CodePolitan_** Writed By RakaRmp
