import { createSlice } from '@reduxjs/toolkit'

const initialState = {
categories:[],
transaction: []
}

export const expenseSlice = createSlice({
  name: 'expense',
  initialState,
  reducers: {
    getTransactions: (state) => {
     
     
    },
   
  },
})

// Action creators are generated for each case reducer function
export const {getTransactions} = expenseSlice.actions

export default expenseSlice.reducer