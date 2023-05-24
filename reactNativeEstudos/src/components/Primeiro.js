import React from "react";
import { Text, View } from "react-native";
import Estilo from "./estilo";

export default () => {
  console.warn("opa");
  return (
    <View>
      <Text style={Estilo.fontG}>Primeiro Componente!!!</Text>
    </View>
  );
};
