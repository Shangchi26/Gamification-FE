import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React from "react";
import { modalStyles } from "../css/Modal";

export default function RankingModal(props) {
    const closeModal = (bool) => {
        props.setIsRankingModalVisible(bool);
    }
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
        <Text style={modalStyles.modalTitle}>Bảng xếp hạng</Text>
        <View style={styles.modalTable}>
          <View style={styles.modalTableTr}>
            <View style={styles.modalTableTh}>
              <Text style={styles.colTitle}>Người chơi</Text>
            </View>
            <View style={styles.modalTableTh}>
              <Text style={styles.colTitle}>Giải thưởng</Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  modalTable: {
    width: "100%",
    paddingHorizontal: 10,
  },
  modalTableTr: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    gap: 4,
  },
  modalTableTh: {
    backgroundColor: "#C97027",
    width: "50%",
    paddingVertical: 8,
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8
  },
  colTitle: {
    textAlign: "center",
    color: "white",
    fontFamily: "Inter-SemiBold",
    fontSize: 12,
    lineHeight: 18
  }
});
