//SETTING UP OUR POPUP
//0 means disabled; 1 means enabled;
var popupStatus = 0;

//loading popup with jQuery magic!
function loadPopup(){
	//loads popup only if it is disabled
	if(popupStatus==0){
		$("#backgroundPopup").css({
			"opacity": "0.7"
		});
		$("#backgroundPopup").fadeIn("slow");
		$("#popupContact").fadeIn("slow");
		popupStatus = 1;
	}
}

//disabling popup with jQuery magic!
function disablePopup(){
	//disables popup only if it is enabled
	if(popupStatus==1){
		$("#backgroundPopup").fadeOut("slow");
		$("#popupContact").fadeOut("slow");
		popupStatus = 0;
		initiliazeDivs();
	}
	/*var windowHeight = document.documentElement.clientHeight;
	$("#popupContact").css({
			"height":384,
			"width":408
		});
	$("#backgroundPopup").css({
			"height": windowHeight
		});**/
	
}

//centering popup
function centerPopup(size){
	
	var windowWidth = document.documentElement.clientWidth;
	var windowHeight = document.documentElement.clientHeight;
	
	if(size == 'little'){
		var popupHeight = 384;
		var popupWidth = 408;
	}
	else if (size == 'large'){
		var popupHeight = 384+150;
		var popupWidth = 408+300;
	}
	
	$("#popupContact").css({
			"position": "absolute",
			"top": windowHeight/2-popupHeight/2,
			"left": windowWidth/2-popupWidth/2,
			"height":popupHeight,
			"width":popupWidth
		});
	
		$("#backgroundPopup").css({
			"height": windowHeight
		});
	
}


function close(){
    //CLOSING POPUP
	//Click the x event!
	$("#popupContactClose1").click(function(){
		disablePopup();
	});
	$("#popupContactClose2").click(function(){
		disablePopup();
	});
}

//CONTROLLING EVENTS IN jQuery
$(document).ready(function(){
	//Click out event!
	$("#backgroundPopup").click(function(){
		disablePopup();
	});
	//Press Escape event!
	$(document).keypress(function(e){
		if(e.keyCode==27 && popupStatus==1){
			disablePopup();
		}
	});
});

function selectPopup(type){
	if(type == 'upload'){
		document.getElementById("uploadArea").style.display = '';
		//open('upload');
		centerPopup('little');
	}
	else if(type == 'info'){
		document.getElementById("informationArea").style.display = '';
		//open('info');
		centerPopup('large');
	}
	loadPopup();
}

function initiliazeDivs(){
	document.getElementById("uploadArea").style.display = 'none';
	document.getElementById("informationArea").style.display = 'none';
}