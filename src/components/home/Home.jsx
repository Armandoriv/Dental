import React from 'react';
import './home.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Carousell from './Carousell';
import { Link } from 'react-router-dom';
AOS.init();

const Home = () => {
    return (
        <>
        <section className='landing'>
            <div className='land'>
            <h1 className='land' data-aos="fade-down" data-aos-once="true" data-aos-duration="1000" data-aos-delay="500">¡Bienvenido!</h1>
                <h2 className='land1 mt-3' data-aos="fade-up" data-aos-once="true" data-aos-duration="1000" data-aos-delay="1500">Tu sonrisa es nuestra prioridad</h2>
                <img className='lande mt-3' src="../img/logoletra.png" alt="" data-aos="fade-in" data-aos-once="true" data-aos-duration="1000" data-aos-delay="3000"/>
            </div>
        </section>
        <section className='calidad'>
            <div className='row contall'>
                <p className='titucont' data-aos="fade-down" data-aos-once="true" data-aos-duration="1000">En diseño dental contamos con:</p>
                <div className='cont col-lg-3 col-md-6' data-aos="fade-up" data-aos-once="true" data-aos-duration="1250">
                    <div className='logocont'>
                        <img className='loguitos' src="../img/doctor.png" alt="" />
                    </div>
                    <div className='textcont'>
                        <p className='pe'>Doctores amables</p>
                    </div>

                </div>
                <div className='cont col-lg-3 col-md-6' data-aos="fade-up" data-aos-once="true" data-aos-duration="1750">
                    <div className='logocont'>
                        <img className='loguitos' src="../img/garantizado.png" alt="" />
                    </div>
                    <div className='textcont'>
                        <p className='pe'>Satisfacción garantizada</p>
                    </div>

                </div>
                <div className='cont col-lg-3 col-md-6' data-aos="fade-up" data-aos-once="true" data-aos-duration="2250">
                    <div className='logocont'>
                        <img className='loguitos' src="../img/silla.png" alt="" />
                    </div>
                    <div className='textcont'>
                        <p className='pe'>Cómodas instalaciones</p>
                    </div>

                </div>
                <div className='cont col-lg-3 col-md-6' data-aos="fade-up" data-aos-once="true" data-aos-duration="2750">
                    <div className='logocont'>
                        <img className='loguitos' src="../img/equipo.png" alt="" />
                    </div>
                    <div className='textcont'>
                        <p className='pe'>Equipos de última tecnología</p>
                    </div>

                </div>
            </div>

        </section>
        <section className='info'>
            <div className='container-fluid'>
                <div className='row'>
                <div className='col-lg-4' >
                    <h3 className='mb-3' data-aos="fade-right" data-aos-once="true" data-aos-duration="1000">Somos una clinica especializada, que cuenta con las especialidades de:</h3>
                    <li className='list mt-1'data-aos="fade-right" data-aos-once="true" data-aos-duration="1000">Odontología</li>
                    <li className='list mt-1' data-aos="fade-right" data-aos-once="true" data-aos-duration="1200">Dentista</li>
                    <li className='list mt-1' data-aos="fade-right" data-aos-once="true" data-aos-duration="1300">Ortodoncia</li>
                    <li className='list mt-1' data-aos="fade-right" data-aos-once="true" data-aos-duration="1400">Ortopedia Maxilar</li>
                    <li className='list mt-1' data-aos="fade-right" data-aos-once="true" data-aos-duration="1500">Prótesis Dental</li>
                    <li className='list mt-1' data-aos="fade-right" data-aos-once="true" data-aos-duration="1600">Implantología Dental</li>
                    <li className='list mt-1' data-aos="fade-right" data-aos-once="true" data-aos-duration="1700">Estetica Bucal</li>
                    <li className='list mt-1' data-aos="fade-right" data-aos-once="true" data-aos-duration="1800">Endodoncia</li>
                    <li className='list mt-1' data-aos="fade-right" data-aos-once="true" data-aos-duration="1900">Odontología</li>
                </div>
                    <div className='col-lg-8 derecho'>
                        <img className='analisis' src="../img/analisis.jpg" alt="" data-aos="fade-in" data-aos-once="true" data-aos-duration="1000" />
                    </div>
                </div>
            </div>

        </section>
        <section className='visit'>
            <div className='container-fluid'>
                <div className='row'> 
                    <div className='col-lg-7 derecho'>
                        <iframe className='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.967362480166!2d-97.41463388506864!3d20.953825786038998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d98bbc4689abd5%3A0xb58fccae64318b58!2sDise%C3%B1o%20Dental%20Tuxpan%20(Odontolog%C3%ADa%20-%20Ortodoncia%20-%20Pr%C3%B3tesis%20Dental)!5e0!3m2!1ses-419!2smx!4v1669068470561!5m2!1ses-419!2smx" style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"  data-aos="fade-in" data-aos-once="true" data-aos-duration="1000"/>
                    </div>
                    <div className='col-lg-5' >
                        <h1 className='titulovisit' data-aos="fade-down" data-aos-once="true" data-aos-duration="1000">Visitanos</h1>
                        <div className='row visitanos'>
                            <div className='col-lg-6 col-md-6 visitanoss'>
                                <p className='po' data-aos="fade-up" data-aos-once="true" data-aos-duration="1000"><i class="bi bi-telephone"></i> 783 690 7248</p>

                            </div>
                            <div className='col-lg-6 col-md-6 visitanoss'>
                                <p className='po' data-aos="fade-up" data-aos-once="true" data-aos-duration="1000"><i class="bi bi-geo-alt"></i> C. Galeana 5A, Centro, 92800 Túxpam de Rodríguez Cano, Ver.</p>
                                

                            </div>
                            <div className='col-lg-6 col-md-6 visitanoss'>
                                <p className='po' data-aos="fade-up" data-aos-once="true" data-aos-duration="1000"><i class="bi bi-clock"></i> Lunes a Viernes 10:00am 9:00pm</p>

                            </div>
                            <div className='col-lg-6 col-md-6'>
                                <Link to='/contactanos'><button className='btn btn-success' data-aos="fade-up" data-aos-once="true" data-aos-duration="1000">Contactar</button></Link>
                                

                            </div>

                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
            
        </>
    
    );
}

export default Home;
