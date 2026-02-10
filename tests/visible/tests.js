/**
 * Assignment 2: Interactive Quiz Application - Visible Test Suite
 * CSC4035 Web Programming and Technologies
 *
 * These tests run on every push via GitHub Actions.
 * Additional hidden tests will run after the deadline.
 *
 * DO NOT MODIFY THIS FILE
 * Run with: npm test
 */

const fs = require('fs');
const path = require('path');

// Test counter
let passed = 0;
let failed = 0;

function test(name, fn) {
    try {
        fn();
        console.log(`  [PASS] ${name}`);
        passed++;
    } catch (e) {
        console.log(`  [FAIL] ${name}`);
        console.log(`         Error: ${e.message}`);
        failed++;
    }
}

function assertEqual(actual, expected, message = '') {
    if (actual !== expected) {
        throw new Error(`Expected ${expected}, got ${actual}. ${message}`);
    }
}

function assertTrue(value, message = '') {
    if (!value) {
        throw new Error(`Expected true, got ${value}. ${message}`);
    }
}

function assertExists(filePath, message = '') {
    if (!fs.existsSync(filePath)) {
        throw new Error(`File not found: ${filePath}. ${message}`);
    }
}

console.log('\n========================================');
console.log('Assignment 2: Quiz App - Visible Tests');
console.log('========================================\n');

// File Structure Tests
console.log('--- File Structure Tests ---');

test('index.html exists', () => {
    assertExists('index.html');
});

test('styles.css exists', () => {
    assertExists('styles.css');
});

test('js/app.js exists', () => {
    assertExists('js/app.js');
});

test('js/questions.js exists', () => {
    assertExists('js/questions.js');
});

test('js/ui.js exists', () => {
    assertExists('js/ui.js');
});

test('data/questions.json exists', () => {
    assertExists('data/questions.json');
});

// Questions.json Tests
console.log('\n--- Questions Data Tests ---');

let questionsData;
try {
    const questionsContent = fs.readFileSync('data/questions.json', 'utf8');
    questionsData = JSON.parse(questionsContent);
} catch (e) {
    console.log('  [FAIL] Could not parse questions.json');
    console.log(`         Error: ${e.message}`);
    failed++;
}

if (questionsData) {
    test('questions.json has questions array', () => {
        assertTrue(Array.isArray(questionsData.questions), 'questions should be an array');
    });

    test('At least 10 questions present', () => {
        assertTrue(questionsData.questions.length >= 10,
            `Found ${questionsData.questions.length} questions, need at least 10`);
    });

    test('Questions have required fields', () => {
        const requiredFields = ['id', 'question', 'options', 'correctAnswer'];
        const firstQuestion = questionsData.questions[0];

        requiredFields.forEach(field => {
            assertTrue(firstQuestion.hasOwnProperty(field),
                `Question missing field: ${field}`);
        });
    });

    test('Each question has 4 options', () => {
        questionsData.questions.forEach((q, i) => {
            assertTrue(q.options && q.options.length === 4,
                `Question ${i + 1} should have exactly 4 options`);
        });
    });

    test('correctAnswer is valid index (0-3)', () => {
        questionsData.questions.forEach((q, i) => {
            assertTrue(q.correctAnswer >= 0 && q.correctAnswer <= 3,
                `Question ${i + 1} has invalid correctAnswer: ${q.correctAnswer}`);
        });
    });

    test('All questions have unique IDs', () => {
        const ids = questionsData.questions.map(q => q.id);
        const uniqueIds = new Set(ids);
        assertEqual(ids.length, uniqueIds.size, 'Duplicate question IDs found');
    });
}

// HTML Structure Tests
console.log('\n--- HTML Structure Tests ---');

let htmlContent;
try {
    htmlContent = fs.readFileSync('index.html', 'utf8');
} catch (e) {
    console.log('  [FAIL] Could not read index.html');
    failed++;
}

