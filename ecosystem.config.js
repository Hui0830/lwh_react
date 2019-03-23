module.exports = {
  apps: [
    {
      name: 'lwh_react',      //应用名
      script: './docs/server/server.run.js',   //应用文件位置
      env: {
        //PM2_SERVE_PATH: './dist',    //静态服务路径
        PM2_SERVE_PORT: 8081,   //静态服务器访问端口
        NODE_ENV: 'development' //启动默认模式
      },
      env_production : {
        PM2_SERVE_PORT: 80,
        NODE_ENV: 'production'  //使用production模式 pm2 start ecosystem.config.js --env production
      },
      instances:'1',          //将应用程序分布在所有CPU核心上,可以是整数或负数
      exec_mode: 'fork',
      min_uptime: '30s',
      max_restarts: 10,
      watch:[
        'docs'
      ],  //监听模式，不能单纯的设置为true，易导致无限重启，因为日志文件在变化，需要排除对其的监听
      merge_logs: true         //集群情况下，可以合并日志
    }
  ],
  deploy: {
      production : {
        user: 'root',                      //ssh 登陆服务器用户名
        host: '106.12.132.188',              //ssh 地址
        ref: 'origin/master',             //Git远程/分支
        repo: 'git@github.com:Hui0830/lwh_react.git',   //git地址
        path: '/liwenhui/lwh_react',       //服务器文件路径
        'post-deploy': 'npm install && npm run build:pro pm2 reload ecosystem.config.js --env production'  //部署后的动作
      }
  }
};
