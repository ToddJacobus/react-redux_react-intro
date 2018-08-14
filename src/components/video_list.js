// this component does not need its own state to keep track of.  Thus, we can
// just use a 'functional' jsx render type component

import React from 'react';
import VideoListItem from './video_list_item'
// the props passed into the jsx tag from the parent element are passed into the
// props variable in the function here
const VideoList = (props) => {
  // console.log('video_list.js',props.videos)

  const videoItems = props.videos.map((video) => {
    return( <VideoListItem
      onVideoSelect = {props.onVideoSelect}
      key={video.etag}
      video= {video}
    /> )
    // adding a key to a list keeps things indexed
    // this allows React to only need to update the item of a given key
    // the key can be any attribute of the list objects
    // in this case, the "etag" is a YouTube-designated id for each video
  })

  /* we have to use 'className' to indicate a css class */
  return(
    <ul className='col-md-4 list-group'>
      {videoItems}
    </ul>
  );
}

export default VideoList;
