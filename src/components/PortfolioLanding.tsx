import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sparkles, Upload, Share2, LayoutTemplate, Smartphone, ArrowRight, Check } from "lucide-react";

const features = [
  { icon: Upload, title: "Inhalte hochladen", desc: "Bilder, Texte und Projekte in Sekunden – ohne Vorkenntnisse." },
  { icon: Sparkles, title: "Automatisch generieren", desc: "Wir bauen dein Portfolio in Minuten. Sauber. Modern. Fertig." },
  { icon: Share2, title: "Portfolio teilen", desc: "Sende deinen persönlichen Link direkt an Recruiter." },
  { icon: LayoutTemplate, title: "Moderne Vorlagen", desc: "Wähle ein Design für einen starken ersten Eindruck." },
  { icon: Smartphone, title: "Mobil optimiert", desc: "Sieht auf jedem Gerät perfekt aus – garantiert." },
  { icon: Check, title: "Hosting inklusive", desc: "Schnelles Hosting, kein Setup, kein Ärger." },
];

const PortfolioLanding = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-background/80 border-b border-border/60">
        <div className="container flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2 font-semibold">
            <span className="w-7 h-7 rounded-lg bg-primary grid place-items-center">
              <Sparkles className="w-3.5 h-3.5 text-primary-foreground" />
            </span>
            Portfoliator
          </a>
          <nav className="hidden md:flex items-center gap-10 text-sm text-muted-foreground">
            <a href="#features" className="hover:text-foreground transition-colors">Features</a>
            <a href="#how" className="hover:text-foreground transition-colors">So gehts</a>
            <a href="#cta" className="hover:text-foreground transition-colors">Starten</a>
          </nav>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-5">
            Anmelden
          </Button>
        </div>
      </header>

      {/* Hero */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0 dot-bg pointer-events-none" />
        <div className="container relative z-10 text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-soft text-primary text-xs font-medium mb-8 animate-fade-in">
            <span className="w-1.5 h-1.5 rounded-full bg-mint" />
            Neu · KI-gestützter Portfolio-Generator
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-[1.05] mb-8 animate-fade-up">
            Dein Portfolio.<br />
            <span className="text-primary">In Minuten fertig.</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto animate-fade-up delay-100">
            Erstelle ein professionelles Portfolio ohne Vorkenntnisse –
            einfach hochladen, generieren lassen und bei uns hosten.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center animate-fade-up delay-200">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full h-12 px-8 hover-lift">
              Jetzt kostenlos starten
              <ArrowRight className="ml-1 w-4 h-4" />
            </Button>
            <Button asChild size="lg" variant="ghost" className="rounded-full h-12 px-8 text-foreground hover:bg-secondary">
              <Link to="/beispiele">Beispiele ansehen</Link>
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-sm text-muted-foreground animate-fade-up delay-300">
            <div className="flex items-center gap-2"><Check className="w-4 h-4 text-mint" /> Kostenlos starten</div>
            <div className="flex items-center gap-2"><Check className="w-4 h-4 text-mint" /> Hosting inklusive</div>
          </div>
        </div>

        {/* Floating browser mockup */}
        <div className="container mt-24 max-w-5xl">
          <div className="relative animate-float">
            <div className="rounded-3xl bg-card border border-border shadow-card overflow-hidden">
              <div className="h-9 bg-secondary border-b border-border flex items-center gap-1.5 px-4">
                <div className="w-2.5 h-2.5 rounded-full bg-border" />
                <div className="w-2.5 h-2.5 rounded-full bg-border" />
                <div className="w-2.5 h-2.5 rounded-full bg-border" />
              </div>
              <div className="p-8 grid grid-cols-3 gap-6">
                <div className="col-span-1 space-y-3">
                  <div className="h-3 w-2/3 bg-foreground rounded-full" />
                  <div className="h-2 w-full bg-muted rounded-full" />
                  <div className="h-2 w-5/6 bg-muted rounded-full" />
                  <div className="mt-6 h-9 w-32 bg-primary rounded-full" />
                </div>
                <div className="col-span-2 grid grid-cols-2 gap-3">
                  <div className="rounded-xl bg-primary-soft aspect-video" />
                  <div className="rounded-xl bg-mint-soft aspect-video" />
                  <div className="rounded-xl bg-secondary aspect-video" />
                  <div className="rounded-xl bg-secondary aspect-video" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-32">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center mb-20">
            <p className="text-primary text-sm font-semibold mb-3 uppercase tracking-wider">Features</p>
            <h2 className="text-4xl md:text-5xl font-bold">
              Alles, was dein Portfolio braucht
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {features.map((f, i) => (
              <div
                key={i}
                className="p-8 rounded-2xl bg-card border border-border hover-lift"
              >
                <div className="w-11 h-11 rounded-xl bg-primary-soft grid place-items-center mb-6">
                  <f.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="py-32 bg-secondary/40">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <p className="text-primary text-sm font-semibold mb-3 uppercase tracking-wider">So einfach gehts</p>
            <h2 className="text-4xl md:text-5xl font-bold">In 3 Schritten online</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { n: "01", t: "Inhalte hochladen", d: "Bilder, Projekte, kurze Texte – fertig." },
              { n: "02", t: "Vorlage wählen", d: "Pick eine moderne Vorlage. Anpassen optional." },
              { n: "03", t: "Link teilen", d: "Dein Portfolio ist live. Teile es mit der Welt." },
            ].map((s) => (
              <div key={s.n} className="p-10 rounded-2xl bg-card border border-border hover-lift">
                <div className="text-sm font-semibold text-primary mb-6">{s.n}</div>
                <h3 className="text-xl font-semibold mb-3">{s.t}</h3>
                <p className="text-muted-foreground">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="py-40">
        <div className="container text-center max-w-3xl">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Bereit für dein <span className="text-primary">eigenes Portfolio</span>?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-10">
            Starte kostenlos. Keine Kreditkarte nötig. Hosting auf uns.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full h-14 px-10 hover-lift">
            Jetzt kostenlos starten
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 rounded-md bg-primary grid place-items-center">
              <Sparkles className="w-3 h-3 text-primary-foreground" />
            </span>
            <span className="font-semibold text-foreground">Portfoliator</span>
            <span className="ml-2">© 2026</span>
          </div>
          <div className="flex gap-8">
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
