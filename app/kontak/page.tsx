import Link from "next/link";

export default function KontakPage() {
  const namaSekolah = "SMK Telkom Makassar"; 

  return (
    <main className="min-h-screen bg-gray-950 text-white px-4 py-24">
      <div className="max-w-2xl mx-auto">
        <Link href="/" className="text-blue-400 hover:text-blue-300 text-sm">
          ← Kembali ke Halaman Utama 
        </Link>

        <h1 className="text-4xl font-bold mt-6 mb-2">Hubungi Kami</h1>
        <p className="text-gray-400 mb-8">Ada pertanyaan? Kirim pesan ke saya</p>

        <div className="space-y-6 text-gray-300 leading-relaxed">
          <p>
            Jika Anda memiliki pertanyaan seputar tugas, proyek, atau ingin
            berdiskusi lebih lanjut sebagai siswa {namaSekolah}, silakan
            hubungi saya melalui tombol di bawah ini atau kontak yang
            tertera di halaman Profil.
          </p>

          <button className="bg-red-600 hover:bg-red-500 text-white px-5 py-2 rounded-lg font-medium transition-colors">
            Kirim Pesan
          </button>
        </div>
      </div>
    </main>
  );
}