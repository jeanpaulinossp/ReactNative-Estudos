// import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, StyleSheet, Text, StatusBar } from "react-native";
import Primeiro from "./components/Primeiro";
import Comp, { Comp1, Comp2 } from "./components/Multi";
import Minmax from "./components/Minmax";
import Aleatorio from "./components/Aleatorio";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Aleatorio />
      <Minmax min={3} max={20} />
      <Primeiro />
      <Comp />
      <Comp1 />
      <Comp2 />
      <Text>Hello World!</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
