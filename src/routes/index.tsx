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

import heroAsset from "@/assets/hero-overlooked.png.asset.json";
import ba1 from "@/assets/before-after-1.png.asset.json";
import ba2 from "@/assets/before-after-2.png.asset.json";
import ba3 from "@/assets/before-after-3.png.asset.json";
import ba4 from "@/assets/before-after-4.png.asset.json";
import ba5 from "@/assets/before-after-5.png.asset.json";
import pouchAsset from "@/assets/product-pouch.webp.asset.json";
import resultsAsset from "@/assets/product-results.webp.asset.json";
import boxAsset from "@/assets/product-box.webp.asset.json";
import designAsset from "@/assets/product-design.webp.asset.json";
import discreetAsset from "@/assets/product-discreet.webp.asset.json";
import app1 from "@/assets/purisaki-app-1.png.asset.json";
import app2 from "@/assets/purisaki-app-2.png.asset.json";



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
          "Thousands of women over 40 swapped harsh pills for the Berberine Patch — 24/7 transdermal technology.",
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
    promo: "OFFICIAL LIMITED-TIME OFFER • LIMITED STOCK • FREE U.S. SHIPPING",
    chip: "Berberine • Transdermal Technology",
    h1a: "Become the woman ",
    h1b: "he can't stop",
    h1c: " staring at.",
    sub: (
      <>
        Thousands of women over 40 have swapped harsh pills and impossible diets for the{" "}
        <strong>Berberine Patch</strong> — a discreet adhesive that works 24/7 with transdermal
        technology.{" "}
        <span className="text-primary font-semibold">
          See why it became a phenomenon across the U.S.
        </span>
      </>
    ),
    ctaPrimary: "Visit the official site",
    ctaSecondary: "I want to be that woman",
    rating: "4.9/5 • thousands of happy women",
    trust: ["Free U.S. Shipping", "30-Day Guarantee", "Secure Checkout", "Clinically-Studied Formula"],
    eyebrow1: "A moment every woman knows",
    h2a: "Picture yourself, dressed to impress, at a special dinner with your husband.",
    story: [
      "It's the perfect night.",
      "Until a stunning woman walks past your table.",
      "And he can't take his eyes off her.",
      "It hurts, doesn't it?",
    ],
    storyClose:
      "Now picture that woman being you — wearing the Berberine Patch. Try it for a full 30 days. If you're not stunned by what you see in the mirror, we refund 100% of your money. The risk is entirely on us.",
    eyebrow2: "Real before & after",
    h2b: "What 30 days with the patch can do",
    h2bSub:
      "Real women, real transformations. Each one wore the Berberine Patch every day — no crash diets, no punishing workouts.",
    eyebrow3: "The solution fits in a single patch",
    h2c: "Meet the Berberine Patch.",
    h2cSub:
      "A discreet adhesive that delivers pure Berberine straight through your skin — the natural compound researchers have compared to Metformin in clinical studies. No pills. No nausea. No effort.",
    bullets: [
      "Stable blood sugar all day long.",
      "Fewer sweet cravings and less late-night snacking.",
      "Belly fat melting away week after week.",
      "Steady energy — without the afternoon crash.",
      "Your favorite clothes fitting again — with no crash diets.",
    ],
    ctaOffer: "See the offer on the official site",
    eyebrow4: "Meet the product",
    h2d: "Inside the Berberine Patch",
    h2dSub:
      "Every detail of the patch women everywhere are obsessing over to lose weight — without needles.",
    eyebrow5: "Real women, real results",
    eyebrow6: "Available only on the official site",
    h2e: "Get your Berberine Patch directly from the maker",
    h2eSub:
      "To protect you from counterfeits and lock in the promo price, the Berberine Patch is sold only on the official manufacturer page. That's where the discounted kits, secure checkout and 30-day guarantee live.",
    whatNext: "What you'll see on the next page:",
    nextItems: [
      "Official kits with up to 60% off",
      "Free shipping and exclusive bonuses",
      "Unconditional 30-day money-back guarantee",
      "100% secure checkout via ClickBank",
    ],
    ctaGo: "Go to the official site",
    redirectNote: "You'll be redirected to the official manufacturer page",
    h2f: "30-Day Money-Back Guarantee",
    guaranteeText:
      "Try the Berberine Patch for a full 30 days through the official site. If you're not genuinely amazed by the change in your body, energy and confidence, the maker refunds 100% of your money. No questions asked. The risk is entirely on us.",
    finalH: "Your new version starts today.",
    finalSub:
      "Every day you wait is another day of lost energy, lost confidence and lost time with the people you love. The next step is one click away — on the official manufacturer page.",
    finalCta: "Claim my Berberine Patch",
    comparison: {
      eyebrow: "The smart choice",
      title: "Berberine Patch vs ",
      titleAccent: "Ozempic & Mounjaro",
      subtitle:
        "Same goal — a slimmer body and steady blood sugar. Very different paths. See why thousands of women are switching to the natural patch.",
      patch: {
        title: "Berberine Patch",
        subtitle: "100% natural • transdermal",
        badge: "RECOMMENDED",
        items: [
          "No needles, no injections",
          "100% natural — Berberine + botanicals",
          "No nausea or harsh side effects",
          "No prescription needed",
          "From $1.65 per day",
          "Discreet daily patch — works 24/7",
          "30-day money-back guarantee",
        ],
        cta: "Choose the patch",
      },
      ozempic: {
        title: "Ozempic",
        subtitle: "Semaglutide • injection",
        items: [
          "Weekly self-injection",
          "Synthetic GLP-1 hormone",
          "Frequent nausea, vomiting, fatigue",
          "Prescription required",
          "$900–$1,300 per month",
          "Weight often returns when you stop",
          "No money-back guarantee",
        ],
      },
      mounjaro: {
        title: "Mounjaro",
        subtitle: "Tirzepatide • injection",
        items: [
          "Weekly self-injection",
          "Dual synthetic hormone",
          "Nausea, diarrhea, pancreas warnings",
          "Prescription required",
          "$1,000–$1,500 per month",
          "Rebound weight gain reported",
          "No money-back guarantee",
        ],
      },
      disclaimer:
        "Berberine Patch is a natural dietary supplement, not a medication. Comparison is for informational purposes only and is not medical advice.",
    },
    gallery: {
      items: [
        {
          title: "Berberine Patch Original",
          text: "30-day program — 30 transdermal patches with our proprietary berberine blend. Nature's Ozempic working 24/7.",
        },
        {
          title: "Real, Visible Results",
          text: "Real women report a flatter belly, fewer cravings and more energy in weeks. No extreme diets. No needles.",
        },
        {
          title: "Skin-Fitting Design",
          text: "Secure adhesive that's unlikely to fall off — wear it while you work, sleep or rest at home.",
        },
        {
          title: "Discreet & Invisible",
          text: "Thin, inconspicuous and blends seamlessly under any outfit. Gentle formula suitable for most skin types.",
        },
        {
          title: "30-Patch Box",
          text: "30 patches per pack — a full 30-day program at 7cm diameter, ready to start your transformation today.",
        },
      ],
      cta: "I want mine now",
    },
    testimonials: {
      titleStart: "Women are ",
      titleAccent: "talking",
      titleEnd: ".",
      items: [
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
      ],
    },
    bonus: {
      eyebrow: "Free Bonus · Limited Time",
      titleStart: "Get ",
      titleAccent1: "Purisaki Life",
      titleMid: " — your 30-day companion app, ",
      titleAccent2: "FREE",
      titleEnd: " with every order.",
      subtitle:
        "A private 30-day program built around the Berberine Patch — daily guides, meal plans, recipes, mindset tips and progress tracking. Yours at no extra cost when you order today.",
      insideTitle: "What's inside the app:",
      items: [
        "Step-by-step User Guide — apply your patch the right way, every time",
        "30-Day Meal Plan — breakfast, lunch, dinner & snacks designed to support fat-burn",
        "Healthy Recipes — quick, simple, family-friendly",
        "Daily Mindset Tips — stay consistent and motivated",
        "Progress Tracker — see your wins week by week",
        "Direct Support — questions answered, no guesswork",
      ],
      valueLabel: "Value",
      valueWas: "$97",
      valueNow: "FREE today",
      cta: "Claim my patch + free app",
      note: "Instant access delivered by email after your order is confirmed.",
    },
    footerDisclaimer:
      "Statements have not been evaluated by the FDA. This product is not intended to diagnose, treat, cure or prevent any disease. Results vary.",
    finalTrust: ["Free U.S. Shipping", "30-Day Guarantee", "Secure Checkout"],
  },
  PT: {
    promo: "OFERTA OFICIAL POR TEMPO LIMITADO • ESTOQUE LIMITADO • FRETE GRÁTIS EUA",
    chip: "Berberina • Tecnologia Transdérmica",
    h1a: "Torne-se a mulher ",
    h1b: "que ele não consegue",
    h1c: " parar de olhar.",
    sub: (
      <>
        Milhares de mulheres acima dos 40 trocaram pílulas agressivas e dietas impossíveis pelo{" "}
        <strong>Berberine Patch</strong> — um adesivo discreto que funciona 24/7 com tecnologia
        transdérmica.{" "}
        <span className="text-primary font-semibold">
          Veja por que virou fenômeno nos EUA.
        </span>
      </>
    ),
    ctaPrimary: "Visitar o site oficial",
    ctaSecondary: "Quero ser essa mulher",
    rating: "4.9/5 • milhares de mulheres felizes",
    trust: ["Frete Grátis EUA", "Garantia de 30 Dias", "Checkout Seguro", "Fórmula Clinicamente Estudada"],
    eyebrow1: "Um momento que toda mulher conhece",
    h2a: "Imagine-se, vestida para impressionar, em um jantar especial com seu marido.",
    story: [
      "É a noite perfeita.",
      "Até que uma mulher deslumbrante passe em frente à sua mesa.",
      "E ele não consegue tirar os olhos dela.",
      "Dói, não é?",
    ],
    storyClose:
      "Agora imagine você usando o adesivo de berberina. Experimente por 30 dias. Se você não ficar impressionada com o que vê no espelho, reembolsamos 100% do seu dinheiro. O risco é todo nosso.",
    eyebrow2: "Antes e depois reais",
    h2b: "O que 30 dias com o adesivo podem fazer",
    h2bSub:
      "Mulheres reais, transformações reais. Cada uma usou o Berberine Patch todos os dias — sem dietas malucas, sem treinos punitivos.",
    eyebrow3: "A solução cabe em um único adesivo",
    h2c: "Conheça o Berberine Patch.",
    h2cSub:
      "Um adesivo discreto que libera berberina pura através da pele — o composto natural que pesquisadores compararam à Metformina em estudos clínicos. Sem pílulas. Sem náusea. Sem esforço.",
    bullets: [
      "Açúcar no sangue estável o dia todo.",
      "Menos vontade de doces e menos petiscadas à noite.",
      "Gordura da barriga derretendo semana após semana.",
      "Energia estável — sem o cansaço da tarde.",
      "Suas roupas favoritas vestindo novamente — sem dietas malucas.",
    ],
    ctaOffer: "Ver a oferta no site oficial",
    eyebrow4: "Conheça o produto",
    h2d: "Por dentro do Berberine Patch",
    h2dSub:
      "Cada detalhe do adesivo que mulheres em todo lugar estão adorando para emagrecer — sem agulhas.",
    eyebrow5: "Mulheres reais, resultados reais",
    eyebrow6: "Disponível apenas no site oficial",
    h2e: "Receba seu Berberine Patch direto do fabricante",
    h2eSub:
      "Para protegê-la de falsificações e garantir o preço promocional, o Berberine Patch é vendido apenas na página oficial do fabricante. É lá que estão os kits com desconto, o checkout seguro e a garantia de 30 dias.",
    whatNext: "O que você verá na próxima página:",
    nextItems: [
      "Kits oficiais com até 60% off",
      "Frete grátis e bônus exclusivos",
      "Garantia incondicional de 30 dias",
      "Checkout 100% seguro via ClickBank",
    ],
    ctaGo: "Ir para o site oficial",
    redirectNote: "Você será redirecionada para a página oficial do fabricante",
    h2f: "Garantia de 30 Dias com Reembolso Total",
    guaranteeText:
      "Experimente o Berberine Patch por 30 dias completos através do site oficial. Se você não ficar genuinamente impressionada com a mudança no seu corpo, energia e confiança, o fabricante reembolsa 100% do seu dinheiro. Sem perguntas. O risco é todo nosso.",
    finalH: "Sua nova versão começa hoje.",
    finalSub:
      "Cada dia que você espera é mais um dia de energia perdida, confiança perdida e tempo perdido com as pessoas que você ama. O próximo passo está a um clique de distância — na página oficial do fabricante.",
    finalCta: "Garantir meu Berberine Patch",
    comparison: {
      eyebrow: "A escolha inteligente",
      title: "Berberine Patch vs ",
      titleAccent: "Ozempic & Mounjaro",
      subtitle:
        "Mesmo objetivo — um corpo mais magro e açúcar no sangue estável. Caminhos muito diferentes. Veja por que milhares de mulheres estão trocando pelo adesivo natural.",
      patch: {
        title: "Berberine Patch",
        subtitle: "100% natural • transdérmico",
        badge: "RECOMENDADO",
        items: [
          "Sem agulhas, sem injeções",
          "100% natural — Berberina + botanicals",
          "Sem náusea ou efeitos colaterais fortes",
          "Sem receita médica",
          "A partir de $1.65 por dia",
          "Adesivo discreto diário — funciona 24/7",
          "Garantia de reembolso de 30 dias",
        ],
        cta: "Escolher o adesivo",
      },
      ozempic: {
        title: "Ozempic",
        subtitle: "Semaglutida • injeção",
        items: [
          "Autoinjeção semanal",
          "Hormônio GLP-1 sintético",
          "Náusea frequente, vômito, fadiga",
          "Receita médica necessária",
          "$900–$1.300 por mês",
          "Peso volta quando para",
          "Sem garantia de reembolso",
        ],
      },
      mounjaro: {
        title: "Mounjaro",
        subtitle: "Tirzepatida • injeção",
        items: [
          "Autoinjeção semanal",
          "Hormônio sintético duplo",
          "Náusea, diarreia, avisos ao pâncreas",
          "Receita médica necessária",
          "$1.000–$1.500 por mês",
          "Ganho de peso de volta relatado",
          "Sem garantia de reembolso",
        ],
      },
      disclaimer:
        "Berberine Patch é um suplemento alimentar natural, não um medicamento. A comparação é apenas informativa e não constitui orientação médica.",
    },
    gallery: {
      items: [
        {
          title: "Berberine Patch Original",
          text: "Programa de 30 dias — 30 adesivos transdérmicos com nossa mistura exclusiva de berberina. O Ozempic da natureza trabalhando 24/7.",
        },
        {
          title: "Resultados Reais e Visíveis",
          text: "Mulheres reais relatam barriga mais chapada, menos desejos e mais energia em semanas. Sem dietas extremas. Sem agulhas.",
        },
        {
          title: "Design que Se Adere à Pele",
          text: "Adesivo seguro que dificilmente solta — use enquanto trabalha, dorme ou descansa em casa.",
        },
        {
          title: "Discreto e Invisível",
          text: "Fino, discreto e se mistura perfeitamente sob qualquer roupa. Fórmula suave adequada para a maioria dos tipos de pele.",
        },
        {
          title: "Caixa com 30 Adesivos",
          text: "30 adesivos por embalagem — programa completo de 30 dias com 7cm de diâmetro, pronto para iniciar sua transformação hoje.",
        },
      ],
      cta: "Quero o meu agora",
    },
    testimonials: {
      titleStart: "Mulheres estão ",
      titleAccent: "falando",
      titleEnd: ".",
      items: [
        {
          q: "Em poucas semanas minha glicemia em jejum caiu tanto que meu médico literalmente perguntou o que eu estava fazendo de diferente. Eu me sinto EU de novo.",
          a: "Sarah M., 47",
        },
        {
          q: "Eu vivia cansada, com aquela barriga teimosa que não ia embora. Depois de um mês com o adesivo, minhas roupas começaram a servir de novo. Sem dieta maluca.",
          a: "Linda K., 52",
        },
        {
          q: "Aqueles desejos por doce no final da tarde? Foram embora. Parece pouco, mas mudou minha rotina inteira — e meu corpo.",
          a: "Jessica T., 44",
        },
      ],
    },
    bonus: {
      eyebrow: "Bônus Grátis · Por Tempo Limitado",
      titleStart: "Ganhe o ",
      titleAccent1: "Purisaki Life",
      titleMid: " — seu app companheiro de 30 dias, ",
      titleAccent2: "GRÁTIS",
      titleEnd: " em todo pedido.",
      subtitle:
        "Um programa privado de 30 dias construído em torno do Berberine Patch — guias diários, plano de refeições, receitas, dicas de mentalidade e acompanhamento de progresso. Seu sem custo extra ao comprar hoje.",
      insideTitle: "O que tem dentro do app:",
      items: [
        "Guia do Usuário passo a passo — aplique seu adesivo da forma certa, sempre",
        "Plano Alimentar de 30 Dias — café da manhã, almoço, jantar e lanches para apoiar a queima de gordura",
        "Receitas Saudáveis — rápidas, simples, para toda a família",
        "Dicas Diárias de Mentalidade — mantenha consistência e motivação",
        "Acompanhamento de Progresso — veja suas conquistas semana a semana",
        "Suporte Direto — tire dúvidas, sem adivinhações",
      ],
      valueLabel: "Valor",
      valueWas: "$97",
      valueNow: "GRÁTIS hoje",
      cta: "Garantir meu adesivo + app grátis",
      note: "Acesso instantâneo enviado por email após a confirmação do pedido.",
    },
    footerDisclaimer:
      "As alegações não foram avaliadas pela FDA. Este produto não se destina a diagnosticar, tratar, curar ou prevenir qualquer doença. Resultados podem variar.",
    finalTrust: ["Frete Grátis EUA", "Garantia de 30 Dias", "Checkout Seguro"],
  },
};

