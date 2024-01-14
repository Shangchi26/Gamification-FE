import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import React from "react";
import { modalStyles } from "../css/Modal";

export default function InviteModal(props) {
  const closeModal = (bool) => {
    props.setIsInviteModalVisible(bool);
  };

  return (
    <TouchableOpacity disabled={true} style={modalStyles.modalContainer}>
      <View style={modalStyles.modal}>
        <Image
          source={require("../assets/item.png")}
          style={modalStyles.modalItem}
        />
        <TouchableOpacity
          onPress={() => closeModal(false)}
          style={modalStyles.closeModalBtn}
        >
          <Image source={require("../assets/closeButton.png")} />
        </TouchableOpacity>
        <Text style={modalStyles.modalTitle}>Giới thiệu bạn bè</Text>
        <View style={styles.inviteContainer}>
          <Text style={styles.inviteTitle}>Mã giới thiệu của bạn</Text>
          <View style={styles.inviteContent}>
            <Text style={styles.inviteCode}>ASD151</Text>
            <TouchableOpacity onPress={copyToClipboard} style={styles.copyBtn}>
              <Image source={require("../assets/copy.png")} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.bar}></View>
        <View style={styles.inviteContainer}>
          <Text style={styles.inviteTitle}>Chia sẻ qua</Text>
          <View style={styles.shareTo}>
            <TouchableOpacity style={styles.shareBtn}>
              <Image source={require("../assets/facebook.png")} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.shareBtn}>
              <Image source={require("../assets/zalo.png")} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  inviteContainer: {
    width: "100%",
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  bar: {
    width: 50,
    height: 2,
    backgroundColor: "#E0AF26",
    marginBottom: 10,
  },
  inviteTitle: {
    fontFamily: "Inter-SemiBold",
    textAlign: "center",
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 10,
  },
  inviteContent: {
    width: "100$",
    backgroundColor: "#FFEBB6",
    position: "relative",
    padding: 12,
    borderRadius: 8,
  },
  inviteCode: {
    textAlign: "center",
    color: "#EA2727",
    fontFamily: "Inter-SemiBold",
    fontSize: 16,
    lineHeight: 24,
  },
  copyBtn: {
    position: "absolute",
    right: 0,
    padding: 12,
  },
  shareTo: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 24,
    marginBottom: 10,
  },
  shareBtn: {
    width: 60,
    height: 60,
    backgroundColor: "#FFEBB6",
    borderRadius: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
