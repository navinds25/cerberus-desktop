<script>
	import page from "page";
	import LockScreen from "./pages/LockScreen.svelte";
	import Home from "./pages/Home.svelte";
	import TestPage from "./pages/TestPage.svelte";
	import Toasts from "./components/Toast/Toasts.svelte";
	let current;
	page("/", () => (current = TestPage));
	//page("/login", () => (current = LockScreen));
	page("/test", () => (current= TestPage));
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
	}
</style>
