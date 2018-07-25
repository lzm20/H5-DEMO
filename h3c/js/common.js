adapterFullScreen(0);
var goto_next;
$(window).load(function(){
    firstPageAnimate(1000);
    setTimeout(function(){
        $("#lp").fadeOut(800);
    },600)
});
// main 
var mySwiper = new Swiper('.swiper-container-main',{
    onlyExternal : true,
    onInit: function(swiper){
        showPage(swiper);
    },
    onSlideChangeEnd: function(swiper){
        showPage(swiper);
    }
});
// 公司简介
var mySwiperCompany = new Swiper('.swiper-container-company-profile',{
    direction:"vertical",
    noSwiping : true,
    loop:true,
    noSwipingClass : 'stop-swiping',
    onInit: function(swiper){

    },
    onSlideChangeEnd: function(swiper){
        $(".swiper-container-company-profile .swiper-slide").removeClass("xz");
        $(".swiper-container-company-profile .swiper-slide-active").addClass("xz");
    }
})
// 服务器
var mySwiperfwq = new Swiper('.swiper-container-fwq',{
    slidesPerView : 1.5,
    spaceBetween : 20,
    centeredSlides : true,
    prevButton:'.swiper-button-prev',
    nextButton:'.swiper-button-next',
    pagination : '.swiper-pagination',
    paginationType : 'progress',
    onInit: function(swiper){

    },
    onSlideChangeStart: function(swiper){
        var _this=$(".swiper-container-fwq .swiper-slide-active")
        var count=_this.attr("data-count");
        $(".middle_content img").attr("src",fwqdata[count]);
    }
})
function gotoNext(){
    mySwiper.slideNext(1000);
}
var DownUp = $('#downLoad'),
    obj, len, Nowindex, direction;
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
        case 4:

            break;
        case 5:

            break;
        case 6:

            break;
    }
    // if( Nowindex >= len-1 ){
    //     DownUp.hide();
    // }else{
    //     DownUp.show();
    // }
}
// 列表页
    $(".list").click(function(){

        var _number=parseInt($(this).attr("data-number"));
        var _yfqh=$(".yfqh");//扬帆起航
        var fwq=$(".fwq");//服务器
        switch(_number){
            case 1:
                // 致客户
                mySwiper.slideTo(2, 1000, false);
                break;
            case 2:
                //公司简介
                mySwiperCompany.slideNext(1000);
                break;
            case 3:
                //扬帆起航
                _yfqh.addClass("active");
                $(".yfqh_back").click(function(){_yfqh.removeClass("active");})
                break;
            case 4:
                //服务器
                fwq.addClass("active");
                $(".gridContainer").css({overflow: "inherit"})
                $(".lianxi").show();
                $(".fwq_back").click(function(){fwq.removeClass("active");$(".lianxi").hide();})
                break;
        }
    })
// 杨帆启航
$(".yfqh ._item").click(function(){
    var _list=$(this).attr("data-list");
    $("._itembox").fadeIn();
    $("._itembox ._list").attr("src",yfqhdata[_list]);
})
$(".yfqh_close").click(function(){
     $("._itembox").fadeOut();
})
// 首页
$(".prom_right").click(function(){
    mySwiper.slideNext(1000);
})
$(".p2_back").click(function(){
    mySwiper.slidePrev(1000);
})

// 联系我们
$(".contact").click(function(){
     $(".contact_box").fadeIn();
})
$(".contact_close").click(function(){
    $(".contact_box").fadeOut();
})
$(".lianxi").click(function(){
     $(".lianxi_box").fadeIn();
})
$(".lianxi_close").click(function(){
    $(".lianxi_box").fadeOut();
})



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

//页面适配
function adapterFullScreen(type){
  if( type == 0){
    var h = window.innerHeight*640/window.innerWidth;
    if( h < 1008 ){
      var s = h/1008;
      $("._qp").css({ '-webkit-transform': 'scale('+ s +')' , 'transform': 'scale('+ s +')' });
    }else{
      $("._qp").css({ '-webkit-transform': 'none' , 'transform': 'none' });
    }
  }
}
$('.lockTouchmove').each(function(){
    $(this)[0].addEventListener('touchmove',function(e){
        e.preventDefault();
    },false);
});
