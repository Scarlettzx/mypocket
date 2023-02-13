import { StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
// import { useNavigation } from '@react-navigation/native';

const IconButton = ({ color, size, icon, onPress }) => {
  // const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.buttonContainer}>
        <Ionicons name={icon} size={size} color={color} />
      </View>
    </TouchableOpacity>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  buttonContainer: {
    marginHorizontal: 8,
    marginVertical: 2,
    padding: 6,
  },
});
