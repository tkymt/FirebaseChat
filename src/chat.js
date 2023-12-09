console.log('Chat Start!');
import { DataSnapshot, onChildAdded, onValue, push, ref, set } from "firebase/database";
import { db } from "./index";

class Chat {
    constructor() {
        // HTMLの要素を取得する
        this.username = document.querySelector('#username');
        this.message = document.querySelector('#message');
        this.chatBord = document.querySelector('#chat-bord');
        this.sendButton = document.querySelector('#send-button');

        this.postsRef = ref(db, 'posts/');

        // 送信ボタンに関数を設定
        this.sendButton.addEventListener('click', () => {
            if (this.username.value === '' || this.message.value === '') {
                console.log("入力してください");
                return;
            }

            console.log(this.username.value);
            console.log(this.message.value);

            const newPostRef = push(this.postsRef);
            set(newPostRef, {
                username: this.username.value,
                message: this.message.value,
            });
        });

        // チャット履歴を追記する
        onChildAdded(this.postsRef, snapshot => {
            const data = snapshot.val();

            const liusername = document.createElement('li');
            const limessage = document.createElement('li');

            this.chatBord.appendChild(liusername);
            this.chatBord.appendChild(limessage);

            liusername.innerText = data['username'];
            limessage.innerText = data['message'];
        });
    }
}

const chat = new Chat();
