import React, { Component } from 'react'
import styled from 'styled-components'

export default class extends Component {

	render(){
		return (
			<Nav>
				{ this.props.items.map((item, key) => 
					<NavItem 
						onClick={ 
							() => { 
								this.props.handleClick(item) 

							}
						}	 
						key={ key }
					>
						<img style={{ width: '1.5rem' }} src={ `${item.url}/favicon.ico` } alt=""/>
					</NavItem>
				) }
				<NavAdd>+</NavAdd>
			</Nav>
		)
	}
}

const Nav = styled.nav`
	display: flex;
	flex-direction: column;
	background: whitesmoke;
	border-right: 1px solid rgba(0,0,0,.1)
`

const NavItem = styled.div`
	padding: 1rem 1.5rem;
	cursor: pointer;
	position: relative;
	transition: .1s ease;
	text-align: center;
	&:after{
		content: "";
		display: block;
		position: absolute;
		left: 0;
		top: 0;
		height: 100%;
		width: 0;
		background: rgba(0,0,0,.5);
		transition: .3s ease;
	}
	&:hover{
		background: rgba(0,0,0,0.1);
		&:after{
			width: 3px;
		}
	}
`

const NavAdd = styled.div`
	padding: 1rem 1.5rem;
	cursor: pointer;
	text-align: center;
	margin-top: auto;
	color: #000;
	font-size: 1.5rem;
`