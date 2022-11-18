---
title: "Dua Bentuk Pre-rendering Di Next JS"
date: "2022-11-18"
---

Next.js memiliki dua bentuk pra-rendering: **Static Generation** dan **Server Side Rendering**. Perbedaannya terletak pada **ketika** menghasilkan HTML untuk sebuah halaman.

- **Static Build** adalah metode pra-perenderan yang menghasilkan HTML pada **waktu pembuatan**. HTML yang telah dirender kemudian _digunakan kembali_ pada setiap permintaan.
- **Server side rendering** adalah metode pra-rendering yang menghasilkan HTML pada **setiap permintaan**.

Yang penting, Next.js memungkinkan Anda **memilih** formulir prarender mana yang akan digunakan untuk setiap halaman. Anda dapat membuat aplikasi Next.js "hybrid" menggunakan Static Build untuk sebagian besar halaman dan menggunakan Server side rendering untuk halaman lainnya.

Referensi Dari **NextJS** writed by RakaRmp
