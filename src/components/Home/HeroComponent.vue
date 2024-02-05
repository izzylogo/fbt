<template>
    <div>
        <div class="image">
            <img src="../../assets/background.jpg" alt="logo" class="background-image">
        </div>
    </div>
</template>

<script>
export default {
    name: "HeroComponent"
}
</script>

<style lang="scss" scoped>
.image{
    // position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    img{
        height: 100%;
        width: 100%;
        // -o-object-fit: cover;
        object-fit: cover;
        // -o-object-position: center center;
        object-position: center center;
    }
}
</style>