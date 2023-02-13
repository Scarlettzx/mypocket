import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { GlobalStyles } from "../constants/styles";
import React from "react";

// ! {children มาจาก ManageExpens ตรง <Button>____</Button>}
function Button({ children, style, mode, onPress }) {
  return (
    // ! รับ style ของหน้าก่อนหน้า
    <View style={style}>
      <TouchableOpacity onPress={onPress}>
        <View style={[styles.button, mode === 'flat' && styles.flat]}>
          <Text style={[styles.buttonText, mode === 'flat' && styles.flatText]}>{children}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default Button;

const styles = StyleSheet.create({
  button: {
    backgroundColor: GlobalStyles.colors.primary400,
    borderRadius: 4,
    padding: 8,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
  },
  flat:{
    backgroundColor: 'transparent',
  },
  flatText:{
    color: GlobalStyles.colors.primary200,
  }
});
