adapterFullScreen(0);
var soundInstance;
$(window).load(function(){
    $('body')[0].addEventListener('touchstart',touchplayaudio,false); 
    var istrue=true;
    function touchplayaudio(){
      if(istrue){
        $("#audio1")[0].play();
        istrue=false;
      }
    }
    loadDate();
    // setTimeout(function(){
    //     $("#lp").fadeOut(800);
    // },600)
    $(".go-meeting").click(function(){
      $(".meet").show();
      $(".meeting").removeClass('leave');
      $('.meeting').addClass('current');
      $(".gridContainer").css({
         overflow: 'initial',
      })
    })
    $(".back").click(function(){
      $(".meeting").removeClass('current');
      $(".meeting").addClass('leave');
      $(".gridContainer").css({
         overflow: 'hidden',
      })
      setTimeout(function(){
        $(".meet").hide();
      },3000)
    })
    $(".lt").click(function(){
      $(".rt").removeClass("cur");
      $(".lt").addClass("cur");
      $(".tab-content img").attr("src",'images/p5/a1.jpg');
    })
    $(".rt").click(function(){
      $(".lt").removeClass("cur");
      $(".rt").addClass("cur");
      $(".tab-content img").attr("src",'images/p5/a2.jpg');
    })
    var opentype=true;
    //默认情况是音乐是播放的
    $(".switch").click(function(){
        if(opentype){
            document.getElementById("audio1").pause();
            $(".switch img").attr("src","images/close.png");
            opentype=false;
        }else{
             document.getElementById("audio1").play();
            $(".switch img").attr("src","images/open.png");
            opentype=true;
        }
    })
    function QueryString(key) {
        var reg= new RegExp (key + "=([^&#]*)","i");
        var value = reg.exec(window.location.href);
        if ( value == null )return null;
        return decodeURI(value[1]);
    }
    $(".go-form1").click(function(){
      window.location.href="http://form.huandengpai.com/app/qlik/form/sense/tour/2017?source="+QueryString('source');
    })
    $(".go-form").click(function(){
      window.location.href="http://form.huandengpai.com/app/qlik/form/sense/tour/2017?source="+QueryString('source');
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

            break;
        case 1:
            itemInit();
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
    if( Nowindex >= len-1 ){
        DownUp.hide();
    }else{
        DownUp.show();
    }
    if(Nowindex!=1){
        dafaulteItem();
    }
    if(Nowindex==5){
       mySwiper.lockSwipeToNext();
    }else{
      mySwiper.unlockSwipeToNext();
    }
}
var loader,
    bgmusic='http://qing.huandengpai.com/tem/qliksense/mp3/bgmusic10.mp3',
    manifest = [
        { id : "beijing", src: bgmusic},
    ];

function loadDate(){
    loader = new createjs.LoadQueue(false);
    createjs.Sound.alternateExtensions = ["mp3"];
    loader.installPlugin(createjs.Sound);         
    loader.on("fileload", handleFileLoad);
    loader.on("complete", handleComplete);
    loader.on("error", loadError);
    loader.on("progress", handleFileProgress);
    loader.loadManifest(manifest);
}
function handleFileLoad(event){} 
function loadError(evt){
    console.log("加载出错！",evt.text);
}
function handleFileProgress(event) {
    
}
function handleComplete(event) {
    console.log("全部加载完毕！");
    firstPageAnimate(1000);
    setTimeout(function(){
        $("#lp").fadeOut(800);
    },600)
    // soundInstance = createjs.Sound.play("beijing",{loop:100});
    // if(soundInstance.playState == 'playFailed'){
    //     var byaudio=$("<audio loop>");
    //     byaudio.attr("src",bgmusic).attr("id","audio1");
    //     $("body").append(byaudio);
    //     var waiaudio=document.getElementById("audio1");
    //     waiaudio.play();
    // }
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
var lang=$(".item-inner").width();
var p1data=[
    {
        lt:0.17
    },
    {
        lt:0.11
    },
    {
        lt:0.77
    },
    {
        lt:0.78
    },
    {
        lt:0.12
    }
]
var t0,t1,t2,t3,t4;
function itemInit(){
  t0=setTimeout(function(){
      progressdata('.pa .item1',p1data[0].lt,600);
      t1=setTimeout(function(){
        progressdata('.pa .item2',p1data[1].lt,500);
        t2=setTimeout(function(){
          progressdata('.pa .item3',p1data[2].lt,2500);
          t3=setTimeout(function(){
            progressdata('.pa .item4',p1data[3].lt,2600);
            t4=setTimeout(function(){
                progressdata('.pa .item5',p1data[4].lt,400);
            },2700)
          },2600)
        },600)
      },700)
  },10)
}
var btnw=$('.btn').width();
function progressdata(item,s,time){
    var w=parseInt(lang)*s;
    $(item).find('.inner-after').animate({width:w},time);
    $(item).find('.btn').animate({left:w-parseInt(btnw/2)},time);
    var text=0;
    var t=setInterval(function(){
        text+=1;
        $(item).find('.item-prom .progress-num').text(text);
        if(text>s*100||text==s*100){
          clearInterval(t);
        }
    },time/(s*100))
}
function dafaulteItem(){
  $(".p1-item").each(function(index){
    $(".p1-item.item"+(index+1)).find('.inner-after').css({width:'0px'});
    $(".p1-item.item"+(index+1)).find('.btn'+(index+1)).css({left:'0px'});
    $(".p1-item.item"+(index+1)).find('.item-prom .progress-num').text('0');
  })
  clearTimeout(t0);
  clearTimeout(t1);
  clearTimeout(t2);
  clearTimeout(t3);
  clearTimeout(t4);
}


