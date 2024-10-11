window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  function detect() {
var uagent = navigator.userAgent.toLowerCase();
var mobile = false;
var search_strings = [
"iphone",
"ipod",
"ipad",
"series60",
"symbian",
"android",
"windows ce",
"windows7phone",
"w7p",
"blackberry",
"palm"
];
for (i in search_strings) {
if (uagent.search(search_strings[i]) > -1) mobile = true;
}
return mobile;
}

var player = GetPlayer();
player.SetVar("clientIsPhone",detect());
}

window.Script2 = function()
{
  var player=GetPlayer();
var clientIsPhone = player.GetVar("clientIsPhone");

if (!clientIsPhone) {
    if (!window.alteredCaptions){
     var sheet = document.createElement('style');
     sheet.innerHTML = ".caption{font-size:150% !important;}";
     document.body.appendChild(sheet);
     window.alteredCaptions = true;
    }
}
else
{
    if (!window.alteredCaptions){
     var sheet = document.createElement('style');
     sheet.innerHTML = ".caption{font-size:100% !important;}";
     document.body.appendChild(sheet);
     window.alteredCaptions = true;
    }
}
}

window.Script3 = function()
{
  function detect() {
var uagent = navigator.userAgent.toLowerCase();
var mobile = false;
var search_strings = [
"iphone",
"ipod",
"ipad",
"series60",
"symbian",
"android",
"windows ce",
"windows7phone",
"w7p",
"blackberry",
"palm"
];
for (i in search_strings) {
if (uagent.search(search_strings[i]) > -1) mobile = true;
}
return mobile;
}

var player = GetPlayer();
player.SetVar("clientIsPhone",detect());
}

window.Script4 = function()
{
  var player=GetPlayer();
var clientIsPhone = player.GetVar("clientIsPhone");

if (!clientIsPhone) {
    if (!window.alteredCaptions){
     var sheet = document.createElement('style');
     sheet.innerHTML = ".caption{font-size:150% !important;}";
     document.body.appendChild(sheet);
     window.alteredCaptions = true;
    }
}
else
{
    if (!window.alteredCaptions){
     var sheet = document.createElement('style');
     sheet.innerHTML = ".caption{font-size:100% !important;}";
     document.body.appendChild(sheet);
     window.alteredCaptions = true;
    }
}
}

};
