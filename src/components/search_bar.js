import React, { Component } from 'react';  // you can specify individual classes of React by specifying them in the curly braces

class SearchBar extends Component {
	constructor(props) {
		// constructor functions are analogous to __init__ for python
		// they are called automatically whenever the class is instantiated
		super(props);
		// 'super' calls a function imported from the parent class
		// in this case, imported from Component

		// 'this' is analogous to 'self' in python
		this.state = {term:''}
	}
	//every class-based component must have a render method
	render() {
		//we don't need to define this function, probably, because it is inherited from React.Component
		// also, every render function must return jsx
		// EVERY COMPONENT MUST RETURN JSX
		return (
			<div className='search-bar'>
				<input
				value = {this.state.term}
				// this is now a controlled component
				// the value of the input component comes from the state, not the input
				// keyboard input >> state change >> value comes back to input value
				onChange={event => this.onInputChange(event.target.value)}
				/>

			</div>
		);
	}  // when inserting js variables into jsx, always use curly braces

	onInputChange(term) {
		this.setState({term});
		this.props.videoSearchChange(term);

	}

	// define event handler methods as methods of the class
	// this method is replaced with the single-line anonymous function above
	//
	// onInputChange(event) {
	// 	console.log(event)
	// }


}

export default SearchBar;
