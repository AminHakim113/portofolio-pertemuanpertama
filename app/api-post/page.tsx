"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type Post = {
  id: number;
  title: string;
  body: string;
};

export default function ApiPostPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function ambilData() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );

        const data: Post[] = await response.json();

        setPosts(data.slice(0, 20));
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    ambilData();
  }, []);

  return (
    <main className="artikel-page">
      <div className="artikel-header">
        <p className="eyebrow">ARTIKEL</p>

        <h1>Artikel Teknologi</h1>

        <p>
          Data diambil menggunakan Fetch API kemudian setiap artikel dapat
          dibuka menggunakan Dynamic Route Next.js.
        </p>
      </div>

      {loading ? (
        <h2 style={{ textAlign: "center" }}>Memuat artikel...</h2>
      ) : (
        <div className="artikel-grid">
          {posts.map((artikel) => (
            <Link
              key={artikel.id}
              href={`/api-post/${artikel.id}`}
              className="artikel-link"
            >
              <article className="artikel-card">
                <span className="artikel-id">
                  Artikel #{artikel.id}
                </span>

                <h2>{artikel.title}</h2>

                <p>
                  {artikel.body.substring(0, 120)}
                  ...
                </p>

                <span className="baca-selengkapnya">
                  Baca Selengkapnya →
                </span>
              </article>
            </Link>
          ))}
        </div>
      )}
    </main>
  );
}