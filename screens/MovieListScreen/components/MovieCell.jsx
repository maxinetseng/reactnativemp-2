import React from "react";
import { View, Image, Text } from "react-native";
import { styles } from "../MovieListScreen.styles";

export const MovieCell = ({ movieItem }) => {
  // TODO: Create and return the MovieCell component.
  // HINT: Take a look at the movieCell styles, as well as the video
  // demo in the spec, to figure out what this should look like.
  <View style = {styles.movieCell}>
    <View style = {styles.movieCellImage}> 
      <View style = {styles.movieCellLeft}>
        <Image 
          source = {poster}
          style = {styles.poster}
        />
      </View>
      <View style = {styles.movieCellRight}>
        <Text style = {styles.movieCellTitle}>{movieItem.title}</Text> 
        <Text style = {styles.movieCellSubtitle}> Released {year}</Text>
        <Text>{genres}</Text>
        <Text>{actors}</Text>
        <Text>{storyline}</Text>
      </View>
    </View>
  </View>
  return (
    <View>
      <Text>{MovieCell}</Text>
    </View>
  );
};
