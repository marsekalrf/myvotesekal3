import { GET_VOTER, REGISTER_VOTER, VERIFY_VOTER , LOGIN_VOTER, LOADING, SESSION_LOG } from './types';
import axios from 'axios';

export const loginVoter = (login_data) => dispatch => {
	dispatch(setLoading());
	callApiAndFeedBack(login_data).then(data => console.log(data));
}

export const registerVoter = (reg_data) => dispatch => {
	dispatch(setLoading());
	axios.post("http://localhost:5000/users/register", reg_data).then(res => dispatch({
		type: REGISTER_VOTER,
		payload: res.data
	}))
}

export const getVoter = () => dispatch => {
	dispatch(setLoading());
	axios.get("http://localhost:5000/users/").then(res => dispatch({
		type : GET_VOTER,
		payload : res.data
	}))
}

export const logoutVoter = () => dispatch => {
	dispatch(setLoading());
	axios.get("http://localhost:5000/users/logout")
}

export const verifyVoter = (voter_id) => dispatch => {
	dispatch(setLoading());
	axios.get("http://localhost:5000/users/verify?=", voter_id).then(res => dispatch({
		type : VERIFY_VOTER,
		payload : res.data
	}))
}

export const setLoading = () => {
	return {
		type: LOADING
	}
}

function callApiAndFeedBack(user){
	if(user.username === null){
		return new Error("Invalid username: username shouldn't empty");
	}
	if(user.password === null){
		return new Error("Invalid password: password shouldn't empty");
	}
	axios.post("http://localhost:5000/users/login", user).then(res => {return res.data});
}

function logSession(){

}