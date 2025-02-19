import type { MetaFunction } from '@remix-run/react';
import QuizComponent from '~/src/components/quiz/QuizComponent';
import styles from './route.module.scss';
import { useRef } from 'react';
import VariableProximity from '~/src/components/variable-proximity/variable-proximity';
// import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse";


export default function QuizPage() {
    const containerRef = useRef(null);
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
            <div className={styles.quizComponent}>
                <div ref={containerRef} className={styles.quizHeader}>
                    <VariableProximity
                        label={'Bạn đã sẵn sàng trong hôn nhân chưa?'}
                        fromFontVariationSettings="'wght' 600, 'opsz' 9"
                        toFontVariationSettings="'wght' 1200, 'opsz' 40"
                        containerRef={containerRef}
                        radius={100}
                        falloff="gaussian"
                    />
                    <h6>
                        *This test is only as truthful as you are.
                    </h6>
                </div>
                <QuizComponent />
            </div>
        </div>
    );
}

export const meta: MetaFunction = () => {
    return [
        { title: 'Quiz | Quiz4Love' },
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
