<template>
  <div class="hello">
    <router-link to="/two">gototwo </router-link>
    <router-link to="/three">goto three </router-link>
    <div v-for="article in articles" class="text item">
        <img class="img" v-bind:src='article.images.small'>
        <div class="txt">
            <em class="name">{{article.title}}</em>
            <div class="average">评分：{{article.rating.average}}</div>
        </div>
    </div> 
  </div>
</template> 

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

.item{
    width: 100%;
    height: 100px;
}

.item .img{
    display: block;
    float: left;
    width: 65px;
    height: 100px;
}
.txt{
    display: block;
    float: left;
}
.txt .name{
    font-style: normal;
}
.title{
    display: block;

}
</style>
<script>
export default {
  data() {
    return {
      author: "xin",
      articles: {},
    }
  },
  mounted: function() {
    this.$http.jsonp('https://api.douban.com/v2/movie/top250?count=100', {}, {
        headers: {
        },
        emulateJSON: true
    }).then(function(response) {
          // 这里是处理正确的回调
        this.articles = response.data.subjects
        console.info(this.articles);

        // this.articles = response.data["subjects"] 也可以
    }, function(response) {
        // 这里是处理错误的回调
        console.log(response)
    });
  }
}
</script>