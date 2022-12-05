import React from 'react';
import './Dentistas.css';

const Dentistas = () => {
    return (
        <section className='dentistas'>
            <div className='mt-5 nosotrostitu'>
                    <h1 className='hu'>Dentistas</h1>
            </div>
            <p className='he'>Conoce a nuestro equipo de doctores especializados en tu sonrisa</p>
            <div className='doctores'>
                <div className="row container">
                    <div className="card mt-5" data-aos="fade-down" data-aos-once="true" data-aos-duration="1000">
                        <div className="image">
                            <img href="#" className='imgdrs'  src="../img/leosilla.png" />
                        </div>
                        <div className="content">
                            <h5>Dr. Leobardo Sosa Román</h5>
                            <ul className='skills'>
                                <li>Medico Cirujano Dentista</li>
                                <li>Especialista ortodoncia y ortopedia dentomaxilofacial</li>
                                <li>Catedrático en la especialidad de Ortodoncia en la Universidad Ceyesov Campus Reynosa</li>
                                <li>Actualización en microimplantes dentales y bracket pasivo</li>
                            </ul>
                        </div>
                    </div>
                    <div className="card mt-5" data-aos="fade-down" data-aos-once="true" data-aos-duration="1000">
                        <div className="image">
                            <img href="#" className='imgdrs' src="../img/anapose.png" />
                        </div>
                        <div className="content">
                            <h5>Dra. Anairda Vianney López Zamora</h5>
                            <ul className='skills'>
                                <li>Medico Cirujano Dentista</li>
                                <li>Especialista en prótesis bucal</li>
                                <li>Certificación "Greater New York Dental Meeting"</li>
                                <li>Certificación "Zimmer Product Training"</li>
                                <li>Certificación en Carillas Dentales</li>
                                <li>Manejo de scanner dental y exocad</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Dentistas;

{/* <div className="card" style={{width: '18rem'}}>
                    <img src="..." className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Dr. Leobardo Sosa Román</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
                <div className="card" style={{width: '18rem'}}>
                    <img src="..." className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Dra. Anairda Vianney López Zamora</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
                <div className="card" style={{width: '18rem'}}>
                    <img src="..." className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div> */}