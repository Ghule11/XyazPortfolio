import { NavLink, Route, Routes } from 'react-router-dom'
import './App.css'

const featuredProjects = [
  {
    title: '[PROJECT NAME 01]',
    type: 'Stylized city hub for a Roblox RPG',
    summary:
      'Use this card to explain the world theme, what was built, and where the final scene helped the game stand out.',
    deliverables: ['[ADD COVER IMAGE]', '[ADD TIMELINE]', '[ADD TEAM / CLIENT]'],
  },
  {
    title: '[PROJECT NAME 02]',
    type: 'Sci-fi prop set for a Roblox simulator',
    summary:
      'Replace this with a short case study about the asset style, performance target, and how the pack supported gameplay.',
    deliverables: ['[ADD PROP SHEET]', '[ADD POLYCOUNT NOTE]', '[ADD TOOLCHAIN]'],
  },
  {
    title: '[PROJECT NAME 03]',
    type: 'Fantasy interior kit for a showcase world',
    summary:
      'Use this space for a concise challenge and result summary with a final render or in-engine screenshot.',
    deliverables: ['[ADD FINAL RENDER]', '[ADD ROLE]', '[ADD RELEASE DATE]'],
  },
]

const homeProjects = featuredProjects.slice(0, 2)

const services = [
  'Environment kits and modular set pieces',
  'Props, furniture, weapons, and scene dressing',
  'Stylized Roblox-ready optimization and cleanup',
  'Blockout-to-final workflow for game production',
]

const highlights = [
  { value: '[00+]', label: 'Completed assets or scenes' },
  { value: '[00]', label: 'Active game collaborations' },
  { value: '[X years]', label: 'Building for Roblox worlds' },
]

const quickLinks = [
  { to: '/work', label: 'Work' },
  { to: '/services', label: 'Services' },
]

function SectionIntro({ eyebrow, title, text }) {
  return (
    <div className="section-intro">
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      <p className="section-copy">{text}</p>
    </div>
  )
}

function HomePage() {
  return (
    <section className="route-page hero-page">
      <div className="hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">Available for commissions and studio work</p>
          <h1>Stylized Roblox 3D work with a cleaner, production-first pipeline.</h1>
          <p className="section-copy">
            Replace this intro with a short pitch about your friend, the game types
            he works on, and the look he is known for delivering.
          </p>

          <div className="cta-row">
            <a className="primary-button" href="mailto:[EMAIL ADDRESS]">
              Book a project
            </a>
            <NavLink className="secondary-button" to="/work">
              View portfolio
            </NavLink>
          </div>

          <div className="stat-grid">
            {highlights.map((item) => (
              <article className="panel stat-card" key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </article>
            ))}
          </div>
        </div>

        <aside className="hero-stack" aria-label="Profile preview placeholders">
          <div className="panel showcase-card">
            <div className="image-placeholder large">[ADD HERO RENDER OR PHOTO]</div>
            <div className="showcase-meta">
              <p>[DISPLAY NAME]</p>
              <span>Roblox 3D Modeler</span>
            </div>
          </div>

          <div className="hero-mini-grid">
            <div className="panel compact-card">
              <span className="panel-label">Current focus</span>
              <strong>[STYLIZED PROPS / ENVIRONMENTS / VEHICLES]</strong>
            </div>
            <div className="panel compact-card">
              <span className="panel-label">Location</span>
              <strong>[CITY / COUNTRY]</strong>
            </div>
            <div className="panel compact-card">
              <span className="panel-label">Contact</span>
              <strong>[EMAIL / DISCORD]</strong>
            </div>
          </div>
        </aside>
      </div>

      <div className="home-section-header">
        <div>
          <p className="eyebrow">Project preview</p>
          <h2>A couple of projects up front, with the full portfolio on its own page.</h2>
        </div>
        <NavLink className="secondary-button" to="/work">
          See all projects
        </NavLink>
      </div>

      <div className="project-grid home-project-grid">
        {homeProjects.map((project) => (
          <article className="panel project-card" key={project.title}>
            <div className="image-placeholder project-image">[ADD PROJECT IMAGE]</div>
            <p className="project-type">{project.type}</p>
            <h2>{project.title}</h2>
            <p className="section-copy">{project.summary}</p>
            <ul className="tag-row" aria-label={`${project.title} details`}>
              {project.deliverables.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}

function WorkPage() {
  return (
    <section className="route-page">
      <SectionIntro
        eyebrow="Selected work"
        title="Separate project pages can come later. This route sets up the portfolio section properly."
        text="Each navbar item now opens a real route instead of jumping down the page. This page can grow into individual case studies when you have final images and real project copy."
      />

      <div className="project-grid">
        {featuredProjects.map((project) => (
          <article className="panel project-card" key={project.title}>
            <div className="image-placeholder project-image">[ADD PROJECT IMAGE]</div>
            <p className="project-type">{project.type}</p>
            <h2>{project.title}</h2>
            <p className="section-copy">{project.summary}</p>
            <ul className="tag-row" aria-label={`${project.title} details`}>
              {project.deliverables.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}

function ServicesPage() {
  return (
    <section className="route-page">
      <SectionIntro
        eyebrow="Services"
        title="Production-ready asset support for Roblox teams that need clean handoff and consistent style."
        text="The design is flatter and darker now, with less visual noise. This route can be expanded with pricing or package breakdowns later without touching the other pages."
      />

      <div className="two-column-layout">
        <div className="panel section-panel">
          <ul className="service-list">
            {services.map((service) => (
              <li key={service}>{service}</li>
            ))}
          </ul>
        </div>

        <div className="panel quote-panel">
          <span className="panel-label">Client quote</span>
          <blockquote>
            “Add a short testimonial here about communication, speed, polish,
            or how the assets improved the game.”
          </blockquote>
          <p>[CLIENT NAME / STUDIO NAME]</p>
        </div>
      </div>
    </section>
  )
}

function App() {
  return (
    <div className="app-shell">
      <header className="topbar">
        <NavLink className="brand" to="/">
          <span className="brand-mark">XYAZ</span>
          <span className="brand-copy">
            <strong>[MODELER NAME]</strong>
            <span>Roblox 3D Modeler</span>
          </span>
        </NavLink>

        <nav className="topnav" aria-label="Primary">
          {quickLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                isActive ? 'nav-link nav-link-active' : 'nav-link'
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </header>

      <main className="site-main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/services" element={<ServicesPage />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
