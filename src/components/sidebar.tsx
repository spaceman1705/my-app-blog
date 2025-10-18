import Link from "next/link";
export default function Sidebar() {
  return (
    <aside className="h-screen w-64 bg-green-500 text-white flex-col p-4">
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
