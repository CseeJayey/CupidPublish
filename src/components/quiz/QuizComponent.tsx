import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { quizData } from '../../data/quizData';
import ResultComponent from './QuizResultComponent';
import './QuizComponent.scss';
// import { useNavigate } from '@remix-run/react';
import { ProgressBar } from 'primereact/progressbar';
import { classNames } from 'primereact/utils';

const QuizComponent: React.FC = () => {
    const [currentQuestion, setCurrentQuestion] = useState<number>(0);
    const [score, setScore] = useState<number>(0);
    const [showResult, setShowResult] = useState<boolean>(false);
    // const navigate = useNavigate();
    const handleAnswer = (points: number) => {
        // Calculate the new score first
        const newScore = score + points;

        // Update the state with the new score
        setScore(newScore);

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < quizData.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setCurrentQuestion(nextQuestion);
            setShowResult(true);

            // Log the final score for debugging
            // console.log('Final Score:', newScore);

            // // Use the calculated newScore to navigate
            // if (newScore >= 25) {
            //     navigate('/ready-for-parenthood');
            // } else if (newScore >= 15) {
            //     navigate('/almost-there');
            // } else {
            //     navigate('/reconsider');
            // }
        }
    };

    const resetQuiz = () => {
        setScore(0);
        setCurrentQuestion(0);
        setShowResult(false);
    };

    const progressPercentage = Math.round((currentQuestion / quizData.length) * 100);

    return (
        <div className="quiz-container">
            <div className="custom-progress-bar">
                <ProgressBar value={progressPercentage} />
            </div>
            <div className="quiz-content">
                {showResult ? (
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentQuestion}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1 }}
                            className="question-card"
                        >
                            <ResultComponent
                                maxScore={quizData.length * 10}
                                score={score}
                                resetQuiz={resetQuiz}
                            />
                        </motion.div>
                    </AnimatePresence>
                ) : (
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentQuestion}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="question-card"
                        >
                            {/* Question Counter */}
                            <p className="question-counter">
                                Câu hỏi {currentQuestion + 1} trên {quizData.length}
                            </p>

                            <h4>{quizData[currentQuestion].question}</h4>
                            <ul className="answer-grid">
                                {quizData[currentQuestion].answers.map((answer, index) => (
                                    <li key={index}>
                                        <button
                                            onClick={() => handleAnswer(answer.points)}
                                            className="answer-button"
                                        >
                                            {answer.text}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </AnimatePresence>
                )}
            </div>
            <div className={classNames('custom-progress-bar', 'custom-progress-bar-bottom')}>
                <ProgressBar value={progressPercentage} />
            </div>
        </div>
    );
};

export default QuizComponent;
