

import { request } from "../helper/axiosConfig";

interface LoginResponse {
    token: string;
    user: {
        id: number;
        name: string;
        access_token: string,
        refresh_token: string,
        token_type: string,
    };
}

interface Credential {
    email: string;
    password: string;
}

export const loginUser = (credential: Credential): Promise<LoginResponse> => {
    return request({
        url: 'user/login-user',
        method: 'POST',
        body: credential
    });
};

export const createUser = (credential: Credential): Promise<LoginResponse> => {
    return request({
        url: 'user/create-user',
        method: 'POST',
        body: credential
    });
};
