import { Worker } from "worker_threads";
import {cpus}  from "os";
import path from "path";

const workerPath = path.resolve(path.dirname(''), 'src', 'wt', 'worker.js')


const performCalculations = async () => {
    let result = [];
    cpus().forEach((v, i) => {
        let worker = new Worker(workerPath, {workerData: 10 + i});
        result.push(
            new Promise(resolve => {
                worker.on('message', obj => {
                    resolve(result[i] = obj);
                });
                worker.on('error', () => {
                    resolve(result[i] = {status: 'error', data: null});
                });
                worker.on('exit', (code) => {
                    if (code) {
                        reject(new Error(`Worker stopped with code ${code} exit.`));
                    }
                });
            })
        ) 
    })
    
    console.log(await Promise.all(result));
};

await performCalculations();
