var RtmClient = require("slack-client").RtmClient;
var settings = require("./settings-development");
var token = settings.token || "";

var rtm = new RtmClient(token, {logLevel: 'debug'});

rtm.start();
