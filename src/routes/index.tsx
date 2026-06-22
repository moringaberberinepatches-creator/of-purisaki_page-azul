import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  ArrowRight,
  ChevronDown,
  ShieldCheck,
  Truck,
  Lock,
  FlaskConical,
  Star,
  Globe,
  Check,
  Flame,
} from "lucide-react";

import heroAsset from "@/assets/hero.png.asset.json";
import sarahAsset from "@/assets/sarah.jpg.asset.json";
import lindaAsset from "@/assets/linda.jpg.asset.json";
import jessicaAsset from "@/assets/jessica.jpg.asset.json";
import pouchAsset from "@/assets/product-pouch.webp.asset.json";
import resultsAsset from "@/assets/product-results.webp.asset.json";
import boxAsset from "@/assets/product-box.webp.asset.json";
import designAsset from "@/assets/product-design.webp.asset.json";
import discreetAsset from "@/assets/product-discreet.webp.asset.json";



const CTA_URL =
  "https://5d7d7dfic5b81t1g8jvo3g2vzs.hop.clickbank.net/?&traffic_source=google&traffic_type=search&campaign=berberine_patch_us&creative=review_v1";

const SRC = "https://moringaberberinepatches.com";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Berberine Patch — Become the woman he can't stop looking at" },
      {
        name: "description",
        content:
          "Discreet transdermal Berberine Patch. Steady energy, fewer cravings and visible results in 30 days. Free U.S. shipping & 30-day guarantee.",
      },
      { property: "og:title", content: "Berberine Patch — Transdermal Weight Support" },
      {
        property: "og:description",
        content:
          "Thousands of women over 40 traded harsh pills for the Berberine Patch — 24/7 transdermal technology.",
      },
      { property: "og:type", content: "product" },
      { property: "og:url", content: "/" },
      { property: "og:image", content: `${SRC}/assets/hero-en-B9Qdr0FW.png` },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: LandingPage,
});

type Lang = "EN" | "PT";

const copy = {
  EN: {
    promo: "OFFICIAL LIMITED-TIME OFFER • LOW STOCK • FREE U.S. SHIPPING",
    chip: "Berberine • Transdermal Technology",
    h1a: "Become the woman ",
    h1b: "he can't stop",
    h1c: " looking at.",
    sub: (
      <>
        Thousands of women over 40 traded harsh pills and impossible diets for the{" "}
        <strong>Berberine Patch</strong> — a discreet adhesive that works 24/7 through transdermal
        technology.{" "}
        <span className="text-primary font-semibold">
          See why it became a phenomenon in the U.S.
        </span>
      </>
    ),
    ctaPrimary: "Visit official site",
    ctaSecondary: "I want to be that woman",
    rating: "4.9/5 • thousands of happy women",
    trust: ["Free U.S. Shipping", "30-Day Guarantee", "Secure Checkout", "Studied Formula"],
    eyebrow1: "A moment every woman knows",
    h2a: "Imagine yourself, all dressed up, at a special restaurant with your husband.",
    story: [
      "The perfect night.",
      "Until a stunning woman walks past your table.",
      "And he can't stop looking.",
      "It hurts, doesn't it?",
    ],
    storyClose:
      "Now imagine that woman is you — with Berberine Patch. Try it for 30 full days. If you're not surprised by what you see in the mirror, we refund 100% of your money. The risk is entirely on us.",
    eyebrow2: "Real before & after",
    h2b: "What 30 days with the patch can do",
    h2bSub:
      "Real women, real transformations. Each one wore the Berberine Patch daily — no diet shocks, no gym torture.",
    eyebrow3: "The solution fits in a single patch",
    h2c: "Meet the Berberine Patch.",
    h2cSub:
      "A discreet adhesive that delivers pure Berberine straight through your skin — the natural compound scientists have compared to Metformin in clinical studies. No pills. No nausea. No effort.",
    bullets: [
      "Stable blood sugar throughout the day.",
      "Fewer sweet cravings and late-night snacking.",
      "Belly fat melting away week after week.",
      "Steady energy — no afternoon crash.",
      "Your favorite clothes fitting again — without torture diets.",
    ],
    ctaOffer: "See the offer on the official site",
    eyebrow4: "Meet the product",
    h2d: "Inside the Berberine Patch",
    h2dSub:
      "Every detail of the patch women everywhere are obsessing over to lose weight — without needles.",
    eyebrow5: "Real women, real results",
    eyebrow6: "Available only on the official site",
    h2e: "Get your Berberine Patch direct from the maker",
    h2eSub:
      "To protect you from counterfeits and guarantee the promo pricing, Berberine Patch is sold only on the official manufacturer page. That's where the discounted kits, secure checkout and 30-day guarantee live.",
    whatNext: "What you'll see on the next page:",
    nextItems: [
      "Official kits with up to 60% off",
      "Free shipping and exclusive bonuses",
      "Unconditional 30-day money-back guarantee",
      "100% secure checkout (ClickBank)",
    ],
    ctaGo: "Go to the official site",
    redirectNote: "You'll be redirected to the official manufacturer page",
    h2f: "30-Day Money-Back Guarantee",
    guaranteeText:
      "Try Berberine Patch for 30 full days through the official site. If you're not genuinely surprised by the change in your body, energy and confidence, the maker refunds 100% of your money. No questions asked. The risk is entirely on us.",
    finalH: "Your new version starts today.",
    finalSub:
      "Every day you wait is another day losing energy, confidence and time with the people you love. The next step is one click away — on the official manufacturer page.",
    finalCta: "Claim my Berberine Patch",
  },
};

