<template>
    <header>
        <nav>
            
            <div class="brand">
                <img src="/static/logo.png" loading="lazy"/>
                <h5>NASTIAN</h5>
            </div>


            <ul class="navigation">
                <li><router-link class="link" :to="{ name: 'home' }">Accueil</router-link></li>
                <li><router-link class="link" :to="{ name: 'articles' }">Blog</router-link></li>
            </ul>
        </nav>
    </header>
</template>

<script>

</script>

<style>
header {
background-color: var(--white);
z-index: 99;
width: 100%;
position: fixed;
transition: 0.5s ease all;
box-shadow: 0px 0px 8px #aaa;
}
nav{
    display: flex;
    width: 100%;
    margin: 0px;
    justify-content: space-around;
}

.brand {
    width: 200px;
    display: flex;
    align-items: center;
}
.brand img {
    width: 20%;
    object-fit:cover;
}
/* .brand h5{

} */
.navigation {
    display: flex;
    justify-content: end;
    gap: 20px
}
ul,
.link {
    /* font-weight: 500; */
    color: var(--green);
    list-style: none;
    text-decoration: none;
    font-size: 18px;
}

</style>