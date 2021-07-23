<script>
	import page from "page";
	import LockScreen from "./pages/LockScreen.svelte";
	import Home from "./pages/Home.svelte";
	import Toasts from "./components/Toast/Toasts.svelte";
	let current;
	page("/", () => (current = LockScreen));
	//page("/login", () => (current = LockScreen));
	page("/home", () => (current = Home));
	page.start();
</script>

<main>
	<svelte:component this={current} />
	<Toasts />
</main>

<style>
	main {
		height: inherit;
		width: inherit;
	}
</style>
