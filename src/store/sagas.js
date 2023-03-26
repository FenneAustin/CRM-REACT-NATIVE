import {all} from "redux-saga/effects"
import person from "../features/customer/sagas"

export default function* rootSaga(){
    yield all([
        person()
    ])
}
