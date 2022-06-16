// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
function onYouTubeIframeAPIReady() {
  // <div id ="playler"></div>
  new YT.Player('player', {
    videoId: 'An6LvWQuj_8', /*중요 최초 재생할 유튜브 영상 ID*/
    playerVars: { /*var = variable(변하기쉬운 즉 변수) */
      autoplay: true, /*자동재생 유무*/
      disablekb:true,
      loop:true, /*반복재생 유무*/
      playlist:'An6LvWQuj_8' /*loop가 true 일땐 반복 재생할 유튜브 영상 ID 목록 */
    },
    events:{
      onReady: function(event){
        event.target.mute() /*음소거 */
      }
    }
      
  });
}