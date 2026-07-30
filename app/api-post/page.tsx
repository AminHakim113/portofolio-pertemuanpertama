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

        setPosts(data);
      } catch (error) {
        console.error("Gagal mengambil data:", error);
      } finally {
        setLoading(false);
      }
    }

    ambilData();
  }, []);

  return (
    <main
      style={{
        maxWidth: "1100px",
        margin: "40px auto",
        padding: "20px",
      }}
    >
      <h1>Data Artikel dari API</h1>

      <p>
        Halaman ini mengambil data menggunakan <strong>Fetch API</strong> dari
        JSONPlaceholder kemudian menampilkannya menggunakan{" "}
        <strong>map()</strong>.
      </p>

      {loading ? (
        <p>Memuat data...</p>
      ) : (
        posts.map((artikel) => (
          <div
            key={artikel.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "12px",
              padding: "20px",
              marginBottom: "18px",
              boxShadow: "0 2px 8px rgba(0,0,0,.05)",
            }}
          >
            <h2 style={{ marginBottom: "10px" }}>
              {artikel.id}. {artikel.title}
            </h2>

            <p>{artikel.body}</p>
          </div>
        ))
      )}
    </main>
  );
}