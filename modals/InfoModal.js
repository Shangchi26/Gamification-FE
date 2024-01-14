import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import React from "react";
import { modalStyles } from "../css/Modal";

export default function InfoModal(props) {
  const closeModal = (bool) => {
    props.setIsInfoModalVisible(bool);
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
        <Text style={modalStyles.modalTitle}>Thể lệ và giải thưởng</Text>
        <View style={styles.info}>
          <View style={styles.infoContent}>
            <Text style={styles.infoText}>Thể lệ</Text>
          </View>
          <Text style={styles.ruleDetail}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            aspernatur labore sit quaerat possimus illum quasi, incidunt,
            nostrum eius odit ad totam, sapiente ipsam illo minus quam sequi
            fugiat eveniet placeat dolore molestiae ut ex veniam corrupti. Illum
            veritatis nesciunt ratione doloremque itaque explicabo alias
            repellat fugiat. Enim, perferendis soluta!
          </Text>
          <View style={styles.infoContent}>
            <Text style={styles.infoText}>Giải thưởng</Text>
          </View>
          <View style={styles.rewards}>
            <View style={styles.rewardName}>
              <Text style={styles.rewardTextBold}>Đặc biệt</Text>
              <Text style={styles.rewardTextBold}>Giải nhất</Text>
              <Text style={styles.rewardTextBold}>Giải nhì</Text>
              <Text style={styles.rewardTextBold}>Giải ba</Text>
              <Text style={styles.rewardTextBold}>Khuyến khích</Text>
            </View>
            <View style={styles.rewardContent}>
              <Text style={styles.rewardText}>1 Iphone 15 Promax</Text>
              <Text style={styles.rewardText}>1 Laptop Asus Tuf</Text>
              <Text style={styles.rewardText}>Voucher 5 triệu VNĐ</Text>
              <Text style={styles.rewardText}>Voucher 1 triệu VNĐ</Text>
              <Text style={styles.rewardText}>Thẻ cào 100k</Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  info: {
    width: "100%",
    paddingHorizontal: 10,
    paddingVertical: 10
  },
  infoContent: {
    width: "100%",
    paddingVertical: 8,
    backgroundColor: "#FEEDB3",
    borderRadius: 4,
  },
  infoText: {
    textAlign: "center",
    color: "#BA8B07",
    fontFamily: "Inter-SemiBold",
    fontSize: 14,
    lineHeight: 20,
  },
  ruleDetail: {
    fontFamily: "Inter-Regular",
    fontSize: 12,
    lineHeight: 18,
    marginVertical: 8
  },
  rewards: {
    display: "flex",
    flexDirection: "row",
    marginVertical: 8
  },
  rewardName: {
    paddingRight: 20
  },
  rewardTextBold: {
    fontFamily: "Inter-SemiBold",
    fontSize: 12,
    lineHeight: 18,
    paddingBottom: 2
  },
  rewardText: {
    fontFamily: "Inter-Regular",
    fontSize: 12,
    lineHeight: 18,
    paddingBottom: 2
  }
});
