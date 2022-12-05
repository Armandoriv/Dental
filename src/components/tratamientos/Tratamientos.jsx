import React from 'react';
import './tratamientos.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Tratamientos = () => {
    return (
        <div className='mt-5'>
            <div className='tratamiento'>
              <h1 className='hu'>Tratamientos</h1> 
            </div>
            <p className='he'>Porqué tu sonrisa es nuestra prioridad, en Diseño dental contamos con una gran variedad de tratamientos</p>
            <main className='container'>
                <div className='row cuadros'>
                    <div className='col-lg-4 col-md-12 recA' data-aos="fade-in" data-aos-once="true" data-aos-duration="1250">
                        <h5>Blanqueamiento Dental</h5>
                        <img src="../img/blanqueamiento.png" alt="" />
                        <p>Contamos con distintos tipos de blanqueamiento dental que se adaptan totalmente a tus necesidades</p>

                    </div>
                    <div className='col-lg-4 recB' data-aos="fade-in" data-aos-once="true" data-aos-duration="1750">
                        <h5>Implantes Dentales</h5>
                        <img src="../img/implante.png" alt="" />
                        <p>Los implantes dentales son piezas de titanio que se utilizan en sustitución de la raíz dental y nos permiten colocar un diente nuevo</p>

                    </div>
                    <div className='col-lg-4 recC' data-aos="fade-in" data-aos-once="true" data-aos-duration="2250">
                        <h5>Ortodoncia</h5>
                        <img src="../img/bracket.png" alt="" />
                        <p>Manejamos una variedad de brackets desde estéticos, metálicos y zafiro</p>

                    </div>
                    <div className='col-lg-4 recD' data-aos="fade-in" data-aos-once="true" data-aos-duration="1250">
                        <h5>Limpieza Dental</h5>
                        <img src="../img/limpieza.png" alt="" />
                        <p>Contamos con Ultrasonidos de última generación tu tratamiento de limpieza sea rápido y sin molestias</p>

                    </div>
                    <div className='col-lg-4 recF' data-aos="fade-in" data-aos-once="true" data-aos-duration="1750">
                        <h5>Odontologia Infantil</h5>
                        <img src="../img/ninios.png" alt="" />
                        <p>En Diseño Dental contamos con odontopediatras altamente calificados en el tratamiento de todas las enfermedades relacionadas con la masticación y los dientes de los niños.</p>

                    
                    </div>
                    <div className='col-lg-4 recG' data-aos="fade-in" data-aos-once="true" data-aos-duration="2250">
                        <h5>Diagnostico Digital</h5>
                        <img src="../img/analisispantalla.png" alt="" />
                        <p>En Diseño Dental realizamos tu diagnóstico con la más alta tecnología del mercado</p>

                    </div>
                    <div className='col-lg-4 recF' data-aos="fade-in" data-aos-once="true" data-aos-duration="1250">
                        <h5>Endodoncia</h5>
                        <img src="../img/endodoncia.png" alt="" />
                        <p>Contamos con distintos tipos de blanqueamiento dental que se adaptan totalmente a tus necesidades</p>

                    </div>
                    <div className='col-lg-4 recH' data-aos="fade-in" data-aos-once="true" data-aos-duration="1750">
                        <h5>Implantes Dentales</h5>
                        <img src="../img/protesis.png" alt="" />
                        <p>Los implantes dentales son piezas de titanio que se utilizan en sustitución de la raíz dental y nos permiten colocar un diente nuevo</p>

                    </div>
                    <div className='col-lg-4 recC' data-aos="fade-in" data-aos-once="true" data-aos-duration="2250">
                        <h5>Resinas</h5>
                        <img src="../img/resina.png" alt="" />
                        <p>Manejamos una variedad de brackets desde estéticos, metálicos y zafiro</p>

                    </div>
                </div>
            </main>
        </div>
    );
}

export default Tratamientos;
