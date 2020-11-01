import React from 'react';
import { SafeAreaView, FlatList } from 'react-native';
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
		</SafeAreaView>
	);
};

export default LanguageScreen;
