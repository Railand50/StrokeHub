import React from 'react';
import { StyleSheet, SafeAreaView, View, Image, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { DetailsHeader, DetailsImage, DetailsParagraph } from "../Components/DetailsComponents";

const DetailsScreen = ({ navigation, route }) => {
	const props = route.params;

	const body = props.body.map(item => {
		switch (item.type) {
			case "img":
				return <DetailsImage content={item.content} />;
			case "h1":
				return <DetailsHeader content={item.content} />;
			case "p":
				return <DetailsParagraph content={item.content} />;
		}
	});

	return (

		<SafeAreaView style={styles.safeArea}>
			<ScrollView>
				{/* <View style={styles.imageWrapper}>
					<Image style={styles.thumbnail} resizeMode='contain' source={props.thumbnail} />
				</View> */}
				<View style={styles.header}>
					<Text style={styles.title}>{props.title}</Text>
					<Text style={styles.subtitle}>{props.subtitle}</Text>
				</View>
				{body}
			</ScrollView>
		</SafeAreaView>
	)
};

const styles = StyleSheet.create({
	header: {
		marginVertical: 24,
	},

	imageWrapper: {
		height: 150,
		marginHorizontal: 40,
		marginTop: 24,
		borderRadius: 8,
		overflow: "hidden",
	},

	thumbnail: {
		flex: 1,
		width: null,
		height: null,
		backgroundColor: "lightgray"
	},

	title: {
		marginHorizontal: 24,
		marginBottom: 8,
		fontSize: 40,
		fontWeight: "bold",
	},

	subtitle: {
		marginHorizontal: 24,
		fontSize: 20,
		fontStyle: "italic",
		opacity: 0.5,
		marginBottom: -20,
	},
});

export default DetailsScreen;