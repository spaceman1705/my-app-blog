import PageWrapper from "@/components/pageWrapper";
import Sidebar from "@/components/sidebar";
import AdminGuardProvider from "@/providers/adminGuardProvider";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AdminGuardProvider>
      <div className="flex">
        <Sidebar />
        <PageWrapper>{children}</PageWrapper>
      </div>
    </AdminGuardProvider>
  );
}
