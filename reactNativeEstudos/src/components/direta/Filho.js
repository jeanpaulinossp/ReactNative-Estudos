import React from "react";
import { Text, View } from "react-native";

const Filho = (props) => {
  let x = 13;
  let y = 100;
  return (
    <View>
      <Text>{props.a}</Text>
      <Text>{props.b}</Text>
    </View>
  );
};

export default Filho;
