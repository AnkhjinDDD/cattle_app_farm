import { StatusBar } from "expo-status-bar";
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
} from "react-native";
import React from "react";
import CattleList from "./CattleList";

const data = [
  {
    id: "1",
    uulder: "Монгол",
    nas: "Шүдлэн",
    zus: "Халзан",
    jin: "100",
    suu: "Шүдлэн",
    noos: "Халзан",
  },
  {
    id: "2",
    uulder: "Монгол",
    nas: "Шүдлэн",
    zus: "Халзан",
    jin: "100",
    suu: "Шүдлэн",
    noos: "Халзан",
  },
  {
    id: "3",
    uulder: "Монгол",
    nas: "Шүдлэн",
    zus: "Халзан",
    jin: "100",
    suu: "Шүдлэн",
    noos: "Халзан",
  },
  {
    id: "4",
    uulder: "Монгол",
    nas: "Шүдлэн",
    zus: "Халзан",
    jin: "100",
    suu: "Шүдлэн",
    noos: "Халзан",
  },
];

const Tejeel = () => {
  return (
    <View style={{ width: "100%" }}>
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          marginVertical: 20,
          justifyContent: "center",
        }}
      >
        <TouchableOpacity
          style={[styles.button2, { marginRight: 5, paddingHorizontal: 18 }]}
        >
          <Text style={styles.text}>Тэжээл зарцуулт</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button2, { paddingHorizontal: 8 }]}>
          <Text style={styles.text}>Тэжээл зарцуулалтын тайлан</Text>
        </TouchableOpacity>
      </View>
      <View style={{ width: "100%", alignItems: "flex-end" }}>
        <TouchableOpacity style={[styles.chosenbutton, { marginRight: 20 }]}>
          <Text style={styles.chosentext}>+ Тэжээл</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.list}>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <CattleList
              id={` ${item.id}`}
              uulder={item.uulder}
              nas={item.nas}
              zus={item.zus}
              jin={item.jin}
              suu={item.suu}
              noos={item.noos}
            />
          )}
          style={{ width: "85%" }}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
};

export default Tejeel;

const styles = StyleSheet.create({
  chosenbutton: {
    padding: 5,
    paddingHorizontal: 10,
    borderRadius: 20,
    elevation: 20,
    backgroundColor: "#2072B2",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 1,
  },
  button2: {
    backgroundColor: "#e9e9e9",
    paddingVertical: 5,
    alignItems: "center",
    borderRadius: 15,
  },
  chosentext: {
    color: "white",
    fontSize: 12,
    fontWeight: "500",
  },
  text: {
    color: "#6D6D6D",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
  },
  list: {
    width: "100%",
    alignItems: "center",
  },
});
