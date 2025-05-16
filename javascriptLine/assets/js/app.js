let isMySelf = true;



let sendBtn = document.getElementById('sendBtn');

sendBtn.addEventListener('click',function () {
    let inputMessage = document.getElementById('inputMessage');
    let messageText = inputMessage.value;
    
    // 入力値が空かチェックする
if(messageText == '') {
    return;
}

//! メッセージ用のdivを関数で作成する
let messageBox = createMessageBox();
//! メッセージ用のpを関数で作成する
let message = createMessage();


messageBox.appendChild(message);
let room = document.getElementById('room');
room.appendChild(messageBox);
inputMessage.value = '';

// 送信者を変更する
isMySelf = !isMySelf;
// if (isMySelf) {
//     isMySelf = false;
// } else {
//     isMySelf =true;
// }
});

//! メッセージ用のdivを作成する
function createMessageBox() {
    // divを作成
    let messageBox = document.createElement('div');
    
    // 誰が送信者かチェック
    if (isMySelf) {
        messageBox.classList.add('box-right');
        
    } else {
        messageBox.classList.add('box-left');
    }
    return messageBox;
}
function createMessage() {
    let message = document.createElement('p');
    message.textContent = messageText;
    message.classList.add('message-box');
    
    // p.12開始
    if (isMySelf) {
        message.classList.add('green');
        
    }else {
        message.classList.add('white');
        
    }
    return message;
}