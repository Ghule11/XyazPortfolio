import { NavLink, Route, Routes } from 'react-router-dom'
import './App.css'

const projects = [
  {
    title: '[PROJECT NAME 01]',
    slug: 'project-01',
    type: 'Stylized city hub for a Roblox RPG',
    summary:
      'Use this card to explain the world theme, what was built, and where the final scene helped the game stand out.',
    deliverables: ['[ADD COVER IMAGE]', '[ADD TIMELINE]', '[ADD TEAM / CLIENT]'],
  },
  {
    title: '[PROJECT NAME 02]',
    slug: 'project-02',
    type: 'Sci-fi prop set for a Roblox simulator',
    summary:
      'Replace this with a short case study about the asset style, performance target, and how the pack supported gameplay.',
    deliverables: ['[ADD PROP SHEET]', '[ADD POLYCOUNT NOTE]', '[ADD TOOLCHAIN]'],
  },
  {
    title: '[PROJECT NAME 03]',
    slug: 'project-03',
    type: 'Fantasy interior kit for a showcase world',
    summary:
      'Use this space for a concise challenge and result summary with a final render or in-engine screenshot.',
    deliverables: ['[ADD FINAL RENDER]', '[ADD ROLE]', '[ADD RELEASE DATE]'],
  },
  {
    title: '[PROJECT NAME 04]',
    slug: 'project-04',
    type: 'Vehicle set for a fast-paced Roblox experience',
    summary:
      'Drop in a short breakdown of the vehicle style, technical limits, and what made the final assets feel polished in-game.',
    deliverables: ['[ADD TURNAROUND]', '[ADD TEXTURE PASS]', '[ADD DELIVERY DATE]'],
  },
]

const featuredProjects = projects.slice(0, 2)

const highlights = [
  { value: '[00+]', label: 'Completed assets or scenes' },
  { value: '[00]', label: 'Active game collaborations' },
  { value: '[X years]', label: 'Building for Roblox worlds' },
]

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/projects', label: 'Projects' },
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

function ProjectCard({ project }) {
  return (
    <article className="panel project-card">
      <div className="image-placeholder project-image">[ADD PROJECT IMAGE]</div>
      <div className="project-card-body">
        <p className="project-type">{project.type}</p>
        <h2>{project.title}</h2>
        <p className="section-copy">{project.summary}</p>
        <ul className="tag-row" aria-label={`${project.title} details`}>
          {project.deliverables.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </article>
  )
}

function SiteHeader() {
  return (
    <header className="topbar">
      <NavLink className="brand" to="/">
        <span className="brand-kicker">Portfolio</span>
        <span className="brand-name">[MODELER NAME]</span>
      </NavLink>

      <nav className="topnav" aria-label="Primary">
        {navLinks.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.to === '/'}
            className={({ isActive }) =>
              isActive ? 'nav-link nav-link-active' : 'nav-link'
            }
          >
            {link.label}
          </NavLink>
        ))}
      </nav>

      <p className="nav-note">Roblox 3D Modeler</p>
    </header>
  )
}

function HomePage() {
  return (
    <section className="route-page hero-page">
      <div className="hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">Featured work for studios and commissions</p>
          <h1>Clean homepage, focused highlights, and a direct path into the full portfolio.</h1>
          <p className="section-copy">
            This homepage now keeps the message tighter: a short intro, a few key
            stats, and two featured projects before sending visitors to the full
            projects page.
          </p>

          <div className="cta-row">
            <NavLink className="primary-button" to="/projects">
              View projects
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
          <p className="eyebrow">Selected projects</p>
          <h2>Two featured pieces on the homepage, with the rest moved into a dedicated projects page.</h2>
        </div>
      </div>

      <div className="project-grid home-project-grid">
        {featuredProjects.map((project) => (
          <ProjectCard project={project} key={project.slug} />
        ))}
      </div>

      <div className="see-all-wrap">
        <NavLink className="primary-button see-all-button" to="/projects">
          See all projects
        </NavLink>
      </div>
    </section>
  )
}

function ProjectsPage() {
  return (
    <section className="route-page">
      <SectionIntro
        eyebrow="Projects"
        title="The full project grid lives here, separate from the homepage."
        text="This route keeps the homepage curated while still giving visitors a complete portfolio page with every project card in one place."
      />

      <div className="project-grid">
        {projects.map((project) => (
          <ProjectCard project={project} key={project.slug} />
        ))}
      </div>
    </section>
  )
}

function App() {
  return (
    <div className="app-shell">
      <SiteHeader />

      <main className="site-main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
