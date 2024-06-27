At route handler:

![alt text](images/image-1.png)

request.payload:

![alt text](image.png)

At parsing sheet:

![alt text](images/image-2.png)

After parsing:

![alt text](images/image-3.png)

Arguments of each function:

![alt text](images/image-4.png)

Preprocess chain:

![alt text](images/image-5.png)

Validate and store:

![alt text](images/image-6.png)

Loop over each item in the chain:

![alt text](images/image-7.png)

![alt text](images/image-8.png)

Function's definition:

![alt text](images/image-9.png)

Some fn:

![alt text](images/image-10.png)

The cacheKey function:

![alt text](images/image-11.png)

The `label` function is similar. Also, `queries` is updated:

![alt text](images/image-12.png)

`label` does not have `datasource`:

![alt text](images/image-13.png)

So it uses the `arguments` as a chain:

![alt text](images/image-14.png)

`arguments` is an array and its type does not match with any cases in the switch statement, so here the code will return the `queries`:

![alt text](images/image-15.png)

`queries` is empty and extended with `queriesInCell`:

![alt text](images/image-16.png)

Convert `queries` from object to an array with its values:

![alt text](images/image-17.png)

`invoke` function:

![alt text](images/image-18.png)

Get function definition of `es` again:

![alt text](images/image-19.png)

After `resolveArguments`, `args` will be an array of `Promise`.

![alt text](images/image-20.png)

Those `Promises` will be settled by `Promise.all` to get the value:

![alt text](images/image-21.png)

The `args` then will be indexed:

![alt text](images/image-22.png)

Call to the `fn` function:

![alt text](images/image-23.png)

And it will call the `originalFn`, which will be the `config.fn`, which will associated with `this` object that inherited from `TimelionFunction`:

![alt text](images/image-24.png)

Then, that function will call the `originalFunction`, which is `esFn`:

![alt text](images/image-25.png)

After all of the Promises are resolved, the code return like this:

![alt text](images/image-26.png)

When use with `props(label="a")`:

![alt text](images/image-27.png)

Enter the `_.each`:

![alt text](images/image-28.png)

The while loop:

![alt text](images/image-29.png)

Assign to `cur`:

![alt text](images/image-30.png)

Here is where it assigns the value and leads to prototype pollution:

![alt text](images/image-31.png)

As we can see, `curr.label` = `a`:

![alt text](images/image-32.png)

Try with `props(label.__proto__.AAA='a')`:

![alt text](images/image-33.png)

The key will be `label.__proto__.AAA`:

![alt text](images/image-34.png)

Another iteration:

![alt text](images/image-35.png)

And `prop` becomes `__proto__`:

![alt text](images/image-36.png)

Final, the `AAA` part:

![alt text](images/image-37.png)

The `prop` becomes `AAA`:

![alt text](images/image-38.png)

And `cur.AAA` will be `a`:

![alt text](images/image-39.png)

The `Object.Prototype` is polluted with `AAA`:

![alt text](images/image-40.png)

After that, we have this:

![alt text](images/image-41.png)

Now, try with `props(label.__proto__.env.AAA="a")`. The `data` will look like this:

![alt text](images/image-47.png)

At the first iteration, `prop = ''` is not exist, it will assign `cur[''] = {}`. This means, the `result` will also have a property named `''` with an empty object as value. After that, `cur` is assigned with `{}`, which is the return value of the previous assignment (`cur` and `cur[prop]` both point to the same object):

![alt text](images/image-48.png)

Now, `prop` will become `label`:

![alt text](images/image-49.png)

Same as before, `result` will have `label` property and `prop` will become `__proto__`:

![alt text](images/image-50.png)

With the third iteration, `cur` will be come its prototype as `__proto__` always exist in every object:

![alt text](images/image-51.png)

After that, `prop` becomes `env`.

Then, due to `cur` is point to `Object.prototype`, it will add `env` to the `Object.prototype` as an empty object and `cur` also reference to `env` inside `Object.prototype.env`.

![alt text](images/image-53.png)

After that, the loop will exit and the `cur[prop] = data[p]` will be equivalent to `env[AAA] = 'a'`.

![alt text](images/image-54.png)

The `Object.prototype` is polluted with `env`:

![alt text](images/image-55.png)

The `process.env.__proto__.__proto__` is Object.prototype:

![alt text](images/image-57.png)