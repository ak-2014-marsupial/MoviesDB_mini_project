import axios from "axios";
import {baseURL} from "../constants/urls";

const axiosService = axios.create({
    baseURL,
});

axiosService.interceptors.request.use(req => {
    req.headers.Authorization = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkY2Q4Y2VhYWU3M2YzZjQ4NTAwY2NhZjg1OWQ1NDI1YiIsInN1YiI6IjY1NDYyNjUzZmQ0ZjgwMDExZWQwYmM3NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4jBQWaAXNNpvH4sunbMKJ2qogMHoPnQd5Lng0EOi_i4';
    return req;
})

export {
    axiosService
}

// Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ODJlN2Q1M2M3MTQ3OTFmZjczZmU4NzA3ODdmMDgxNSIsInN1YiI6IjU3ZWE0NjY0OTI1MTQxMTA4OTAwOGZjNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lEEivZliSc_G_UGJbP8p1LRlPXWu3U9erTCsUnRWP_U
//My  Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkY2Q4Y2VhYWU3M2YzZjQ4NTAwY2NhZjg1OWQ1NDI1YiIsInN1YiI6IjY1NDYyNjUzZmQ0ZjgwMDExZWQwYmM3NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4jBQWaAXNNpvH4sunbMKJ2qogMHoPnQd5Lng0EOi_i4