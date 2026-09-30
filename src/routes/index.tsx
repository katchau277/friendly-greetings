import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Trophy, Users, BarChart3, Settings, Play, Plus, ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const [screen, setScreen] = useState<"menu" | "career">("menu");
  const [careerName, setCareerName] = useState("");
  const [athleteName, setAthleteName] = useState("");
  const [position, setPosition] = useState("");
  const [club, setClub] = useState("");
  const [careerSaved, setCareerSaved] = useState(false);

  const items = [
    { label: "JOGAR", icon: Play, active: true },
    { label: "CARREIRA", icon: Trophy },
    { label: "ELENCO", icon: Users },
    { label: "ESTATÍSTICAS", icon: BarChart3 },
    { label: "CONFIGURAÇÕES", icon: Settings },
  ];

  return (
    <main className="fc26-page">
      <div className="fc26-players" aria-hidden="true">
        <img className="fc26-player fc26-player-neymar" src="https://commons.wikimedia.org/wiki/Special:Redirect/file/Neymar_cropped_image.png" alt="" />
        <img className="fc26-player fc26-player-ronaldo" src="https://commons.wikimedia.org/wiki/Special:Redirect/file/C_ronaldo_cropped.png" alt="" />
        <img className="fc26-player fc26-player-messi" src="https://commons.wikimedia.org/wiki/Special:Redirect/file/Lionel_Messi_2018.png" alt="" />
      </div>

      <div className="fc26-overlay" aria-hidden="true" />
      <div className="fc26-grid" />
      <div className="fc26-glow fc26-glow-one" />
      <div className="fc26-glow fc26-glow-two" />

      <header className="fc26-header">
        <div className="fc26-brand">
          <span className="fc26-brand-mark">26</span>
          <div><strong>FC</strong><span>ULTIMATE MENU</span></div>
        </div>
        <div className="fc26-status"><span className="fc26-dot" />{screen === "career" ? "MODO CARREIRA" : "MENU PRINCIPAL"}</div>
      </header>

      <section className="fc26-hero">
        {screen === "menu" ? (
          <>
            <div className="fc26-kicker">THE WORLD'S GAME</div>
            <h1>FC <span>26</span></h1>
            <p>O seu futebol começa aqui.</p>
            <nav className="fc26-menu" aria-label="Menu principal">
              {items.map(({ label, icon: Icon, active }) => (
                <button key={label} type="button" className={`fc26-menu-item ${active ? "is-active" : ""}`} onClick={() => label === "JOGAR" && setScreen("career")}>
                  <span className="fc26-menu-icon"><Icon size={20} strokeWidth={2.4} /></span>
                  <span>{label}</span>
                  <ArrowRight className="fc26-arrow" size={19} />
                </button>
              ))}
            </nav>
          </>
        ) : (
          <>
            <button type="button" className="fc26-back" onClick={() => setScreen("menu")}><ArrowLeft size={17} /> VOLTAR AO MENU</button>
            <div className="fc26-kicker">MODO CARREIRA</div>
            <h2 className="fc26-career-title">MINHA <span>CARREIRA</span></h2>
            <p className="fc26-career-subtitle">Crie a carreira do seu atleta e acompanhe a evolução dele no FC 26.</p>

            {!careerSaved ? (
              <form className="fc26-career-form" onSubmit={(event) => { event.preventDefault(); setCareerSaved(true); }}>
                <label>Nome da carreira<input value={careerName} onChange={(event) => setCareerName(event.target.value)} placeholder="Ex.: Minha carreira FC 26" required /></label>
                <label>Nome do atleta<input value={athleteName} onChange={(event) => setAthleteName(event.target.value)} placeholder="Ex.: Arthur Alves" required /></label>
                <div className="fc26-form-row">
                  <label>Posição<input value={position} onChange={(event) => setPosition(event.target.value)} placeholder="Ex.: ATA" /></label>
                  <label>Clube<input value={club} onChange={(event) => setClub(event.target.value)} placeholder="Ex.: Real Madrid" /></label>
                </div>
                <button className="fc26-create-career" type="submit"><Plus size={19} /> CRIAR CARREIRA</button>
              </form>
            ) : (
              <div className="fc26-career-card">
                <div className="fc26-career-card-icon"><Trophy size={25} /></div>
                <div><span className="fc26-card-label">CARREIRA CRIADA</span><h3>{careerName}</h3><p>{athleteName}{position ? ` • ${position}` : ""}{club ? ` • ${club}` : ""}</p></div>
                <button type="button" className="fc26-open-career">ABRIR <ArrowRight size={17} /></button>
              </div>
            )}
          </>
        )}
      </section>

      <footer className="fc26-footer">
        <span>FC 26</span><span>•</span><span>MENU TEMÁTICO</span>
        <span className="fc26-footer-right">PRESS ENTER TO SELECT</span>
      </footer>
    </main>
  );
}
