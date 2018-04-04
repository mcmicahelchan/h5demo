import $ from 'jquery';

// 用于标记目前激活的tab的变量
let activeTabIndex = 1;
// 处理点击
$(() => {
    showAndHide();
})

// 用于显示当前的tab
function showAndHide()
{
    for (let i = 1; i <= 3; i++) {
        if (i === activeTabIndex) {
            $('#tab-content' + i).show();
            $('#tab-header' + i).addClass('tab-header_active');
        } else {
            $('#tab-content' + i).hide();
            $('#tab-header' + i).removeClass('tab-header_active');
        }
    }
}

//点击的事件处理器
$('#tab-headerContainer').click((event) => {
    event.stopPropagation;
    let id = event.target.id.split('');
    activeTabIndex = Number(id[id.length -1]);
    showAndHide();
})
