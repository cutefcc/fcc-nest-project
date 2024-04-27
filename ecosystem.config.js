module.exports = {
  apps: [
    {
      name: 'fcc-nest',
      script: './dist/main.js',
      instances: 'max',
      exec_mode: 'cluster',
      autorestart: true,
      watch: true,
      max_memory_restart: '1G', // 如果应用超过2GB内存，则自动重启
      env: {
        NODE_ENV: 'development',
      },
      env_test: {
        NODE_ENV: 'test',
      },
      env_pre: {
        NODE_ENV: 'pre',
      },
      env_production: {
        NODE_ENV: 'production',
      },
    },
  ],
};
