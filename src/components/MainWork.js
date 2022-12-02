import React from "react";
//img
import img_1 from "./img/success.png";
import img_2 from "./img/simulation.png";
import img_3 from "./img/手書き問題.png";
import img_4 from "./img/手書き結論.png";
import img_5 from "./img/Maze.png";
import img_6 from "./img/pilot.jpg";
import Mazezip from "./zipbox/Maze.zip";
import Shootingzip from "./zipbox/shooting.zip";
import Shootingvideo from "./movie/shooting.mp4";
import Reversizip from "./zipbox/Reversi.zip";
import img_7 from "./img/Reversi.png";
import img_8 from "./img/Reversi_AI.png";
import img_9 from "./img/uwasa1.png";
import img_10 from "./img/uwasa-graph1.png";
import img_11 from "./img/uwasa-graph2.png";

const MainWork = () => {
  return (
    <div className="main-work">
      <h1>Work</h1>
      <br />
      <br />
      <div className="box">
        <h2 className="mokuzi-title">目次</h2>
        <h3>Java</h3>
        <ol>
          <li type="1" className="mokuzi">
            <a href="#section1">GUIプログラミング</a>
          </li>
          <li type="1" className="mokuzi">
            <a href="#section2">迷路を最短経路で解く</a>
          </li>
          <li type="1" className="mokuzi">
            <a href="#section3">シューティングゲーム</a>
          </li>
          <li type="1" className="mokuzi">
            <a href="#section6">最強のオセロAI目指して</a>
          </li>
        </ol>
        <br />
        <h3>Python</h3>
        <ol>
          <li type="1" className="mokuzi">
            <a href="#section4">エージェントシミュレーション（コンビニ）</a>
          </li>
          <li type="1" className="mokuzi">
            <a href="#section7">エージェントシミュレーション（噂の広まり方）</a>
          </li>
          <li type="1" className="mokuzi">
            <a href="#section5">手書き数字認識</a>
          </li>
        </ol>
      </div>

      <li className="production">
        <h2 id="section1" className="product-title">
          GUIプログラミング
          <br />
        </h2>
        <br />
        <img className="workimg1" src={img_1} alt="GUIProgramming" />
        <br />
        <p>
          登録用のサイトを想定したウィンドウを作成しました。<br></br>
          <br />
          ＜詳細＞
          <br />
          　名前、パスワード、メールアドレス、性別、生年月日が入力必須事項となっています。
          そのほかに趣味、自由記入欄を設けました。
          入力必須事項が未記入のとき、右側のテキストエリアで指摘してくれます。
          生年月日のボックスで存在しない日（うるう年）を考慮することに工夫しました。
          <br></br>
        </p>
      </li>
      <li className="production">
        <h2 id="section2" className="product-title">
          迷路を最短経路で解く
          <br />
        </h2>
        <br />
        <img className="workimg5" src={img_5} alt="Maze" />
        <br />
        <p>
          　迷路を探索するアルゴリズムには、「深さ優先探索」と「幅優先探索」があります。
          <br />
          　「深さ優先探索」とは、1つの道を突き進み、行き止まりになったら引き返す方法のことです。
          人が巨大な迷路を探索するときに壁伝いに迷路を解く方法と似ています。
          このアルゴリズムを実装するためには、「スタック」というデータ構造を使います。
          <br />
          　「幅優先探索」とは、道が分かれていた場合、全ての道を平行して探索する方法のことです。
          例えばスーパーで並んでいるとき、先に並んだ人から順に処理してもらえますよね。
          このアルゴリズムを実装するためには、「キュー」というデータ構造を使います。
          <br />
          <br />
          　今回は幅優先探索で迷路を解きました。
          1回目は青、2回目は赤の線です。2回目はランダムに壁に穴を空けて通れるようにしてみました。
          <br />
          <br />
          <a href={Mazezip} download="Maze.zip">
            <strong>ダウンロードリンク（.zip）</strong>
          </a>
          <br />
        </p>
      </li>
      <li className="production">
        <h2 id="section3" className="product-title">
          シューティングゲーム
        </h2>
        <br />

        <p>
          　Javaでシューティングゲームを作りました。
          ゲームセンターでよく見るインベーダーゲームみたいなものです。
          ベテランのパイロットが紹介してくれるみたいです！
          <br />
          <br />
          <img className="workimg6" src={img_6} alt="pilot" />
          <br />
          　やあ、こんにちは。今日から君はパイロットの新兵として入団した！
          この戦いは君の協力が必要だ！これから戦い方（遊び方）を教えるッ！
          <br />
          　プレイヤーは自由に移動できるッ！
          射撃ボタンで攻撃し敵を倒すことができるぞッ！しかし敵も攻撃してくるから、避けながら戦うんだ！
          そして敵を倒すとポイントがたまるッ！制限時間は君が戦闘不能になるまでだ！
          だが気を付けろ！時間が経つにつれて敵がどんどん強くなるようだッ！
          高いスコアでまわりと差をつけろ！！
          <br />
          <video width="100%" src={Shootingvideo} controls></video>
          <br />
          <br />
          <a href={Shootingzip} download="shooting.zip">
            <strong>ゲームのダウンロード（.zip）</strong>
          </a>
          <br />
        </p>
        <li className="production">
          <h2 id="section6" className="product-title">
            最強のオセロAI目指して
          </h2>
          <br />
          <img className="workimg7" src={img_7} alt="reversi" />
          <p>
            さまざまなオセロAIと戦うことができるアプリを作りました。
            対人（2人）で遊べる機能に加え、CPU（コンピュータ）と対戦できます!
            有名なオセロAIの他、私が自分で考えたオセロAIもいます。
            どんなAIと戦えるのか見てみましょう!
          </p>
          <img className="workimg8" src={img_8} alt="reversiAI" />
          <p>
            <li>
              <strong>＜人＞</strong>
              <br />
              プレイヤーが自由に操作することができます。
            </li>
            <br />
            <li>
              <strong>＜RamdomAI＞</strong>
              <br />
              ランダムに石を置くAIです。
            </li>
            <br />
            <li>
              <strong>＜CornerTakingAI＞</strong>
              <br />
              自分の番で四隅の角に置くことができるとき、
              必ず石を角に置くAIです。
            </li>
            <br />
            <li>
              <strong>＜PieceMaxmizingAI＞</strong>
              <br />
              盤面に対する手の中で、自分の石の個数が最大になるような手を選択します。
              相手の石は数えず、<strong> "自分の石の数"</strong>
              のみに注目しています。
            </li>
            <br />
            <li>
              <strong>＜ChoiceMaxmizingAI＞</strong>
              <br />
              次のターンに置くことができるマスの個数が、最大になるような手を選択します。
              相手が次にどこに置いてくるかは考えず、
              <strong>"自分の置けるマス"</strong>のみに注目しています。
            </li>
            <br />
            <li>
              <strong>＜PieceMinimaxAI（4）PieceMinimaxAI（6）＞</strong>
              <br />
              ミニマックス法という、
              ゲーム理論において打ち手を決定する際に適用されるルールの1つです。
              ミニマックス探索というのは、想定される最大の損害（ここでは自分の石の数が減ること）
              が最小になるように決定をする戦略のことです。
              PieceMinimaxAI（4）は4手先まで、PieceMinimaxAI（6）は6手先まで予想をします。
              しかし、「4手とか6手じゃなくて、もっと先読みすればいいじゃん」と思いますよね。
              今回は1手に5秒という制限時間がついています。
              先読みしすぎると全試行が終わらずに、最適な場所に石を置くことができなくなってしまいます。
            </li>
            <br />
            <li>
              <strong>＜MyAI＞</strong>
              <br />
              私が作ったAIです。次のターンで、自分の石の数が最大になるように先読みします。
              <strong>私は角が最強だと信じている</strong>ので、
              石を角に置くことができるときは、必ず角に石を置くようにAIを設計しました。
            </li>
            <br />
            <br />
            <strong>＜結果＞</strong>
            <br />
            このAIたちを総当たりで対決させたところ、優勝したのはPieceMinimaxAI（6）でした。
            先読みをしていても毎回同じマスに置くわけではありません。
            たまたまRandomAIがPieceMiniMax（6）に勝つこともありました。
            それでも他のAIにPieceMiniMaxAI（6）が勝つことが多かったです。
            <br />
            <br />
            <a href={Reversizip} download="Reversi.zip">
              <strong>ゲームのダウンロード（.zip）</strong>
            </a>
          </p>
        </li>
      </li>
      <li className="production">
        <h2 id="section4" className="product-title">
          エージェントシミュレーション
          <br />
          （コンビニ）
          <br />
        </h2>
        <br></br>
        <img className="workimg2" src={img_2} alt="simulation" />
        <p>
          　エージェントシミュレーションってどんなものか想像できますか？
          「エージェント」とは、車や人や生物などの個体数が多いものを示しています。
          それぞれの自分の周囲の状況を認識し、一定のルールのもとで行動するようにモデルを作ります。
          今回ではエージェントを客と想定して、コンビニの店内をシミュレーションしたものです。
          <br></br>
          　今回の客は、店内の構造を全員理解しているという前提があります。
          <br />
          <br />
          ＜流れ＞
          <br />
          　客はそれぞれの色によって欲しいものが異なり、1フレームに1回移動します。
          欲しい商品のマスにたどり着くと商品をかごに入れ、レジで会計、店を出ます。
          <br />
          <br />
          ＜結果＞
          <br />
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
      <li className="production">
        <h2 id="section7" className="product-title">
          エージェントシミュレーション
          <br />
          （噂の広まり方）
        </h2>
        <br />
        <img className="workimg9" src={img_9} alt="uwasa" />
        <p>
          　こちらもエージェントシミュレーションの1つです。
          今回は人をエージェントとし、噂の広まり方をシミュレーションしてみます。
          <br />
          <br />
          <h4>＜方法＞</h4>
          　まずは30×30マスのフィールドを用意します。噂の発信源となる人物は
          <strong>赤色</strong>で、 噂が広まっていない人物は
          <strong>青色</strong>で表しました。 ここでは
          <strong>噂の発信源となる人物をA、噂を知らない人をB</strong>
          と名付けます。
          基本的にはBの近くをAが通ると、噂が伝達され、BがAへと変化します。
          全員がAになるまでのステップ数を観察します!
          <br />
          <br />
          <br />
          　エージェントシミュレーションはモデルを現実に近づけることが重要です。
          皆さんも、ある日聞いた噂をずっと覚えていることはそんなにないでしょう。
          よって今回は200ステップ進むと噂が薄れていくとみなし、AからBに変化するようにしました。
          <br />
          　さらに現実に近づけるために2つの変数を用意しました。
          <br />
          ＜変数1＞
          <br />
          　Aが噂を広めることができる範囲（マス）
          <br />
          ＜変数2＞
          <br />
          　BがAから噂を聞いたとき、それを信じるまでのすれ違い回数
          <br />
          <br />
          現実世界において
          <br />
          　・変数1は、その人の影響力や噂を広げる力
          <br />
          　・変数2は、噂をすぐに鵜呑みにしないこと
          <br />
          を表しています。これらを調整して実験をします。
          <br />
          <h4>＜結果＞</h4>
          「たまたま密集していて噂が広まるのが早かった」ということを防ぐために、
          それぞれ5回ずつ試し、平均を取ります。
          パラメータを1つだけ変更する比較実験で考察をします。
          <br />
          <img src={img_10} className="workimg10" alt="graph1" />
          <img src={img_11} className="workimg11" alt="graph2" />
          <br />
          図1-1と図1-2では、「フィールドの人数」だけを変更した。
          図1-1は11人（A=1,B=10）、図1-2は21人（A=1,B=20）
          の状態から観察を始めました。
          <strong>
            <br />
            図1-1は平均1503ステップ
            <br />
            図1-2は平均639ステップ
          </strong>
          <br />
          <br />
          図1-2と図2-1では「噂を広める範囲」だけを変更した。
          図1-2では2マス、図2-1では4マスとした。
          <br />
          <strong>
            図1-2は平均1503ステップ
            <br />
            図2-1は平均476ステップ
            <br />
          </strong>
          <br />
          図1-2と図2-2では「噂を信じるまでの回数」だけを変更した。
          図1-2では5回、図2-2では3回とした。
          <br />
          <strong>
            図1-2は平均1503ステップ
            <br />
            図2-2は平均936ステップ
            <br />
          </strong>
          <h4>＜考察＞</h4>
          一番早く噂が広まったのは「噂を広める範囲を変えた」ときでした。
          <br />「<strong>フィールドの人数を増やす</strong>
          よりも、
          <strong> 有名人や影響力のある人が噂の発信源となれば</strong>、
          噂が広まりやすくなる。」 と考察できます。
        </p>
      </li>
      <li className="production">
        <h2 id="section5" className="product-title">
          手書き数字認識<br></br>（Scikit-learn）
        </h2>
        <br></br>
        <img className="workimg3" src={img_3} alt="number_img" />
        <p>
          　手書き数字を4つ用意し、機械学習で学習したデータセットを
          用いて正しく認識できるかを確認しました。<br></br>
          　手書き数字をニューラルネットワーク（CNN）に分類させる。
          用意した4つの手書き数字を、CNNを用いて認識できない画像と特徴の解明を目指しました。
          <br />
          <br />
          動作環境はGoogle Colaboratory。
          <br />
          手書き数字は"
          <a href="https://drawisland.com/">https://drawisland.com/</a>
          "で作成。
          <br />
          <br />
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
      <h6>----法政大学情報科学部コンピュータ科学科　中郡健竜----</h6>
    </div>
  );
};
export default MainWork;
