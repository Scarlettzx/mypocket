import { FlatList, View, StyleSheet, Text } from "react-native";
import { GlobalStyles } from "../constants/styles";

function renderExpenseItem (itemData){
    return (
    <Text style={{fontSize: 20}}>{itemData.item.description}</Text>
    )
}

function ExpensesList({ expenses }) {
  return(
  <View style = {styles.container}>
    <FlatList
      data={expenses}
      keyExtractor={(item) => item.id}
      renderItem=
      {renderExpenseItem}
    />
  </View>
  )
}

const styles = StyleSheet.create({
    container: {
    backgroundColor: GlobalStyles.colors.primary50,
    padding: 8,
    borderRadius: 6,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 24, 
},
});

export default ExpensesList;
