import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import CattleList from "../components/CattleList";

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

const TuliinToo = () => {
  return (
    <View style={{ paddingTop: 100, alignItems: "center" }}>
      <Text style={{ fontSize: 15, fontWeight: "bold" }}>Төлийн тоо</Text>
      <View
        style={{
          alignItems: "center",
          width: "90%",
          backgroundColor: "#F0F5FF",
          marginTop: 10,
          borderRadius: 10,
          paddingHorizontal: 20,
        }}
      >
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
          style={{ width: "100%" }}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
};

export default TuliinToo;

const styles = StyleSheet.create({});
