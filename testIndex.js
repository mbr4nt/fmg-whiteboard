let whiteboard = require("./index.js");
whiteboard.log("John", "Programming").then(response => {
    console.log("back");
    console.log(response);
});