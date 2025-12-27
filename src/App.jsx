//import React from "react";
import React, { useEffect } from "react";
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

function Card({ title, href, description, grade, links }) {
  const hasMainLink = Boolean(href && href !== "#");
  const target = hasMainLink && String(href).startsWith("http") ? "_blank" : undefined;

  return (
    <div className="card">
      <div className="cardTitleRow">
        <h3 className="cardTitle">
          {hasMainLink ? (
            <a
              href={href}
              target={target}
              rel="noreferrer"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              {title}
            </a>
          ) : (
            title
          )}
          {grade ? <span className="badge">{grade}</span> : null}
        </h3>

        {hasMainLink ? (
          <a
            className="cardArrow"
            href={href}
            target={target}
            rel="noreferrer"
            aria-label={`Open ${title}`}
            style={{ color: "inherit", textDecoration: "none" }}
          >
            ↗
          </a>
        ) : null}
      </div>

      {description ? <p className="cardDesc">{description}</p> : null}

      {Array.isArray(links) && links.length > 0 ? (
        <div className="linkRow">
          {links.map((l) => (
            <a
              key={`${title}-${l.label}-${l.href}`}
              className="pillLink"
              href={l.href}
              target={String(l.href).startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
            >
              {l.label}
            </a>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default function App() {
  useEffect(() => {
    let raf = 0;

    const update = () => {
      const y = window.scrollY || 0;
      document.documentElement.style.setProperty("--scrollYpx", `${y}px`);
      raf = 0;
    };

    const onScroll = () => {
      if (raf) return;
      raf = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) window.cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="page">
<div className="bg" aria-hidden="true">
  <div className="bgLayer bgLayer1" />
  <div className="bgLayer bgLayer2" />
</div>        
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
           
            <a href="#education">Education</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            {/* <a href="#now">Now</a> */}
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
              <Chip>Deep Packet Inspection</Chip>
              <Chip>Consumer Analytics</Chip>
              <Chip>Climate Tech</Chip>
              <Chip>Human-Computer Interaction (HCI) Research</Chip>
              <Chip>Natural Language Processing (NLP) Techniques</Chip>
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


        

        <div id="education" />
        <Section title="Education">
          <div className="stack">
            {(profile.education ?? []).map((e) => (
              <div key={`${e.school}-${e.degree}-${e.dates}`} className="role">
                <div className="roleTopRow">
                  <div className="roleTitle">
                    <strong>{e.degree}</strong>
                    <span className="roleSep"> · </span>
                    <span>{e.school}</span>
                  </div>
                  <div className="roleDates">{e.dates}</div>
                </div>

                {Array.isArray(e.highlights) && e.highlights.length > 0 ? (
                  <ul className="bullets">
                    {e.highlights.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                ) : null}
              </div>
            ))}
          </div>
        </Section>
<div id="experience" />
        <Section title="Experience">
          <div className="stack">
            {(profile.experience ?? []).map((r) => (
              <div key={`${r.company}-${r.title}-${r.dates}`} className="role">
                <div className="roleTopRow">
                  <div className="roleTitle">
                    <strong>{r.title}</strong>
                    <span className="roleSep"> · </span>
                    {r.companyUrl ? (
                      <a
                        className="inlineLink"
                        href={r.companyUrl}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {r.company}
                      </a>
                    ) : (
                      <span>{r.company}</span>
                    )}
                  </div>
                  <div className="roleDates">{r.dates}</div>
                </div>

                {r.overview ? <p className="roleOverview">{r.overview}</p> : null}

                {Array.isArray(r.examples) && r.examples.length > 0 ? (
                  <div className="linkRow">
                    <span className="mutedLabel">Selected work:</span>
                    {r.examples.map((ex) => (
                      <a
                        key={ex.href}
                        className="pillLink"
                        href={ex.href}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {ex.label}
                      </a>
                    ))}
                  </div>
                ) : null}

                {Array.isArray(r.highlights) && r.highlights.length > 0 ? (
                  <ul className="bullets">
                    {r.highlights.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                ) : null}
              </div>
            ))}
          </div>
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

        {/* <div id="now" />
        <Section title="Now">
          <p className="nowText">
            I’m preparing for PM interviews and looking for roles applying AI to measurable social good (climate, public sector delivery,
            and responsible human-centered AI). I’m especially interested in teams that take evaluation seriously and ship end-to-end.
          </p>
        </Section> */}

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
