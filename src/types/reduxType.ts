import {store} from "../Redux";

type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof  store.dispatch

export type {
    RootState, AppDispatch
}