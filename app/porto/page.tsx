import Link from "next/link";

const projects = [
  {
    title: "Website Portofolio",
    desc: "Website portofolio dibuat dengan Next.js dan Tailwind CSS.",
    link: "#",
  },
  {
    title: "Project Pertama",
    desc: "Deskripsi singkat project kami di sini.",
    link: "#",
  },
];

export default function PortoPage() {
  return (
    <main className="min-h-screen bg-gray-950 text-white px-4 py-24">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="text-blue-400 hover:text-blue-300 text-sm">
          ← Kembali ke Halaman Utama
        </Link>

        <h1 className="text-4xl font-bold mt-6 mb-2">Portofolio</h1>
        <p className="text-gray-400 mb-10">Kumpulan project yang pernah kami buat.</p>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <a key={project.title} href={project.link} className="block bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-blue-500 transition">
              <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-400 text-sm">{project.desc}</p>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}