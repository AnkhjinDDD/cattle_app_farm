import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import React from "react";

const FermdMaliinBurtgel = () => {
  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <TouchableOpacity style={styles.button1}>
          <Text style={styles.text}>Ашиг шим</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button1}>
          <Text style={styles.text}>фермд бүртгүүлсэн малын бүртгэл</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button1}>
          <Text style={styles.text}>Тэжээл</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
};

export default FermdMaliinBurtgel;

const styles = StyleSheet.create({
  container: {
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
  text: {
    color: "gray",
    fontSize: 13,
  },
});
