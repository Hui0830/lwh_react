import Koa from 'koa';
import path from 'path';
const staticCache = require('koa-static-cache');
import config from './configs';

const app = new Koa();

app.use(staticCache(path.resolve(__dirname, "../dist"), {
    maxAge: 7 * 24 * 60 * 60,
    gzip: true,
    dynamic: true,
}))
app.use(require('koa-static')(path.resolve(__dirname, '../dist')));
app.listen(config.port, () => {
    console.log(`Server startup, listen at ${config.port}.\nRun mode is ${config.mode}.`);
    console.log(`current is dev : ${config.isDev}`);
});

export default app;
