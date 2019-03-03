import Koa from 'koa';
import path from 'path';
import config from './configs';

const app = new Koa();

app.use(require('koa-static')(path.resolve(__dirname, '../dist')));

app.listen(config.port, () => {
    console.log(`Server startup, listen at ${config.port}.\nRun mode is ${config.mode}.`);
    console.log(`current is dev : ${config.isDev}`);
});

export default app;
