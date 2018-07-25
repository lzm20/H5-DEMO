adapterFullScreen(0);
$(window).load(function(){
    firstPageAnimate(1000);
    setTimeout(function(){
        $("#lp").fadeOut(800);
    },600)
    function audioAutoPlay(id) {
      var audio = document.getElementById(id);
      audio.play();
      document.addEventListener("WeixinJSBridgeReady", function() {
          audio.play();
      }, false);
   }
   audioAutoPlay('audiobg');
   var istrue=true;
    $("#switch").click(function(){
      if(istrue){
        $("#switch").removeClass().addClass('close');
        document.getElementById('audiobg').pause();
        istrue=false;
      }else{
        $("#switch").removeClass().addClass('open');
        document.getElementById('audiobg').play();
        istrue=true;
      }
    })
});
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
            reset();
            break;
        case 1:
            reset();
            break;
        case 2:
            reset();
            break;
        case 3:
            countAdd();
            break;
        case 4:
            reset();
            break;
        case 5:
            reset();
            break;
        case 6:

            break;
    }
    if( Nowindex >= len-1 ){
        DownUp.hide();
    }else{
        DownUp.show();
    }
}

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
function countAdd(){
  setTimeout(function(){
    countProgress('.p3-y1-text',25,30);
    setTimeout(function(){
      countProgress('.p3-y2-text',20,30);
      setTimeout(function(){
        countProgress('.p3-y3-text',15,30);
      },1000)
    },1200)
  },3600);
}
function countProgress(element,num,time){
  var n1=0;
  var t1=setInterval(function(){
    if(n1==num||n1>num){
      n1=num;
      clearInterval(t1);
    }
    $(element).html(n1+'%');
    n1++;
  },time);
}
function reset(){
  $('.p3-y1-text').html('');
  $('.p3-y2-text').html('');
  $('.p3-y3-text').html('');
}
/* 小方块自动切换背景颜色 */
function backColorBox(element,dataColor){
  var newArr=[];
  setInterval(function(){
    newArr=dataColor.splice(0);
    var arrOne=newArr.shift();
    newArr.push(arrOne);
    dataColor=newArr;
    // clearInterval(tcolor);
    for(var i=0;i<dataColor.length;i++){
      $(element).each(function(index){
        $(this).css({'background-color':newArr[index]});
      })
    }
  },400)
}
function backColorBox1(element,dataColor){
  var newArr=[];
  setInterval(function(){
    newArr=dataColor.splice(0);
    var arrOne=newArr.pop();
    newArr.unshift(arrOne);
    dataColor=newArr;
    // clearInterval(tcolor);
    for(var i=0;i<dataColor.length;i++){
      $(element).each(function(index){
        $(this).css({'background-color':newArr[index]});
      })
    }
  },400)
}
var dataColor0=['#f0ab00','#a8a340','#609a7f','#008fd3'];
var dataColor1=['#f0ab00','#a8a340','#609a7f','#008fd3'];
var dataColor2=['#f0ab00','#a8a340','#609a7f','#008fd3'];
var dataColor3=['#f0ab00','#d57a27','#bb4a4e','#970a82'];
var dataColor4=['#f0ab00','#a8a340','#609a7f','#008fd3'];
var dataColor5=['#f0ab00','#a8a340','#609a7f','#008fd3'];
var dataColor6=['#f0ab00','#a8a340','#609a7f','#008fd3'];
backColorBox('.p0 .p0-i5 .p0-i5-item',dataColor0);
backColorBox('.p1 .p-t-ri-box .ri-item',dataColor1);
backColorBox1('.p-t-c-box .ri-item',dataColor4);
backColorBox('.p2 .p-t-ri-box .ri-item',dataColor2);
backColorBox('.p2 .p2-c-list .p2-item',dataColor3);
backColorBox('.p3 .p-t-ri-box .ri-item',dataColor5);
backColorBox('.p4 .p-t-ri-box .ri-item',dataColor6);