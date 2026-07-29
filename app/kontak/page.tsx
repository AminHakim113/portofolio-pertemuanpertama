"use client";

import { useState } from "react";

export default function KontakPage() {
  // State untuk input
  const [inputTeks, setInputTeks] = useState("");

  // State untuk daftar pesan
  const [daftarPesan, setDaftarPesan] = useState<string[]>([]);

  // Fungsi tambah pesan
  function tambahPesan() {
    // Mencegah input kosong
    if (inputTeks.trim() === "") return;

    // Tambahkan pesan baru ke array
    setDaftarPesan([...daftarPesan, inputTeks]);

    // Kosongkan input
    setInputTeks("");
  }

  return (
    <main className="kontak-page">
      <section className="kontak-container">
        <p className="eyebrow">KONTAK</p>

        <h1>Buku Tamu Portofolio</h1>

        <p className="kontak-deskripsi">
          Terima kasih telah mengunjungi portofolio saya. Silakan tinggalkan
          pesan, kritik, atau saran melalui buku tamu di bawah ini.
        </p>

        <div className="guestbook-form">
          <input
            type="text"
            placeholder="Tulis pesan..."
            value={inputTeks}
            onChange={(e) => setInputTeks(e.target.value)}
          />

          <button onClick={tambahPesan}>
            Kirim
          </button>
        </div>

        <div className="guestbook-list">
          <h2>Daftar Pesan</h2>

          {daftarPesan.length === 0 ? (
            <p className="empty-message">
              Belum ada pesan.
            </p>
          ) : (
            daftarPesan.map((pesan, index) => (
              <div key={index} className="guestbook-card">
                <strong>Pengunjung {index + 1}</strong>

                <p>{pesan}</p>
              </div>
            ))
          )}
        </div>

        <hr />

        <div className="kontak-info">
          <h2>Informasi Kontak</h2>

          <p>Email : kamin@email.com</p>
          <p>GitHub : github.com/kamin</p>
          <p>LinkedIn : linkedin.com/in/kamin</p>
        </div>
      </section>
    </main>
  );
}