import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './addons/index.css'
import './addons/main.css'
import Navbar from './components/Navbar.jsx'
import MainPage from './components/MainPage.jsx'
import ServiceSection from './components/ServiceSection.jsx'
import FormContact from './components/FormContact.jsx'
import Footer from './components/Footer.jsx'
import OpinionesClientes from './components/OpinionesClientes.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>    
    <Navbar />
    <MainPage />
    <ServiceSection />
    <section id="nosotros" class="py-20 bg-white">
        <div class="container mx-auto px-6">
            <div class="grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 class="text-4xl font-bold text-gray-800 mb-6">¿Por qué elegirnos?</h2>
                    <p class="text-lg text-gray-600 mb-8">
                        Somos un equipo de abogados especializados en derecho laboral con más de 5 años de experiencia 
                        defendiendo los derechos de los trabajadores.
                    </p>
                    <div class="space-y-6">
                        <div class="flex items-start space-x-4">
                            <div class="bg-blue-100 rounded-full p-2 mt-1">
                                <svg class="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                </svg>
                            </div>
                            <div>
                                <h4 class="font-semibold text-gray-800">Experiencia Comprobada</h4>
                                <p class="text-gray-600">Más de 200 casos exitosos en derecho laboral</p>
                            </div>
                        </div>
                        <div class="flex items-start space-x-4">
                            <div class="bg-blue-100 rounded-full p-2 mt-1">
                                <svg class="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                </svg>
                            </div>
                            <div>
                                <h4 class="font-semibold text-gray-800">Atención Personalizada</h4>
                                <p class="text-gray-600">Cada caso recibe atención individual y dedicada</p>
                            </div>
                        </div>
                        <div class="flex items-start space-x-4">
                            <div class="bg-blue-100 rounded-full p-2 mt-1">
                                <svg class="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                </svg>
                            </div>
                            <div>
                                <h4 class="font-semibold text-gray-800">Sin Costos Ocultos</h4>
                                <p class="text-gray-600">Lo pactado se firma en contrato para su seguridad y fiabilidad.</p>
                            </div>                            
                        </div>
                    </div>
                </div>
                <div class="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8">
                    <div class="grid grid-cols-2 gap-6 text-center">
                        <div>
                            <div class="text-3xl font-bold text-blue-600 mb-2">5+</div>
                            <div class="text-gray-600">Años de experiencia</div>
                        </div>
                        <div>
                            <div class="text-3xl font-bold text-blue-600 mb-2">200+</div>
                            <div class="text-gray-600">Casos exitosos</div>
                        </div>
                        <div>
                            <div class="text-3xl font-bold text-blue-600 mb-2">95%</div>
                            <div class="text-gray-600">Tasa de éxito</div>
                        </div>
                        <div>
                            <div class="text-3xl font-bold text-blue-600 mb-2">24/7</div>
                            <div class="text-gray-600">Atención disponible</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <OpinionesClientes />
    <FormContact />    
    <Footer />
  </StrictMode>,
)
