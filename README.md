# super_small_datadog_logz_example

I wanted to create the most simple example to show how to do metrics with datadog and logging with logz.  This is the result.  It loops thru 100 times and does a statsd increment and a logz log.

## How do I get this to work:

Assuming you have docker installed locally on your mac or windows and you have a datadog and logz api key, do the following:

1. docker build -t ddtest .
2. docker run --name ddtestrun -e API_KEY="your datadog api key" -e LOGZ_TOKEN="your logz api key" -d ddtest
3. docker exec -it ddtestrun bash
4. type `node test.js`
5. Navigate to https://app.logz.io/#/dashboard/kibana.  Type "A logz test message" in the search box at the top of the page and you should see a bunch of log messages
6. Navigate to https://app.datadoghq.com/metric/explorer.  Type testdd in the Graph dropdown and select "testdd.incrtest".  You should see a graph with 100 items on it to the right. Type testdd in the Graph dropdown and select "testdd.timing".  You should see a graph with 10 times on it to the right. 

### Cleanup

1. docker stop ddtestrun
2. docker rm ddtestrun
3. docker rmi ddtest

If you want to learn more about what you can do with statsd, take a look here: https://github.com/sivy/node-statsd

If you want to learn more about what you can do with logz, take a look here: https://github.com/logzio/logzio-nodejs
