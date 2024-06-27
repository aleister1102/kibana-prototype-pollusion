`fork` return a `ChildProcess` that can be used to spawn: https://nodejs.org/api/child_process.html#child_processforkmodulepath-args-options

Change port when invoke `fork` function to `9669` and then we can debug the main process normally:

![alt text](images/image-58.png)

Simulate the polluted Object.prototype and jump to before the loop:

![alt text](images/image-59.png)

As we can see, `env` is equivalent to `{AAA: 'a'}` due to prototype pollution.

After the loop:

![alt text](images/image-60.png)

Somehow, with the invalid environment variables (`AAA=a`, `env=[Object object]`), canvas can not create a new socket:

![alt text](images/image-61.png)

But the child process still can be created:

![alt text](images/image-62.png)

Indeed, it creates a new WebSocket connection:

![alt text](images/image-63.png)

Now try with the payload ``:

![alt text](images/image-64.png)

As we can see, the stack trace is the same.

But, the `env` is polluted:

![alt text](images/image-65.png)

Voila!

The `envPairs` after the loop:

![alt text](images/image-66.png)

And we got the reverse shell:

![alt text](images/image-67.png)