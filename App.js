import React from 'react';
import {
	StyleSheet,
	Text,
	TextInput,
	View,
	Image,
	ScrollView,
	Dimensions,
	Linking
} from 'react-native';
import { Router, Scene } from 'react-native-router-flux';

import Home from './components/Home';
import Posts from './components/Posts';

class App extends React.Component {
	render() {
		return (
			<Router>
				<Scene key="root">
					<Scene key="home" component={Home} title="Home" />
					<Scene key="posts" component={Posts} title="Posts" />
				</Scene>
			</Router>
		);
	}
}

export default App;