import React, {Component} from 'react';
import {Segment} from 'semantic-ui-react';
import {Link} from 'react-router-dom';

/**
TODO FETCH
**/

export default class GenericDocPicker extends Component{
	constructor(props){
		super(props);
		this.setdoc = this.setdoc.bind(this);
	}
	setdoc(evnt, data){
		// TODO fetch the document from the server
		var doc = {
			"up speed": "50000000",
			"down speed": '6000000'
		} 
		var docid = evnt.target.getAttribute('value');
		this.props.setdoc(doc, docid, this.props.doctype);
	}
	render(){
		return (
			<Segment.Group>
				{this.props.docs.map(docid => (
					<Link 
						key={docid} 
						to={'/docsismaintenance/editing/' + docid + '/' + this.props.doctype} >
						<Segment 
							textAlign="center" 
							onClick={this.setdoc} 
							value={docid}>
							{docid}
						</Segment>
					</Link>
				))}
			</Segment.Group>
		)
	}
}