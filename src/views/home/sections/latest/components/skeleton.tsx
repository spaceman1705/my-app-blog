"use client";

import { Skeleton } from "@/components/ui/skeleton";

export default function LatestSectionSkeleton() {
  return (
    <div className="rounded-lg overflow-hidden shadow-md bg-white animate-pulse">
      <div className="relative w-full h-56">
        <Skeleton className="w-full h-full" />
      </div>
      <div className="p-5 space-y-3">
        <Skeleton className="h-5 w-3/4 rounded-md" />
        <Skeleton className="h-4 w-full rounded-md" />
        <Skeleton className="h-4 w-5/6 rounded-md" />
        <Skeleton className="h-4 w-1/3 rounded-md mt-4" />
      </div>
    </div>
  );
}
