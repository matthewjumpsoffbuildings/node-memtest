#!/usr/bin/env node

const child_process = require('child_process')
const workers = []

// setup the db worker
const dbWorker = child_process.fork('./dbworker')


// setup workers to do iteration
const numCPUs = Math.max(2, require('os').cpus().length)
for (var i = 0; i < numCPUs-1; i++) {
	const worker = child_process.fork('./worker')
	workers.push(worker)
	worker.on('message', (message)=>{ workerListener(worker, message)})
}


// start them off
for(i = 0; i<workers.length; i++){
	workers[i].send({iterate:true})
}

// called when worker generates data
function workerListener(currentWorker, message) {
	if(message.data) dbWorker.send(message)
	currentWorker.send({iterate:true})
	console.log("master", process.memoryUsage().rss / 1024 / 1024)
}
