self.addEventListener("message", (ev) => {
    clients.matchAll().then(clientlist => {
        clientlist.forEach(client => {
            client.postMessage("call")
        })
    })
})