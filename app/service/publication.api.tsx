import { request } from "../helper/axiosConfig"; // Only import what you need
export const createPublication = (publication: any) => {
    return request({
        url: 'publication/create',
        method: 'POST',
        body: publication
    })
}