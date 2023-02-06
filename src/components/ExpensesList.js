import { FlatList, View, StyleSheet, Text } from "react-native";
import { GlobalStyles } from "../constants/styles";
import ExpensesItem from "./ExpensesItem";

function renderExpenseItem(itemData) {
  return (
    <ExpensesItem {...itemData.item}/>
  );
}

function ExpensesList({ expenses }) {
  return (
      <FlatList
        data={expenses}
        keyExtractor={(item) => item.id}
        renderItem={renderExpenseItem}
      />
  );
}

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: GlobalStyles.colors.primary50,
//     padding: 8,
//     borderRadius: 6,
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     marginTop: 24,
//   },
// });

export default ExpensesList;
