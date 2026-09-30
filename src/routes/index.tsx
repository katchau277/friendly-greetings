import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowRight, Trophy, Users, BarChart3, Settings, Play, Plus, ArrowLeft, Upload, Shield } from "lucide-react";

export const Route = createFileRoute("/")({ component: Index });

const STORAGE_KEY = "fc26-career-data";

type SavedCareerData = {
  athleteName: string; position: string; clubs: string; country: string; preferredFoot: string;
  careerSaved: boolean; playerPhoto: string; titles: string; careerClubs: string; seasons: string;
  games: string; goals: string; assists: string; cleanSheets: string; sound: boolean; animations: boolean; compactMode: boolean;
};

function getSavedData(): Partial<SavedCareerData> {
  if (typeof window === "undefined") return {};
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}"); } catch { return {}; }
}

function Index() {
  const saved = getSavedData();
  const [screen, setScreen] = useState<"menu" | "career" | "dashboard" | "roster" | "stats" | "settings">("menu");
  const [athleteName, setAthleteName] = useState(saved.athleteName || "");
  const [position, setPosition] = useState(saved.position || "");
  const [clubs, setClubs] = useState(saved.clubs || "");
  const [country, setCountry] = useState(saved.country || "");
  const [preferredFoot, setPreferredFoot] = useState(saved.preferredFoot || "");
  const [careerSaved, setCareerSaved] = useState(saved.careerSaved || false);
  const [playerPhoto, setPlayerPhoto] = useState(saved.playerPhoto || "");
  const [titles, setTitles] = useState(saved.titles || "");
  const [careerClubs, setCareerClubs] = useState(saved.careerClubs || saved.clubs || "");
  const [seasons, setSeasons] = useState(saved.seasons || "");
  const [games, setGames] = useState(saved.games || "");
  const [goals, setGoals] = useState(saved.goals || "");
  const [assists, setAssists] = useState(saved.assists || "");
  const [cleanSheets, setCleanSheets] = useState(saved.cleanSheets || "");
  const [sound, setSound] = useState(saved.sound ?? true);
  const [animations, setAnimations] = useState(saved.animations ?? true);
  const [compactMode, setCompactMode] = useState(saved.compactMode ?? false);

  useEffect(() => {
    const data: SavedCareerData = { athleteName, position, clubs, country, preferredFoot, careerSaved, playerPhoto, titles, careerClubs, seasons, games, goals, assists, cleanSheets, sound, animations, compactMode };
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(data)); } catch {}
  }, [athleteName, position, clubs, country, preferredFoot, careerSaved, playerPhoto, titles, careerClubs, seasons, games, goals, assists, cleanSheets, sound, animations, compactMode]);

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
        ) : screen === "dashboard" ? (
          <>
            <img className="fc26-player fc26-player-yamal" src="https://commons.wikimedia.org/wiki/Special:Redirect/file/Spain_World_Cup_winners_Argentina_v_Spain_19_July_2026-341_(Rodri).jpg" alt="" />
            <img className="fc26-player fc26-player-vini" src="https://commons.wikimedia.org/wiki/Special:Redirect/file/Kylian_Mbappé_with_the_2018_Soccer_World_Cup_trophy.jpg" alt="" />
            <img className="fc26-player fc26-player-dembele" src="https://commons.wikimedia.org/wiki/Special:Redirect/file/France_champion_of_the_Football_World_Cup_Russia_2018_(Mabppé,_Griezmann,_Nabil_Fekir,_Olivier_Giroud)).jpg" alt="" />
          </>
        ) : null}
      </div>
      <div className="fc26-overlay" aria-hidden="true" />
      <div className="fc26-grid" />
      <div className="fc26-glow fc26-glow-one" />
      <div className="fc26-glow fc26-glow-two" />

      <header className="fc26-header">
        <div className="fc26-brand"><span className="fc26-brand-mark">26</span><div><strong>FC</strong><span>ULTIMATE MENU</span><small className="fc26-creator">FLAVIO</small></div></div>
        <div className="fc26-status"><span className="fc26-dot" />{screen === "career" ? "MODO ATLETA" : screen === "dashboard" ? "PERFIL DO JOGADOR" : screen === "roster" ? "ELENCO" : screen === "stats" ? "ESTATÍSTICAS" : screen === "settings" ? "CONFIGURAÇÕES" : "MENU PRINCIPAL"}</div>
      </header>

      

      <section className="fc26-hero">
        {screen === "menu" ? (
          <>
            <div className="fc26-kicker">THE WORLD'S GAME</div>
            <h1>FC <span>26</span></h1>
            <p>O seu futebol começa aqui.</p>
            <nav className="fc26-menu" aria-label="Menu principal">
              {items.map(({ label, icon: Icon, active }) => (
                <button key={label} type="button" className={"fc26-menu-item " + (active ? "is-active" : "")} onClick={() => { if (label === "JOGAR" || label === "CARREIRA") setScreen("career"); if (label === "ELENCO") setScreen("roster"); if (label === "ESTATÍSTICAS") setScreen("stats"); if (label === "CONFIGURAÇÕES") setScreen("settings"); }}>
                  <span className="fc26-menu-icon"><Icon size={20} strokeWidth={2.4} /></span><span>{label}</span><ArrowRight className="fc26-arrow" size={19} />
                </button>
              ))}
            </nav>
          </>
        ) : screen === "career" ? (
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
        ) : null}
      </section>

      {screen === "roster" && (
        <section className="fc26-panel-page">
          <button type="button" className="fc26-back" onClick={() => setScreen("menu")}><ArrowLeft size={17} /> VOLTAR AO MENU</button>
          <div className="fc26-panel-heading"><span className="fc26-card-label">SQUAD / 03</span><h2>MEU <span>ELENCO</span></h2><p>Organize os jogadores da sua carreira e acompanhe o elenco.</p></div>
          <div className="fc26-roster-grid">
            <div className="fc26-roster-card fc26-roster-main"><div className="fc26-roster-number">01</div><div><span>JOGADOR PRINCIPAL</span><strong>{athleteName || "NENHUM JOGADOR CRIADO"}</strong><small>{position || "POSIÇÃO A DEFINIR"} • {country || "PAÍS A DEFINIR"}</small></div><button type="button" onClick={() => setScreen(careerSaved ? "dashboard" : "career")}>{careerSaved ? "ABRIR PERFIL" : "CRIAR JOGADOR"} <ArrowRight size={16}/></button></div>
            <div className="fc26-roster-card"><Users size={24}/><div><span>ELENCO ATUAL</span><strong>{athleteName ? "1 JOGADOR" : "0 JOGADORES"}</strong><small>Adicione mais jogadores em futuras carreiras</small></div></div>
            <div className="fc26-roster-card"><Shield size={24}/><div><span>CLUBE</span><strong>{careerClubs || clubs || "NÃO DEFINIDO"}</strong><small>Clube atual da carreira</small></div></div>
            <div className="fc26-roster-card"><Trophy size={24}/><div><span>TÍTULOS</span><strong>{titles || "NENHUM REGISTRADO"}</strong><small>Conquistas cadastradas no perfil</small></div></div>
          </div>
        </section>
      )}

      {screen === "stats" && (
        <section className="fc26-panel-page">
          <button type="button" className="fc26-back" onClick={() => setScreen("menu")}><ArrowLeft size={17} /> VOLTAR AO MENU</button>
          <div className="fc26-panel-heading"><span className="fc26-card-label">PLAYER STATS / 04</span><h2>ESTATÍSTICAS <span>DA CARREIRA</span></h2><p>Registre jogos, gols, assistências e números defensivos do seu jogador.</p></div>
          <div className="fc26-stats-grid"><label>Jogos<input type="number" min="0" value={games} onChange={(e) => setGames(e.target.value)} placeholder="0" /></label><label>Gols<input type="number" min="0" value={goals} onChange={(e) => setGoals(e.target.value)} placeholder="0" /></label><label>Assistências<input type="number" min="0" value={assists} onChange={(e) => setAssists(e.target.value)} placeholder="0" /></label><label>Clean sheets<input type="number" min="0" value={cleanSheets} onChange={(e) => setCleanSheets(e.target.value)} placeholder="0" /></label></div>
          <div className="fc26-stat-cards"><div><span>JOGADOR</span><strong>{athleteName || "A DEFINIR"}</strong></div><div><span>GOLS/JOGO</span><strong>{games && Number(games) > 0 ? (Number(goals || 0) / Number(games)).toFixed(2) : "0.00"}</strong></div><div><span>G+A</span><strong>{Number(goals || 0) + Number(assists || 0)}</strong></div><div><span>TEMPORADAS</span><strong>{seasons || "0"}</strong></div></div>
          <button type="button" className="fc26-save-history" onClick={() => setScreen("dashboard")}>SALVAR E VOLTAR AO PERFIL <ArrowRight size={17}/></button>
        </section>
      )}

      {screen === "settings" && (
        <section className="fc26-panel-page">
          <button type="button" className="fc26-back" onClick={() => setScreen("menu")}><ArrowLeft size={17} /> VOLTAR AO MENU</button>
          <div className="fc26-panel-heading"><span className="fc26-card-label">SYSTEM / 05</span><h2>CONFIGURA<span>ÇÕES</span></h2><p>Personalize a experiência do seu menu FC 26.</p></div>
          <div className="fc26-settings-list">
            <button type="button" className="fc26-setting-row" onClick={() => setSound(!sound)}><div><strong>SOM DA INTERFACE</strong><small>Ativa ou desativa sons da navegação</small></div><span className={sound ? "is-on" : ""}>{sound ? "ATIVO" : "OFF"}</span></button>
            <button type="button" className="fc26-setting-row" onClick={() => setAnimations(!animations)}><div><strong>ANIMAÇÕES</strong><small>Controla transições e efeitos visuais</small></div><span className={animations ? "is-on" : ""}>{animations ? "ATIVO" : "OFF"}</span></button>
            <button type="button" className="fc26-setting-row" onClick={() => setCompactMode(!compactMode)}><div><strong>MODO COMPACTO</strong><small>Reduz espaços para facilitar o uso em telas menores</small></div><span className={compactMode ? "is-on" : ""}>{compactMode ? "ATIVO" : "OFF"}</span></button>
          </div>
          <div className="fc26-settings-note"><Settings size={20}/><div><strong>CONFIGURAÇÃO LOCAL</strong><small>Estas preferências ficam ativas enquanto a página estiver aberta.</small></div></div>
        </section>
      )}

      {screen === "dashboard" && (
        <section className="fc26-dashboard">
          <button type="button" className="fc26-back" onClick={() => setScreen("career")}><ArrowLeft size={17} /> VOLTAR PARA CARREIRA</button>
          <div className="fc26-dashboard-heading"><div><span className="fc26-card-label">PLAYER PROFILE / 02</span><h2>MINHA <span>CARREIRA</span></h2><p>Registre a história completa do seu jogador.</p></div></div>
          <div className="fc26-dashboard-grid">
            <div className="fc26-photo-panel"><div className="fc26-photo-frame">{playerPhoto ? <img src={playerPhoto} alt={athleteName} /> : <div className="fc26-photo-empty"><Upload size={30}/><strong>FOTO DO JOGADOR</strong><small>Adicione uma imagem da sua carreira</small></div>}</div><label className="fc26-upload-button"><Upload size={17}/> {playerPhoto ? "TROCAR FOTO" : "ADICIONAR FOTO"}<input type="file" accept="image/*" onChange={(event) => { const file = event.target.files?.[0]; if (file) { const reader = new FileReader(); reader.onload = () => setPlayerPhoto(String(reader.result)); reader.readAsDataURL(file); } }} /></label></div>
            <div className="fc26-history-panel"><div className="fc26-history-title"><span>02</span><div><strong>HISTÓRICO DO JOGADOR</strong><small>TÍTULOS • CLUBES • TEMPORADAS</small></div></div><label>Clubes da carreira<input value={careerClubs} onChange={(event) => setCareerClubs(event.target.value)} placeholder="Ex.: Santos, Real Madrid, Manchester City" /></label><label>Títulos conquistados<input value={titles} onChange={(event) => setTitles(event.target.value)} placeholder="Ex.: 2x Liga dos Campeões, 1x Mundial" /></label><label>Total de temporadas<input type="number" min="0" value={seasons} onChange={(event) => setSeasons(event.target.value)} placeholder="Ex.: 8" /></label><button type="button" className="fc26-save-history" onClick={() => { localStorage.setItem(STORAGE_KEY, JSON.stringify({ athleteName, position, clubs, country, preferredFoot, careerSaved, playerPhoto, titles, careerClubs, seasons, games, goals, assists, cleanSheets, sound, animations, compactMode })); }}>SALVAR HISTÓRICO <ArrowRight size={17}/></button></div>
          </div>
          <div className="fc26-player-summary"><div><span>ATLETA</span><strong>{athleteName}</strong></div><div><span>PAÍS</span><strong>{country}</strong></div><div><span>POSIÇÕES</span><strong>{position || "A DEFINIR"}</strong></div><div><span>PERNA</span><strong>{preferredFoot}</strong></div></div>
        </section>
      )}

      <footer className="fc26-footer"><span>FC 26</span><span>•</span><span>PLAYER CAREER</span><span className="fc26-footer-right">PRESS ENTER TO SELECT</span></footer>
    </main>
  );
}
