const groups = [
  {
    label: "Testing",
    items: ["Playwright", "Vitest", "TDD", "Flaky test diagnosis", "CI pipeline auditing", "Test infrastructure"],
  },
  {
    label: "Languages",
    items: ["TypeScript", "Python", "JavaScript", "SQL"],
  },
  {
    label: "Frontend",
    items: ["React", "Next.js 15", "Tailwind CSS"],
  },
  {
    label: "Backend",
    items: ["Node.js", "FastAPI", "PostgreSQL", "Supabase", "REST APIs"],
  },
  {
    label: "DevOps",
    items: ["GitHub Actions", "Docker", "lint-staged", "pnpm", "semantic versioning"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section border-t border-border">
      <p className="section-label">// skills</p>
      <h2 className="section-heading">Stack</h2>
      <div className="space-y-6">
        {groups.map((g) => (
          <div key={g.label} className="flex gap-6 items-baseline">
            <span className="font-mono text-xs text-muted w-24 shrink-0">{g.label}</span>
            <div className="flex flex-wrap gap-2">
              {g.items.map((item) => <span key={item} className="tag">{item}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
