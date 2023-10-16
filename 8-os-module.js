const { log } = require('console')
const os = require('os')

//info about current user

const user = os.userInfo()
console.log(user);

// methos returns the system uptime in seconds
console.log(`they system uptime is ${os.uptime()} seconds`);

const currentOS = {
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem()
}

console.log(currentOS);