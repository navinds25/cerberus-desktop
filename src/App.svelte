<script>
	import page from "page";
	import LockScreen from "./pages/LockScreen.svelte";
	import Home from "./pages/Home.svelte";
	let current = LockScreen;
	page("/", () => (current = LockScreen));
	page("/home", () => (current = Home));
	page.start();
</script>

<main>
	<svelte:component this={current} />
</main>

<style>
	main {
		height: inherit;
		width: inherit;
		z-index: 0;
	}
</style>
