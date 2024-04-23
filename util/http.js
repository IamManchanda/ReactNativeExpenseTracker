import axios from 'axios';

const apiUrl = process.env.EXPO_PUBLIC_API_URL;

export async function storeExpense(expenseData) {
  const response = await axios.post(`${apiUrl}/expenses.json`, expenseData);
  const id = response.data.name;
  return id;
}

export async function fetchExpenses() {
  const response = await axios.get(`${apiUrl}/expenses.json`);

  const expenses = [];

  for (const key in response.data) {
    const expenseObj = {
      id: key,
      amount: response.data[key].amount,
      date: new Date(response.data[key].date),
      description: response.data[key].description
    };
    expenses.push(expenseObj);
  }

  return expenses;
}

export function updateExpense(id, expenseData) {
  return axios.put(`${apiUrl}/expenses/${id}.json`, expenseData);
}

export function deleteExpense(id) {
  return axios.delete(`${apiUrl}/expenses/${id}.json`);
}
