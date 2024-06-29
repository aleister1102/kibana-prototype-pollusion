After calling to `normalizeSpawnArguments` in `spawn` function:

![alt text](images/image-68.png)

As we can see, the `envPairs` contains our payload. Also, after that, `spawn` will call to the `spawn` function inside `internal/child_process.js`:

![alt text](images/image-69.png)

The `options` variable will be passed into `this._handle.spawn`:

![alt text](images/image-70.png)

Where `this._handle` is a handle to a process:

![alt text](images/image-71.png)