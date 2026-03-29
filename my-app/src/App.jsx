import './App.css'

const featuredProjects = [
  {
    title: '[PROJECT NAME 01]',
    type: 'Stylized city hub for a Roblox RPG',
    summary:
      'Use this card to describe the map theme, your friend’s contribution, and what made the asset pack or environment special.',
    deliverables: ['[ADD COVER IMAGE]', '[ADD TIMELINE]', '[ADD TEAM / CLIENT]'],
  },
  {
    title: '[PROJECT NAME 02]',
    type: 'Sci-fi prop set for a Roblox simulator',
    summary:
      'Replace this with a short case study about the modeling style, optimization targets, and how the assets supported gameplay.',
    deliverables: ['[ADD PROP SHEET]', '[ADD POLYCOUNT NOTE]', '[ADD TOOLCHAIN]'],
  },
  {
    title: '[PROJECT NAME 03]',
    type: 'Fantasy interior kit for a showcase world',
    summary:
      'Use this space for a concise before/after or challenge/result summary with screenshots or renders from the finished scene.',
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
    text: 'Add how he collects concept art, target style, and gameplay requirements before starting production.',
  },
  {
    step: '02',
    title: 'Blockout and iteration',
    text: 'Add how rough forms, scale tests, and early screenshots are shared with the client or team.',
  },
  {
    step: '03',
    title: 'Final polish',
    text: 'Add the final pass details: optimization, texture polish, export setup, and delivery.',
  },
]

const highlights = [
  { value: '[00+]', label: 'Completed assets or scenes' },
  { value: '[00]', label: 'Active game collaborations' },
  { value: '[X years]', label: 'Building for Roblox worlds' },
]

function App() {
  return (
    <div className="page-shell">
      <header className="topbar">
        <p className="brand">
          [MODELER NAME]
          <span>Roblox 3D Modeler</span>
        </p>
        <nav className="topnav" aria-label="Primary">
          <a href="#work">Work</a>
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section className="hero-section">
          <div className="hero-copy">
            <p className="eyebrow">Available for commissions and studio work</p>
            <h1>
              Building standout Roblox worlds with clean, stylized 3D modeling.
            </h1>
            <p className="hero-text">
              Replace this intro with a short pitch about your friend, the kind of
              Roblox games he works on, and the visual style he is known for.
            </p>

            <div className="cta-row">
              <a className="primary-button" href="#contact">
                Book a project
              </a>
              <a className="secondary-button" href="#work">
                View portfolio
              </a>
            </div>

            <div className="stat-grid">
              {highlights.map((item) => (
                <article className="stat-card" key={item.label}>
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </article>
              ))}
            </div>
          </div>

          <aside className="hero-panel" aria-label="Profile and preview placeholders">
            <div className="portrait-card">
              <div className="image-placeholder large">[ADD HERO RENDER OR PHOTO]</div>
              <div className="portrait-meta">
                <p>[DISPLAY NAME]</p>
                <span>[CITY / COUNTRY]</span>
              </div>
            </div>

            <div className="mini-grid">
              <div className="image-placeholder">[ADD MODEL TURNAROUND]</div>
              <div className="note-card">
                <p>Current focus</p>
                <strong>[STYLIZED PROPS / ENVIRONMENTS / VEHICLES]</strong>
              </div>
            </div>
          </aside>
        </section>

        <section className="section-block intro-strip" id="about">
          <p>
            [ABOUT PLACEHOLDER] Use this section for a quick background story:
            when he started modeling, what software he uses, and what types of
            Roblox teams or clients he usually works with.
          </p>
        </section>

        <section className="section-block" id="work">
          <div className="section-heading">
            <p className="eyebrow">Featured work</p>
            <h2>Selected projects and asset showcases.</h2>
          </div>

          <div className="project-grid">
            {featuredProjects.map((project) => (
              <article className="project-card" key={project.title}>
                <div className="image-placeholder project-image">[ADD PROJECT IMAGE]</div>
                <p className="project-type">{project.type}</p>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
                <ul className="tag-row" aria-label={`${project.title} details`}>
                  {project.deliverables.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section-block dual-layout" id="services">
          <div>
            <div className="section-heading">
              <p className="eyebrow">What he offers</p>
              <h2>Modeling support for Roblox teams that need production-ready assets.</h2>
            </div>
            <ul className="service-list">
              {services.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </div>

          <div className="quote-panel">
            <p className="eyebrow">Client quote</p>
            <blockquote>
              “Add a short testimonial here about communication, speed, polish,
              or how the assets improved the game.”
            </blockquote>
            <span>[CLIENT NAME / STUDIO NAME]</span>
          </div>
        </section>

        <section className="section-block" id="process">
          <div className="section-heading">
            <p className="eyebrow">Workflow</p>
            <h2>A simple production flow from concept to final delivery.</h2>
          </div>

          <div className="workflow-grid">
            {workflow.map((item) => (
              <article className="workflow-card" key={item.step}>
                <span>{item.step}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section-block contact-block" id="contact">
          <div>
            <p className="eyebrow">Contact</p>
            <h2>Ready to add the real links and details.</h2>
            <p>
              Replace these placeholders with Discord, email, portfolio links,
              Roblox profile, and preferred commission info.
            </p>
          </div>

          <div className="contact-card">
            <p>[EMAIL ADDRESS]</p>
            <p>[DISCORD USERNAME]</p>
            <p>[ROBLOX PROFILE LINK]</p>
            <a className="primary-button" href="mailto:[EMAIL ADDRESS]">
              Replace with real email link
            </a>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
