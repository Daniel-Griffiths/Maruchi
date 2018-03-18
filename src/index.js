import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Route, HashRouter as Router, Switch, Link  } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker'
import App from './components/App'
import './assets/css/App.css'

class Index extends Component {

	state = {
		filter: ''
	}

	render(){
		return (
			<Router>
				<div>
					<App/>
				</div>
			</Router>
		)
	}
}

ReactDOM.render(<Index/>, document.getElementById('root'))

registerServiceWorker()
