// Módulos criados

const { printName, lastName } = require("./printName");

printName("Felipe " + lastName);

// Módulos nativos

const os = require("os");

console.log(os.type());
