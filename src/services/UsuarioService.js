import { ENDPOINT } from "data";

export const setLogin = (user) => {
    return fetch(`${ENDPOINT}/users/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
    })
        .then((res) => {
            if (!res.ok) throw new Error("Login is NOT ok");
            return res.json();
        })
        .then((res) => {
            const { token } = res;
            return token;
        });
};

export const setRegister = (user) => {
    return fetch(`${ENDPOINT}/users/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
    }).then((res) => {
        if (!res.ok) throw new Error("Register is NOT ok");
    });
};

export const getTramosByUser = (token) => {
    return fetch(`${ENDPOINT}/users/tramos`, {
        method: "GET",
        headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
        },
    }).then((res) => {
        if (!res.ok) throw new Error("GetTramosByUser is NOT ok");
        return res.json();
    });
};
