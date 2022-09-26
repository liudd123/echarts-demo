<template>
  <div>
    <input type="file" value="选择文件" @change="handleChange" />
    <div class="well" ref="output"></div>
  </div>
</template>

<script>
import { getExtend, readBuffer, render } from "../util";
export default {
  data() {
    return {
      last: null,
      filename: "",
    };
  },

  mounted() {},

  methods: {
    async handleChange(e) {
      console.log(e);
      const [file] = e.target.files;
      const arrayBuffer = await readBuffer(file);
      this.last = await this.displayResult(arrayBuffer, file);
    },
    displayResult(buffer, file) {
      // 取得文件名
      const { name } = file;
      // 取得扩展名
      const extend = getExtend(name);
      // 输出目的地
      const { output } = this.$refs;
      // 生成新的dom
      const node = document.createElement("div");
      // 添加孩子，防止vue实例替换dom元素
      if (this.last) {
        output.removeChild(this.last.$el);
        this.last.$destroy();
      }
      const child = output.appendChild(node);
      // 调用渲染方法进行渲染
      return new Promise((resolve, reject) =>
        render(buffer, extend, child).then(resolve).catch(reject)
      );
    },
  },
};
</script>

<style scoped>
    .banner {
      overflow: auto;
      text-align: center;
      background-color: #12b6ff;
      color: #fff;
    }
    
    .hidden .banner {
      display: none;
    }
    
    .hidden .well {
      height: calc(100vh - 12px);
    }
    
    .overlay {
      position: absolute;
      transition: all;
      z-index: 1000;
      opacity: 0.4;
      top: 50px;
      left: 112px;
      padding: 20px;
      border-radius: 5px;
      background: white;
      border: 1px solid silver;
    }
    
    .overlay:hover {
      opacity: 1;
    }
    
    .file-select {
      position: absolute;
      left: 5%;
      line-height: 35px;
      margin-left: 20px;
    }
    
    .banner a {
      color: #fff;
      text-decoration: none;
    }
    
    .banner h1 {
      font-size: 20px;
      line-height: 2;
      margin: 0.5em 0;
    }
    
    .well {
      display: block;
      background-color: #f2f2f2;
      border: 1px solid #ccc;
      margin: 5px;
      width: calc(100% - 12px);
      height: calc(100vh - 73px);
      overflow: auto;
    }
    
    .loading {
      text-align: center;
      padding-top: 50px;
    }
    
    .file-select button {
      background: #fafafa;
    }
    
    .overlay button {
      background: #12b6ff;
      color: white;
    }
    
    button {
      outline: none;
      border-radius: 20px;
      border: 1px solid #e3e3e3;
      line-height: 19px;
      padding: 5px 12px;
      cursor: pointer;
    }
    
    .overlay input[type="text"] {
      line-height: 19px;
      height: 30px;
      width: 300px;
      outline: none;
      border: 1px solid silver;
      border-radius: 6px;
      margin-right: 10px;
    }
    
    .overlay input[type="file"] {
      position: absolute;
      opacity: 0;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      z-index: 2;
      cursor: pointer;
    }
    
    .upload-cover {
      z-index: 1;
      pointer-events: none;
      color: black;
    }
    
    .messages .warning {
      color: #cc6600;
    }
    </style>
    
    <style>
    .pptx-wrapper {
      max-width: 1000px;
      margin: 0 auto;
    }
    </style>
    
