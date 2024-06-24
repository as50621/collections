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
    });
}

// 呼叫他執行
setInit();
setEvent();