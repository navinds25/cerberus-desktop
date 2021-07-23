<script>
    import { onDestroy } from "svelte";
    import Toast from "../components/Toast/TestToast.svelte";
    import {
        toasts,
        addToast,
        dismissToast,
    } from "../components/Toast/store.js";

    const addToastButton = () => {
        addToast({
            msg: "hello world",
        });
    };

    let toasts_value;

    const subscriber = toasts.subscribe((value) => {
        toasts_value = value;
    });
    const unsubscribe = () => {
        subscriber.apply();
    };
    onDestroy(subscriber);
</script>

<p>Test Page</p>
<p>{JSON.stringify(toasts_value)}</p>
<p>{JSON.stringify($toasts)}</p>

{#if $toasts}
    <div class="toast-container">
        {#each $toasts as toast}
            <Toast on:dismiss={() => dismissToast(toast.id)}>{toast.msg}</Toast>
        {/each}
    </div>
{/if}

<button on:click={addToastButton}>addToast</button>
<button on:click={unsubscribe}>unsubscribe</button>

<style>
    p {
        color: yellow;
    }
    main {
        height: inherit;
        width: inherit;
        background-color: aliceblue;
    }
</style>