if (htmlContent) {
    test('HTML has DOCTYPE declaration', () => {
        assertTrue(htmlContent.includes('<!DOCTYPE html>'));
    });

    test('HTML links to styles.css', () => {
        assertTrue(htmlContent.includes('styles.css'));
    });

    test('HTML includes js/questions.js', () => {
        assertTrue(htmlContent.includes('js/questions.js'));
    });

    test('HTML includes js/ui.js', () => {
        assertTrue(htmlContent.includes('js/ui.js'));
    });

    test('HTML includes js/app.js', () => {
        assertTrue(htmlContent.includes('js/app.js'));
    });

    test('HTML has start button', () => {
        assertTrue(htmlContent.includes('start-btn') || htmlContent.includes('start-button'));
    });

    test('HTML has question container', () => {
        assertTrue(htmlContent.includes('question'));
    });

    test('HTML has options container', () => {
        assertTrue(htmlContent.includes('options'));
    });

    test('HTML has results section', () => {
        assertTrue(htmlContent.includes('result'));
    });
}

// JavaScript Function Tests
console.log('\n--- JavaScript Function Tests ---');

let questionsJs, uiJs, appJs;
try {
    questionsJs = fs.readFileSync('js/questions.js', 'utf8');
    uiJs = fs.readFileSync('js/ui.js', 'utf8');
    appJs = fs.readFileSync('js/app.js', 'utf8');
} catch (e) {
    console.log('  [WARN] Could not read all JavaScript files');
}

if (questionsJs) {
    test('questions.js has loadQuestions function', () => {
        assertTrue(questionsJs.includes('loadQuestions') ||
                   questionsJs.includes('function loadQuestions'));
    });

    test('questions.js has getQuestion function', () => {
        assertTrue(questionsJs.includes('getQuestion') ||
                   questionsJs.includes('function getQuestion'));
    });

    test('questions.js has checkAnswer function', () => {
        assertTrue(questionsJs.includes('checkAnswer') ||
                   questionsJs.includes('function checkAnswer'));
    });

    test('questions.js uses async/await', () => {
        assertTrue(questionsJs.includes('async') && questionsJs.includes('await'));
    });
}

if (uiJs) {
    test('ui.js has renderQuestion function', () => {
        assertTrue(uiJs.includes('renderQuestion') ||
                   uiJs.includes('function renderQuestion'));
    });

    test('ui.js has renderOptions function', () => {
        assertTrue(uiJs.includes('renderOptions') ||
                   uiJs.includes('function renderOptions'));
    });

    test('ui.js has renderProgress function', () => {
        assertTrue(uiJs.includes('renderProgress') ||
                   uiJs.includes('function renderProgress'));
    });

    test('ui.js has renderResults function', () => {
        assertTrue(uiJs.includes('renderResults') ||
                   uiJs.includes('function renderResults'));
    });
}

if (appJs) {
    test('app.js has startQuiz function', () => {
        assertTrue(appJs.includes('startQuiz') ||
                   appJs.includes('function startQuiz'));
    });

    test('app.js has nextQuestion function', () => {
        assertTrue(appJs.includes('nextQuestion') ||
                   appJs.includes('function nextQuestion'));
    });

    test('app.js has previousQuestion function', () => {
        assertTrue(appJs.includes('previousQuestion') ||
                   appJs.includes('function previousQuestion'));
    });

    test('app.js has selectAnswer function', () => {
        assertTrue(appJs.includes('selectAnswer') ||
                   appJs.includes('function selectAnswer'));
    });

    test('app.js has submitQuiz function', () => {
        assertTrue(appJs.includes('submitQuiz') ||
                   appJs.includes('function submitQuiz'));
    });

    test('app.js uses addEventListener', () => {
        assertTrue(appJs.includes('addEventListener'));
    });
}

// ES6+ Syntax Tests
console.log('\n--- ES6+ Syntax Tests ---');

const allJs = (questionsJs || '') + (uiJs || '') + (appJs || '');

test('Uses const or let (not just var)', () => {
    assertTrue(allJs.includes('const ') || allJs.includes('let '));
});

test('Uses arrow functions', () => {
    assertTrue(allJs.includes('=>'));
});

test('Uses template literals', () => {
    assertTrue(allJs.includes('`'));
});

// Summary
const total = passed + failed;
const score = total > 0 ? Math.round((passed / total) * 100) : 0;

console.log('\n========================================');
console.log(`Results: ${passed} passed, ${failed} failed`);
console.log(`Score: ${score}%`);
console.log('========================================\n');

console.log('Note: This is your visible test score (40% of final grade).');
console.log('Hidden tests will check actual functionality after the deadline.\n');

// Exit with error if any tests failed
if (failed > 0) {
    process.exit(1);
}
