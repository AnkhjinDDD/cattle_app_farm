import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import CattleList from "../components/CattleList3";

const data = [
  {
    id: "1",
    uulder: "Монгол",
    nas: "Шүдлэн",
    zus: "Халзан",
    ognoo: "10/10/2023",
  },
  {
    id: "2",
    uulder: "Монгол",
    nas: "Шүдлэн",
    zus: "Халзан",
    ognoo: "10/10/2023",
  },
  {
    id: "3",
    uulder: "Монгол",
    nas: "Шүдлэн",
    zus: "Халзан",
    ognoo: "10/10/2023",
  },
  {
    id: "4",
    uulder: "Монгол",
    nas: "Шүдлэн",
    zus: "Халзан",
    ognoo: "10/10/2023",
  },
];

const TejeelZartsuulalt = () => {
  return (
    <View style={{ paddingTop: 50 }}>
      <View style={styles.list}>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <CattleList
              id={` ${item.id}`}
              uulder={item.uulder}
              nas={item.nas}
              zus={item.zus}
              ognoo={item.ognoo}
            />
          )}
          style={{ width: "85%" }}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
};

export default TejeelZartsuulalt;

const styles = StyleSheet.create({
  list: {
    width: "100%",
    alignItems: "center",
  },
});
