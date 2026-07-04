
const page = document.getElementById("page");

function showDashboard() {
    page.innerHTML = `
        <h2>Dashboard</h2>

        <p>Welcome to Mine Admin.</p>
    `;
}

function showModels() {
    page.innerHTML = `
        <h2>Models</h2>

        <p>Loading models...</p>
    `;
}

function showDatabase() {
    page.innerHTML = `
        <h2>Database</h2>

        <p>Select a model.</p>
    `;
}

function showUsers() {
    page.innerHTML = `
        <h2>Users</h2>

        <p>Loading users...</p>
    `;
}

function showSettings() {
    page.innerHTML = `
        <h2>Settings</h2>

        <p>Mine Admin v0.1.0</p>
    `;
}

document.querySelectorAll("#sidebar button").forEach(button => {
    button.addEventListener("click", () => {
        switch (button.dataset.page) {
            case "dashboard":
                showDashboard();
                break;

            case "models":
                showModels();
                break;

            case "database":
                showDatabase();
                break;

            case "users":
                showUsers();
                break;

            case "settings":
                showSettings();
                break;
        }
    });
});

// Pagina iniziale
showDashboard();
