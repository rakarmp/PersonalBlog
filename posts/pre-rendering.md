---
title: "Dua Bentuk Pre-rendering Di Next JS"
date: "2022-11-16"
---

Next.js memiliki dua bentuk pra-rendering: **Generasi Statis** dan **Rendering Sisi Server**. Perbedaannya terletak pada **ketika** menghasilkan HTML untuk sebuah halaman.

- **Pembuatan Statis** adalah metode pra-perenderan yang menghasilkan HTML pada **waktu pembuatan**. HTML yang telah dirender kemudian _digunakan kembali_ pada setiap permintaan.
- **Rendering sisi server** adalah metode pra-rendering yang menghasilkan HTML pada **setiap permintaan**.

Yang penting, Next.js memungkinkan Anda **memilih** formulir prarender mana yang akan digunakan untuk setiap halaman. Anda dapat membuat aplikasi Next.js "hybrid" menggunakan Pembuatan Statis untuk sebagian besar halaman dan menggunakan Rendering Sisi Server untuk halaman lainnya.

Referensi Dari **NextJS** writed by RakaRmp
