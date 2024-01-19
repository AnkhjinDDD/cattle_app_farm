import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

const EronhiiMedeelel = () => {
  return (
    <View
      style={{
        marginTop: 40,
        flexDirection: "row",
      }}
    >
      <View style={{ paddingLeft: 30, width: "60%" }}>
        <Text
          style={{
            fontSize: 14,
            fontWeight: "600",
            marginBottom: 15,
          }}
        >
          Ерөнхий мэдээлэл
        </Text>

        <View>
          <Text
            style={{
              fontSize: 14,
              fontWeight: "600",
            }}
          >
            ID: 3947874302987
          </Text>
          <Text style={styles.text}>Үүлдэр:</Text>
          <Text style={styles.text}>Нас:</Text>
          <Text style={styles.text}>Зүс:</Text>
          <Text style={styles.text}>Сүүний гарц:</Text>
          <Text style={styles.text}>Жин:</Text>
          <Text style={styles.text}>Сүү:</Text>
          <Text style={styles.text}>Ноос:</Text>
          <Text style={styles.text}>Төлийн тоо:</Text>
        </View>

        <Text
          style={{
            fontSize: 14,
            fontWeight: "600",
            marginTop: 15,
          }}
        >
          Эрүүл мэнд Түүх
        </Text>
      </View>
      <TouchableOpacity
        style={{
          height: 98,
          width: 117,
          justifyContent: "space-between",
          borderRadius: 10,
          backgroundColor: "white",
          paddingTop: 15,
          paddingBottom: 20,
          paddingHorizontal: 10,
          alignItems: "center",
          elevation: 20,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 1 },
          shadowOpacity: 0.8,
          shadowRadius: 1,
        }}
      >
        <Text style={{ fontSize: 15, fontWeight: "bold" }}>Төлийн тоо</Text>
        <Text style={{ fontSize: 28, fontWeight: "bold", color: "#2072B2" }}>
          2
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default EronhiiMedeelel;

const styles = StyleSheet.create({
  text: {
    color: "#797979",
    fontSize: 12,
    fontWeight: "600",
  },
});
