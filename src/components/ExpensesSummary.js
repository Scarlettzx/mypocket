import { View, Text, StyleSheet } from "react-native";
import { GlobalStyles } from "../constants/styles";

export default function ExpensesSummary({ periodName, expenses }) {
  // ! Reduce ใช้ loopคล้าย for each เหมาะกับวนลูปเก็บค่าส่งค่าค่าเดึยว
  const expensesSum = expenses.reduce((sum, expenses) => {
    return sum + expenses.amount;
  }, 0);
  // console.log({expenses})
  return (
    <View style ={styles.container}>
      <Text style ={styles.period}>{periodName}</Text>
      {/* ToFixed ทำให้เป็น float 2ตำแหน่ง */}
      <Text style ={styles.sum}>{expensesSum.toFixed(2)}฿</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: GlobalStyles.colors.primary50,
        padding: 8,
        borderRadius: 6,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 5,
    },
    period:{
        fontSize: 12,
        color: GlobalStyles.colors.primary400
    },
    sum:{
        fontSize: 16,
        fontWeight: 'bold',
        color: GlobalStyles.colors.primary500
    }
})