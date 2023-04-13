module.exports = async (ctx, next) => {
  const contentType = 'application/json;chartset=utf-8';
  ctx.set('Content-Type', contentType);
  ctx.set('Access-Control-Allow-Origin', '*'),
    ctx.set(
      'Access-Control-Allow-Methods',
      'OPTIONS',
      'GET',
      'POST',
      'PUT',
      'DELETE'
    );
  await next();
};
