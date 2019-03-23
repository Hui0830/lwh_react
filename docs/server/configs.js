const mode = process.env.RUN_MODE || process.env.NODE_ENV;
const isDev = !mode;
console.log(isDev,mode)
const port = isDev ? 8081 : 8081;

const config = {
    isDev: isDev,
    mode: mode,
    port: port,
};

export default config;
