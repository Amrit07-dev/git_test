import {name} from "./values.mjs";

import "./func.mjs";
console.log(name);

import os from "os";
console.log(os.platform(), os.version());

import path from "path";
console.log(path.join("folder", "subfolder", "an"));

console.log(path.resolve("../../../", "usr"));

console.log(path.basename("/path/user/share/file.txt")); 
console.log(path.parse("/dats/user/fix/file.txt"));
console.log(path.isAbsolute("../path/file.txt"));

import fs from "fs";

fs.readFile("example.txt", 'utf-8', (err, data) => {
    if(err){
        console.log("itz", err);
    }
    else{
        console.log(data);
    }
})

const stat = fs.stat("example.txt", "utf-8", (err,data) => {
    if(err){
        console.log("itz ", err);
    }
    else{
        console.log(data.size, data.isFile(), data.isDirectory(), data.mode);
    }
})

const dats = "\nanother hell!!.";
fs.appendFile("example.txt", dats,"utf-8", (err, data) => {
    if(err){
        console.log("itz ", err);
        return;
    }
})