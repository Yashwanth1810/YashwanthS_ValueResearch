import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export default function CalculatorsPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-4 pb-12 pt-6 lg:px-6 lg:pt-8">
        <div className="mb-8">
          <h1 className="text-3xl font-semibold tracking-tight text-slate-900">
            Calculators
          </h1>
          <p className="mt-2 text-sm text-slate-600">
            Financial calculators to help you plan your investments
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Link
            href="/calculators/sip"
            className="group rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-all hover:border-brand/50 hover:shadow-md"
          >
            <h2 className="text-xl font-semibold text-slate-900 group-hover:text-brand">
              SIP Calculator
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Calculate the future value of your Systematic Investment Plan (SIP)
              investments
            </p>
            <span className="mt-4 inline-flex items-center text-sm font-medium text-brand group-hover:text-brand-dark">
              Use calculator
              <span aria-hidden="true" className="ml-1">→</span>
            </span>
          </Link>

          <Link
            href="/calculators/lumpsum"
            className="group rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-all hover:border-brand/50 hover:shadow-md"
          >
            <h2 className="text-xl font-semibold text-slate-900 group-hover:text-brand">
              Lumpsum Calculator
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Calculate the future value of your one-time lumpsum investment
            </p>
            <span className="mt-4 inline-flex items-center text-sm font-medium text-brand group-hover:text-brand-dark">
              Use calculator
              <span aria-hidden="true" className="ml-1">→</span>
            </span>
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
