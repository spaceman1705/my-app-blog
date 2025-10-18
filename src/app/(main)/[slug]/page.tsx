import { getArticleBySlug } from "@/services/article";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default async function ArticleDetail({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  console.log(article);
  return (
    <section className="max-w-4xl mx-auto py-20 px-6">
      <div className="mb-6">
        <Link
          href="/#articles"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-gray-800 transition"
        >
          <ArrowLeft size={18} />
          <span className="font-medium">Back</span>
        </Link>
      </div>

      <div className="relative w-full h-[400px] mb-8">
        <img
          src={article.image_path}
          alt={article.title}
          className="object-cover rounded-xl shadow-md"
        />
      </div>

      <h1 className="text-3xl font-bold text-gray-800 mb-4">
        {article.title}
      </h1>

      <article className="prose prose-gray max-w-none text-gray-700 leading-relaxed whitespace-pre-line">
        {article.content}
      </article>
    </section>
  );
}