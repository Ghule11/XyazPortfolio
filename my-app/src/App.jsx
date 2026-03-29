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

const services = [
  'Environment kits and modular set pieces',
  'Props, furniture, weapons, and scene dressing',
  'Stylized Roblox-ready optimization and cleanup',
  'Blockout-to-final workflow for game production',
]

const workflow = [
  {
    step: '01',
    title: 'Brief and references',
    text: 'Add how project goals, style targets, and gameplay constraints are locked before production starts.',
  },
  {
    step: '02',
    title: 'Blockout and iteration',
    text: 'Show how rough forms, scale checks, and screenshots are reviewed before the final polish pass.',
  },
  {
    step: '03',
    title: 'Final polish',
    text: 'Add the delivery stage: cleanup, optimization, export setup, and final handoff to the team.',
  },
]

const highlights = [
  { value: '[00+]', label: 'Completed assets or scenes' },
  { value: '[00]', label: 'Active game collaborations' },
  { value: '[X years]', label: 'Building for Roblox worlds' },
]

const quickLinks = [
  { to: '/work', label: 'Work' },
  { to: '/services', label: 'Services' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
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
            <NavLink className="primary-button" to="/contact">
              Book a project
            </NavLink>
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
          </div>
        </aside>
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

function AboutPage() {
  return (
    <section className="route-page">
      <SectionIntro
        eyebrow="About"
        title="A dedicated page reads better than burying the background section under the hero."
        text="Use this page for software, workflow, experience, preferred project types, and a tighter explanation of what kind of Roblox modeling work gets delivered."
      />

      <div className="two-column-layout">
        <div className="panel section-panel">
          <p className="section-copy">
            [ABOUT PLACEHOLDER] Add the actual background story here: when he started
            modeling, what tools he uses, what kind of teams he works with, and what
            makes the work reliable in production.
          </p>
        </div>

        <div className="workflow-grid">
          {workflow.map((item) => (
            <article className="panel workflow-card" key={item.step}>
              <span className="workflow-step">{item.step}</span>
              <h2>{item.title}</h2>
              <p className="section-copy">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function ContactPage() {
  return (
    <section className="route-page">
      <SectionIntro
        eyebrow="Contact"
        title="Use this route for the real booking path instead of a footer jump."
        text="The page is intentionally simple. It keeps the contact details visible without piling on extra decoration."
      />

      <div className="two-column-layout">
        <div className="panel section-panel">
          <p className="section-copy">
            Replace these placeholders with Discord, email, portfolio links, Roblox
            profile, and preferred commission details.
          </p>
        </div>

        <div className="panel contact-card">
          <p>[EMAIL ADDRESS]</p>
          <p>[DISCORD USERNAME]</p>
          <p>[ROBLOX PROFILE LINK]</p>
          <a className="primary-button full-width" href="mailto:[EMAIL ADDRESS]">
            Replace with real email link
          </a>
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
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
