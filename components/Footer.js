import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

export default function Footer() {
  return (
    <View style={styles.footer}>
      <Image source={require("../assets/footer.png")} />
    </View>
  )
}

const styles = StyleSheet.create({
  footer: {
    position: 'absolute',
    bottom: 0,
    flex: 1,
    zIndex: 9999
  }
})