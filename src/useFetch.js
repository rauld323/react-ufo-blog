import { useState, useEffect } from 'react';

const useFetch = url => {
	const [data, setData] = useState(null);
	const [isPending, setPending] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const abortCont = new AbortController();
		setTimeout(() => {
			fetch(url)
				.then(res => {
					if (!res.ok) {
						throw Error(
							'Data was not fetched '
						);
					}
					return console.log(
						res.json()
					);
				})
				.then(data => {
					setData(data);
					setPending(false);
					setError(null);
				})
				//Catch any error that comes in!
				.catch(err => {
					if (
						err.name ===
						'AbortError'
					) {
						console.log(
							'fetch aborted'
						);
					} else {
						setPending(false);
						setError(
							err.message
						);
					}
				});
		}, 1000);
		return () => abortCont.abort();
	}, [url]);

	return { data, isPending, error };
};

export default useFetch;
