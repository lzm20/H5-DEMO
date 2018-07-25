adapterFullScreen(0);
var dataColor0=['#008fd3','#609a7f','#a8a340','#f0ab00'];
var dataColor1=['#970a82','#bb4a4e','#d57a27','#f0ab00'];
var dataColor2=['#d57a27','#f0ab00','#970a82','#bb4a4e'];
$(window).load(function(){
    firstPageAnimate(1000);
    setTimeout(function(){
        $("#lp").fadeOut(800);
        setTimeout(function(){
          backColorBox1('.p1tbox .p1-item',dataColor0);
        },1600)
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
    // mySwiper.slideTo(6, 1000, false);
});
var DownUp = $('.nexPage'),
    obj, len, Nowindex, direction;
function showPage(swiper){
    reset();
    obj = swiper;//获取当前对象
    len = obj.slidesSizesGrid.length;//页面总数
    Nowindex = obj.activeIndex;//当前的index值
    direction = obj.swipeDirection;//方向，返回'next','pre'字符串
    removePageAnimate();//移除动画
    $(".swiper-container-main .swiper-slide-active").addClass("pa");
    switch( Nowindex ){
        case 0:
            // setTimeout(function(){
            //   backColorBox1('.p1tbox .p1-item',dataColor0);
            // },1400)
            break;
        case 1:
            // setTimeout(function(){
            //   backColorBox1('.p2tbox .p2-item',dataColor0);
            // },1400)
            break;
        case 2:
            // setTimeout(function(){
            //   backColorBox1('.p3tbox .p3-item',dataColor0);
            //   setTimeout(function(){
            //     backColorBox1('.p3cl-1 .p3cl-1-item',dataColor1);
            //     setTimeout(function(){
            //       backColorBox1('.p3cl-2 .p3cl-2-item',dataColor2);
            //     },100)
            //   },2000)
            // },1400)
            break;
        case 3:
            // setTimeout(function(){
            //   backColorBox1('.p4tbox .p4-item',dataColor0);
            // },1400)
            break;
        case 4:
            // setTimeout(function(){
            //   backColorBox1('.p5tbox .p5-item',dataColor0);
            // },1400)
            break;
        case 5:
            resets();
            break;
        case 6:
            setTimeout(function(){
              $(".p7_b_i").addClass('sa');
            },8100)
            break;
    }
    if( Nowindex >= len-1 ){
        DownUp.hide();
    }else{
        DownUp.show();
    }
}
function resets(){
  $(".p7_b_i").removeClass('sa');
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

function backColorBox1(element,dataColor){
  var Dcolor=dataColor;
  var newArr=[];
  var ss=0;
  var ts=setInterval(function(){
    if(ss==3||ss>3){
      clearInterval(ts);
      ss=3;
    }
    Array.prototype.clone = function () {
      return this.slice(0);
    }
    newArr=Dcolor.clone();
    var arrOne=newArr.pop();
    newArr.unshift(arrOne);
    Dcolor=newArr;
    $(element).each(function(index){
       $(this).css({'background-color':newArr[index]});
    })
    ss+=1;
  },120);
}
function reset(){
  $(".p1-item").each(function(index){
       $(this).css({'background-color':'rgba(0,0,0,0)'});
  })
  $(".p2-item").each(function(index){
       $(this).css({'background-color':'rgba(0,0,0,0)'});
  })
  $(".p3-item").each(function(index){
       $(this).css({'background-color':'rgba(0,0,0,0)'});
  })
  $(".p4-item").each(function(index){
       $(this).css({'background-color':'rgba(0,0,0,0)'});
  })
  $(".p5-item").each(function(index){
       $(this).css({'background-color':'rgba(0,0,0,0)'});
  })
}

