function App() {
  return (
    <main className="page-shell">
      <header className="site-header">
        <a className="wordmark" href="/" aria-label="OperaConnect, inicio">
          <span className="wordmark-mark">O</span>
          <span>opera<span className="wordmark-light">connect</span></span>
        </a>

        <nav className="main-nav" aria-label="Navegación principal">
          <a href="#como-funciona">Cómo funciona</a>
          <a href="#comunidad">La comunidad</a>
          <a href="#oportunidades">Oportunidades</a>
        </nav>

        <div className="header-actions">
          <a className="login-link" href="#ingresar">Iniciar sesión</a>
          <a className="button button-dark button-small" href="#unirme">Crear cuenta <span aria-hidden="true">↗</span></a>
        </div>
      </header>

      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-line" /> EL MUNDO DE LA ÓPERA, MÁS CERCA</p>
          <h1>Tu talento merece <em>un escenario</em> sin fronteras.</h1>
          <p className="hero-description">
            Conectamos voces extraordinarias con teatros, compañías y oportunidades en todo el mundo.
            El próximo acto de tu carrera empieza acá.
          </p>
          <div className="hero-actions">
            <a className="button button-dark" href="#unirme">Encontrá tu oportunidad <span aria-hidden="true">↗</span></a>
            <a className="text-link" href="#como-funciona">Conocé cómo funciona <span aria-hidden="true">→</span></a>
          </div>
          <div className="hero-note">
            <div className="avatar-stack" aria-hidden="true"><span>LM</span><span>AS</span><span>FC</span></div>
            <p><strong>Una comunidad sin fronteras</strong><br />para quienes viven la música.</p>
          </div>
        </div>

        <div className="hero-art" aria-label="Escenario de ópera iluminado">
          <div className="art-frame">
            <div className="art-image" />
            <div className="art-caption">
              <span>01 / EL ESCENARIO ES TUYO</span>
              <span className="caption-rule" />
              <span>DESDE CUALQUIER LUGAR</span>
            </div>
          </div>
          <div className="floating-note">
            <span className="note-icon">✳</span>
            <span><strong>Una voz.</strong><br />Infinitas posibilidades.</span>
          </div>
          <span className="art-index">OPERA · CONNECT · 2026</span>
        </div>
      </section>

      <section className="trust-strip" id="comunidad">
        <p>UN PUNTO DE ENCUENTRO PARA TODA LA COMUNIDAD LÍRICA</p>
        <div><span>CANTANTES</span><i /> <span>TEATROS</span><i /> <span>COMPAÑÍAS</span><i /> <span>CASTING</span></div>
      </section>
    </main>
  )
}

export default App
