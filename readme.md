
# WorkerProxy

extracted from @colingourlay's [duet](https://github.com/colingourlay/duet)

`src/entry.js` shows how you can split work across the main thread and a background thread if WebWorkers are supported.  If not, both run in the main thread.

Change `forceSingleThread` in `entry.js` to test fallback without workers.

```bash
npm install
npm run build
npm run server
```
