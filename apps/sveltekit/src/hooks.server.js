import PocketBase from 'pocketbase';
import { serializeNonPOJOs } from '$lib/utils';
import { PUBLIC_POCKETBASE_URL } from '$env/static/public';

export const handle = async ({ event, resolve }) => {
	event.locals.pb = new PocketBase(PUBLIC_POCKETBASE_URL);
	// load the store data from the request cookie string
	event.locals.pb.authStore.loadFromCookie(event.request.headers.get('cookie') || '');

	try {
		if (event.locals.pb.authStore.isValid) {
			await event.locals.pb.collection('users').authRefresh();
			event.locals.user = serializeNonPOJOs(event.locals.pb.authStore.model);
		}
	} catch (error) {
		console.log('Hooks.server.js: ', error);
		event.locals.pb.authStore.clear();
		event.locals.user = undefined;
	}

	let response = null;
	// Theme SSR prevents flickering themes at page load
	let theme = event.cookies.get('theme');
	if (theme) {
		response = await resolve(event, {
			transformPageChunk: ({ html }) => html.replace('data-theme=""', `data-theme="${theme}"`)
		});
	} else {
		response = await resolve(event);
	}

	// send back the default 'pb_auth' cookie to the client with the latest store state
	response.headers.append(
		'set-cookie',
		event.locals.pb.authStore.exportToCookie({ httpOnly: false })
	);

	return response;
};
