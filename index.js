import express from 'express';
import { notFoundHandler } from './lib/handlers/not-found.handler.js';
import { internalErrorHandler } from './lib/handlers/internal-error.handler.js';

main().catch(err => {
	console.error('[server] Uncaught error in main():', err);
});

async function main() {
	const app = express();

	app.use(express.static('public'));
	app.use(notFoundHandler());
	app.use(internalErrorHandler());

	const server = app.listen(3000, () => {
		const { port } = server.address();
		console.log(`Server listening on port ${port}.`);
	});
}
