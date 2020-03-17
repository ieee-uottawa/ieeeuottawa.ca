module.exports.handleSuccess = (res, text, extra) => {
  handler(res, text, extra, 200, true);
};

function handler(res, text, extra, code, success) {
  if (!success) console.log(`ERROR CODE: ${code} ERROR MESSAGE: ${text}`);
  let payload = {};
  if (extra !== undefined) payload = extra;
  if (text === undefined) text = '';
  payload.message = text;
  payload.success = success;
  res.statusCode = code;
  res.json(payload);
}
