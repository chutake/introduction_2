import React from "react";
//img
import img_1 from "./img/success.png";
import img_2 from "./img/simulation.png";
import img_3 from "./img/手書き問題.png";
import img_4 from "./img/手書き結論.png";

const MainWork = () => {
  return (
    <div className="main-work">
      <h1>Work</h1>
      <br />
      <br />

      <ol>
        <li>
          <h3>Javaで製作したもの</h3>
          <li>
            <a href="#section1">GUIプログラミング</a>
            <a href="#section2">s</a>
          </li>
          <h3>Pythonで製作したもの</h3>
        </li>
      </ol>
      <li>
        <h2>
          1, GUIプログラミング<br></br>
        </h2>
        <br></br>
        <img className="workimg1" src={img_1} alt="GUIProgramming" />
        <br></br>
        <p>
          登録用のサイトを想定したウィンドウを作成しました。<br></br>
          <br></br>
          ＜詳細＞<br></br>
          名前、パスワード、メールアドレス、性別、生年月日が入力必須事項となっています。
          そのほかに趣味、自由記入欄を設けました。
          入力必須事項が未記入のとき、右側のテキストエリアで指摘してくれます。
          生年月日のボックスで存在しない日（うるう年）を考慮することに工夫しました。
          <br></br>
        </p>
      </li>
      <li>
        <h2>
          2, エージェントシミュレーション<br></br>
        </h2>
        <br></br>
        <img className="workimg2" src={img_2} alt="simulation" />
        <p>
          エージェントシミュレーションがどのようなものか想像できますか？
          「エージェント」とは、自分の周囲の状況を認識し、一定のルールのもとで行動するもののことです。
          具体的には人間や生物をエージェントします。これはエージェントを客と想定してコンビニの店内をシミュレーションしたものです。
          <br></br>
          今回の客は、店内の構造を全員理解しているという前提があります。
          <br></br>
          <br></br>
          ＜流れ＞<br></br>
          客はそれぞれの色によって欲しいものが異なり、1フレームに1回移動します。
          欲しい商品のマスにたどり着くと商品をかごに入れ、レジで会計、店を出ます。
          <br></br>
          <br></br>
          ＜結果＞<br></br>
          欲しいものを事前に決めた客を入店させ、
          一通り買い物が終わったら移動回数などを出力し、 統計的に分析しました。
          欲しいものが店内の奥にある場合、必然と行動回数が増えました。
          また欲しい商品が遠いほど、店内をぐるぐる回り続けます。
          もし売り上げを伸ばすなら
          途中に小物や生活用品を置くことで注意を引くことができると考えられます。
          <br></br>
          追加機能の案は、そのような道中に誘惑となる商品や”半額”の文字があった際、
          客の行動がどのように変化するかをモデリングすることです。
        </p>
      </li>
      <li>
        <h2>
          3, 手書き数字認識<br></br>（Scikit-learn）
        </h2>
        <br></br>
        <img className="workimg3" src={img_3} alt="number_img" />
        <p>
          手書き数字を4つ用意し、機械学習で学習したデータセットを
          用いて正しく認識できるかを確認しました。<br></br>
          手書き数字を畳み込みニューラルネットワーク（CNN）に分類させる。
          CNNを用いた手書き数字認識の精度を調べるために、
          自分で作成した手書き数字を使って、認識できない画像の特徴を解明を目指しました。
          動作環境はGoogle Colaboratory。<br></br>
          手書き数字の作成は
          <a href="https://drawisland.com/">https://drawisland.com/</a>
          で作成しました。<br></br>
          <br></br>
        </p>
        <img className="workimg4" src={img_4} alt="numcon" />
        <br></br>
        <br></br>
        <p>
          機械学習によって得られたデータセットでは、図3, 4
          が正しく認識することができました。<br></br>
          <br></br>
        </p>
      </li>
    </div>
  );
};
export default MainWork;
