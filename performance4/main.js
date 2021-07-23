// グローバルな変数を定義
let randomNumber = 0;
let Count = 0;
// 画面をリセットする関数
const reset = a => {
   // 入力の初期化
    document.getElementById('num').value = "";
   // ランダムな値の生成
    randomNumber = Math.floor(Math.random() * 1000);
   // チェックした回数のリセット
    Count = 0;
    // ボタンのテキストを初期化
    document.getElementById('check').innerHTML = "チェック！";
    // メッセージの消去/
    document.querySelector(".message-container").innerHTML = "";
    document.querySelector(".message-container").classList.remove('complete');
};

// メイン処理
(a => {//アロー関数
    // リセットする
    reset();

    // ボタンのイベント設定
    document.getElementById('check').addEventListener('click', a => {
        // リセット
        if (document.getElementById('check').innerHTML == "リセット") {
            reset();
            return;
        }
        // 入力した値を取得して変数に退避
        let inputNum = document.getElementById('num').value;

        Count++;    // チェックした回数を加算
        
        if (inputNum > randomNumber) {
            document.querySelector(".message-container").innerHTML = "それより小さいです！ (チェック回数: " + Count + "回)";
        } else if (inputNum < randomNumber) {
            document.querySelector(".message-container").innerHTML = "それより大きいです！ (チェック回数: " + Count + "回)";
        } else {
            document.querySelector(".message-container").innerHTML = "正解です！ (チェック回数: " + Count + "回)";
            document.querySelector(".message-container") .classList.add('complete');
            document.getElementById('check').innerHTML = "リセット";
        }

    });
})();
