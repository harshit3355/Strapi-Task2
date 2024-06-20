module.exports = {
  apps: [
    {
      name: 'TEMP',
      script: 'npm',
      args: 'start',
      env: {
        NODE_ENV: 'production'
      }
    }
  ]
};
