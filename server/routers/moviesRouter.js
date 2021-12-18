const express = require('express');
const router = express.Router();
const axios = require('axios');

router.route('/').get(async (req, resp) => {
	axios
		.get('https://jsonplaceholder.typicode.com/todos/')
		.then(function (response) {
			// handle success
			console.log(response.data);
			return resp.json(response.data);
		})
		.catch(function (error) {
			// handle error
			console.log(error);
			return resp.json(error);
		});
});

module.exports = router;
