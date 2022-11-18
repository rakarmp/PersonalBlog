---
title: "Mengelola CMS Website Dengan Optimal Memakai Strapi"
date: "2022-11-18"
---

Hallo Guys,apakah kalian sudah cukup familiar dengan Strapi? Sebuah open source headless Content Management System (CMS) yang berbasis pada NodeJS. Strapi menawarkan kustomisasi yang cukup luas dan mempunyai kelebihan auto generate API. Hal ini akan sangat memudahkan proses perancangan konten di website yang mau kita buat. Fleksibilitas semacam ini membuatnya menjadi alternatif solusi untuk kita mengelola CMS website.

Jika kita membahas CMS, sebagian besar dari kita semua mungkin akan langsung memikirkan nama WordPress di kepala kita. Hal ini lumrah karena WordPress memang memiliki pengaruh besar untuk skena perancangan website dan menjadi top of mind di kepala kita semua yang pernah mengulik terkait pembuatan website. Bahkan menurut buildwith.com, sebanyak 39% dari satu juta website di internet menggunakan WordPress. Perkembangan pun terus terjadi karena adanya tuntutan kebutuhan-kebutuhan baru dari para pengguna. Tingkat fleksibilitas yang kurang pada sistem pengaturan front-end di CMS tradisional kemudian menjadi alasan munculnya headless CMS.

Berbeda dengan CMS tradisional di mana front-end dan back-end bergabung menjadi satu. Headless CMS memisahkannya dengan hanya menyediakan data mentah kepada front-end. Dengan demikian, headless CMS membuat kita sebagai pengguna tidak bergantung pada bahasa pemrograman atau framework tertentu dalam merancang website. Back-end dapat mengirimkan data mentah kepada front-end dengan memakai REST API atau GraphQL. Baru kemudian front-end mengolah data mentah tersebut.

Apa itu Strapi?

Strapi sendiri adalah headless CMS yang bisa membuat kemungkinan-kemungkinan untuk para developer atau programmer bisa lebih fokus pada substansi konten. Strapi bersifat open source dan dapat membantu mengelola database dari API. Untuk menjalankannya, kita perlu meng-install Node.js terlebih dahulu. Nama Strapi sendiri berasal dari istilah Bootstrap dan API. Di mana Strapi memang membuat kita tidak perlu menyusun alur API dari dasar. Tujuan utama dari headless CMS ini adalah untuk memudahkan proses merancang dan membuat API, lewat persediaan fitur-fitur yang memang umum digunakan. Fitur-fitur tersebut meliputi content builder, akses dan penyimpanan media dan database, proses perpindahan data dengan penggunaan REST API atau GraphQL, dan lain sebagainya.

Fitur-fitur utama Strapi yang akan memudahkan kita di dalam mengelola CMS website:

1. Laman admin yang sederhana

2. Content-type builder

3. Penyimpanan media dan database yang fleksibel

4. Pilihan antara REST API (default) atau GraphQL

5. Authenticated request

6. Self hosted

Laman admin Strapi yang sederhana

Laman admin dari Strapi sangatlah ramah dan mudah untuk dimengerti oleh para pengguna. Tingkat user friendly dari tampilan laman admin Strapi cukup tinggi. Tampilan laman admin Strapi juga lebih sederhana jika dibandingkan dengan laman admin dari WordPress. Di dalam laman admin ini kita sebagai pengguna dapat melakukan pengaturan dan kontrol atas pengelolaan konten, manajemen pustaka media, endpoint API, hingga mengelola izin pengguna (user permission). Semua bisa langsung kita lakukan lewat laman admin ini tanpa perlu memikirkan atau mengkhawatirkan proses coding lagi.

Content-type builder dan endpoint API

Terkait endpoint API, kita bisa membuatnya dengan menggunakan elemen-elemen content-type builder yang terdapat pada laman admin. Bahkan tidak hanya endpoint, tetapi struktur database juga akan mengalami perubahan sesuai dengan update yang kita buat pada struktur content-type yang kita lakukan. Headless CMS Strapi memiliki beberapa endpoint default yang memudahkan kita, meliputi fungsi Find, FindOne, Count, Create, Update, dan Delete. Metode yang ditawarkan untuk menunjang fungsi-fungsi tersebut pun terbagi menjadi empat metode, yaitu Get, Post, Put, dan Delete.

