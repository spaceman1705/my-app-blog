import { IArticle } from "@/interfaces/article.interface";

export default function LatestSectionCard(props: Partial<IArticle>) {
  return (
    <div className="flex flex-col space-y-3 ">
      <img
        src={props.image_path}
        alt={`thumbnail-${props.slug}`}
        className="h-[125px] w-[250px] rounded-xl"
      />
      <div className="space-y-2 py-2">
        <span className="h-4 w-[250px] text-2xl">{props.title}</span>
        <span className="h-3 w-[250px]">{props.email}</span>
        <span className="h-12 w-[250px] line-clamp-3 text-xs text-gray-500">
          {props.description}
        </span>
      </div>
    </div>
  );
}
