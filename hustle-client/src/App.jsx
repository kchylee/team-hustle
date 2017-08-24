

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Icon, Header, Jumbotron, Code, Tabs } from 'watson-react-components/dist/components';
import ReactTooltip from 'react-tooltip'
import customData from './test.json';


class App extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			catArr: [],
			freqArr: []
		}

    this.handleBranchChange = this.handleBranchChange.bind(this);
    this.handleFilterChange = this.handleFilterChange.bind(this);
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.populateWordMap = this.populateWordMap.bind(this);
	}


	handleBranchChange(event) {
		console.log("branchChange");
		this.populateWordMap();
	}

	handleFilterChange(event) {
		console.log("filterChange");
	}

	handleMouseOver(event) {
		console.log("mouseOver");
		event.target.style.color = "white";
		event.target.style.backgroundColor = "orange";
	}

	handleMouseOut(event) {
		console.log("mouseOut");
		event.target.style.color = "";
		event.target.style.backgroundColor = "";
	}

	populateWordMap () {
		const wordObj = customData;
		let objCat = [];
		let objFreq = [];

		for(var i=0; i < wordObj.length; i++)
		{
			objCat[i] = wordObj[i].category;
			objFreq[i] = wordObj[i].frequency;
		}

		 this.setState({
         	catArr: objCat,
 			freqArr: objFreq
 	      });

		console.log(objCat);
		console.log(objFreq);
	}

	wordSizeNormalizer(num) {
		let maxFontSize = 150;
		let minFontSize = 30;

		if (num >= maxFontSize) {return maxFontSize}
		else if(num <= minFontSize) {return minFontSize}
		else {
		const answer = ((num - minFontSize) / (maxFontSize - minFontSize)) * maxFontSize;
		return answer;
		}
	}

	componentWillMount() {
		this.populateWordMap();
	}
	render() {

		let frequencyArr = this.state.freqArr.map((value) => {
			return value;
		});

		let categoryArr = this.state.catArr.map((value, i) => {
			const sizeStyle = {
			fontSize: this.wordSizeNormalizer(frequencyArr[i])
		}
			return <div> <div key={i} 
			className="Word" 
			onMouseOver={this.handleMouseOver} 
			onMouseOut={this.handleMouseOut} 
			data-tip= {"Frequency: " + frequencyArr[i] +" mentioned"}
			style= {sizeStyle}
			>
			{value} </div>
			<ReactTooltip className="customeTheme" place="top" type="light" effect="float"/>
		 </div>
		});

    return (
    <div className="App">
        <div className="App-header">   

    		<img className="TPL-logo" src="https://goo.gl/F4g2EW" alt="TPLlogo"/>
	        <div className="Selectors">
    		<div className="text">People at </div>
		        <select className="Selectors-branch" onChange={this.handleBranchChange}>
		          <option>Againcourt</option>
		          <option>Bloor Gladstone</option>
		          <option>Parkdale</option>
		          <option>Fort York</option>
		        </select>
		     <div className="text"> branch are most interested in these categories:</div>
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