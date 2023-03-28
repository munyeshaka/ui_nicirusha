<template>

<div class="about-parent">
    <div class="about-card">
        <h2>A Propos de Moi</h2>
        <div class="about-card-image">
            <img src="/static/about.png" loading="lazy" alt="..."/>
        </div>
        <div class="about-body">
            <pre>Nitwa NICIRUSHA Alain Christian, abagenzi bamwe bampamagara Bebeto
Nkina basketball muri Team yitwa les hyppos

Iyi ni Blog yanje nzoza ndashirako ama Article yanje muntumbera yo gushira hanze ukwo mbona ibintu.</pre>
            <div class="about-social-media">
                <h4>FB</h4>
                <h4>IG</h4>
                <h4>TW</h4>
            </div>
        </div>
    </div>
</div>

<br>

<br>


    <div class="card-parent">
        <div class="citation">
            <h1>"Inkintu warondeye igihe kinini nticijana vyoroshe"</h1>
        </div>
    </div>

<br>

<div class="card-parent">
    <h2 class="articles">ARTICLES RÉCENT</h2>
</div>


<div class="card-parent" v-for="(categ, index) in categorie_latestArticles" :key="index">
    <div class="card" v-for="(article, index) in categ.latestArticle" :key="index">
        <div class="card-image">
            <img :src="`http://127.0.0.1:8000${article.photo}`" loading="lazy" alt="..."/>
        </div>
        <div class="card-text">
            <p class="card-categ">{{categ.name}}</p>
            <h2 class="card-title"><router-link class="link" :to="`/article-details/${article.slug}`">{{article.title}}</router-link></h2>
            <p class="card-body">{{article.content.substring(0,50)}}</p>
        </div>
    </div>
</div>


<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>

</template>



<style>

.about-parent{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
}
.about-card {
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 20px;
    width: 500px;
    height: auto;

}
.about-card-image img{
    display: flex;
    align-items: center;
    height: 100px;
    width: 100px;
    border-radius: 50px;
}
.about-body{
    display: flex;
    align-items: center;
    flex-direction: column;
}
.about-social-media{
    margin: -20px;
    display: flex;
    align-items: center;
    gap: 15px
}
.card-parent{
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-wrap: wrap;
    flex-direction: column;
}
.articles{
    padding-left: 35px;
}
.citation{
    margin: 30px;
    width: 400px;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;    
}
.card {
    width: 350px;
    height: auto;
    display: flex;
    padding: 10px;
    align-items: center;
    justify-content: center;    
    border-radius: 15px;
}

.card-image{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width:100px;
    height: auto;
}

.card-image img{
    width:100%;
    height: 100%;
    margin-right:-10px;
    display: flex;
    align-items: center;
    border-radius: 8px;
    object-fit:cover;
}
.card-text{
    width: 80%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: start;
    background-color:#1D1C20;
    color:#fff;
    padding:10px;
    border-radius: 8px;
    box-shadow:0 2px 12px 0 rgba(0,0,0,0.5);
}
.card-categ{
    font-style:italic;
    font-size:0.9rem;
}
.card-title{
    margin-top:-10px;
    font-size:2.2rem;
    margin-bottom:-10px;
    text-decoration: none;
}
h2 .link {
    cursor: pointer;
    font-size:2.2rem;
    text-decoration: none;
    color: white;
}
.card-body{
    font-size:0.9rem;

}


</style>


<script>
// import OurLoading from '@/components/OurLoading.vue'
// import moment from 'moment'

export default {
    name: 'HomeView',
    // props: ['igisomwa_id'],
    components: {
    // OurLoading,
    },
    data() {
    return {
        categorie_latestArticles: [],
    }
    },
    methods: {
        getCategArticles(){
            this.axios.get('http://127.0.0.1:8000/api/categorie-latestArticle/').then(
                resp => {
                console.log(resp)
                // this.$store.state.igisomwaUnomusi = resp?.data?.results;
                this.categorie_latestArticles = resp?.data?.results;
                }).catch(error => {console.log(error)
                })
        },
    },
    mounted() {
        this.getCategArticles();
    }
}

</script>