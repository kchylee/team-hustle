

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Icon, Header, Jumbotron, Code, Tabs } from 'watson-react-components/dist/components';
import ReactTooltip from 'react-tooltip'

class App extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			catArr: ["Test1", "Test2", "Test3"]
		}

    this.handleBranchChange = this.handleBranchChange.bind(this);
    this.handleFilterChange = this.handleFilterChange.bind(this);
    this.handleMouseOver = this.handleMouseOver.bind(this);
	}
	handleBranchChange(event) {
		console.log("branchChange");
	}

	handleFilterChange(event) {
		console.log("filterChange");
	}

	handleMouseOver(event) {
		console.log("mouseOver");
		event.target.style.color = "white";
		event.target.style.font = "20px Mada,sans-serif";
	}

	handleMouseOut(event) {
		console.log("mouseOut");
		event.target.style.color = "";
		event.target.style.font = "";
	}



	render() {

		let categoryArr = this.state.catArr.map((value, i) => {
			return <div> <div key={i} className="Word" onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut} data-tip="test"> {value} </div>
			<ReactTooltip place="top" type="dark" effect="float"/> </div>

		});
    return (
    <div className="App">
        <div className="App-header">   

    		<img className="TPL-logo" src="https://goo.gl/F4g2EW" alt="TPLlogo"/>
	        <div className="Selectors">
    		<div className="text">Select branch(es):</div>
		        <select className="Selectors-branch" onChange={this.handleBranchChange}>
		          <option>Againcourt</option>
		          <option>Bloor Gladstone</option>
		          <option>Parkdale</option>
		          <option>Fort York</option>
		        </select>
        	</div>
        </div>

        <div className="Word_Map">
        	{categoryArr}
        </div>

      </div>
    );
  }
}

export default App;