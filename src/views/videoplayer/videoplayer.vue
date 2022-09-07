<template>
  <div>
    <div class="video-container-v1">
      <div class="left-container">
        <video-player
          class="video-player vjs-custom-skin"
          ref="videoPlayer"
          :playsinline="true"
          :options="playerOptions"
        >
        </video-player>
      </div>
      <div class="right-container">
        <div class="multi-page-v1">
          <div class="head-con">
            <div class="head-left">视频列表</div>
            <div class="head-right"></div>
          </div>
          <div class="cur-list">
            <ul class="list-box">
              <li v-for="(item, index) in sourcesList" :key="item.sort" @click="change1(index)">
                <a>{{ index }}-{{ item.title }}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "video.js/dist/video-js.css";
import { videoPlayer } from "vue-video-player";
export default {
  name: "EchartsDemoVideoplayer",
  components: {
    videoPlayer,
  },
  data() {
    return {
      sourcesList: [],
      currentSourceIndex: 0,
      playerOptions: {
        playbackRates: [0.5, 1.0, 1.5, 2.0], // 可选的播放速度
        autoplay: false, // 如果为true,浏览器准备好时开始回放。
        muted: false, // 默认情况下将会消除任何音频。
        loop: false, // 是否视频一结束就重新开始。
        preload: "auto", // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: "zh-CN",
        aspectRatio: "16:9", // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources: [
          {
            type: "application/vnd.apple.mpegurl", // 这里的种类支持很多种：基本视频格式、直播、流媒体等，具体可以参看git网址项目
            src: "http://localhost/hls/zxcu.m3u8", //"http://1252093142.vod2.myqcloud.com/4704461fvodcq1252093142/f865d8a05285890787810776469/playlist.f3.m3u8",
          },
        ],
        poster: require("@/assets/logo.png"), // 封面地址
        notSupportedMessage: "此视频暂无法播放，请稍后再试", // 允许覆盖Video.js无法播放媒体源时显示的默认信息。
        controlBar: {
          timeDivider: true, // 当前时间和持续时间的分隔符
          durationDisplay: true, // 显示持续时间
          remainingTimeDisplay: false, // 是否显示剩余时间功能
          fullscreenToggle: true, // 是否显示全屏按钮
        },
      },
    };
  },

  mounted() {
    this.init();
  },

  methods: {
    init() {
      let that = this;

      let arr = [
        {
          sort: 1,
          title: "乌鸦坐飞机",
          type: "application/vnd.apple.mpegurl",
          src: "http://localhost/hls/zxcu.m3u8",
        },
        {
          sort: 2,
          title: "观音坐莲",
          type: "application/vnd.apple.mpegurl",
          src: "http://1252093142.vod2.myqcloud.com/4704461fvodcq1252093142/f865d8a05285890787810776469/playlist.f3.m3u8",
        },
        {
          sort: 3,
          title: "跟着乌鸦混，三天饿九顿",
          type: "application/vnd.apple.mpegurl",
          src: "http://localhost/hls/abc.m3u8",
        },
        {
          sort: 4,
          title: "观音坐莲",
          type: "application/vnd.apple.mpegurl",
          src: "http://1252093142.vod2.myqcloud.com/4704461fvodcq1252093142/f865d8a05285890787810776469/playlist.f3.m3u8",
        },
        {
          sort: 5,
          title: "乌鸦坐飞机",
          type: "application/vnd.apple.mpegurl",
          src: "http://localhost/hls/zxcu.m3u8",
        },
        {
          sort: 6,
          title: "观音坐莲",
          type: "application/vnd.apple.mpegurl",
          src: "http://1252093142.vod2.myqcloud.com/4704461fvodcq1252093142/f865d8a05285890787810776469/playlist.f3.m3u8",
        },
        {
          sort: 7,
          title: "乌鸦坐飞机",
          type: "application/vnd.apple.mpegurl",
          src: "http://localhost/hls/zxcu.m3u8",
        },
        {
          sort: 8,
          title: "观音坐莲",
          type: "application/vnd.apple.mpegurl",
          src: "http://1252093142.vod2.myqcloud.com/4704461fvodcq1252093142/f865d8a05285890787810776469/playlist.f3.m3u8",
        },
        {
          sort: 9,
          title: "乌鸦坐飞机",
          type: "application/vnd.apple.mpegurl",
          src: "http://localhost/hls/zxcu.m3u8",
        },
        {
          sort: 10,
          title: "观音坐莲",
          type: "application/vnd.apple.mpegurl",
          src: "http://1252093142.vod2.myqcloud.com/4704461fvodcq1252093142/f865d8a05285890787810776469/playlist.f3.m3u8",
        },
        {
          sort: 11,
          title: "乌鸦坐飞机",
          type: "application/vnd.apple.mpegurl",
          src: "http://localhost/hls/zxcu.m3u8",
        },
        {
          sort: 12,
          title: "观音坐莲",
          type: "application/vnd.apple.mpegurl",
          src: "http://1252093142.vod2.myqcloud.com/4704461fvodcq1252093142/f865d8a05285890787810776469/playlist.f3.m3u8",
        },
        {
          sort: 13,
          title: "乌鸦坐飞机",
          type: "application/vnd.apple.mpegurl",
          src: "http://localhost/hls/zxcu.m3u8",
        },
        {
          sort: 14,
          title: "观音坐莲",
          type: "application/vnd.apple.mpegurl",
          src: "http://1252093142.vod2.myqcloud.com/4704461fvodcq1252093142/f865d8a05285890787810776469/playlist.f3.m3u8",
        },
      ];
      // arr.forEach(function (item) {
      //   that.sourcesList.push({ type: item.type, src: item.src });
      // });
      that.sourcesList = arr;
      this.currentSourceSrc = 0;
      that.$set(this.playerOptions, "sources", [
        this.sourcesList[this.currentSourceSrc],
      ]);
      that.$refs.videoPlayer.player.load();
    },
    // 视频播完回调/视频切换
    onPlayerEnded(player) {
      let { sourcesList } = player.options_;
      let length = sourcesList.length;
      let currentSourceSrc = "";
      sourcesList.forEach((v, i) => {
        if (this.currentSourceSrc === v.src) {
          let index = i === length - 1 ? 0 : ++i;
          console.log(index);
          this.$set(this.playerOptions, "sources", [sourcesList[index]]);
          this.$refs.videoPlayer.player.load();
        }
      });
      this.currentSourceSrc = currentSourceSrc;
    },
    change(t) {
      let length = this.sourcesList.length;
      this.sourcesList.forEach((v, i) => {
        if (this.currentSourceSrc !== i) {
          this.currentSourceSrc = i;
          this.$set(this.playerOptions, "sources", [
            this.sourcesList[this.currentSourceSrc],
          ]);
          this.$refs.videoPlayer.player.load();
        }
      });
    },
    change1(t) {
      this.$set(this.playerOptions, "sources", [this.sourcesList[t]]);
      this.$set(this.playerOptions, "autoplay", true);
      this.$refs.videoPlayer.player.load();
      console.log(this.$refs.videoPlayer.player);
    },
  },
};
</script>

