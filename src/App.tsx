import React, { useState, useEffect, useRef } from "react"
import photoCasual from "./imports/muhammad-naoman.jpg"
import photoEditorial from "./imports/muhammad-naoman-editorial.jpg"

/* ─── DATA ──────────────────────────────────────────────────── */

const NAV = ["Work", "About", "Expertise", "Experience", "Contact"]

const EXPERTISE = [
  {
    num: "01",
    title: "Digital Marketing",
    desc: "SEO, organic growth, paid acquisition, positioning and digital strategy built around measurable outcomes.",
  },
  {
    num: "02",
    title: "SEO & Search Growth",
    desc: "Technical SEO, on-page optimization, content strategy, local search and long-term growth systems.",
  },
  {
    num: "03",
    title: "Growth Strategy",
    desc: "Turning traffic, content and digital assets into measurable business opportunities, not just metrics.",
  },
  {
    num: "04",
    title: "Solution Architecture",
    desc: "Connecting technology, business requirements and scalable digital systems that actually hold together.",
  },
  {
    num: "05",
    title: "Web & Product Development",
    desc: "A technical foundation from years of building websites, mobile applications and digital products.",
  },
  {
    num: "06",
    title: "Conversion Strategy",
    desc: "Improving user journeys, landing pages, messaging and conversion opportunities across digital touchpoints.",
  },
]

const PROJECTS = [
  {
    id: "fladys",
    num: "01",
    title: "Fladys",
    category: "Digital Growth · Strategy",
    year: "2023",
    role: "Digital Marketing Lead",
    services: ["Growth Strategy", "Paid Acquisition", "Content"],
    desc: "Fladys required a digital growth approach that could translate genuine brand value into measurable audience development. The work centered on building a coherent acquisition system — from channel strategy through to landing page optimization and audience segmentation.",
    challenge:
      "Building reliable digital acquisition for a brand that needed to grow its audience without compromising its identity.",
    approach:
      "Developed a full-funnel strategy combining organic content, paid acquisition and retargeting — each layer reinforcing the others.",
    outcome:
      "Consistent audience and revenue growth across primary digital channels, with acquisition costs brought into a sustainable range.",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&h=680&fit=crop&auto=format",
    imgAlt: "Creative workspace representing Fladys project",
  },
  {
    id: "roofing",
    num: "02",
    title: "Roofing Services",
    category: "Local SEO · Lead Generation",
    year: "2024",
    role: "Digital Marketing Strategist",
    services: ["Local SEO", "Google Ads", "Landing Pages", "Lead Gen"],
    desc: "A roofing services company operating in a competitive local market needed a digital presence that would generate genuine enquiries — not just traffic. The work required understanding how homeowners search for roofing services and building a system around that intent.",
    challenge:
      "Local roofing is highly competitive digitally. Generic marketing produces generic results. The work needed to be specific to how this audience actually searches and decides.",
    approach:
      "Built a local search strategy around keyword intent, Google Business optimization, and targeted paid campaigns with conversion-focused landing pages.",
    outcome:
      "Significant improvement in local search visibility and a measurable increase in qualified enquiries from target service areas.",
    img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=900&h=680&fit=crop&auto=format",
    imgAlt: "Residential property representing roofing services project",
  },
  {
    id: "sanitary",
    num: "03",
    title: "Sanitary Services — Lahore",
    category: "Local SEO · Digital Presence",
    year: "2024",
    role: "SEO & Digital Strategy",
    services: ["Local SEO", "Google Business", "Content Strategy"],
    desc: "A Lahore-based sanitary services business with strong offline reputation but minimal digital presence. Customers searching online were finding competitors instead. The work focused on building local search authority and connecting that authority to actual enquiry conversion.",
    challenge:
      "A good business invisible online — customers were there, but the business was not showing up when they searched.",
    approach:
      "Systematic local SEO: Google Business optimization, citation building, localized content, and a conversion-focused digital presence.",
    outcome:
      "Substantially improved local search visibility with the business now appearing for the searches that matter to its customers.",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&h=680&fit=crop&auto=format",
    imgAlt: "Urban building representing Lahore sanitary services project",
  },
]

const EXPERIENCE = [
  {
    year: "2021",
    title: "Engineering Graduation",
    desc: "Graduated in Software Engineering. Began professional work across technology and digital product development.",
  },
  {
    year: "2021–2023",
    title: "Development & Digital Products",
    desc: "Mobile application development, web development, and digital work spanning film and gaming environments. Built a genuine technical foundation.",
  },
  {
    year: "2022–2023",
    title: "Technology Teams",
    desc: "Worked with teams including GenI and Programming Force, contributing to product development and technical delivery.",
  },
  {
    year: "2023–Present",
    title: "Digital Marketing & Growth",
    desc: "Primary professional focus shifted toward digital marketing, SEO, growth strategy and solution architecture — where engineering thinking meets marketing execution.",
  },
  {
    year: "Present",
    title: "Freelance + Devzol",
    desc: "Working independently with clients across sectors while building Devzol as a focused digital and technology agency.",
  },
]

const PROCESS = [
  {
    num: "01",
    title: "Discover",
    desc: "Understand the business, audience, market and the existing digital ecosystem — before forming any view on direction.",
  },
  {
    num: "02",
    title: "Diagnose",
    desc: "Identify what is actually limiting growth. Technical gaps, marketing gaps, conversion gaps — or all three.",
  },
  {
    num: "03",
    title: "Strategize",
    desc: "Develop the right digital growth direction for this specific business, not a templated approach.",
  },
  {
    num: "04",
    title: "Build",
    desc: "Implement the digital infrastructure needed — campaigns, content, technical SEO, landing pages, systems.",
  },
  {
    num: "05",
    title: "Optimize",
    desc: "Measure what's happening, understand why, and improve based on evidence.",
  },
  {
    num: "06",
    title: "Grow",
    desc: "Build systems that compound over time rather than deliver a one-time spike.",
  },
]

