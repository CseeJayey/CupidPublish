import type { MetaFunction } from '@remix-run/react';
import styles from './route.module.scss';
import classNames from 'classnames';

export default function PrivacyPolicyPage() {
    return (
        <div className={classNames('textPage', styles.privacyPolicyContainer)}>
            <h1>Privacy Policy</h1>

            <h2>A Legal Disclaimer</h2>
            <div>
                At Quiz4Love, we take your privacy as seriously as we take our quest to find your
                soulmate—or at least someone who won’t ghost you after three dates. Here’s how we
                handle your data (and your heart).
            </div>

            <div className={styles.privacyPolicySection}>1. Information We Collect</div>
            <div className={styles.privacyPolicyBody}>
                We collect the following information to enhance your quiz-taking experience:
                <ul>
                    <li>
                        Basic Info: Name, age, and favorite rom-com. (We judge you, but silently.)
                    </li>
                    <li>Contact Details: Email address for love letters and password resets.</li>
                    <li>
                        Quiz Responses: To scientifically match you with someone who also thinks
                        pineapple on pizza is a war crime.
                    </li>
                    <li>
                        Usage Data: Because we’re curious on how many buttons you’ve pressed so far.
                    </li>
                </ul>
            </div>
            <div className={styles.privacyPolicySection}>3. How We Protect Your Information</div>
            <div className={styles.privacyPolicyBody}>
                That’s the fun part! We don’t! It’s hosted on Vercel for everyone to see.
            </div>
            <div className={styles.privacyPolicySection}>4. Contact Us</div>
            <div className={styles.privacyPolicyBody}>
                <div className={styles.contactContainer}>
                    If you have questions, complaints, or just want to tell us how great we are...{' '}
                    <div className={styles.flair}>Don’t</div>
                </div>
            </div>
            <div className={styles.privacyPolicySection}>
                Quiz4Love: Because love is a quiz... and we have all the answers.
            </div>
        </div>
    );
}

export const meta: MetaFunction = () => {
    return [
        { title: 'Privacy Policy | Quiz4Love' },
        {
            name: 'description',
            content: 'Quiz4Love',
        },
        {
            property: 'robots',
            content: 'index, follow',
        },
    ];
};
