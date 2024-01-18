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
import React, { useState } from "react";
import CattleList from "./CattleList";
import Checkbox from "expo-checkbox";

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
  const [checkAll, setCheckAll] = useState(false);
  const [test2, setTest2] = useState(false);
  const test = () => {
    setTest2(!test2);
  };

  return (
    <View style={{ width: "100%" }}>
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          marginVertical: 20,
          marginBottom: 30,
          justifyContent: "center",
        }}
      >
        <TouchableOpacity
          style={[styles.button2, { marginRight: 20, paddingHorizontal: 18 }]}
        >
          <Text style={styles.text}>Тэжээл зарцуулт</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button2, { paddingHorizontal: 30 }]}>
          <Text style={styles.text}>Тайлан</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          width: "100%",
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "center",
          marginBottom: 20,
        }}
      >
        <TouchableOpacity
          style={[
            {
              width: 120,
              marginRight: 20,
              borderWidth: 1,
              borderColor: "#D4D4D4",
              backgroundColor: "#F6F6F6",
              paddingVertical: 5,
              paddingHorizontal: 15,
              borderRadius: 20,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            },
          ]}
        >
          <Text style={{ color: "#797979", fontSize: 14, fontWeight: "600" }}>
            Нас
          </Text>
          <Image
            style={{
              width: 20,
              height: 15,
              objectFit: "contain",
            }}
            source={require("../assets/img/down.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            {
              width: 120,
              borderWidth: 1,
              borderColor: "#D4D4D4",
              backgroundColor: "#F6F6F6",
              paddingVertical: 5,
              paddingHorizontal: 15,
              borderRadius: 20,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            },
          ]}
        >
          <Text style={{ color: "#797979", fontSize: 14, fontWeight: "600" }}>
            Хүйс
          </Text>
          <Image
            style={{
              width: 20,
              height: 15,
              objectFit: "contain",
            }}
            source={require("../assets/img/down.png")}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 12,
            fontWeight: "600",
            color: "#2072B2",
            width: "50%",
            paddingLeft: 30,
          }}
        >
          Тэжээл өгөх малаа дээр нь удаан дарж сонгоно уу
        </Text>
        {test2 && (
          <View
            style={{
              flexDirection: "row",
              width: "31%",
              justifyContent: "space-between",
              marginRight: 20,
            }}
          >
            <Checkbox
              color="#2072B2"
              value={checkAll}
              onValueChange={setCheckAll}
            />
            <Text style={{ color: "#1F1B1B", fontSize: 12, fontWeight: "600" }}>
              Бүгдийг нь сонгох
            </Text>
          </View>
        )}
      </View>
      {/* <View style={{ width: "100%", alignItems: "flex-end" }}>
        <TouchableOpacity style={[styles.chosenbutton, { marginRight: 20 }]}>
          <Text style={styles.chosentext}>+ Тэжээл</Text>
        </TouchableOpacity>
      </View> */}
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
              test={test}
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
