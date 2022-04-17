import {takeEvery, fork, call, put, spawn} from 'redux-saga/effects';

async function fetchData(param){
  return ( await (await fetch(`https://swapi.dev/api/${param}`)).json());
}

function* loadPeople() {
  const {results} = yield call(fetchData, 'people');
  yield put({type: 'SET_PEOPLE', payload: results})
}

function* loadPlanets() {
  const {results} = yield call(fetchData, 'planets');
  yield put({type: 'SET_PLANETS', payload: results})
}

function* workerSaga() {
  yield spawn(loadPeople);
  yield spawn(loadPlanets);
}

function* watchLoadSaga() {
  yield takeEvery('LOAD_DATA', workerSaga)
}

export function* rootSaga() {
  yield fork(watchLoadSaga);
}