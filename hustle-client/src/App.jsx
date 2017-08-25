

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Icon, Header, Jumbotron, Code, Tabs } from 'watson-react-components/dist/components';
import ReactTooltip from 'react-tooltip'

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

			console.log(event.target.value);

		//TODO: get branch id.
		this.updateBranchWordMap(event.target.value);
		
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

	updateBranchWordMap(branchID) {
		this.fetchCategoryJSON(branchID).then ((categoryJSON) => {
			this.populateWordMap(categoryJSON);
		});
	}

	fetchCategoryJSON(branchID) {
		var fetchRequest = new Request("/categories/frequency/" + branchID.toString());
		console.log(fetchRequest.url);

		
		return fetch(fetchRequest)
		.then((response) => response.json())
		.then((categoryJSON) => {
			return categoryJSON;
		});
	}
	
	populateWordMap (catJSON) {


		const wordObj = catJSON;
		let objCat = [];
		let objFreq = [];
		let watsonCat = [];

		
		for(let i=0; i < wordObj.length; i++) {
			// divide each set of categories into individual categories
			let individualCat = wordObj[i].category.split('/');
			
			for(let j=0; j < individualCat.length; j++) {
				let cat = individualCat[j];
				
				// for each individual category, check if it already exists in category array
				if(!objCat.includes(cat) && cat !== "") {
					watsonCat.push({ name: cat, frequency: Number.parseInt(wordObj[i].frequency) });
					objCat.push(cat);
				} else if (objCat.includes(cat)) {
					for (let obj of watsonCat) {
						if (obj.name === cat) {
							obj.frequency += Number.parseInt(wordObj[i].frequency);
						}
					}
				}
			}
		}
		
		// clear category and frequency arrays
		objCat  = [];
		objFreq = [];
		
		// push individual categories with corresponding frequencies
		// into objCat and objFreq
		for (let obj of watsonCat) {
			objCat.push(obj.name);
			objFreq.push(obj.frequency);
		}
		
		console.log('pushed: ' + objFreq);
		this.setState({
         	catArr: objCat,
 			freqArr: objFreq
 	      });
	}

	wordSizeNormalizer(num) {
		const frequencyArr = this.state.freqArr;
		const maxFontSize = 80;



		let maxFrequency = frequencyArr[0];
		let minFrequency = frequencyArr[frequencyArr.length - 1];


		const answer = ((num - minFrequency) / (maxFrequency - minFrequency)) * maxFontSize;

		return answer;
		/*
		if (num >= maxFontSize) {return maxFontSize}
		else if(num <= minFontSize) {return minFontSize}
		else {
		const answer = ((num - minFrequency) / (maxFontSize - minFontSize)) * maxFontSize;
		return answer;
		}
		*/
	}

	componentWillMount() {
		//Default starting map.
		this.updateBranchWordMap(1);
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
		          <option value='1'>Toronto Reference</option>
		          <option value='2'>North York Central</option>
		          <option value='3'>Leaside</option>
		        </select>
		     <div className="text"> branch are most interested in these categories:</div>
        	</div>

        	<div className="IBM-container">
        		<div className="powered-text">Powered by </div>
        		<Icon type="ibm" className="ibm-logo"/>
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