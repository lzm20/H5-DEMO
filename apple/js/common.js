if (isDesktop){
	document.write('<div id="gameBody">');
}
var body, blockSize, GameLayer = [], GameLayerBG, touchArea = [], GameTimeLayer;
var transform, transitionDuration;

function init (argument) {
	showWelcomeLayer();
	body = document.getElementById('gameBody') || document.body;
	body.style.height = window.innerHeight+'px';
	transform = typeof(body.style.webkitTransform) != 'undefined' ? 'webkitTransform' : (typeof(body.style.msTransform) != 'undefined'?'msTransform':'transform');
	transitionDuration = transform.replace(/ransform/g, 'ransitionDuration');

	GameTimeLayer = document.getElementById('GameTimeLayer');
	GameLayer.push( document.getElementById('GameLayer1') );
	GameLayer[0].children = GameLayer[0].querySelectorAll('div');
	GameLayer.push( document.getElementById( 'GameLayer2' ) );
	GameLayer[1].children = GameLayer[1].querySelectorAll('div');
	GameLayerBG = document.getElementById( 'GameLayerBG' );
	if( GameLayerBG.ontouchstart === null ){
		GameLayerBG.ontouchstart = gameTapEvent;
	}else{
		GameLayerBG.onmousedown = gameTapEvent;
	}
	gameInit();
	window.addEventListener('resize', refreshSize, false);

	var rtnMsg = "true";	
			
	setTimeout(function(){
		if(rtnMsg == 'false'){
			var btn = document.getElementById('ready-btn');
			btn.className = 'btn';
			btn.innerHTML = '您今天已经吃太多苹果啦，请明天继续！' 			
		}else{
			var btn = document.getElementById('ready-btn');
			btn.className = 'btn';
			btn.onclick = function(){
				closeWelcomeLayer();
			} 					
		}
	}, 500);
}
var refreshSizeTime;
function refreshSize(){
	clearTimeout(refreshSizeTime);
	refreshSizeTime = setTimeout(_refreshSize, 200);
}
function _refreshSize(){
	countBlockSize();
	for( var i=0; i<GameLayer.length; i++ ){
		var box = GameLayer[i];
		for( var j=0; j<box.children.length; j++){
			var r = box.children[j],
				rstyle = r.style;
			rstyle.left = (j%4)*blockSize+'px';
			rstyle.bottom = Math.floor(j/4)*blockSize+'px';
			rstyle.width = blockSize+'px';
			rstyle.height = blockSize+'px';
		}
	}
	var f, a;
	if( GameLayer[0].y > GameLayer[1].y ){
		f = GameLayer[0];
		a = GameLayer[1];
	}else{
		f = GameLayer[1];
		a = GameLayer[0];
	}
	var y = ((_gameBBListIndex)%10)*blockSize;
	f.y = y;
	f.style[transform] = 'translate3D(0,'+f.y+'px,0)';

	a.y = -blockSize*Math.floor(f.children.length/4)+y;
	a.style[transform] = 'translate3D(0,'+a.y+'px,0)';

}
function countBlockSize(){
	blockSize = body.offsetWidth/4;
	body.style.height = 10.4+'rem';
	GameLayerBG.style.height = 9+'rem';
	touchArea[0] = window.innerHeight-blockSize*0;
	touchArea[1] = window.innerHeight-blockSize*3;
}
var _gameBBList = [], _gameBBListIndex = 0, _gameOver = false, _gameStart = false, _gameTime, _gameTimeNum, _gameScore;
function gameInit(){
    createjs.Sound.registerSound( {src:"mp3/fai.mp3", id:"err"} );//点错
    createjs.Sound.registerSound( {src:"mp3/clizh.mp3", id:"tap"} );//
    createjs.Sound.registerSound( {src:"mp3/bg.mp3", id:"bg"} );//背景音乐
    createjs.Sound.registerSound( {src:"mp3/22.mp3", id:"end"} );
	gameRestart();
}
function gameRestart(){
	console.log('gameRestart');
	playBgmusic();//播放背景音乐
	_gameBBList = [];
	_gameBBListIndex = 0;
	_gameScore = 0;
	_gameOver = false;
	_gameStart = false;
	_gameTimeNum = 2000;
	GameTimeLayer.innerHTML = "<div class='GameTimeLayerinner'>"+creatTimeText(_gameTimeNum)+"</div><div class='GameTimeLayerCount'></div>";
	countBlockSize();
	refreshGameLayer(GameLayer[0]);
	refreshGameLayer(GameLayer[1], 1);
}
function playBgmusic(){
	var soundMusic=createjs.Sound.play("bg");
	if(soundMusic.playState == 'playFailed'){
        var byaudio=$("<audio loop>");
        byaudio.attr("src","/tem/apple/mp3/bg.mp3").attr("id","audio1");
        $("body").append(byaudio);
        var waiaudio=document.getElementById("audio1");
        waiaudio.volume=0.5;
        waiaudio.play();
    }
}
function gameStart(){
	_gameStart = true;
	_gameTime = setInterval(gameTime, 10);
}
function gameOver(){
	_gameOver = true;
	clearInterval(_gameTime);
	setTimeout(function(){
		GameLayerBG.className = '';
		showGameScoreLayer();
	}, 1500);
}
function gameTime(){
	_gameTimeNum --;
	if( _gameTimeNum <= 0){
		document.getElementsByClassName("GameTimeLayerinner")[0].innerHTML="时间到";
		// GameTimeLayer.innerHTML = "<div class='GameTimeLayerinner'>时间到</div>";
		gameOver();
		GameLayerBG.className += ' flash';
		createjs.Sound.play("end");
	}else{
		document.getElementsByClassName("GameTimeLayerinner")[0].innerHTML=creatTimeText(_gameTimeNum);
		// GameTimeLayer.innerHTML = "<div class='GameTimeLayerinner'>"+creatTimeText(_gameTimeNum)+"</div>";
	}
}
function creatTimeText( n ){
	var text = (100000+n+'').substr(-4,4);
	text = +text.substr(0,2)+"'"+text.substr(2)+"''"
	return text;
}
var _ttreg = / t{1,2}(\d+)/, _clearttClsReg = / t{1,2}\d+| bad/;
function refreshGameLayer( box, loop, offset ){
	var i = Math.floor(Math.random()*1000)%4+(loop?0:4);
	for( var j=0; j<box.children.length; j++){
		var r = box.children[j],
			rstyle = r.style;
		rstyle.left = (j%4)*blockSize+'px';
		rstyle.bottom = Math.floor(j/4)*blockSize+'px';
		rstyle.width = blockSize+'px';
		rstyle.height = blockSize+'px';
		r.className = r.className.replace(_clearttClsReg, '');
		if( i == j ){
			_gameBBList.push( {cell:i%4, id:r.id} );
			r.className += ' t'+(Math.floor(Math.random()*1000)%5+1);
			r.notEmpty = true;
			i = ( Math.floor(j/4)+1)*4+Math.floor(Math.random()*1000 )%4;
		}else{
			r.notEmpty = false;
		}
	}
	if( loop ){
		box.style.webkitTransitionDuration = '0ms';
		box.style.display          = 'none';
		box.y                      = -blockSize*(Math.floor(box.children.length/4)+(offset||0))*loop;
		setTimeout(function(){
			box.style[transform] = 'translate3D(0,'+box.y+'px,0)';
			setTimeout( function(){
				box.style.display     = 'block';
			}, 100 );
		}, 200 );
	} else {
		box.y = 0;
		box.style[transform] = 'translate3D(0,'+box.y+'px,0)';
	}
	box.style[transitionDuration] = '150ms';
}
function gameLayerMoveNextRow(){
	for(var i=0; i<GameLayer.length; i++){
		var g = GameLayer[i];
		g.y += blockSize;
		if( g.y > blockSize*(Math.floor(g.children.length/4)) ){
			refreshGameLayer(g, 1, -1);
		}else{
			g.style[transform] = 'translate3D(0,'+g.y+'px,0)';
		}
	}
}
function gameTapEvent(e){
	if (_gameOver) {
		return false;
	}
	var tar = e.target;
	var y = e.clientY || e.targetTouches[0].clientY,
		x = (e.clientX || e.targetTouches[0].clientX)-body.offsetLeft,
		p = _gameBBList[_gameBBListIndex];
	if ( y > touchArea[0] || y < touchArea[1] ) {
		return false;
	}
	if( (p.id==tar.id&&tar.notEmpty) &&((p.cell==0&&x<blockSize) || (p.cell==1&&x>blockSize&&x<2*blockSize) || (p.cell==2&&x>2*blockSize&&x<3*blockSize) || (p.cell==3&&x>3*blockSize) )){
		if( !_gameStart ){
			gameStart();
		}
    	createjs.Sound.play("tap");
		tar = document.getElementById(p.id);
		tar.className = tar.className.replace(_ttreg, ' tt$1');
		_gameBBListIndex++;
		_gameScore ++;
		document.getElementsByClassName("GameTimeLayerCount")[0].innerHTML=_gameScore;
		gameLayerMoveNextRow();
	}else if( _gameStart && !tar.notEmpty ){
		createjs.Sound.play("err");
		gameOver();
		tar.className += ' bad';
	}
	return false;
}
function createGameLayer(){
	var html = '<div id="GameLayerBG">';
	for(var i=1; i<=2; i++){
		var id = 'GameLayer'+i;
		html += '<div id="'+id+'" class="GameLayer">';
		for(var j=0; j<10; j++ ){
			for(var k=0; k<4; k++){
				html += '<div id="'+id+'-'+(k+j*4)+'" num="'+(k+j*4)+'" class="block'+(k?' bl':'')+'"></div>';
			}
		}
		html += '</div>';
	}
	html += '</div>';

	html += '<div id="GameTimeLayer"></div>';

	return html;
}
function closeWelcomeLayer(){
	var l = document.getElementById('welcome');
	l.style.display = 'none';
}
function showWelcomeLayer(){
	var l = document.getElementById('welcome');
	l.style.display = 'block';
}
var lastCount=0,rdata;
function showGameScoreLayer(){
	browserStorage();
	var l = document.getElementById('GameScoreLayer');
	var c = document.getElementById(_gameBBList[_gameBBListIndex-1].id).className.match(_ttreg)[1];
	l.className = l.className.replace(/bgc\d/, 'bgc'+c);
	document.getElementById('GameScoreLayer-text').innerHTML = shareText(_gameScore);
	document.getElementsByClassName("GameScoreLayer_integral")[0].innerHTML = shareText(_gameScore);
	document.getElementsByClassName("GameScoreLayer_frequency")[0].innerHTML = 3-lastCount.value;
	l.style.display = 'block';
}
function browserStorage(){
	var mydate = new Date();
    var str1 = "" + mydate.getFullYear() + "-";
        str1 += (mydate.getMonth()+1) + "-";
        str1 += mydate.getDate()+ " 24:00";
    var data1 = new Date(str1);
    rdata=(mydate.getFullYear()+(mydate.getMonth()+1)+mydate.getDate()).toString();
    lastCount = BrowserStorage.api.get(rdata);
    if( lastCount.value== null ){
        lastCount.value = 0;
    }
    if(rdata!=lastCount.key){
    	lastCount.value = 0;
    }
    lastCount.value= parseInt(lastCount.value)+1;
    if(lastCount.value<3 || lastCount.value==3){
    	BrowserStorage.api.set({
            "key"       :   rdata,
            "value"     :   lastCount.value,
            "expires"   :   data1  
        });
        console.log("存储到本地，并且把相应的积分累加到积分商场上！");
    }else if(lastCount.value=3||lastCount.value>3){
    	document.getElementsByClassName("GameScoreLayer_integral")[0].style.display="none";
    	document.getElementsByClassName("GameScoreLayer_frequency")[0].style.display="none";
    	document.getElementById('GameScoreLayer').style.background="url('images/cishuwan.png')";
    	document.getElementById('GameScoreLayer').style.backgroundSize="100%";
    	console.log("今天的积分游戏次数已经用完，不给后台传积分！");
    }  
}
function hideGameScoreLayer(){
	var l = document.getElementById('GameScoreLayer');
	l.style.display = 'none';
}
function replayBtn(){
	gameRestart();
	hideGameScoreLayer();
}
function backBtn(){
	gameRestart();
	hideGameScoreLayer();
	showWelcomeLayer();
}
function shareText( score ){
	return score;
}
function toStr(obj) {
	if ( typeof obj == 'object' ) {
		return JSON.stringify(obj);
	} else {
		return obj;
	}
	return '';
}
document.write(createGameLayer());
$(document).ready(function(){
	$("#GameScoreLayer_close").click(function(){
		 window.location.href="http://haierclub.huandengpai.com/haier/club/points/gain";
	})
})
var lever=13;
var slideLever=(lever==10 && 1) || (lever==11 && 2) || (lever==12 && 3) || (lever==13 && 4) || 0;
console.log(slideLever);