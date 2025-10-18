"use client";

import { useState, useEffect } from "react";
import { enqueueSnackbar } from "notistack";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import useAuthStore from "@/stores/authStore";

import CreateArticleForm from "./components/form";
import TableSkeleton from "@/components/skeleton/tableSkeleton";
import ArticleTable from "./components/table";
import { getArticleByEmail } from "@/services/article";
import { IArticle } from "@/interfaces/article.interface";

export default function ArticleView() {
  const [articles, setArticles] = useState<IArticle[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { email } = useAuthStore();

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const data = await getArticleByEmail(email);

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
    <div className="flex flex-col gap-12">
      <div className="flex self-end">
        <Dialog>
          <DialogTrigger className="bg-green-500 text-white py-2 px-4 rounded-md ">
            + new article
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Article</DialogTitle>
            </DialogHeader>
            <CreateArticleForm fetchData={fetchData} />
          </DialogContent>
        </Dialog>
      </div>
      {isLoading ? <TableSkeleton /> : <ArticleTable articles={articles} />}
    </div>
  );
}
