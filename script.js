const output = document.getElementById('output');

// Expanded list of hacker-style messages
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
    'Backdoor installation...',
    'Keylogger activated...',
    'Password hash extraction...',
    'Network traffic monitoring...',
    'Privilege escalation...',
    'Zero‑day exploit deployed...',
    'Remote shell established...',
    'Memory dump analysis...',
    'Credential harvesting...',
    'DNS spoofing active...',
    'Session hijacking...',
    'Brute force attack started...',
    'SSL certificate forged...',
    'Phishing module activated...',
    'Botnet command received...',
    'DDoS attack initiated...',
    'Spoofed IP address...',
    'Packet injection...',
    'Traffic rerouting...',
    'Honey pot detected...',
    'Antivirus disabled...'
];

let simulationActive = false;
let simulationInterval;

// Function to add a message to the console
function addMessage(message) {
    const timestamp = new Date().toLocaleTimeString();
    output.innerHTML += `[${timestamp}] ${message}\n`;
    output.scrollTop = output.scrollHeight; // Auto‑scroll to bottom
}

// Function for random message selection and display
function startSimulation() {
    if (simulationActive) return;

    simulationActive = true;

    function simulateHacking() {
        const randomMessage = hackerMessages[Math.floor(Math.random() * hackerMessages.length)];
        addMessage(randomMessage);

        // Random interval between 100 and 500 ms
        const nextDelay = Math.random() * 400 + 100;
        simulationInterval = setTimeout(simulateHacking, nextDelay);
    }

    simulateHacking();
}

// Auto‑start simulation on page load
window.onload = function() {
    // Enter fullscreen mode (if supported)
    const requestFullscreen =
        document.documentElement.requestFullscreen ||
        document.documentElement.webkitRequestFullscreen ||
        document.documentElement.mozRequestFullScreen ||
        document.documentElement.msRequestFullscreen;

    if (requestFullscreen) {
        requestFullscreen.call(document.documentElement);
    }

    // Add welcome message
    addMessage('Welcome to the Hacker Console!');
    addMessage('Hacking simulation started automatically...');
    addMessage('Initializing system breach...');

    // Start the simulation
    startSimulation();
};

// Optional: Stop simulation on ESC key (fullscreen exit)
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        if (simulationActive) {
            simulationActive = false;
            clearTimeout(simulationInterval);
            addMessage('Simulation paused (fullscreen exited).');
        }
    }
});
