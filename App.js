import { StatusBar } from "expo-status-bar";
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Ashig_shim from "./components/Ashig_shim.js";
import FermdMaliinBurtgel from "./components/FermdMaliinBurtgel.js";

export default function App() {
  return (
    <View>
      <FermdMaliinBurtgel />
      {/* <Ashig_shim /> */}
    </View>
  );
}
