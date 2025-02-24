import { logger } from "../utils/Logger"
import Pop from "../utils/Pop"
import { api } from "./AxiosService"
import { AppState } from '../AppState';
import { House } from "../models/House";

class HouseService {

    async getHouses() {
        try {
            const res = await api.get('api/houses')
            const newHouse = res.data.map(pojo => new House(pojo))
            AppState.houses = newHouse
            // logger.log('Houses in the service baby!!!!', newHouse)
        } catch (error) {
            Pop.error(error)
        }
    }

    async createHouse(houseData) {
        const res = await api.post('api/houses', houseData)
        logger.log('created new house?', res.data)
        const newHouse = new House(res.data)
        AppState.houses.push(newHouse)
    }

    async getHouseById(houseId) {
        const res = await api.get(`api/houses/${houseId}`)
        logger.log('got house by ID', res.data)
        const newHouse = new House(res.data)
        AppState.activeHouse = newHouse
    }

    async destroyHouse(houseId) {
        const res = await api.delete(`api/houses/${houseId}`)
        logger.log('deleted a house', res.data)
        this.clearData()
    }

    async editHouse(houseData) {
        const res = await api.put(`api/houses/${houseData.id}`, houseData)
        const newHouse = new House(res.data)
        AppState.activeHouse = newHouse
    }
}

export const houseService = new HouseService()