function LandingPage() {
  const [lang, setLang] = useState<Lang>("PT");
  const t = copy[lang];


  return (
    <div className="min-h-screen text-foreground">
      {/* Promo bar */}
      <div className="bg-gradient-to-r from-primary via-accent to-primary text-primary-foreground text-center text-xs sm:text-sm font-bold tracking-wide py-2.5 px-4">
        <span className="inline-flex items-center gap-2">
          <Flame className="w-4 h-4" /> {t.promo}
        </span>
      </div>

      {/* Nav */}
      <header className="border-b border-white/5">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-4">
          <a href="#top" className="brand-lockup" aria-label="Berberine Patch">
            <span className="dot" aria-hidden="true" />
            <span className="wordmark">
              Berberine Patch
              <span className="pcs">30 PCS</span>
            </span>
          </a>
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
            <a
              href={CTA_URL}
              target="_blank"
              rel="noopener noreferrer sponsored"
              aria-label="Tired of being overlooked? Get the Berberine Patch"
              className="relative block rounded-3xl border border-primary/30 bg-black/40 backdrop-blur p-2 shadow-[0_30px_120px_-30px_rgba(74,141,255,0.7)] transition-transform hover:scale-[1.01]"
            >
              <img
                src={heroAsset.url}
                alt="Tired of being overlooked? Berberine Patch"
                loading="eager"
                className="w-full h-auto rounded-2xl"
              />
            </a>
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

          <div className="mt-12 max-w-5xl mx-auto">
            <Carousel
              opts={{ loop: true, align: "start" }}
              plugins={[Autoplay({ delay: 4500, stopOnInteraction: false })]}
              className="relative"
            >
              <CarouselContent>
                {[
                  { img: ba1.url, name: "Sarah, 47", line: "Lost 14 lbs and got her confidence back." },
                  { img: ba2.url, name: "Maria, 51", line: "Flat belly for the first time in 10 years." },
                  { img: ba3.url, name: "Camila, 44", line: "Back in a bikini after two kids." },
                  { img: ba4.url, name: "Renata, 39", line: "Dropped 3 dress sizes in 30 days." },
                  { img: ba5.url, name: "Linda, 49", line: "Her old shorts now slide right off." },
                ].map((c) => (
                  <CarouselItem key={c.name} className="md:basis-1/2 lg:basis-1/2">
                    <a
                      href={CTA_URL}
                      target="_blank"
                      rel="noopener noreferrer sponsored"
                      className="block rounded-2xl bg-card border border-border/40 overflow-hidden text-left hover:border-primary/60 transition-colors"
                    >
                      <img
                        src={c.img}
                        alt={`${c.name} — before and after Berberine Patch`}
                        className="w-full h-auto"
                        loading="lazy"
                      />
                      <div className="p-5">
                        <div className="font-bold">{c.name}</div>
                        <p className="text-sm text-muted-foreground mt-1">{c.line}</p>
                      </div>
                    </a>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden sm:flex -left-4 md:-left-12 bg-primary text-primary-foreground border-primary hover:bg-primary/90" />
              <CarouselNext className="hidden sm:flex -right-4 md:-right-12 bg-primary text-primary-foreground border-primary hover:bg-primary/90" />
            </Carousel>
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

      {/* COMPARISON: Berberine Patch vs Ozempic / Mounjaro */}
      <section className="px-4 py-20 md:py-28 bg-black/30 border-y border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <span className="eyebrow">{t.comparison.eyebrow}</span>
            <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-black leading-tight">
              {t.comparison.title}<span className="text-primary glow-text">{t.comparison.titleAccent}</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              {t.comparison.subtitle}
            </p>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {/* Berberine Patch */}
            <div className="rounded-2xl border-2 border-primary/60 bg-card p-6 shadow-[0_20px_80px_-30px_rgba(74,141,255,0.6)] relative">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-[10px] font-black tracking-widest px-3 py-1 rounded-full">
                {t.comparison.patch.badge}
              </span>
              <h3 className="text-xl font-black text-primary">{t.comparison.patch.title}</h3>
              <p className="text-xs text-muted-foreground mt-1">{t.comparison.patch.subtitle}</p>
              <ul className="mt-5 space-y-3 text-sm">
                {t.comparison.patch.items.map((item) => (
                  <li key={item} className="flex gap-2 items-start">
                    <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href={CTA_URL}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="btn-cta inline-flex items-center justify-center gap-2 w-full px-5 py-3 mt-6 text-sm"
              >
                {t.comparison.patch.cta} <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Ozempic */}
            <div className="rounded-2xl border border-border/40 bg-card/60 p-6">
              <h3 className="text-xl font-black text-muted-foreground">{t.comparison.ozempic.title}</h3>
              <p className="text-xs text-muted-foreground mt-1">{t.comparison.ozempic.subtitle}</p>
              <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
                {t.comparison.ozempic.items.map((item) => (
                  <li key={item} className="flex gap-2 items-start">
                    <span className="w-4 h-4 grid place-items-center text-destructive shrink-0 mt-0.5">✕</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Mounjaro */}
            <div className="rounded-2xl border border-border/40 bg-card/60 p-6">
              <h3 className="text-xl font-black text-muted-foreground">{t.comparison.mounjaro.title}</h3>
              <p className="text-xs text-muted-foreground mt-1">{t.comparison.mounjaro.subtitle}</p>
              <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
                {t.comparison.mounjaro.items.map((item) => (
                  <li key={item} className="flex gap-2 items-start">
                    <span className="w-4 h-4 grid place-items-center text-destructive shrink-0 mt-0.5">✕</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="text-center text-xs text-muted-foreground mt-8 max-w-2xl mx-auto">
            {t.comparison.disclaimer}
          </p>
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
                { img: pouchAsset.url, ...t.gallery.items[0] },
                { img: resultsAsset.url, ...t.gallery.items[1] },
                { img: designAsset.url, ...t.gallery.items[2] },
                { img: discreetAsset.url, ...t.gallery.items[3] },
                { img: boxAsset.url, ...t.gallery.items[4] },
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
                        {t.gallery.cta} <ArrowRight className="w-3.5 h-3.5" />
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
            {t.testimonials.titleStart}<span className="text-primary">{t.testimonials.titleAccent}</span>{t.testimonials.titleEnd}
          </h2>

          <div className="mt-12 grid md:grid-cols-3 gap-6 text-left">
            {t.testimonials.items.map((t2) => (
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

      {/* BONUS — PURISAKI LIFE APP */}
      <section className="px-4 py-20 md:py-28 hex-bg border-y border-primary/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <span className="eyebrow inline-flex items-center gap-2">
              <Flame className="w-3.5 h-3.5" /> {t.bonus.eyebrow}
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-black">
              {t.bonus.titleStart}<span className="text-primary">{t.bonus.titleAccent1}</span>{t.bonus.titleMid}<span className="text-primary">{t.bonus.titleAccent2}</span>{t.bonus.titleEnd}
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-muted-foreground leading-relaxed">
              {t.bonus.subtitle}
            </p>
          </div>

          <div className="mt-10 grid md:grid-cols-2 gap-10 items-center">
            <div className="grid grid-cols-2 gap-4">
              {[app1, app2].map((img, i) => (
                <div
                  key={i}
                  className="rounded-2xl overflow-hidden border border-primary/30 bg-card shadow-[0_20px_60px_-25px_rgba(74,141,255,0.5)]"
                >
                  <img
                    src={img.url}
                    alt={`Purisaki Life app screenshot ${i + 1}`}
                    className="w-full h-auto"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl font-black">{t.bonus.insideTitle}</h3>
              <ul className="mt-5 space-y-3">
                {t.bonus.items.map((item) => (
                  <li key={item} className="flex gap-3 items-start">
                    <Check className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-foreground/90">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 inline-flex items-center gap-3 rounded-xl border border-primary/40 bg-primary/10 px-4 py-3">
                <span className="text-2xl">🎁</span>
                <div className="text-left">
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">{t.bonus.valueLabel}</div>
                  <div className="font-black">
                    <span className="line-through text-muted-foreground mr-2">{t.bonus.valueWas}</span>
                    <span className="text-primary">{t.bonus.valueNow}</span>
                  </div>
                </div>
              </div>

              <a
                href={CTA_URL}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="btn-cta inline-flex items-center gap-2 px-8 py-4 mt-6 text-sm"
              >
                {t.bonus.cta} <ArrowRight className="w-4 h-4" />
              </a>
              <p className="text-xs text-muted-foreground mt-3">
                {t.bonus.note}
              </p>
            </div>
          </div>
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
        <div className="max-w-3xl mx-auto rounded-3xl border border-primary/40 bg-gradient-to-b from-card to-black/60 p-10 text-center shadow-[0_30px_120px_-30px_rgba(74,141,255,0.45)]">
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
            <span className="inline-flex items-center gap-1.5"><Truck className="w-3.5 h-3.5 text-primary"/> {t.finalTrust[0]}</span>
            <span className="inline-flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-primary"/> {t.finalTrust[1]}</span>
            <span className="inline-flex items-center gap-1.5"><Lock className="w-3.5 h-3.5 text-primary"/> {t.finalTrust[2]}</span>
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
