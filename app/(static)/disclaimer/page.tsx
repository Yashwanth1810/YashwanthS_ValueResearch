import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export default function DisclaimerPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto w-full max-w-4xl flex-1 px-4 pb-12 pt-6 lg:px-6 lg:pt-8">
        <h1 className="text-2xl font-semibold tracking-tight text-slate-900">
          Disclaimer
        </h1>
        <p className="mt-4 text-sm text-slate-600">
          Yashwanth S: Value Research is an educational website. We are not SEBI-registered
          investment advisors and nothing on this website should be considered
          as investment, tax, or legal advice.
        </p>
      </main>
      <Footer />
    </>
  );
}

