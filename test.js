var datadogStatsD = require('statsd-client');
var logzLogger = require('logzio-nodejs')
var nconfenv = require('node-env-conf');

var nconf = nconfenv.init();

if (nconf.get('LOGZ_TOKEN') === undefined || nconf.get('LOGZ_TOKEN') === "") {
  throw ("LOGZ_TOKEN is required. You can either add it to the config.json, set an environment var or pass via --");
}

var datadogStatsDClient = new datadogStatsD({
  host: "localhost",
  port: 8125,
  debug: true
});

var logzLoggerClient = logzLogger.createLogger({
  token: nconf.get('LOGZ_TOKEN'),
  debug: true
});

var loopThisManyTimes = 100;
var ddKey = "testdd.incrtest";

for (ctr = 0; ctr < loopThisManyTimes; ctr++) {
  datadogStatsDClient.increment(ddKey);

  var logzObj = {
    message: 'A logz test message',
    param1: 'testparam1',
    param2: ctr
  };

  logzLoggerClient.log(logzObj);
}
