export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-bg/80 backdrop-blur-sm">
      <div className="max-w-3xl mx-auto px-6 h-14 flex items-center justify-between">
        <span className="font-mono text-sm text-accent">nathanfant</span>
        <div className="flex items-center gap-6 font-mono text-sm text-muted">
          <a href="#oss" className="hover:text-text transition-colors">oss</a>
          <a href="#projects" className="hover:text-text transition-colors">projects</a>
          <a href="#skills" className="hover:text-text transition-colors">skills</a>
          <a href="#contact" className="hover:text-text transition-colors">contact</a>
        </div>
      </div>
    </nav>
  );
}
