<template>
    <div class="hello">
        <FxHeader>
            <h2>Title</h2>
        </FxHeader>
        <FxMain>
            <FxAside>
                <p>aside</p>
            </FxAside>
            <FxCard shadow="hover" style="width: 150px;">
                <div slot="header" class="clearfix">
                    <span>卡片名称</span>
                </div>
                <div class="card-content">
                    <p>card content</p>
                </div>
            </FxCard>
            <FxBadge :value="200" :max="99" class="item">数据查询</FxBadge>
        </FxMain>
        <FxFooter>
            <span>footer</span>
        </FxFooter>
    </div>
</template>

<script>
export default {
    name: 'Home',
    data() {
        return {
            msg: 'Welcome to Your Vue.js App',
        };
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
