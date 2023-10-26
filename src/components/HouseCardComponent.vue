<template>
    <router-link :to="{ name: 'HouseDetails', params: { houseId: house.id } }">
        <div class="col-md-4">
            <img :src="house.imgUrl" :alt="house.bedrooms">
        </div>
        <div class="col-md-8">
            <h2>Bedrooms: {{ house.bedrooms }}</h2>
            <h2>Bathrooms: {{ house.bathrooms }}</h2>
            <h3>Price: ${{ house.price }}</h3>
            <h3>Levels: {{ house.levels }}</h3>
            <h4>{{ house.description }}</h4>

        </div>
    </router-link>
</template>


<script>

import { House } from '../models/House';
export default {
    props: {
        house: { type: House },
    },
    setup() {
        return {}
    }
};
</script>


<style lang="scss" scoped>
img {
    max-height: 30vh;
    width: 100%;
    object-fit: cover;
    object-position: center;
    border-radius: 10px;
}
</style>