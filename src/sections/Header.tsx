export const Header = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return <div className="flex justify-center items-center fixed top-3 w-full z-20">
    <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
      <a href="#hero" onClick={(e) => scrollToSection(e, 'hero')} className="nav-item">Home</a>
      <a href="#projects" onClick={(e) => scrollToSection(e, 'projects')} className="nav-item">Projects</a>
      <a href="#about" onClick={(e) => scrollToSection(e, 'footer')} className="nav-item">About</a>
      <a href="https://forms.gle/8XiTzjHPgaDq6MDp7" className="nav-item">Sign Up</a>
    </nav>
  </div>;
};
