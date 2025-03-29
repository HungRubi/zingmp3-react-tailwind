import appReducer from "./appReducers";
import { combineReducers } from "redux";
import musicReducer from "./musicReducers";
import { persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage'
import autoMergeLevel2 from "redux-persist/es/stateReconciler/autoMergeLevel2";
const commonConfig = {
    storage: storage,
    stateReconciler: autoMergeLevel2
}
const musicConfig = {
    ...commonConfig,
    key: 'music',
    whitelist: [
        'currentSongId',
    ]
}
const rootReducer = combineReducers({
    app: appReducer,
    music: persistReducer(musicConfig, musicReducer)
})

export default rootReducer