import { Text, View, StyleSheet } from "react-native";
// ! แก้ porperty ของ head ของ bottomtabs ได้
import { useLayoutEffect, useContext } from "react";
import { GlobalStyles } from "../constants/styles";
import { ExpensesContext } from "../store/expenses-context";

import Button from "../UI/Button";
import IconButton from "../UI/IconButton"

function ManageExpense({ route, navigation }) {
  const expensesCtx = useContext(ExpensesContext)
  const editedExpenseId = route.params?.expenseId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: editedExpenseId ? "Update Expense" : "Add Expense",
    });
  }, [navigation, editedExpenseId]);

  function cancelHandler(){
    navigation.goBack();
  }
  
  function confirmHandler(){
    if(editedExpenseId){
      // !UPDATE
      expensesCtx.updateExpense(editedExpenseId,{
        description: 'Update Test',
        amount: 22.22,
        date: new Date('2023-02-13'),
      });
    }else{
      // ! ADD
      expensesCtx.addExpense({
        description: 'New Test',
        amount: 19.99,
        date: new Date('2023-02-12')
      })
    }
    navigation.goBack();
  }

  function deleteExpenseHandler(){
    expensesCtx.deleteExpense(editedExpenseId)
    navigation.goBack();
  }
  return (
    <View style={styles.container}>
      <View style={styles.buttons}>
        <Button style={styles.button} mode="flat" onPress={cancelHandler}>Cancel</Button>
        <Button style={styles.button} onPress={confirmHandler}>{editedExpenseId ? "Update" : "Add"}</Button>
      </View>
      <View style={styles.deleteContainer}>
        <IconButton
        icon = 'trash'
        color={GlobalStyles.colors.accent500}
        size={36}
        onPress={deleteExpenseHandler}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary700,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    // ! fix width ให้อย่างน้อย 125 กรณีที่ ช้อความสั้นแล้วปุ่มมันจะสั้น
    minWidth: 125,
    marginHorizontal: 8,
  },
  deleteContainer:{
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: 'center',
  }
});

export default ManageExpense;
