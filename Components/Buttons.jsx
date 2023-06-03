import * as React from "react";
import { Button, View, StyleSheet } from "react-native";
import {pb} from '../Plugins/pocketbase'

export function ButtonsChoice({choices,press}) {

  return (
    <View>
      <View style={style.row}>
          <View style={style.gridContainer}>
            <Button onPress={() =>press(0,1)} title={choices.choice[0]|| "null0" }></Button>
            <Button onPress={() => press(1,1)} title={choices.choice[1] || "null1"}></Button>
          </View>
      </View>
      <View style={style.row}>
          <View style={style.gridContainer}>
            <Button onPress={() => press(2,1)} title={choices.choice[2]  || "null2"}></Button>
            <Button onPress={() =>press(3,1)} title={choices.choice[3] || "null3"}></Button>
          </View>
      </View>
    </View>

    
  );
}

const style = StyleSheet.create({
  gridContainer: {
    flex: 2,
    marginHorizontal: "auto",
    width: 400,
  },
  row: {
    flexDirection: "row",
  },
});