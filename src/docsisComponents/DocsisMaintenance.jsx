import React, {Component} from 'react';
import Header from '../components/Header'
import { Route, Switch } from 'react-router-dom';
import {Container} from 'semantic-ui-react';
import DocsisSelector from './DocsisSelector'
import DocsisEditor from './DocsisEditor';


const EditingHeader = ({match}) => (
	<Header 
		title={'Editing ' + match.params.docid} 
		subtitle={(match.params.type && match.params.make && match.params.model) 
				? match.params.type + ' > ' 
					+ match.params.make + ' > ' 
					+ match.params.model
				: 'Doc Type: ' + match.params.type
			} 
	/>
)

export default class DocsisMaintenance extends Component {
	constructor(props){
		super(props);
		this.state = {
			doc: undefined
		}
		this.setdoc = this.setdoc.bind(this);
	}
	setdoc(doc, docid, doctype){
		this.setState({
			doc: doc,
			docid: docid,
			doctype: doctype
		});
	}
	render(){
		var date = new Date().toLocaleString('en-US', {
			weekday: 'long',
			month: 'long',
			day: 'numeric',
			year: 'numeric',
		})
		return (
			<div>
				<Switch>
					<Route path='/docsismaintenance/editing/:docid/:type' exact component={EditingHeader} />
					<Route path='/docsismaintenance/editing/:docid/:type/:make/:model' component={EditingHeader} exact />
					<Route>
						<Header title='Selection Page' subtitle={date} />
					</Route>
				</Switch>
				<Container>
					<Switch>
						<Route path='/docsismaintenance/editing'>
							<DocsisEditor 
								doc={this.state.doc} 
								docid={this.state.docid} 
								doctype={this.state.doctype}
							/>
						</Route>
						<Route>
							<DocsisSelector setdoc={this.setdoc}/>
						</Route>
					</Switch>
	       </Container>
	    </div>
		)
	}
}
