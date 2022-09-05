import React from 'react'
import screenshot_1 from '../assets/images/screenshot-1.jpg';
import screenshot_2 from '../assets/images/screenshot-2.jpg';
import screenshot_3 from '../assets/images/screenshot-3.jpg';
import screenshot_4 from '../assets/images/screenshot-4.jpg';
import screenshot_5 from '../assets/images/screenshot-5.jpg';
import screenshot_6 from '../assets/images/screenshot-6.jpg';
import screenshot_7 from '../assets/images/screenshot-7.jpg';
import screenshot_8 from '../assets/images/screenshot-8.jpg';
import screenshot_9 from '../assets/images/screenshot-9.jpg';
import screenshot_10 from '../assets/images/screenshot-10.jpg';


export const Screenshots = () => {
  return (
    <>
      <div id="screens"  className="slider">
        <div  className="container">
            <div  className="row">
                <div  className="col-lg-12">
                    
          
                    <div  className="slider-container">
                        <div  className="swiper-container image-slider">
                            <div  className="swiper-wrapper">
                                
                 
                                <div  className="swiper-slide">
                                    <a href={screenshot_1}  className="popup-link" data-effect="fadeIn">
                                        <img  className="img-fluid" src={screenshot_1} alt="alternative"/>
                                    </a>
                                </div>
                            
                                <div  className="swiper-slide">
                                    <a href={screenshot_2}  className="popup-link" data-effect="fadeIn">
                                        <img  className="img-fluid" src={screenshot_2}  alt="alternative"/>
                                    </a>
                                </div>
                   
                                <div  className="swiper-slide">
                                    <a href={screenshot_3}  className="popup-link" data-effect="fadeIn">
                                        <img  className="img-fluid" src={screenshot_3} alt="alternative"/>
                                    </a>
                                </div>
           
                                <div  className="swiper-slide">
                                    <a href={screenshot_4} className="popup-link" data-effect="fadeIn">
                                        <img  className="img-fluid" src={screenshot_4} alt="alternative"/>
                                    </a>
                                </div>
                     

                 
                                <div  className="swiper-slide">
                                    <a href={screenshot_5}  className="popup-link" data-effect="fadeIn">
                                        <img  className="img-fluid" src={screenshot_5} alt="alternative"/>
                                    </a>
                                </div>
                          

              
                                <div  className="swiper-slide">
                                    <a href={screenshot_1} className="popup-link" data-effect="fadeIn">
                                        <img  className="img-fluid" src={screenshot_6} alt="alternative"/>
                                    </a>
                                </div>
                        

                        
                                <div  className="swiper-slide">
                                    <a href={screenshot_2} className="popup-link" data-effect="fadeIn">
                                        <img  className="img-fluid" src={screenshot_7} alt="alternative"/>
                                    </a>
                                </div>
                              

                           
                                <div  className="swiper-slide">
                                    <a href={screenshot_3} className="popup-link" data-effect="fadeIn">
                                        <img  className="img-fluid" src={screenshot_8} alt="alternative"/>
                                    </a>
                                </div>
                     

                            
                                <div  className="swiper-slide">
                                    <a href={screenshot_4}  className="popup-link" data-effect="fadeIn">
                                        <img  className="img-fluid" src={screenshot_9}alt="alternative"/>
                                    </a>
                                </div>
                             

                                
                                <div  className="swiper-slide">
                                    <a href={screenshot_5} className="popup-link" data-effect="fadeIn">
                                        <img  className="img-fluid" src={screenshot_10} alt="alternative"/>
                                    </a>
                                </div>
                              
                                
                            </div> 

                         
                            <div  className="swiper-button-next"></div>
                            <div  className="swiper-button-prev"></div>
                          

                        </div> 
                    </div> 
                 

                </div> 
            </div> 
        </div> 
    </div> 
   


    </>
  )
}
