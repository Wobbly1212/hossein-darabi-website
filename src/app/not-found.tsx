import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <span className="font-display text-[120px] leading-none text-white-1/[0.03] md:text-[180px]">404</span>
      <h1 className="font-display -mt-6 text-3xl text-white-1 md:-mt-8 md:text-4xl">Page not found</h1>
      <p className="mt-4 max-w-md text-sm text-light-gray/50">The page you&apos;re looking for doesn&apos;t exist or has been moved.</p>
      <Link href="/" className="btn-glow shine-sweep mt-8 inline-flex items-center rounded-xl border border-accent/50 bg-accent/10 px-8 py-3.5 text-sm font-medium text-accent-light transition-all hover:bg-accent/20 hover:shadow-lg hover:shadow-accent/10">
        Back to Home
      </Link>
    </div>
  );
}
