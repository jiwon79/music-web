import request from "../api"

const festivalGameAPI = {
    postResult: async (type_id: string) => request.get(`/labeling2/${type_id}`),
}

export default festivalGameAPI
