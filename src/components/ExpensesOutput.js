import {View,StyleSheet} from 'react-native'

import { GlobalStyles } from "../constants/styles";
import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "Lunch",
    amount: 149,
    date: new Date("2023-01-01"),
  },
  {
    id: "e2",
    description: "Movie",
    amount: 160,
    date: new Date("2023-01-03"),
  },
  {
    id: "e3",
    description: "A computer book",
    amount: 259,
    date: new Date("2023-01-05"),
  },
  {
    id: "e4",
    description: "Coffe",
    amount: 120,
    date: new Date("2023-01-10"),
  },
  {
    id: "e5",
    description: "A pair of shoes",
    amount: 399,
    date: new Date("2023-01-14"),
  },
];

function ExpensesOutput({expensesPeriod}){
    return (
        <View style={styles.container}>
            <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
            <ExpensesList expenses={DUMMY_EXPENSES}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        // ! เว้นระยะแนวนอนขอบซ้ายขวา
        paddingHorizontal: 24, 
        paddingTop: 24, 
        paddingBottom: 4,
        backgroundColor: GlobalStyles.colors.primary700,
    }
})

export default ExpensesOutput;
