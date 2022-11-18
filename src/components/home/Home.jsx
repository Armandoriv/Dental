import React from 'react';
import './home.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Home = () => {
    return (
        <>
        <img className='flat' src="../img/banner.png" alt="intro" />
        <section className='subtexto'>
            <div className='texto'>
                <h2>Hola</h2>
                <p>como estas Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit dicta totam vitae. Ad nesciunt quia pariatur animi! Atque quisquam blanditiis amet inventore porro nobis, omnis laboriosam tenetur eos dolor quia nihil hic distinctio sapiente deleniti illum possimus harum tempore sint beatae? Corporis officia sequi temporibus cumque unde impedit nulla aspernatur.</p>
            </div>
            <main className='container-fluid'>
                <div className='row'>
                    <div className='col-lg-4 recA' data-aos="fade-right" data-aos-once="true" data-aos-duration="2000">
                        <h5>Blanqueamiento Dental</h5>
                        <img src="../img/blanqueamiento.png" alt="" />
                        <p>Contamos con distintos tipos de blanqueamiento dental que se adaptan totalmente a tus necesidades</p>

                    </div>
                    <div className='col-lg-4 recB' data-aos="zoom-out-up" data-aos-once="true" data-aos-duration="2000">
                        <h5>Implantes Dentales</h5>
                        <img src="../img/implante.png" alt="" />
                        <p>Los implantes dentales son piezas de titanio que se utilizan en sustitución de la raíz dental y nos permiten colocar un diente nuevo</p>

                    </div>
                    <div className='col-lg-4 recC' data-aos="fade-left" data-aos-once="true" data-aos-duration="2000">
                        <h5>Ortodoncia</h5>
                        <img src="../img/bracket.png" alt="" />
                        <p>Manejamos una variedad de brackets desde estéticos, metálicos y zafiro</p>

                    </div>
                    <div className='col-lg-4 recD' data-aos="fade-right" data-aos-once="true" data-aos-duration="2000">
                        <h5>Limpieza Dental</h5>
                        <img src="../img/limpieza.png" alt="" />
                        <p>Contamos con Ultrasonidos de última generación tu tratamiento de limpieza sea rápido y sin molestias</p>

                    </div>
                    <div className='col-lg-4 recF' data-aos="zoom-out-up" data-aos-once="true" data-aos-duration="2000">
                        <h5>Odontologia Infantil</h5>
                        <img src="../img/ninios.png" alt="" />
                        <p>En Diseño Dental contamos con odontopediatras altamente calificados en el tratamiento de todas las enfermedades relacionadas con la masticación y los dientes de los niños.</p>

                    
                    </div>
                    <div className='col-lg-4 recG' data-aos="fade-left" data-aos-once="true" data-aos-duration="2000">
                        <h5>Diagnostico Digital</h5>
                        <img src="../img/analisispantalla.png" alt="" />
                        <p>En Diseño Dental realizamos tu diagnóstico con la más alta tecnología del mercado</p>

                    </div>
                </div>
            </main>
            <iframe className='mapa' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.9672377257734!2d-97.41463388497144!3d20.95383079570779!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d98bbc4689abd5%3A0xb58fccae64318b58!2sDise%C3%B1o%20Dental%20Tuxpan%20(Odontolog%C3%ADa%20-%20Ortodoncia%20-%20Pr%C3%B3tesis%20Dental)!5e0!3m2!1ses-419!2smx!4v1668745159457!5m2!1ses-419!2smx" style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
        </section>
            
        </>
    
    );
}

export default Home;
