function FormContact(){
    return(        
        <section id="contacto" class="py-20 bg-gray-50">
            <div class="container mx-auto px-6">
                <div class="text-center mb-16">
                    <h2 class="text-4xl font-bold text-gray-800 mb-4">Contáctanos</h2>
                    <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                        ¿Necesitas asesoría legal? Estamos aquí para ayudarte. La primera consulta es gratuita.
                    </p>
                </div>
                <div class="grid md:grid-cols-2 gap-12 items-center">
                    {/* Información de contacto */}
                    <div>
                        <h3 class="text-2xl font-bold text-gray-800 mb-6">Información de Contacto</h3>
                        <div class="space-y-6">
                            <div class="flex items-start space-x-4">
                                <div class="bg-blue-100 rounded-full p-3">
                                    <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                    </svg>
                                </div>
                                <div>
                                    <a href="https://maps.app.goo.gl/S6LrALcrvHcQeJ828" target="_blank">
                                    <h4 class="font-semibold text-gray-800">Dirección</h4>
                                    <p class="text-gray-600">Av. Normalistas 248-interior 1, Colinas de La Normal, 44270 Guadalajara, Jal.</p>
                                    </a>
                                </div>
                            </div>
                            <div class="flex items-start space-x-4">
                                <div class="bg-blue-100 rounded-full p-3">
                                    <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                                    </svg>
                                </div>
                                <div>
                                    <h4 class="font-semibold text-gray-800">Teléfono</h4>
                                    <p class="text-gray-600">+52 33 3789 5895</p>
                                </div>
                            </div>
                            <div class="flex items-start space-x-4">
                                <div class="bg-blue-100 rounded-full p-3">
                                    <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                    </svg>
                                </div>
                                <div>
                                    <a href="mailto:asesoresajajuridicos@gmail.com?subject=Consulta&body=Hola,%20quiero%20una%20asesoría%20sobre%20mi%20problema%20legal...">
                                    <h4 class="font-semibold text-gray-800">Email</h4>
                                    <p class="text-gray-600">asesoresajajuridicos@gmail.com</p>
                                    </a>
                                </div>
                            </div>
                            <div class="flex items-start space-x-4">
                                <div class="bg-blue-100 rounded-full p-3">
                                    <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>
                                </div>
                                <div>
                                    <h4 class="font-semibold text-gray-800">Horarios</h4>
                                    <p class="text-gray-600">Lunes a Viernes: 9:00 AM - 6:00 PM</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Formulario de contacto */}
                    <div class="bg-white rounded-xl shadow-lg p-8">
                        <h3 class="text-2xl font-bold text-gray-800 mb-6"> Cuéntanos tu situación y con gusto te ayudamos.</h3>
                        <form id="contact-form" class="space-y-6">
                            <div class="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label for="nombre" class="block text-sm font-medium text-gray-700 mb-2">Nombre completo</label>
                                    <input type="text" id="nombre" name="nombre" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"/>
                                </div>
                                <div>
                                    <label for="telefono" class="block text-sm font-medium text-gray-700 mb-2">Teléfono</label>
                                    <input type="tel" id="telefono" name="telefono" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"/>
                                </div>
                            </div>
                            <div>
                                <label for="email" class="block text-sm font-medium text-gray-700 mb-2">Email</label>
                                <input type="email" id="email" name="email" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"/>
                            </div>
                            <div>
                                <label for="asunto" class="block text-sm font-medium text-gray-700 mb-2">Tipo de consulta</label>
                                <select id="asunto" name="asunto" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                                    <option value="">Selecciona una opción</option>
                                    <option value="despido">Despido injustificado</option>
                                    <option value="salarios">Reclamación de salarios</option>
                                    <option value="acoso">Acoso laboral</option>
                                    <option value="otro">Otro</option>
                                </select>
                            </div>
                            <div>
                                <label for="mensaje" class="block text-sm font-medium text-gray-700 mb-2">Mensaje</label>
                                <textarea id="mensaje" name="mensaje" rows="4" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Cuéntanos brevemente tu situación..."></textarea>
                            </div>
                            <button type="submit" class="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                                Enviar mensaje
                            </button>
                        </form>
                        <div id="form-message" class="mt-4 p-4 rounded-lg hidden"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FormContact