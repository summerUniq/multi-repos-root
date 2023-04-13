const Koa = require('koa');
const respDurationMiddleware = require('./middleware/koa_response_duration');
const respHeaderMiddleware = require('./middleware/koa_response_header');
const respDataMiddleware = require('./middleware/koa_response_data');

const app = new Koa();
app.use(respDurationMiddleware);
app.use(respHeaderMiddleware);
app.use(respDataMiddleware);
app.listen(8888);
