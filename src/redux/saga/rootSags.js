import {takeEvery, fork, call, put, spawn} from 'redux-saga/effects';

async function fetchData(param){
  return ( await (await fetch(`https://swapi.dev/api/${param}`)).json());
}

function* loadPeople() {
  const {results} = yield call(fetchData, 'people');
  yield put({type: 'GET_PEOPLE', payload: results})
}

function* loadPlanets() {
  const {results} = yield call(fetchData, 'planets');
  yield put({type: 'GET_PLANETS', payload: results})
}

function* workerSaga() {
  yield spawn(loadPeople);
  yield spawn(loadPlanets);
}

function* watchLoadSaga() {
  yield takeEvery('SAGA_START', workerSaga)
}

export function* rootSaga() {
  yield fork(watchLoadSaga);
}