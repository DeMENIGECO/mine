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
 * MODELLI CRUD BASE
 */

function getModel(PROJECT_DIR, modelName) {
    const models = readJson(PROJECT_DIR, "models.json");
    return models.find(m => m.name === modelName);
}

function getRecords(PROJECT_DIR, modelName) {
    const db = readJson(PROJECT_DIR, "db.json");
    return db.filter(item => item.model === modelName);
}

/**
 * CRUD MODELLI: CREATE MODEL
 */

function createRecord(PROJECT_DIR, modelName, data) {
    const db = readJson(PROJECT_DIR, "db.json");

    const newItem = {
        id: db.length > 0 ? db[db.length - 1].id + 1 : 0,
        model: modelName,
        ...data
    };

    db.push(newItem);

    writeJson(PROJECT_DIR, "db.json", db);

    return newItem;
}

/**
 * CRUD MODELLI: UPDATE MODEL
 */
function updateRecord(PROJECT_DIR, id, data) {
    const db = readJson(PROJECT_DIR, "db.json");

    const index = db.findIndex(item => item.id === id);

    if (index === -1) return null;

    db[index] = {
        ...db[index],
        ...data,
        id
    };

    writeJson(PROJECT_DIR, "db.json", db);

    return db[index];
}

/**
 * CRUD MODELLI: DELETE MODEL
 */

function deleteRecord(PROJECT_DIR, id) {
    const db = readJson(PROJECT_DIR, "db.json");

    const newDb = db.filter(item => item.id !== id);

    writeJson(PROJECT_DIR, "db.json", newDb);

    return true;
}

/**
 * Exports
 */

module.exports = {
    getModel,
    getRecords,
    createRecord,
    updateRecord,
    deleteRecord,
    createUser,
    updateUser,
};
