import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import React from "react";

interface OrderState {
    age: string,
    email: string,
    fullName: string,
    address: string | undefined,
    data: string | undefined
}

const initialState: OrderState = {
    age: '',
    email: '',
    fullName: '',
    address: '',
    data: ''
}

export const sliceOrder = createSlice({
    name: 'sliceOrder',
    initialState,
    reducers: {
        setOrder: (state, action: PayloadAction<any>) => {
            state.age = action.payload.age
            state.email = action.payload.email
            state.fullName = action.payload.fullName
        },
        setAddress: (state, action: PayloadAction<string | undefined>) => {
            state.address = action.payload
        },
        setData: (state, action: PayloadAction<string>) => {
            state.data = action.payload
        }
    }
})

export const {setOrder, setAddress, setData} = sliceOrder.actions

export const sliceOrderReducer = sliceOrder.reducer
