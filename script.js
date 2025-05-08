function handleLogin(event) {
    event.preventDefault();
    document.getElementById('loginContainer').style.display = 'none';
    document.getElementById('dashboardContainer').style.display = 'block';
    document.querySelector('.info').style.display = 'block'; // Mostrar informações bancárias
}

function logout() {
    document.getElementById('dashboardContainer').style.display = 'none';
    document.getElementById('loginContainer').style.display = 'block';
    document.querySelector('.info').style.display = 'none'; // Esconder informações bancárias
}
