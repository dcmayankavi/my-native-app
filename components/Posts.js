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
import SinglePost from './SinglePost';

class Posts extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			siteUrl: this.props.url,
			data: [] 
		}
	}

	loadData() {
		let url = this.state.siteUrl + 'wp-json/wp/v2/posts?per_page=100';
		fetch( url )
		.then(
			response => response.json()
		)
		.then( 
			data => {
				this.setState({data: data })
			}
		).catch(
			err => console.error( this.props.url, err.toString() ) 
		)
	}

	render() {
		return (
			<ScrollView contentContainerStyle={{alignItems: 'center', justifyContent: 'center', padding: 20 }}>
				{this.state.data.map((product, index) => {
					return (
						<SinglePost key={index} product={product} url={this.state.siteUrl} />
					)
				})}
			</ScrollView>
		);
	}

	componentDidMount() {
		this.loadData()
	}
}

export default Posts;
