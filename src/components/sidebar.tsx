import Link from "next/link";
export default function Sidebar() {
  return (
    <aside className="h-screen w-64 bg-yellow-400 text-white flex-col p-4 pt-15">
      <nav className="flex-1 p-6">
        <Link
          href={"/dashboard/article"}
          className="text-xl font-bold hover:text-gray-200"
        >
          Article
        </Link>
      </nav>
    </aside>
  );
}
