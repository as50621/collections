// let isMobile;
// if($(window).width() <=480){
//     isMobile = true;
// }else{
//     isMobile = false;
// }

const isMobile = $(window).width() <= 480;
const $grid = $('#Grid');
const $nav = $('#Nav');

// function setGrid(){
//     if(isMobile){
//         $('#Grid').addClass('grid-2');
//     }else{
//         $('#Grid').addClass('grid-3');
//     }    
// }

function setGrid() {
    if (isMobile) {
        $grid.addClass('grid-2');
        return; // 擋住後面的動作
    }
    $grid.addClass('grid-3');
}

function SetScroll(){
    $(window).scroll(function () {
        // isMobile: true
        // !isMobile: false
        if (!isMobile) return;
    
            // console.log($(window).scrollTop());
            if ($(this).scrollTop() == 0) {
                $nav.removeClass('nav-active');
            } else {
                $nav.addClass('nav-active');
            }
        });
}

// 初始化
function setInit(){
    setGrid();
}

// 事件
function setEvent(){
    SetScroll();
    setFancybox();
}

function setFancybox(){
    $grid.find('a').fancybox({
        // 鎖右鑑
        protect: true,
        // 循環
        loop: true,
        animationDuration: 1000,
        // 轉場
        transitionDuration: 1000,
        transitionEffect: 'slide',
        // 全螢幕
        // fullScreen:{autoStart:true,}

        // 鍵盤控制
        // keyboard:false,

        // 左上分頁資訊
        // infobar:false,

        // 右上工具選單
        // toolbar:false,

        // 右上縮圖模式
        // thumbs:false,

        // 右上叉叉按鈕
        // smallBtn:true,

        // 箭頭
        // arrows:false,

        // 客製右上按鈕
        buttons:[
            'zoom',
            'share',
            'slideShow',
            "fullScreen",
            'download',
            'thumbs',
            'close',
        ],

        // 關閉自動播放
        media:{
            youtube:{
                params:{autoplay:false,}
            }
        }

        // 自動輪播
        // slideShow:{
        //     autoStart:true,
        //     speed:3000,
        // } 
    });
}

// 呼叫他執行
setInit();
setEvent();