import { Button } from "@/components/ui/button";
import { Sparkles, Upload, Share2, LayoutTemplate, Smartphone, ArrowRight, Check } from "lucide-react";
import heroImg from "@/assets/hero-portfolio.jpg";

const features = [
  { icon: Upload, title: "Inhalte hochladen", desc: "Lade Bilder, Texte und Projekte in Sekunden hoch – ohne Vorkenntnisse." },
  { icon: Sparkles, title: "Automatisch generieren", desc: "Unser Generator baut dein Portfolio in Minuten – sauber, modern, fertig." },
  { icon: Share2, title: "Portfolio teilen", desc: "Sende deinen persönlichen Link direkt an Recruiter und Arbeitgeber." },
  { icon: LayoutTemplate, title: "Professionell wirken", desc: "Wähle aus modernen Vorlagen für einen starken ersten Eindruck." },
  { icon: Smartphone, title: "Mobil optimiert", desc: "Dein Portfolio sieht auf jedem Gerät perfekt aus – garantiert." },
  { icon: Check, title: "Bei uns gehostet", desc: "Schnelles Hosting inklusive. Kein Setup, keine Server, kein Ärger." },
];

const PortfolioLanding = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-background/60 border-b border-border/50">
        <div className="container flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2 font-bold text-lg">
            <span className="w-8 h-8 rounded-lg bg-brand grid place-items-center shadow-glow">
              <Sparkles className="w-4 h-4 text-primary-foreground" />
            </span>
            Portfoliator
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#features" className="hover:text-foreground transition-colors">Features</a>
            <a href="#how" className="hover:text-foreground transition-colors">So gehts</a>
            <a href="#pricing" className="hover:text-foreground transition-colors">Preise</a>
          </nav>
          <Button variant="default" className="bg-brand hover:opacity-90 shadow-glow border-0">
            Anmelden
          </Button>
        </div>
      </header>

      {/* Hero */}
      <section className="relative pt-32 pb-24 overflow-hidden bg-hero">
        <div className="absolute inset-0 grid-bg pointer-events-none" />
        <div className="container relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/60 border border-border text-xs text-muted-foreground mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-mint animate-pulse" />
              Neu · KI-gestützter Portfolio-Generator
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.05] mb-6">
              Dein Portfolio.<br />
              <span className="text-gradient">In Minuten fertig.</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl">
              Erstelle ein professionelles Portfolio ohne Vorkenntnisse – einfach hochladen,
              generieren lassen und bei uns hosten.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button size="lg" className="bg-brand hover:opacity-90 shadow-glow border-0 h-14 px-8 text-base">
                Jetzt kostenlos starten
                <ArrowRight className="ml-1 w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-8 text-base border-border bg-secondary/40 hover:bg-secondary">
                Beispiele ansehen
              </Button>
            </div>
            <div className="mt-8 flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2"><Check className="w-4 h-4 text-mint" /> Kostenlos starten</div>
              <div className="flex items-center gap-2"><Check className="w-4 h-4 text-mint" /> Hosting inklusive</div>
            </div>
          </div>

          <div className="relative animate-float">
            <div className="absolute -inset-8 bg-primary/20 blur-3xl rounded-full" />
            <img
              src={heroImg}
              alt="Portfoliator Dashboard auf Laptop und Smartphone"
              width={1536}
              height={1280}
              className="relative rounded-2xl shadow-card border border-border/50"
            />
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 relative">
        <div className="container">
          <div className="max-w-2xl mb-16">
            <p className="text-mint text-sm font-semibold mb-3 uppercase tracking-wider">Features</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Alles, was dein Portfolio braucht
            </h2>
            <p className="text-muted-foreground text-lg">
              Von der Idee zum live gehosteten Portfolio – ohne Umwege.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f, i) => (
              <div
                key={i}
                className="group relative p-7 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-500 hover:-translate-y-1 hover:shadow-glow"
              >
                <div className="w-12 h-12 rounded-xl bg-brand grid place-items-center mb-5 group-hover:shadow-glow transition-shadow">
                  <f.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="py-24 bg-nightblue-deep/40 border-y border-border">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-mint text-sm font-semibold mb-3 uppercase tracking-wider">So einfach gehts</p>
            <h2 className="text-4xl md:text-5xl font-bold">In 3 Schritten online</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {[
              { n: "01", t: "Inhalte hochladen", d: "Bilder, Projekte, kurze Texte – fertig." },
              { n: "02", t: "Vorlage wählen", d: "Pick eine moderne Vorlage. Anpassen optional." },
              { n: "03", t: "Link teilen", d: "Dein Portfolio ist live. Teile es mit der Welt." },
            ].map((s) => (
              <div key={s.n} className="relative p-8 rounded-2xl bg-card border border-border">
                <div className="text-6xl font-extrabold text-gradient mb-4">{s.n}</div>
                <h3 className="text-2xl font-semibold mb-2">{s.t}</h3>
                <p className="text-muted-foreground">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="pricing" className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero opacity-70" />
        <div className="container relative z-10 text-center max-w-3xl">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
            Bereit für dein <span className="text-gradient">eigenes Portfolio</span>?
          </h2>
          <p className="text-xl text-muted-foreground mb-10">
            Starte kostenlos. Keine Kreditkarte nötig. Hosting auf uns.
          </p>
          <Button size="lg" className="bg-brand hover:opacity-90 shadow-glow border-0 h-16 px-10 text-lg">
            Jetzt kostenlos starten
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-10">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 rounded-md bg-brand grid place-items-center">
              <Sparkles className="w-3 h-3 text-primary-foreground" />
            </span>
            <span className="font-semibold text-foreground">Portfoliator</span>
            <span>© 2026</span>
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground transition-colors">Impressum</a>
            <a href="#" className="hover:text-foreground transition-colors">Datenschutz</a>
            <a href="#" className="hover:text-foreground transition-colors">Kontakt</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PortfolioLanding;
