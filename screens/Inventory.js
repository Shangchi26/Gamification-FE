import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";

export default function Inventory() {
  const [inventories, setInventories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/all-chests", {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-type": "application/json",
          },
        });
        const data = await response.json();
        // setInventories(data.inventories);
        console.log(data)
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <View style={styles.inventoryContainer}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.headerButton}>
          <Image source={require("../assets/logout.png")} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Game mở hộp</Text>
        <TouchableOpacity style={styles.headerButton}>
          <Image source={require("../assets/setting.png")} />
        </TouchableOpacity>
      </View>
      <View style={styles.inventoryContent}>
        {inventories.map((inventory, index) => (
          <View key={index}>
            <Text>Name: {inventory.name}</Text>
            <Text>Image: {inventory.image}</Text>
            <Text>Chest Count: {inventory.chest_count}</Text>
          </View>
        ))}
      </View>
      <View style={styles.guide}>
        <Text style={styles.textGuide}>(Nhấp </Text>
        <Image
          source={require("../assets/secret.png")}
          style={{ width: 28, height: 28 }}
        />
        <Text style={styles.textGuide}> để xem phần quà trong hộp)</Text>
      </View>
      <View style={styles.footer}>
        <Image
          source={require("../assets/footer.png")}
          style={{ width: "100%", objectFit: "cover" }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    display: "flex",
    alignItems: "center",
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
  inventoryContainer: {
    flex: 1,
    backgroundColor: "#FFF2D0",
  },
  inventoryContent: {
    display: "flex",
    paddingHorizontal: 20,
    gap: 20,
    paddingTop: 30,
  },
  boxName: {
    color: "#BA8B07",
    fontFamily: "Inter-Bold",
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 6,
  },
  boxCount: {
    color: "#EA2727",
    fontFamily: "Inter-Bold",
  },
  inventoryItem: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  inventoryBox: {
    position: "absolute",
    left: 0,
    zIndex: 10,
  },
  showBox: {
    position: "absolute",
    bottom: 0,
    right: 0,
  },
  boxDetail: {
    borderColor: "#FFAA00",
    backgroundColor: "#FEEDB3",
    borderWidth: 1,
    width: "83%",
    height: 88,
    paddingHorizontal: 32,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 8,
  },
  actionButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },
  openText: {
    color: "white",
    fontSize: 16,
    fontFamily: "Inter-Bold",
    lineHeight: 24,
  },
  guide: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 10,
  },
  textGuide: {
    fontWeight: 600,
    fontFamily: "Inter-SemiBold",
  },
  footer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
});
