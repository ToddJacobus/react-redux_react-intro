/*
class components:
	- needed when components require some internal record keeping
	- it's always good to begin with a function-based component,
	  then upgrade to a class if needed.

downward data flow:
	- the most parent component should be responsible
	  for fetching data.
	- since most of our components will make use of the
	  data, it makes sense for the top-most level component
	  to get the data.

*/
import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// packages
import YTSearch from 'youtube-api-search';
//components
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

//google api key
const API_KEY = 'AIzaSyD9PLTXBuTKV9wo3ow7cAkuA4fhpKHObXw'

// create a component.
// all components (the term views is used interchangably in this course)
// return html.  This one is no exception.

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			videos:[],
			selectedVideo: null,
		};

		// we're moving this into the constructor function because
		// we want the state to initialize with data already loaded

			this.videoSearch('Ajahn Brahm') // api call has been moved to dedicated function below
			// this.setState(videos:videos) es6 allows us to condense videos:videos to just videos
			// we're going to keep track of the return data by adding videos, etc. to the App component's state
			// you can add a callback function to the .setState request
			// see: https://reactjs.org/docs/react-component.html#setstate
			// the curly braces are still nessesary, even though we shortened the syntax!
		// });

	}

	videoSearch(term) {
		YTSearch({key:API_KEY, term:term}, videos => {
			this.setState({
				videos: videos,
				selectedVideo: videos[0]
			});
		});
	}


	render() {
		// use lodash to throttle videoSearch function to be called once every
		// second or so... note: we imported lodash with a "_"
		const videoSearch = _.debounce((term) => { this.videoSearch(term) } ,300);
		return(
			/* pass a list of videos to VideoList by passing a property
					into the jsx element.  This is how we pass data form parent
					to child components.
					This is called "passing props"*/

			// 'videoSearch' passed into SearchBar videoSearchChange prop, is the
			// debounced version of the function, which is throttled to call only
			// once every 300 ms.
			<div>
				<SearchBar videoSearchChange = {videoSearch}/>
				<VideoDetail video={this.state.selectedVideo}/>
				<VideoList
					onVideoSelect={selectedVideo => this.setState({selectedVideo})}
					videos={this.state.videos}
				/>
			</div>
		)
	};
};


// take generated html and shove it in the DOM

// the render function take an INSTANCE of our 'class' App
// and renders it to the '.container' class div
ReactDOM.render(<App />, document.querySelector('.container'));
