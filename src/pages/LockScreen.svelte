<script>
    import { invoke } from "@tauri-apps/api/tauri";

    let pass = '';

    function auth() {
        console.log("clicked button");
        invoke("authenticate", {masterPassword: pass})
            .then((msg) => {
                console.log("auth success");
                window.location.href = "/home";
                console.log("auth success");
                console.log(msg);
            })
            .catch((err) => console.error(err));
    }
</script>

<main>
    <h1>Cerberus</h1>
    <p class="ls-msg">No database selected</p>
    <button class="ls-main-button"><p>Open Database</p></button>
    <button class="ls-main-button"><p>New Database</p></button>
    <p class="ls-msg">Enter Password:</p>
    <input bind:value={pass}/>
    <button on:click={auth}>ok</button>
</main>

<style>
    main {
        text-align: center;
        margin: 0;
        border: 0;
        padding: 0;
        height: inherit;
        width: inherit;
    }
    h1 {
        font-family: "Ruthie";
        font-size: 6rem;
        color: #ffffff;
    }
    .ls-msg {
        color: #ffffff;
    }
</style>
