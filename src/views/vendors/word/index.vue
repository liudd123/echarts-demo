<template>
  <div>
    <input type="file" value="选择文件" @change="handleChange" />
    <div  class="well" ref="output"></div>
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

<style lang="scss" scoped>

.well {
  height: calc(100vh - 12px);
}
</style>
