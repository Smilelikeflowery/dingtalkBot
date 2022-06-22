﻿const { sendText, sendImage, sendMarkdown } = require('./main');
const githubReadme = require('github-readme');
const axios = require('axios').default;
const baseUrl = 'https://www.mxnzp.com/api/weather/current/';
const imgUrl = "https://www.dmoe.cc/random.php?return=json";
const djtUrl = "https://api.btstu.cn/yan/api.php?charset=utf-8&encode=json";

function getWeather(city, appId, appSecret, callback) {
  const url = `${baseUrl}${encodeURI(
    city
  )}?app_id=${appId}&app_secret=${appSecret}`;
  axios.get(url).then((res) => {
    callback(res.data.data);
  });
}
getWeather(
  '天津市',
  'oqpukkqmpismtwrq',
  'UEsyWXovZlRjSTl0dUJyRjFvK2xMQT09',
  sendWeather
);

function sendWeather(info) {
  let wInfo = `
     地区: ${info.address}
     温度: ${info.temp}
     天气状况: ${info.weather}
     风向: ${info.windDirection}
     风力: ${info.windPower}
     湿度: ${info.humidity}
     报告时间: ${info.reportTime}
  `;
  sendMarkdown('今日天气状况', wInfo);
}

function getImage(callback){
  axios.get(imgUrl).then(res=>{
    callback("每日一图！",`![](${res.data.imgurl})`)
  })
}

getImage(sendMarkdown)


function getDJT(callback) {
  axios.get(djtUrl).then(res => {
    callback(res.data.text)
  })
 }

 getDJT(sendText)

// githubReadme('Smilelikeflowery', 'dingtalkBot', (err, data) => {
//   if (data) {
//     for (let i in data.split('$')) {
//       if (i < 2) {
//         let img = data.split('$')[i];
//         sendImage(img);
//       } else {
//         let content = data.split('$')[i];
//         sendMarkdown('测试', content);
//       }
//     }
//   }
// });
