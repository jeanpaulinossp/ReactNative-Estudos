import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Estilo from "./estilo";

const Aleatorio = () => {
  const [numero, setNumero] = useState(0);

  function numAleatorio() {
    setNumero((Math.random() * 1000).toFixed(0));
  }
  return (
    <View style={Estilo.View}>
      <Text>{numero}</Text>
      <TouchableOpacity onPress={numAleatorio} style={Estilo.Button}>
        <Text style={Estilo.txtButton}>Gerar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Aleatorio;
