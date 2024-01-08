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
          <Text style={styles.text}>Ashig Shim</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button1}>
          <Text style={styles.text}>fermd burtguulsen malin burtgel</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button1}>
          <Text style={styles.text}>Tejeel</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container2}>
        <Text style={styles.text1}>Suunii garts oruulah</Text>
        <View style={styles.container3}>
          <TouchableOpacity style={styles.button2}>
            <Text style={styles.text1}>Niit Hemjee oruulah</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.text1}>Unee tus bureer</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View></View>
      <View></View>
      <View></View>
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
    width: "90%",
    height: 100,
    marginTop: 20,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
  },
  container3: {
    display: "flex",
    flexDirection: "row",
  },
  button1: {
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 8,
    paddingRight: 8,
    borderRadius: 20,
    shadowColor: "grey",
    elevation: 10,
    backgroundColor: "white",
  },
  button2: {
    borderWidth: 1,
    borderColor: "white",
  },
  text: {
    color: "gray",
  },
  text1: {
    color: "white",
  },
});
