import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";

export default function Header() {
  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.headerButton}>
        <Image source={require("../assets/logout.png")} />
      </TouchableOpacity>
      <Text style={styles.headerText}>Game mở hộp</Text>
      <TouchableOpacity style={styles.headerButton}>
        <Image source={require("../assets/setting.png")} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    display: "flex",
    alignItems: "center"
  },
  headerButton: {
    backgroundColor: "white",
    width: 32,
    height: 32,
    borderRadius: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    color: "#FA9F34",
    lineHeight: 24,
    fontWeight: "bold",
    fontSize: 18,
  },
});