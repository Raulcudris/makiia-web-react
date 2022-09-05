import React from 'react'
import Makiia from '../assets/images/makiia.png'
import decorative_white_circle from '../assets/images/decorative-white-circle.svg';
import deco_blue_circle from '../assets/images/decorative-blue-circle.svg';
import decorative_yellow_circle from '../assets/images/decorative-yellow-circle.svg';
import decorative_green_diamond from '../assets/images/decorative-green-diamond.svg';

export const Header = () => {
  return (
    <>
    <header class="header">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="text-container">
                        <h1>Desarrollo de aplicaciones.</h1>
                        <p class="p-large p-heading">Materializamos tu idea de negocio en la aplicación móvil. 
                        No solo somos expertos en desarrollo, además, somos el aliado estratégico que buscabas para
                        el desarrollo de tu aplicaciones y sistematizar tu trabajo de una manera unica.</p>
                    </div> 
                </div> 
            </div> 
            <div class="row">
                <div class="col-lg-12">
                    <div class="image-container">
                        <img class="img-fluid" src={ Makiia } alt="alternative"/>
                    </div> 
                </div> 
            </div> 
        </div> 
        <div class="deco-white-circle-1">
            <img src={decorative_white_circle} alt="alternative"/>
        </div> 
                <div class="deco-white-circle-2">
            <img src={decorative_white_circle}alt="alternative"/>
        </div>

        <div class="deco-blue-circle">
            <img src={deco_blue_circle} alt="alternative"/>
        </div>
              <div class="deco-yellow-circle">
            <img src={decorative_yellow_circle}alt="alternative"/>
        </div> 
               <div class="deco-green-diamond">
            <img src={decorative_green_diamond} alt="alternative"/>
        </div> 
        </header>
    </>
     
  )
}
