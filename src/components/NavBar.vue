<template>
    <header>
        <nav>
            <h4 class="brand">NICIRUSHA</h4>
            
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
    margin: 0px;
    justify-content: space-around;
}
.brand{
    margin: 20px;
}
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