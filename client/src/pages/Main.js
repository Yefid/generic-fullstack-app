import React, { useEffect, useState } from 'react';
import moviesUtils from '../utils/moviesUtils';

export default function Main() {
	const [movies, setMovies] = useState([]);
	useEffect(async () => {}, []);
	const getMovies = async () => {
		const resp = await moviesUtils.getAllMovies();
		//console.log(resp.data);
		setMovies(resp.data);
		return resp.data;
	};

	return (
		<div>
			<input type="button" onClick={getMovies} value={'getMovies!'} />
			<table>
				<tbody>
					{movies.slice(0, 5)?.map((x, index) => {
						return (
							<tr key={index}>
								<td>{x?.title}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
}
