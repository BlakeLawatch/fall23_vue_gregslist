<template>
    <div class="container-fluid">
        <section v-if="house" class="row">
            <div class="col-12 text-center mt-2">
                <img class="image-house" :src="house.imgUrl" :alt="house.year">
                <h2>${{ house.price }}</h2>
                <h3>Bedrooms: {{ house.bedrooms }}</h3>
                <h3>Bathrooms: {{ house.bathrooms }}</h3>
                <div class="d-flex justify-content-center">
                    <h5>Levels: {{ house.levels }} |</h5>
                    <h5>| Date posted: {{ house.createdAt.toLocaleDateString() }}</h5>
                </div>
                <h5>{{ house.description }}</h5>
                <img class="image-creator rounded-circle" :src="house.creator.picture" :alt="house.creator.name">
                <div v-if="account.id == house.creatorId" class="my-2 px-5 py-2 shadow bg-light">
                    <button data-bs-toggle="modal" data-bs-target="#houseFormModal" class="btn btn-outline-info mx-3">Edit
                        House</button>
                    <button @click="destroyHouse()" class="btn btn-outline-danger">Delete</button>
                </div>
            </div>
        </section>
    </div>
</template>


<script>

import { computed, onMounted } from 'vue';
import { houseService } from '../services/HouseService';
import Pop from '../utils/Pop';
import { AppState } from '../AppState.js';
import { logger } from '../utils/Logger';
import { useRoute, useRouter } from 'vue-router';

export default {

    setup() {

        const route = useRoute();
        const router = useRouter();

        async function getHouseById() {
            try {
                AppState.activeHouse = null
                const houseId = route.params.houseId
                await houseService.getHouseById(houseId)
                logger.log('houses in the details page', houseId)

            } catch (error) {
                Pop.error(error)
            }
        }

        onMounted(() => {
            getHouseById()
        })

        return {
            house: computed(() => AppState.activeHouse),
            account: computed(() => AppState.account),
            async destroyHouse() {
                try {
                    const wantsToDelete = await Pop.confirm('You sure about that?')
                    if (!wantsToDelete) {
                        return
                    }
                    const houseId = route.params.houseId
                    await houseService.destroyHouse(houseId)
                    router.push({ name: 'houses' })
                } catch (error) {
                    Pop.error(error)
                }
            }
        }
    }
};
</script>


<style lang="scss" scoped>
.image-house {
    height: 45vh;
    width: 60vh;
    object-fit: cover;
    object-position: center;
}

.image-creator {
    height: 8vh;
    width: 8vh;
    object-fit: cover;
    object-position: center;

}
</style>