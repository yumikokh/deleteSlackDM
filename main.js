var Slack = require('slack-node');
var API_TOKEN = ""; //xpxp---
var CHANNEL_ID = ""; //D0---

// 消したい直近のメッセージ数
var AMOUNT = 10;

slack = new Slack(API_TOKEN);
var ts = [];

// 取得します
slack.api("im.history", {
  channel: CHANNEL_ID,
  count: AMOUNT
}, function(err, response) {
  console.log("取得",response.messages);
  for(var i=0; i < response.messages.length; i++) {
    ts[i] = response.messages[i].ts;

    // 消します
    slack.api("chat.delete", {
      channel: CHANNEL_ID,
      ts: ts[i],
      as_user: true
    }, function(err, response){
      console.log("けす",response);
    });
  }
});