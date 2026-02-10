/**
 * Assignment 2: Interactive Quiz Application
 * CSC4035 Web Programming and Technologies
 *
 * ui.js - User Interface rendering functions
 *
 * This file handles all DOM manipulation and UI updates.
 * Use these functions to render questions, options, and results.
 */

// DOM Element References
const startScreen = document.getElementById('start-screen');
const questionScreen = document.getElementById('question-screen');
const resultsScreen = document.getElementById('results-screen');
const loadingScreen = document.getElementById('loading-screen');
const errorScreen = document.getElementById('error-screen');

const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const progressFill = document.getElementById('progress-fill');
const progressText = document.getElementById('progress-text');

const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const submitBtn = document.getElementById('submit-btn');

/**
 * Show a specific screen and hide others
 *
 * @param {string} screenId - The ID of the screen to show
 */
function showScreen(screenId) {
    // Hide all screens
    const screens = [startScreen, questionScreen, resultsScreen, loadingScreen, errorScreen];
    screens.forEach(screen => {
        if (screen) screen.classList.add('hidden');
    });

    // Show the requested screen
    const screenToShow = document.getElementById(screenId);
    if (screenToShow) {
        screenToShow.classList.remove('hidden');
    }
}

/**
 * Render a question to the DOM
 *
 * TODO: Implement this function
 * Requirements:
 * - Display the question text
 * - Call renderOptions() to display answer options
 * - Use textContent for security (avoid innerHTML with user data)
 *
 * @param {Object} question - The question object to render
 * @param {number} selectedAnswer - Index of previously selected answer (-1 if none)
 */
function renderQuestion(question, selectedAnswer = -1) {
    // TODO: Implement this function
    // Example:
    // if (!question) return;
    //
    // // Set question text
    // questionText.textContent = question.question;
    //
    // // Render options
    // renderOptions(question.options, selectedAnswer);

    throw new Error('renderQuestion() not implemented');
}

/**
 * Render answer options
 *
 * TODO: Implement this function
 * Requirements:
 * - Create option elements dynamically using createElement
 * - Add click event listeners for selection
 * - Highlight the selected option if selectedIndex is provided
 * - Use event delegation or individual listeners
 *
 * @param {Array} options - Array of option strings
 * @param {number} selectedIndex - Index of currently selected option (-1 if none)
 */
function renderOptions(options, selectedIndex = -1) {
    // TODO: Implement this function
    // Example:
    // // Clear existing options
    // optionsContainer.innerHTML = '';
    //
    // // Create option elements
    // const optionLetters = ['A', 'B', 'C', 'D'];
    //
    // options.forEach((option, index) => {
    //     const optionElement = document.createElement('div');
    //     optionElement.className = 'option';
    //     if (index === selectedIndex) {
    //         optionElement.classList.add('selected');
    //     }
    //     optionElement.dataset.index = index;
    //
    //     optionElement.innerHTML = `
    //         <span class="option-letter">${optionLetters[index]}</span>
    //         <span class="option-text">${option}</span>
    //     `;
    //
    //     optionElement.addEventListener('click', () => selectAnswer(index));
    //     optionsContainer.appendChild(optionElement);
    // });

    throw new Error('renderOptions() not implemented');
}

/**
 * Render progress indicator
 *
 * TODO: Implement this function
 * Requirements:
 * - Update progress bar width
 * - Update progress text (e.g., "Question 3 of 10")
 *
 * @param {number} current - Current question number (1-based)
 * @param {number} total - Total number of questions
 */
function renderProgress(current, total) {
    // TODO: Implement this function
    // Example:
    // const percentage = (current / total) * 100;
    // progressFill.style.width = `${percentage}%`;
    // progressText.textContent = `Question ${current} of ${total}`;

    throw new Error('renderProgress() not implemented');
}

/**
 * Update navigation button states
 *
 * TODO: Implement this function
 * Requirements:
 * - Enable/disable Previous button based on current question
 * - Enable/disable Next button based on answer selection
 * - Show Submit button on last question
 *
 * @param {number} currentIndex - Current question index (0-based)
 * @param {number} totalQuestions - Total number of questions
 * @param {boolean} hasAnswer - Whether current question has an answer
 */
