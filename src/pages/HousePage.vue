<template>
    <div>
        <span class="p-4 fs-2">Welcome to the house page!</span>
        <button type="button" class="btn btn-outline-primary ms-2" data-bs-toggle="modal" title="OpenForm"
            data-bs-target="#houseFormModal">
            List new House?
        </button>
        <div class="container-fluid">
            <section v-for="house in houses" :key="house.id" class="row shadow bg-light rounded my-3">
                <HouseCardComponent :house="house" />
                <!-- House card is here -->
            </section>
        </div>
    </div>
    <HouseFormModalComponent />
</template>


<script>

import { AppState } from '../AppState';
import { computed, onMounted } from 'vue';
import { houseService } from '../services/HouseService.js';
import Pop from '../utils/Pop';
import HouseFormModalComponent from '../components/HouseFormModalComponent.vue';
import HouseCardComponent from '../components/HouseCardComponent.vue';

export default {
    setup() {
        async function getHouses() {
            try {
                await houseService.getHouses();
            }
            catch (error) {
                Pop.error(error);
            }
        }
        onMounted(() => {
            getHouses();
        });
        return {
            houses: computed(() => AppState.houses)
        };
    },
    components: { HouseFormModalComponent, HouseCardComponent }
};
</script>


<style lang="scss" scoped></style>