import axios from 'axios';

export const LOADING = 'LOADING';
export const SUCCESS = 'SUCCESS';
export const ERROR = 'ERROR';
export const ADDING_SMURF = 'ADDING_SMURF';
export const ADDING_ERROR = 'ADDING_ERROR';

export const fetchSmurfs = () => (dispatch) => {
	dispatch({ type: LOADING });
	axios
		.get('http://localhost:3333/smurfs')
		.then((res) => {
			console.log(res);
			dispatch({ type: SUCCESS, payload: res.data });
		})
		.catch((err) => {
			dispatch({ type: ERROR, payload: err.message });
		});
};

export const addSmurf = () => {
	return { type: ADDING_SMURF };
};

export const smurfError = () => {
	return { type: ADDING_ERROR };
};
//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.
