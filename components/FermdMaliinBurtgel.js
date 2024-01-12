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

const FermdMaliinBurtgel = () => {
  return (
    <View style={{ width: "100%" }}>
      <View style={[styles.container2]}>
        <TextInput style={styles.search} placeholder="Хайх" />
        <TouchableOpacity style={[styles.button2]}>
          <Image
            style={{ width: 19, height: 19, objectFit: "contain" }}
            source={require("../assets/img/search.png")}
          />
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
  container3: {
    width: "100%",
    flexDirection: "row",
    marginTop: 20,
    paddingBottom: 20,
    borderBottomColor: "#ececec",
    borderBottomWidth: 1,
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
  text1: {
    color: "black",
    fontSize: 14,
    fontWeight: "600",
  },
  text2: {
    fontSize: 12,
    color: "#797979",
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
