var selfEasyrtcid = "";
var haveSelfVideo = false;
function disable(domId) {
  document.getElementById(domId).disabled = "disabled";
  document.getElementById(domId).style.display = "none";
}
function enable(domId) {
  document.getElementById(domId).disabled = "";
  document.getElementById(domId).style.display = "block";
}
var onceOnly = true;
function connect() {	
  //easyrtc.enableAudio(document.getElementById("shareAudio").checked);
  //easyrtc.enableVideo(document.getElementById("shareVideo").checked);
  easyrtc.setUseFreshIceEachPeerConnection(true);
  easyrtc.enableAudio(true);
  easyrtc.enableVideo(true);
  easyrtc.enableDataChannels(true);
 // easyrtc.setRoomOccupantListener( convertListToButtons);  
  easyrtc.connect("easyrtc.audioVideo", loginSuccess, loginFailure);			  
  if( onceOnly ) {
    easyrtc.getAudioSinkList( function(list) {
     for(let ele of list ) {
       addSinkButton(ele.label, ele.deviceId);
     }
    });
    onceOnly = false;
  }
} 
window.addEventListener('onConnect', function (e) {
    try {
        connect();
    }
    catch (err) {
        console.log(err);
    }
}, false);

window.addEventListener('onDisConnect', function (e) {
    try {
        disconnect();
    }
    catch (err) {
        console.log(err);
    }
}, false);
var callBuddy = '';
window.addEventListener('startVideoChat', function (e) {
    try {
         performCall(e.detail.easyrtcid);
         callBuddy = e.detail.callbuddy;
    }
    catch (err) {
        console.log(err);
    }
}, false);

window.addEventListener('onAVModalClose', function (e) {
    try {
      if(isCallAccepted){
        hangup();
      }
      else{
        hangup();
        document.getElementById("callRejectButton").click();
      }
      stopMyCam();
    }
    catch (err) {
        console.log(err);
    }
}, false);

function callbuddy(){
  triggerWindowEvent('onCallBuddy', {'event': 'onCallBuddy', 'callbuddy': callBuddy});
}

function addSinkButton(label, deviceId){
   let button = document.createElement("button");
   button.innerText = label?label:deviceId;
   button.onclick = function() {
    easyrtc.setAudioOutput( document.getElementById("callerVideo"), deviceId);
   }
   document.getElementById("audioSinkButtons").appendChild(button);
}
function hangup() {
  isCallAccepted = false;
  stopRinging();
  easyrtc.hangupAll();
 // easyrtc.clearMediaStream( document.getElementById("selfVideo"));
  //easyrtc.setVideoObjectSrc(document.getElementById("selfVideo"),"");
  //easyrtc.closeLocalMediaStream();
  disable("hangupButton");
  disable("callerVideo");
  enable("callButton");
  enable("selfVideo");
  enable("callStatusMessage");
  document.getElementById("callStatusMessage").innerHTML = "<div class='text-center video-status-box blue-fonts small-fonts'>You have ended the call of "+ hostInfo.fullname + ". Call back.<div class='host-img'><div class='host-buddy' style='background-image:url("+hostInfo.profilepic.imageBuffer+");'></div></div></div>";
  changeVideoSize(false, true);
  
}

function remoteHangup(){
  isCallAccepted = false;
  stopRinging();
  disable("hangupButton");
  disable("callerVideo");
  enable("callButton");
  enable("selfVideo");
  enable("callStatusMessage");
  document.getElementById("callStatusMessage").innerHTML = "<div class='text-center video-status-box blue-fonts small-fonts'>User "+ hostInfo.fullname + " got disconnected. Call back after some time.<div class='host-img'><div class='host-buddy' style='background-image:url("+hostInfo.profilepic.imageBuffer+");'></div></div></div>";
  changeVideoSize(false, true);
}
function clearConnectList() {
  var otherClientDiv = document.getElementById("otherClients");
  while (otherClientDiv.hasChildNodes()) {
    otherClientDiv.removeChild(otherClientDiv.lastChild);
  }
}
function convertListToButtons (roomName, occupants, isPrimary) {
  clearConnectList();
  var otherClientDiv = document.getElementById("otherClients");
  for(var easyrtcid in occupants) {
    var button = document.createElement("button");
    button.onclick = function(easyrtcid) {
      return function() {
        performCall(easyrtcid);
      };
    }(easyrtcid);
    var label = document.createTextNode("Call " + easyrtc.idToName(easyrtcid));
    button.appendChild(label);
    otherClientDiv.appendChild(button);
  }
}
function setUpMirror() {
  if( !haveSelfVideo) {
    var selfVideo = document.getElementById("selfVideo");
    easyrtc.setVideoObjectSrc(selfVideo, easyrtc.getLocalStream());
    selfVideo.muted = true;
    haveSelfVideo = true;
  }
}
var _localStream;
var isShowMyCam = false;
function showMyCam(){
  document.getElementById("callControls").style.top = "470px";
  if(!isShowMyCam){
      var video = document.getElementById('selfVideo');
      var errorCallback = function(e) {
        console.log('Rejected!', e);
      };
      if (navigator.getUserMedia) {
        navigator.getUserMedia({audio: false, video: true}, function(stream) {
          _localStream = stream;
          video.src = window.URL.createObjectURL(stream);
        }, errorCallback);
      } else {
      alert("Your Browser does not support Camera");
      //video.src = 'somevideo.webm'; // fallback.
      }
      isShowMyCam = true;
  }

}
function stopMyCam(){
  document.getElementById("callControls").style.top = "200px";
  easyrtc.clearMediaStream( document.getElementById("selfVideo"));
  easyrtc.setVideoObjectSrc(document.getElementById("selfVideo"),"");
  easyrtc.closeLocalMediaStream();
  if(_localStream != null){
      //localStream.stop();
      var track = _localStream.getTracks()[0];  // if only one media track
      track.stop();
    }
  isShowMyCam = false;
}

