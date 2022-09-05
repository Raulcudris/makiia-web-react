import React from 'react'
import description_1_details_lightbox from '../assets/images/description-1-details-lightbox.jpg'

export const Description_1_Details_Lightbox = () => {
  return (
    <>
    <div id="description-1-details-lightbox"  className="lightbox-basic zoom-anim-dialog mfp-hide">
        <div  className="row">
            <button title="Close (Esc)" type="button"  className="mfp-close x-button">×</button>
			<div  className="col-lg-8">
                <div  className="image-container">
                    <img  className="img-fluid" src={description_1_details_lightbox} alt="alternative"/>
                </div> 
			</div>
			<div  className="col-lg-4">
                <h3>Goals Setting</h3>
				<hr />
                <p>The app can easily help you track your personal development evolution if you take the time to set it up.</p>
                <h4>User Feedback</h4>
                <p>This is a great app which can help you save time and make your live easier. And it will help improve your productivity.</p>
                <ul  className="list-unstyled li-space-lg">
                    <li  className="media">
                        <i  className="far fa-check-square"></i><div  className="media-body">Splash screen panel</div>
                    </li>
                    <li  className="media">
                        <i  className="far fa-check-square"></i><div  className="media-body">Statistics graph report</div>
                    </li>
                    <li  className="media">
                        <i  className="far fa-check-square"></i><div  className="media-body">Events calendar layout</div>
                    </li>
                    <li  className="media">
                        <i  className="far fa-check-square"></i><div  className="media-body">Location details screen</div>
                    </li>
                    <li  className="media">
                        <i  className="far fa-check-square"></i><div  className="media-body">Onboarding steps interface</div>
                    </li>
                </ul>
                <a  className="btn-solid-reg mfp-close page-scroll" href="#download">DOWNLOAD</a> 
                <button className="btn-outline-reg mfp-close as-button" type="button">BACK</button>
			</div>
		</div> 
    </div> 
    </>
  )
}
