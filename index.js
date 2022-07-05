const { sendText, sendImage, sendMarkdown } = require('./main');
const githubReadme = require('github-readme');

function sendMsg() {
  return new Promise((resolve, reject) => {
    githubReadme('Smilelikeflowery', 'dingtalkBot', (err, data) => {
      resolve(data);
    });
  });
}

async function call() {
  const data = await sendMsg();
  const arr = [];
  if (data) {
    for (let i in data.split('$')) {
      arr.push(data.split('$')[i]);
    }
  }
  sendMarkdown('每日早报', arr[1]);
  setTimeout(() => {
    sendMarkdown('每日早报', arr[2]);
  }, 1500);
  setTimeout(() => {
    sendText(arr[3]);
  }, 4000);
}

call();
