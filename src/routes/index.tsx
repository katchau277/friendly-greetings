import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Trophy, Users, BarChart3, Settings, Play, Plus, ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/")({ component: Index });

function Index() {
  const [screen, setScreen] = useState<"menu" | "career">("menu");
  const [athleteName, setAthleteName] = useState("");
  const [position, setPosition] = useState("");
  const [clubs, setClubs] = useState("");
  const [country, setCountry] = useState("");
  const [preferredFoot, setPreferredFoot] = useState("");
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
      <div className={"fc26-players " + (screen === "career" ? "fc26-career-players" : "fc26-menu-players")} aria-hidden="true">
        {screen === "menu" ? (
          <>
            <img className="fc26-player fc26-player-neymar" src="https://commons.wikimedia.org/wiki/Special:Redirect/file/Neymar_cropped_image.png" alt="" />
            <img className="fc26-player fc26-player-ronaldo" src="https://commons.wikimedia.org/wiki/Special:Redirect/file/C_ronaldo_cropped.png" alt="" />
            <img className="fc26-player fc26-player-messi" src="https://commons.wikimedia.org/wiki/Special:Redirect/file/Lionel_Messi_2018.png" alt="" />
          </>
        ) : (
          <>
            <img className="fc26-player fc26-player-yamal" src="https://commons.wikimedia.org/wiki/Special:Redirect/file/Lamine_Yamal_in_2025.jpg" alt="" />
            <img className="fc26-player fc26-player-vini" src="https://commons.wikimedia.org/wiki/Special:Redirect/file/Vinicius_Junior_(2025).jpg" alt="" />
            <img className="fc26-player fc26-player-dembele" src="https://commons.wikimedia.org/wiki/Special:Redirect/file/Ousmane_Dembele_France_v_Morocco_9_July_2026-185.jpg" alt="" />
          </>
        )}
      </div>
      <div className="fc26-overlay" aria-hidden="true" />
      <div className="fc26-grid" />
      <div className="fc26-glow fc26-glow-one" />
      <div className="fc26-glow fc26-glow-two" />

      <header className="fc26-header">
        <div className="fc26-brand"><span className="fc26-brand-mark">26</span><div><strong>FC</strong><span>ULTIMATE MENU</span></div></div>
        <div className="fc26-status"><span className="fc26-dot" />{screen === "career" ? "MODO ATLETA" : "MENU PRINCIPAL"}</div>
      </header>

      <section className="fc26-hero">
        {screen === "menu" ? (
          <>
            <div className="fc26-kicker">THE WORLD'S GAME</div>
            <h1>FC <span>26</span></h1>
            <p>O seu futebol começa aqui.</p>
            <nav className="fc26-menu" aria-label="Menu principal">
              {items.map(({ label, icon: Icon, active }) => (
                <button key={label} type="button" className={"fc26-menu-item " + (active ? "is-active" : "")} onClick={() => label === "JOGAR" && setScreen("career")}>
                  <span className="fc26-menu-icon"><Icon size={20} strokeWidth={2.4} /></span><span>{label}</span><ArrowRight className="fc26-arrow" size={19} />
                </button>
              ))}
            </nav>
          </>
        ) : (
          <>
            <button type="button" className="fc26-back" onClick={() => setScreen("menu")}><ArrowLeft size={17} /> VOLTAR AO MENU</button>
            <div className="fc26-kicker">PLAYER CAREER / 01</div>

            <div className="fc26-career-layout">
              <div className="fc26-career-intro">
                <div className="fc26-player-badge"><span>PLAYER</span><strong>01</strong></div>
                <div>
                  <span className="fc26-card-label">CREATE YOUR PLAYER</span>
                  <h2 className="fc26-career-title">MODO <span>ATLETA</span></h2>
                  <p className="fc26-career-subtitle">Monte seu jogador, escolha onde começar e entre em campo.</p>
                </div>
              </div>

              {!careerSaved ? (
                <form className="fc26-career-form" onSubmit={(event) => { event.preventDefault(); setCareerSaved(true); }}>
                  <div className="fc26-form-heading"><span>01</span><div><strong>DADOS DO ATLETA</strong><small>PERSONALIZE O SEU JOGADOR</small></div></div>
                  <label>Nome do atleta<input value={athleteName} onChange={(event) => setAthleteName(event.target.value)} placeholder="Ex.: Arthur Alves" required /></label>
                  <div className="fc26-form-row">
                    <label>Posições<input value={position} onChange={(event) => setPosition(event.target.value)} placeholder="Ex.: ATA / PD / PE" /></label>
                    <label>Clubes<input value={clubs} onChange={(event) => setClubs(event.target.value)} placeholder="Ex.: Real Madrid" /></label>
                  </div>
                  <div className="fc26-form-row">
                    <label>País<select value={country} onChange={(event) => setCountry(event.target.value)} required><option value="">Selecione o país</option><option value="🇧🇷 Brasil">🇧🇷 Brasil</option><option value="🇵🇹 Portugal">🇵🇹 Portugal</option><option value="🇦🇷 Argentina">🇦🇷 Argentina</option><option value="🇪🇸 Espanha">🇪🇸 Espanha</option><option value="🇫🇷 França">🇫🇷 França</option><option value="🇬🇧 Inglaterra">🇬🇧 Inglaterra</option><option value="🇩🇪 Alemanha">🇩🇪 Alemanha</option><option value="🇮🇹 Itália">🇮🇹 Itália</option><option value="🇺🇸 Estados Unidos">🇺🇸 Estados Unidos</option><option value="🇳🇱 Holanda">🇳🇱 Holanda</option><option value="🇧🇪 Bélgica">🇧🇪 Bélgica</option><option value="🇺🇾 Uruguai">🇺🇾 Uruguai</option></select></label>
                    <label>Perna boa<select value={preferredFoot} onChange={(event) => setPreferredFoot(event.target.value)} required><option value="">Selecione</option><option value="Direita">Direita</option><option value="Esquerda">Esquerda</option><option value="Ambidestro">Ambidestro</option></select></label>
                  </div>
                  <button className="fc26-create-career" type="submit"><Plus size={19} /> COMEÇAR CARREIRA</button>
                </form>
              ) : (
                <div className="fc26-career-card">
                  <div className="fc26-career-card-icon"><Trophy size={25} /></div>
                  <div><span className="fc26-card-label">ATLETA CRIADO</span><h3>{athleteName}</h3><p>{position || "POSIÇÕES A DEFINIR"}{clubs ? " • " + clubs : ""} • <span className="fc26-country-badge">{country}</span> • {preferredFoot}</p></div>
                  <button type="button" className="fc26-open-career">ENTRAR <ArrowRight size={17} /></button>
                </div>
              )}
            </div>
          </>
        )}
      </section>

      <footer className="fc26-footer"><span>FC 26</span><span>•</span><span>PLAYER CAREER</span><span className="fc26-footer-right">PRESS ENTER TO SELECT</span></footer>
    </main>
  );
}
