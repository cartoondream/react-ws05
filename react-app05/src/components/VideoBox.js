import React from 'react'
//import './Todo.css'

const VideoBox = ({src}) => {
    return (
        <div className="video">
            <div className="col-12">
                <iframe width="100%" height="800px" src="https://www.youtube.com/embed/PM6Z_Eghgg8" 
                    frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>

                </iframe>
            </div>
            
        </div>
    )
}

export default VideoBox