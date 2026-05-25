import { ArrowLeft, HeartHandshake, Phone } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-[100dvh] bg-ivory px-5 py-8 text-charcoal">
      <section className="mx-auto grid min-h-[calc(100dvh-4rem)] w-full max-w-6xl items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-gold/35 bg-gold/12 px-4 py-2 text-sm font-semibold text-forest">
            <HeartHandshake size={16} strokeWidth={1.8} />
            Page not found
          </div>
          <h1 className="font-display text-[clamp(3rem,8vw,7rem)] leading-[0.92] tracking-[-0.03em] text-forest text-balance">
            Let&apos;s guide you back to care.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-muted">
            This page may have moved, or the link may not match a live EverKind route. The main care enquiry page is still available.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-forest bg-forest px-6 py-3 text-sm font-semibold text-ivory transition duration-300 hover:bg-[#164534] active:translate-y-px"
            >
              <ArrowLeft size={17} strokeWidth={1.8} />
              Return home
            </Link>
            <Link
              href="/#contact"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-forest/35 px-6 py-3 text-sm font-semibold text-forest transition duration-300 hover:border-forest hover:bg-forest/5 active:translate-y-px"
            >
              <Phone size={17} strokeWidth={1.8} />
              Arrange care
            </Link>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[2.4rem] bg-forest p-8 text-ivory shadow-soft md:p-12">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute -right-20 top-12 size-72 rounded-full bg-gold" />
            <div className="absolute -bottom-28 left-10 size-80 rounded-full bg-ivory" />
          </div>
          <div className="relative">
            <p className="font-display text-4xl leading-none md:text-6xl">EverKind Home Care</p>
            <p className="mt-5 max-w-lg text-base leading-7 text-ivory/72">
              Private home care, companionship, dementia support and live-in care for families across the UK.
            </p>
            <div className="mt-12 border-t border-ivory/15 pt-6">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold">Care team</p>
              <a href="tel:+442045768421" className="mt-3 block font-display text-3xl">
                +44 20 4576 8421
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
