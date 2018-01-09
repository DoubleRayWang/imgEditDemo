//禁止右键菜单
/*$('#_clip_').on('contextmenu',function (e) {
    e.preventDefault()
    return false;
})*/
/*
$AC或AlloyClip 构造方法 初始化AlloyClip对象
new $AC(String Selector, Number width, Number height, Number Style);
{Selector} DOM选择器
{width} 要裁剪到宽度
{height} 要裁剪的高度
{Style} 使用的样式 0是不固定选择框，1是固定选择框
返回 AlloyClip对象
* */
/*
ok 点击确定按钮进行的方法注册
ok(Function callback)
{callback} 回调函数，有两个参数分别为base64, AIObj
base64为裁剪好的图片base64字符串
AIObj为裁剪好的图片AlloyImage对象
* */
new $AC("#_clip_", 800, 800, 0).ok(function (base64, aiObj) {
    $('#_clip_').hide()
    var image = $('#imagedit');
    image.append('<img src="'+ base64 +'">');
    image.children('img')[0].onload = function () {
        console.log(2);
        if (this){
            $('img').imageEdit({
                maxScale: 3,
                onReady: function () {
                    console.log("image loaded");
                },
                onSave: function (src) {
                    //console.log(src);
                    var oA = document.createElement('a');
                    oA.href = src;
                    oA.download = '111.png';
                    
                    var event = document.createEvent('MouseEvents');
                    event.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
                    oA.dispatchEvent(event);
                },
                overlays: ['images/clips/house.png', 'images/clips/home.png', 'images/clips/cape_house.png', 'images/clips/landscape.png'],
                show_props: true
            });
        }
    }
    aiObj.saveFile("AlloyCliped.jpg", 0.8);
});