var ring = new Audio();
ring.src = "/assets/sound/ring.mp3";
ring.load();
ring.loop = true;
function playRinging(){ 
  ring.play();
}

function stopRinging(){
  ring.pause();
  ring.currentTime = 0;
}
var hostInfo;
var callerInfo;
function performCall(otherEasyrtcid) {
  easyrtc.hangupAll();
  showMyCam();
  playRinging();
  hostInfo = app.namespace.callFromExternalInterface(otherEasyrtcid);
  document.getElementById("callStatusMessage").innerHTML = "<div class='text-center video-status-box blue-fonts small-fonts'>Calling "+ hostInfo.fullname + ". <div class='host-img'><div class='host-buddy' style='background-image:url("+hostInfo.profilepic.imageBuffer+");'></div></div></div>";
  var acceptedCB = function(accepted, easyrtcid) {
    if( !accepted ) {
      //easyrtc.showError("CALL-REJECTED", "Sorry, your call to " + hostInfo.fullname + " was rejected");
      enable("callStatusMessage");
      disable("acceptCallBox");
      document.getElementById("callStatusMessage").innerHTML = "<div class='text-center video-status-box blue-fonts small-fonts'>Sorry, your call to "+ hostInfo.fullname + " was rejected. Call back.<div class='host-img'><div class='host-buddy' style='background-image:url("+hostInfo.profilepic.imageBuffer+");'></div></div></div>";
      console.log(hostInfo);
      stopRinging();
      enable("callButton");
      disable("hangupButton");
      changeVideoSize(false, true);
    }else{
       changeVideoSize(true, false);
    }
  };
  var successCB = function() {
    if( easyrtc.getLocalStream()) {
      setUpMirror();
    }
    enable("hangupButton");
    disable("callButton");
    stopRinging();
  };
  var failureCB = function() {
    //enable("otherClients");
    stopRinging();
  };
  easyrtc.call(otherEasyrtcid, successCB, failureCB, acceptedCB);
  enable("hangupButton");
  disable("callButton");
  document.getElementById("acceptCallBox").style.display = "none";
}
function loginSuccess(easyrtcid) {
  //disable("connectButton");
  //enable("disconnectButton");
  //enable("otherClients");
  selfEasyrtcid = easyrtcid;
  var rtcId = easyrtc.cleanId(easyrtcid);
  //document.getElementById("iam").innerHTML = "I am " + rtcId;
  //easyrtc.showError("noerror", "logged in");
  triggerWindowEvent('onEasyRTCIDCreated', {'event': 'onEasyRTCIDCreated', 'eventObj': rtcId});

}
function loginFailure(errorCode, message) {
  easyrtc.showError(errorCode, message);
}
function disconnect() {
  stopRinging();
  easyrtc.disconnect();			  
  document.getElementById("iam").innerHTML = "logged out";
  //enable("connectButton");
  //disable("disconnectButton"); 
  easyrtc.clearMediaStream( document.getElementById("selfVideo"));
  easyrtc.setVideoObjectSrc(document.getElementById("selfVideo"),"");
  easyrtc.closeLocalMediaStream();
  easyrtc.setRoomOccupantListener( function(){});  
  clearConnectList();
} 
easyrtc.setStreamAcceptor( function(easyrtcid, stream) {
  setUpMirror();
  var video = document.getElementById("callerVideo");
  easyrtc.setVideoObjectSrc(video,stream);
  enable("hangupButton");
  disable("callButton");
  disable("callStatusMessage");
});
easyrtc.setOnStreamClosed( function (easyrtcid) {
  hostInfo = app.namespace.callFromExternalInterface(easyrtcid);
  easyrtc.setVideoObjectSrc(document.getElementById("callerVideo"), "");
  disable("hangupButton");
  enable("callButton");
  changeVideoSize(false, true);
  enable("callStatusMessage");
  document.getElementById("callStatusMessage").innerHTML = "<div class='text-center video-status-box blue-fonts small-fonts'>"+ hostInfo.fullname + " ended the call. Call back.<div class='host-img'><div class='host-buddy' style='background-image:url("+hostInfo.profilepic.imageBuffer+");'></div></div></div>";
});
var callerPending = null;
easyrtc.setCallCancelled( function(easyrtcid){
  if( easyrtcid === callerPending) {
    //document.getElementById("acceptCallBox").style.display = "none";
    //enable("buddyImg");
    disable("acceptCallBox");
    callerPending = false;
    enable("callStatusMessage");
    document.getElementById("callStatusMessage").innerHTML = "<div class='text-center video-status-box blue-fonts small-fonts'>"+ hostInfo.fullname + " ended the call. Call back.<div class='host-img'><div class='host-buddy' style='background-image:url("+hostInfo.profilepic.imageBuffer+");'></div></div></div>";
  }
});

