var soundInstance;
adapterFullScreen(0);
$(window).load(function(){
    // loadDate();
    setTimeout(function(){
        $("#lp").fadeOut(800);
    },1000)
    
    firstPageAnimate(900);
    document.getElementById("audio11").play();
});
$("body").on("touchstart",function(){
    document.getElementById("audio11").play();
    setTimeout(function(){
        $("body").unbind();
    },1000)
})
var DownUp = $('#downLoad'),
    obj, len, Nowindex, direction;
var isC = false;
function showPage(swiper){
    obj = swiper;//获取当前对象
    len = obj.slidesSizesGrid.length;//页面总数
    Nowindex = obj.activeIndex;//当前的index值
    direction = obj.swipeDirection;//方向，返回'next','pre'字符串
    removePageAnimate();//移除动画
    $(".swiper-container-main .swiper-slide-active").addClass("pa");
    switch( Nowindex ){
        case 0:

            break;
        case 1:

            break;
        case 2:

            break;
        case 3:

            break;
    }
    if( Nowindex >= len-1 ){
        DownUp.hide();
    }else{
        DownUp.show();
    }
}
//处理单个文件加载
function handleFileLoad(event) {
    if( event.item.id != manifest[0].id ){
        bmp = new createjs.Bitmap(event.result);
        container.push( { bmp:bmp, name:event.item.name } );
    }
} 
//处理加载错误：大家可以修改成错误的文件地址，可在控制台看到此方法调用
function loadError(evt) {
    console.log("加载出错！",evt.text);
}
//已加载完毕进度 
function handleFileProgress(event) {

}
//全部资源加载完毕
function handleComplete(event) {
    console.log("全部资源加载完毕!")
    $("#lp").fadeOut(800);
    soundInstance = createjs.Sound.play("abc",{loop:100});
}
//加载数据
var manifest = [
       { id:"abc",src: "yy/qyy.mp3"}
    ];
//第一个页面上的动画
function firstPageAnimate(time){
    setTimeout(function(){
        $(".swiper-container-main .swiper-slide-active").addClass("pa");
    },time);
}
//去除个页面的动画
function removePageAnimate(){
    $(".swiper-container-main .swiper-slide").removeClass("pa");
}

function GetQueryString(name){
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if(r!=null)return  unescape(r[2]);
    return null;
}

//页面适配
function adapterFullScreen(type){
    if( type == 0){
        var h = $('body').height();
        if( h < 1008 ){
            var s = h/1008;
            keyboardTop = 1008 -80;
            $("._qp").css({ '-webkit-transform': 'scale('+ s +')' , 'transform': 'scale('+ s +')' });
        }else{
            keyboardTop = h -80;
        }
    }
}
$('.lockTouchmove').each(function(){
    $(this)[0].addEventListener('touchmove',function(e){
        e.preventDefault();
    },false);
});

function loadDate(){
    loader = new createjs.LoadQueue(false);
    loader.installPlugin(createjs.Sound); 
    createjs.Sound.alternateExtensions = ["mp3"];        
    loader.on("fileload", handleFileLoad);
    loader.on("complete", handleComplete);
    loader.on("error", loadError);
    // canvas = document.getElementById('canvas0');
    // stage = new createjs.Stage(canvas);
    // createDate();
    loader.on("progress", handleFileProgress);
    loader.loadManifest(manifest);
}