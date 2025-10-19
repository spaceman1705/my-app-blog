"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { enqueueSnackbar } from "notistack";
import { IArticle } from "@/interfaces/article.interface";
import { getNewestArticles } from "@/services/article";
import LatestSectionSkeleton from "./components/skeleton";

export default function LatestSection() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [articles, setArticles] = useState<IArticle[]>([]);
  const [visibleCount, setVisibleCount] = useState(3);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const data = await getNewestArticles();

      setArticles(data);
    } catch (err: any) {
      console.log(err);
      enqueueSnackbar(err.message, { variant: "error" });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleShowMore = () => {
    setIsLoadingMore(true);
    setTimeout(() => {
      setVisibleCount((prev) => prev + 3);
      setIsLoadingMore(false);
    }, 1500);
  };

  return (
    <section className="bg-white py-16 px-6 w-full">
      <div className="max-w-6xl mx-auto flex flex-col">
        <h1 className="text-3xl font-bold mb-10 text-gray-800">
          Latest Articles
        </h1>
        {isLoading ? (
          <div className="grid md:grid-cols-3 gap-8">
            {Array.from({ length: 3 }).map((_, i) => (
              <LatestSectionSkeleton key={i} />
            ))}
          </div>
        ) : (
          <>
            <div className="grid md:grid-cols-3 gap-8">
              {articles.slice(0, visibleCount).map((article) => (
                <Link
                  key={article.slug}
                  href={`/${article.slug}`}
                  className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 group block"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={article.image_path}
                      alt={article.title}
                      className="w-full h-56 object-cover transform group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                  </div>

                  <div className="p-5 flex flex-col justify-between h-full">
                    <div>
                      <h3 className="text-lg font-semibold mb-2 line-clamp-2 group-hover:text-yellow-400 transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                        {article.description}
                      </p>
                    </div>

                    <span className="text-yellow-600 font-semibold hover:underline">
                      View Post
                    </span>
                  </div>
                </Link>
              ))}
              {isLoadingMore &&
                Array.from({ length: 3 }).map((_, i) => (
                  <LatestSectionSkeleton key={i} />
                ))}
            </div>
            <div className="flex justify-center mt-10">
              {visibleCount < articles.length ? (
                <button
                  onClick={handleShowMore}
                  disabled={isLoadingMore}
                  className={`px-6 py-3 rounded-full font-semibold transition ${isLoadingMore
                      ? "bg-gray-300 text-gray-700 cursor-not-allowed"
                      : "bg-yellow-400 text-black hover:bg-yellow-300"
                    }`}
                >
                  {isLoadingMore ? "Loading..." : "Show More"}
                </button>
              ) : (
                <p className="text-gray-500 text-sm">No more articles</p>
              )}
            </div>
          </>
        )}
      </div>
    </section>
  );
}