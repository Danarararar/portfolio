import PortfolioTabs from "@/components/PortfolioTabs";

export default function PortfolioPage() {
  return (
    <section className="reveal">
      <h1 className="text-center text-4xl font-bold sm:text-5xl">Portfolio Showcase</h1>
      <p className="mx-auto mb-10 mt-3 max-w-md text-center text-sm text-white/50">
        Projects, certificates, and technical expertise.
      </p>
      <PortfolioTabs />
    </section>
  );
}
