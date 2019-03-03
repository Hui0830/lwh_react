const mode = process.env.RUN_MODE || process.env.NODE_ENV;
const isDev = !mode;
const port = isDev ? 8080 : 80;

const config = {
    isDev: isDev,
    mode: mode,
    port: port,
};

export default config;
