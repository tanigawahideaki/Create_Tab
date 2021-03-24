(() => {

    //ここに命令を書く
    const $doc = document; //変数にdocumentという文字列を代入
    const $tab = document.getElementById('js-tab'); //idがjs-tabの情報を変数に代入
    const $nav = $tab.querySelectorAll('[data-nav]'); //指定したセレクタに一致する最初のHTML要素(Element)を順に取得する
    const $content = $tab.querySelectorAll('[data-content]');

    //初期化
    const init = () => {
        $content[0].style.display = 'block'; //"タブその0"だけを表示させる
    };

    init();

    //ここからクリック実績にタブが切り替わるという命令を書いていく
    const handleClick = (e) => {
        e.preventDefault();
        console.log(e);
    };

    $nav[0].addEventListener('click', (e) => handleClick(e));

})();