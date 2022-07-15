const ChatBot = require('dingtalk-robot-sender');

const defaultOptions = {
  baseUrl: 'https://oapi.dingtalk.com/robot/send',
  // accessToken:
  //   'e139c0d0cea4f0f18b5a36cc937de7c4031d1aa85d2ed2ae6ddc72f174394c96',
  // secret: 'SEC8ed9bc6f872824e7b1befeebdef6ad2fa33c6270fba2b371f7b80279319aa3d6',
  accessToken:
    'd49fd2eb77d0a96520a3ec6261b514f02cee6e61b06d9a49723338696683777e',
  secret: 'SECeb8f227ee9c919d68d171cf2a3cb1949b26a971616dcbd4e687ca56317e96066',
};
const robot = new ChatBot(defaultOptions);

function sendText(text) {
  const textContent = {
    msgtype: 'text',
    text: {
      content: text,
    },
  };
  robot.send(textContent).then((res) => {
    // TODO
    console.log('文本发送成功了');
  });
}

function sendImage(img) {
  const card = {
    text: `${img}`,
  };
  robot.actionCard(card).then((res) => {
    console.log('图片发送成功！');
  });
}

function sendMarkdown(title, rawMarkdown) {
  robot.markdown(title, rawMarkdown, {}).then((res) => {
    console.log('Markdown发送成功！');
  });
}

module.exports = { sendText, sendImage, sendMarkdown };
