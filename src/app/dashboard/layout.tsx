import PageWrapper from "@/components/pageWrapper";
import Sidebar from "@/components/sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <Sidebar />
      <PageWrapper>{children}</PageWrapper>
    </div>
  );
}
