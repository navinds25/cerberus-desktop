<script>
    import { randomUUID } from "crypto";
    import {writable} from 'svelte/store';

    const toasts = writeable([]);
    const addToast = (toast) => {
        const id = randomUUID();
        const defaults = {
            id: id,
            dismiss: true,
            timeout: 3000,
        };
        const t = { ...toast, ...defaults };
    };

    const dismissToast = (id) => {};
</script>

<div class="toast-container">
    <div class="toast" />
</div>

<style>
</style>
