import{
	INCREMENT,
	DECREMENT
} from './types'
const state={
	count:20
};
import getters from './getters'
const mutations={
	[INCREMENT](state){
		state.count++;
	},
	[DECREMENT](state){
		state.count--;
	}
};
export default{
	getters,
	state,
	mutations
}