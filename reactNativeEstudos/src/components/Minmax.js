import React from "react";
import { Text, View } from "react-native";
import Estilo from "./estilo";

export default (props) => {
  return (
    <View>
      <Text style={Estilo.fontG}>
        O valor {props.max} é maior que o valor {props.min}!
      </Text>
    </View>
  );
};
