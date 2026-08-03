"use client";

import { useEffect, useState } from "react";

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

        setPosts(data.slice(0, 12));
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
          Kumpulan artikel yang diambil secara langsung dari API menggunakan
          Fetch API pada Next.js.
        </p>
      </div>

      {loading ? (
        <div className="loading">
          <h3>Memuat artikel...</h3>
        </div>
      ) : (
        <div className="artikel-grid">
          {posts.map((artikel) => (
            <article key={artikel.id} className="artikel-card">
              <span className="artikel-id">
                Artikel #{artikel.id}
              </span>

              <h2>{artikel.title}</h2>

              <p>{artikel.body}</p>
            </article>
          ))}
        </div>
      )}
    </main>
  );
}