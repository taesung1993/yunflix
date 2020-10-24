import axios from "axios";

const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    params: {
        api_key: "387ae1d2424975d02e0b625df8263122",
        language: "en-US"
    }
});

export const showApi = {
    aringToday: () => api.get("/tv/airing_today"),
    topRated: () => api.get("/tv/top_rated"),
    popular: () => api.get("/tv/popular"),
    detail: (id) => api.get(`/tv/${id}`),
    getVideos: (id) => api.get(`/tv/${id}/videos`),
    similars: (id) => api.get(`/tv/${id}/similar`),
    getCredits: (id) => api.get(`/tv/${id}/credits`),
    getReviews: (id) => api.get(`/tv/${id}/reviews`),
    search: (query, page=1) => api.get(`/search/tv`, {
        params: {
            query,
            page
        }
    })
}

export const movieApi = {
    topRated: () => api.get("/movie/top_rated"),
    nowPlaying: () => api.get("/movie/now_playing"),
    popular: () => api.get("/movie/popular"),
    detail: (id) => api.get(`/movie/${id}`),
    getVideos: (id) => api.get(`/movie/${id}/videos`),
    similars: (id) => api.get(`/movie/${id}/similar`),
    getCredits: (id) => api.get(`/movie/${id}/credits`),
    getReviews: (id) => api.get(`/movie/${id}/reviews`),
    search: (query, page=1) => api.get(`/search/movie`, {
        params:{query, page},
    })
}