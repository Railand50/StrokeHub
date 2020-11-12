import React from 'react';
import { SafeAreaView, FlatList, Image, StyleSheet } from 'react-native';
import LanguageCell from "../Components/LanguageCell";

import Posts from "../Data/Posts";

const LanguageScreen = ({ navigation }) => {
	const renderItem = ({ item }) => {
		return <LanguageCell
			title={item.language}
			onPress={() => {
				navigation.navigate("Sections", item.section)   				
			}}
		/>;
	};

	return (
		<SafeAreaView>  
			<FlatList
				data={Posts}
				renderItem={renderItem}
			/>
			<Image
                style={styles.tinyLogo}
                source={require("../assets/logo.png")}
            />
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	img: {
		flex: 1,
		width: null,
		height: null,
	},
	tinyLogo: {
        width: 300,
        height: 300,
    },
});
export default LanguageScreen;
