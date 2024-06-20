module.exports = {
  apps: [
    {
      name: 'strapi-app',
      script: 'npm',
      args: 'start',
      env: {
        NODE_ENV: 'production'
      }
    }
  ]
};
