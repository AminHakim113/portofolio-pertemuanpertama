import Link from "next/link";

export default function ProfilPage() {
  return (
    <main className="min-h-screen bg-gray-950 text-white px-4 py-24">
      <div className="max-w-2xl mx-auto">
        <Link href="/" className="text-blue-400 hover:text-blue-300 text-sm">
          ← Kembali ke Halaman Utama
        </Link>

        <h1 className="text-4xl font-bold mt-6 mb-2">Profil Saya</h1>
        <p className="text-gray-400 mb-8">Siswa Kelas 12 - Web Developer Pemula</p>

        <div className="space-y-6 text-gray-300 leading-relaxed">
          <p>
            Halo! Nama Kami <span className="text-white font-medium">Amin</span>.
            Saya siswa kelas 12 yang sedang belajar pengembangan web menggunakan
            Next.js dan React.
          </p>
          <p>
            Ketertarikan saya di dunia pemrograman lahir dari hasrat 
            untuk menciptakan produk digital yang fungsional, visual, 
            dan memberikan dampak langsung bagi penggunanya.
          </p>

          <div>
            <h2 className="text-xl font-semibold text-white mb-3">Skill</h2>
            <div className="flex flex-wrap gap-2">
              {["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS"].map((skill) => (
                <span
                  key={skill}
                  className="bg-gray-800 text-sm px-3 py-1 rounded-full border border-gray-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-3">Kontak</h2>
            <ul className="space-y-1 text-gray-400">
              <li>Email: ka37minnn@gmail.com</li>
              <li>Instagram: @kamin</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}