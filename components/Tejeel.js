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

const Cattle = ({ id, uulder, nas, zus, suuniiGarts, jin, suu, noos }) => {
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
    </View>
  );
};

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
            <Cattle
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
  container3: {
    width: "100%",
    flexDirection: "row",
    marginTop: 20,
    paddingBottom: 20,
    borderBottomColor: "#ececec",
    borderBottomWidth: 1,
  },
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
  text1: {
    color: "black",
    fontSize: 14,
    fontWeight: "600",
  },
  text2: {
    fontSize: 12,
    fontWeight: "500",
    color: "#797979",
  },
  list: {
    width: "100%",
    alignItems: "center",
  },
});
