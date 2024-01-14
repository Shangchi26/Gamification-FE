import { StyleSheet } from "react-native";

export const modalStyles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
  },
  modal: {
    position: "relative",
    width: "80%",
    backgroundColor: "#FFF2D0",
    borderRadius: 20,
    borderColor: "#E0AF26",
    borderWidth: 10,
    display: "flex",
    alignItems: "center",
  },
  modalItem: {
    position: "absolute",
    top: -60,
    left: -20,
  },
  closeModalBtn: {
    position: "absolute",
    top: -30,
    right: -10,
  },
  modalTitle: {
    textAlign: "center",
    fontFamily: "Inter-Bold",
    fontSize: 20,
    lineHeight: 30,
    color: "#BA8B07",
    padding: 10,
    marginTop: 5
  },
});