function LandingPage() {
  const [lang, setLang] = useState<Lang>("EN");
  const t = copy.EN; // PT shown via toggle UI only for parity with source
  void lang;

  return (
    <div className="min-h-screen text-foreground">
      {/* Promo bar */}
      <div className="bg-gradient-to-r from-orange-600 via-orange-500 to-orange-600 text-white text-center text-xs sm:text-sm font-bold tracking-wide py-2.5 px-4">
        <span className="inline-flex items-center gap-2">
          <Flame className="w-4 h-4" /> {t.promo}
        </span>
      </div>

      {/* Nav */}
      <header className="border-b border-white/5">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-4">
          <div className="font-black tracking-tight text-lg">
            <span className="text-primary">B</span>erberine<span className="text-primary">Patch</span>
          </div>
          <div className="flex items-center gap-2 bg-secondary/60 border border-border/60 rounded-full px-2 py-1">
            <Globe className="w-3.5 h-3.5 text-muted-foreground ml-1" />
            <button
              onClick={() => setLang("EN")}
              className={`px-2.5 py-1 rounded-full text-xs font-bold ${
                lang === "EN" ? "btn-cta" : "text-muted-foreground"
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLang("PT")}
              className={`px-2.5 py-1 rounded-full text-xs font-bold ${
                lang === "PT" ? "btn-cta" : "text-muted-foreground"
              }`}
            >
              PT
            </button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="hex-bg relative overflow-hidden">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center px-4 py-16 md:py-24">
          <div>
            <span className="chip">
              <span className="w-1.5 h-1.5 rounded-full bg-primary pulse-ring inline-block" />
              {t.chip}
            </span>
            <h1 className="mt-6 text-5xl sm:text-6xl md:text-7xl font-black leading-[0.95] tracking-tight uppercase">
              {t.h1a}
              <span className="text-primary glow-text">{t.h1b}</span>
              {t.h1c}
            </h1>
            <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed">
              {t.sub}
            </p>

            <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-5">
              <a
                href={CTA_URL}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="btn-cta inline-flex items-center justify-center gap-2 px-7 py-4 text-sm"
              >
                {t.ctaPrimary} <ArrowRight className="w-4 h-4" />
              </a>
              <div className="flex items-center gap-3">
                <div className="flex text-primary">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="text-xs text-muted-foreground max-w-[10rem] leading-tight">
                  {t.rating}
                </span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 -m-6 rounded-[2rem] bg-primary/20 blur-3xl" />
            <div className="relative rounded-3xl border border-primary/30 bg-black/40 backdrop-blur p-2 shadow-[0_30px_120px_-30px_rgba(255,122,26,0.7)]">
              <img
                src={heroAsset.url}
                alt="Tired of being overlooked? Berberine Patch"
                loading="eager"
                className="w-full h-auto rounded-2xl"
              />

            </div>
          </div>
        </div>

        <div className="flex justify-center pb-6">
          <ChevronDown className="w-6 h-6 text-primary animate-bounce" />
        </div>
      </section>

      {/* Trust bar */}
      <section className="border-y border-white/5 bg-black/30">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 px-4 py-8">
          {[
            { i: Truck, label: t.trust[0] },
            { i: ShieldCheck, label: t.trust[1] },
            { i: Lock, label: t.trust[2] },
            { i: FlaskConical, label: t.trust[3] },
          ].map(({ i: Icon, label }) => (
            <div key={label} className="flex flex-col items-center text-center gap-2">
              <div className="w-10 h-10 rounded-full border border-primary/40 grid place-items-center text-primary">
                <Icon className="w-5 h-5" />
              </div>
              <span className="text-xs sm:text-sm font-semibold">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* STORY */}
      <section className="px-4 py-20 md:py-28">
        <div className="max-w-3xl mx-auto text-center">
          <span className="eyebrow">{t.eyebrow1}</span>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-black leading-tight">
            {t.h2a}
          </h2>
          <div className="mt-10 space-y-4 text-lg text-muted-foreground">
            {t.story.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
          <p className="mt-10 text-base text-foreground/90 leading-relaxed">{t.storyClose}</p>
          <a
            href={CTA_URL}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="btn-cta inline-flex items-center gap-2 px-8 py-4 mt-10 text-sm"
          >
            {t.ctaSecondary} <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* BEFORE & AFTER */}
      <section className="px-4 py-20 bg-black/30 border-y border-white/5">
        <div className="max-w-6xl mx-auto text-center">
          <span className="eyebrow">{t.eyebrow2}</span>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-black">{t.h2b}</h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">{t.h2bSub}</p>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                img: sarahAsset.url,
                name: "Sarah, 47",
                line: "Lost 14 lbs and got her confidence back.",
              },
              {
                img: lindaAsset.url,
                name: "Linda, 52",
                line: "Flat belly for the first time in 10 years.",
              },
              {
                img: jessicaAsset.url,
                name: "Jessica, 44",
                line: "More energy than her own daughter.",
              },
            ].map((c) => (

              <div
                key={c.name}
                className="rounded-2xl bg-card border border-border/40 overflow-hidden text-left hover:border-primary/60 transition-colors"
              >
                <div className="relative">
                  <img src={c.img} alt={`${c.name} before and after`} className="w-full h-auto" loading="lazy" />
                  <div className="absolute top-3 left-3 right-3 flex justify-between text-[10px] font-bold tracking-widest">
                    <span className="bg-black/70 px-2 py-1 rounded-full">BEFORE</span>
                    <span className="bg-primary text-primary-foreground px-2 py-1 rounded-full">AFTER</span>
                  </div>
                </div>
                <div className="p-5">
                  <div className="font-bold">{c.name}</div>
                  <p className="text-sm text-muted-foreground mt-1">{c.line}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MEET THE PATCH */}
      <section className="px-4 py-20 md:py-28">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="eyebrow">{t.eyebrow3}</span>
            <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-black leading-tight">
              {t.h2c}
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">{t.h2cSub}</p>
            <ul className="mt-7 space-y-3">
              {t.bullets.map((b) => (
                <li key={b} className="flex gap-3 items-start">
                  <span className="mt-0.5 w-6 h-6 grid place-items-center rounded-full bg-primary/15 border border-primary/40 text-primary shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <a
              href={CTA_URL}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="btn-cta inline-flex items-center gap-2 px-7 py-4 mt-9 text-sm"
            >
              {t.ctaOffer} <ArrowRight className="w-4 h-4" />
            </a>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />
            <img
              src={pouchAsset.url}
              alt="Berberine Patch product"
              loading="lazy"
              className="relative w-full h-auto rounded-3xl border border-primary/30 bg-black/40 p-2"
            />

          </div>
        </div>
      </section>

      {/* PRODUCT GALLERY */}
      <section className="px-4 py-20 bg-black/30 border-y border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <span className="eyebrow">{t.eyebrow4}</span>
            <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-black">{t.h2d}</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">{t.h2dSub}</p>
          </div>

          <Carousel
            opts={{ align: "start", loop: true }}
            plugins={[Autoplay({ delay: 4500, stopOnInteraction: true })]}
            className="mt-12"
          >
            <CarouselContent className="-ml-4">
              {[
                {
                  img: pouchAsset.url,
                  title: "Berberine Patch Original",
                  text: "30-day program — 30 transdermal patches with our proprietary berberine blend. Nature's Ozempic working 24/7.",
                },
                {
                  img: resultsAsset.url,
                  title: "Real, Visible Results",
                  text: "Real women report a flatter belly, fewer cravings and more energy in weeks. No extreme diets. No needles.",
                },
                {
                  img: designAsset.url,
                  title: "Skin-Fitting Design",
                  text: "Secure adhesive that's unlikely to fall off — wear it while you work, sleep or rest at home.",
                },
                {
                  img: discreetAsset.url,
                  title: "Discreet & Invisible",
                  text: "Thin, inconspicuous and blends seamlessly under any outfit. Gentle formula suitable for most skin types.",
                },
                {
                  img: boxAsset.url,
                  title: "30-Patch Box",
                  text: "30 patches per pack — a full 30-day program at 7cm diameter, ready to start your transformation today.",
                },
              ].map((card) => (
                <CarouselItem
                  key={card.title}
                  className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
                >
                  <div className="h-full rounded-2xl bg-card border border-border/40 overflow-hidden hover:border-primary/60 transition-colors flex flex-col">
                    <div className="aspect-square bg-white">
                      <img
                        src={card.img}
                        alt={card.title}
                        loading="lazy"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="p-5 flex-1 flex flex-col">
                      <h3 className="font-bold text-lg">{card.title}</h3>
                      <p className="text-sm text-muted-foreground mt-2 leading-relaxed flex-1">
                        {card.text}
                      </p>
                      <a
                        href={CTA_URL}
                        target="_blank"
                        rel="noopener noreferrer sponsored"
                        className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-primary hover:underline"
                      >
                        I want mine now <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="mt-8 flex justify-center gap-3">
              <CarouselPrevious className="static translate-y-0 bg-primary/15 border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground" />
              <CarouselNext className="static translate-y-0 bg-primary/15 border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground" />
            </div>
          </Carousel>


        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="px-4 py-20 md:py-28">
        <div className="max-w-5xl mx-auto text-center">
          <span className="eyebrow">{t.eyebrow5}</span>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-black">
            Women are <span className="text-primary">talking</span>.
          </h2>

          <div className="mt-12 grid md:grid-cols-3 gap-6 text-left">
            {[
              {
                q: "Within a few weeks my fasting glucose dropped so much my doctor literally asked what I was doing differently. I feel like ME again.",
                a: "Sarah M., 47",
              },
              {
                q: "I lived tired, with that stubborn belly that wouldn't go away. After one month with the patch, my clothes started fitting again. No crazy diet.",
                a: "Linda K., 52",
              },
              {
                q: "The late-afternoon sugar cravings? Gone. Sounds small but it changed my entire routine — and my body.",
                a: "Jessica T., 44",
              },
            ].map((t2) => (
              <figure
                key={t2.a}
                className="rounded-2xl border border-border/40 bg-card p-6 flex flex-col"
              >
                <div className="flex text-primary mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <blockquote className="text-foreground/90 leading-relaxed">"{t2.q}"</blockquote>
                <figcaption className="mt-4 text-sm font-bold text-primary">— {t2.a}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* OFFICIAL SITE CTA */}
      <section className="px-4 py-20 bg-black/40 border-y border-primary/20 hex-bg">
        <div className="max-w-3xl mx-auto text-center">
          <span className="eyebrow">{t.eyebrow6}</span>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-black">{t.h2e}</h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">{t.h2eSub}</p>

          <div className="mt-8 rounded-2xl border border-primary/30 bg-card/70 backdrop-blur p-6 text-left">
            <h3 className="font-bold mb-4">{t.whatNext}</h3>
            <ul className="space-y-2.5">
              {t.nextItems.map((n) => (
                <li key={n} className="flex gap-3 items-start">
                  <Check className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <span>{n}</span>
                </li>
              ))}
            </ul>
          </div>

          <a
            href={CTA_URL}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="btn-cta inline-flex items-center gap-2 px-8 py-4 mt-8 text-sm"
          >
            {t.ctaGo} <ArrowRight className="w-4 h-4" />
          </a>
          <p className="text-xs text-muted-foreground mt-3">{t.redirectNote}</p>
        </div>
      </section>

      {/* GUARANTEE */}
      <section className="px-4 py-20 md:py-28">
        <div className="max-w-4xl mx-auto grid sm:grid-cols-[auto_1fr] gap-8 items-center">
          <div className="mx-auto w-40 h-40 rounded-full grid place-items-center border-4 border-primary/60 bg-primary/10 text-center">
            <div>
              <div className="text-4xl font-black text-primary">30</div>
              <div className="text-[10px] font-bold tracking-widest uppercase">Day Money</div>
              <div className="text-[10px] font-bold tracking-widest uppercase">Back</div>
            </div>
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black">{t.h2f}</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">{t.guaranteeText}</p>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-4 pb-24">
        <div className="max-w-3xl mx-auto rounded-3xl border border-primary/40 bg-gradient-to-b from-card to-black/60 p-10 text-center shadow-[0_30px_120px_-30px_rgba(255,122,26,0.45)]">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight">
            {t.finalH}
          </h2>
          <p className="mt-4 text-muted-foreground">{t.finalSub}</p>
          <a
            href={CTA_URL}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="btn-cta inline-flex items-center gap-2 px-9 py-4 mt-8 text-base"
          >
            {t.finalCta} <ArrowRight className="w-4 h-4" />
          </a>
          <div className="mt-6 flex flex-wrap justify-center gap-4 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1.5"><Truck className="w-3.5 h-3.5 text-primary"/> Free U.S. Shipping</span>
            <span className="inline-flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-primary"/> 30-Day Guarantee</span>
            <span className="inline-flex items-center gap-1.5"><Lock className="w-3.5 h-3.5 text-primary"/> Secure Checkout</span>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/5 py-8 text-center text-xs text-muted-foreground px-4">
        <p>© {new Date().getFullYear()} Berberine Patch. All rights reserved.</p>
        <p className="mt-2 max-w-3xl mx-auto">
          Statements have not been evaluated by the FDA. This product is not intended to diagnose,
          treat, cure or prevent any disease. Results vary.
        </p>
      </footer>
    </div>
  );
}
