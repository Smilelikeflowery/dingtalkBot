const { sendText, sendImage, sendMarkdown } = require('./main');
const githubReadme = require('github-readme');

githubReadme('Smilelikeflowery', 'dingtalkBot', (err, data) => {
  if (data) {
    for (let i in data.split('$')) {
      if (i < 2) {
        let img = data.split('$')[i];
        sendImage(img);
      } else {
        let content = data.split('$')[i];
        sendMarkdown('测试', content);
      }
    }
  }
});
