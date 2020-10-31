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
		marginHorizontal: 16,
		marginTop: 20,
		marginBottom: 30,
		fontWeight: "bold",
		fontSize: 30,
	},

	p: {
		marginHorizontal: 16,
		marginTop: 8,
		fontSize: 18,
		textAlign: "justify",
	},

	imageContainer: {
		height: 200,
		marginTop: -20,
		marginHorizontal: 16,
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