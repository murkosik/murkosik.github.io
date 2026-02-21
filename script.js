// Создаём эффект падающих символов (Матрица)
function createMatrixRain() {
    const matrixContainer = document.createElement('div');
    matrixContainer.className = 'matrix-rain';
    document.body.appendChild(matrixContainer);

    const chars = '01'; // Символы для эффекта
    const charCount = 150;

    for (let i = 0; i < charCount; i++) {
        const char = document.createElement('div');
        char.className = 'matrix-char';
        char.textContent = chars[Math.floor(Math.random() * chars.length)];
        char.style.left = Math.random() * 100 + 'vw';
        char.style.animationDelay = Math.random() * 5 + 's';
        matrixContainer.appendChild(char);
    }
}

// Функция для вывода текста в терминал
function printToTerminal(text) {
    const output = document.getElementById('output');
    const line = document.createElement('div');
    line.textContent = text;
    output.appendChild(line);
    output.scrollTop = output.scrollHeight;
}

// Функция, запускающая «хакерскую последовательность»
function initiateHackSequence() {
    printToTerminal('[SYSTEM] HACK SEQUENCE INITIATED...');
    printToTerminal('[SCAN] Scanning network...');

    // Имитация сканирования
    setTimeout(() => printToTerminal('[SCAN] Target found: SECURE_SERVER_01'), 1000);
    setTimeout(() => printToTerminal('[ACCESS] Attempting root access...'), 2000);

    // Анимация загрузки
    const loadingChars = ['|', '/', '-', '\\'];
    let loadingIndex = 0;
    const loadingInterval = setInterval(() => {
        printToTerminal(`[LOAD] Initializing protocols... ${loadingChars[loadingIndex]}`);
        loadingIndex = (loadingIndex + 1) % loadingChars.length;
    }, 200);

    // Завершение загрузки
    setTimeout(() => {
        clearInterval(loadingInterval);
        printToTerminal('[SUCCESS] Root access granted!');
        printToTerminal('[DATA] Extracting confidential information...');
    }, 3000);

    // Вывод данных в консоль браузера
    console.log('%cHACKER CONSOLE ACTIVATED', 'color: red; font-weight: bold; font-size: 18px;');
    console.log('Target: SECURE_SERVER_01');
    console.table([
        { Parameter: 'IP Address', Value: '192.168.1.100' },
        { Parameter: 'OS', Value: 'Linux Kernel 5.4' },
        { Parameter: 'Status', Value: 'Online' }
    ]);

    // Множество случайных сообщений в консоли
    const hackMessages = [
        'Decrypting firewall...',
        'Bypassing security protocols...',
        'Accessing database...',
        'Downloading files...',
        'Covering tracks...'
    ];

    hackMessages.forEach((msg, index) => {
        setTimeout(() => console.log(`[HACK] ${msg}`), index * 800);
    });

    setTimeout(() => {
        console.log('%cHACK COMPLETE!', 'color: green; font-weight: bold; font-size: 16px;');
        console.warn('All data extracted successfully.');
    }, hackMessages.length * 800 + 500);
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    createMatrixRain();
    printToTerminal('HACKER TERMINAL ONLINE');
    printToTerminal('Type HELP for available commands');

    // Обработчик кнопки
    document.getElementById('hackButton').addEventListener('click', initiateHackSequence);
});
      
