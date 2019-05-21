import * as actionTypes from './actionTypes';

import { fromJS } from 'immutable';

const defaultState = fromJS({
	 focus:false
});

export default (state = defaultState ,action)=>{
	switch(action.type){

		case actionTypes.INPUTFOCUS:
		return state.set('focus',true);

		case actionTypes.INPUTBLUR:
		return state.set('focus',false);


		default :
		  return state;
	}
   return state;
}