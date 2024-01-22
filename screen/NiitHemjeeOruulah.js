import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import CalendarPicker from "react-native-calendar-picker";
import moment from "moment";
import { StatusBar } from "expo-status-bar";

const NiitHemjeeOruulah = () => {
  const [date, setDate] = useState(moment().format("DD/MM/YYYY"));
  const [garts, setGarts] = useState(0);
  const [calendar, setCalendar] = useState(false);

  return (
    <View
      style={{
        paddingTop: 100,
        paddingHorizontal: 20,
        justifyContent: "space-between",
        alignItems: "center",
        height: "100%",
      }}
    >
      <View style={{ width: "100%" }}>
        <Text style={styles.text3}>Нийт сүүний гарц</Text>
        <View
          style={{
            backgroundColor: "#F0F5FF",
            marginVertical: 10,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "flex-end",
            paddingHorizontal: 5,
            paddingVertical: 5,
            paddingRight: 10,
            borderBottomColor: "#2072B2",
            borderBottomWidth: 1,
            borderTopLeftRadius: 5,
            borderTopRightRadius: 5,
          }}
        >
          <Image
            style={{ width: 36, height: 36, objectFit: "contain" }}
            source={require("../assets/img/saalitai.png")}
          />
          <TextInput
            style={{
              fontSize: 20,
              color: "#2072B2",
              fontWeight: "bold",
              flex: 1,
              textAlign: "right",
            }}
            defaultValue="0"
            value={garts}
            onChange={(first) => {
              setGarts(first);
            }}
          />
          <Text
            style={{
              color: "#969191",
              fontSize: 12,
              fontWeight: "600",
              marginBottom: 3,
              marginLeft: 5,
            }}
          >
            Л
          </Text>
        </View>
        <Text style={styles.text3}>Саалийн огноо</Text>
        <View style={{ width: "100%", alignItems: "center" }}>
          <TouchableOpacity
            style={{
              backgroundColor: "#F0F5FF",
              alignItems: "center",
              borderRadius: 10,
              paddingVertical: 10,
              width: "60%",
              marginVertical: 10,
            }}
            onPress={() => {
              setCalendar(!calendar);
            }}
          >
            <Text
              style={{
                color: "#2072B2",
                fontSize: 17,
                fontWeight: "700",
              }}
            >
              {date}
            </Text>
          </TouchableOpacity>
          {calendar ? (
            <CalendarPicker
              weekdays={["Ня", "Да", "Мя", "Лха", "Пү", "Ба", "Бя"]}
              months={[
                "1-р сар",
                "2-р сар",
                "3-р сар",
                "4-р сар",
                "5-р сар",
                "6-р сар",
                "7-р сар",
                "8-р сар",
                "9-р сар",
                "10-р сар",
                "11-р сар",
                "12-р сар",
              ]}
              previousTitle="Өмнөх"
              nextTitle="Дараах"
              todayBackgroundColor="gray"
              selectedDayStyle={{ backgroundColor: "#2072B2" }}
              selectedDayTextStyle={{ color: "white" }}
              textStyle={{ fontSize: 17, fontWeight: "600" }}
              width={350}
              onDateChange={(first) => {
                setDate(moment(first).format("DD/MM/YYYY"));
                console.log(first, typeof first);
              }}
            />
          ) : null}
          <TouchableOpacity
            style={{
              backgroundColor: "#D6DADD",
              width: 144,
              height: 52,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 5,
              marginTop: 20,
            }}
          >
            <Image
              style={{ width: 22, height: 18, objectFit: "contain" }}
              source={require("../assets/img/camera.png")}
            />
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: "#2072B2",
          paddingHorizontal: 20,
          paddingVertical: 10,
          borderRadius: 20,
          marginBottom: 10,
        }}
      >
        <Text style={{ color: "white", fontSize: 12, fontWeight: "600" }}>
          Хадгалах
        </Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
};

export default NiitHemjeeOruulah;

const styles = StyleSheet.create({
  text3: {
    fontSize: 15,
    fontWeight: "700",
  },
});

const customDateStyles = StyleSheet.create({
  style: { color: "black" },
  textStyle: { color: "black" },
});
