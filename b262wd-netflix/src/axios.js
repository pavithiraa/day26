import axios from "axios";
const instance=axios.create({
    baseURL:"https://api.themoivedb.org/3",
})

export default instance;