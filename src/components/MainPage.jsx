function MainPage(){
    return(
        <>
            {/* informacion general */}
            <section id="inicio" class="bg-[rgba(7,11,58,255)] text-white min-h-screen flex items-center pt-40 pb-10 md:pb-0 md:pt-0">
                <div class="container mx-auto px-6">
                    <div class="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h1 class="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                                Expertos en <span class="text-yellow-300">Derecho Laboral</span>
                            </h1>
                            <p class="text-xl mb-8 text-blue-100">
                                Protegemos tus derechos laborales con más de 15 años de experiencia. 
                                Asesoría especializada, resultados garantizados.
                            </p>
                            <div class="flex flex-col sm:flex-row gap-4">
                                <a href="#contacto" class="bg-yellow-400 text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-300 transition-colors text-center cursor-pointer">
                                    Consulta Gratuita
                                </a>
                                <a href="#servicios" class="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors text-center cursor-pointer">
                                    Ver Servicios
                                </a>
                            </div>
                        </div>
                        <div class="text-center">
                            <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                                <div class="text-6xl mb-4">⚖️</div>
                                <h3 class="text-2xl font-bold mb-4">Casos Ganados</h3>
                                <div class="text-4xl font-bold text-yellow-300 mb-2">95%</div>
                                <p class="text-blue-100">Tasa de éxito en nuestros casos</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Sección Servicios */}
            <section id="servicios" class="py-20 bg-gray-50">
                <div class="container mx-auto px-6">
                    <div class="text-center mb-16">
                        <h2 class="text-4xl font-bold text-gray-800 mb-4">Nuestros Servicios</h2>
                        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                            Ofrecemos asesoría integral en todas las áreas del derecho laboral
                        </p>
                    </div>
                    <div class="grid md:grid-cols-3 gap-8">
                        <div class="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                            <div class="text-4xl mb-4">📋</div>
                            <h3 class="text-2xl font-bold mb-4 text-gray-800">Despidos Injustificados</h3>
                            <p class="text-gray-600 mb-6">
                                Te ayudamos a recuperar tus derechos ante despidos improcedentes y reclamar las indemnizaciones correspondientes.
                            </p>
                            <ul class="text-sm text-gray-500 space-y-2">
                                <li>✓ Análisis del caso</li>
                                <li>✓ Cálculo de indemnizaciones</li>
                                <li>✓ Representación legal</li>
                            </ul>
                        </div>
                        <div class="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                            <div class="text-4xl mb-4">💰</div>
                            <h3 class="text-2xl font-bold mb-4 text-gray-800">Reclamación de Salarios</h3>
                            <p class="text-gray-600 mb-6">
                                Recuperamos salarios impagos, horas extras, vacaciones y prestaciones laborales que te corresponden.
                            </p>
                            <ul class="text-sm text-gray-500 space-y-2">
                                <li>✓ Salarios atrasados</li>
                                <li>✓ Horas extras</li>
                                <li>✓ Prestaciones sociales</li>
                            </ul>
                        </div>
                        <div class="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                            <div class="text-4xl mb-4">🛡️</div>
                            <h3 class="text-2xl font-bold mb-4 text-gray-800">Acoso Laboral</h3>
                            <p class="text-gray-600 mb-6">
                                Defendemos tu dignidad en el trabajo y te ayudamos a enfrentar situaciones de acoso o discriminación.
                            </p>
                            <ul class="text-sm text-gray-500 space-y-2">
                                <li>✓ Asesoría confidencial</li>
                                <li>✓ Recopilación de pruebas</li>
                                <li>✓ Proceso legal completo</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default MainPage