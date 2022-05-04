import { ENDPOINT } from "data";

export const getTramos = () => {
    return fetch(`${ENDPOINT}/tramo/`).then((res) => {
        if (!res.ok) throw new Error("getTramos is NOT ok"); // No hay contenido :v
        return res.json();
    });
};

export const tomar = (id, token) => {
    return fetch(`${ENDPOINT}/tramo/tomar/${id}`, {
        method: "GET",
        headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
        },
    })
        .then((res) => {
            if (!res.ok) throw new Error("tomar is NOT ok");
            return res.json();
        })
        .then((res) => {
            return res;
        });
};

export const devolver = (id, token) => {
    return fetch(`${ENDPOINT}/tramo/devolver/${id}`, {
        method: "GET",
        headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
        },
    })
        .then((res) => {
            if (!res.ok) throw new Error("devolver is NOT ok");
            return res.json();
        })
        .then((res) => {
            return res;
        });
};
