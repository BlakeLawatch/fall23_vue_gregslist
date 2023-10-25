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
}

export const houseService = new HouseService()