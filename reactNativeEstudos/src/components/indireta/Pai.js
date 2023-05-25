import React, { useState } from "react";
import { Text, View } from "react-native";
import Filho from "./Filho";

const Pai = (props) => {
  const [num, setNum] = useState(0);

  function exibirValor(numero) {
    setNum(numero);
  }

  return (
    <View>
      <Text>{num}</Text>
      <Filho min={1} max={60} funcao={exibirValor} />
    </View>
  );
};

export default Pai;
