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
	<h2
		class="mt-2 text-center text-3xl font-bold tracking-tight text-base-content from-slate-600 to-zinc-950"
	>
		Welcome to Sveltekit x Pocketbase Starterkit!
	</h2>
	<p class="text-center mt-1">
		Starterproject using
		<span class=" font-semibold text-primary">Pocketbase</span>
		and
		<span class=" font-semibold text-primary">Sveltekit</span>
	</p>
</div>
