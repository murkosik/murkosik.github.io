class HackerKeyboard {
    constructor() {
        this.typedText = '';
        this.isShiftActive = false;
        this.codeMode = false;
        this.matrixActive = false;
        this.currentTheme = 'hacker';

        this.init();
    }

    init() {
        this.bindEvents();
        this.showWelcomeMessage();
        // Добавляем CSS‑переменные для тем
        this.setupThemeVariables();
    }

    setupThemeVariables() {
        const root = document.documentElement;
        root.style.setProperty('--bg-color', '#000');
        root.style.setProperty('--text-color', '#0f0');
        root.style.setProperty('--key-bg', '#111');
        root.style.setProperty('--key-border', '#0f0');
    }

    bindEvents() {
        document.querySelectorAll('.key').forEach(key => {
            key.addEventListener('click', (e) => this.handleKeyPress(e.target));
        });
    }

    handleKeyPress(keyElement) {
        const keyText = keyElement.textContent;

        switch (keyText) {
            case 'BACKSPACE':
                this.typedText = this.typedText.slice(0, -1);
                break;
            case 'SPACE':
                this.typedText += ' ';
                break;
            case 'ENTER':
                this.typedText += '\n';
                break;
            case 'SHIFT':
                this.isShiftActive = !this.isShiftActive;
                keyElement.style.background = this.isShiftActive ? '#224422' : '#111';
                break;
            case 'CODE MODE':
                this.toggleCodeMode();
                break;
            case 'MATRIX':
                this.toggleMatrixEffect();
                break;
            case 'SCAN':
                this.simulateScan();
                break;
            case 'HACK':
                this.initiateHack();
                break;
            case 'CLEAR':
                this.clearText();
                break;
            case 'THEME':
                this.changeTheme();
                break;
            default:
                if (this.codeMode) {
                    this.typedText += this.getRandomCodeChar();
                } else {
                    this.typedText += keyText;
                }
        }

        this.updateDisplay();
        this.playKeySound();
    }

    updateDisplay() {
        const display = document.getElementById('typed-text');
        display.textContent = this.typedText;
        display.scrollTop = display.scrollHeight;
    }

    playKeySound() {
        // Создаём короткий звуковой эффект нажатия клавиши
        const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioCtx.createOscillator();
        const gainNode = audioCtx.createGain();

        oscillator.type = 'square';
        oscillator.frequency.setValueAtTime(800, audioCtx.currentTime);
        gainNode.gain.setValueAtTime(0.02, audioCtx.currentTime);

        oscillator.connect(gainNode);
        gainNode.connect(audioCtx.destination);

        oscillator.start();
        oscillator.stop(audioCtx.currentTime + 0.05);
    }

    showWelcomeMessage() {
        setTimeout(() => {
            this.typedText = 'HACKER KEYBOARD v1.0\nType HELP for commands\n> ';
            this.updateDisplay();
        }, 500);
    }

    toggleCodeMode() {
        this.codeMode = !this.codeMode;
        const status = this.codeMode ? 'ON' : 'OFF';
        this.typedText += `\n[CODE MODE: ${status}]\n> `;
        this.updateDisplay();
    }

    getRandomCodeChar() {
        const chars = '0123456789ABCDEF';
        return chars[Math.floor(Math.random() * chars.length)];
    }

    toggleMatrixEffect() {
        if (this.matrixActive) {
            document.querySelector('.matrix-effect')?.remove();
            this.matrixActive = false;
            this.typedText += '\n[MATRIX EFFECT: OFF]\n> ';
        } else {
            this.createMatrixRain();
            this.matrixActive = true;
            this.typedText += '\n[MATRIX EFFECT: ACTIVATED]\n> ';
        }
        this.updateDisplay();
    }

    createMatrixRain() {
        const matrixContainer = document.createElement('div');
        matrixContainer.className = 'matrix-effect';
        document.body.appendChild(matrixContainer);

        const chars = '01';
        const charCount = 100;

        for (let i = 0; i < charCount; i++) {
            const char = document.createElement('div');
            char.className = 'matrix-char';
            char.textContent = chars[Math.floor(Math.random() * chars.length)];
            char.style.left = Math.random() * 100 + 'vw';
            char.style.top = Math.random() * 100 + 'vh';
            char.style.fontSize = (Math.random() * 10 + 10) + 'px';
            char.style.animationDelay = Math.random() * 5 + 's';
            matrixContainer.appendChild(char);
        }
    }

    simulateScan() {
        this.typedText += '\n[SCAN] Starting network scan...\n';
        this.updateDisplay();

        const targets = ['Router', 'Server-1', 'Database', 'Firewall', 'Workstation'];
        targets.forEach((target, index) => {
            setTimeout(() => {
                const status = Math.random() > 0.3 ? 'ONLINE' : 'OFFLINE';
                this.typedText += `[SCAN] ${target}: ${status}\n`;
                this.updateDisplay();
            }, (index + 1) * 800);
        });

        setTimeout(() => {
            this.typedText += '[SCAN] Scan completed. Found 3 active targets.\n> ';
            this.updateDisplay();
        }, targets.length * 800 + 500);
    }

    initiateHack() {
        this.typedText += '\n[HACK] Initiating hack sequence...\n';
        this.updateDisplay();

        const phases = [
            'Bypassing firewall...',
            'Decrypting protocols...',
            'Accessing database...',
            'Extracting data...',
            'Covering tracks...'
        ];

        phases.forEach((phase, index) => {
            setTimeout(() => {
                this.typedText += `[HACK] ${phase}\n`;
                this.updateDisplay();
            }, (index + 1) * 1200);
        });

        setTimeout(() => {
            this.typedText += '[HACK] Success! Data extracted.\n> ';
            this.updateDisplay();
            this.showHackResults();
        }, phases.length * 1200 + 800);
    }

    showHackResults() {
        const results = [
            'Username: admin',
            'Password: supersecret123',
            'IP: 192.168.1.100',
            'Port: 22',
            'OS: Linux Kernel 5.4'
        ];

        results.forEach((result, index) => {
            setTimeout(() => {
                this.typedText += `${result}\n`;
                this.updateDisplay();
            }, (index + 1) * 600);
        });
    }

    clearText() {
        this.typedText = '> ';
        this.updateDisplay();
    }

        changeTheme() {
        const themes = ['hacker', 'dark', 'matrix', 'cyber'];
        const currentIndex = themes.indexOf(this.currentTheme);
        const nextIndex = (currentIndex + 1) % themes.length;
        this.currentTheme = themes[nextIndex];

        this.applyThemeStyles();
        this.typedText += `\n[THEME: ${this.currentTheme.toUpperCase()}]\n> `;
        this.updateDisplay();
    }

    applyThemeStyles() {
        const root = document.documentElement;

        switch (this.currentTheme) {
            case 'hacker':
                root.style.setProperty('--bg-color', '#000');
                root.style.setProperty('--text-color', '#0f0');
                root.style.setProperty('--key-bg', '#111');
                root.style.setProperty('--key-border', '#0f0');
                break;
            case 'dark':
                root.style.setProperty('--bg-color', '#121212');
                root.style.setProperty('--text-color', '#e0e0e0');
                root.style.setProperty('--key-bg', '#2d2d2d');
                root.style.setProperty('--key-border', '#404040');
                break;
            case 'matrix':
                root.style.setProperty('--bg-color', '#000');
                root.style.setProperty('--text-color', '#0f0');
                root.style.setProperty('--key-bg', '#020');
                root.style.setProperty('--key-border', '#0f0');
                break;
            case 'cyber':
                root.style.setProperty('--bg-color', '#0a0a1a');
                root.style.setProperty('--text-color', '#00f');
                root.style.setProperty('--key-bg', '#1a1a2a');
                root.style.setProperty('--key-border', '#00f');
                break;
            default:
                // Резервный вариант — хакерская тема
                root.style.setProperty('--bg-color', '#000');
                root.style.setProperty('--text-color', '#0f0');
                root.style.setProperty('--key-bg', '#111');
                root.style.setProperty('--key-border', '#0f0');
        }

        // Обновляем стили интерфейса
        document.body.style.backgroundColor = 'var(--bg-color)';
        document.body.style.color = 'var(--text-color)';

        document.querySelectorAll('.key').forEach(key => {
            key.style.background = 'var(--key-bg)';
            key.style.borderColor = 'var(--key-border)';
        });

        document.querySelector('.display').style.borderColor = 'var(--key-border)';
    }

    // Дополнительная функция: обработка команд через ввод
    processCommand(command) {
        command = command.toLowerCase().trim();

        switch (command) {
            case 'help':
                this.typedText += `
Available commands:
- help: show this message
- clear: clear the screen
- theme: change theme
- matrix: toggle matrix effect
- scan: simulate network scan
- hack: initiate hack sequence
- code: toggle code mode
> `;
                break;
            case 'clear':
                this.clearText();
                break;
            case 'theme':
                this.changeTheme();
                break;
            case 'matrix':
                this.toggleMatrixEffect();
                break;
            case 'scan':
                this.simulateScan();
                break;
            case 'hack':
                this.initiateHack();
                break;
            case 'code':
                this.toggleCodeMode();
                break;
            default:
                this.typedText += `\nUnknown command: ${command}\nType 'help' for available commands\n> `;
        }
        this.updateDisplay();
    }

    // Функция для обработки ввода с физической клавиатуры (если доступно)
    bindPhysicalKeyboard() {
        document.addEventListener('keydown', (e) => {
            // Игнорируем, если фокус на другом элементе
            if (document.activeElement.tagName === 'INPUT') return;

            const key = e.key.toUpperCase();
            const specialKeys = {
                'Backspace': 'BACKSPACE',
                'Enter': 'ENTER',
                ' ': 'SPACE'
            };

            const targetKey = specialKeys[key] || key;
            const keyElement = document.querySelector(`.key:contains('${targetKey}')`);

            if (keyElement) {
                keyElement.click();
                e.preventDefault();
            }
        });
    }
}

// Инициализация клавиатуры при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    const hackerKeyboard = new HackerKeyboard();
    hackerKeyboard.bindPhysicalKeyboard();
});
