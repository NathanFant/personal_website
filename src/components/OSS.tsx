const contributions = [
  {
    repo: "OpenClaw",
    url: "https://github.com/openclaw/openclaw",
    period: "Feb 2026 – present",
    description: "TypeScript/Node.js CLI tool · ~130 tests · GitHub Actions CI",
    bullets: [
      "Diagnosed and fixed a Windows-flaky CI test caused by a timing-sensitive yieldMs dependency — test now passes consistently cross-platform",
      "Fixed false-positive gateway conflict detection: scanner incorrectly flagged macOS app and node host as competing gateways — added constants + ignore-list with 2 regression tests (134 total pass)",
      "Fixed UTC timestamp display bug in gateway console — replaced inline toISOString() calls with existing helper; added integration test, 45 logging tests pass",
      "Fixed macOS uninstall leaving orphaned LaunchAgent plist — added bootoutLaunchAgentByLabel(), 4 unit tests covering edge cases",
    ],
    tags: ["TypeScript", "Node.js", "Vitest", "pnpm", "GitHub Actions"],
  },
  {
    repo: "Cosmos",
    url: "https://github.com/Cosmos-Find-me/cosmos-find-me",
    period: "Jan 2026 – present",
    description: "Next.js 15 / TypeScript / Supabase · 11 stars · 5 contributors",
    bullets: [
      "Built automated test user seeding via idempotent SQL migration — eliminated manual Supabase dashboard step; E2E setup reduced to a single command (289 tests passing)",
      "Reduced pre-commit hook time from several minutes → ~1.5s by introducing lint-staged; full suite still runs in CI on every PR",
      "Rewrote AI profile extraction prompt and added calculateProfileQuality() scoring (0–100) to reject generic extractions below threshold — fixed silent onboarding failures",
      "Built profile validation utility + manual entry fallback form with 24 unit tests, 0 TypeScript errors",
    ],
    tags: ["Next.js 15", "TypeScript", "Vitest", "Playwright", "Supabase", "GitHub Actions"],
  },
];

export default function OSS() {
  return (
    <section id="oss" className="section border-t border-border">
      <p className="section-label">// open source</p>
      <h2 className="section-heading">Production contributions</h2>
      <p className="text-muted -mt-6 mb-10 max-w-xl leading-relaxed text-sm">
        Contributions to real codebases — not toy projects. Every fix ships with regression tests.
      </p>
      <div className="space-y-8">
        {contributions.map((c) => (
          <div key={c.repo} className="card">
            <div className="flex items-start justify-between gap-4 mb-1">
              <a href={c.url} target="_blank" rel="noopener" className="text-lg font-semibold text-text hover:text-accent transition-colors">
                {c.repo}
              </a>
              <span className="font-mono text-xs text-muted whitespace-nowrap pt-1">{c.period}</span>
            </div>
            <p className="font-mono text-xs text-muted mb-4">{c.description}</p>
            <ul className="space-y-2 mb-5">
              {c.bullets.map((b, i) => (
                <li key={i} className="flex gap-3 text-sm text-muted leading-relaxed">
                  <span className="text-green mt-0.5 shrink-0">▸</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2">
              {c.tags.map((t) => <span key={t} className="tag">{t}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
