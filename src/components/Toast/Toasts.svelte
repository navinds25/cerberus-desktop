<script>
    import Toast from "./Toast.svelte";
    import { toasts } from "./store.js";
</script>

{#if $toasts}
    <div class="toast-container">
        {#each $toasts as toast}
            <Toast id={toast.id} msg={toast.msg} dismiss={toast.dismiss} />
        {/each}
    </div>
{/if}

<style>
    .toast-container {
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1000;
        flex-direction: column;
        bottom: 1rem;
        position: absolute;
        right: 0;
        left: 0;
    }
</style>