import React, {Component, Fragment} from 'react'
import { hot } from 'react-hot-loader/root';


// 在客户端渲染的组件
class App extends Component {

  render() {
	return (
		<Fragment>
			<h1>React SSR</h1>
			<h3>Welldone~</h3>
			<p>this is long content~ this is long content~ this is long content~</p>
			<p>this is long content~ this is long content~ this is long content~</p>
			<p>this is long content~ this is long content~ this is long content~</p>
		</Fragment>
	)
  }
}

export default hot(App)