module.exports = {
    apps: [
      {
        name: "pm2-deploy",
        script: "app.js",
      },
    ],
    deploy: {
      production: {
        user: "asaratech",
        host: "184.168.123.205",
        path: "/var/test/nodejs_sample_app",
        repo: "git@github.com:deepuRai/nodejs_sample_app.git",
        ref: "origin/main",
        
        "post-deploy": "npm i; pm2 reload ecosystem.config.js --env production",
      },
    },
  };