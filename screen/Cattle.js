import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import EronhiiMedeelel from "../components/EronhiiMedeelel";

const Cattle = () => {
  const [tab, setTab] = useState(0);

  return (
    <View>
      <View
        style={{
          paddingTop: 60,
          paddingBottom: 10,
          backgroundColor: "#D4D4D4",
          alignItems: "center",
          borderRadius: 10,
          elevation: 20,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 1 },
          shadowOpacity: 0.8,
          shadowRadius: 1,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            width: "80%",
            marginBottom: 20,
          }}
        >
          <Image
            style={{
              width: 106,
              height: 90,
              objectFit: "contain",
              borderRadius: 6,
              marginRight: 60,
            }}
            source={require("../assets/img/sheep.png")}
          />
          <Text style={{ fontSize: 14, fontWeight: "600" }}>
            ID: 3947874302987
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-around",
          }}
        >
          <TouchableOpacity
            style={tab === 0 && true ? styles.chosenbutton : styles.button1}
            onPress={() => setTab(0)}
          >
            <Text style={tab === 0 && true ? styles.chosentext : styles.text}>
              Ерөнхий мэдээлэл
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={tab === 1 && true ? styles.chosenbutton : styles.button1}
            onPress={() => setTab(1)}
          >
            <Text style={tab === 1 && true ? styles.chosentext : styles.text}>
              Сүүний гарц
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={tab === 2 && true ? styles.chosenbutton : styles.button1}
            onPress={() => setTab(2)}
          >
            <Text style={tab === 2 && true ? styles.chosentext : styles.text}>
              Үржүүлэг
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      {tab === 0 && <EronhiiMedeelel />}
      <StatusBar style="auto" />
    </View>
  );
};

export default Cattle;

const styles = StyleSheet.create({
  chosenbutton: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 20,
    backgroundColor: "#2072B2",
  },
  button1: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 20,
    backgroundColor: "#F0F5FF",
  },
  chosentext: {
    color: "white",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
  },
  text: {
    color: "gray",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
  },
});
