import React, { createContext, useReducer, useContext } from 'react';
import * as api from './api';
import { createAsyncDispatcher, initialAsyncState, createAsyncHandler } from './asyncAction';


const initialState = {
	users: initialAsyncState,
	user: initialAsyncState,
};

const datasHandler = createAsyncHandler('GET_USERS', 'users');
const dataHandler = createAsyncHandler('GET_USER', 'user');

function usersReducer(state, action){
    switch(action.type){
        // USERS
        case 'GET_USERS':
        case 'GET_USERS_SUCCESS':
        case 'GET_USERS_ERROR':
            return datasHandler(state, action);
        // USER
        case 'GET_USER':
        case 'GET_USER_SUCCESS':
        case 'GET_USER_ERROR':
            return dataHandler(state, action);
        default:
            throw new Error('Unhandled action type', action.type);
    }
}

export const getUsers = createAsyncDispatcher('GET_USERS', api.getUsers);
export const getUser = createAsyncDispatcher('GET_USER', api.getUser);

const DataStateContext = createContext(null);
const DataDispatchContext = createContext(null);

export function useDataState(){
    const state = useContext(DataStateContext);
    if(!state){
        throw new Error('Cannot find DataProvider');
    }
    return state;
}

export function useDataDispatch(){
    const dispatch = useContext(DataDispatchContext);
    if(!dispatch){
        throw new Error('Cannot find DataProvider');
    }
    return dispatch;
}

export function DataProvider({children}){
    const [state, dispatch] = useReducer(usersReducer, initialState)
    return (
        <DataStateContext.Provider value={state}>
            <DataDispatchContext.Provider value={dispatch}>
                {children}
            </DataDispatchContext.Provider>
        </DataStateContext.Provider>
    )
}