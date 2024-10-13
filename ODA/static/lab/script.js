function startExperiment() {
    document.getElementById('water').querySelector('img').style.transform = 'scale(1.2)';
    document.getElementById('experiment-result').innerText = 'A água aquece e evapora...';

    setTimeout(() => {
        document.getElementById('heat').querySelector('img').style.transform = 'scale(1.2)';
        document.getElementById('experiment-result').innerText = 'O calor do sol aquece a água...';
    }, 4000);

    setTimeout(() => {
        document.getElementById('evaporation').querySelector('img').style.transform = 'scale(1.2)';
        document.getElementById('experiment-result').innerText = 'A água evapora e forma nuvens...';
    }, 8000);

    setTimeout(() => {
        document.getElementById('condensation').querySelector('img').style.transform = 'scale(1.2)';
        document.getElementById('experiment-result').innerText = 'A condensação faz chover, completando o ciclo!';
    }, 12000);

    setTimeout(() => {
        document.getElementById('experiment-result').innerText = 'Experimento Concluído!';
        resetImages();
    }, 16000);
}

function resetImages() {
    const elements = document.querySelectorAll('.element img');
    elements.forEach(element => {
        element.style.transform = 'scale(1)';
    });
}

// Puzzle

let currentPuzzle = 0;
const puzzles = [
    { sequence: "2, 4, 6, 8, ?", correctAnswer: 0, options: [10, 12, 14] },
    { sequence: "3, 6, 9, 12, ?", correctAnswer: 0, options: [15, 18, 21] },
    { sequence: "5, 10, 15, 20, ?", correctAnswer: 1, options: [20, 25, 30] },
];

function loadPuzzle() {
    document.getElementById('sequence').innerText = puzzles[currentPuzzle].sequence;
    const buttons = document.querySelectorAll('.options button');
    buttons.forEach((button, index) => {
        button.innerText = puzzles[currentPuzzle].options[index];
    });
    document.getElementById('feedback').innerText = '';
    document.getElementById('next-puzzle').style.display = 'none';
}

function checkAnswer(selectedAnswer) {
    const correctAnswer = puzzles[currentPuzzle].correctAnswer;
    if (selectedAnswer === correctAnswer) {
        document.getElementById('feedback').innerText = 'Correto!';
        document.getElementById('feedback').style.color = '#388e3c';
        document.getElementById('next-puzzle').style.display = 'block';
    } else {
        document.getElementById('feedback').innerText = 'Tente novamente!';
        document.getElementById('feedback').style.color = '#d32f2f';
    }
}

function nextPuzzle() {
    currentPuzzle++;
    if (currentPuzzle < puzzles.length) {
        loadPuzzle();
    } else {
        document.getElementById('sequence').innerText = 'Parabéns, você completou todos os desafios!';
        document.querySelector('.options').style.display = 'none';
        document.getElementById('next-puzzle').style.display = 'none';
    }
}

loadPuzzle();
