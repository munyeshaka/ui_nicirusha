<template>
    <br>
    <br>
    
    <div class="card-parent-articles">
        <h2 class="articles">ARTICLES RÉCENT</h2>
    </div>


<!-- <div class="card-parent-articles">
    <div class="card">
        <div class="card-image">
            <img src="/static/about.png" loading="lazy" alt="..."/>
        </div>
        <div class="card-text">
            <p class="card-categ">Sport</p>
            <h2 class="card-title">Iyambere</h2>
            <p class="card-body">Iyi ni Blog yanje nzoza ndashirako ama Article yanje muntumbera yo gushira hanze ukwo mbona ibintu.</p>
        </div>
    </div>
</div> -->
<div class="card-parent-articles">
    <div class="card-catego"  v-for="(categ, index) in this.$store.state.categorieArticles" :key="index">
        <div class="catego">
            <div class="card" v-for="(article, index) in categ.articles" :key="index">
                <div class="card-image">
                    <img :src="`http://127.0.0.1:8000${article.photo}`" loading="lazy" alt="..."/>
                </div>
                <div class="card-text">
                    <div></div>
                    <p class="card-categ">{{categ.name}}</p>
                    <h2 class="card-title"><router-link class="link" :to="`/article-detail/${article.slug}`">{{article.title}}</router-link></h2>
                    <p class="card-body">{{article.content.substring(0,50)}}</p>
                </div>

            </div>
        </div>
    </div>
</div>

    
    </template>
    
    
    
<style scoped>

.card-parent-articles{
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-wrap: wrap;
}
.card-catego {
    width: 1100px;
    height: auto;
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    align-items: center;
}
.catego{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    
}
</style>
    
<script>
// import OurLoading from '@/components/OurLoading.vue'
// import moment from 'moment'

export default {
    name: 'ArticlesView',
    // props: ['igisomwa_id'],
    components: {
    // OurLoading,
    },
    data() {
    return {}
    },
    methods: {
        getCategArticles(){
            this.axios.get(this.$store.state.baseUrl + 'categories/').then(
                resp => {
                console.log(resp)
                // this.$store.state.igisomwaUnomusi = resp?.data?.results;
                this.$store.state.categorieArticles = resp?.data?.results;
                }).catch(error => {console.log(error)
                })
        },
    },
    mounted() {
        this.getCategArticles();
    }
}

</script>