
A test case for https://github.com/typpo/web-workers-fallback

```bash
npm install
npm run build
npm run server
```

Set `forceSingleThread` to true in `worker-polyfill.js` to test polyfill

```js
if (typeof window.Worker !== 'undefined') return;
```

I'm expecting data to contain the state returned `{ count: x }`
The worker polyfill seems be returning the action that was posted to the worker instead  `{ type: "increment" }`
