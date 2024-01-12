import { StatusBar } from "expo-status-bar";
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import AshigShim from "./components/AshigShim.js";
import FermdMaliinBurtgel from "./components/FermdMaliinBurtgel.js";

export default function App() {
  return (
    <View>
      <FermdMaliinBurtgel />
      {/* <AshigShim /> */}
    </View>
  );
}
