import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Touchable,
} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <TouchableOpacity style={styles.button1}>
          <Text style={styles.text}>Ашиг шим</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button1}>
          <Text style={styles.text}>фермд бүртгүүлсэн малын бүртгэл</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button1}>
          <Text style={styles.text}>Тэжээл</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container2}>
        <Text style={styles.text1}>Сүүний гарц оруулах</Text>
        <View style={styles.container3}>
          <TouchableOpacity style={styles.button2}>
            <Text style={styles.text2}>Нийт хэмжээ оруулах</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button2}>
            <Text style={styles.text2}>Үнээ тус бүрээр</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.container4}>
        <View style={styles.container5}>
          <Text style={styles.text3}>Сүүний гарц</Text>
          <TouchableOpacity style={styles.button1}>
            <Text style={styles.text4}>+ more</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.container8}>
          <View style={styles.container6}>
            <Text style={styles.text4}>Өчигдөр</Text>
            <View style={styles.container7}>
              <Text style={styles.text4}>10</Text>
              <Text style={styles.text5}>үнээ</Text>
            </View>
            <Text style={styles.text6}>0л</Text>
          </View>
          <View></View>
        </View>
      </View>
      <View style={styles.container4}></View>
      <View style={styles.container4}></View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    marginTop: 50,
    flexDirection: "column",
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  container1: {
    display: "flex",
    width: "93%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  container2: {
    backgroundColor: "#0d5fa5",
    width: "95%",
    height: 140,
    marginTop: 20,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    borderRadius: 10,
  },
  container3: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  container4: {
    display: "flex",
    flexDirection: "column",
    width: "95%",
    marginTop: 10,
  },
  container5: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  container6: {
    width: "30%",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "white",
  },
  container7: {
    display: "flex",
    flexDirection: "row",
  },
  container8: {
    width: "100%",
  },
  button1: {
    padding: 5,
    borderRadius: 20,
    elevation: 10,
    backgroundColor: "#e9e9e9",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 1,
  },
  button2: {
    borderWidth: 1,
    borderColor: "white",
    width: "40%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    marginLeft: 5,
    marginRight: 5,
  },
  text: {
    color: "gray",
    fontSize: 13,
  },
  text1: {
    color: "white",
    fontSize: 25,
    fontWeight: "600",
  },
  text2: {
    color: "white",
    fontSize: 17,
    textAlign: "center",
    fontWeight: "600",
  },
  text3: {
    fontSize: 17,
    fontWeight: "600",
  },
  text4: {
    color: "#2273b2",
    fontSize: 17,
    fontWeight: "700",
  },
  text5: {
    color: "#848282",
    fontWeight: "600",
  },
  text6: {
    color: "#848282",
    fontWeight: "600",
    fontSize: 17,
  },
});
