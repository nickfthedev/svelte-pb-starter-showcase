import { error, fail, redirect } from "@sveltejs/kit";
import { validateData } from "$lib/utils";
import { aliURLSchema } from "$lib/schemas";


export const actions = {
	handleSubmit: async ({ request, locals }) => {
		const { formData, errors } = await validateData(
			await request.formData(),
			aliURLSchema,
		);

		if (errors) {
			return fail(400, {
				data: formData,
				errors: errors.fieldErrors,
			});
		}

		throw redirect(303, "/");
	},
};
