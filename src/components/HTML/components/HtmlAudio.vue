<template>
  <div>
    <h3>Html音频视频</h3>
    <div class="content-div">
      <div class="border-div">
        <h4>html5 Audio/Video方法</h4>
        <p><strong>addTextTract()：</strong>向音频/视频添加新的文本轨道。</p>
        <p><strong>canPlayType()：</strong>检测浏览器是否能播放指定音频/视频的类型</p>
        <p><strong>load()：</strong>重新加载音频/视频元素</p>
        <p><strong>play()：</strong>开始播放音频/视频</p>
        <p><strong>pause()：</strong>暂停当前播放的音频/视频</p>
      </div>
      <div class="border-div">
        <h4>html5 Audio/Video属性</h4>
        <p><strong>autoTracks：</strong>返回表示可音轨的AutuTrackList对象</p>
        <p><strong>autoPlay：</strong>设置或返回是否在加载完成后随机播放音频/视频</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HtmlAudio'
}
</script>
<style scoped>
.content-div {
  width: 100%;
  border-top: 1px solid #cccccc;
  margin-top:30px;
}
.border-div {
  width: 100%;
  border-top: 1px solid #cccccc;
  border-bottom: 1px solid #cccccc;
}
.table-margin-top {
  margin-bottom: 20px;
}
h4 {
  border-left: 4px solid #333f44;
  border-bottom: 1px solid #333f44;
}
</style>
