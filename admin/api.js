const API = "/api";

/**
 * USERS
 */

async function getUsers() {
    const res = await fetch(`${API}/users`);
    return res.json();
}

async function createUser(data) {
    const res = await fetch(`${API}/users`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });

    return res.json();
}

async function updateUser(id, data) {
    const res = await fetch(`${API}/users/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });

    return res.json();
}

/**
 * DATABASE (RECORDS)
 */

async function getModels() {
    const res = await fetch(`${API}/models`);
    return res.json();
}

async function getDB() {
    const res = await fetch(`${API}/db`);
    return res.json();
}

async function createRecord(model, data) {
    const res = await fetch(`${API}/db/${model}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });

    return res.json();
}

async function updateRecord(id, data) {
    const res = await fetch(`${API}/db/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });

    return res.json();
}

async function deleteRecord(id) {
    const res = await fetch(`${API}/db/${id}`, {
        method: "DELETE"
    });

    return res.json();
}
