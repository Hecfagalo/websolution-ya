import '@fortawesome/fontawesome-free/css/all.css';
import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-800 via-blue-700 to-blue-800">
      {/* Header Premium */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 shadow-lg border-b border-emerald-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-800 to-emerald-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">WS</span>
              </div>
              <div className="font-bold text-2xl bg-gradient-to-r from-blue-800 to-emerald-600 bg-clip-text text-transparent">
                Websdeleje
              </div>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              <a href="#inicio" className="text-gray-700 hover:text-emerald-600 font-medium transition-all duration-300 hover:scale-105">Inicio</a>
              <a href="#servicios" className="text-gray-700 hover:text-emerald-600 font-medium transition-all duration-300 hover:scale-105">Servicios</a>
              <a href="#tecnologias" className="text-gray-700 hover:text-emerald-600 font-medium transition-all duration-300 hover:scale-105">Tecnologías</a>
              <a href="#testimonios" className="text-gray-700 hover:text-emerald-600 font-medium transition-all duration-300 hover:scale-105">Testimonios</a>
              <a href="#contacto" className="text-gray-700 hover:text-emerald-600 font-medium transition-all duration-300 hover:scale-105">Contacto</a>
            </nav>
            
            <a href="#contacto" className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Cotización Gratuita
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section Premium */}
      <section id="inicio" className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-blue-800/30"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-emerald-400/20 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-8 border border-emerald-300/30">
              <span className="w-2 h-2 bg-emerald-400 rounded-full mr-2 animate-pulse"></span>
              🚀 Transformamos ideas en realidad digital
            </div>
            
            {/* Título Principal */}
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="block">Desarrollo Web</span>
              <span className="bg-gradient-to-r from-emerald-400 to-orange-400 bg-clip-text text-transparent">
                Para Emprendedores
              </span>
            </h1>
            
            {/* Subtítulo */}
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto mb-12 leading-relaxed">
              Creamos <span className="text-emerald-400 font-semibold">páginas web profesionales</span> que impulsan tu negocio. 
              Desde landing pages hasta tiendas online completas, con diseños modernos y tecnología de vanguardia.
            </p>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <a href="#contacto" className="group bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
                <span className="flex items-center">
                  Comenzar Proyecto
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5-5 5M6 12h12" />
                  </svg>
                </span>
              </a>
              
              <a href="#servicios" className="group border-2 border-white/30 text-white px-8 py-4 rounded-xl font-bold text-lg backdrop-blur-sm hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
                Ver Servicios
              </a>
            </div>
            
            {/* Estadísticas */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-emerald-400 mb-2">50+</div>
                <div className="text-white/80 text-sm">Proyectos Exitosos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-emerald-400 mb-2">24h</div>
                <div className="text-white/80 text-sm">Tiempo de Respuesta</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-emerald-400 mb-2">100%</div>
                <div className="text-white/80 text-sm">Satisfacción</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-emerald-400 mb-2">7d</div>
                <div className="text-white/80 text-sm">Entrega Rápida</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Servicios Premium */}
      <section id="servicios" className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-emerald-50 to-transparent opacity-50"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-emerald-100 rounded-full text-emerald-700 text-sm font-medium mb-4">
              💼 Servicios Profesionales
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Soluciones Web <span className="text-emerald-600">Completas</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Desde la conceptualización hasta el lanzamiento, te acompañamos en cada paso del desarrollo de tu presencia digital.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Servicio 1 */}
            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 hover:border-emerald-200">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-800 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-emerald-600 transition-colors">Landing Pages</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Páginas de aterrizaje optimizadas para conversión. Diseños modernos que capturan la atención y generan resultados.
              </p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></span>
                  Diseño responsive
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></span>
                  SEO optimizada
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></span>
                  Formularios integrados
                </li>
              </ul>
            </div>

            {/* Servicio 2 */}
            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 hover:border-emerald-200">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-600 to-orange-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-emerald-600 transition-colors">E-commerce</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Tiendas online completas con carrito de compras, pagos seguros y gestión de inventario. Tu negocio disponible 24/7.
              </p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></span>
                  Pagos integrados
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></span>
                  Panel administrativo
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></span>
                  Gestión de productos
                </li>
              </ul>
            </div>

            {/* Servicio 3 */}
            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 hover:border-emerald-200">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-600 to-blue-800 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-emerald-600 transition-colors">Sitios Corporativos</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Presencia profesional online para tu empresa. Sitios web institucionales que transmiten confianza y credibilidad.
              </p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></span>
                  Múltiples secciones
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></span>
                  Blog integrado
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></span>
                  Formularios de contacto
                </li>
              </ul>
            </div>

            {/* Servicio 4 */}
            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 hover:border-emerald-200">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-800 to-orange-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-emerald-600 transition-colors">Optimización SEO</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Mejoramos el posicionamiento de tu sitio web en Google. Más visibilidad significa más clientes potenciales.
              </p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></span>
                  Análisis de keywords
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></span>
                  Optimización técnica
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></span>
                  Reportes mensuales
                </li>
              </ul>
            </div>

            {/* Servicio 5 */}
            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 hover:border-emerald-200">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-600 to-blue-800 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-emerald-600 transition-colors">Mantenimiento</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Mantenemos tu sitio web actualizado y seguro. Actualizaciones, backups y soporte técnico continuo.
              </p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></span>
                  Backups automáticos
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></span>
                  Actualizaciones de seguridad
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></span>
                  Soporte 24/7
                </li>
              </ul>
            </div>

            {/* Servicio 6 */}
            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 hover:border-emerald-200">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-600 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-emerald-600 transition-colors">Análisis y Métricas</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Implementamos herramientas de análisis para medir el rendimiento y optimizar la conversión de tu sitio web.
              </p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></span>
                  Google Analytics
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></span>
                  Mapas de calor
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></span>
                  Reportes detallados
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Tecnologías Section */}
      <section id="tecnologias" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-800 text-sm font-medium mb-4">
              ⚡ Tecnología de Vanguardia
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              <span className="text-blue-800">Tecnologías</span> Modernas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Utilizamos las herramientas más avanzadas del mercado para garantizar sitios web rápidos, seguros y escalables.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {/* React */}
            <div className="group text-center">
              <div className="w-20 h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center mx-auto mb-4 group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">R</span>
                </div>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">React</h3>
              <p className="text-sm text-gray-600">Framework JavaScript</p>
            </div>

            {/* Node.js */}
            <div className="group text-center">
              <div className="w-20 h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center mx-auto mb-4 group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">N</span>
                </div>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Node.js</h3>
              <p className="text-sm text-gray-600">Backend JavaScript</p>
            </div>

            {/* MongoDB */}
            <div className="group text-center">
              <div className="w-20 h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center mx-auto mb-4 group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">M</span>
                </div>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">MongoDB</h3>
              <p className="text-sm text-gray-600">Base de datos NoSQL</p>
            </div>

            {/* Tailwind */}
            <div className="group text-center">
              <div className="w-20 h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center mx-auto mb-4 group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-teal-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">T</span>
                </div>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Tailwind</h3>
              <p className="text-sm text-gray-600">CSS Framework</p>
            </div>

            {/* Firebase */}
            <div className="group text-center">
              <div className="w-20 h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center mx-auto mb-4 group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-yellow-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">F</span>
                </div>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Firebase</h3>
              <p className="text-sm text-gray-600">Backend as a Service</p>
            </div>

            {/* Next.js */}
            <div className="group text-center">
              <div className="w-20 h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center mx-auto mb-4 group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-r from-gray-700 to-gray-900 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">N</span>
                </div>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Next.js</h3>
              <p className="text-sm text-gray-600">React Framework</p>
            </div>
          </div>

          {/* Ventajas */}
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-800 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Velocidad Optimizada</h3>
              <p className="text-gray-600">Sitios web ultrarrápidos que cargan en menos de 3 segundos</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-600 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Máxima Seguridad</h3>
              <p className="text-gray-600">Implementamos las mejores prácticas de seguridad web</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-600 to-blue-800 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Escalabilidad</h3>
              <p className="text-gray-600">Arquitectura preparada para crecer con tu negocio</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section id="testimonios" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-emerald-100 rounded-full text-emerald-700 text-sm font-medium mb-4">
              💬 Lo que dicen nuestros clientes
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Testimonios <span className="text-emerald-600">Reales</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              La satisfacción de nuestros clientes es nuestra mejor carta de presentación. Conoce sus experiencias trabajando con nosotros.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonio 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-800 to-emerald-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">MC</span>
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-gray-900">María Castrillón</h4>
                  <p className="text-gray-600 text-sm">Fundadora de BellezaNatural</p>
                </div>
              </div>
              <div className="flex text-orange-400 mb-4">
                <span>⭐⭐⭐⭐⭐</span>
              </div>
              <p className="text-gray-600 italic">
                "Increíble trabajo en mi tienda online. Las ventas aumentaron un 300% en el primer mes. El equipo fue muy profesional y cumplió todos los plazos."
              </p>
            </div>

            {/* Testimonio 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-600 to-orange-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">JR</span>
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-gray-900">Jorge Rodríguez</h4>
                  <p className="text-gray-600 text-sm">CEO de TechSolutions</p>
                </div>
              </div>
              <div className="flex text-orange-400 mb-4">
                <span>⭐⭐⭐⭐⭐</span>
              </div>
              <p className="text-gray-600 italic">
                "La landing page superó todas mis expectativas. El diseño es elegante y las conversiones han mejorado significativamente. Totalmente recomendado."
              </p>
            </div>

            {/* Testimonio 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-600 to-blue-800 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">AS</span>
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-gray-900">Ana Silva</h4>
                  <p className="text-gray-600 text-sm">Directora de Marketing</p>
                </div>
              </div>
              <div className="flex text-orange-400 mb-4">
                <span>⭐⭐⭐⭐⭐</span>
              </div>
              <p className="text-gray-600 italic">
                "Excelente comunicación durante todo el proyecto. Entendieron perfectamente lo que necesitábamos y lo ejecutaron de manera impecable."
              </p>
            </div>
          </div>

          {/* CTA Testimonios */}
          <div className="text-center mt-12">
            <a href="#contacto" className="inline-flex items-center bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Únete a Nuestros Clientes Satisfechos
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5-5 5M6 12h12" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="py-20 bg-gradient-to-r from-blue-800 to-emerald-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-4">
              📞 Hablemos de tu proyecto
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              ¿Listo para <span className="text-orange-300">Comenzar?</span>
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Cuéntanos sobre tu proyecto y te enviaremos una propuesta personalizada en menos de 24 horas.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Formulario */}
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">Solicita tu Cotización Gratuita</h3>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white/90 text-sm font-medium mb-2">Nombre</label>
                    <input type="text" className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/60 focus:border-orange-300 focus:outline-none transition-colors" placeholder="Tu nombre completo" />
                  </div>
                  <div>
                    <label className="block text-white/90 text-sm font-medium mb-2">Email</label>
                    <input type="email" className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/60 focus:border-orange-300 focus:outline-none transition-colors" placeholder="tu@email.com" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-white/90 text-sm font-medium mb-2">Teléfono</label>
                  <input type="tel" className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/60 focus:border-orange-300 focus:outline-none transition-colors" placeholder="+52 123 456 7890" />
                </div>

                <div>
                  <label className="block text-white/90 text-sm font-medium mb-2">Tipo de Proyecto</label>
                  <select className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:border-orange-300 focus:outline-none transition-colors">
                    <option value="" className="text-gray-800">Selecciona una opción</option>
                    <option value="landing" className="text-gray-800">Landing Page</option>
                    <option value="ecommerce" className="text-gray-800">Tienda Online</option>
                    <option value="corporativo" className="text-gray-800">Sitio Corporativo</option>
                    <option value="optimizacion" className="text-gray-800">Optimización SEO</option>
                    <option value="mantenimiento" className="text-gray-800">Mantenimiento</option>
                    <option value="otro" className="text-gray-800">Otro</option>
                  </select>
                </div>

                <div>
                  <label className="block text-white/90 text-sm font-medium mb-2">Cuéntanos sobre tu proyecto</label>
                  <textarea rows={4} className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/60 focus:border-orange-300 focus:outline-none transition-colors resize-none" placeholder="Describe tu idea, objetivos y cualquier detalle importante..."></textarea>
                </div>

                <button type="submit" className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  Enviar Solicitud 🚀
                </button>
              </form>
            </div>

            {/* Información de contacto */}
            <div className="text-white">
              <h3 className="text-3xl font-bold mb-8">¿Prefieres contactarnos directamente?</h3>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mr-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-white/80">hola@websolution.com</div>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mr-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold">Teléfono</div>
                    <div className="text-white/80">+52 123 456 7890</div>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mr-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold">WhatsApp</div>
                    <div className="text-white/80">Mensaje directo 24/7</div>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mr-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold">Tiempo de Respuesta</div>
                    <div className="text-white/80">Menos de 24 horas</div>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl mt-8">
                <h4 className="font-bold text-lg mb-3">¿Por qué elegirnos?</h4>
                <ul className="space-y-2 text-white/90">
                  <li>✅ +5 años de experiencia</li>
                  <li>✅ +50 proyectos exitosos</li>
                  <li>✅ Garantía de satisfacción</li>
                  <li>✅ Soporte post-lanzamiento</li>
                  <li>✅ Precios competitivos</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-800 to-emerald-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">WS</span>
                </div>
                <div className="font-bold text-2xl">WebSolution</div>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                Transformamos ideas en experiencias digitales excepcionales. Especializados en desarrollo web para emprendedores que buscan destacar en el mundo digital.
              </p>
              <div className="flex space-x-4">
  {/* Instagram */}
  <a href="#" className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-pink-600 transition-colors">
    <i className="fab fa-instagram text-white" style={{fontSize: '28px', textRendering: 'optimizeLegibility', WebkitFontSmoothing: 'antialiased'}}></i>
  </a>
  {/* WhatsApp */}
  <a href="https://wa.me/+573223920828" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-green-600 transition-colors">
    <i className="fab fa-whatsapp text-white" style={{fontSize: '28px', textRendering: 'optimizeLegibility', WebkitFontSmoothing: 'antialiased'}}></i>
  </a>
</div>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-6">Servicios</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#servicios" className="hover:text-emerald-400 transition-colors">Landing Pages</a></li>
                <li><a href="#servicios" className="hover:text-emerald-400 transition-colors">E-commerce</a></li>
                <li><a href="#servicios" className="hover:text-emerald-400 transition-colors">Sitios Corporativos</a></li>
                <li><a href="#servicios" className="hover:text-emerald-400 transition-colors">SEO & Marketing</a></li>
                <li><a href="#servicios" className="hover:text-emerald-400 transition-colors">Mantenimiento</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-6">Contacto</h4>
              <ul className="space-y-3 text-gray-400">
                <li>📧 hola@websolution.com</li>
                <li>📱 +52 123 456 7890</li>
                <li>💬 WhatsApp disponible</li>
                <li>⚡ Respuesta en 24h</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 WebSolution. Todos los derechos reservados. Desarrollado con ❤️ para emprendedores.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;