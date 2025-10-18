"use client";

import { useState, useEffect } from "react";
import { enqueueSnackbar } from "notistack";

import { getAll } from "@/services/article";

import { IArticle } from "@/interfaces/article.interface";
export default function ArticlesView() {
  const [articles, setArticles] = useState<IArticle[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const data = await getAll();

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
    <div id="blog" className="flex flex-col">
      {isLoading ? (
        <div>...Loading</div>
      ) : (
        <div className="grid grid-cols-3 gap-4">
          {articles.map((article, idx) => (
            <div key={idx} className="border border-black rounded-md p-4 ">
              <img src={article.image_path} className="w-[300px] h-[200px]" />
              <h3 className="text-xl">{article.title}</h3>
              <p className="line-clamp-4">{article.description}</p>
              <p>{article.content}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
