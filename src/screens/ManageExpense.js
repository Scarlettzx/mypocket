import { Text, View } from "react-native";
// ! แก้ porperty ของ head ของ bottomtabs ได้
import { useLayoutEffect } from "react";

function ManageExpense({ route, navigation }) {
  const editedExpenseId = route.params?.expenseId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: editedExpenseId?'Update Expense':"Add Expense"
    });
  },[navigation, editedExpenseId])
  
  return (
    <View>
      <Text>Manage Expense: {editedExpenseId}</Text>
    </View>
  );
}

export default ManageExpense;
