import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

const CattleList = ({ id, uulder, nas, zus }) => {
  return (
    <View style={styles.container3}>
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
        <View
          style={{
            flexDirection: "row",
            width: "100%",
            justifyContent: "flex-start",
          }}
        >
          <View style={[{ width: "50%" }, { marginRight: 5 }]}>
            <Text style={styles.text2}>Үүлдэр: {uulder}</Text>
            <Text style={styles.text2}>Нас: {nas}</Text>
            <Text style={styles.text2}>Зүс: {zus}</Text>
          </View>
          <View
            style={{
              backgroundColor: "#E8E8E8",
              borderBottomWidth: 1,
              borderBottomColor: "#2072B2",
              width: 80,
              height: 33,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 5,
            }}
          >
            <TextInput
              value="0"
              style={{
                color: "#2072B2",
                fontSize: 15,
                fontWeight: "bold",
                textAlign: "center",
              }}
            />
            <Text style={{ fontSize: 12, fontWeight: "600", color: "#969191" }}>
              Л
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CattleList;

const styles = StyleSheet.create({
  container3: {
    width: "85%",
    flexDirection: "row",
    marginTop: 20,
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
