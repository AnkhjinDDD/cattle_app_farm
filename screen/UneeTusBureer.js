import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import CattleList from "../components/CattleList2";
import { StatusBar } from "expo-status-bar";

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
const UneeTusBureer = () => {
  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <View style={styles.list}>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <CattleList
              id={` ${item.id}`}
              uulder={item.uulder}
              nas={item.nas}
              zus={item.zus}
            />
          )}
          style={{ width: "85%" }}
        />
      </View>
      <TouchableOpacity
        style={{
          marginTop: 20,
          backgroundColor: "#2072B2",
          paddingHorizontal: 20,
          paddingVertical: 10,
          borderRadius: 20,
          marginBottom: 10,
        }}
      >
        <Text style={{ color: "white" }}>Хадгалах</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
};

export default UneeTusBureer;

const styles = StyleSheet.create({
  list: {
    marginTop: 100,
    width: "100%",
    alignItems: "center",
  },
});
