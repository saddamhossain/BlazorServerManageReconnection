new MutationObserver((mutations, observer) => {
    // call when any UI chnages occured.
    if (document.querySelector("#components-reconnect-modal h5 a")) {
        async function Reconnection() {
            await fetch(""); // Check the server is available
            location.reload();
        }
        observer.disconnect();
        Reconnection();
        setInterval(Reconnection, 1000); // now every 10 seconds, see if the server is back, then reload.
    }
}).observe(document.body, { childList: true, subtree: true });