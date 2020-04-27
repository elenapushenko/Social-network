import * as axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "6b339d61-e01c-44bb-a36c-b8d56e95c5c9"
    }
})

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`
        )
            .then(response => {
                    return response.data;
                }
            );
    },
    followUser(userId) {
       return instance.post(`follow/${userId}`, {}
       )
           .then(response => {
                   return response.data;
               }
           );
    },
    unfollowUser(userId) {
        return instance.delete(`follow/${userId}`
            )
            .then(response => {
                    return response.data;
                }
            );
    },
    authUser() {
        return instance.get(`/auth/me`)
            .then(response => {
                    return response.data;
                }
            );
    },
    getUserProfile(userId) {
        return instance.get(`profile/${userId}`)
            .then(response => {
                    return response.data;
                }
            );
    }
}

