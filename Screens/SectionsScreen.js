import React from 'react';
import { SafeAreaView, FlatList } from 'react-native';
import { roundToNearestPixel } from 'react-native/Libraries/Utilities/PixelRatio';
import SectionCell from "../Components/SectionCell";



const SectionsScreen = ({ navigation, sections, route }) => {
	const renderItem = ({ item }) => {
		return <SectionCell
			thumbnail={item.thumbnail}
			title={item.title}
			subtitle={item.subtitle}
			onPress={() => {
			if (item.type == "sections") {
				console.log(item.body)
				navigation.navigate("Sections", item );
			} else {
				navigation.navigate("Details", item); 
				}
			}}
		/>;
	};
 
	if (sections == undefined) {
		navigation.setOptions({title: route.params.title})
	}
	return (
		<SafeAreaView>  
			<FlatList
				data={ sections || route.params.body }
				renderItem={renderItem}
			/>
		</SafeAreaView>
	);
};

export default SectionsScreen;