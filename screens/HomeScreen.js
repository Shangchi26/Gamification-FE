import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  Animated,
  Easing,
  TouchableOpacity,
  Modal,
} from "react-native";
import React, { useEffect, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import RankingModal from "../modals/RankingModal";
import InfoModal from "../modals/InfoModal";
import HistoryModal from "../modals/HistoryModal";
import InviteModal from "../modals/InviteModal";
import SettingModal from "../modals/SettingModal";

export default function HomeScreen({ navigation }) {
  const spinValue = new Animated.Value(0);

  useEffect(() => {
    Animated.loop(
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 10000,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();
  }, [spinValue]);

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  const scale = spinValue.interpolate({
    inputRange: [0, 0.25, 0.5, 0.75, 1],
    outputRange: [1, 1.2, 1, 1.1, 1],
  });

  const [isRankingModalVisible, setIsRankingModalVisible] = useState(false);
  const [isInfoModalVisible, setIsInfoModalVisible] = useState(false);
  const [isHistoryModalVisible, setIsHistoryModalVisible] = useState(false);
  const [isInviteModalVisible, setIsInviteModalVisible] = useState(false);
  const [isSettingModalVisible, setIsSettingModalVisible] = useState(false);

  const changeRankingModalVisible = (bool) => {
    setIsRankingModalVisible(bool);
  };
  const changeInfoModalVisible = (bool) => {
    setIsInfoModalVisible(bool);
  };
  const changeHistoryModalVisible = (bool) => {
    setIsHistoryModalVisible(bool);
  };
  const changeInviteModalVisible = (bool) => {
    setIsInviteModalVisible(bool);
  };
  const changeSettingModalVisible = (bool) => {
    setIsSettingModalVisible(bool);
  };

  return (
    <View style={styles.homeContainer}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.headerButton}>
          <Image source={require("../assets/logout.png")} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Account")}>
          <Text style={styles.headerText}>Hello, Shang</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => changeSettingModalVisible(true)}
          style={styles.headerButton}
        >
          <Image source={require("../assets/setting.png")} />
        </TouchableOpacity>
        <Modal
          transparent={true}
          animationType="fade"
          visible={isSettingModalVisible}
          nRequestClose={() => setIsSettingModalVisible(false)}
        >
          <SettingModal setIsSettingModalVisible={setIsSettingModalVisible} />
        </Modal>
      </View>
      <View style={styles.homeTitle}>
        <Image
          source={require("../assets/title.png")}
          style={styles.homeTitleText}
        />
        <Image source={require("../assets/titleBg.png")} />
      </View>
      <View style={styles.gift}>
        <Animated.Image
          source={require("../assets/spin.png")}
          style={[styles.giftSpin, { transform: [{ rotate: spin }] }]}
        />
        <Animated.Image
          source={require("../assets/gift.png")}
          style={[styles.giftImage, { transform: [{ scale }] }]}
        />
      </View>
      <TouchableOpacity onPress={() => navigation.navigate("Inventory")}>
        <LinearGradient
          colors={["#65BC46", "#2F7010"]}
          style={styles.openButton}
        >
          <Text style={styles.openText}>Vào túi đồ</Text>
        </LinearGradient>
      </TouchableOpacity>
      <View style={styles.action}>
        <TouchableOpacity onPress={() => changeRankingModalVisible(true)}>
          <LinearGradient
            colors={["#65BC46", "#2F7010"]}
            style={styles.actionButton}
          >
            <Image source={require("../assets/ranking.png")} />
          </LinearGradient>
        </TouchableOpacity>
        <Modal
          transparent={true}
          animationType="fade"
          visible={isRankingModalVisible}
          nRequestClose={() => setIsRankingModalVisible(false)}
        >
          <RankingModal setIsRankingModalVisible={setIsRankingModalVisible} />
        </Modal>
        <TouchableOpacity onPress={() => changeHistoryModalVisible(true)}>
          <LinearGradient
            colors={["#65BC46", "#2F7010"]}
            style={styles.actionButton}
          >
            <Image source={require("../assets/history.png")} />
          </LinearGradient>
        </TouchableOpacity>
        <Modal
          transparent={true}
          animationType="fade"
          visible={isHistoryModalVisible}
          nRequestClose={() => setIsHistoryModalVisible(false)}
        >
          <HistoryModal setIsHistoryModalVisible={setIsHistoryModalVisible} />
        </Modal>
        <TouchableOpacity
          onPress={() => {
            changeInviteModalVisible(true);
          }}
        >
          <LinearGradient
            colors={["#65BC46", "#2F7010"]}
            style={styles.actionButton}
          >
            <Image source={require("../assets/share.png")} />
          </LinearGradient>
        </TouchableOpacity>
        <Modal
          transparent={true}
          animationType="fade"
          visible={isInviteModalVisible}
          nRequestClose={() => setIsInviteModalVisible}
        >
          <InviteModal setIsInviteModalVisible={setIsInviteModalVisible} />
        </Modal>
        <TouchableOpacity onPress={() => changeInfoModalVisible(true)}>
          <LinearGradient
            colors={["#65BC46", "#2F7010"]}
            style={styles.actionButton}
          >
            <Image source={require("../assets/info.png")} />
          </LinearGradient>
        </TouchableOpacity>
        <Modal
          transparent={true}
          animationType="fade"
          visible={isInfoModalVisible}
          nRequestClose={() => setIsInfoModalVisible(false)}
        >
          <InfoModal setIsInfoModalVisible={setIsInfoModalVisible} />
        </Modal>
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
    width: "100%",
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
    fontSize: 18,
    fontFamily: "Inter-Bold",
  },
  homeContainer: {
    position: "relative",
    flex: 1,
    backgroundColor: "#FFF2D0",
    alignItems: "center",
  },
  homeTitle: {
    marginTop: 10,
  },
  homeTitleText: {
    position: "absolute",
  },
  gift: {
    position: "relative",
    margin: 40,
    alignItems: "center",
  },
  giftSpin: {
    position: "absolute",
  },
  openButton: {
    paddingHorizontal: 36,
    paddingVertical: 10,
    borderRadius: 100,
    borderColor: "white",
    borderWidth: 2,
  },
  openText: {
    color: "white",
    fontFamily: "Inter-Bold",
    fontSize: 16,
    lineHeight: 24,
  },
  action: {
    flexDirection: "row",
    gap: 12,
    marginTop: 30,
  },
  actionButton: {
    padding: 10,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: "white",
  },
  footer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
});
