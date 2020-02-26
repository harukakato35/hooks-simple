import {combineReducers} from 'redux';
import { connectRouter } from 'connected-react-router';
import count from './modules/Count';
import click from './modules/Click';

export const rootReducer = history => combineReducers({

    router: connectRouter(history),
    count: count, //左側の名前はなんでも良い、右側はimportしたものの名前
    click: click
});