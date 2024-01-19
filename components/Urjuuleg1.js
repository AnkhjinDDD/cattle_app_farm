import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";

const Urjuuleg = () => {
  const [heeltuulged, setHeeltuulged] = useState();
  const [heeltuulsen, setHeeltuulsen] = useState(true);
  const [heeltei, setHeeltei] = useState(true);
  const [orgilsaamtai, setOrgilSaamtai] = useState();
  const [shirgesen, setShirgesen] = useState();
  const [heelAvsan, setHeelAvsan] = useState();
  const [heelHayasan, setHeelHayasan] = useState();
  const [heelAvaagui, setHeelAvaagui] = useState(true);

  return (
    <View style={{ alignItems: "center", marginTop: 20 }}>
      <View style={{ width: "93%" }}>
        <Text style={{ fontSize: 16, fontWeight: "600", marginBottom: 10 }}>
          Үржүүлгийн статусыг тохируулах
        </Text>
        <View style={styles.box2}>
          <TouchableOpacity
            style={[
              styles.box1,
              { marginBottom: 10, paddingTop: heeltuulged ? 10 : 18 },
            ]}
          >
            <View style={{ width: "100%" }}>
              {heeltuulged && (
                <View style={{ width: "92%", alignItems: "flex-end" }}>
                  <Image
                    style={styles.activeImage}
                    source={require("../assets/img/active.png")}
                  />
                </View>
              )}
              <Text style={styles.text1}>Хээлтүүлгэд бэлэн</Text>
            </View>
            <Image
              style={{ width: 41, height: 32.17, objectFit: "contain" }}
              source={require("../assets/img/unee.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.box1, { paddingTop: heeltuulsen ? 10 : 18 }]}
          >
            <View style={{ width: "100%" }}>
              {heeltuulsen && (
                <View style={{ width: "92%", alignItems: "flex-end" }}>
                  <Image
                    style={styles.activeImage}
                    source={require("../assets/img/active.png")}
                  />
                </View>
              )}
              <Text style={styles.text1}>Хээлтүүлсэн</Text>
            </View>
            <Image
              style={{ width: 41, height: 32.17, objectFit: "contain" }}
              source={require("../assets/img/unee.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.box1, { paddingTop: heeltei ? 10 : 18 }]}
          >
            <View style={{ width: "100%" }}>
              {heeltei && (
                <View style={{ width: "92%", alignItems: "flex-end" }}>
                  <Image
                    style={styles.activeImage}
                    source={require("../assets/img/active.png")}
                  />
                </View>
              )}
              <Text style={styles.text1}>Хээлтэй</Text>
            </View>
            <Image
              style={{ width: 41, height: 32.17, objectFit: "contain" }}
              source={require("../assets/img/unee.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.box1, { paddingTop: orgilsaamtai ? 10 : 18 }]}
          >
            <View style={{ width: "100%" }}>
              {orgilsaamtai && (
                <View style={{ width: "92%", alignItems: "flex-end" }}>
                  <Image
                    style={styles.activeImage}
                    source={require("../assets/img/active.png")}
                  />
                </View>
              )}
              <Text style={styles.text1}>Оргил саамтай</Text>
            </View>
            <Image
              style={{ width: 41, height: 32.17, objectFit: "contain" }}
              source={require("../assets/img/unee.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.box1, { paddingTop: shirgesen ? 10 : 18 }]}
          >
            <View style={{ width: "100%" }}>
              {shirgesen && (
                <View style={{ width: "92%", alignItems: "flex-end" }}>
                  <Image
                    style={styles.activeImage}
                    source={require("../assets/img/active.png")}
                  />
                </View>
              )}
              <Text style={styles.text1}>Ширгэсэн</Text>
            </View>
            <Image
              style={{ width: 41, height: 32.17, objectFit: "contain" }}
              source={require("../assets/img/unee.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.box1,
              {
                paddingVertical: 10,
                paddingTop: 15,
                paddingHorizontal: 10,
              },
            ]}
          >
            <Text style={{ fontSize: 15, fontWeight: "bold" }}>Төлийн тоо</Text>
            <Text
              style={{ fontSize: 28, fontWeight: "bold", color: "#2072B2" }}
            >
              2
            </Text>
          </TouchableOpacity>
        </View>
        <Text style={{ fontSize: 16, fontWeight: "600", marginBottom: 10 }}>
          Хээлийн явц
        </Text>
        <View style={styles.box2}>
          <TouchableOpacity
            style={[styles.box1, { paddingTop: heelAvsan ? 10 : 18 }]}
          >
            <View style={{ width: "100%" }}>
              {heelAvsan && (
                <View style={{ width: "92%", alignItems: "flex-end" }}>
                  <Image
                    style={styles.activeImage}
                    source={require("../assets/img/active.png")}
                  />
                </View>
              )}
              <Text style={styles.text1}>Хээл авсан</Text>
            </View>
            <Image
              style={{ width: 41, height: 32.17, objectFit: "contain" }}
              source={require("../assets/img/unee.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.box1, { paddingTop: heelHayasan ? 10 : 18 }]}
          >
            <View style={{ width: "100%" }}>
              {heelHayasan && (
                <View style={{ width: "92%", alignItems: "flex-end" }}>
                  <Image
                    style={styles.activeImage}
                    source={require("../assets/img/active.png")}
                  />
                </View>
              )}
              <Text style={styles.text1}>Хээл хаясан</Text>
            </View>
            <Image
              style={{ width: 41, height: 32.17, objectFit: "contain" }}
              source={require("../assets/img/unee.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.box1, { paddingTop: heelAvaagui ? 10 : 18 }]}
          >
            <View style={{ width: "100%" }}>
              {heelAvaagui && (
                <View style={{ width: "92%", alignItems: "flex-end" }}>
                  <Image
                    style={styles.activeImage}
                    source={require("../assets/img/active.png")}
                  />
                </View>
              )}
              <Text style={styles.text1}>Хээл аваагүй</Text>
            </View>
            <Image
              style={{ width: 41, height: 32.17, objectFit: "contain" }}
              source={require("../assets/img/unee.png")}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: "100%",
            justifyContent: "space-between",
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 15,
          }}
        >
          <Text style={{ fontSize: 16, fontWeight: "600" }}>
            Үржүүлэгийн түүх
          </Text>
          <TouchableOpacity
            style={{
              paddingVertical: 3,
              paddingHorizontal: 10,
              alignItems: "center",
              borderRadius: 20,
              backgroundColor: "#e9e9e9",
              elevation: 20,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 1 },
              shadowOpacity: 0.8,
              shadowRadius: 1,
            }}
          >
            <Text style={{ color: "#2273b2", fontSize: 17, fontWeight: "700" }}>
              + more
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            backgroundColor: "white",
            paddingVertical: 10,
            paddingHorizontal: 20,
            elevation: 20,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.8,
            shadowRadius: 1,
            borderRadius: 10,
            minHeight: 150,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 10,
            }}
          >
            <Text
              style={{ fontSize: 20, fontWeight: "bold", color: "#2072B2" }}
            >
              10/10/2023 (13:14)
            </Text>
            <Text
              style={{ fontSize: 18, fontWeight: "bold", color: "#2072B2" }}
            >
              Хээлтүүлсэн
            </Text>
            <TouchableOpacity>
              <Image
                style={{ width: 21, height: 21, objectFit: "contain" }}
                source={require("../assets/img/edit.png")}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text
              style={{ fontSize: 20, fontWeight: "bold", color: "#2072B2" }}
            >
              10/10/2023 (13:14)
            </Text>
            <Text
              style={{ fontSize: 18, fontWeight: "bold", color: "#2072B2" }}
            >
              Хээлтүүлсэн
            </Text>
            <TouchableOpacity>
              <Image
                style={{ width: 21, height: 21, objectFit: "contain" }}
                source={require("../assets/img/edit.png")}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Urjuuleg;

const styles = StyleSheet.create({
  box1: {
    backgroundColor: "white",
    justifyContent: "space-between",
    paddingTop: 10,
    paddingBottom: 20,
    alignItems: "center",
    width: 117,
    height: 98,
    elevation: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 1,
    borderRadius: 10,
  },
  box2: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 15,
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
    flexWrap: "nowrap",
  },
});
