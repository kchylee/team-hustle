
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Icon, Header, Jumbotron, Code, Tabs } from 'watson-react-components/dist/components';

class App extends React.Component {

	constructor(props) {
		super(props);

    this.handleBranchChange = this.handleBranchChange.bind(this);
    this.handleFilterChange = this.handleFilterChange.bind(this);
	}

	handleBranchChange(event) {
		console.log("branchChange");
	}

	handleFilterChange(event) {
		console.log("filterChange");
	}

	render() {
    return (
    <div className="App">
        <div className="App-header">   
	        {/*<Icon type="loader" className="App-logo"/>*/}
    		
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

        <div className="WordMaps">
        	<div className="WordMaps-large">
        	#In #placerat #efficitur #arcu #ac #aliquet #Suspendisse #sed #enim #egestas #vestibulum #augue #eu #efficitur #sapien #In #placerat #efficitur
			</div>
        	<div className="WordMaps-medium">
        	#In #placerat #efficitur #arcu #ac #aliquet #Suspendisse #sed #enim #egestas #vestibulum #augue #eu #efficitur #sapien #In #placerat #efficitur #arcu #ac #aliquet #Suspendisse #sed #enim
        	</div>
        	<div className="WordMaps-small">
        	#In #placerat #efficitur #arcu #ac #aliquet #Suspendisse #sed #enim #egestas #vestibulum #augue #eu #efficitur #sapien#In #placerat #efficitur #arcu #ac #aliquet #Suspendisse #sed #enim #egestas #vestibulum
        	</div>
        </div>
      </div>
    );
  }
}

export default App;