// ! useReducer , createContext
import { useReducer, createContext } from "react";

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
    date: new Date("2023-02-12"),
  },
];
//   ! สร้างตัวแทน เข้าถึงได้เลย ไม่ต้องใช้แบบแม่สู่ลูกทุกที่ก็ดึงได้
//  ! ประกาศให้ลูกเรียกใช้ได้
export const ExpensesContext = createContext({
  // ! data = expense (เข้าถึงข้อมูลอะไรได้บ้าง)
  expenses: [],
  //  ! fnc addexpense
  addExpense: ({ description, amount, date }) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { description, amount, date }) => {},
});

function expensesReducer(state, action) {
  // ! state มีมากกว่า 1 จึงใช้ switch case
  switch (action.type) {
    case "ADD":
      const id = new Date().toString() + Math.random().toString();
      return [{ ...action.payload, id: id }, ...state];
    case "DELETE":
      return state.filter((expense) => expense.id !== action.payload);
    case "UPDATE":
      const updatableExpenseIndex = state.findIndex(
        (expense) => expense.id === action.payload.id
      );
      const updatableExpense = state[updatableExpenseIndex];
      const updatedItem = { ...updatableExpense, ...action.payload.data };
      const updatedExpense = [...state];
      updatedExpense[updatableExpenseIndex] = updatedItem;
      return updatedExpense
    default:
      return state;
  }
}

//   ! ตัวที่ลูกจะใช้ ExpenseCOntextProvider
//   !  children ข้อมูลที่ยุใน Navigation(App.js)
function ExpenseContextProvider({ children }) {
  // ! dispatch = action
  const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);

  function addExpense(expenseData) {
    dispatch({ type: "ADD", payload: expenseData });
  }

  function deleteExpense(id) {
    dispatch({ type: "DELETE", payload: id });
  }

  function updateExpense(id, expenseData) {
    dispatch({ type: "UPDATE", payload: { id: id, data: expenseData } });
  }

  const value = {
    expenses: expensesState,
    addExpense: addExpense,
    deleteExpense: deleteExpense,
    updateExpense: updateExpense,
  };

  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  );
}

//   ? ครอบใน App
export default ExpenseContextProvider;
