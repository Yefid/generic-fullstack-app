import axios from 'axios';

let config = () => {
	return {
		headers: {
			'x-access-token': sessionStorage['token'],
		},
	};
};

let host = 'http://localhost:8000/';
if (process.env.NODE_ENV == 'prod') {
	host = 'server/';
}
const url = host + 'api/movies';

const getAllMovies = () => {
	return axios.get(url, config());
};

export default {
	getAllMovies,
};
