import {all, call, put, select, takeLatest, delay} from 'redux-saga/effects';
import * as actions from '../reducers';
import * as services from '../services';



export function* watchCreatePerson() {
  yield takeLatest(actions.createPerson.toString(), takeCreatePerson);
}


export function* takeCreatePerson() {
  try {
    const fields = yield select(state => state.person.form.fields);
    const people = yield select(state => state.person.list.people);


    const person = {
        id: people.length + 1,
        ...fields,
    }

    yield delay(500);

    const result = [person, ...people]
    yield put(actions.createPersonResult(result));

  }catch(error) {
    yield put(actions.createPersonError(error.toString()))
  }
}
