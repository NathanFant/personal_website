const GitHubIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/>
  </svg>
);

const ExternalLinkIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path d="M7 17 17 7M7 7h10v10"/>
  </svg>
);

const projects = [
  {
    name: "CarCheck",
    liveUrl: "https://carcheck-nathanfants-projects.vercel.app/",
    githubUrl: "https://github.com/NathanFant/vehicle-information",
    subtitle: "Vehicle history lookup · Live",
    description:
      "Look up ownership transfer history for any vehicle by VIN or license plate. Surfaces title changes and registration events via third-party data APIs. Expanding toward accident reports, title status, and full vehicle specs as additional API partnerships are established.",
    role: "Personal project",
    tags: ["Next.js", "Vehicle API", "VIN Lookup", "Vercel"],
  },
  {
    name: "Trading Bot",
    liveUrl: "https://nathantrading.vercel.app",
    githubUrl: "https://github.com/NathanFant/trading_bot",
    subtitle: "Crypto trading automation · Live",
    description:
      "Automated cryptocurrency trading bot with algorithmic signal generation. Executes trades based on configured strategies and market indicators, with a web dashboard to monitor positions, performance, and bot status.",
    role: "Personal project",
    tags: ["Python", "Crypto", "Algorithmic Trading", "Vercel"],
  },
  {
    name: "Trades.io",
    githubUrl: "https://github.com/NathanFant/trades-io",
    subtitle: "Job marketplace MVP · Hack Reactor capstone",
    description:
      "Led a 4-person team from requirements through containerized production deployment. Built the FastAPI backend with authentication, email delivery, payment integration, and paginated search. CI/CD via GitHub Actions; Docker Compose for local and production environments.",
    role: "Lead Developer (team of 4)",
    tags: ["React", "FastAPI", "PostgreSQL", "Docker", "GitHub Actions"],
  },
  {
    name: "SolCard",
    githubUrl: "https://github.com/NathanFant/solcard",
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
              <a
                href={p.liveUrl ?? p.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-base font-semibold text-text hover:text-accent transition-colors"
              >
                {p.name}
              </a>
              <div className="flex items-center gap-2 shrink-0 mt-1 text-muted">
                {p.liveUrl && (
                  <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors" aria-label="Live demo">
                    <ExternalLinkIcon />
                  </a>
                )}
                {p.githubUrl && (
                  <a href={p.githubUrl} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors" aria-label="GitHub repo">
                    <GitHubIcon />
                  </a>
                )}
              </div>
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
