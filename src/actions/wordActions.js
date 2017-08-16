import * as types from './actionTypes';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';
import ajax from '../../app/api/ajax';

export function loadWordsSuccess(words) {
  return {type: types.LOAD_WORDS_SUCCESS, words};
}

export function loadWords() {
  return function (dispatch) {
    dispatch(beginAjaxCall());
    ajax('http://localhost:3000/data', words => {
      dispatch(loadWordsSuccess(words));
    });
  };
}