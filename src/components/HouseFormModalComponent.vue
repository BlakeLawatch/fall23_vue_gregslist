<template>
    <div class="modal fade" id="houseFormModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <div class="modal-body">
                        <form @submit.prevent="createHouse()">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">X</button>
                            <div class="mb-3">
                                <label for="bedrooms" class="form-label">Bedrooms</label>
                                <input v-model="editable.bedrooms" type="text" class="form-control" id="bedrooms">
                            </div>
                            <div class="mb-3">
                                <label for="bathrooms" class="form-label">bathrooms</label>
                                <input v-model="editable.bathrooms" type="text" class="form-control" id="bathrooms">
                            </div>
                            <div class="mb-3">
                                <label for="levels" class="form-label">levels</label>
                                <input v-model="editable.levels" type="text" class="form-control" id="levels">
                            </div>
                            <div class="mb-3">
                                <label for="imgUrl" class="form-label">imgUrl</label>
                                <input v-model="editable.imgUrl" type="text" class="form-control" id="imgUrl">
                            </div>
                            <div class="mb-3">
                                <label for="year" class="form-label">year</label>
                                <input v-model="editable.year" type="text" class="form-control" id="year">
                            </div>
                            <div class="mb-3">
                                <label for="price" class="form-label">price</label>
                                <input v-model="editable.price" type="text" class="form-control" id="price">
                            </div>
                            <div class="mb-3">
                                <label for="description" class="form-label">Car Description</label>
                                <textarea v-model="editable.description" maxlength="500" class="form-control"
                                    id="description" rows="3"></textarea>
                            </div>
                            <button type="submit" class="btn btn-primary">Create 🛖</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import { ref } from 'vue';
import Pop from '../utils/Pop';
import { houseService } from '../services/HouseService';
import { Modal } from 'bootstrap';


export default {
    setup() {
        const editable = ref({})

        return {
            editable,


            async createHouse() {
                try {
                    const houseData = editable.value
                    await houseService.createHouse(houseData)
                    editable.value = {}
                    Modal.getOrCreateInstance('#houseFormModal').hide()
                } catch (error) {
                    Pop.error(error)
                }
            }
        }
    }
};
</script>


<style lang="scss" scoped></style>