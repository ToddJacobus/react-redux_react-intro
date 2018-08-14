// always ask yourself:
// does this component that I'm creating need to be able to
// update the state?
// In this case, to show the detail of a video (play it, etc)
// we don't really need to update the state.


import React from 'react';

const VideoDetail = ({video}) => {
  // child objects want to render immediately, regardless of whether or not
  // there's anything to render.  If the parent object is too slow, an error
  // will be returned.  In this case, there's no video right away (the youtube
  // api is the limiting factor ) so es6 js can't access an undefined object 'video'
  // The if conditional bellow returns a temporary loading message to the user if
  // 'video' is undefined.
  if (!video) {
    return(<div>Loading...</div>)
  }
  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`
  // const url = 'https://www.youtube.com/embed/' + videoId;
  // the two lines above are equivelant.  The above is new in es6

  return (
    <div className='video-detail col-md-8'>
      <div className='embed-responsive embed-responsive-16by9'>
        <iframe className='embed-responsive-item' src={url}></iframe>
      </div>
      <div className="details">
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  );

};

export default VideoDetail;
