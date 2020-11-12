import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

const DetailsHeader = (props) => <Text style={styles.h1}>{props.content}</Text>;

const DetailsParagraph = (props) => <Text style={styles.p}>{props.content}</Text>;

const DetailsImage = (props) => (
	<View style={styles.imageContainer}>
		<Image
			style={styles.img}
			source={props.content}
		/>
	</View>
);

const styles = StyleSheet.create({
	h1: {
		marginHorizontal: 24,
		marginTop: 32,
		marginBottom: 16,
		fontWeight: "bold",
		fontSize: 30,
	},

	p: {
		marginHorizontal: 24,
		marginTop: 8,
		fontSize: 18,
		textAlign: "justify",
	},

	imageContainer: {
		width: 430,
		height: 295, 
		
		marginTop: 0,
		marginHorizontal: 0,
		borderRadius: 8,
		overflow: "hidden", 
		backgroundColor: "lightgray",
	},

	img: {
		flex: 1,
		width: null,
		height: null,
	},
});

export { DetailsHeader, DetailsParagraph, DetailsImage };