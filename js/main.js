(() => {

    //ここに命令を書く
    const $doc = document; //変数にdocumentという文字列を代入
    const $tab = document.getElementById('js-tab'); //idがjs-tabの情報を変数に代入
    const $nav = $tab.querySelectorAll('[data-nav]'); //指定したセレクタに一致する最初のHTML要素(Element)を順に取得する
    const $content = $tab.querySelectorAll('[data-content]');
    const ACTIVE_CLASS = 'is-active'; //文字列を変数化する
    const navLen = $nav.length;

    //初期化
    const init = () => {
        $content[0].style.display = 'block'; //"タブその0"だけを表示させる
    };

    init();

    //ここからクリック実績にタブが切り替わるという命令を書いていく
    const handleClick = (e) => { //(e)はクリックされた時にイベント自体のオブジェクトを取得する
        e.preventDefault(); //このクリックイベントに関しては「デフォルトの動作を発生させない」(a タグの href の場所に遷移しない)

        //クリックさらたnavとそのdataを取得
        const $this = e.target; //クリックされたところのDOM要素を取ってくる
        const targetval = $this.dataset.nav; //data属性で設定した値を取ってくる

        //対象がのnav, contentを全て一旦リセットする
        let index = 0;
        while(index < navLen){
            $content[index].style.display = 'none'; //コンテンツの文字を全て非表示にする
            $nav[index].classList.remove(ACTIVE_CLASS); //全てのタブのクラス名からis-activeを消す
            index++;
        }

        //対象のコンテンツを対象化する
        $tab.querySelectorAll('[data-content="'+ targetval +'"]')[0].style.display = 'block'; //クリックさらたタブのdata属性と同じ値を持ったものを取得する

        //classListは特定の要素のクラス名を追加したり、削除したり、参照したりすることが出来る
        $nav[targetval].classList.add(ACTIVE_CLASS); //クリックされたタブの背景を黒くする
    };

    //全nav要素に対して関数を適応・発火
    let index = 0;
    while(index < navLen){
        $nav[index].addEventListener('click', (e) => handleClick(e)); //タブがクリックされるたびに handleClick を呼んでくる
        index++;
    }

})();