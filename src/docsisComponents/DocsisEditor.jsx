import React, {Component} from 'react';
import {Input} from 'semantic-ui-react';

export default class DocsisEditor extends Component {
	constructor(props){
		super(props);
		this.state = {
			doc: (this.props.doc) ? this.props.doc :
				(
					(this.props.docid !== 'template-map')
					? {TODO: 'Fetch this doc from server'} : {}
				)
		}
	}
	render(){
		return (
			<Input 
				fluid 
				type="textarea" 
				defaultValue={JSON.stringify(this.state.doc, null, 2)} 
			/>
		)
	}
}