import { error, redirect } from "@sveltejs/kit";
import { serializeNonPOJOs } from "$lib/utils";

export const load = ({ locals }) => {
		throw redirect (301, "/pages/start")
};
