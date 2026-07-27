import { notFound } from "next/navigation";
import BookmarkButton from "@/components/news/BookmarkButton";

async function getNews() {
  const res = await fetch("http://localhost:3000/api/news", {
    cache: "no-store",
  });

  return res.json();
}

export default async function NewsArticle({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const news = await getNews();

  const article = news.find((item: any) => item.id === id);

  if (!article) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#080812] text-white">
      <div className="mx-auto max-w-4xl p-6">

        {article.image && (
          <img
            src={article.image}
            alt={article.title}
            className="h-72 w-full rounded-2xl object-cover"
          />
        )}

        <p className="mt-6 text-purple-400">
          {article.source}
        </p>

        <h1 className="mt-3 text-3xl font-bold">
          {article.title}
        </h1>

        <div className="mt-4">
          <BookmarkButton article={article} />
        </div>

        <p className="mt-8 whitespace-pre-line leading-8 text-gray-300">
          {article.content || article.description}
        </p>

        <a
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-block rounded-xl bg-purple-600 px-6 py-3"
        >
          Read Original Article →
        </a>

      </div>
    </main>
  );
}
