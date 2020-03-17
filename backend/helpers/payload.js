module.exports.handleSuccess = (res, message, extra) => {
  handler(res, message, extra, 200, true);
};

function handler(res, message, extra, code, success) {
  if (!success) console.log(`ERROR CODE: ${code} ERROR MESSAGE: ${message}`);
  let payload = {};
  if (extra !== undefined) payload = extra;
  if (message === undefined) message = '';
  payload.message = message;
  payload.success = success;
  res.statusCode = code;
  res.json(payload);
}
