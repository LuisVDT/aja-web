import iconInstagram from '../assets/Instagram_Glyph_Gradient.png'
import iconFacebook from '../assets/Facebook_Logo_Primary.png'
import iconWhatsApp from '../assets/Digital_Glyph_White.png'
function Footer(){
    return(
        <>
            <footer class="bg-gray-800 text-white py-12">
                <div class="container mx-auto px-6">
                    <div class="grid md:grid-cols-3 gap-8">
                        <div>
                            <h3 class="text-2xl font-bold mb-4">⚖️ Asesores Juridicos</h3>
                            <p class="text-gray-300 mb-4">
                                Defendemos tus derechos laborales con experiencia y dedicación. 
                                Tu tranquilidad es nuestra prioridad.
                            </p>
                        </div>
                        <div>
                            <h4 class="text-lg font-semibold mb-4">Enlaces rápidos</h4>
                            <ul class="space-y-2 text-gray-300">
                                <li><a href="#inicio" class="hover:text-white transition-colors cursor-pointer">Inicio</a></li>
                                <li><a href="#servicios" class="hover:text-white transition-colors cursor-pointer">Servicios</a></li>
                                <li><a href="#nosotros" class="hover:text-white transition-colors cursor-pointer">Nosotros</a></li>
                                <li><a href="#contacto" class="hover:text-white transition-colors cursor-pointer">Contacto</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 class="text-lg font-semibold mb-4">Contacto</h4>
                            <div class="text-gray-300 space-y-2">
                                <p>📍 Av. Normalistas 248-interior 1, Colinas de La Normal, 44270 Guadalajara, Jal.</p>
                                <p>📞 +52 33 3789 5895</p>
                                <p>✉️ asesoresajajuridicos@gmail.com </p>
                                <a href="https://www.instagram.com/aja.asesores.juridicos.as?utm_source=ig_web_button_share_sheet&igsh=amVhNnNiOGd1NThl" className='flex' target="_blank">
                                    <img src={iconInstagram} className='size-5 mr-1.5' />
                                    <p>aja.asesores.juridicos.as</p>
                                </a>                        
                                <a href="https://www.facebook.com/profile.php?id=100092476071324" className='flex' target="_blank">
                                    <img src={iconFacebook} className='size-5 mr-1.5' />
                                    <p>AJA Asesores Jurídicos & Asociados</p>
                                </a> 
                            </div>
                        </div>
                    </div>
                    <div class="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
                        <p>&copy; 2024 AJA Asesores Juridicos Asociados. Todos los derechos reservados.</p>
                    </div>
                </div>
            </footer>
            <a href="https://wa.me/523329787757?text=Hola,%20necesito%20asesoría%20legal%20laboral" 
                target="_blank" 
                class="floating-whatsapp md:size-25 size-5 bg-green-500 hover:bg-green-600 text-white p-5 rounded-full shadow-lg transition-all duration-300">
                    <img src={iconWhatsApp}/>
                </a>
       </>
    )
}

export default Footer