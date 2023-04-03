<template>
<br>
    <div class="detail-card-parent">
        <div class="detail-card">
            <img :src="`${article.photo}`" loading="lazy" />
        </div>
        <div class="detail-card">
            <h1 class="citation">{{article.title}}</h1>
        </div>
        <div class="detail">
            <div class="description">
                <div class="descri">

                    <h5 class="descri-category">{{categoryName}}</h5>

                    <!-- <div class="card-parent" v-for="(categ, index) in category" :key="index">
                        <h5 class="descri-category">{{categ.name}}</h5>
                    </div> -->

                    <h5 class="descri-date">{{moment(article.date).format("DD-MM-YYYY")}}</h5>
                    <h5 class="descri-name">{{autorName}}</h5>
                </div>
                <h3>"{{ article.intro }}"</h3>
            </div>
            <pre>{{article.content}}</pre>
        </div>
    </div>

</template>

<style scoped>
.detail-card-parent{
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-wrap: wrap;
    margin: 20px;
}
.detail-card{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    flex-direction: column;
    width:400px;
    height: auto;
}
.detail-card img{
    width:100%;
    height: 100%;
    display: flex;
    align-items: center;
    text-align: center;
    border-radius: 10px;
    object-fit:cover;
}
.detail{
    width: 800px;
    display: flex;
    flex-wrap: wrap;
    text-align: start;
    flex-direction: column;
    justify-content: space-between;    
}
.description{
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}
.descri{
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
}
.descri-category{
    background-color: var(--text_Color);
    width: 80px;
    color: white;
    border-radius: 5px;
    padding: 5px;
}
.descri-date{
    margin-top:-18px;
    margin-bottom:-18px;
    font-style:italic;
}
.description h3{
    display: flex;
    align-items: center;

}

</style>

<script>
// import OurLoading from '@/components/OurLoading.vue'
import moment from 'moment'

export default {
    name: 'HomeView',
    // props: ['igisomwa_id'],
    components: {
    // OurLoading,
    },
    data() {
    return {
        moment: moment,
        article: {},
        categoryName: '',
        category: {},
        author: {},
        autorName: ''
    }
    },
    methods: {
        getArticle(){
            this.axios.get('http://127.0.0.1:8000/api/articles/'+ this.$route.params.slug).then(
                resp => {
                console.log(resp)
                // this.$store.state.igisomwaUnomusi = resp?.data?.results;
                this.article = resp?.data;
                this.getCategory();
                this.getAutor();
                }).catch(error => {console.log(error)
                })
        },

        getCategory(){

            const categoryId = this.article.category;

            this.axios.get(`http://127.0.0.1:8000/api/categories/${categoryId}`).then(
                resp => {
                console.log(resp)
                this.category = resp?.data;
                this.categoryName = this.category.name;
                }).catch(error => {console.log(error)
                })
        },

        getAutor(){

        const autorId = this.article.autor;

        this.axios.get(`http://127.0.0.1:8000/api/autors/${autorId}`).then(
            resp => {
            console.log(resp)
            this.autor = resp?.data;
            this.autorName = this.autor.fullName;
            }).catch(error => {console.log(error)
            })
        },
    },
    mounted() {
        this.getArticle();
        // this.getCategory();
    }
}

</script>

