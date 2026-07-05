const crypto = require('crypto');

exports.handler = async (event) => {
  const request = event.Records[0].cf.request;

  // Keep an existing session id; only generate one when the request has none
  if (!request.headers['x-session-id']) {
    request.headers['x-session-id'] = [{
      key: 'X-Session-Id',
      value: crypto.randomUUID()
    }];
    console.log('Generated session ID:', request.headers['x-session-id'][0].value);
  }

  return request;
};
