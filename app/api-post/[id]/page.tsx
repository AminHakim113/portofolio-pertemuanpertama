type DetailProps = {
  params: Promise<{
    id: string;
  }>;
};

type Post = {
  id: number;
  title: string;
  body: string;
};

export default async function DetailArtikel({
  params,
}: DetailProps) {
  const { id } = await params;

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    {
      cache: "no-store",
    }
  );

  const artikel: Post = await response.json();

  return (
    <main className="detail-page">
      <div className="detail-card">

        <span className="detail-id">
          Artikel #{artikel.id}
        </span>

        <h1>{artikel.title}</h1>

        <p>{artikel.body}</p>

        <a href="/api-post" className="kembali-button">
          ← Kembali ke Daftar Artikel
        </a>

      </div>
    </main>
  );
}