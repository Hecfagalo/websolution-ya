export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <a href="#hero" className="text-xl font-bold text-primary">WebSolution</a>
        <div className="space-x-6 hidden sm:flex">
          <a href="#servicios" className="hover:text-primary">Servicios</a>
          <a href="#nosotros" className="hover:text-primary">Nosotros</a>
          <a href="#testimonios" className="hover:text-primary">Testimonios</a>
          <a href="#contacto" className="hover:text-primary">Contacto</a>
        </div>
      </div>
    </nav>
  );
}
