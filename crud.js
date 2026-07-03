const fs = require("fs");
const path = require("path");

function readJson(PROJECT_DIR, file) {
    const filePath = path.join(PROJECT_DIR, file);
    return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

function writeJson(PROJECT_DIR, file, data) {
    const filePath = path.join(PROJECT_DIR, file);
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

/**
 * CRUD UTENTI: CREATE USER
 */

function createUser(PROJECT_DIR, user) {
    const users = readJson(PROJECT_DIR, "users.json");

    user.id = users.length > 0 ? users[users.length - 1].id + 1 : 0;

    users.push(user);

    writeJson(PROJECT_DIR, "users.json", users);

    return user;
}

/**
 * CRUD UTENTI: UPDATE USER
 */

function updateUser(PROJECT_DIR, id, data) {
    const users = readJson(PROJECT_DIR, "users.json");

    const index = users.findIndex(u => u.id === id);

    if (index === -1) return null;

    users[index] = {
        ...users[index],
        ...data,
        id
    };

    writeJson(PROJECT_DIR, "users.json", users);

    return users[index];
}

/**
 * CRUD MODELLI: CREATE MODEL
 */

function createModel(PROJECT_DIR, model) {
    const models = readJson(PROJECT_DIR, "models.json");

    models.push(model);

    writeJson(PROJECT_DIR, "models.json", models);

    return model;
}

/**
 * CRUD MODELLI: UPDATE MODEL
 */
function updateModel(PROJECT_DIR, name, data) {
    const models = readJson(PROJECT_DIR, "models.json");

    const index = models.findIndex(m => m.name === name);

    if (index === -1) return null;

    models[index] = {
        ...models[index],
        ...data,
        name
    };

    writeJson(PROJECT_DIR, "models.json", models);

    return models[index];
}


module.exports = {
    createUser,
    updateUser,
    createModel,
    updateModel
};
