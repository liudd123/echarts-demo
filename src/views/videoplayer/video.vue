<template>
  <div>
    <video :src="blod" width="70%"  controls controlslist="nodownload noremoteplayback" oncontextmenu = "return false"></video>
  </div>
</template>

<script>
export default {
  name: "EchartsDemoVideo",

  data() {
    return {
        blod:null
    };
  },

  mounted() {
    this.init();
  },

  methods: {
    init() {
      this.$axios({
        method:'POST',
        responseType:'blob',
        url:"https://localhost:44328/api/Progress/GetVideo1"
      })
        .then((res) => {
          var blob = res.data;
          //获取blob对象地址，并把值赋给容器
          this.blod =URL.createObjectURL(blob);
        });
    },
  },
};
</script>

<style lang="scss" scoped></style>
