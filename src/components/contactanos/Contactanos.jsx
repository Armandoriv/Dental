import React from 'react';
import './contactanos.css'
import emailjs from '@emailjs/browser'
import Swal from 'sweetalert2'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
const Contactanos = () => {
    const mostrarAlerta = () => {
        Swal.fire({
            icon: 'success',
            title: '¡Mensaje Enviado!',
            text: 'En breve nos pondremos en contacto con usted.',
            showConfirmButton: true,
            confirmButtonColor: "#112F2F",
            background: "#F4FAFF",
            color: "#000000"});
    }

const sendEmail = (event) => {

    emailjs.sendForm('service_lr7ck34', 'template_yufdtyk', event.target, 'm-W59yXyhkP7VP76D')
    .then(response => console.log(response))
    .catch(error => console.log(error))
    

}

    return (
        <>
            <section className='container contacto mt-5'>
                <div className='row'>
                    <div className='titulo col-lg-12' data-aos="fade-down" data-aos-once="true" data-aos-duration="2000">
                        <h1 className='titu'>Contactanos</h1>
                    </div>
                    <>
                        <div className='boxblu mt-5' data-aos="fade-up" data-aos-once="true" data-aos-duration="2000">
                            <form id="form" className='form' onSubmit={sendEmail}>
                                <div className='container-fluid'>
                                    <div className='row'>
                                        <div className='col-md-6'>
                                            <div className='mt-3'>
                                                <label htmlFor="name" className="form-label">Nombre</label>
                                                <input type="text" placeholder="Nombre:" className="form-control" name="name" id="name" required />
                                            </div>
                                            <div className="mt-3">
                                                <label htmlFor="phone" className="form-label">Teléfono</label>
                                                <input type="number" placeholder="Teléfono:" className="form-control" name="phone" id="phone" required />
                                            </div>
                                        </div>
                                        <div className='col-md-6'>
                                            <div className="mt-3">
                                                <label htmlFor="last" className="form-label">Apellidos</label>
                                                <input type="text" placeholder="Apellidos:" className="form-control" name="last" id="last" required />
                                            </div>
                                            <div className="mt-3">
                                                <label htmlFor="email" className="form-label">Email</label>
                                                <input type="email" placeholder="Email:" className="form-control" name="email" id="email" required />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                    <div>
                                        <label htmlFor="message" className="form-label mt-3">Mensaje</label>
                                        <input type="text" placeholder="Mensaje:" className="form-control area" name="message" id="message" required />
                                    </div>
                                    <div className="beton">
                                        <button type="submit" className="btn btn-success mt-3" id="button" defaultValue="Send Email" value="Enviar">Enviar</button>
                                    </div>
                            </form>            
                        </div>
                    </>
                </div>
            </section>
        </>
    );
}

export default Contactanos;
