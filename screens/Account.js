import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions, TextInput } from 'react-native'
import React from 'react'

export default function Account() {
  return (
    <View style={styles.container}>
      <Text style={styles.accountName}>Hello, Shang</Text>
      <View style={styles.accountContent}>
        <Text style={styles.point}>12 Points</Text>
        <View style={styles.package}>
          <View style={styles.packageDetail}>
            <Text style={styles.packagePrice}>10 Coins</Text>
            <Image
              source={require("../assets/coin.png")}
              style={styles.packageImage}
            />
            <Text style={styles.packagePrice}>15.000 VNĐ</Text>
          </View>
          <View style={styles.packageDetail}>
            <Text style={styles.packagePrice}>10 Coins</Text>
            <Image
              source={require("../assets/coin.png")}
              style={styles.packageImage}
            />
            <Text style={styles.packagePrice}>15.000 VNĐ</Text>
          </View>
          <View style={styles.packageDetail}>
            <Text style={styles.packagePrice}>10 Coins</Text>
            <Image
              source={require("../assets/coin.png")}
              style={styles.packageImage}
            />
            <Text style={styles.packagePrice}>15.000 VNĐ</Text>
          </View>
        </View>
        <View style={styles.package}>
          <View style={styles.packageDetail}>
            <Text style={styles.packagePrice}>10 Coins</Text>
            <Image
              source={require("../assets/coin.png")}
              style={styles.packageImage}
            />
            <Text style={styles.packagePrice}>15.000 VNĐ</Text>
          </View>
          <View style={styles.packageDetail}>
            <Text style={styles.packagePrice}>10 Coins</Text>
            <Image
              source={require("../assets/coin.png")}
              style={styles.packageImage}
            />
            <Text style={styles.packagePrice}>15.000 VNĐ</Text>
          </View>
          <View style={styles.packageDetail}>
            <Text style={styles.packagePrice}>10 Coins</Text>
            <Image
              source={require("../assets/coin.png")}
              style={styles.packageImage}
            />
            <Text style={styles.packagePrice}>15.000 VNĐ</Text>
          </View>
        </View>
      <View style={styles.inviteCode}>
        <TextInput placeholder="Nhập mã" style={styles.inputCode} />
        <TouchableOpacity style={styles.redeemCode}>
          <Text style={styles.redeemText}>Xác nhận</Text>
        </TouchableOpacity>
      </View>
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
const windowWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF2D0",
  },
  accountName: {
    textAlign: "center",
    fontFamily: "Inter-Bold",
    fontSize: 18,
    lineHeight: 20,
    color: "#FA9F34",
  },
  accountContent: {
    marginTop: 20,
    paddingHorizontal: 10
  },
  point: {
    fontFamily: "Inter-SemiBold",
    color: "#FA9F34",
  },
  package: {
    flexDirection: "row",
    width: "100%",
    gap: 20,
    paddingHorizontal: 10,
  },
  packageDetail: {
    width: (windowWidth - 80) / 3,
    aspectRatio: 1,
    borderWidth: 2,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 12,
    borderColor: "#E0AF26",
    marginVertical: 10,
    backgroundColor: "#FFEBB6",
  },
  packageImage: {
    width: "60%",
    height: "60%",
  },
  packagePrice: {
    fontFamily: "Inter-SemiBold",
    color: "#FA9F34",
  },
  inviteCode: {
    marginVertical: 20,
    flexDirection: "row",
    width: "100%",
    gap: 12,
  },
  redeemCode: {
    backgroundColor: "#FFE58D",
    width: 98,
    paddingVertical: 12,
    borderRadius: 8,
  },
  redeemText: {
    fontFamily: "Inter-Bold",
    fontSize: 16,
    lineHeight: 24,
    color: "#FFB210",
    textAlign: "center",
  },
  inputCode: {
    width: windowWidth - 32 - 98,
    backgroundColor: "#FFEBB6",
    textAlign: "center",
    color: "#CDB984",
  },
  footer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
});