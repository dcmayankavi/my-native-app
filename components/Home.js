import React from 'react';
import {
	StyleSheet,
	Text,
	TextInput,
	View,
	TouchableOpacity
} from 'react-native';
import { Actions } from 'react-native-router-flux';

class Home extends React.Component {

	constructor() {
		super();
		this.state = { 
			// wp_url: 'http://demo-rtt-adult.wp-script.com/'
			wp_url: 'http://wpastra.com/'
		}
	}

	render() {
		return(
			<View style={{padding: 10}} >
				<Text style={{fontSize: 15, marginBottom: 10}}>Enter WordPress URL: </Text>
				<TextInput 
					style={{padding: 10, fontSize: 18, marginBottom: 10}}
					placeholder="http://example.com/"
					onChangeText={ ( text ) => {
						this.setState({
							wp_url: text
						});
					}} 
					value={this.state.wp_url}
				/>
				<TouchableOpacity onPress={ () => {
						Actions.posts({
							url: this.state.wp_url
						})
					}} >
					<Text style={{ fontSize: 18 }}>Fetch Posts</Text>
				</TouchableOpacity>
			</View>
		);
	}
}

export default Home;