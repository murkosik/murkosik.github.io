const output = document.getElementById('output');

// Список сообщений
const hackerMessages = [
    'Virus initialization...',
    'System breach initiated...',
    'Connecting to server...',
    'Port scanning in progress...',
    'Vulnerability detected...',
    'Exploit loading...',
    'Access granted!',
    'Data encryption...',
    'Log deletion...',
    'Operation complete...',
    'System compromised!',
    'Malicious code execution...',
    'Control hijack...',
    'Data copying...',
    'Trace masking...',
    'Firewall bypass attempt...',
    'Root access acquired!',
    'Database dumping...',
    'Security protocols disabled...',
    'Backdoor installation...'
];

let simulationInterval;

// Функция добавления сообщения
function addMessage(message) {
    const timestamp = new Date().toLocaleTimeString();
    output.innerHTML += `[${timestamp}] ${message}\n`;
    // Прокрутка вниз
    setTimeout(() => {
        output.scrollTop = output.scrollHeight;
    }, 0);
}

// Запуск симуляции
function startSimulation() {
    // Случайное сообщение
    const randomMessage = hackerMessages[Math.floor(Math.random() * hackerMessages.length)];
    addMessage(randomMessage);

    // Следующий вызов через случайное время (100–500 мс)
    simulationInterval = setTimeout(startSimulation, Math.random() * 400 + 100);
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    // Приветственное сообщение
    addMessage('Welcome to the Hacker Console!');
    addMessage('Automatic hacking simulation started...');
    addMessage('Initializing system breach...');

    // Запуск симуляции
    startSimulation();
});

// Остановка при закрытии страницы
window.addEventListener('beforeunload', function() {
    clearTimeout(simulationInterval);
});
