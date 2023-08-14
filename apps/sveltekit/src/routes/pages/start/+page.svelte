<script>
	import { Input } from '$lib/components';
	import { enhance } from '$app/forms';
	import toast from 'svelte-french-toast';

		export let form;
		let loading = false;
		
		const submitForm = () => {
		loading = true;
		return async ({ result, update }) => {
			switch (result.type) {
				case 'success':
					await update();
					break;
				case 'invalid':
					toast.error('Invalid credentials');
					await update();
					break;
				case 'error':
					toast.error(result.errors.message);
					break;
				default:
					await update();
			}
			loading = false;
		};
	};
</script>

<div class="flex flex-col items-center h-full w-full">
	<h2 class="mt-2 text-center text-3xl font-bold tracking-tight text-base-content from-slate-600 to-zinc-950">
		Welcome to Alisave Express!
	</h2>
	<p class="text-center mt-1">
		Easily download images from <span class=" font-semibold text-primary">Aliexpress</span> without installing an (potentially) unsafe browser extension!
		<br>
		Just paste your Aliexpress Product below and click start!
	</p>

	<form
		action="?/handleSubmit"
		method="POST"
		class="flex flex-col items-center space-y-2 w-full pt-4"
		use:enhance={submitForm}
	>
		<Input
			type="text"
			id="url"
			label="Aliexpress URL"
			value={form?.data?.url ?? ''}
			errors={form?.errors?.url}
			disabled={loading}
		/>
		<div class="w-full max-w-lg pt-2">
			<button type="submit" class="btn btn-primary w-full" disabled={loading}>Start</button>
		</div>
	</form>
</div>