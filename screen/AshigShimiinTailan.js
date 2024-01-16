import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import CalendarPicker from "react-native-calendar-picker";
import moment from "moment";
import { StatusBar } from "expo-status-bar";

const AshigShimiinTailan = () => {
  const [date, setDate] = useState(moment().format("DD/MM/YYYY"));
  const [calendar, setCalendar] = useState(false);

  const data = [
    {
      date: "09/11/2023",
      size: 5,
      amount: 10,
    },
    {
      date: "19/12/2023",
      size: 15,
      amount: 10,
    },
    {
      date: "23/12/2023",
      size: 25,
      amount: 10,
    },
    {
      date: "25/12/2023",
      size: 35,
      amount: 10,
    },
  ];

  const [filteredData, setFilteredData] = useState(data);

  const filterData = (date) => {
    setFilteredData(data.filter((item) => item.date.includes(date)));
  };

  return (
    <View
      style={{
        paddingTop: 50,
        paddingHorizontal: 20,
        alignItems: "center",
        width: "100%",
      }}
    >
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
      <View
        style={{
          flexDirection: "row",
          width: "85%",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ fontSize: 14, fontWeight: "600" }}>Он сар өдөр</Text>
        <Text style={{ fontSize: 14, fontWeight: "600" }}>Хэмжээ</Text>
        <Text style={{ fontSize: 14, fontWeight: "600" }}>Үнээний тоо</Text>
      </View>
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
            filterData(moment(first).format("DD/MM/YYYY"));
            setCalendar(!calendar);
            console.log(first, typeof first);
          }}
        />
      ) : null}
      {calendar ? null : (
        <View
          style={{
            backgroundColor: "#F0F5FF",
            width: "90%",
            borderRadius: 10,
            paddingHorizontal: 10,
          }}
        >
          <FlatList
            data={filteredData}
            renderItem={({ item }) => (
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginVertical: 10,
                  marginRight: 15,
                }}
              >
                <Text
                  style={{
                    color: "#2072B2",
                    fontSize: 15,
                    fontWeight: "700",
                  }}
                >
                  {item.date}
                </Text>
                <Text
                  style={{
                    color: "#2072B2",
                    fontSize: 15,
                    fontWeight: "700",
                  }}
                >
                  {item.size}L
                </Text>
                <Text
                  style={{
                    color: "#2072B2",
                    fontSize: 15,
                    fontWeight: "700",
                  }}
                >
                  {item.amount} үнээ
                </Text>
              </View>
            )}
            style={{ width: "100%" }}
          />
        </View>
      )}

      <StatusBar style="auto" />
    </View>
  );
};

export default AshigShimiinTailan;

const styles = StyleSheet.create({});
