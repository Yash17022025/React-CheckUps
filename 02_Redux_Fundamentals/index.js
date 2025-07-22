import {
  createStore,
  compose,
  applyMiddleware,
  bindActionCreators,
} from "redux";

const makeLouder = (string) => string.toUpperCase();
const repeatThreeTimes = (string) => string.repeat(3);
const embolden = (string) => string.bold();

// const makeLouderRepeatThreeTimesAndEmbolden = (string) =>
//   embolden(repeatThreeTimes(makeLouder(string)));

const makeLouderRepeatThreeTimesAndEmbolden = compose(
  embolden,
  repeatThreeTimes,
  makeLouder
);

console.log(makeLouderRepeatThreeTimesAndEmbolden("hello"));
compose();
