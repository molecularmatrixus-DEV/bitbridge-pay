import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function MDXLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow pt-32 pb-24 px-6">
        <article className="max-w-[760px] mx-auto font-sans text-slate-700 leading-relaxed space-y-6">
          {children}
        </article>
      </main>
      <Footer />
    </div>
  );
}