const WHY = [
  {
    num: "01",
    title: "Engineering Mindset",
    desc: "I understand how digital products are actually built — which changes how I think about marketing them.",
  },
  {
    num: "02",
    title: "Marketing Thinking",
    desc: "Visibility, acquisition, positioning and growth — not just technical optimization for its own sake.",
  },
  {
    num: "03",
    title: "Business Context",
    desc: "The objective is not traffic for traffic's sake. It is business outcomes that matter to the people running the business.",
  },
  {
    num: "04",
    title: "End-to-End Thinking",
    desc: "From architecture and websites to SEO and conversion — I can see and work across the complete digital system.",
  },
]

/* ─── HOOKS ─────────────────────────────────────────────────── */

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setInView(true)
      },
      { threshold },
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])
  return { ref, inView }
}

/* ─── SUB-COMPONENTS ────────────────────────────────────────── */

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode
  delay?: number
  className?: string
}) {
  const { ref, inView } = useInView()
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(20px)",
        transition: `opacity 0.8s cubic-bezier(0.16,1,0.3,1) ${delay}s, transform 0.8s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
      }}
    >
      {children}
    </div>
  )
}

function MicroLabel({ children }: { children: string }) {
  return <p className="micro-label">{children}</p>
}

/* ─── APP ────────────────────────────────────────────────────── */

export default function App() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [portraitVariant, setPortraitVariant] =
    useState<"editorial" | "studio">("editorial")
  const [activeExpertise, setActiveExpertise] = useState<number | null>(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", fn)
    return () => window.removeEventListener("scroll", fn)
  }, [])

  const scrollTo = (id: string) => {
    setMenuOpen(false)
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
    setFormData({ name: "", email: "", service: "", message: "" })
  }

  return (
    <div
      style={{
        background: "var(--bg)",
        minHeight: "100vh",
        overflowX: "hidden",
      }}
    >
      {/* ── NAV ── */}
      <nav
        className={`nav-root ${scrolled ? "scrolled" : ""}`}
        role="navigation"
        aria-label="Main navigation"
      >
        <button
          onClick={() => scrollTo("hero")}
          className="nav-logo"
          aria-label="Home"
        >
          Muhammad Naoman
        </button>

        <div className="nav-links">
          {NAV.map((n) => (
            <button
              key={n}
              className="nav-link"
              onClick={() => scrollTo(n.toLowerCase())}
              aria-label={`Navigate to ${n}`}
            >
              {n}
            </button>
          ))}
          <button className="nav-cta" onClick={() => scrollTo("contact")}>
            Let's Talk
          </button>
        </div>

        <button
          className="nav-mobile-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          style={{
            display: "none",
            background: "none",
            border: "1px solid var(--border)",
            borderRadius: "2px",
            padding: "8px 12px",
            cursor: "pointer",
            fontSize: "14px",
            color: "var(--text)",
            fontFamily: "Inter, sans-serif",
          }}
        >
          {menuOpen ? "Close" : "Menu"}
        </button>
      </nav>

      {menuOpen && (
        <div className="mobile-menu" role="dialog" aria-label="Mobile menu">
          {NAV.map((n) => (
            <button
              key={n}
              onClick={() => scrollTo(n.toLowerCase())}
              className="nav-link"
              style={{
                textAlign: "left",
                fontSize: "14px",
                letterSpacing: "0.05em",
              }}
            >
              {n}
            </button>
          ))}
          <button
            className="nav-cta"
            onClick={() => scrollTo("contact")}
            style={{ alignSelf: "flex-start" }}
          >
            Let's Talk
          </button>
        </div>
      )}

      {/* ── HERO ── */}
      <section id="hero" className="hero-section">
        <div style={{ maxWidth: "1280px", margin: "0 auto", width: "100%" }}>
          <p
            className="micro-label reveal-up"
            style={{ animationDelay: "0.1s", marginBottom: "48px" }}
          >
            Digital Marketing · Solution Architecture
          </p>

          <h1
            className="serif reveal-up"
            style={{
              fontSize: "clamp(3.5rem, 8.5vw, 9rem)",
              fontWeight: 400,
              lineHeight: 0.95,
              letterSpacing: "-0.02em",
              marginBottom: "48px",
              animationDelay: "0.2s",
              maxWidth: "14ch",
            }}
          >
            Muhammad
            <br />
            <em style={{ fontStyle: "italic", color: "var(--text-muted)" }}>
              Naoman
            </em>
          </h1>

          <div
            className="reveal-up hero-grid"
            style={{ animationDelay: "0.35s" }}
          >
            <div>
              <p
                style={{
                  fontSize: "clamp(1rem, 1.5vw, 1.2rem)",
                  color: "var(--text-muted)",
                  lineHeight: 1.75,
                  maxWidth: "480px",
                  marginBottom: "40px",
                }}
              >
                I build digital systems that don't just look good —<br />
                they work, convert and grow.
              </p>
              <p
                style={{
                  fontSize: "12px",
                  color: "var(--text-light)",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  marginBottom: "32px",
                }}
              >
                Engineering-trained. Developer-minded. Growth-focused.
              </p>
              <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
                <button className="btn-dark" onClick={() => scrollTo("work")}>
                  View Selected Work
                </button>
                <button
                  className="btn-outline-dark"
                  onClick={() => scrollTo("contact")}
                >
                  Start a Conversation
                </button>
              </div>
            </div>

            <div className="hero-meta">
              <div className="hero-card">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "16px",
                    marginBottom: "18px",
                  }}
                >
                  <img
                    src={photoEditorial}
                    alt="Muhammad Naoman"
                    style={{
                      width: "60px",
                      height: "60px",
                      borderRadius: "50%",
                      objectFit: "cover",
                      objectPosition: "top",
                      border: "2px solid var(--border)",
                      boxShadow: "0 6px 16px rgba(0,0,0,0.06)",
                    }}
                  />
                  <div>
                    <h3
                      className="serif"
                      style={{ fontSize: "19px", margin: 0, fontWeight: 400 }}
                    >
                      Muhammad Naoman
                    </h3>
                    <p
                      style={{
                        fontSize: "11px",
                        color: "var(--text-muted)",
                        margin: "3px 0 0",
                        letterSpacing: "0.03em",
                      }}
                    >
                      Digital Marketing &amp; Solution Architect
                    </p>
                  </div>
                </div>

                <div
                  style={{
                    borderTop: "1px solid var(--border-light)",
                    paddingTop: "16px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      fontSize: "12px",
                    }}
                  >
                    <span
                      style={{
                        color: "var(--text-light)",
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                        fontSize: "10px",
                      }}
                    >
                      Focus
                    </span>
                    <span style={{ color: "var(--text)", fontWeight: 500 }}>
                      Growth Systems &amp; SEO
                    </span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      fontSize: "12px",
                    }}
                  >
                    <span
                      style={{
                        color: "var(--text-light)",
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                        fontSize: "10px",
                      }}
                    >
                      Agency
                    </span>
                    <a
                      href="https://devzol.com"
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        color: "var(--accent)",
                        textDecoration: "none",
                        fontWeight: 500,
                      }}
                    >
                      devzol.com →
                    </a>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      fontSize: "12px",
                      alignItems: "center",
                    }}
                  >
                    <span
                      style={{
                        color: "var(--text-light)",
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                        fontSize: "10px",
                      }}
                    >
                      Availability
                    </span>
                    <span
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                        fontSize: "11px",
                        color: "#2E7D32",
                        fontWeight: 500,
                      }}
                    >
                      <span
                        style={{
                          width: "6px",
                          height: "6px",
                          borderRadius: "50%",
                          background: "#2E7D32",
                          display: "inline-block",
                        }}
                      />
                      Open for Selected Clients
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            style={{
              borderTop: "1px solid var(--border)",
              marginTop: "80px",
              paddingTop: "32px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "16px",
            }}
          >
            <span
              style={{
                fontSize: "11px",
                color: "var(--text-light)",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
              }}
            >
              Scroll to explore
            </span>
            <span
              style={{
                fontSize: "11px",
                color: "var(--text-light)",
                letterSpacing: "0.05em",
              }}
            >
              Based in Pakistan · Available Worldwide
            </span>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ── MANIFESTO ── */}
      <section style={{ padding: "120px 40px" }}>
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "80px",
            alignItems: "start",
          }}
        >
          <Reveal>
            <blockquote style={{ margin: 0 }}>
              <p
                className="serif"
                style={{
                  fontSize: "clamp(1.8rem, 3.5vw, 3rem)",
                  fontWeight: 400,
                  lineHeight: 1.25,
                  color: "var(--text)",
                  marginBottom: "24px",
                }}
              >
                "Technology taught me how to build systems. Marketing taught me
                how to make them matter."
              </p>
            </blockquote>
          </Reveal>

          <Reveal delay={0.15}>
            <div style={{ paddingTop: "8px" }}>
              <MicroLabel>The Background</MicroLabel>
              <div style={{ marginTop: "32px" }}>
                <p
                  style={{
                    fontSize: "15px",
                    color: "var(--text-muted)",
                    lineHeight: 1.85,
                    marginBottom: "20px",
                  }}
                >
                  My career began in engineering and software development —
                  building applications, websites, and digital products from the
                  ground up. That technical foundation shapes everything I do in
                  marketing today.
                </p>
                <p
                  style={{
                    fontSize: "15px",
                    color: "var(--text-muted)",
                    lineHeight: 1.85,
                    marginBottom: "20px",
                  }}
                >
                  Most marketers understand audiences but not architecture. Most
                  developers understand systems but not acquisition. I've worked
                  on both sides long enough to understand what each needs from
                  the other.
                </p>
                <p
                  style={{
                    fontSize: "15px",
                    color: "var(--text-muted)",
                    lineHeight: 1.85,
                  }}
                >
                  The result is a different approach to digital growth — one
                  that treats technology, marketing, and business objectives as
                  parts of a single system rather than separate disciplines.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <div className="divider" />

      {/* ── EXPERTISE ── */}
      <section id="expertise" className="section-spacing">
        <div className="section-wrap">
          <Reveal>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "baseline",
                marginBottom: "64px",
                flexWrap: "wrap",
                gap: "16px",
              }}
            >
              <h2
                className="serif"
                style={{
                  fontSize: "clamp(2rem, 4vw, 3.5rem)",
                  fontWeight: 400,
                  margin: 0,
                }}
              >
                What I Do
              </h2>
              <MicroLabel>Areas of Practice</MicroLabel>
            </div>
          </Reveal>

          <div>
            {EXPERTISE.map((item, i) => (
              <Reveal key={item.num} delay={i * 0.05}>
                <div
                  className="expertise-row"
                  onMouseEnter={() => setActiveExpertise(i)}
                  onMouseLeave={() => setActiveExpertise(null)}
                  role="article"
                  aria-label={item.title}
                >
                  <span className="expertise-num">{item.num}</span>
                  <h3 className="expertise-title">{item.title}</h3>
                  <p className="expertise-desc">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ── SELECTED WORK ── */}
      <section id="work" className="section-spacing">
        <div className="section-wrap">
          <Reveal>
            <div style={{ marginBottom: "80px" }}>
              <h2
                className="serif"
                style={{
                  fontSize: "clamp(2rem, 4vw, 3.5rem)",
                  fontWeight: 400,
                  marginBottom: "16px",
                }}
              >
                Selected Work
              </h2>
              <p
                style={{
                  fontSize: "14px",
                  color: "var(--text-muted)",
                  letterSpacing: "0.02em",
                }}
              >
                A selection of digital growth, marketing and technology work.
              </p>
            </div>
          </Reveal>

          {PROJECTS.map((p, i) => (
            <Reveal key={p.id} delay={0.05}>
              <article
                className={`work-entry ${i % 2 === 1 ? "reversed" : ""}`}
              >
                <div>
                  <img
                    src={p.img}
                    alt={p.imgAlt}
                    className="work-img"
                    loading="lazy"
                    width={900}
                    height={680}
                  />
                </div>
                <div style={{ padding: "8px 0" }}>
                  <div
                    style={{
                      display: "flex",
                      gap: "16px",
                      marginBottom: "32px",
                      alignItems: "center",
                      flexWrap: "wrap",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "11px",
                        color: "var(--text-light)",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                      }}
                    >
                      {p.num}
                    </span>
                    <span
                      style={{
                        width: "1px",
                        height: "12px",
                        background: "var(--border)",
                      }}
                    />
                    <span
                      style={{
                        fontSize: "11px",
                        color: "var(--text-muted)",
                        letterSpacing: "0.06em",
                        textTransform: "uppercase",
                      }}
                    >
                      {p.category}
                    </span>
                    <span
                      style={{
                        width: "1px",
                        height: "12px",
                        background: "var(--border)",
                      }}
                    />
                    <span
                      style={{ fontSize: "11px", color: "var(--text-light)" }}
                    >
                      {p.year}
                    </span>
                  </div>

                  <h3
                    className="serif"
                    style={{
                      fontSize: "clamp(2rem, 3vw, 3rem)",
                      fontWeight: 400,
                      marginBottom: "24px",
                      lineHeight: 1.1,
                    }}
                  >
                    {p.title}
                  </h3>

                  <p
                    style={{
                      fontSize: "14px",
                      color: "var(--text-muted)",
                      lineHeight: 1.85,
                      marginBottom: "32px",
                    }}
                  >
                    {p.desc}
                  </p>

                  <div style={{ marginBottom: "32px" }}>
                    <p
                      style={{
                        fontSize: "11px",
                        color: "var(--text-light)",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        marginBottom: "12px",
                      }}
                    >
                      The Challenge
                    </p>
                    <p
                      style={{
                        fontSize: "13px",
                        color: "var(--text-muted)",
                        lineHeight: 1.8,
                        marginBottom: "20px",
                      }}
                    >
                      {p.challenge}
                    </p>

                    <p
                      style={{
                        fontSize: "11px",
                        color: "var(--text-light)",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        marginBottom: "12px",
                      }}
                    >
                      The Approach
                    </p>
                    <p
                      style={{
                        fontSize: "13px",
                        color: "var(--text-muted)",
                        lineHeight: 1.8,
                        marginBottom: "20px",
                      }}
                    >
                      {p.approach}
                    </p>

                    <p
                      style={{
                        fontSize: "11px",
                        color: "var(--text-light)",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        marginBottom: "12px",
                      }}
                    >
                      The Outcome
                    </p>
                    <p
                      style={{
                        fontSize: "13px",
                        color: "var(--text-muted)",
                        lineHeight: 1.8,
                      }}
                    >
                      {p.outcome}
                    </p>
                  </div>

                  <div
                    style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}
                  >
                    {p.services.map((s) => (
                      <span
                        key={s}
                        style={{
                          fontSize: "11px",
                          color: "var(--text-muted)",
                          padding: "4px 10px",
                          border: "1px solid var(--border-light)",
                          borderRadius: "2px",
                          letterSpacing: "0.04em",
                        }}
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}

          {/* Secondary: Automation */}
          <Reveal>
            <div
              style={{
                padding: "60px 0",
                borderBottom: "1px solid var(--border-light)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  gap: "24px",
                  alignItems: "baseline",
                  marginBottom: "20px",
                  flexWrap: "wrap",
                }}
              >
                <span
                  style={{
                    fontSize: "11px",
                    color: "var(--text-light)",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                  }}
                >
                  04
                </span>
                <span
                  style={{
                    width: "1px",
                    height: "12px",
                    background: "var(--border)",
                  }}
                />
                <span
                  style={{
                    fontSize: "11px",
                    color: "var(--text-muted)",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                  }}
                >
                  Technology · Automation
                </span>
              </div>
              <h3
                className="serif"
                style={{
                  fontSize: "clamp(1.5rem, 2.5vw, 2.5rem)",
                  fontWeight: 400,
                  marginBottom: "16px",
                }}
              >
                Area Automation Projects
              </h3>
              <p
                style={{
                  fontSize: "14px",
                  color: "var(--text-muted)",
                  lineHeight: 1.85,
                  maxWidth: "680px",
                }}
              >
                Automation and systems work undertaken as part of broader
                solution architecture engagements. These projects demonstrate
                the technical dimension of the practice — building digital
                infrastructure that runs without constant manual intervention.
              </p>
            </div>
          </Reveal>

          {/* Secondary: Dev */}
          <Reveal>
            <div
              style={{
                padding: "60px 0",
                borderBottom: "1px solid var(--border-light)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  gap: "24px",
                  alignItems: "baseline",
                  marginBottom: "20px",
                  flexWrap: "wrap",
                }}
              >
                <span
                  style={{
                    fontSize: "11px",
                    color: "var(--text-light)",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                  }}
                >
                  05
                </span>
                <span
                  style={{
                    width: "1px",
                    height: "12px",
                    background: "var(--border)",
                  }}
                />
                <span
                  style={{
                    fontSize: "11px",
                    color: "var(--text-muted)",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                  }}
                >
                  Mobile · Web · Product
                </span>
              </div>
              <h3
                className="serif"
                style={{
                  fontSize: "clamp(1.5rem, 2.5vw, 2.5rem)",
                  fontWeight: 400,
                  marginBottom: "16px",
                }}
              >
                Mobile & Web Development
              </h3>
              <p
                style={{
                  fontSize: "14px",
                  color: "var(--text-muted)",
                  lineHeight: 1.85,
                  maxWidth: "680px",
                }}
              >
                Before marketing became the focus, I spent years understanding
                how digital products are actually built — mobile applications,
                websites, film-adjacent digital work and product development.
                That foundation is not incidental to the marketing work. It is
                the reason it works differently.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <div className="divider" />

      {/* ── EXPERIENCE ── */}
      <section id="experience" className="section-spacing">
        <div className="section-wrap">
          <div className="two-col-grid">
            <Reveal>
              <div>
                <MicroLabel>Career Journey</MicroLabel>
                <h2
                  className="serif"
                  style={{
                    fontSize: "clamp(2rem, 4vw, 3.5rem)",
                    fontWeight: 400,
                    marginTop: "32px",
                    lineHeight: 1.1,
                  }}
                >
                  How the work
                  <br />
                  <em
                    style={{ fontStyle: "italic", color: "var(--text-muted)" }}
                  >
                    evolved
                  </em>
                </h2>
              </div>
            </Reveal>

            <div>
              {EXPERIENCE.map((e, i) => (
                <Reveal key={e.year} delay={i * 0.07}>
                  <div className="timeline-entry">
                    <div style={{ textAlign: "right", paddingRight: "0" }}>
                      <span
                        style={{
                          fontSize: "11px",
                          color: "var(--text-muted)",
                          letterSpacing: "0.06em",
                          fontWeight: 500,
                          lineHeight: 1,
                        }}
                      >
                        {e.year}
                      </span>
                    </div>
                    <div className="timeline-line" />
                    <div style={{ paddingBottom: "60px" }}>
                      <h4
                        className="serif"
                        style={{
                          fontSize: "20px",
                          fontWeight: 400,
                          marginBottom: "10px",
                          lineHeight: 1.2,
                        }}
                      >
                        {e.title}
                      </h4>
                      <p
                        style={{
                          fontSize: "13px",
                          color: "var(--text-muted)",
                          lineHeight: 1.8,
                        }}
                      >
                        {e.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ── ABOUT ── */}
      <section id="about" className="section-spacing">
        <div className="section-wrap">
          <Reveal>
            <MicroLabel>About</MicroLabel>
          </Reveal>

          <div className="two-col-grid" style={{ marginTop: "64px" }}>
            <Reveal>
              <div style={{ position: "sticky", top: "100px" }}>
                {/* Variant Switcher */}
                <div
                  style={{
                    display: "inline-flex",
                    gap: "6px",
                    marginBottom: "16px",
                    background: "var(--surface)",
                    padding: "4px",
                    borderRadius: "4px",
                    border: "1px solid var(--border-light)",
                  }}
                  role="group"
                  aria-label="Portrait style"
                >
                  <button
                    type="button"
                    className="portrait-switcher-btn"
                    onClick={() => setPortraitVariant("editorial")}
                    style={{
                      background:
                        portraitVariant === "editorial"
                          ? "var(--text)"
                          : "transparent",
                      color:
                        portraitVariant === "editorial"
                          ? "var(--bg)"
                          : "var(--text-muted)",
                    }}
                  >
                    Editorial Tailored
                  </button>
                  <button
                    type="button"
                    className="portrait-switcher-btn"
                    onClick={() => setPortraitVariant("studio")}
                    style={{
                      background:
                        portraitVariant === "studio"
                          ? "var(--text)"
                          : "transparent",
                      color:
                        portraitVariant === "studio"
                          ? "var(--bg)"
                          : "var(--text-muted)",
                    }}
                  >
                    Studio Classic
                  </button>
                </div>

                {/* Portrait Frame */}
                <div className="portrait-frame" style={{ maxWidth: "480px" }}>
                  <img
                    src={
                      portraitVariant === "editorial"
                        ? photoEditorial
                        : photoCasual
                    }
                    alt="Muhammad Naoman — Digital Marketing Expert and Solution Architect"
                    style={{
                      width: "100%",
                      aspectRatio: "3/4",
                      objectFit: "cover",
                      objectPosition: "top center",
                      display: "block",
                      transition: "opacity 0.4s ease, transform 0.4s ease",
                    }}
                    loading="lazy"
                  />

                  {/* Luxury Floating Status Badge */}
                  <div
                    style={{
                      position: "absolute",
                      bottom: "14px",
                      left: "14px",
                      right: "14px",
                      background: "rgba(244, 240, 232, 0.94)",
                      backdropFilter: "blur(12px)",
                      padding: "10px 14px",
                      borderRadius: "3px",
                      border: "1px solid rgba(213, 208, 199, 0.8)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      flexWrap: "wrap",
                      gap: "8px",
                      boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "11px",
                        fontWeight: 600,
                        letterSpacing: "0.04em",
                        color: "var(--text)",
                      }}
                    >
                      Muhammad Naoman
                    </span>
                    <span
                      style={{
                        fontSize: "10px",
                        color: "var(--accent)",
                        letterSpacing: "0.06em",
                        textTransform: "uppercase",
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                        fontWeight: 600,
                      }}
                    >
                      <span
                        style={{
                          width: "6px",
                          height: "6px",
                          borderRadius: "50%",
                          background: "#2E7D32",
                          display: "inline-block",
                        }}
                      />
                      Available for Advisory
                    </span>
                  </div>
                </div>

                <p
                  style={{
                    fontSize: "11px",
                    color: "var(--text-light)",
                    marginTop: "14px",
                    letterSpacing: "0.05em",
                  }}
                >
                  Muhammad Naoman · Digital Marketing Expert &amp; Solution
                  Architect
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div>
                <h2
                  className="serif"
                  style={{
                    fontSize: "clamp(1.8rem, 3vw, 2.8rem)",
                    fontWeight: 400,
                    lineHeight: 1.2,
                    marginBottom: "40px",
                  }}
                >
                  I started by building
                  <br />
                  digital products. Now I<br />
                  <em
                    style={{ fontStyle: "italic", color: "var(--text-muted)" }}
                  >
                    help businesses make them grow.
                  </em>
                </h2>

                <p
                  style={{
                    fontSize: "15px",
                    color: "var(--text-muted)",
                    lineHeight: 1.9,
                    marginBottom: "24px",
                  }}
                >
                  My background is in Software Engineering. After graduating in
                  2021, I spent years working across mobile application
                  development, web development, and digital product work —
                  including projects connected to film and gaming environments.
                </p>
                <p
                  style={{
                    fontSize: "15px",
                    color: "var(--text-muted)",
                    lineHeight: 1.9,
                    marginBottom: "24px",
                  }}
                >
                  That technical work taught me something important: the quality
                  of the product is rarely the primary constraint on a
                  business's growth. The constraint is almost always digital —
                  how people find you, what they experience when they do, and
                  whether that experience converts.
                </p>
                <p
                  style={{
                    fontSize: "15px",
                    color: "var(--text-muted)",
                    lineHeight: 1.9,
                    marginBottom: "24px",
                  }}
                >
                  So I moved toward digital marketing and growth strategy — not
                  away from technology, but toward the place where technology
                  and business impact intersect.
                </p>
                <p
                  style={{
                    fontSize: "15px",
                    color: "var(--text-muted)",
                    lineHeight: 1.9,
                    marginBottom: "40px",
                  }}
                >
                  Today I work with clients directly as a freelancer, and I'm
                  building Devzol — a focused digital agency — as an extension
                  of that practice.
                </p>

                <div
                  style={{
                    borderTop: "1px solid var(--border-light)",
                    paddingTop: "32px",
                  }}
                >
                  <p
                    style={{
                      fontSize: "12px",
                      color: "var(--text-light)",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      marginBottom: "16px",
                    }}
                  >
                    Currently based in Pakistan
                  </p>
                  <a
                    href="https://devzol.com"
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      fontSize: "13px",
                      color: "var(--accent)",
                      textDecoration: "none",
                      letterSpacing: "0.04em",
                    }}
                  >
                    devzol.com →
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ── WHY MUHAMMAD NAOMAN ── */}
      <section
        className="section-spacing"
        style={{ background: "var(--bg-warm)" }}
      >
        <div className="section-wrap">
          <Reveal>
            <div style={{ marginBottom: "80px" }}>
              <MicroLabel>The Differentiator</MicroLabel>
              <h2
                className="serif"
                style={{
                  fontSize: "clamp(2rem, 4vw, 3.5rem)",
                  fontWeight: 400,
                  marginTop: "32px",
                }}
              >
                Why the hybrid approach?
              </h2>
            </div>
          </Reveal>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "0",
            }}
          >
            {WHY.map((w, i) => (
              <Reveal key={w.num} delay={i * 0.08}>
                <div
                  className="why-card"
                  style={{
                    padding: "40px",
                    borderLeft: "1px solid var(--border-light)",
                    borderBottom: "1px solid var(--border-light)",
                  }}
                >
                  <span
                    className="serif"
                    style={{
                      fontSize: "13px",
                      color: "var(--text-light)",
                      display: "block",
                      marginBottom: "20px",
                    }}
                  >
                    {w.num}
                  </span>
                  <h3
                    className="serif"
                    style={{
                      fontSize: "22px",
                      fontWeight: 400,
                      marginBottom: "16px",
                      lineHeight: 1.2,
                    }}
                  >
                    {w.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "13px",
                      color: "var(--text-muted)",
                      lineHeight: 1.8,
                    }}
                  >
                    {w.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ── PROCESS ── */}
      <section className="section-spacing">
        <div className="section-wrap">
          <Reveal>
            <div className="perspectives-header-grid">
              <h2
                className="serif"
                style={{
                  fontSize: "clamp(2rem, 4vw, 3.5rem)",
                  fontWeight: 400,
                }}
              >
                How I work
              </h2>
              <MicroLabel>Process</MicroLabel>
            </div>
          </Reveal>

          {PROCESS.map((p, i) => (
            <Reveal key={p.num} delay={i * 0.05}>
              <div className="process-step">
                <span
                  className="serif"
                  style={{
                    fontSize: "14px",
                    color: "var(--text-light)",
                    paddingTop: "3px",
                  }}
                >
                  {p.num}
                </span>
                <div>
                  <h3
                    className="serif"
                    style={{
                      fontSize: "22px",
                      fontWeight: 400,
                      marginBottom: "10px",
                    }}
                  >
                    {p.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "13px",
                      color: "var(--text-muted)",
                      lineHeight: 1.8,
                    }}
                  >
                    {p.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <div className="divider" />

      {/* ── PHILOSOPHY ── */}
      <section
        className="section-spacing"
        style={{
          background: "var(--bg-dark)",
          color: "var(--white)",
        }}
      >
        <div className="section-wrap">
          <Reveal>
            <p
              className="micro-label"
              style={{ color: "rgba(255,255,255,0.35)" }}
            >
              Philosophy
            </p>
            <h2
              className="serif"
              style={{
                fontSize: "clamp(2rem, 5vw, 5rem)",
                fontWeight: 400,
                lineHeight: 1.1,
                marginTop: "48px",
                maxWidth: "18ch",
                color: "var(--white)",
              }}
            >
              "I don't believe marketing should exist separately from
              technology."
            </h2>
            <div className="philosophy-grid">
              <p
                style={{
                  fontSize: "15px",
                  color: "rgba(255,255,255,0.5)",
                  lineHeight: 1.85,
                }}
              >
                Modern growth depends on the entire digital ecosystem
                functioning as one coherent system. Strategy, technology,
                search, content, UX, conversion, measurement — they are not
                departments. They are layers of the same thing.
              </p>
              <p
                style={{
                  fontSize: "15px",
                  color: "rgba(255,255,255,0.35)",
                  lineHeight: 1.85,
                }}
              >
                When those layers are designed together, rather than assembled
                separately, the result is a digital presence that compounds over
                time rather than decaying between campaigns.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── DEVZOL ── */}
      <section
        className="section-spacing"
        style={{
          background: "var(--bg-dark)",
          borderTop: "1px solid rgba(255,255,255,0.08)",
          color: "var(--white)",
        }}
      >
        <div className="section-wrap">
          <Reveal>
            <div className="agency-grid">
              <div>
                <p
                  className="micro-label"
                  style={{
                    color: "rgba(255,255,255,0.35)",
                    marginBottom: "32px",
                  }}
                >
                  Beyond the Personal Brand
                </p>
                <h2
                  className="serif"
                  style={{
                    fontSize: "clamp(2rem, 4vw, 4rem)",
                    fontWeight: 400,
                    color: "var(--white)",
                    marginBottom: "24px",
                  }}
                >
                  Devzol
                </h2>
                <p
                  style={{
                    fontSize: "15px",
                    color: "rgba(255,255,255,0.5)",
                    lineHeight: 1.85,
                    marginBottom: "32px",
                  }}
                >
                  Devzol is a focused digital and technology agency built around
                  the same principles as the individual practice — engineering
                  rigour, marketing intelligence, and a clear focus on business
                  outcomes.
                </p>
                <a
                  href="https://devzol.com"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-dark"
                  style={{
                    background: "rgba(255,255,255,0.1)",
                    borderColor: "rgba(255,255,255,0.15)",
                    color: "var(--white)",
                  }}
                >
                  Visit devzol.com →
                </a>
              </div>
              <div className="agency-sidebar">
                <p
                  style={{
                    fontSize: "13px",
                    color: "rgba(255,255,255,0.35)",
                    lineHeight: 1.8,
                  }}
                >
                  Devzol exists as a service ecosystem — extending the scope of
                  what a single practitioner can deliver. It is not a rebrand of
                  the personal practice. It is a parallel structure for work
                  that benefits from a team context.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <div className="divider" />

      {/* ── TESTIMONIALS ── */}
      <section
        className="section-spacing"
        style={{ background: "var(--bg-warm)" }}
      >
        <div className="section-wrap">
          <Reveal>
            <div className="perspectives-header-grid">
              <h2
                className="serif"
                style={{
                  fontSize: "clamp(2rem, 4vw, 3.5rem)",
                  fontWeight: 400,
                }}
              >
                Client Perspectives
              </h2>
              <MicroLabel>Feedback</MicroLabel>
            </div>
          </Reveal>

          {[
            {
              quote:
                "Working with Muhammad Naoman brought a rare combination of technical understanding and marketing thinking to the project. He could see both what we needed to build and why it needed to work differently from a growth perspective.",
              attrib: "— Client, Roofing Services Sector",
            },
            {
              quote:
                "The work Muhammad Naoman did on our local search presence made a measurable difference to how customers find us. He approached the problem systematically rather than just running campaigns.",
              attrib: "— Client, Local Services — Lahore",
            },
            {
              quote:
                "What distinguishes Muhammad Naoman from other digital marketers I've worked with is that he understands the technology side of the equation. He doesn't just ask developers to implement things — he understands what he's asking.",
              attrib: "— Client, Digital Growth Project",
            },
          ].map((t, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div className="testimonial-block">
                <blockquote style={{ margin: 0 }}>
                  <p
                    className="serif"
                    style={{
                      fontSize: "clamp(1.1rem, 2vw, 1.4rem)",
                      fontWeight: 400,
                      lineHeight: 1.6,
                      color: "var(--text)",
                      marginBottom: "24px",
                      fontStyle: "italic",
                    }}
                  >
                    "{t.quote}"
                  </p>
                  <footer
                    style={{
                      fontSize: "12px",
                      color: "var(--text-muted)",
                      letterSpacing: "0.06em",
                    }}
                  >
                    {t.attrib}
                  </footer>
                </blockquote>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <div className="divider" />

      {/* ── CONTACT ── */}
      <section id="contact" className="section-spacing">
        <div className="section-wrap">
          <Reveal>
            <h2
              className="serif"
              style={{
                fontSize: "clamp(3rem, 7vw, 7rem)",
                fontWeight: 400,
                lineHeight: 0.95,
                letterSpacing: "-0.02em",
                marginBottom: "80px",
                maxWidth: "16ch",
              }}
            >
              Have a digital
              <br />
              problem worth
              <br />
              <em style={{ fontStyle: "italic", color: "var(--text-muted)" }}>
                solving?
              </em>
            </h2>
          </Reveal>

          <div className="two-col-grid">
            <Reveal>
              <p
                style={{
                  fontSize: "16px",
                  color: "var(--text-muted)",
                  lineHeight: 1.85,
                  marginBottom: "48px",
                }}
              >
                Whether you need a stronger digital presence, better search
                visibility, a conversion-focused website, or a technology
                strategy that actually supports growth — let's talk.
              </p>

              <div
                style={{
                  display: "flex",
                  gap: "16px",
                  flexWrap: "wrap",
                  marginBottom: "64px",
                }}
              >
                <button
                  className="btn-dark"
                  onClick={() => {
                    const f = document.getElementById("contact-form")
                    if (f) f.scrollIntoView({ behavior: "smooth" })
                  }}
                >
                  Start a Conversation
                </button>
                <button
                  className="btn-outline-dark"
                  onClick={() => scrollTo("work")}
                >
                  View Work
                </button>
              </div>

              <div
                style={{
                  borderTop: "1px solid var(--border-light)",
                  paddingTop: "32px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                }}
              >
                {[
                  {
                    label: "Agency",
                    value: "devzol.com",
                    link: "https://devzol.com",
                  },
                  { label: "Location", value: "Pakistan · Remote Worldwide" },
                  { label: "Response", value: "Within 24 hours" },
                ].map((item) => (
                  <div
                    key={item.label}
                    style={{ display: "flex", gap: "24px" }}
                  >
                    <span
                      style={{
                        fontSize: "11px",
                        color: "var(--text-light)",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        width: "80px",
                        flexShrink: 0,
                        paddingTop: "2px",
                      }}
                    >
                      {item.label}
                    </span>
                    {item.link ? (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noreferrer"
                        style={{
                          fontSize: "14px",
                          color: "var(--accent)",
                          textDecoration: "none",
                        }}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span
                        style={{ fontSize: "14px", color: "var(--text-muted)" }}
                      >
                        {item.value}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <form
                id="contact-form"
                onSubmit={submit}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "32px",
                }}
                noValidate
              >
                {submitted ? (
                  <div style={{ padding: "60px 0", textAlign: "center" }}>
                    <p
                      className="serif"
                      style={{ fontSize: "28px", marginBottom: "12px" }}
                    >
                      Message received.
                    </p>
                    <p style={{ fontSize: "14px", color: "var(--text-muted)" }}>
                      I'll be in touch within 24 hours.
                    </p>
                  </div>
                ) : (
                  <>
                    <div className="contact-form-row">
                      <div>
                        <label
                          htmlFor="name"
                          style={{
                            fontSize: "11px",
                            color: "var(--text-light)",
                            letterSpacing: "0.1em",
                            textTransform: "uppercase",
                            display: "block",
                            marginBottom: "8px",
                          }}
                        >
                          Name
                        </label>
                        <input
                          id="name"
                          className="contact-input"
                          placeholder="Your name"
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          required
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          style={{
                            fontSize: "11px",
                            color: "var(--text-light)",
                            letterSpacing: "0.1em",
                            textTransform: "uppercase",
                            display: "block",
                            marginBottom: "8px",
                          }}
                        >
                          Email
                        </label>
                        <input
                          id="email"
                          type="email"
                          className="contact-input"
                          placeholder="your@email.com"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="service"
                        style={{
                          fontSize: "11px",
                          color: "var(--text-light)",
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                          display: "block",
                          marginBottom: "8px",
                        }}
                      >
                        Area of Interest
                      </label>
                      <select
                        id="service"
                        className="contact-input"
                        value={formData.service}
                        onChange={(e) =>
                          setFormData({ ...formData, service: e.target.value })
                        }
                        required
                        style={{ cursor: "pointer" }}
                      >
                        <option value="">Select one</option>
                        <option>Digital Marketing Strategy</option>
                        <option>SEO & Search Growth</option>
                        <option>Paid Acquisition</option>
                        <option>Solution Architecture</option>
                        <option>Conversion Strategy</option>
                        <option>Web or Product Development</option>
                        <option>Something Else</option>
                      </select>
                    </div>
                    <div>
                      <label
                        htmlFor="message"
                        style={{
                          fontSize: "11px",
                          color: "var(--text-light)",
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                          display: "block",
                          marginBottom: "8px",
                        }}
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        className="contact-input"
                        placeholder="Tell me about your project or challenge."
                        rows={5}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        style={{ resize: "vertical" }}
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      className="btn-dark"
                      style={{ alignSelf: "flex-start" }}
                    >
                      Send Message →
                    </button>
                  </>
                )}
              </form>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer
        style={{ borderTop: "1px solid var(--border)", padding: "48px 24px" }}
      >
        <div className="section-wrap">
          <div className="footer-grid">
            <div>
              <p
                className="serif"
                style={{ fontSize: "20px", marginBottom: "8px" }}
              >
                Muhammad Naoman
              </p>
              <p
                style={{
                  fontSize: "12px",
                  color: "var(--text-muted)",
                  lineHeight: 1.7,
                }}
              >
                Digital Marketing
                <br />
                Solution Architecture
              </p>
            </div>

            <nav
              aria-label="Footer navigation"
              style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
              {NAV.map((n) => (
                <button
                  key={n}
                  onClick={() => scrollTo(n.toLowerCase())}
                  className="nav-link"
                  style={{ textAlign: "left", fontSize: "12px" }}
                >
                  {n}
                </button>
              ))}
            </nav>

            <div className="footer-meta">
              <a
                href="https://devzol.com"
                target="_blank"
                rel="noreferrer"
                style={{
                  fontSize: "13px",
                  color: "var(--accent)",
                  textDecoration: "none",
                  display: "block",
                  marginBottom: "24px",
                }}
              >
                Devzol →
              </a>
              <p
                style={{
                  fontSize: "11px",
                  color: "var(--text-light)",
                  lineHeight: 1.8,
                }}
              >
                © 2026 Muhammad Naoman
                <br />
                <em className="serif" style={{ fontStyle: "italic" }}>
                  Built with intention.
                </em>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
