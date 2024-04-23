import axios from 'axios';

export function storeExpense(expenseData) {
  const apiUrl = process.env.EXPO_PUBLIC_API_URL;
  axios.post(
    `${apiUrl}/expenses.json`,
    expenseData
  );
}
