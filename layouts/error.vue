<template>
    <div class="container">
        <div id="error-page">
            <div class="error-message">
                <p>Qualcosa è andato storto!</p>
                <NuxtLink to="/" class="home-link">Torna in home page</NuxtLink>
            </div>
            <div class="error-logo">
                <img src="~assets/images/error.png" />
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    #error-page {
        height: 90vh;
        width: 100%;
        display: flex;
        justify-content: center;
        flex-direction: column;
    }

    .error-message {
        font-size: 18px;
    }

    .home-link {
        font-size: 14px;
        font-weight: 300;
    }

    .error-logo img {
        width: 5%;
        margin-top: 1.5rem;
    }
</style>