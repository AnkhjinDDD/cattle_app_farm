import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import moment from "moment";
import CalendarPicker from "react-native-calendar-picker";

const HeelAvaagui = () => {
  const [date, setDate] = useState(new Date());
  const [calendar, setCalendar] = useState(false);
  const formattedDate = moment(date).format("DD/MM/YYYY");
  const nextDate = moment(date)
    .add(9, "months")
    .add(6, "days")
    .format("DD/MM/YYYY");

  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "space-between",
        height: "100%",
      }}
    >
      <View style={{ width: "100%", alignItems: "center" }}>
        <View
          style={{
            width: "100%",
            paddingTop: 100,
            paddingBottom: 15,
            backgroundColor: "#D4D4D4",
            alignItems: "center",
            borderRadius: 10,
            elevation: 20,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.8,
            shadowRadius: 1,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              width: "80%",
              marginBottom: 30,
            }}
          >
            <Image
              style={{
                width: 106,
                height: 90,
                objectFit: "contain",
                borderRadius: 6,
                marginRight: 60,
              }}
              source={require("../assets/img/sheep.png")}
            />
            <Text style={{ fontSize: 14, fontWeight: "600" }}>
              ID: 3947874302987
            </Text>
          </View>
        </View>
        <View
          style={{
            marginTop: 10,
            width: "85%",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            borderBottomColor: "#2072B2",
            borderBottomWidth: 1,
            paddingBottom: 5,
          }}
        >
          <Image
            style={{
              width: 41,
              height: 32.17,
              objectFit: "contain",
              marginRight: 10,
            }}
            source={require("../assets/img/unee.png")}
          />
          <Text style={{ fontSize: 16, fontWeight: "600" }}>Хээлтэй</Text>
        </View>
        <View style={{ width: "85%", marginTop: 15 }}>
          <Text style={{ fontSize: 16, fontWeight: "600" }}>
            Тооцоолсон огноо түүх
          </Text>
          <View
            style={{
              backgroundColor: "#9CC7E9",
              paddingLeft: 20,
              paddingVertical: 10,
              borderRadius: 5,
              marginTop: 5,
              marginBottom: 10,
            }}
          >
            <Text style={{ fontSize: 15, fontWeight: "bold", color: "white" }}>
              11/09/2023
            </Text>
          </View>
          <View
            style={{
              backgroundColor: "#9CC7E9",
              paddingLeft: 20,
              paddingVertical: 10,
              borderRadius: 5,
              marginBottom: 30,
            }}
          >
            <Text style={{ fontSize: 15, fontWeight: "bold", color: "white" }}>
              12/11/2023
            </Text>
          </View>
          <Text style={{ fontSize: 16, fontWeight: "600" }}>
            Хээл авсан өдөр
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 10,
            }}
          >
            <TouchableOpacity
              style={{
                backgroundColor: "#F0F5FF",
                borderRadius: 5,
                paddingLeft: 10,
                paddingVertical: 10,
                width: "85%",
                marginVertical: 5,
                marginRight: 10,
                borderBottomColor: "#2072B2",
                borderBottomWidth: 1,
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
                {formattedDate}
              </Text>
            </TouchableOpacity>
            <Image
              style={{
                width: 44,
                height: 44,
                objectFit: "contain",
              }}
              source={require("../assets/img/calendar.png")}
            />
          </View>
          {calendar ? (
            <View
              style={{
                backgroundColor: "#F0F5FF",
                paddingVertical: 10,
                borderRadius: 10,
              }}
            >
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
                  setDate(moment(first));
                  setCalendar(!calendar);
                }}
              />
            </View>
          ) : null}
          <Text style={{ fontSize: 16, fontWeight: "600" }}>
            Хээл дуусах өдөр
          </Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <TouchableOpacity
              style={{
                backgroundColor: "#E9E9E9",
                borderRadius: 5,
                paddingLeft: 10,
                paddingVertical: 10,
                width: "85%",
                marginVertical: 5,
                marginRight: 10,
                borderBottomColor: "#999A9B",
                borderBottomWidth: 1,
              }}
            >
              <Text
                style={{
                  color: "#999A9B",
                  fontSize: 17,
                  fontWeight: "700",
                }}
              >
                {nextDate}
              </Text>
            </TouchableOpacity>
            <Image
              style={{
                width: 44,
                height: 44,
                objectFit: "contain",
              }}
              source={require("../assets/img/greyCalendar.png")}
            />
          </View>
        </View>
      </View>
      <StatusBar style="auto" />
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
    </View>
  );
};

export default HeelAvaagui;

const styles = StyleSheet.create({});
