import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Sparkles, ExternalLink } from "lucide-react";

import designer from "@/assets/example-designer.jpg";
import photographer from "@/assets/example-photographer.jpg";
import developer from "@/assets/example-developer.jpg";
import illustrator from "@/assets/example-illustrator.jpg";
import architect from "@/assets/example-architect.jpg";
import student from "@/assets/example-student.jpg";

const examples = [
  {
    img: designer,
    name: "Mara Klein",
    role: "UX Designerin",
    tag: "Minimal",
    desc: "Cleanes Portfolio mit Fokus auf Case Studies und Prozess.",
  },
  {
    img: photographer,
    name: "Liam Reed",
    role: "Fotograf",
    tag: "Editorial",
    desc: "Vollflächige Bilder, ruhige Typografie, Galerie-Feeling.",
  },
  {
    img: developer,
    name: "Noah Berger",
    role: "Full-Stack Developer",
    tag: "Tech",
    desc: "Code-Snippets, Tech-Stack-Badges und Projekt-Karten.",
  },
  {
    img: illustrator,
    name: "Sofia Bauer",
    role: "Illustratorin",
    tag: "Verspielt",
    desc: "Warmes Cream, handgeschriebene Headline, bunte Galerie.",
  },
  {
    img: architect,
    name: "Studio Haller",
    role: "Architektur",
    tag: "Swiss",
    desc: "Strenge Typografie, grosse Bauwerks-Fotografie, Projektliste.",
  },
  {
    img: student,
    name: "Lina",
    role: "Studentin",
    tag: "Frisch",
    desc: "Profilbild, Kurzbio, Schulprojekte – einfach und freundlich.",
  },
];

const Examples = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-background/80 border-b border-border/60">
        <div className="container flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 font-semibold">
            <span className="w-7 h-7 rounded-lg bg-primary grid place-items-center">
              <Sparkles className="w-3.5 h-3.5 text-primary-foreground" />
            </span>
            Portfoliator
          </Link>
          <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1.5">
            <ArrowLeft className="w-4 h-4" /> Zurück zur Startseite
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-40 pb-20 text-center">
        <div className="container max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-soft text-primary text-xs font-medium mb-8 animate-fade-in">
            <span className="w-1.5 h-1.5 rounded-full bg-mint" />
            Beispiele
          </div>
          <h1 className="text-5xl md:text-6xl font-bold leading-[1.05] mb-6 animate-fade-up">
            Echte Portfolios.<br />
            <span className="text-primary">Mit Portfoliator gebaut.</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto animate-fade-up delay-100">
            Sechs Beispiele aus verschiedenen Branchen – alle in wenigen Minuten erstellt.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="pb-32">
        <div className="container max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8">
            {examples.map((e, i) => (
              <article
                key={i}
                className="group rounded-2xl bg-card border border-border overflow-hidden hover-lift animate-fade-up"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="aspect-[16/11] overflow-hidden bg-secondary">
                  <img
                    src={e.img}
                    alt={`Portfolio Beispiel von ${e.name}`}
                    width={1280}
                    height={896}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-7">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-mint-soft text-mint">
                      {e.tag}
                    </span>
                    <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <h3 className="text-xl font-semibold mb-1">{e.name}</h3>
                  <p className="text-sm text-primary mb-3">{e.role}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{e.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-secondary/40 border-t border-border">
        <div className="container text-center max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Bereit für <span className="text-primary">dein eigenes</span>?
          </h2>
          <p className="text-lg text-muted-foreground mb-10">
            In Minuten zum fertigen Portfolio. Kostenlos starten.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full h-14 px-10 hover-lift">
            Jetzt kostenlos starten
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Examples;
