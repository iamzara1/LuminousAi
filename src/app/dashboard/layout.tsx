import type { ReactNode } from "react";
import Sidebar from "@/components/layout/Sidebar";
import DashboardHeader from "@/components/layout/DashboardHeader";

type Props = {
  children: ReactNode;
};

export default function DashboardLayout({ children }: Props) {
  return (
    <div className="min-h-screen bg-[#09090F] text-white">
      <div className="flex">

        <Sidebar />

        <div className="flex min-h-screen flex-1 flex-col">

          <DashboardHeader />

          <main className="flex-1 p-6">
            {children}
          </main>

        </div>

      </div>
    </div>
  );
}
