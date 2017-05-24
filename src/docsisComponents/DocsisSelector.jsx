import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import {Dropdown} from 'semantic-ui-react';
import TemplateMapPicker from './TemplateMapPicker';
import GenericDocPicker from './GenericDocPicker';



/**

TODO FETCH
**/

export default class DocsisSelector extends Component {
	constructor(props){
		super(props);
		// FETCH doc-type map from server
		var doctypeMap = {
			'template-map': ['template-map'],
			type1: ['doc1', 'doc2'],
			type2: ['doc3', 'doc4']
		}
		this.state = {
			activeItem: "",
			docs: doctypeMap,
			choices: Object.keys(doctypeMap).map(key=>({text: key, value: key}))
		}
		this.showSelector = this.showSelector.bind(this);
	}
	showSelector(evnt, data){
		this.setState({activeItem: data.value})
	}
	render(){
		return (
		<div>
			<Dropdown 
				placeholder="Select Document Type" 
				fluid
				tabIndex="0"
				selection
				options={this.state.choices}
				onChange={this.showSelector}
			/>
			<Switch location={{pathname: this.state.activeItem}}>
				<Route exact path="template-map">
					<TemplateMapPicker setdoc={this.props.setdoc} />
				</Route>
				<Route path='(.+)'>
					<GenericDocPicker 
						doctype={this.state.activeItem} 
						docs={this.state.docs[this.state.activeItem]}
						setdoc={this.props.setdoc} 
					/>
				</Route>
				<Route></Route>
			</Switch>
		</div>
		)
	}
}