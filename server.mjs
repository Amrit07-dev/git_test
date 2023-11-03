import http from "http";

const srun = http.createServer((req, res) => {
    if(req.url === "/"){
        res.end("root");
    }
    if(req.url === "/about"){
        res.end("about");
    }
    else {
    res.end("<h1>naahhhh</h1>");
    }
})

srun.listen("444", "localhost", () => {
    console.log("listening on 444, dumlocal");
})