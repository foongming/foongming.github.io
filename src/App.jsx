import React from "react";
import { profile } from "./data";

function Section({ title, children }) {
  return (
    <section className="section">
      <div className="sectionHeader">
        <h2>{title}</h2>
      </div>
      <div className="sectionBody">{children}</div>
    </section>
  );
}

function Chip({ children }) {
  return <span className="chip">{children}</span>;
}

function LinkButton({ href, children }) {
  return (
    <a className="btn" href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
      {children}
    </a>
  );
}

function Card({ title, href, description }) {
  const inner = (
    <>
      <div className="cardTitleRow">
        <h3 className="cardTitle">{title}</h3>
        <span className="cardArrow" aria-hidden="true">↗</span>
      </div>
      <p className="cardDesc">{description}</p>
    </>
  );

  return href && href !== "#" ? (
    <a className="card" href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
      {inner}
    </a>
  ) : (
    <div className="card">{inner}</div>
  );
}

export default function App() {
  return (
    <div className="page">
      <header className="topbar">
        <div className="container topbarInner">
          {/* <div className="brand">
            <div className="avatar" aria-hidden="true">{profile.name[0]}</div>
            <div>
              <div className="brandName">{profile.name}</div>
              <div className="brandMeta">{profile.location}</div>
            </div>
          </div> */}
          <nav className="nav">
            <a href="#focus">Focus</a>
            <a href="#projects">Projects</a>
            <a href="#now">Now</a>
          </nav>
        </div>
      </header>

      <main className="container">
        <section className="hero">
          <div className="heroLeft">
            <h1>{profile.name}</h1>
            <p className="headline">{profile.headline}</p>

            <div className="blurb">
              {profile.blurb.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <div className="ctaRow">
              {profile.links.map((l) => (
                <LinkButton key={l.label} href={l.href}>
                  {l.label}
                </LinkButton>
              ))}
            </div>

            <div className="chipRow" aria-label="Key keywords">
              <Chip>RAG</Chip>
              <Chip>Evaluation</Chip>
              <Chip>LLM Product</Chip>
              <Chip>Low-resource NLP</Chip>
            </div>
          </div>

          {/* <div className="heroRight">
            <div className="panel">
              <div className="panelTitle">What I bring</div>
              <ul className="bullets">
                <li>End-to-end PM: discovery → delivery → measurement.</li>
                <li>LLM systems thinking: retrieval, grounding, eval, iteration loops.</li>
                <li>Comfort translating research constraints into product tradeoffs.</li>
              </ul>
              <div className="panelFootnote">
                Open to PM roles focused on LLM-enabled products and platform capabilities.
              </div>
            </div>
          </div> */}
        </section>

        <div id="focus" />
        <Section title="Focus">
          <ul className="focusList">
            {profile.focus.map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
        </Section>

        <div id="projects" />
        <Section title="Projects">
          {profile.projects.map((group) => (
            <div key={group.category} className="projectGroup">
              <div className="projectGroupTitle">{group.category}</div>
              <div className="grid">
                {group.items.map((p) => (
                  <Card key={p.title} {...p} />
                ))}
              </div>
            </div>
          ))}
        </Section>

        <div id="now" />
        <Section title="Now">
          <p className="nowText">
            I’m preparing for PM interviews and looking for roles where I can build and scale LLM-enabled products end-to-end,
            with a strong emphasis on evaluation and measurable outcomes.
          </p>
        </Section>

        <footer className="footer">
          <div className="footerInner">
            <span>© {new Date().getFullYear()} {profile.name}</span>
            <span className="footerSep">·</span>
            <a href={profile.links.find(l => l.label === "GitHub")?.href ?? "#"} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </footer>
      </main>
    </div>
  );
}