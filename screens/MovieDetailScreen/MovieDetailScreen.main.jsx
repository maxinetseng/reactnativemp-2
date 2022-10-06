import React from "react";
import { SafeAreaView, Text, Image, ScrollView } from "react-native";
import { styles } from "./MovieDetailScreen.styles";

export default function MovieDetailScreen({ route }) {
  // TODO: Recieve the movieItem by destructuring route params.
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container}>
        {/* TODO: Configure this screen to have an image and appropriate text describing the movie. 
                See the example on the spec for design inspiration.
                Feel free to use the styles below. */}
          <View style = {styles.image}>  
            <Image
              source = {poster}
              style = {styles.poster}
            />
          </View>
          <Header>{title}</Header> 
          <Text>Released {year}</Text>
          <Text>{genres}</Text>
          <Text>{actors}</Text>
          <Text>{storyline}</Text>
      </ScrollView>
    </SafeAreaView>
  );
}
