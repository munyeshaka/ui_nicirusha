<template>
    <hr>
    <footer>
        <p>Droits d'auteur © {{ new Date().getFullYear() }}| NICIRUSHA - Développé par <a class="devBy" href="https://www.egeratech.com" target="_blank">egeraTech</a></p>
    </footer>
</template>

<style>
footer{
    display: flex;
    margin: 0px;
    justify-content: space-around;
}
.devBy{
    display: flex;
    justify-content: center;
    color: var(--green);
    text-decoration: none;
}
</style>