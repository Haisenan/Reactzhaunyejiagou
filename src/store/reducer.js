import { combineReducers } from 'redux-immutable';
import { reducer as headerReducer }  from '../common/header/store';
// 拿过来header  里面的 store{reducer}   其实还是reducer


export default combineReducers({
	header : headerReducer
});


