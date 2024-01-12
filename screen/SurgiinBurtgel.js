import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import AshigShim from "../components/AshigShim";
import FermdMaliinBurtgel from "../components/FermdMaliinBurtgel";
import Tejeel from "../components/Tejeel";
import { StatusBar } from "expo-status-bar";

const SurgiinBurtgel = () => {
  const [tab, setTab] = useState(0);

  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <TouchableOpacity
          style={tab === 0 && true ? styles.chosenbutton : styles.button1}
          onPress={() => setTab(0)}
        >
          <Text style={tab === 0 && true ? styles.chosentext : styles.text}>
            Ашиг шим
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={tab === 1 && true ? styles.chosenbutton : styles.button1}
          onPress={() => setTab(1)}
        >
          <Text style={tab === 1 && true ? styles.chosentext : styles.text}>
            фермд бүртгүүлсэн малын бүртгэл
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={tab === 2 && true ? styles.chosenbutton : styles.button1}
          onPress={() => setTab(2)}
        >
          <Text style={tab === 2 && true ? styles.chosentext : styles.text}>
            Тэжээл
          </Text>
        </TouchableOpacity>
      </View>
      {tab === 0 && <AshigShim />}
      {tab === 1 && <FermdMaliinBurtgel />}
      {tab === 2 && <Tejeel />}
      <StatusBar style="auto" />
    </View>
  );
};

export default SurgiinBurtgel;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    marginTop: 50,
    flexDirection: "column",
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  container1: {
    display: "flex",
    width: "93%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  chosenbutton: {
    padding: 5,
    borderRadius: 20,
    elevation: 20,
    backgroundColor: "#2072B2",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 1,
  },
  button1: {
    padding: 5,
    borderRadius: 20,
    elevation: 20,
    backgroundColor: "#e9e9e9",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 1,
  },
  chosentext: {
    color: "white",
    fontSize: 12,
    fontWeight: "500",
  },
  text: {
    color: "gray",
    fontSize: 13,
    fontWeight: "500",
  },
});
