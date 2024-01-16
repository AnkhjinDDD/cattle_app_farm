import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  TextInput,
  FlatList,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
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

const FermdMaliinBurtgel = () => {
  const [text, setText] = useState("");

  const [filteredData, setFilteredData] = useState(data);

  return (
    <View style={{ width: "100%" }}>
      <View style={[styles.container2]}>
        <TextInput
          style={styles.search}
          placeholder="Хайх"
          onChangeText={(e) => {
            setText(e);
          }}
        />
        <TouchableOpacity
          style={[styles.button2]}
          onPress={() => {
            setFilteredData(data.filter((item) => item.id.includes(text)));
          }}
        >
          <Image
            style={{ width: 19, height: 19, objectFit: "contain" }}
            source={require("../assets/img/search.png")}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.list}>
        <FlatList
          data={filteredData}
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

export default FermdMaliinBurtgel;

const styles = StyleSheet.create({
  container2: {
    width: "95%",
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 20,
    marginRight: 30,
    marginBottom: 10,
  },
  button2: {
    paddingVertical: 7,
    paddingHorizontal: 6,
    backgroundColor: "#2072B2",
    borderRadius: 16,
    textAlign: "center",
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  },
  search: {
    width: "30%",
    backgroundColor: "#e9e9e9",
    textAlign: "center",
    borderRadius: 20,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
  list: {
    width: "100%",
    alignItems: "center",
  },
});
