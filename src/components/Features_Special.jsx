import React from 'react'
import features_app from '../assets/images/features-app.jpg';
export const Features_Special = () => {
  return (
    <>
    <div id="features"  className="basic-2">
    <div  className="container">
        <div  className="row">
            <div  className="col-lg-12">
                <h2>Special Features</h2>
                <p  className="p-heading">Sync's features are designed to help you improve your
                                            time management skills and become a better organized person. 
                                            Organize your tasks, schedule your appointments and meet your 
                                            personal development goals with Sync</p>
            </div>
        </div> 
        <div  className="row">
            <div  className="col-lg-4">
                <ul  className="list-unstyled li-space-lg first">
                    <li  className="media">
                        <span  className="fa-stack">
                            <i  className="fas fa-circle fa-stack-2x"></i>
                            <i  className="fas fa-users fa-stack-1x"></i>
                        </span>
                        <div  className="media-body">
                            <h4>Goal Setting</h4>
                            <p>Like any self improving process, everything starts with setting your goals and committing to them</p>
                        </div>
                    </li>
                    <li  className="media">
                        <span  className="fa-stack">
                            <i  className="fas fa-circle fa-stack-2x green"></i>
                            <i  className="fas fa-code fa-stack-1x"></i>
                        </span>
                        <div  className="media-body">
                            <h4>Situation Analysis</h4>
                            <p>Sync provides a well designed and ergonomic visual editor for you to edit your quick notes</p>
                        </div>
                    </li>
                    <li  className="media">
                        <span  className="fa-stack">
                            <i  className="fas fa-circle fa-stack-2x red"></i>
                            <i  className="fas fa-cog fa-stack-1x"></i>
                        </span>
                        <div  className="media-body">
                            <h4>Tasks Settings</h4>
                            <p>Each option packaged in the app's menus is provided in order to improve you personally</p>
                        </div>
                    </li>
                </ul>
            </div> 
            <div  className="col-lg-4">
                <img  className="img-fluid" src={features_app} alt="alternative"/>
            </div> 
            <div  className="col-lg-4">
                <ul  className="list-unstyled li-space-lg">
                    <li  className="media">
                        <span  className="fa-stack">
                            <i  className="fas fa-circle fa-stack-2x yellow"></i>
                            <i  className="fas fa-comments fa-stack-1x"></i>
                        </span>
                        <div  className="media-body">
                            <h4>Social Interaction</h4>
                            <p>Schedule your appointments, meetings and periodical evaluations using the tools</p>
                        </div>
                    </li>
                    <li  className="media">
                        <span  className="fa-stack">
                            <i  className="fas fa-circle fa-stack-2x blue"></i>
                            <i  className="fas fa-rocket fa-stack-1x"></i>
                        </span>
                        <div  className="media-body">
                            <h4>Get Things Done</h4>
                            <p>Reading focus mode for long form articles, ebooks and other materials with long text</p>
                        </div>
                    </li>
                    <li  className="media">
                        <span  className="fa-stack">
                            <i  className="fas fa-circle fa-stack-2x"></i>
                            <i  className="fas fa-download fa-stack-1x"></i>
                        </span>
                        <div  className="media-body">
                            <h4>Good Foundation</h4>
                            <p>Get a solid foundation for your self development efforts. Try Sync mobile app for devices</p>
                        </div>
                    </li>
                </ul>
            </div> 
        </div>
    </div> 
</div> 
</>
  )
}
