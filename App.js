import { StatusBar } from "expo-status-bar";
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import SurgiinBurtgel from "./screen/SurgiinBurtgel.js";
import NiitHemjeeOruulah from "./screen/NiitHemjeeOruulah.js";
import UneeTusBureer from "./screen/UneeTusBureer.js";
import AshigShimiinTailan from "./screen/AshigShimiinTailan.js";
import Cattle from "./screen/Cattle.js";
import TejeelZartsuulalt from "./screen/TejeelZartsuulalt.js";

export default function App() {
  // return <TejeelZartsuulalt />;
  // return <Cattle />;
  // return <AshigShimiinTailan />;
  // return <UneeTusBureer />;
  // return <NiitHemjeeOruulah />;
  return <SurgiinBurtgel />;
}
