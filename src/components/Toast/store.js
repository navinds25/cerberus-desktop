import { writable } from "svelte/store";
import { v4 as uuidv4 } from "uuid";

export const toasts = writable([]);



export const dismissToast = (id) => {
    toasts.update((all) => all.filter((t) => t.id !== id));
};

export const addToast = (toast) => {
    const id = uuidv4();
    const defaults = {
        id: id,
        dismiss: true,
        timeout: 30000,
    };
    const t = {...defaults, ...toast };
    toasts.update((all) => [t, ...all]);

    if (t.dismiss)
        setTimeout(() => {
            dismissToast(t.id);
        }, t.timeout);
};