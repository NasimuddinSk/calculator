import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { View, Text, Switch, TouchableOpacity } from "react-native";

export default function App() {
  const [darkTheme, setDartTheme] = useState(false);
  const [result, setResult] = useState("");

  const color = {
    dark: "#22252D",
    dark1: "#292B36",
    dark2: "#272B33",
    light: "#FFF",
    light1: "#F1F1F1",
    light2: "#F7F7F7",
  };

  const calculate = (title) => {
    if (title == "C") {
      setResult("");
    } else if (title == "DL") {
      setResult(result.substring(0, result.length - 1));
    } else if (title == "=") {
      const ans = Number(eval(result).toFixed(3)).toString();
      setResult(eval(ans));
    } else setResult(result + title);
  };

  const Btn = ({ title, type }) => (
    <TouchableOpacity
      onPress={() => calculate(title)}
      style={{
        padding: 10,
        borderRadius: 10,
        elevation: 2,
        backgroundColor: getColor(color.light1, color.dark2),
        width: 70,
        height: 70,
        margin: 14,
      }}
    >
      <Text
        style={{
          fontSize: 37,
          color: "black",
          textAlign: "center",
          textAlignVertical: "center",
          color: getBtnColor(type),
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );

  const getBtnColor = (type) => {
    if (type == "top") {
      return "#35FBD6";
    } else if (type == "right") {
      return "#EB6363";
    } else {
      return getColor(color.dark, color.light);
    }
  };

  const getColor = (light, dark) => (darkTheme ? dark : light);

  return (
    <View
      style={{
        height: "100%",
        width: "100%",
        paddingTop: 40,
        backgroundColor: getColor(color.light, color.dark),
        alignItems: "center",
      }}
    >
      <Switch
        value={darkTheme}
        onValueChange={() => setDartTheme(!darkTheme)}
        thumbColor={getColor(color.dark, color.light)}
        trackColor={{ true: color.light2, false: color.dark2 }}
      />
      <Text
        style={{
          fontSize: 40,
          color: getColor(color.dark, color.light),
          width: "100%",
          textAlign: "right",
          paddingRight: 20,
          marginTop: 120,
          paddingBottom: 20,
        }}
      >
        {result}
      </Text>
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
          backgroundColor: getColor(color.light1, color.dark1),
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
        }}
      >
        <Btn title={"C"} type="top" />
        <Btn title={"DL"} type="top" />
        <Btn title={"/"} type="top" />
        <Btn title={"%"} type="top" />
        <Btn title={"7"} type="number" />
        <Btn title={"8"} type="number" />
        <Btn title={"9"} type="number" />
        <Btn title={"*"} type="right" />
        <Btn title={"4"} type="number" />
        <Btn title={"5"} type="number" />
        <Btn title={"6"} type="number" />
        <Btn title={"-"} type="right" />
        <Btn title={"1"} type="number" />
        <Btn title={"2"} type="number" />
        <Btn title={"3"} type="number" />
        <Btn title={"+"} type="right" />
        <Btn title={"00"} type="number" />
        <Btn title={"0"} type="number" />
        <Btn title={"."} type="number" />
        <Btn title={"="} type="right" />
      </View>
      <StatusBar style={darkTheme ? "light" : "dark"} />
    </View>
  );
}
