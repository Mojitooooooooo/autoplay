(function () {

  // 获取所有课程列表
  const lessons = document.querySelectorAll(".video");
  // 回答所有题目并点击关闭按钮
  var answer = function () {
    let close = document.querySelector(".popbtn_cancel span");
    if (close != null) {
      document.getElementById("tmDialog_iframe").contentWindow.document.querySelector(".answerOption label input").click();
      close.click();
    }
  }

  // 加载新视频时关闭声音
  var mute = function () {
    if(!document.querySelector(".volumeBox").classList.contains("volumeNone"))
      document.querySelector(".volumeIcon").click();
  }

  // 获取视频播放进度
  var process = function () {
    return document.querySelector(".passTime").style.width;
  }

  // 检查此时正在播放的内容
  var next = function () {
    return document.querySelector(".videoTitle").innerHTML;
  }

  // 检查这一部视频是否观看完毕
  var complete = function () {
    if(document.querySelector(".progressbar_box_tip").innerText.indexOf("100%") != -1)
    {
      return true;
    }
    return false;
  }

  // 切换到下一视频
  var toggle = function(){
    document.querySelector(".next_lesson_bg ").click()
  }

  var timer = setInterval(function () {
    console.log("正在播放" + next());

    // 视频开始即关闭声音
    mute();

    // 开始检查是否观看完毕
    if(complete()){
      console.log("已观看完毕")
      toggle();
    }else{
      // 视频播放时答题
      answer();

      if(process() == "100%"){
        //进度100%时下一视频  
        toggle()
      }
    }
  }, 3000);
})();