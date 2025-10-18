"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { enqueueSnackbar } from "notistack";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { IArticle } from "@/interfaces/article.interface";
import { getNewestArticles } from "@/services/article";

import LatestSectionSkeleton from "./components/skeleton";
import LatestSectionCard from "./components/card";

export default function LatestSection() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [articles, setArticles] = useState<IArticle[]>([]);

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

  return (
    <div className="flex flex-col items-center justify-center  w-full ">
      {isLoading ? (
        <LatestSectionSkeleton />
      ) : (
        <div className="flex flex-col gap-12 text-left items-center justify-center w-full">
          <h1 className="text-3xl font-bold flex self-start">
            Latest Article
          </h1>
          <Carousel className="w-full">
            <CarouselContent className="py-4">
              {articles.map((article) => (
                <CarouselItem
                  key={article.slug}
                  className="basis-full sm:basis-1/2 lg:basis-1/3 px-2"
                >
              <Link
                href={`/${article.slug}`}
                className="block pointer-events-auto"
              >
              <div className="flex flex-col h-full rounded-xl overflow-hidden bg-white shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="relative w-full h-64 overflow-hidden rounded-t-xl">
                  <img
                    src={article.image_path}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              <div className="flex flex-col justify-between flex-grow p-4">
                <div>
                  <h2 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2 group-hover:text-green-600">
                    {article.title}
                  </h2>
                  <p className="text-sm text-gray-500 line-clamp-3 mb-3">
                    {article.description}
                  </p>
                </div>

                <span className="text-xs text-gray-400 mt-auto">
                  {article.email ? `By ${article.email}` : "Unknown Author"}
                </span>
              </div>
            </div>
          </Link>
        </CarouselItem>
      ))}
</CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
          <button className="px-6 py-3 bg-yellow-400 text-black rounded-full font-semibold hover:bg-yellow-300 transition">
            Show More
          </button>
        </div>
      )}
    </div>
  );
}
