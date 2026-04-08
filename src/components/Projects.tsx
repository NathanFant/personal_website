const projects = [
  {
    name: "Trades.io",
    url: "https://github.com/NathanFant/trades-io",
    subtitle: "Job marketplace MVP · Hack Reactor capstone",
    description:
      "Led a 4-person team from requirements through containerized production deployment. Built the FastAPI backend with authentication, email delivery, payment integration, and paginated search. CI/CD via GitHub Actions; Docker Compose for local and production environments.",
    role: "Lead Developer (team of 4)",
    tags: ["React", "FastAPI", "PostgreSQL", "Docker", "GitHub Actions"],
  },
  {
    name: "SolCard",
    url: "https://github.com/NathanFant/solcard",
    subtitle: "Crypto-to-fiat payment engine",
    description:
      "Designed a JIT card authorization engine for crypto-to-fiat transactions. Card swipe triggers escrow authorization, Solana blockchain verification, and fiat settlement via Marqeta. Structured as a TypeScript monorepo with semantic versioning and automated CI/CD.",
    role: "Personal project",
    tags: ["TypeScript", "Solana RPC", "Stripe", "Marqeta", "Node.js"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section border-t border-border">
      <p className="section-label">// projects</p>
      <h2 className="section-heading">Things I&apos;ve built</h2>
      <p className="text-muted -mt-6 mb-10 max-w-xl leading-relaxed text-sm">
        Full-stack from database schema to production deployment.
      </p>
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((p) => (
          <div key={p.name} className="card flex flex-col">
            <div className="flex items-start justify-between gap-2 mb-1">
              <a href={p.url} target="_blank" rel="noopener" className="text-base font-semibold text-text hover:text-accent transition-colors">
                {p.name}
              </a>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-muted shrink-0 mt-1">
                <path d="M7 17 17 7M7 7h10v10"/>
              </svg>
            </div>
            <p className="font-mono text-xs text-muted mb-3">{p.subtitle}</p>
            <p className="text-sm text-muted leading-relaxed mb-4 flex-1">{p.description}</p>
            <div className="flex flex-wrap gap-2 mt-auto">
              {p.tags.map((t) => <span key={t} className="tag">{t}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
