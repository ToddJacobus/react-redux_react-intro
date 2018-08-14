import React from 'react';

// const VideoListItem = (props) => {
// putting curly braces around the video variable
// automatically grabs the video passed in and assigns a new variable
// "video"
const VideoListItem = ({video, onVideoSelect}) => {
  // const video = props.video;
  // this line is not nessesary due to the 'sugar' above
  const imageUrl = video.snippet.thumbnails.default.url;
  return (
    <li onClick={() => onVideoSelect(video)} className='list-group-item'>
      <div className='video-list media'>
        <div className='media-left'>
          <img className="media-object" src={imageUrl}/>
          {/* we are referencing a js variable inside of jsx so we need curly braces */}
        </div>
        <div className='media-body'>
          <div className='media-heading'>
            {video.snippet.title}
          </div>
        </div>

      </div>

    </li>
  );
};

export default VideoListItem;