Penyimpanan media dan database yang fleksibel

Headless CMS Strapi pun memiliki fitur penyediaan tipe konten media yang kompatibel. Mulai dari penyediaan media foto, video, dan dokumen-dokumen lainnya. Di mana media-media yang diperlukan oleh website rancangan dapat kita simpan di penyimpanan local. Selain itu kita juga bisa memilih alternatif lain dengan menggunakan penyimpanan cloud untuk menyimpan media-media yang diperlukan. Penyimpanan cloud bisa berupa Google Cloud Storage, One Drive, Google Drive, Amazon S3, dan lain sebagainya.

Terkait penggunaan database sendiri, headless CMS ini memiliki fitur yang memungkinkan para penggunanya memilih database sesuka hati. Kita dapat memilih database yang ingin kita gunakan sesuai dengan kebutuhan dan keinginan kita sebagai pengguna. Kita bisa memilih beragam varian database, mulai dari SQLite, MySQL, PostgresQL, hingga MongoDB.

Pilihan antara REST API (default) atau GraphQL

Untuk fitur default, headless CMS Strapi sendiri menggunakan REST API. Akan tetapi fitur ini bisa diatur sesuai dengan kebutuhan kita sebagai pengguna. Di mana sebagai alternatif lainnya, kita sebagai pengguna dapat mengubah pengaturannya agar menggunakan GraphQL. Proses konfigurasi perubahan dari REST API menjadi GraphQL pun tidak terlalu susah. Sehingga jika kita membutuhkan penggunaan REST API lagi di lain waktu, kita bisa langsung mengkonfigurasi headless CMS Strapi dari GraphQL menjadi REST API kembali sebagai fitur default.

Authenticated request

Sementara dalam pengelolaan skema login, Strapi memfasilitasi kita para penggunanya untuk membuat authenticated request. Melalui fitur ini, kita bisa membatasi serta mengatur siapa saja yang bisa mengakses data di dalam website. Tingkat aksesibilitas data dapat kita atur berdasarkan pemilihan role dan permission yang kita berikan kepada para pengguna lain di dalam website kita. Seluruh pengaturan ini terdapat pada lama admin. Provider yang dapat kita gunakan dalam pengelolaan skema login ini juga cukup banyak. Kita dapat menggunakan Google, Facebook, email, reddit, dan lain sebagainya sebagai provider untuk skema login website kita. Hal ini tentunya akan memudahkan kita sebagai pengelola website karena kita tidak perlu untuk menyusun skema login dari awal.

Self hosted

Fitur terakhir yang perlu kita ketahui adalah bahwa headless CMS Strapi itu tidak memerlukan external service. Atau dengan kata lain, Strapi bersifat self hosted sebagai headless CMS. Strapi akan dapat berjalan sendiri selama ada Node.js yang sudah di-install. Di sisi lain, hal ini juga membuat kita bisa mengubah kode di dalam Swebsite kita sendiri. Kita dapat mengubahnya secara manual dengan langsung melakukan proses coding. Sehingga jangkauan kustomisasi di dalamnya sangatlah luas karena kita bisa memodifikasinya sesuai dengan kebutuhan dan keinginan kita sebagai pengelola website.
Sudah cukup familiar dengan Strapi? Sebuah headless open source CMS dengan kustomisasi yang luas dan mempunyai kelebihan auto generate API.

Strapi sebagai CMS

Melalui fitur-fitur yang telah dipaparkan di atas, Strapi semakin menguatkan posisinya sebagai sebuah Content Management System (CMS). Perkembangannya sejauh ini membuat Strapi sudah bukan lagi API builder semata. Strapi telah dapat berperan sebagai penyedia data dan pengelola konten untuk website yang sedang kita bangun. Headless CMS Strapi pun juga menawarkan fitur rich text editor. Hal ini tentunya akan sangat memudahkan proses kreasi konten blog di dalam website kita.

Berkat fitur-fiturnya, Strapi kini merupakan CMS dengan nama besar yang dapat membantu kita dalam menyusun konten-konten di dalam website. Pengelolaan konten website pun dapat menjadi lebih optimal dengan hadirnya Strapi.

Referensi Dari **_roketin.com_** writed by RakaRmp
