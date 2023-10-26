<template>
    <div class="container-fluid">
        <section class="row">
            <div class="col-12 p-5">
                <div class="col-4">

                </div>
                <div class="col-8">

                </div>
            </div>
        </section>
    </div>
</template>


<script>

import { onMounted } from 'vue';
import { houseService } from '../services/HouseService';
import { logger } from '../utils/Logger.js';

export default {
    setup() {

        const route = route();

        async function getHouseById() {
            const houseId = route.params.id
            await houseService.getHouseById(houseId)
        }

        onMounted(() => {
            getHouseById()
        })

        return {

        }
    }
};
</script>


<style lang="scss" scoped></style>