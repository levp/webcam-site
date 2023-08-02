export function notFoundHandler() {
	return (req, res) => {
		res.status(404).end('404 not found');
	};
}