var isCallAccepted = false;
easyrtc.setAcceptChecker(function(easyrtcid, callback) {
  hostInfo = app.namespace.callFromExternalInterface(easyrtcid);
  playRinging();
  disable("callButton");
  triggerWindowEvent('onCallAcceptChecker', {'event': 'onCallAcceptChecker', 'easyrtcid': easyrtcid});
  //document.getElementById("acceptCallBox").style.display = "block";
  enable("acceptCallBox");
  disable("buddyImg");
  callerPending = easyrtcid;
  if( easyrtc.getConnectionCount() > 0 ) {
    document.getElementById("acceptCallLabel").innerHTML = "<div>Drop current call and accept new from "+ hostInfo.fullname + " ?</div><div><img src="+hostInfo.profilepic.imageBuffer+"></img></div>";
    disable("callStatusMessage");
  }
  else {
    document.getElementById("acceptCallLabel").innerHTML = "<div class='text-center video-status-box blue-fonts small-fonts'>Accept incoming call from "+ hostInfo.fullname + " ?<div class='host-img'><div class='host-buddy' style='background-image:url("+hostInfo.profilepic.imageBuffer+");'></div></div>";
    disable("callStatusMessage");
  }
  var acceptTheCall = function(wasAccepted) {
    //document.getElementById("acceptCallBox").style.display = "none";
    disable("acceptCallBox");
    if( wasAccepted && easyrtc.getConnectionCount() > 0 ) {
      easyrtc.hangupAll();
    }
    callback(wasAccepted);
    callerPending = null;
  };
  document.getElementById("callAcceptButton").onclick = function() {
    isCallAccepted = true;
    acceptTheCall(true);
    changeVideoSize(true, false);
    stopRinging();

  };
  document.getElementById("callRejectButton").onclick =function() {
    isCallAccepted = false;
    acceptTheCall(false);
    changeVideoSize(false, true);
    stopRinging();
    enable("buddyImg");
    enable("callButton");
    enable("callStatusMessage");
    document.getElementById("callStatusMessage").innerHTML = "<div class='text-center video-status-box blue-fonts small-fonts'>You have rejected call from "+ hostInfo.fullname + ". Call back.<div class='host-img'><div class='host-buddy' style='background-image:url("+hostInfo.profilepic.imageBuffer+");'></div></div></div>";
  };
});

function changeVideoSize(switched, isHangUp){
    if(switched){
      document.getElementById("selfVideo").classList.remove('largeVideo');
      document.getElementById("selfVideo").classList.add('smallVideo');
      document.getElementById("callerVideo").style.display = "block";
      document.getElementById("callerVideo").classList.remove('smallVideo');
      document.getElementById("callerVideo").classList.add('largeVideo');
      document.getElementById("callControls").style.top = "470px";
    }else{
      document.getElementById("selfVideo").classList.remove('smallVideo');
      document.getElementById("selfVideo").classList.add('largeVideo');
      if(isHangUp){
        document.getElementById("callerVideo").style.display = "none";
      }else{
        document.getElementById("callerVideo").style.display = "block";
      }
      document.getElementById("callerVideo").classList.remove('largeVideo');
      document.getElementById("callerVideo").classList.add('smallVideo');
    }
}

function triggerWindowEvent(eventType, evtObj) {
  var evt = new CustomEvent(eventType, {'detail': evtObj});
  window.dispatchEvent(evt);
}