function updateNavigationButtons(currentIndex, totalQuestions, hasAnswer) {
    // TODO: Implement this function
    // Example:
    // // Previous button
    // prevBtn.disabled = currentIndex === 0;
    //
    // // Next/Submit button
    // const isLastQuestion = currentIndex === totalQuestions - 1;
    //
    // if (isLastQuestion) {
    //     nextBtn.classList.add('hidden');
    //     submitBtn.classList.remove('hidden');
    //     submitBtn.disabled = !hasAnswer;
    // } else {
    //     nextBtn.classList.remove('hidden');
    //     submitBtn.classList.add('hidden');
    //     nextBtn.disabled = !hasAnswer;
    // }

    throw new Error('updateNavigationButtons() not implemented');
}

/**
 * Render final results
 *
 * TODO: Implement this function
 * Requirements:
 * - Display score as percentage
 * - Display score as fraction (e.g., "7 out of 10")
 * - Show appropriate message based on performance
 * - Render answer review
 *
 * @param {number} score - Number of correct answers
 * @param {number} total - Total number of questions
 * @param {Array} userAnswers - Array of user's answers
 * @param {Array} questions - Array of question objects
 */
function renderResults(score, total, userAnswers, questions) {
    // TODO: Implement this function
    // Example:
    // const percentage = Math.round((score / total) * 100);
    //
    // // Update score display
    // document.getElementById('score-percentage').textContent = `${percentage}%`;
    // document.getElementById('score-text').textContent = `You scored ${score} out of ${total}`;
    //
    // // Set performance message
    // let message = '';
    // if (percentage >= 90) {
    //     message = 'Excellent! You really know your stuff!';
    // } else if (percentage >= 70) {
    //     message = 'Good job! Keep learning!';
    // } else if (percentage >= 50) {
    //     message = 'Not bad, but there\'s room for improvement.';
    // } else {
    //     message = 'Keep practicing! You\'ll get better.';
    // }
    // document.getElementById('score-message').textContent = message;
    //
    // // Render answer review
    // renderAnswerReview(userAnswers, questions);

    throw new Error('renderResults() not implemented');
}

/**
 * Render answer review section
 *
 * TODO: Implement this function
 * Requirements:
 * - Show each question with user's answer
 * - Indicate correct/incorrect answers
 * - Show the correct answer for wrong responses
 *
 * @param {Array} userAnswers - Array of user's answers
 * @param {Array} questions - Array of question objects
 */
function renderAnswerReview(userAnswers, questions) {
    // TODO: Implement this function
    // Example:
    // const reviewContainer = document.getElementById('review-container');
    // reviewContainer.innerHTML = '';
    //
    // questions.forEach((question, index) => {
    //     const userAnswer = userAnswers[index];
    //     const isCorrect = userAnswer === question.correctAnswer;
    //
    //     const reviewItem = document.createElement('div');
    //     reviewItem.className = `review-item ${isCorrect ? 'correct' : 'incorrect'}`;
    //
    //     reviewItem.innerHTML = `
    //         <div class="review-question">${index + 1}. ${question.question}</div>
    //         <div class="review-answer">
    //             Your answer: <span class="${isCorrect ? 'correct-answer' : 'your-answer'}">
    //                 ${question.options[userAnswer] || 'Not answered'}
    //             </span>
    //             ${!isCorrect ? `<br>Correct answer: <span class="correct-answer">${question.options[question.correctAnswer]}</span>` : ''}
    //         </div>
    //     `;
    //
    //     reviewContainer.appendChild(reviewItem);
    // });

    throw new Error('renderAnswerReview() not implemented');
}

/**
 * Show error message
 *
 * @param {string} message - Error message to display
 */
function showError(message) {
    const errorMessage = document.getElementById('error-message');
    if (errorMessage) {
        errorMessage.textContent = message;
    }
    showScreen('error-screen');
}

/**
 * Update question count on start screen
 *
 * @param {number} count - Number of questions
 */
function updateQuestionCount(count) {
    const countElement = document.getElementById('question-count');
    if (countElement) {
        countElement.textContent = count;
    }
}

// Export functions for use in other files (when using modules)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        showScreen,
        renderQuestion,
        renderOptions,
        renderProgress,
        updateNavigationButtons,
        renderResults,
        renderAnswerReview,
        showError,
        updateQuestionCount
    };
}
