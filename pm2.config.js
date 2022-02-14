module.exports = {
    apps: [
        {
            name: 'srv',
            cwd: 'srv',
            script: './index.js',
            instances: 1,
            interpreter_args: '--require=./srv/.pnp.cjs --experimental-loader=./srv/.pnp.loader.mjs',
            exec_mode: 'cluster'
        }
    ]
}

