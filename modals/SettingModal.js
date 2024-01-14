import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { modalStyles } from "../css/Modal";
import { LinearGradient } from "expo-linear-gradient";

export default function SettingModal(props) {
  const closeModal = (bool) => {
    props.setIsSettingModalVisible(bool);
  };

  const [isGameMusicStatus, setIsGameMusicStatus] = useState(false);
  const [isSoundEffectStatus, setIsSoundEffectStatus] = useState(false);

  const toggleGameMusic = () => {
    setIsGameMusicStatus(!isGameMusicStatus);
  };

  const toggleSoundEffect = () => {
    setIsSoundEffectStatus(!isSoundEffectStatus);
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
        <Text style={modalStyles.modalTitle}>Tùy chỉnh</Text>
        <View style={styles.setting}>
          <View style={styles.gameMusic}>
            <Text style={styles.settingText}>Nhạc game</Text>
            <View style={styles.settingBtn}>
              <TouchableOpacity onPress={toggleGameMusic}>
                <LinearGradient
                  colors={
                    isGameMusicStatus
                      ? ["#65BC46", "#2F7010"]
                      : ["white", "white"]
                  }
                  style={styles.onBtn}
                >
                  <Image
                    source={require("../assets/bxs_volume-full.png")}
                    style={{ tintColor: isGameMusicStatus ? "#FFF" : "#000" }}
                  />
                  <Text
                    style={[
                      styles.status,
                      { color: isGameMusicStatus ? "#FFF" : "#000" },
                    ]}
                  >
                    Bật
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
              <TouchableOpacity onPress={toggleGameMusic}>
                <LinearGradient
                  colors={
                    !isGameMusicStatus
                      ? ["#65BC46", "#2F7010"]
                      : ["white", "white"]
                  }
                  style={styles.offBtn}
                >
                  <Image
                    source={require("../assets/bxs_volume-mute.png")}
                    style={{ tintColor: !isGameMusicStatus ? "#FFF" : "#000" }}
                  />
                  <Text
                    style={[
                      styles.status,
                      { color: !isGameMusicStatus ? "#FFF" : "#000" },
                    ]}
                  >
                    Tắt
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.gameMusic}>
            <Text style={styles.settingText}>Âm Thanh</Text>
            <View style={styles.settingBtn}>
              <TouchableOpacity onPress={toggleSoundEffect}>
                <LinearGradient
                  colors={
                    isSoundEffectStatus
                      ? ["#65BC46", "#2F7010"]
                      : ["white", "white"]
                  }
                  style={styles.onBtn}
                >
                  <Image
                    source={require("../assets/bxs_volume-full.png")}
                    style={{ tintColor: isSoundEffectStatus ? "#FFF" : "#000" }}
                  />
                  <Text
                    style={[
                      styles.status,
                      { color: isSoundEffectStatus ? "#FFF" : "#000" },
                    ]}
                  >
                    Bật
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
              <TouchableOpacity onPress={toggleSoundEffect}>
                <LinearGradient
                  colors={
                    !isSoundEffectStatus
                      ? ["#65BC46", "#2F7010"]
                      : ["white", "white"]
                  }
                  style={styles.offBtn}
                >
                  <Image
                    source={require("../assets/bxs_volume-mute.png")}
                    style={{
                      tintColor: !isSoundEffectStatus ? "#FFF" : "#000",
                    }}
                  />
                  <Text
                    style={[
                      styles.status,
                      { color: !isSoundEffectStatus ? "#FFF" : "#000" },
                    ]}
                  >
                    Tắt
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  setting: {
    width: "100%",
    paddingHorizontal: 10,
  },
  gameMusic: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  settingText: {
    fontFamily: "Inter-SemiBold",
    fontSize: 14,
    lineHeight: 20,
    color: "#000", // Màu văn bản khi trạng thái là false
  },
  settingBtn: {
    flexDirection: "row",
  },
  status: {
    fontFamily: "Inter-SemiBold",
  },
  onBtn: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderStartStartRadius: 20,
    borderEndStartRadius: 20,
    flexDirection: "row",
    gap: 1
  },
  offBtn: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderStartEndRadius: 20,
    borderEndEndRadius: 20,
    flexDirection: "row",
    gap: 1
  },
});
