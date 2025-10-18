"use client";

import { useMemo } from "react";

import CustomTable from "@/components/customTable";
import { IArticle } from "@/interfaces/article.interface";

export default function ArticleTable({ articles }: { articles: IArticle[] }) {
  const columns = useMemo(
    () => [
      {
        accessorKey: "title",
        header: "Title",
      },
      {
        accessorKey: "image_path",
        header: "Image",
        cell: ({ row }: any) => {
          const imageUrl = row.original.image_path;
          return (
            <div className="flex justify-center">
              {imageUrl ? (
                <img
                  src={imageUrl}
                  alt="Article"
                  className="w-16 h-16 object-cover rounded-md"
                />
              ) : (
                <div className="w-16 h-16 bg-gray-200 rounded-md flex items-center justify-center text-xs text-gray-500">
                  No Image
                </div>
              )}
            </div>
          );
        },
      },
      {
        accessorKey: "description",
        header: "Description",
      },
      {
        accessorKey: "content",
        header: "Content",
      },
      {
        accessorKey: "email",
        header: "Created By",
      },
    ],
    []
  );

  return <CustomTable data={articles} columns={columns} />;
}
