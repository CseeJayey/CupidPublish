import type { MetaFunction } from '@remix-run/react';
import QuizComponent from '~/src/components/quiz/QuizComponent';
import styles from './route.module.scss';
// import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse";


export default function QuizPage() {
    return (
        <div className={styles.quizPage}>
            {/* <MouseParallaxContainer globalFactorX={0.1} globalFactorY={0.1}>
                <MouseParallaxChild factorX={0.3} factorY={0.5}>
                    <img src="/images/hero2.jpg" alt="" />
                </MouseParallaxChild>
                <MouseParallaxChild factorX={0.7} factorY={0.8}>
                    <img src="/images/hero2.jpg" alt="" />
                </MouseParallaxChild>
            </MouseParallaxContainer> */}
            <div>
                <h1 className={styles.header1}>Bạn đã sẵn sàng trong hôn nhân chưa?</h1>
                <QuizComponent />
            </div>
        </div>
    );
}

export const meta: MetaFunction = () => {
    return [
        { title: 'Parenthood Quiz' },
        {
            name: 'description',
            content: 'Take the quiz to find out if you are prepared for parenthood.',
        },
        {
            property: 'robots',
            content: 'index, follow',
        },
    ];
};
