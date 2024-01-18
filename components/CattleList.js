import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const CattleList = ({
  id,
  uulder,
  nas,
  zus,
  suuniiGarts,
  jin,
  suu,
  noos,
  test,
}) => {
  return (
    <TouchableOpacity style={styles.container3} onLongPress={test}>
      <Image
        style={{
          width: 106,
          height: 90,
          objectFit: "contain",
          borderRadius: 6,
          marginRight: 20,
        }}
        source={require("../assets/img/sheep.png")}
      />
      <View>
        <Text style={styles.text1}>{`ID:${id}`}</Text>
        <View style={{ flexDirection: "row", width: "100%" }}>
          <View style={[{ width: "45%" }, { marginRight: 5 }]}>
            <Text style={styles.text2}>Үүлдэр: {uulder}</Text>
            <Text style={styles.text2}>Нас: {nas}</Text>
            <Text style={styles.text2}>Зүс: {zus}</Text>
            <Text style={styles.text2}>Сүүний гарц: {suuniiGarts}</Text>
          </View>
          <View style={[{ width: "30%" }]}>
            <Text style={styles.text2}>Жин: {jin}</Text>
            <Text style={styles.text2}>Сүү: {suu}</Text>
            <Text style={styles.text2}>Ноос: {noos}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CattleList;

const styles = StyleSheet.create({
  container3: {
    width: "100%",
    flexDirection: "row",
    paddingTop: 20,
    paddingBottom: 20,
    borderBottomColor: "#ececec",
    borderBottomWidth: 1,
  },
  text1: {
    color: "black",
    fontSize: 14,
    fontWeight: "600",
  },
  text2: {
    fontSize: 12,
    color: "#797979",
  },
});
