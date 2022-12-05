import React from 'react';
import './footer.css'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='container-fluid footer'>
            <div className='row blo'>
                <div className='col-lg-4'>
                    <div className='aim'>
                     <img src="../img/logo.png" alt="" />
                    </div>
                    <div className='footext'>
                    <p className='fotext'>Diseño Dental: esta conformado por odontologos especializados en tratamientos correctivos y estéticos, preocupados por el bienestar y la salud de la sociedad mexicana, ofrecemos alternativas con tecnología de punta para garantizar la calidad de nuestro servicio.</p>
                    </div>
                </div>
                <div className='col-lg-4 direc'>
                    <p className='y'><i class="bi bi-geo-alt"></i> C. Galeana 5A, Centro, 92800 Túxpam de Rodríguez Cano, Ver.</p>
                    <p className='y'><i class="bi bi-telephone"></i> 783 690 7248</p>
                    <p className='y'><i class="bi bi-clock"></i> Lunes a Viernes 10:00am 9:00pm</p>
                    <p className='y'><i class="bi bi-envelope"></i> psic.ilsebm@gmail.com</p>

                </div>
                <div className='col-lg-4 redes' >
                    <h3>Redes Sociales</h3>
                    <div className='iconos'>
                    <a href='https://www.instagram.com/disenodentaltuxpan/'><i class="bi bi-instagram"></i></a>
                    <a href='https://www.facebook.com/disenodentaltuxpan'><i class="bi bi-facebook"></i></a>
                    <a href='https://api.whatsapp.com/send/?phone=527831350394&text&type=phone_number&app_absent=0'><i class="bi bi-whatsapp"></i></a>
                    <a href='#'><i class="bi bi-tiktok nav-link"></i></a>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Footer;
