import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";

const Urjuuleg = () => {
  const [heeltuulged, setHeeltuulged] = useState(false);
  const [heeltuulsen, setHeeltuulsen] = useState(true);
  const [heeltei, setHeeltei] = useState(true);
  const [orgilsaamtai, setOrgilSaamtai] = useState(false);
  const [shirgesen, setShirgesen] = useState(false);
  const [heelAvsan, setHeelAvsan] = useState(false);
  const [heelHayasan, setHeelHayasan] = useState(false);
  const [heelAvaagui, setHeelAvaagui] = useState(true);

  return (
    <View style={{ alignItems: "center", marginTop: 20 }}>
      <View style={{ width: "93%" }}>
        <Text style={{ fontSize: 16, fontWeight: "600", marginBottom: 20 }}>
          Үржүүлгийн статусыг тохируулах
        </Text>
        <View
          style={{
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          <TouchableOpacity style={styles.box1}>
            <View style={{ flexDirection: "row" }}>
              <Text
                style={(styles.text1, { marginRight: heeltuulged ? 1 : 10 })}
              >
                Хээлтүүлгэд бэлэн
              </Text>
              {heeltuulged && (
                <Image
                  style={(styles.activeImage, { marginLeft: 3 })}
                  source={require("../assets/img/active.png")}
                />
              )}
            </View>
            <Image
              style={(styles.uneeImage, { marginTop: 2 })}
              source={require("../assets/img/unee.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.box1}>
            <View style={{ flexDirection: "row" }}>
              <Text
                style={(styles.text1, { marginRight: heeltuulsen ? 0 : 9 })}
              >
                Хээлтүүлсэн
              </Text>
              {heeltuulsen && (
                <Image
                  style={(styles.activeImage, { marginLeft: 3 })}
                  source={require("../assets/img/active.png")}
                />
              )}
            </View>
            <Image
              style={styles.uneeImage}
              source={require("../assets/img/unee.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.box1}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-end",
                width: "90%",
              }}
            >
              <Text style={(styles.text1, { marginRight: heeltei ? 10 : 23 })}>
                Хээлтэй
              </Text>
              {heeltei && (
                <Image
                  style={(styles.activeImage, { marginLeft: 5 })}
                  source={require("../assets/img/active.png")}
                />
              )}
            </View>
            <Image
              style={styles.uneeImage}
              source={require("../assets/img/unee.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.box2}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-end",
                width: "90%",
              }}
            >
              <Text
                style={(styles.text1, { marginRight: orgilsaamtai ? 10 : 23 })}
              >
                Оргил саамтай
              </Text>
              {orgilsaamtai && (
                <Image
                  style={(styles.activeImage, { marginLeft: 5 })}
                  source={require("../assets/img/active.png")}
                />
              )}
            </View>
            <Image
              style={(styles.uneeImage, { marginTop: 10 })}
              source={require("../assets/img/unee.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.box2}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-end",
                width: "90%",
              }}
            >
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: "600",
                  textAlign: "center",
                  marginRight: shirgesen ? 7 : 20,
                }}
              >
                Ширгэсэн
              </Text>
              {shirgesen && (
                <Image
                  style={(styles.activeImage, { marginLeft: 5 })}
                  source={require("../assets/img/active.png")}
                />
              )}
            </View>
            <Image
              style={(styles.uneeImage, { marginTop: 25 })}
              source={require("../assets/img/unee.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              height: 92,
              width: "31%",
              justifyContent: "center",
              borderRadius: 10,
              backgroundColor: "white",
              paddingVertical: 10,
              paddingHorizontal: 10,
              alignItems: "center",
              elevation: 20,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 1 },
              shadowOpacity: 0.8,
              shadowRadius: 1,
            }}
          >
            <Text style={{ fontSize: 15, fontWeight: "bold" }}>Төлийн тоо</Text>
            <Text
              style={{ fontSize: 28, fontWeight: "bold", color: "#2072B2" }}
            >
              2
            </Text>
          </TouchableOpacity>
        </View>
        <Text style={{ fontSize: 16, fontWeight: "600", marginTop: 30 }}>
          Хээлийн явц
        </Text>
        <View
          style={{
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-between",
            flexWrap: "wrap",
            marginTop: 10,
          }}
        >
          <TouchableOpacity style={styles.box2}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-end",
                width: "90%",
              }}
            >
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: "600",
                  textAlign: "center",
                  marginRight: heelAvsan ? 5 : 18,
                }}
              >
                Хээл авсан
              </Text>
              {heelAvsan && (
                <Image
                  style={(styles.activeImage, { marginLeft: 5 })}
                  source={require("../assets/img/active.png")}
                />
              )}
            </View>
            <Image
              style={(styles.uneeImage, { marginTop: 20 })}
              source={require("../assets/img/unee.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.box2}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-end",
                width: "90%",
              }}
            >
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: "600",
                  textAlign: "center",
                  marginRight: heelHayasan ? 0 : 13,
                }}
              >
                Хээл хаясан
              </Text>
              {heelHayasan && (
                <Image
                  style={(styles.activeImage, { marginLeft: 5 })}
                  source={require("../assets/img/active.png")}
                />
              )}
            </View>
            <Image
              style={(styles.uneeImage, { marginTop: 20 })}
              source={require("../assets/img/unee.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.box2}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-end",
                width: "90%",
              }}
            >
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: "600",
                  textAlign: "center",
                  marginRight: heelAvaagui ? 0 : 25,
                }}
              >
                Хээл аваагүй
              </Text>
              {heelAvaagui && (
                <Image
                  style={(styles.activeImage, { marginLeft: 5 })}
                  source={require("../assets/img/active.png")}
                />
              )}
            </View>
            <Image
              style={(styles.uneeImage, { marginTop: 8 })}
              source={require("../assets/img/unee.png")}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Urjuuleg;

const styles = StyleSheet.create({
  box1: {
    width: "31%",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "white",
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
    elevation: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 1,
    borderRadius: 10,
  },
  box2: {
    width: "31%",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "white",
    paddingVertical: 10,
    paddingHorizontal: 10,
    elevation: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 1,
    borderRadius: 10,
  },
  uneeImage: {
    width: 41,
    height: 32.17,
    objectFit: "contain",
  },
  activeImage: {
    width: 8,
    height: 8,
    objectFit: "contain",
  },
  text1: {
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
  },
});
