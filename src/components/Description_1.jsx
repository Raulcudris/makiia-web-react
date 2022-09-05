import React from 'react'
import description_1_app from '../assets/images/description-1-app.png'
export const Description_1 = () => {
  return (
    <>
     <div id="description"  className="basic-1">
        <div  className="container">
            <div  className="row">
                <div  className="col-lg-6">
                    <div  className="image-container">
                        <img  className="img-fluid" src={description_1_app} alt="alternative"/>
                    </div> 
                </div> 
                <div  className="col-lg-6">
                    <div  className="text-container">
                        <h2>Organize Your Time And Start Getting Results</h2>
                        <p>Sync is the first mobile app on the market to harness the power of social connections to help you stop
                           procrastinating and start getting things done. Give it a try and see the changes right away</p>
                        <ul  className="list-unstyled li-space-lg">
                            <li  className="media">
                                <i  className="fas fa-square"></i>
                                <div  className="media-body">Analyse and evaluate your current status and productivity</div>
                            </li>
                            <li  className="media">
                                <i  className="fas fa-square"></i>
                                <div  className="media-body">Begin monitoring your day to day routine with Sync app</div>
                            </li>
                            <li  className="media">
                                <i  className="fas fa-square"></i>
                                <div  className="media-body">See the improved results in no more than a couple of weeks</div>
                            </li>
                        </ul>
                        <a  className="btn-solid-reg popup-with-move-anim" href="#description-1-details-lightbox">LIGHTBOX</a>
                    </div> 
                </div> 
            </div> 
        </div> 
    </div> 
    </>
  )
}
