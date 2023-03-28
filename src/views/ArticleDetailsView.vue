<template>
    <div class="detail-card-parent">
        <div class="detail-card">
            <div class="detail-card-image">
                <img src="/static/about.png" loading="lazy" alt=""/>
            </div>
            <h1 class="citation">"Inkintu warondeye igihe kinini nticijana vyoroshe"</h1>
        </div>
        <div class="detail">
            <pre>Nitwa NICIRUSHA Alain Christian, abagenzi bamwe bampamagara Bebeto
Nkina basketball muri Team yitwa les hyppos
            </pre>
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
    width: 950px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    text-align: center;
    justify-content: center;    
}
.detail-card-image{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width:300px;
    height: auto;
}
.detail-card-image img{
    width:100%;
    height: 100%;
    display: flex;
    align-items: center;
    border-radius: 10px;
    object-fit:cover;
}
.detail{
    width: 950px;
    display: flex;
    flex-wrap: wrap;
    text-align: start;
    justify-content: center;    
}
</style>