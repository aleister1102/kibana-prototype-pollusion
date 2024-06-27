Use `props(label.__proto__.env.AAA="a")`. The `data` will look like this:

![alt text](images/image-47.png)

At the first iteration, `prop = ''` is not exist, it will assign `cur[''] = {}`. This means, the `result` will also have a property named `''` with an empty object as value. After that, `cur` is assigned with `{}`, which is the return value of the previous assignment (`cur` and `cur[prop]` both point to the same object):

![alt text](images/image-48.png)

Now, `prop` will become `'label'`:

![alt text](images/image-49.png)

Same as before, `result` will have `'label'` property and `prop` will become `__proto__`:

![alt text](images/image-50.png)

With the third iteration, `cur` will be come its prototype as `__proto__` always exist in every object:

![alt text](images/image-51.png)

After that, `prop` becomes `env`.

Then, due to `cur` is point to `Object.prototype`, it will add `env` to the `Object.prototype` as an empty object and **`cur` also reference to `env` inside `Object.prototype.env`**.

![alt text](images/image-53.png)

After that, the loop will exit and the `cur[prop] = data[p]` will be equivalent to `env[AAA] = 'a'`.

![alt text](images/image-54.png)

The `Object.prototype` is polluted with `env`:

![alt text](images/image-55.png)