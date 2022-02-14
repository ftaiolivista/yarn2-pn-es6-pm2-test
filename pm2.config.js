module.exports = {
    apps: [
        {
            name: 'srv',
            cwd: 'srv',
            script: './index.js',
            args: '',
            instances: 1,
            node_args: '-r /home/vista/pm2pnp/.pnp.cjs --experimental-loader /home/vista/pm2pnp/.pnp.loader.mjs',
            exec_mode: 'cluster',
            autorestart: false,
            watch: false,
            max_memory_restart: '1G'
        }
    ]
}

