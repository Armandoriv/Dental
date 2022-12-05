import React from 'react';
import './nosotros.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
const Nosotros = () => {
    return (
        <>
        <section className='nosotros'>
            <div className='mt-5 nosotrostitu'>
                    <h1 className='hu'>¿Por qué nosotros?</h1>
            </div>
            <p className='he'>hola como estas pa</p>
            <main className='container-fluid mainthing'>
                <div className='textNos col-lg-9' data-aos="fade-up" data-aos-once="true" data-aos-duration="2000">
                    <p className='txt'>Lorem ipsumptas eveniet magni tenetur excepturi unlo Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae, unde quibusda</p>
                </div>
                <div className='contactoMain'>
                    <img className='asis' src="../img/anacareta.png" alt=""  data-aos="fade-down" data-aos-once="true" data-aos-duration="2000"/>
                </div>

            </main>
        </section>
        <section className='nosotros2'>
            <main className='container-fluid mainthing'>
                <div className='contactoMainn'>
                    <img className='asis' src="../img/espatula.png" alt=""  data-aos="fade-down" data-aos-once="true" data-aos-duration="2000"/>
                </div>
                <div className='textNos' data-aos="fade-up" data-aos-once="true" data-aos-duration="2000">
                    <p className='txt'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, temporibus qui incidunt soluta dicta aperiam voluptates est eius veniam placeat, nisi ipsam nam quam, eligendi magni quo iusto illo aut?</p>

                </div>
            </main>
        </section>
        <section className='nosotros2'>
            <main className='container-fluid mainthing'>
                <div className='textNos' data-aos="fade-up" data-aos-once="true" data-aos-duration="2000">
                    <p className='txt'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, temporibus qui incidunt soluta dicta aperiam voluptates est eius veniam placeat, nisi ipsam nam quam, eligendi magni quo iusto illo aut?</p>

                </div>
                <div className='contactoMainn'>
                    <img className='asis' src="../img/asistente.png" alt=""  data-aos="fade-down" data-aos-once="true" data-aos-duration="2000"/>
                </div>

            </main>
        </section>
        </>
    );
}

export default Nosotros;
