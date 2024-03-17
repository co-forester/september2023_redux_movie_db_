import {createSlice} from "@reduxjs/toolkit";

interface IState {
    theme: boolean
}

const initialState: IState = {
    theme: true
}

const themeSlice = createSlice({
    name: 'triggerSlice',
    initialState,
    reducers: {
    themeChange: (state): void => {
    state.theme = !state.theme
    }
    }
})

const {reducer: themeReducer, actions} = themeSlice;

const themeActions = {
    ...actions
}

export {themeReducer, themeActions}