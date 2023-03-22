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
        <div class="card-child">
            <h4>"Inkintu warondeye igihe kinini nticijana vyoroshe"</h4>
        </div>
    </div>

<br>

<div class="card-parent">
    <div class="card-child">
        <h2>Les Articles recent</h2>
    </div>
</div>

<div class="card-parent">
    <div class="card">
        <div class="card-image">
            <img src="/static/about.png" loading="lazy" alt="..."/>
        </div>
        <div class="card-text">
            <p class="card-categ">Sport</p>
            <h2 class="card-title">Iyambere</h2>
            <p>Iyi ni Blog yanje nzoza ndashirako ama Article yanje muntumbera yo gushira hanze ukwo mbona ibintu.</p>
        </div>
    </div>
</div>

<!-- <div class="card-parent">
    <div class="card">
        <div class="card-image">
            <img src="/static/about.png" loading="lazy" alt="..."/>
        </div>
        <div class="card-text">
            <p class="card-categ">Sport</p>
            <h2 class="card-title">Iyambere</h2>
            <p>Iyi ni Blog yanje nzoza ndashirako ama Article yanje muntumbera yo gushira hanze ukwo mbona ibintu.</p>
        </div>
    </div>
</div> -->

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
    padding: 10px;
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
    gap: 20px;
    padding: 10px;
    flex-direction: column;
}

.card{
    display:flex;
    align-items: center;
    justify-content: center;
    width:500px;
    height: auto;
}
.card-image{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}
.card-image img{
    width:100px;
    height: 100px;
    margin-right:-8px;
    display: flex;
    align-items: center;
    border-radius: 8px;
    object-fit:cover;
}
.card-text{
    width:200px;
    height: auto;
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
/* .card-image{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}
.card-image img{
    width:100px;
    height: 100px;
    margin-right:-8px;
    display: flex;
    align-items: center;
    border-radius: 8px;
    object-fit:cover;
}
.card-text{
    width:400px;
    height: auto;
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
}
.card-title{
    margin-top:0px;
    font-size:2.2rem;
    margin-bottom:10px;
} */



</style>


<script>

</script>