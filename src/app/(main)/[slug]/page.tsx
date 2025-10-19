import { getArticleBySlug } from "@/services/article";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default async function ArticleDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const articles = await getArticleBySlug(slug);
  const article = Array.isArray(articles) ? articles[0] : articles;

  console.log(article);
  return (
    <section className="max-w-4xl mx-auto py-20 px-6">
      <div className="mb-8">
        <Link
          href="/#articles"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-gray-800 transition"
        >
          <ArrowLeft size={18} />
          <span className="font-medium">Back</span>
        </Link>
      </div>

      <div className="relative w-full h-[400px] mb-10 overflow-hidden rounded-2xl shadow-lg">
        <img
          src={article.image_path}
          alt={article.title}
          className="object-cover w-full h-full transform hover:scale-105 transition duration-500"
        />
      </div>
      <div className="mb-6 text-center">
        <h1 className="text-4xl font-extrabold text-gray-900 leading-tight mb-3">
          {article.title}
        </h1>
      </div>
      <article className="prose prose-gray max-w-none text-gray-800 leading-relaxed prose-img:rounded-lg prose-a:text-blue-600 hover:prose-a:text-blue-800">
        {article.content}
      </article>
    </section>
  );
}