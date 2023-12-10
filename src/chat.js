console.log('Chat Start!');
import { onChildAdded, push, ref, set } from "firebase/database";
import { db } from "./index"; // index.jsでexport宣言した変数dbをimport宣言で使えるようにする

class Chat {
    constructor() {
        // HTMLの要素を取得する
        this.username = document.querySelector('#username');
        this.message = document.querySelector('#message');
        this.chatBord = document.querySelector('#chat-bord');
        this.sendButton = document.querySelector('#send-button');

        // refは、引数で指定した文字列のキーを作って返す
        this.postsRef = ref(db, 'posts/');

        // 送信ボタンに関数を設定
        this.sendButton.addEventListener('click', () => {
            if (this.username.value === '' || this.message.value === '') {
                console.log("入力してください");
                return;
            }

            console.log(this.username.value);
            console.log(this.message.value);

            // pushは、新しいキーを生成してデータを書き込む
            const newPostRef = push(this.postsRef); // 今回は、データを書き込まずにキーを取得する

            // setは、指定したキーにデータを書き込む
            // すでに存在するキーに書き込んだときは、上書きする
            set(newPostRef, {
                username: this.username.value,
                message: this.message.value,
            });
        });

        // チャット履歴を追記する
        // onChildAddedは、追加されたオブジェクトをひとつづつ取得する
        onChildAdded(this.postsRef, snapshot => {
            // val()でデータを取得する
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
