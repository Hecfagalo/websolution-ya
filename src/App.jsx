import React from 'react'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header/Navigation */}
      <header className="fixed top-0 w-full bg-blue-900 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-3xl text-yellow-400">
              WebSolutions
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#inicio" className="border-2 border-yellow-400 text-white px-4 py-2 rounded-lg hover:bg-yellow-400 hover:text-blue-900">Inicio</a>
              <a href="#servicios" className="border-2 border-yellow-400 text-white px-4 py-2 rounded-lg hover:bg-yellow-400 hover:text-blue-900">Servicios</a>
              <a href="#como-funciona" className="border-2 border-yellow-400 text-white px-4 py-2 rounded-lg hover:bg-yellow-400 hover:text-blue-900">Proceso</a>
              <a href="#contacto" className="border-2 border-yellow-400 text-white px-4 py-2 rounded-lg hover:bg-yellow-400 hover:text-blue-900">Contacto</a>
            </nav>
            <a href="#contacto" className="btn-primary text-white px-6 py-2 rounded-lg font-medium">
              Contactar
            </a>
          </div>
        </div>
      </header>
      {/* Hero Section */}
      <section id="inicio" className="pt-32 pb-24 hero-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
              Páginas Web que 
              <span className="text-yellow-500"> Generan Ventas</span>
            </h1>
            <p className="text-2xl text-gray-600 mb-10 max-w-4xl mx-auto leading-relaxed">
              Transforma tu negocio con una página web profesional que trabaja 24/7 para conseguirte clientes. 
              <span className="font-semibold text-gray-800">Sin complicaciones técnicas.</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a href="#contacto" className="bg-yellow-400 text-blue-900 px-10 py-5 rounded-lg font-bold text-xl hover:bg-yellow-300 transition-colors shadow-lg">
              Solicitar Cotización Gratuita
              </a>
              <a href="#servicios" className="border-2 border-yellow-400 text-yellow-500 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-400 hover:text-blue-900 transition-colors">
              Ver Servicios
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section id="servicios" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Soluciones Web que <span className="text-yellow-500">
                Impulsan Ventas</span>
                </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Elige la solución perfecta para tu negocio. Desde páginas simples hasta sitios 
              completos que convierten visitantes en clientes reales.
              </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="card-hover bg-white p-10 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 
                  2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Página de Ventas</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Una página diseñada específicamente para vender tu producto o servicio. <span className="font-semibold">Perfecta para empezar a generar ingresos online.</span>
                </p>
              <div className="text-2xl font-bold text-blue-900 mb-2">Desde $299</div>
              <div className="text-sm text-gray-500">Entrega: 3-5 días</div>
            </div>

            <div className="card-hover bg-white p-8 rounded-xl shadow-sm border-2 border-yellow-400">
              <div className="text-xs font-semibold text-blue-900 bg-yellow-100 px-3 py-1 rounded-full mb-4 inline-block">
                MÁS POPULAR
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Sitio Web Profesional</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Sitio completo que establece tu autoridad en el mercado. 
                <span className="font-semibold">Incluye todo lo necesario para hacer crecer 
                  tu negocio online.</span>
                  </p>
              <div className="text-2xl font-bold text-green-600 mb-2">Desde $799</div>
              <div className="text-sm text-gray-500">Entrega: 1-2 semanas</div>
            </div>

            <div className="card-hover bg-white p-8 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Más Visibilidad Online</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Aparece en la primera página de Google y acelera tu sitio web. <span className="font-semibold">Convierte búsquedas en ventas automáticamente.</span>
                </p>
              <div className="text-2xl font-bold text-purple-600 mb-2">Desde $499</div>
              <div className="text-sm text-gray-500">Entrega: 5-7 días</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-28 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            ¿Listo para <span className="text-yellow-400">Multiplicar tus Ventas</span>?
            </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            No dejes que tus competidores te superen. Obtén una cotización gratuita hoy mismo.
          </p>
          <a href="#contacto" className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-300 transition-colors">
            Solicitar Cotización Gratuita
          </a>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              ¿Listo para <span className="text-yellow-500">Empezar?</span>
              </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Obtén una cotización gratuita en 24 horas. Te explico exactamente cómo tu nueva página web va a generar más ventas.
              </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-12">
            <form className="grid md:grid-cols-2 gap-8">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nombre *
                </label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400"
                  placeholder="Tu nombre completo"
                />
              </div>              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400"
                  placeholder="tu@email.com"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Cuéntame sobre tu proyecto
                </label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400"
                  placeholder="Describe tu negocio, qué necesitas y cualquier detalle importante..."
                ></textarea>
              </div>

              <div className="md:col-span-2">
                <button 
                  type="submit" 
                  className="w-full bg-yellow-400 text-blue-900 px-8 py-5 rounded-lg font-bold text-xl hover:bg-yellow-300 transition-colors shadow-lg"
                  >
                  Enviar Solicitud de Cotización
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App