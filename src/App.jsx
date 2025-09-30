import './App.css'

function App() {
  return (
    <>
      <header className="site-header">
        <div className="avatar" aria-hidden="true">🧑‍💻</div>
        <h1 className="name">你的名字</h1>
        <p className="tagline">前端工程師｜熱愛 Web 與使用者體驗</p>
        <nav className="nav">
          <a href="#about">關於我</a>
          <a href="#projects">作品集</a>
          <a href="#contact">聯絡</a>
        </nav>
      </header>

      <main className="container">
        <section id="about" className="section">
          <h2>關於我</h2>
          <p>
            我是位於臺灣的前端工程師，專注於 React、生態系工具（Vite、TypeScript）、
            與現代化 CSS。喜歡把複雜問題拆解成清楚、可維護的介面與元件。
          </p>
        </section>

        <section id="projects" className="section">
          <h2>作品集</h2>
          <ul className="projects">
            <li>
              <h3>專案 A</h3>
              <p>以 React 打造的單頁應用，具備深色模式與響應式設計。</p>
              <a href="https://example.com" target="_blank" rel="noreferrer">線上預覽</a>
            </li>
            <li>
              <h3>專案 B</h3>
              <p>整合第三方 API 的資料可視化儀表板。</p>
              <a href="https://example.com" target="_blank" rel="noreferrer">線上預覽</a>
            </li>
          </ul>
        </section>

        <section id="contact" className="section">
          <h2>聯絡</h2>
          <ul className="contact">
            <li><a href="mailto:you@example.com">you@example.com</a></li>
            <li><a href="https://github.com/yourname" target="_blank" rel="noreferrer">GitHub</a></li>
            <li><a href="https://www.linkedin.com/in/yourname/" target="_blank" rel="noreferrer">LinkedIn</a></li>
          </ul>
        </section>
      </main>

      <footer className="site-footer">
        <small>© {new Date().getFullYear()} 你的名字. 保留所有權利。</small>
      </footer>
    </>
  )
}

export default App
