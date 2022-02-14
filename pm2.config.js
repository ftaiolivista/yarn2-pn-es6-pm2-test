module.exports = {
    apps: [
        {
            name: 'srv',
            cwd: 'srv',
            script: './index.js',
            instances: 1,
            interpreter_args: '--require=/home/vista/pm2pnp/srv/.pnp.cjs --experimental-loader=/home/vista/pm2pnp/srv/.pnp.loader.mjs',
            exec_mode: 'cluster'
        }
    ]
}

