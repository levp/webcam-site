export function internalErrorHandler() {
	return (req, res) => {
		res.status(500).end('500 internal error');
	};
}
