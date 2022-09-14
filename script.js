const button = document.querySelector("button")

button.addEventListener("click", () => {
    Notification.requestPermission().then(perm => {
        if (perm === "granted") {
            const notify = new Notification("Alert for your data", {
                body: "You have successfully signed in to this ip, wanna get hacked?",
                data: {more: "data  from you"},
                icon: "/",
                // tag: "Welcome Message"
            })
            notify.addEventListener("close", e => {
                console.log(e)
            })
        }
    })
})

let usefullNotif
let interval
document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "hidden") {
        const leaveDate = new Date()
        setInterval(() => {

        
       usefullNotif = new Notification("You need to answer",{
        body: `Last seen ${Math.round((new Date() - leaveDate)/1000)} secs ago`,
        tag: "Last seen"
        }), 100})
    } else {
        usefullNotif.close()
    }

})