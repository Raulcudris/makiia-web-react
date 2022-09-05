import React from 'react'

export const Features_Small = () => {
  return (
    <>
    <div  className="cards-1">
        <div  className="container">
            <div  className="row">
                <div  className="col-lg-12">
                    
                   {/*  <!-- Card --> */}
                    <div  className="card">
                        <div  className="card-image">
               
                        </div>
                        <div  className="card-body">
                            <h5  className="card-title">Diseño Web</h5>
                        </div>
                    </div>
                    {/* <!-- end of card --> */}

                    {/* <!-- Card --> */}
                    <div  className="card">
                        <div  className="card-image green">
                    
                        </div>
                        <div  className="card-body">
                            <h5  className="card-title">Desarrollo de APP</h5>
                        </div>
                    </div>
                    {/* <!-- end of card --> */}

                    {/* <!-- Card --> */}
                    <div  className="card">
                        <div  className="card-image red">
                            <i  className="fas fa-cog"></i>
                        </div>
                        <div  className="card-body">
                            <h5  className="card-title">Administracion de base de datos</h5>
                        </div>
                    </div>
                    <div  className="card">
                        <div  className="card-image blue">
                            <i  className="fas fa-rocket"></i>
                        </div>
                        <div  className="card-body">
                            <h5  className="card-title">Soporte tecnico.</h5>
                        </div>
                    </div>

                </div> 
            </div> 
        </div>
    </div> 
</>
  )
}
