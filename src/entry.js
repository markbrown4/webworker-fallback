
import WorkerProxy from './worker-proxy.js';
import appThread from './app-thread.js';
import uiThread from './ui-thread.js';

let forceSingleThread = true;

if (!forceSingleThread && window.Worker) {
  let worker = new Worker('dist/app-thread.bundle.js')
  uiThread(worker);
}
else {
  let workerProxy = new WorkerProxy();
  uiThread(workerProxy.worker);
  appThread(workerProxy.self);
}
