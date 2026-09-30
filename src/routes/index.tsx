import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Trophy, Users, BarChart3, Settings, Play } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const items = [
    { label: "JOGAR", icon: Play, active: true },
    { label: "CARREIRA", icon: Trophy },
    { label: "ELENCO", icon: Users },
    { label: "ESTATÍSTICAS", icon: BarChart3 },
    { label: "CONFIGURAÇÕES", icon: Settings },
  ];

  return (
    <main className="fc26-page">
      <div className="fc26-grid" />
      <div className="fc26-glow fc26-glow-one" />
      <div className="fc26-glow fc26-glow-two" />

      <header className="fc26-header">
        <div className="fc26-brand">
          <span className="fc26-brand-mark">26</span>
          <div>
            <strong>FC</strong>
            <span>ULTIMATE MENU</span>
          </div>
        </div>
        <div className="fc26-status">
          <span className="fc26-dot" />
          MENU PRINCIPAL
        </div>
      </header>

      <section className="fc26-hero">
        <div className="fc26-kicker">THE WORLD'S GAME</div>
        <h1>FC <span>26</span></h1>
        <p>O seu futebol começa aqui.</p>

        <nav className="fc26-menu" aria-label="Menu principal">
          {items.map(({ label, icon: Icon, active }) => (
            <button
              key={label}
              type="button"
              className={`fc26-menu-item ${active ? "is-active" : ""}`}
              onClick={() => undefined}
            >
              <span className="fc26-menu-icon"><Icon size={20} strokeWidth={2.4} /></span>
              <span>{label}</span>
              <ArrowRight className="fc26-arrow" size={19} />
            </button>
          ))}
        </nav>
      </section>

      <footer className="fc26-footer">
        <span>FC 26</span>
        <span>•</span>
        <span>MENU TEMÁTICO</span>
        <span className="fc26-footer-right">PRESS ENTER TO SELECT</span>
      </footer>
    </main>
  );
}
