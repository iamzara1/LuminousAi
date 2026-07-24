import Sidebar from "@/components/dashboard/Sidebar";
import Topbar from "@/components/dashboard/Topbar";
import ChatPanel from "@/components/dashboard/ChatPanel";
import MarketsPanel from "@/components/dashboard/MarketsPanel";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-[#05050A] text-white flex">

      <Sidebar />

      <main className="flex-1">

        <Topbar />

        <div className="p-6">

          <div className="mb-8">
            <h1 className="text-3xl font-bold">
              Welcome to LuminousAI
            </h1>

            <p className="mt-2 text-gray-400">
              Your AI-powered crypto intelligence workspace.
            </p>
          </div>


          <div className="grid gap-6 lg:grid-cols-3">

            <div className="lg:col-span-2">
              <ChatPanel />
            </div>


            <div>
              <MarketsPanel />
            </div>

          </div>

        </div>

      </main>

    </div>
  );
}
