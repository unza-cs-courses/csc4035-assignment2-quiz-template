/**
 * Assignment 2: Interactive Quiz Application
 * CSC4035 Web Programming and Technologies
 *
 * app.js - Main application logic
 *
 * This file contains the main quiz logic including:
 * - Quiz initialization
 * - Navigation between questions
 * - Answer tracking
 * - Score calculation
 */

// Quiz State
let currentQuestionIndex = 0;
let userAnswers = [];
let quizQuestions = [];
let score = 0;

/**
 * Initialize the application
 *
 * This function runs when the page loads.
 * Sets up event listeners and prepares the quiz.
 */
function initApp() {
    // Set up event listeners
    setupEventListeners();

    // Show start screen
    showScreen('start-screen');
}

/**
 * Set up event listeners for buttons
 *
 * TODO: Implement this function
 * Requirements:
 * - Add click listener to Start button
 * - Add click listener to Previous button
 * - Add click listener to Next button
 * - Add click listener to Submit button
 * - Add click listener to Restart button
 * - Add click listener to Retry button (error screen)
 */
function setupEventListeners() {
    // TODO: Implement event listeners
    // Example:
    // document.getElementById('start-btn').addEventListener('click', startQuiz);
    // document.getElementById('prev-btn').addEventListener('click', previousQuestion);
    // document.getElementById('next-btn').addEventListener('click', nextQuestion);
    // document.getElementById('submit-btn').addEventListener('click', submitQuiz);
    // document.getElementById('restart-btn').addEventListener('click', restartQuiz);
    // document.getElementById('retry-btn').addEventListener('click', startQuiz);

    console.log('TODO: Implement setupEventListeners()');
}

/**
 * Start the quiz
 *
 * TODO: Implement this function
 * Requirements:
 * - Show loading screen
 * - Load questions using loadQuestions()
 * - Reset quiz state (currentQuestionIndex, userAnswers, score)
 * - Initialize userAnswers array with -1 for each question
 * - Update question count on start screen
 * - Show first question
 * - Handle errors appropriately
 */
async function startQuiz() {
    // TODO: Implement this function
    // Example:
    // try {
    //     showScreen('loading-screen');
    //
    //     // Load questions
    //     quizQuestions = await loadQuestions();
    //
    //     // Reset state
    //     currentQuestionIndex = 0;
    //     score = 0;
    //     userAnswers = new Array(quizQuestions.length).fill(-1);
    //
    //     // Update UI
    //     updateQuestionCount(quizQuestions.length);
    //     showScreen('question-screen');
    //     displayCurrentQuestion();
    //
    // } catch (error) {
    //     showError('Failed to load quiz questions. Please try again.');
    // }

    throw new Error('startQuiz() not implemented');
}

/**
 * Display the current question
 *
 * TODO: Implement this function
 * Requirements:
 * - Get the current question
 * - Render the question using renderQuestion()
 * - Update progress using renderProgress()
 * - Update navigation buttons
 */
function displayCurrentQuestion() {
    // TODO: Implement this function
    // Example:
    // const question = quizQuestions[currentQuestionIndex];
    // const selectedAnswer = userAnswers[currentQuestionIndex];
    //
    // renderQuestion(question, selectedAnswer);
    // renderProgress(currentQuestionIndex + 1, quizQuestions.length);
    // updateNavigationButtons(
    //     currentQuestionIndex,
    //     quizQuestions.length,
    //     selectedAnswer !== -1
    // );

    throw new Error('displayCurrentQuestion() not implemented');
}

/**
 * Handle answer selection
 *
 * TODO: Implement this function
 * Requirements:
 * - Store the selected answer in userAnswers array
 * - Update the UI to show selection
 * - Enable the Next/Submit button
 *
 * @param {number} answerIndex - Index of the selected answer
 */
function selectAnswer(answerIndex) {
    // TODO: Implement this function
    // Example:
    // userAnswers[currentQuestionIndex] = answerIndex;
    //
    // // Update UI
    // const question = quizQuestions[currentQuestionIndex];
    // renderOptions(question.options, answerIndex);
    // updateNavigationButtons(
    //     currentQuestionIndex,
    //     quizQuestions.length,
    //     true
    // );

    throw new Error('selectAnswer() not implemented');
}

/**
 * Move to the next question
 *
 * TODO: Implement this function
 * Requirements:
 * - Increment currentQuestionIndex
 * - Display the new question
 * - Handle edge case (don't go past last question)
 */
function nextQuestion() {
    // TODO: Implement this function
    // Example:
    // if (currentQuestionIndex < quizQuestions.length - 1) {
    //     currentQuestionIndex++;
    //     displayCurrentQuestion();
    // }

    throw new Error('nextQuestion() not implemented');
}

/**
 * Move to the previous question
 *
 * TODO: Implement this function
 * Requirements:
 * - Decrement currentQuestionIndex
 * - Display the new question
 * - Handle edge case (don't go before first question)
 */
function previousQuestion() {
    // TODO: Implement this function
    // Example:
    // if (currentQuestionIndex > 0) {
    //     currentQuestionIndex--;
    //     displayCurrentQuestion();
    // }

    throw new Error('previousQuestion() not implemented');
}

/**
 * Submit the quiz and show results
 *
 * TODO: Implement this function
 * Requirements:
 * - Calculate the score
 * - Show results screen
 * - Display score and answer review
 */
function submitQuiz() {
    // TODO: Implement this function
    // Example:
    // // Calculate score
    // score = 0;
    // quizQuestions.forEach((question, index) => {
    //     if (userAnswers[index] === question.correctAnswer) {
    //         score++;
    //     }
    // });
    //
    // // Show results
    // renderResults(score, quizQuestions.length, userAnswers, quizQuestions);
    // showScreen('results-screen');

    throw new Error('submitQuiz() not implemented');
}

/**
 * Restart the quiz
 *
 * TODO: Implement this function
 * Requirements:
 * - Reset all state
 * - Show start screen OR start quiz directly
 */
function restartQuiz() {
    // TODO: Implement this function
    // Example:
    // currentQuestionIndex = 0;
    // score = 0;
    // userAnswers = [];
    // showScreen('start-screen');

    throw new Error('restartQuiz() not implemented');
}

/**
 * Calculate the current score
 *
 * @returns {number} Number of correct answers
 */
function calculateScore() {
    let correctCount = 0;
    quizQuestions.forEach((question, index) => {
        if (userAnswers[index] === question.correctAnswer) {
            correctCount++;
        }
    });
    return correctCount;
}

// Initialize the app when DOM is ready
document.addEventListener('DOMContentLoaded', initApp);

// Export functions for testing
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        initApp,
        startQuiz,
        nextQuestion,
        previousQuestion,
        selectAnswer,
        submitQuiz,
        restartQuiz,
        calculateScore
    };
}
