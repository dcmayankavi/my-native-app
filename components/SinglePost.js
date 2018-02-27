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

class SinglePost extends React.Component {
	
	constructor(props) {
		super(props)
		this.state = {
			product: props.product,
			img_url: ''
		}
	}

	render() {
		let pic = {
			uri: this.state.img_url ? this.state.img_url : 'https://www.mdtgrow.com/wp-content/themes/456ecology/assets//img/no-product-image.png'
		};
		
		let title = '';
		return (
			<View style={styles.container}>
				<Image resizeMode='cover' source={pic} style={styles.image}/>
				<Text style={styles.title} onPress={() => Linking.openURL(this.state.product.link)}>{this.state.product.title.rendered}</Text>
			</View>
		);
	}

	componentDidMount() {

		let url = this.props.url + 'wp-json/wp/v2/media/' + this.state.product.featured_media;
		fetch( url )
		.then(
			response => response.json()
		)
		.then( 
			data => {
				this.setState({img_url: data.source_url })
			}
		).catch(
			err => console.error( this.props.url, err.toString() ) 
		)
	}
}

export default SinglePost;

const win = Dimensions.get('window');

const styles = StyleSheet.create({
	container: {
		marginBottom: 30,
		borderWidth: 1,
		borderStyle: 'solid',
		borderColor: '#e2e2e2',
		width: win.width - 40
	},
	image: {
		width: '100%',
		height: 250
	},
	title: {
		fontSize: 25,
		padding: 10,
		color: 'blue'
	}
});