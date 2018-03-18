import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import Nav from './Nav'
import WebView from './WebView'

export default class extends Component {

	state = {
		view: {
			url: ''
		},
	}

	render(){
		return (
			<App>
				<Nav handleClick={ view => this.setState({view: view}) } items={
					[
						{
							title: 'Github',
							url: 'https://github.com',
						},
						{
							title: 'Github',
							url: 'https://github.com',
						},						
						{
							title: 'Slack',
							url: 'https://sugarcs.slack.com',
						}
					]
				}/>
				<WebView view={ this.state.view.url }/>
			</App>
		)
	}
}				

const App = styled.div`
	display: flex;
`