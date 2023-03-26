import {all} from "redux-saga/effects"
import person from "../features/person/sagas"

export default function* rootSaga(){
    yield all([
        person()
    ])
}
