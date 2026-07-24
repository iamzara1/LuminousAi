
import { Sparkles, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">

      <nav className="flex justify-between items-center px-8 py-6">
        <h1 className="text-2xl font-bold">
          Luminous<span className="text-blue-500">AI</span>
        </h1>

        <button className="rounded-full border border-white/20 px-5 py-2">
          Sign In
        </button>
      </nav>


      <section className="flex flex-col items-center text-center px-6 pt-24">

        <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300">
          <Sparkles size={16}/>
          AI Intelligence Platform
        </div>


        <h2 className="mt-8 text-5xl md:text-7xl font-bold">
          Think faster.
          <br/>
          Create with
          <span className="text-blue-500"> AI.</span>
        </h2>


        <p className="mt-6 max-w-xl text-gray-400 text-lg">
          Luminous AI is your intelligent workspace for ideas,
          research, creativity and problem solving.
        </p>


        <button className="mt-10 flex items-center gap-2 rounded-full bg-blue-600 px-8 py-4">
          Get Started
          <ArrowRight size={18}/>
        </button>


        <div className="mt-20 w-full max-w-4xl rounded-3xl border border-white/10 bg-white/5 p-6">

          <div className="rounded-2xl bg-black border border-white/10 p-6 text-left">

            <p className="text-gray-400">
              Luminous AI Assistant
            </p>

            <div className="mt-6 h-32 rounded-xl bg-white/5 flex items-center justify-center text-gray-500">
              AI Workspace Preview
            </div>

          </div>

        </div>


      </section>

    </main>
  );
}


	

