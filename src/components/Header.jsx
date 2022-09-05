import React from 'react'
import Galeno from '../assets/images/Galeno.png'
import decorative_white_circle  from '../assets/images/decorative-white-circle.svg'
import decorative_blue_circle from '../assets/images/decorative-blue-circle.svg'
import decorative_yellow_circle from '../assets/images/decorative-yellow-circle.svg'
import decorative_green_circle from '../assets/images/decorative-green-diamond.svg'

export const Header = () => {
  return (
    <>
     <header class="header">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-12">
                    <div class="text-container">
                        <h1>Makiia</h1>
                        <p class="p-large p-heading">Start focusing on your goals and get more things done with Sync mobile application. It's the first app to harness the power of social connections to help you stay focused and get organized</p>
                    </div> 
                </div> 
            </div> 
            <div class="row">
                <div class="col-lg-12">
                    <div class="image-container">
                        <img class="img-fluid" src={ Galeno } alt="alternative"/>
                    </div> 
                </div> 
            </div> 
        </div> 
        {/* <div class="deco-white-circle-1">
            <img src={ decorative_white_circle } alt="alternative"/>
        </div>
        <div class="deco-white-circle-2">
            <img src={ decorative_white_circle } alt="alternative"/>
        </div>
        <div class="deco-blue-circle">
            <img src={decorative_blue_circle } alt="alternative" />
        </div>
        <div class="deco-yellow-circle">
            <img src={ decorative_yellow_circle } alt="alternative"/>
        </div> 
        <div class="deco-green-diamond">
            <img src={decorative_green_circle} alt="alternative"/>
        </div>  */}
    </header>
    </>
     
  )
}
