<script>
    export let id;
    export let msg;
    export let dismiss;
    import { dismissToast } from "./store.js";
    const boxClick = () => {
        if (dismiss) {
            dismissToast(id);
        }
    };
</script>

<button {id} class="toast-box" on:click={() => boxClick()}>
    <p class="toast-msg">{msg}</p>
</button>

<style>
    .toast-box {
        background-color: #26292e;
        width: inherit;
        height: 3rem;
        border-radius: 1rem;
        margin: 0.2rem;
        border: none;
        display: flex;
        align-items: center;
        justify-content: center;
        justify-self: center;
        padding-left: 2rem;
        padding-right: 2rem;
    }
    .toast-msg {
        color: #c7c6c4;
    }
</style>
