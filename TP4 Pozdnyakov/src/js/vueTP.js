const Newsnew = {
  data() {
    let news = JSON.parse(ALLNEWSJSON);
    return {
      articles : news,
      taille: news.length,
      text: 'articles'
    };
  }
};

let appArtilces=Vue.createApp(Newsnew);
appArtilces.component('news',{
  props: ['article'],
  template : nw,
  methods: {
    details : logMessageWithDate
  }
});
appArtilces.mount('#news');
