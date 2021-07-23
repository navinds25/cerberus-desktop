<script>
    import { dismissToast, toasts } from "./store";
    import Toast from "./Toast.svelte";
</script>

{#if $toasts}
    <div class="toast-container">
        {#each $toasts as toast}
            <Toast on:dismiss={() => dismissToast(toast.id)}>{toast.msg}</Toast>
        {/each}
    </div>
{/if}

<style>
    .toast-container {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        width: 10%;
        display: flex;
        margin-top: 1rem;
        justify-content: center;
        flex-direction: column;
        z-index: -1;
    }
</style>
