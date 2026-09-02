/**
 * pm2 configuration for the production server.
 *
 * Tuned for a small (4GB RAM) VPS:
 * - fork mode with a single instance. Cluster mode would run one Next.js
 *   server per CPU core, and each one holds its own copy of the loaded
 *   modules, which does not fit in 4GB alongside a build.
 * - max_memory_restart guards against a slow leak taking the box down.
 */
module.exports = {
  apps: [
    {
      name: "rekha-dental",
      script: "node_modules/next/dist/bin/next",
      args: "start -p 3003",
      instances: 1,
      exec_mode: "fork",
      autorestart: true,
      max_memory_restart: "600M",
      env: {
        NODE_ENV: "production",
        PORT: 3003,
      },
    },
  ],
};
