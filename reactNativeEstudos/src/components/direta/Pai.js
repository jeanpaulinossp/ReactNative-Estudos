import React from "react";
import { Text, View } from "react-native";
import Filho from "./Filho";

const Pai = (props) => {
  let x = 13;
  let y = 100;
  return (
    <View>
      <Filho a={x} b={y} />
    </View>
  );
};

export default Pai;
