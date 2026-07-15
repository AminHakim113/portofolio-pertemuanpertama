import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full flex justify-between items-center px-8 py-4 bg-gray-950/80 backdrop-blur border-b border-gray-800 z-50">
      <span className="font-bold text-lg">Amin</span>
      <div className="flex gap-6 text-sm text-gray-300">
        <Link href="/profil" className="hover:text-white">Profil</Link>
        <Link href="/porto" className="hover:text-white">Portofolio</Link>
        <Link href="/kontak" className="hover:text-white">Kontak</Link>
      </div>
    </nav>
  );
}