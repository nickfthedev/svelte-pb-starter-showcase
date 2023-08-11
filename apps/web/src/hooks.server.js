import PocketBase from 'pocketbase';
import { serializeNonPOJOs } from '$lib/utils';

export const handle = async ({ event, resolve }) => {
	event.locals.pb = new PocketBase('http://127.0.0.1:8090');
	event.locals.pb.authStore.loadFromCookie(event.request.headers.get('cookie') || '');

	try {
		if (event.locals.pb.authStore.isValid) {
			await event.locals.pb.collection('users').authRefresh();
			event.locals.user = serializeNonPOJOs(event.locals.pb.authStore.model);
		}
	} catch (_) {
		event.locals.pb.authStore.clear();
		event.locals.user = undefined;
	}
  // Theme SSR prevents flickering themes at page load
  let theme = event.cookies.get("theme");
  if (theme) {
    return await resolve(event, {
      transformPageChunk: ({ html }) =>
        html.replace('data-theme=""', `data-theme="${theme}"`),
    });
  }

	
	const response = await resolve(event);

	response.headers.set('set-cookie', event.locals.pb.authStore.exportToCookie({ secure: false }));

	return response;
};