<style lang="scss" scoped>

.multi-page-v1 {
  position: relative;
  background: #F1F2F3;
  background: var(--bg3);
  z-index: 1;
  border-radius: 6px;
  margin-bottom: 18px;
}
.multi-page-v1 .head-con {
  display: flex;
  padding: 14px 16px 0;
  align-items: center;
  justify-content: space-between;
}
.multi-page-v1 .head-con .head-left {
  display: flex;
  align-items: center;
}
.multi-page-v1 .head-con .head-left h3 {
  font-size: 15px;
  line-height: 20px;
  font-family: PingFang SC, HarmonyOS_Regular, Helvetica Neue, Microsoft YaHei, sans-serif;
  font-weight: 500;
  -webkit-font-smoothing: antialiased;
  margin-right: 4px;
  color: #18191C;
  color: var(--text1);
}
@media (-webkit-max-device-pixel-ratio: 1) {
.multi-page-v1 .head-con .head-left h3 {
    font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, Helvetica, Arial, PingFang SC, Hiragino Sans GB, Microsoft YaHei, sans-serif;
}
}
.multi-page-v1 .head-con .head-left .cur-page {
  font-size: 12px;
  color: #9499A0;
  color: var(--text3);
  line-height: 16px;
}
.multi-page-v1 .head-con .head-left .range-box i {
  cursor: pointer;
  line-height: 24px;
  font-size: 16px;
  margin-left: 10px;
  color: #757575;
}
.multi-page-v1 .head-con .head-left .range-box i:hover {
  color: #00AEEC;
  color: var(--brand_blue);
}
.multi-page-v1 .head-con .head-right .next-button {
  font-size: 14px;
  line-height: 16px;
  color: #9499A0;
  color: var(--text3);
}
.multi-page-v1 .head-con .head-right .next-button .switch-button {
  background-color: #9499A0;
  background-color: var(--text3);
  border: 1px solid #9499A0;
  border: 1px solid var(--text3);
}
.multi-page-v1 .head-con .head-right .next-button .switch-button.on {
  background-color: #00AEEC;
  background-color: var(--brand_blue);
  border: 1px solid #00AEEC;
  border: 1px solid var(--brand_blue);
}
.multi-page-v1 .cur-list {
  padding: 4px 0;
  transition: all 0.3s;
  max-height: 340px;
  overflow: hidden;
}
.multi-page-v1 .cur-list:hover {
  overflow-y: auto;
}
.multi-page-v1 .cur-list .list-box {
  padding: 0 6px;
}
.multi-page-v1 .cur-list .list-box li {
  display: block;
  height: 30px;
  line-height: 30px;
  padding: 0 10px;
  color: #18191C;
  color: var(--text1);
  margin: 5px 0;
  transition: all 0.3s;
  border-radius: 2px;
  cursor: pointer;
  white-space: nowrap;
  overflow: hidden;
  font-size: 13px;
  width: 308px;
  box-sizing: border-box;
}
.multi-page-v1 .cur-list .list-box li:hover {
  color: #00AEEC;
  color: var(--brand_blue);
  background: #FFFFFF;
  background: var(--bg1);
}
.multi-page-v1 .cur-list .list-box li.watched a {
  color: #9499A0;
  color: var(--text3);
}
.multi-page-v1 .cur-list .list-box li.on {
  background: #FFFFFF;
  background: var(--bg1);
  padding: 0 10px 0 6px;
}
.multi-page-v1 .cur-list .list-box li.on > a {
  color: #00AEEC;
  color: var(--brand_blue);
}
.multi-page-v1 .cur-list .list-box li.on img {
  height: 14px;
  width: 14px;
  font-size: 14px;
  margin-right: 5px;
}
.multi-page-v1 .cur-list .list-box li a {
  color: #18191C;
  color: var(--text1);
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  line-height: inherit;
}
.multi-page-v1 .cur-list .list-box li .clickitem {
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  width: 100%;
}
.multi-page-v1 .cur-list .list-box li .link-content {
  display: flex;
  align-items: center;
  flex-shrink: 1;
  overflow: hidden;
}
.multi-page-v1 .cur-list .list-box li .page-num {
  margin-right: 10px;
}
.multi-page-v1 .cur-list .list-box li .part {
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  flex-shrink: 1;
}
.multi-page-v1 .cur-list .list-box li .duration {
  color: #9499A0;
  color: var(--text3);
  justify-self: flex-end;
}
.multi-page-v1 .cur-list .module-box {
  margin-top: 8px;
  margin-left: 16px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}
