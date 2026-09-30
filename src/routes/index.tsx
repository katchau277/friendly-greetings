import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Trophy, Users, BarChart3, Settings, Play, Plus, ArrowLeft, Upload, Medal, Shield } from "lucide-react";

export const Route = createFileRoute("/")({ component: Index });

function Index() {
  const [screen, setScreen] = useState<"menu" | "career" | "dashboard">("menu");
  const [athleteName, setAthleteName] = useState("");
  const [position, setPosition] = useState("");
  const [clubs, setClubs] = useState("");
  const [country, setCountry] = useState("");
  const [preferredFoot, setPreferredFoot] = useState("");
  const [careerSaved, setCareerSaved] = useState(false);
  const [playerPhoto, setPlayerPhoto] = useState("");
  const [titles, setTitles] = useState("");
  const [careerClubs, setCareerClubs] = useState(clubs);
  const [seasons, setSeasons] = useState("");

  const items = [
    { label: "JOGAR", icon: Play, active: true },
    { label: "CARREIRA", icon: Trophy },
    { label: "ELENCO", icon: Users },
    { label: "ESTATÍSTICAS", icon: BarChart3 },
    { label: "CONFIGURAÇÕES", icon: Settings },
  ];

  return (
    <main className="fc26-page">
      <div className={"fc26-players " + (screen === "career" ? "fc26-career-players" : screen === "dashboard" ? "fc26-dashboard-players" : "fc26-menu-players")} aria-hidden="true">
        {screen === "menu" ? (
          <>
            <img className="fc26-player fc26-player-neymar" src="https://commons.wikimedia.org/wiki/Special:Redirect/file/Neymar_cropped_image.png" alt="" />
            <img className="fc26-player fc26-player-ronaldo" src="https://commons.wikimedia.org/wiki/Special:Redirect/file/C_ronaldo_cropped.png" alt="" />
            <img className="fc26-player fc26-player-messi" src="https://commons.wikimedia.org/wiki/Special:Redirect/file/Lionel_Messi_2018.png" alt="" />
          </>
        ) : screen === "career" ? (
          <>
            <img className="fc26-player fc26-player-yamal" src="https://commons.wikimedia.org/wiki/Special:Redirect/file/Lamine_Yamal_in_2025.jpg" alt="" />
            <img className="fc26-player fc26-player-vini" src="https://commons.wikimedia.org/wiki/Special:Redirect/file/Vinicius_Junior_(2025).jpg" alt="" />
            <img className="fc26-player fc26-player-dembele" src="https://commons.wikimedia.org/wiki/Special:Redirect/file/Ousmane_Dembele_France_v_Morocco_9_July_2026-185.jpg" alt="" />
          </>
        ) : (
          <>
            <img className="fc26-player fc26-player-yamal" src="https://commons.wikimedia.org/wiki/Special:Redirect/file/Spain_World_Cup_winners_Argentina_v_Spain_19_July_2026-341_(Rodri).jpg" alt="" />
            <img className="fc26-player fc26-player-vini" src="https://commons.wikimedia.org/wiki/Special:Redirect/file/Kylian_Mbappé_with_the_2018_Soccer_World_Cup_trophy.jpg" alt="" />
            <img className="fc26-player fc26-player-dembele" src="https://commons.wikimedia.org/wiki/Special:Redirect/file/France_champion_of_the_Football_World_Cup_Russia_2018_(Mabppé,_Griezmann,_Nabil_Fekir,_Olivier_Giroud)).jpg" alt="" />
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
                  <div className="fc26-career-card-actions">
                    <button type="button" className="fc26-edit-career" onClick={() => setCareerSaved(false)}><ArrowLeft size={16} /> EDITAR DADOS</button>
                    <button type="button" className="fc26-open-career" onClick={() => { setCareerClubs(clubs); setScreen("dashboard"); }}>ENTRAR <ArrowRight size={17} /></button>
                  </div>
                </div>
              )}
            </div>
          </>
        )}
      </section>

      {screen === "dashboard" && (
        <section className="fc26-dashboard">
          <button type="button" className="fc26-back" onClick={() => setScreen("career")}><ArrowLeft size={17} /> VOLTAR PARA CARREIRA</button>
          <div className="fc26-dashboard-heading">
            <div><span className="fc26-card-label">PLAYER PROFILE / 02</span><h2>MINHA <span>CARREIRA</span></h2><p>Registre a história completa do seu jogador.</p></div>
          </div>

          <div className="fc26-dashboard-grid">
            <div className="fc26-photo-panel">
              <div className="fc26-photo-frame">
                {playerPhoto ? <img src={playerPhoto} alt={athleteName} /> : <div className="fc26-photo-empty"><Upload size={30}/><strong>FOTO DO JOGADOR</strong><small>Adicione uma imagem da sua carreira</small></div>}
              </div>
              <label className="fc26-upload-button"><Upload size={17}/> {playerPhoto ? "TROCAR FOTO" : "ADICIONAR FOTO"}<input type="file" accept="image/*" onChange={(event) => { const file = event.target.files?.[0]; if (file) setPlayerPhoto(URL.createObjectURL(file)); }} /></label>
            </div>

            <div className="fc26-history-panel">
              <div className="fc26-history-title"><span>02</span><div><strong>HISTÓRICO DO JOGADOR</strong><small>TÍTULOS • CLUBES • TEMPORADAS</small></div></div>
              <label>Clubes da carreira<input value={careerClubs} onChange={(event) => setCareerClubs(event.target.value)} placeholder="Ex.: Santos, Real Madrid, Manchester City" /></label>
              <label>Títulos conquistados<input value={titles} onChange={(event) => setTitles(event.target.value)} placeholder="Ex.: 2x Liga dos Campeões, 1x Mundial" /></label>
              <label>Total de temporadas<input type="number" min="0" value={seasons} onChange={(event) => setSeasons(event.target.value)} placeholder="Ex.: 8" /></label>
              <button type="button" className="fc26-save-history" onClick={() => {}}>SALVAR HISTÓRICO <ArrowRight size={17}/></button>
            </div>
          </div>

          <div className="fc26-player-summary">
            <div><span>ATLETA</span><strong>{athleteName}</strong></div>
            <div><span>PAÍS</span><strong>{country}</strong></div>
            <div><span>POSIÇÕES</span><strong>{position || "A DEFINIR"}</strong></div>
            <div><span>PERNA</span><strong>{preferredFoot}</strong></div>
          </div>
        </section>
      )}

      <footer className="fc26-footer"><span>FC 26</span><span>•</span><span>PLAYER CAREER</span><span className="fc26-footer-right">PRESS ENTER TO SELECT</span></footer>
    </main>
  );
}
