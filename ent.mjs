import EventEmitter from "events";
const emitter = new EventEmitter();

//register a listener
emitter.on("messageLogged", (data) => {
    console.log("listener called", data);
});

//triggering an event
emitter.emit("messageLogged", {id:1, url:"google.com"});