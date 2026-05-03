const keywords = ['football', 'weather', 'AI', 'chess', 'pawn', 'knight', 'rook', 'bishop', 'queen', 'king', 'checkmate'];
const genericPrompts = [
    'Tell me more!',
    'That\'s fascinating!',
    'Can you elaborate on that?',
    'Interesting, what else?',
    'I\'d love to hear more about that!'
];

const people = [
    { name: 'Martin', image: 'ChessBot/Martin.png' },
    { name: 'Magnus', image: 'ChessBot/Magnus.png' },
    { name: 'Hikaru', image: 'ChessBot/Hikaru.png' },
    { name: 'GothamChess', image: 'ChessBot/Daniel.png' }
];

let currentBot;

function getRandomPerson() {
    return people[Math.floor(Math.random() * people.length)];
}

function displayBotGreeting() {
    currentBot = getRandomPerson();
    const botGreetingDiv = document.getElementById('botGreeting');
    const botImage = document.createElement('img');
    botImage.src = currentBot.image;
    botImage.alt = currentBot.name; // Adding alt text for accessibility
    const botMessage = document.createElement('p');
    botMessage.textContent = `‎ ‎ Hi, I'm ${currentBot.name}, and I'll be your ChessBot today.`;
    botGreetingDiv.appendChild(botImage);
    botGreetingDiv.appendChild(botMessage);
}

function processInput(input) {
    let response = '';
    input = input.toLowerCase();

    if (keywords.some(keyword => input.includes(keyword))) {
        response = getKeywordResponse(input);
    } else {
        response = genericPrompts[Math.floor(Math.random() * genericPrompts.length)];
    }

    displayTypingEffect(response);
}

function getKeywordResponse(input) {
    if (input.includes('chess')) {
        return 'Chess is a wonderful game of strategy and skill. Have you played before?';
    } else if (input.includes('pawn')) {
        return 'Pawns are the most numerous pieces in chess, but don\'t underestimate them!';
    } else if (input.includes('knight')) {
        return 'Knights move in an L-shape and are excellent for tricky maneuvers.';
    } else if (input.includes('rook')) {
        return 'Rooks move horizontally or vertically across the board. They are very powerful!';
    } else if (input.includes('bishop')) {
        return 'Bishops move diagonally and can control long stretches of the board.';
    } else if (input.includes('queen')) {
        return 'The Queen is the most powerful piece, able to move in any direction.';
    } else if (input.includes('king')) {
        return 'The King is the most important piece. Protect him at all costs!';
    } else if (input.includes('checkmate')) {
        return 'Checkmate ends the game by trapping the opponent\'s king.';
    } else {
        return 'That\'s interesting! Tell me more!';
    }
}

function displayTypingEffect(text) {
    const chatBox = document.getElementById('chatBox');
    const botMessage = document.createElement('p');
    botMessage.className = 'chatbot';
    chatBox.appendChild(botMessage);

    let i = 0;
    const typingSpeed = 20;

    function type() {
        if (i < text.length) {
            botMessage.textContent += text.charAt(i);
            i++;
            setTimeout(type, typingSpeed);
        } else {
            chatBox.scrollTop = chatBox.scrollHeight;
        }
    }

    type();
}

function displayResponse(response) {
    const chatBox = document.getElementById('chatBox');
    const botMessage = document.createElement('p');
    botMessage.className = 'chatbot';
    botMessage.textContent = response;
    chatBox.appendChild(botMessage);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function handleUserInput() {
    const userInput = document.getElementById('userInput').value.trim();
    if (userInput === '') return;

    const userMessage = document.createElement('p');
    userMessage.className = 'user';
    userMessage.textContent = userInput;
    document.getElementById('chatBox').appendChild(userMessage);

    processInput(userInput);
    document.getElementById('userInput').value = '';
    document.getElementById('userInput').focus();
}

document.addEventListener('DOMContentLoaded', displayBotGreeting);
