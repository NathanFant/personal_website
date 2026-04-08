export default function Contact() {
  return (
    <section id="contact" className="section border-t border-border">
      <p className="section-label">// contact</p>
      <h2 className="section-heading">Get in touch</h2>
      <p className="text-muted mb-8 max-w-md leading-relaxed">
        Open to full-stack and QE/SDET roles at startups and growth-stage companies.
        I&apos;m comfortable owning features end-to-end or embedded in a team focused on quality and reliability.
        Remote-friendly. Based in Benton, AR.
      </p>
      <div className="flex flex-col gap-3 font-mono text-sm">
        <a href="mailto:nfant01@gmail.com" className="flex items-center gap-3 text-muted hover:text-text transition-colors group">
          <span className="text-accent">→</span>
          <span>nfant01@gmail.com</span>
        </a>
        <a href="https://github.com/NathanFant" target="_blank" rel="noopener" className="flex items-center gap-3 text-muted hover:text-text transition-colors">
          <span className="text-accent">→</span>
          <span>github.com/NathanFant</span>
        </a>
        <a href="https://linkedin.com/in/nathanfant" target="_blank" rel="noopener" className="flex items-center gap-3 text-muted hover:text-text transition-colors">
          <span className="text-accent">→</span>
          <span>linkedin.com/in/nathanfant</span>
        </a>
      </div>
      <p className="font-mono text-xs text-muted mt-16">
        Nathan Fant · {new Date().getFullYear()}
      </p>
    </section>
  );
}
