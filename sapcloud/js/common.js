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
  mySwiperp5.stopAutoplay();
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
              reset();
              setTimeout(function(){
                countProgress();
              },3800)
            break;
        case 4:
              setTimeout(function(){
                mySwiperp5.startAutoplay();
              },4900)
             reset();
            break;
        case 5:

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
var countData=[
  {
    w:0.21,
    c:40,
    t:800
  },
  {
    w:0.8,
    c:65000,
    n:2,
    t:800
  },
  {
    w:1.71,
    t:2000
  },
  {
    w:0.97,
    t:800
  },
  {
    w:0.6,
    t:800
  },
  {
    w:0.3,
    t:800
  }
];
var t0,t1,t2,t3,t4,t5;
var widths=parseInt($(".item1").width());
function countProgress(){
  t0=setTimeout(function(){
    proAnimation('aa','.pa .item1',countData[0]);
    t1=setTimeout(function(){
      proAnimation('aa','.pa .item2',countData[1]);
      t2=setTimeout(function(){
        proAnimation('bb','.pa .item3',countData[2]);
        t3=setTimeout(function(){
          proAnimation('bb','.pa .item4',countData[3]);
          t4=setTimeout(function(){
            proAnimation('bb','.pa .item5',countData[4]);
            t5=setTimeout(function(){
              proAnimation('bb','.pa .item6',countData[5]);
            },800)
          },800)
        },2000)
      },2200)
    },800)
  },800)
}
function proAnimation(type,element,data){
  $(element).find('.p-san').addClass('ac');
  if(type=='aa'){
    var _data=data;
    var c=0;
    var ta=setInterval(function(){
      if(c==_data.c){
        clearInterval(ta);
      }
      $(element).find('.count').html(c+'+');
      if(_data.n==2){
        c+=200;
      }else{
        c+=1;
      }
    },_data.t/data.c)
    $(element).find('.p-progress').animate({width:(widths/2)*_data.w},_data.t);
  }else if(type=='bb'){
    var _data=data;
    $(element).find('.p-progress').animate({width:(widths/2)*_data.w},_data.t);
    var text=0;
    var t=setInterval(function(){
        text+=1;
        $(element).find('.count').html(text+"%");
        if(text==_data.w*100){
          clearInterval(t);
        }
    },_data.t/(_data.w*100))
  }
}
function reset(){
  $(".count").html(" ");
  $(".p-progress").width("0px");
  $('.p-san').removeClass('ac');
  clearTimeout(t0);
  clearTimeout(t1);
  clearTimeout(t2);
  clearTimeout(t3);
  clearTimeout(t4);
  clearTimeout(t5);
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

var dataColor=[
  '#ffaf00',
  '#f79400',
  '#ee7900',
  '#e35500'
];
function clone(obj){
    function Clone(){}
    Clone.prototype = obj;
    var o = new Clone();
    for(var a in o){
        if(typeof o[a] == "object") {
            o[a] = clone(o[a]);
        }
    }
    return o;
}
var newArr=[];
var tcolor=setInterval(function(){
  newArr=dataColor.splice(0);
  var arrOne=newArr.shift();
  newArr.push(arrOne);
  dataColor=newArr;
  // clearInterval(tcolor);
  for(var i=0;i<dataColor.length;i++){
    $(".btn-list").each(function(index){
      $(this).css({'background-color':newArr[index]});
    })
  }
},400)

