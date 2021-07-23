<script>
    function lock() {
        window.location.href = "/";
    }
</script>

<div class="main-container">
    <div class="application-menu">
        <h1>Cerberus</h1>
        <div class="lock-btn-container">
            <button class="lock-btn shadow-flat" on:click={lock}>Lock</button>
        </div>
    </div>
    <div class="content-container border">
        <div class="groups-container border" />
        <div class="main-entries-container border">
            <div class="entries-container" />
            <div class="view-entry-container" />
        </div>
    </div>
</div>

<style>
    h1 {
        font-family: "Ruthie";
        font-size: 3rem;
        color: #ffffff;
    }
    .lock-btn-container {
        display: flex;
        /*background-color: lavender; */
        flex: 1;
        z-index: inherit;
        justify-content: flex-end;
    }
    .lock-btn {
        border: none;
        border-radius: 1rem;
        padding: 1rem;
        text-transform: capitalize;
        z-index: inherit;
        color: #ffffff;
    }
    .shadow-flat {
        border-radius: 1rem;
        background: #26292e;
        box-shadow: 7px 7px 13px #191b1e, -7px -7px 13px #33373e;
    }
    .shadow-pressed {
        border-radius: 8px;
        background: #26292e;
        box-shadow: inset 7px 7px 13px #191b1e, inset -7px -7px 13px #33373e;
    }

    .border {
        border: 0.75px;
        border-color: #5A5854;
        border-style: dashed;
    }

    .main-container {
        height: inherit;
        width: 98%;
        display: flex;
        flex-direction: column;
        flex: 1;
        align-items: center;
        justify-content: center;
    }

    .content-container {
        /* background-color: lavender; */
        height: inherit;
        width: inherit;
        display: flex;
    }
    .groups-container {
        /* background-color: khaki; */
        height: inherit;
        display: flex;
        flex: 0.3;
    }
    .main-entries-container {
        /* background-color: coral; */
        height: inherit;
        display: flex;
        flex: 0.7;
        flex-direction: column;
    }
    .entries-container {
        /* background-color: cyan; */
        display: flex;
        flex: 1;
    }
    .view-entry-container {
        /* background-color: darkcyan; */
        display: flex;
        flex: 1;
    }
    .application-menu {
        background-color: #26292e;
        display: flex;
        border-radius: 1rem;
        height: 10%;
        padding-left: 1rem;
        padding-right: 1rem;
        flex: 1;
        align-items: center;
        width: 98%;
        margin-bottom: 0.4rem;
        /*justify-content: flex-start; */
    }
</style>
