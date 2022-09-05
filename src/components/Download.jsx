import React from 'react'
import download_iphone from '../assets/images/download-iphone.png';
import decorative_white_circle from '../assets/images/decorative-white-circle.svg';
import deco_blue_circle from '../assets/images/decorative-blue-circle.svg';
import decorative_yellow_circle from '../assets/images/decorative-yellow-circle.svg';
import decorative_green_diamond from '../assets/images/decorative-green-diamond.svg';


export const Download = () => {
  return (
    <>
     <div id="download"  className="basic-3">
        <div  className="container">
            <div  className="row">
                <div  className="col-lg-12">
                    <div  className="image-container">
                        <img  className="img-fluid" src={download_iphone} alt="alternative"/>
                    </div> 
                    <p  className="p-large">Do you feel like you're wasting time with small stuff 
                                            instead of working towards your goals? Start using Sync to organize 
                                            your time and get a grip on your personal development</p>
                    <a  className="btn-solid-lg" href="#your-link"><i  className="fab fa-apple"></i>DOWNLOAD</a>
                    <a  className="btn-solid-lg" href="#your-link"><i  className="fab fa-google-play"></i>DOWNLOAD</a>
                </div> 
            </div>
        </div> 
        <div  className="deco-white-circle-1">
            <img src={decorative_white_circle} alt="alternative"/>
        </div>
        <div  className="deco-white-circle-2">
            <img src={decorative_white_circle}  alt="alternative"/>
        </div> 
        <div  className="deco-blue-circle">
            <img src={deco_blue_circle} alt="alternative"/>
        </div> 
        <div  className="deco-yellow-circle">
            <img src={decorative_yellow_circle} alt="alternative"/>
        </div> 
        <div  className="deco-green-diamond">
            <img src={ decorative_green_diamond } alt="alternative"/>
        </div> 
    </div> 
    </>
  )
}
