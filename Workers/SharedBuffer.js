const { Worker } = require("worker_threads");

const sharedBuffer = new SharedArrayBuffer(4);
const buffer = new Uint8Array(sharedBuffer);
buffer.fill(5);

console.log('buffer before modify: ', buffer);

const worker = new Worker('./sharedWorker.js', {
  workerData: { sharedBuffer }
});

worker.once('message', () => {
	console.log('buffer after modify: ', buffer);
})