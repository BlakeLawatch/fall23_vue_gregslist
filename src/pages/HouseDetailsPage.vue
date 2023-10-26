<template>
    <div class="container-fluid">
        <section class="row">
            <div class="col-12 p-5">
                <div class="col-4">
                    {{ house }}
                </div>
                <div class="col-8">

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
import { useRoute } from 'vue-router';

export default {
    setup() {

        const route = useRoute();

        async function getHouseById() {
            try {
                const houseId = route.params.id
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
            house: computed(() => AppState.activeHouse)
        }
    }
};
</script>


<style lang="scss" scoped></style>