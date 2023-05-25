import React from "react";
import { Text, View, Button } from "react-native";

const Filho = (props) => {
  function gerarNumero(min, max) {
    const fator = max - min + 1;
    return parseInt(Math.random() * fator) + min;
  }

  return (
    <View>
      <Button
        title="Executar"
        onPress={() => {
          const n = gerarNumero(props.min, props.max);
          props.funcao(n);
        }}
      />
    </View>
  );
};

export default Filho;
