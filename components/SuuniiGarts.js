import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const SuuniiGarts = () => {
  return (
    <View
      style={{ alignItems: "center", paddingTop: 20, backgroundColor: "white" }}
    >
      <View
        style={{
          width: "90%",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            backgroundColor: "white",
            elevation: 20,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.8,
            shadowRadius: 1,
            borderRadius: 10,
            paddingVertical: 20,
            paddingHorizontal: 10,
            alignItems: "center",
            width: 107,
          }}
        >
          <Text style={{ fontSize: 15, fontWeight: "bold" }}>Өнөөдөр</Text>
          <TouchableOpacity
            style={{
              backgroundColor: "#2072B2",
              alignItems: "center",
              paddingVertical: 4,
              paddingHorizontal: 10,
              borderRadius: 20,
              marginTop: 20,
              width: "100%",
            }}
          >
            <Text style={{ fontSize: 12, fontWeight: "600", color: "white" }}>
              Нэмэх
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: "65%",
            backgroundColor: "white",
            elevation: 20,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.8,
            shadowRadius: 1,
            borderRadius: 10,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View
            style={{
              width: "30%",
              alignItems: "center",
              justifyContent: "center",
              marginLeft: 20,
            }}
          >
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
                color: "#2072B2",
                textAlign: "center",
                marginBottom: 10,
              }}
            >
              2л
            </Text>
            <Text
              style={{ fontSize: 15, fontWeight: "bold", textAlign: "center" }}
            >
              Дундаж гарц
            </Text>
          </View>
          <View style={{ alignItems: "center", width: "40%", marginRight: 20 }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
                color: "#2072B2",
                marginBottom: 10,
              }}
            >
              4л
            </Text>
            <Text
              style={{ fontSize: 15, fontWeight: "bold", textAlign: "center" }}
            >
              Хамгийн их cүүний гарц
            </Text>
          </View>
        </View>
      </View>
      <View style={{ width: "90%", paddingTop: 40 }}>
        <Text style={{ fontSize: 14, fontWeight: "600" }}>
          Сүүний гарцын түүх
        </Text>
        <View
          style={{
            backgroundColor: "white",
            flexDirection: "row",
            justifyContent: "space-between",
            paddingVertical: 5,
            paddingHorizontal: 5,
            marginTop: 10,
            elevation: 20,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.8,
            shadowRadius: 1,
            borderRadius: 10,
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              color: "#2072B2",
              marginVertical: 20,
              marginLeft: 30,
            }}
          >
            2л
          </Text>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              color: "#2072B2",
              marginVertical: 20,
            }}
          >
            10/10/2023 (13:14)
          </Text>
          <TouchableOpacity
            style={{
              padding: 3,
              width: 30,
              height: 30,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              style={{
                width: 21,
                height: 21,
                objectFit: "contain",
              }}
              source={require("../assets/img/edit.png")}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            backgroundColor: "white",
            flexDirection: "row",
            justifyContent: "space-between",
            paddingVertical: 5,
            paddingHorizontal: 5,
            marginTop: 10,
            elevation: 20,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.8,
            shadowRadius: 1,
            borderRadius: 10,
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              color: "#2072B2",
              marginVertical: 20,
              marginLeft: 30,
            }}
          >
            2л
          </Text>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              color: "#2072B2",
              marginVertical: 20,
            }}
          >
            10/10/2023 (13:14)
          </Text>
          <TouchableOpacity
            style={{
              padding: 3,
              width: 30,
              height: 30,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              style={{
                width: 21,
                height: 21,
                objectFit: "contain",
              }}
              source={require("../assets/img/edit.png")}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SuuniiGarts;

const styles = StyleSheet.create({});
