import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import moment from "moment";
import CalendarPicker from "react-native-calendar-picker";
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

const HeelAvaagui = () => {
  const [text, setText] = useState("");
  const [filteredData, setFilteredData] = useState(data);
  const [date, setDate] = useState(new Date());
  const [calendar, setCalendar] = useState(false);
  const formattedDate = moment(date).format("DD/MM/YYYY");
  const [tuluv, setTuluv] = useState(true);
  const [etseg, setEtseg] = useState({ id: "" });
  const [etseggui, setEtseggui] = useState(false);
  const [etsegTab, setEtsegTab] = useState(false);

  const choose = (e) => {
    setEtseg({ id: e });
    setEtsegTab(false);
    console.log(etseg.id);
  };

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
        {etsegTab || (
          <View
            style={{
              width: "100%",
              alignItems: "center",
            }}
          >
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
              <Text style={{ fontSize: 16, fontWeight: "600" }}>
                Хээлтүүлсэн
              </Text>
            </View>
            <View style={{ width: "85%", marginTop: 15 }}>
              <Text style={{ fontSize: 16, fontWeight: "600" }}>
                Үржилд орсон огноо
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
              <Text style={{ fontSize: 16, fontWeight: "600" }}>Төлөв</Text>
              <View
                style={{
                  flexDirection: "row",
                  width: "100%",
                  //   borderWidth: 2,
                  //   borderColor: "#2072B2",
                  marginTop: 5,
                }}
              >
                <TouchableOpacity
                  style={[
                    tuluv && styles.chosenButton,
                    {
                      flex: 1,
                      alignItems: "center",
                      paddingVertical: 10,
                      height: "100%",
                      borderTopLeftRadius: 5,
                      borderBottomLeftRadius: 5,
                      borderColor: "#2072B2",
                      borderWidth: 2,
                    },
                  ]}
                  onPress={() => {
                    setTuluv(true);
                  }}
                >
                  <Text
                    style={[
                      {
                        fontSize: 16,
                        fontWeight: "600",
                        color: "#2072B2",
                      },
                      tuluv && styles.chosenText,
                    ]}
                  >
                    Бухаар
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    tuluv || styles.chosenButton,
                    {
                      flex: 1,
                      alignItems: "center",
                      paddingVertical: 10,
                      borderColor: "#2072B2",
                      borderTopRightRadius: 5,
                      borderBottomRightRadius: 5,
                      borderWidth: 2,
                      borderColor: "#2072B2",
                    },
                  ]}
                  onPress={() => {
                    setTuluv(false);
                  }}
                >
                  <Text
                    style={[
                      { color: "#2072B2", fontSize: 16, fontWeight: "600" },
                      tuluv || styles.chosenText,
                    ]}
                  >
                    Үрээр
                  </Text>
                </TouchableOpacity>
              </View>
              <Text style={{ fontSize: 16, fontWeight: "600", marginTop: 15 }}>
                Эцэг мал
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  width: "100%",
                  marginTop: 5,
                }}
              >
                <TouchableOpacity
                  style={[
                    etseg.id && styles.chosenButton,
                    {
                      flex: 1,
                      alignItems: "center",
                      paddingVertical: 5,
                      justifyContent: "center",
                      borderWidth: 2,
                      borderColor: "#2072B2",
                      borderTopLeftRadius: 5,
                      borderBottomLeftRadius: 5,
                    },
                  ]}
                  onPress={() => {
                    setEtsegTab(true);
                  }}
                >
                  <Text
                    style={[
                      {
                        fontSize: 16,
                        fontWeight: "600",
                        color: "#2072B2",
                      },
                      etseg.id && styles.chosenText,
                    ]}
                  >
                    Сонгох
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    etseggui && styles.chosenButton,
                    {
                      flex: 1,
                      alignItems: "center",
                      paddingVertical: 5,
                      height: "100%",
                      borderWidth: 2,
                      borderColor: "#2072B2",
                      borderTopRightRadius: 5,
                      borderBottomRightRadius: 5,
                    },
                  ]}
                  onPress={() => {
                    setEtseggui(true);
                  }}
                >
                  <Text
                    style={[
                      {
                        color: "#2072B2",
                        fontSize: 16,
                        fontWeight: "600",
                        textAlign: "center",
                      },
                      etseggui && styles.chosenText,
                    ]}
                  >
                    Бухын мэдээлэл байхгүй
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
        {etsegTab && (
          <View style={{ width: "100%", alignItems: "center", marginTop: 10 }}>
            <View
              style={{
                width: "90%",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                borderBottomColor: "#2072B2",
                borderBottomWidth: 1,
                backgroundColor: "#F3F3F3",
                paddingVertical: 5,
                paddingHorizontal: 10,
              }}
            >
              <TextInput
                style={{
                  flex: 1,
                }}
                placeholder="Хайх"
                onChangeText={(e) => {
                  setText(e);
                }}
              />
              <TouchableOpacity
                onPress={() => {
                  setFilteredData(
                    data.filter((item) => item.id.includes(text))
                  );
                }}
              >
                <Image
                  style={{
                    width: 20,
                    height: 20,
                    objectFit: "contain",
                  }}
                  source={require("../assets/img/search1.png")}
                />
              </TouchableOpacity>
            </View>
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
                  tap={() => {
                    choose(item.id);
                  }}
                />
              )}
              style={{ width: "85%" }}
            />
          </View>
        )}
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

const styles = StyleSheet.create({
  chosenButton: {
    backgroundColor: "#2072B2",
  },
  chosenText: {
    color: "white",
  },
});
