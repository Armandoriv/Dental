import React from 'react';

const Carousell = () => {
    return (
        <>
        <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval={10000}>
                    <div className='row cont'>
                        <div className='col-lg-8 col-md-8 col-sm-8'>
                            <p className='carr'>Contamos con todas las especialidades dentales</p>

                        </div>
                        <div className='col-lg-4 col-md-4 col-sm-4'>
                            <img className='despues' src="../img/anacepillo.png" alt="" />

                        </div>

                    </div>
                </div>
                <div className="carousel-item" data-bs-interval={2000}>
                    <div className='row cont'>
                        <div className='col-lg-9 col-md-8 col-sm-8'>
                            <p className='carr'>Ponemos a tu alcance las técnicas más avanzadas en odontología</p>

                        </div>
                        <div className='col-lg-3 col-md-4 col-sm-4'>
                            <img className='despues' src="../img/foton.png" alt="" />

                        </div>

                    </div>
                
                </div>
                <div className="carousel-item">
                    <div className='row cont'>
                        <div className='col-lg-8 col-md-8 col-sm-8'>
                            <p className='carr'>Trato profesional y personalizado</p>

                        </div>
                        <div className='cont col-lg-4 col-md-4 col-sm-4'>
                            <img className='despues' src="../img/grupo.png" alt="" />

                        </div>

                    </div>

                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="visually-hidden">Next</span>
            </button>
        </div>

            
        </>
    );
}

export default Carousell;
