/**
 * Assignment 2: Interactive Quiz Application
 * CSC4035 Web Programming and Technologies
 *
 * questions.js - Question loading and management
 *
 * This file handles loading questions from the JSON file
 * and provides functions to access and validate questions.
 */

// Store loaded questions
let questions = [];

/**
 * Load questions from the JSON file
 *
 * TODO: Implement this function
 * Requirements:
 * - Use fetch API with async/await
 * - Load questions from 'data/questions.json'
 * - Store questions in the `questions` array
 * - Handle errors appropriately
 * - Return the questions array
 *
 * @returns {Promise<Array>} Array of question objects
 * @throws {Error} If questions cannot be loaded
 */
async function loadQuestions() {
    // TODO: Implement question loading
    // Example structure:
    // try {
    //     const response = await fetch('data/questions.json');
    //     if (!response.ok) {
    //         throw new Error('Failed to load questions');
    //     }
    //     const data = await response.json();
    //     questions = data.questions;
    //     return questions;
    // } catch (error) {
    //     console.error('Error loading questions:', error);
    //     throw error;
    // }

    throw new Error('loadQuestions() not implemented');
}

/**
 * Get a specific question by index
 *
 * TODO: Implement this function
 * Requirements:
 * - Return the question at the given index
 * - Return null if index is out of bounds
 *
 * @param {number} index - The index of the question (0-based)
 * @returns {Object|null} The question object or null
 */
function getQuestion(index) {
    // TODO: Implement this function
    // Example:
    // if (index >= 0 && index < questions.length) {
    //     return questions[index];
    // }
    // return null;

    throw new Error('getQuestion() not implemented');
}

/**
 * Check if an answer is correct
 *
 * TODO: Implement this function
 * Requirements:
 * - Find the question by ID
 * - Compare the answer index with correctAnswer
 * - Return true if correct, false otherwise
 *
 * @param {number} questionId - The ID of the question
 * @param {number} answerIndex - The index of the selected answer
 * @returns {boolean} True if the answer is correct
 */
function checkAnswer(questionId, answerIndex) {
    // TODO: Implement this function
    // Example:
    // const question = questions.find(q => q.id === questionId);
    // if (question) {
    //     return question.correctAnswer === answerIndex;
    // }
    // return false;

    throw new Error('checkAnswer() not implemented');
}

/**
 * Get the total number of questions
 *
 * TODO: Implement this function
 *
 * @returns {number} Total number of questions
 */
function getTotalQuestions() {
    // TODO: Implement this function
    // return questions.length;

    throw new Error('getTotalQuestions() not implemented');
}

/**
 * Get all questions (for testing purposes)
 *
 * @returns {Array} All questions
 */
function getAllQuestions() {
    return questions;
}

/**
 * Shuffle questions (optional feature)
 *
 * TODO: Implement this function (optional)
 * Uses Fisher-Yates shuffle algorithm
 *
 * @returns {Array} Shuffled questions array
 */
function shuffleQuestions() {
    // TODO: Implement shuffling (optional)
    // const shuffled = [...questions];
    // for (let i = shuffled.length - 1; i > 0; i--) {
    //     const j = Math.floor(Math.random() * (i + 1));
    //     [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    // }
    // questions = shuffled;
    // return questions;

    return questions;
}

// Export functions for use in other files (when using modules)
// If not using ES6 modules, these functions are available globally
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        loadQuestions,
        getQuestion,
        checkAnswer,
        getTotalQuestions,
        getAllQuestions,
        shuffleQuestions
    };
}
