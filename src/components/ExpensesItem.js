import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { GlobalStyles } from "../constants/styles";
import { useNavigation } from "@react-navigation/native";
function getForrmattedDate(date) {
  return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
}

export default function ExpensesItem({ description, date, amount, id }) {

  const navigation = useNavigation();
  
  function expensePressHandler() {
    navigation.navigate("ManageExpense", {
      expenseId: id,
    });
  }
  return (
    // !! expenseItem flexdirection: 'row'
    // !! and  two View inside expenseItem is 'column
    <TouchableOpacity onPress={expensePressHandler}>
      <View style={styles.expenseItem}>
        <View>
          <Text style={[styles.textBase, styles.description]}>
            {description}
          </Text>
          <Text style={styles.date}>{getForrmattedDate(date)}</Text>
        </View>
        <View style={styles.amountContainer}>
          <Text style={styles.amount}>{amount.toFixed(2)}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  expenseItem: {
    backgroundColor: GlobalStyles.colors.primary400,
    padding: 12,
    borderRadius: 6,
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 5,
  },
  textBase: {
    color: GlobalStyles.colors.primary50,
  },
  description: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 4,
  },
  amountContainer: {
    backgroundColor: "white",
    paddingHorizontal: 12,
    paddingVertical: 4,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 60,
    marginVertical: 6,
    margin: 2,
  },
  amount: {
    color: GlobalStyles.colors.primary500,
    fontWeight: "bold",
  },
  date: {
    color: GlobalStyles.colors.accent500,
    fontWeight: "700",
  },
});
