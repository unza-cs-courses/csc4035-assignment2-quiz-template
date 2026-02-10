# Assignment 2: Interactive Quiz Application

**Course:** CSC4035 Web Programming and Technologies
**Weight:** 5% of final grade
**Due:** Week 9, Friday 11:59 PM

---

## Overview

Build an interactive quiz application that demonstrates your JavaScript fundamentals, DOM manipulation, and event handling skills. The application should load quiz questions from a JSON file, display them dynamically, track user progress, and show results.

**Important:** No jQuery or external libraries allowed. All JavaScript must use ES6+ syntax.

---

## Requirements

### Functional Requirements

| Feature | Description |
|---------|-------------|
| **Question Display** | Show one question at a time with multiple choice options |
| **Answer Selection** | User can select one answer per question |
| **Navigation** | Next/Previous buttons to move between questions |
| **Progress Indicator** | Show current question number (e.g., "Question 3 of 10") |
| **Results Display** | Show final score with performance feedback |
| **Restart Quiz** | Allow user to retake the quiz |

### Technical Requirements

| Requirement | Description |
|-------------|-------------|
| **ES6+ Syntax** | Use `const`/`let`, arrow functions, template literals, destructuring |
| **Async/Await** | Load questions from JSON file asynchronously |
| **Array Methods** | Use `map`, `filter`, `forEach`, `reduce` where appropriate |
| **DOM Manipulation** | Create elements dynamically with `createElement` |
| **Event Handling** | Use event delegation for dynamic elements |
| **Modular Code** | Separate concerns into different files |

---

## Project Structure

```
csc4035-assignment2-quiz/
├── index.html           # Main HTML file
├── styles.css           # Styling
├── js/
│   ├── app.js           # Main application logic
│   ├── questions.js     # Question loading and management
│   └── ui.js            # UI rendering functions
├── data/
│   └── questions.json   # Quiz questions (minimum 10)
├── tests/
│   └── visible/
│       └── tests.js     # Automated tests
├── package.json         # Project configuration
└── README.md            # This file
```

---

## Question Format

Your `data/questions.json` must follow this format:

```json
{
    "questions": [
        {
            "id": 1,
            "question": "What does HTML stand for?",
            "options": [
                "Hyper Text Markup Language",
                "High Tech Modern Language",
                "Hyper Transfer Markup Language",
                "Home Tool Markup Language"
            ],
            "correctAnswer": 0,
            "category": "HTML",
            "difficulty": "easy"
        }
    ]
}
```

**Requirements:**
- Minimum 10 questions
- Each question must have exactly 4 options
- `correctAnswer` is the index (0-3) of the correct option
- Questions should be related to web development topics

---

## Required Functions

You must implement these functions in the appropriate files:

### questions.js
```javascript
// Load questions from JSON file
async function loadQuestions() { }

// Get a specific question by index
function getQuestion(index) { }

// Check if an answer is correct
function checkAnswer(questionId, answerIndex) { }
```

### ui.js
```javascript
// Render a question to the DOM
function renderQuestion(question) { }

// Render answer options
function renderOptions(options, selectedIndex) { }

// Render progress indicator
function renderProgress(current, total) { }

// Render final results
function renderResults(score, total, answers) { }
```

### app.js
```javascript
// Initialize and start the quiz
function startQuiz() { }

// Move to next question
function nextQuestion() { }

// Move to previous question
function previousQuestion() { }

// Handle answer selection
function selectAnswer(answerIndex) { }

// Calculate and display final results
function submitQuiz() { }
```

---

## Getting Started

1. **Clone this repository** to your local machine
2. **Open `data/questions.json`** and add your 10+ questions
3. **Implement the TODO sections** in each JavaScript file
4. **Test locally** by opening `index.html` in a browser
5. **Run automated tests** with `npm test`
6. **Commit and push** your changes regularly

### Running Tests Locally

```bash
npm install
npm test
```

---

## Grading Rubric (100 points)

| Criterion | Points | Description |
|-----------|--------|-------------|
| **Core Functionality** | 30 | All quiz features work correctly |
| **DOM Manipulation** | 20 | Clean, efficient DOM updates |
| **Event Handling** | 15 | Proper event handling and delegation |
| **Async Data Loading** | 15 | Questions load from JSON with error handling |
| **Code Quality** | 10 | ES6+ syntax, modular, well-organized |
| **Questions Content** | 10 | 10+ quality questions, varied difficulty |

### Automated Tests (40% of grade)

The following are checked automatically on each push:
- Questions load successfully from JSON
- Quiz navigation works (next/previous)
- Answer selection is tracked
- Score calculation is correct
- Results display properly

---

## Submission Checklist

Before submitting, verify:

- [ ] 10+ questions in `data/questions.json`
- [ ] All required functions implemented
- [ ] Questions load asynchronously (async/await)
- [ ] Navigation between questions works
- [ ] Progress indicator updates correctly
- [ ] Score is calculated and displayed
- [ ] Quiz can be restarted
- [ ] ES6+ syntax used throughout
- [ ] No jQuery or external libraries
- [ ] All automated tests pass (`npm test`)

---

## Academic Integrity

- All JavaScript must be your own work
- No jQuery, React, or other frameworks
- No copying from online quiz tutorials
- Questions must be your own creation

**Violations result in zero marks and academic misconduct reporting.**

---

## Extension Opportunities (Bonus: up to +10%)

- Timer per question (+3%)
- Category filtering (+2%)
- High scores in localStorage (+3%)
- Sound effects for correct/incorrect (+2%)