.multi-page-v1 .cur-list .module-box li {
  background: #F1F2F3;
  background: var(--bg3);
  float: left;
  width: 66px;
  height: 36px;
  line-height: 36px;
  text-align: center;
  color: #18191C;
  color: var(--text1);
  border: 1px solid #E3E5E7;
  border: 1px solid var(--line_regular);
  border-radius: 4px;
  margin: 0 7px 8px 0px;
  cursor: pointer;
  transition: all 0.3s;
  font-size: 13px;
  box-sizing: border-box;
}
.multi-page-v1 .cur-list .module-box li:nth-of-type(4n) {
  margin-right: 0px;
}
.multi-page-v1 .cur-list .module-box li a {
  display: inline-block;
  width: 100%;
  color: #18191C;
  color: var(--text1);
}
.multi-page-v1 .cur-list .module-box li a > span {
  display: inline-block;
  width: 100%;
  height: 100%;
}
.multi-page-v1 .cur-list .module-box li.watched a {
  color: #9499A0;
  color: var(--text3);
}
.multi-page-v1 .cur-list .module-box li:hover {
  color: #00AEEC;
  color: var(--brand_blue);
  border-color: #00AEEC;
  border-color: var(--brand_blue);
}
.multi-page-v1 .cur-list .module-box li:hover a {
  color: #00AEEC;
  color: var(--brand_blue);
}
.multi-page-v1 .cur-list .module-box li.on {
  color: var(--Wh0_u);
  color: var(--text_white);
  border-color: #00AEEC;
  border-color: var(--brand_blue);
  background: #00AEEC;
  background: var(--brand_blue);
}
.multi-page-v1 .cur-list .module-box li.on a {
  color: var(--Wh0_u);
  color: var(--text_white);
}
.multi-page-v1.small-mode .cur-list .list-box li {
  width: 338px;
}
.multi-page-v1.small-mode .cur-list .module-box li {
  width: 75px;
}
@media (min-width: 1681px) {
.multi-page-v1 {
    margin-bottom: 20px;
}
.multi-page-v1 .head-con .head-left h3 {
    font-size: 16px;
}
.multi-page-v1 .cur-list .list-box li,
  .multi-page-v1 .cur-list .module-box li {
    font-size: 14px;
}
.multi-page-v1 .cur-list .list-box li {
    width: 348px;
}
.multi-page-v1 .cur-list .module-box li {
    width: 75px;
}
.multi-page-v1.small-mode .cur-list .list-box li {
    width: 399px;
}
.multi-page-v1.small-mode .cur-list .module-box li {
    width: 70px;
}
.multi-page-v1.small-mode .cur-list .module-box li:nth-of-type(4n) {
    margin-right: 7px;
}
.multi-page-v1.small-mode .cur-list .module-box li:nth-of-type(5n) {
    margin-right: 0px;
}
}
.cur-list::-webkit-scrollbar {
  width: 4px;
}
.cur-list::-webkit-scrollbar-thumb {
  border-radius: 4px;
  background-color: #999;
}
.video-container-v1 {
  max-width: 2540px;
  min-width: 1080px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  box-sizing: content-box;
}
.video-container-v1 .right-container {
  width: 320px;
  flex: none;
  margin-left: 30px;
  padding-bottom: 20px;
  position: relative;
}
.video-container-v1 .right-container.small-mode {
  width: 350px;
}
.video-container-v1 .right-container.small-mode #right-bottom-banner {
  height: 175px;
}
.video-container-v1 .right-container #bgm-entry {
  z-index: 99;
  position: absolute;
  width: calc(100% + 22px);
  left: 0;
  margin-left: -22px;
}
.video-container-v1 .right-container #bgm-entry.hide-bgm {
  display: none;
}
.video-container-v1 .right-container #bgm-entry.pos-in-wide {
  width: 100%;
  margin-left: 0px;
  left: initial;
  right: 0;
}
.video-container-v1 .left-container {
    width: 740px;
}
</style>
