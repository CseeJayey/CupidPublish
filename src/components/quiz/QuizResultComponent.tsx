import React from 'react';
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from 'react-confetti'
import { NavLink } from '@remix-run/react';
import { CONFIG } from '~/src/data/configData';
import './QuizComponent.scss';
import { FiExternalLink } from "react-icons/fi";
import { IoReload } from "react-icons/io5";

interface ResultComponentProps {
    score: number;
    maxScore: number;
    resetQuiz: () => void;
}
const heartsShape = (ctx: CanvasRenderingContext2D) => {
    ctx.beginPath();
    for (let t = 0; t < Math.PI * 2; t += 0.05) {
        const x = 16 * Math.pow(Math.sin(t), 3);
        const y =
            13 * Math.cos(t) -
            5 * Math.cos(2 * t) -
            2 * Math.cos(3 * t) -
            Math.cos(4 * t);

        ctx.lineTo(x, -y);
    }
    ctx.fillStyle = '#ff5e6c'; // Heart color
    ctx.fill();
    ctx.closePath();
};
const getConfetti = (width: number, height: number, drawShape?: (ctx: CanvasRenderingContext2D) => void) => {
    return (
        <div className="confetti">
            <Confetti
                width={width}
                height={height}
                recycle={false}
                initialVelocityX={{ min: -5, max: 10 }}
                initialVelocityY={{ min: -10, max: 5 }}
                numberOfPieces={150}
                gravity={0.09}
                drawShape={drawShape}
            />
        </div>
    );
}

const ResultComponent: React.FC<ResultComponentProps> = ({ score, maxScore, resetQuiz }) => {
    const percentage = Math.round((score / maxScore) * 100);

    const { width, height } = useWindowSize()

    return (
        <div className="result">
            <h3>
                Your Score: {score} ({percentage}%)
            </h3>
            {percentage >= CONFIG.RESULT_HIGH && (
                <div>
                    {getConfetti(width, height, heartsShape)}
                    <p className="resultTitle">Bạn đã sẵn sàng để làm cha mẹ!</p>
                    <p className="resultFlair">
                        Chúc mừng! Bạn đã có kiến thức và tâm lý vững vàng để chào đón thành viên
                        mới trong gia đình. Hãy tiếp tục duy trì tinh thần này và sẵn sàng đối mặt
                        với mọi thử thách của việc nuôi dạy con cái!
                    </p>
                </div>
            )}

            {percentage < CONFIG.RESULT_HIGH && percentage >= CONFIG.RESULT_MEDIUM && (
                <div>
                    {getConfetti(width, height)}
                    <p className="resultTitle">
                        Bạn gần đạt được mục tiêu, chỉ cần chuẩn bị thêm một chút nữa!
                    </p>
                    <p className="resultFlair">
                        Bạn đã có những hiểu biết cơ bản nhưng vẫn cần thêm một chút chuẩn bị về tài
                        chính, tinh thần hoặc kiến thức nuôi dạy con. Hãy tiếp tục tìm hiểu và học
                        hỏi thêm để tự tin hơn trong vai trò làm cha mẹ nhé!
                    </p>
                </div>
            )}

            {percentage < CONFIG.RESULT_LOW && (
                <div>
                    <p className="resultTitle">Có thể bạn cần suy nghĩ thêm về quyết định này.</p>
                    <p className="resultFlair">
                        Việc làm cha mẹ đòi hỏi rất nhiều trách nhiệm và sự chuẩn bị kỹ lưỡng. Hãy
                        dành thêm thời gian để suy nghĩ về mong muốn và khả năng của bản thân, cũng
                        như thảo luận với người thân để có quyết định đúng đắn nhất.
                    </p>
                </div>
            )}
            <div className="buttons">
                <NavLink to="/posts">
                    <div>
                        <button className="post-button">                    
                            <span> Tham khảo blog của chúng mình </span> <FiExternalLink />
                        </button>
                    </div>
                </NavLink>
                <a href={CONFIG.FEEDBACK_FORM} target="_blank" rel="noopener noreferrer">
                    <div>
                        <button className="feedback-button">
                            <span>Chia sẻ ý kiến của bạn tại đây</span> <FiExternalLink />
                        </button>
                    </div>
                </a>
                <button onClick={resetQuiz} className="reset-button">
                    <span>Thử lại</span> <IoReload />
                </button>
            </div>

        </div>
    );
};

export default ResultComponent;
