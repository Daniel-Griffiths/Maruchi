import styled from 'styled-components'
import React, { Component } from 'react'

export default class extends Component {

	render(){
		return (
			<webview
				src={ this.props.view }
				style={{
					height: '100vh',
					width: '100vw',
					display: 'flex'
				}}
			></webview>
		)
	}
}
