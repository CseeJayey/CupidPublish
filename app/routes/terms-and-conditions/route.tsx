import { MetaFunction } from '@remix-run/react';

export default function TermsAndConditionsPage() {
    return (
        <div className="textPage">
            <h1>Terms & Conditions</h1>

            <h2>A Legal Disclaimer (Kinda)</h2>
            <div>
                By using Quiz4Love, you agree to the following terms. If you don’t agree, well…
                we’re not sure why you’re still here.
            </div>

            <h2>1. Using Our Site</h2>
            <div>
                You promise not to lie on quizzes, or pretend to be someone you’re not—like a prince
                from a faraway land looking for a spouse (we’re onto you).
            </div>

            <h2>2. Your Data</h2>
            <div>
                We promise to protect your data, but if you leave your laptop open at a café, that’s
                on you. Also, we might use your answers to write a sitcom one day. No royalties.
                Sorry.
            </div>

            <h2>3. Matches Are Not Guaranteed</h2>
            <div>
                We can’t guarantee you’ll find true love. But we can guarantee some laughs and at
                least one awkward first date story.
            </div>

            <h2>4. Liability</h2>
            <div>
                If you fall in love anywhere, anytime in the future, we expect wedding invites.
            </div>

            <h2>5. Changes to These Terms</h2>
            <div>
                We may change these terms whenever we feel like it. You’re responsible for checking
                back because we won’t send a reminder.
            </div>

            <h2>6. Governing Law</h2>
            <div>
                These terms are governed by the laws of the internet. If you take us to court, we
                hope it’s a small claims court because we’re not that big yet.
            </div>

            <h2>7. Final Words</h2>
            <div>
                If you’re still reading this, you’re either really cautious or really bored. Either
                way, welcome to Quiz4Love—where love is just a quiz away (or several).
            </div>

            <h2>Điều Khoản & Điều Kiện (Bản Rút Gọn Tiếng Việt)</h2>
            <div>
                Khi sử dụng Quiz4Love, bạn đồng ý với tất cả những điều trên. Nếu không đồng ý, bạn
                vẫn có thể ở lại, nhưng không được than phiền sau này đâu nhé!
            </div>
        </div>
    );
}

export const meta: MetaFunction = () => {
    return [
        { title: 'Terms and Conditions | Quiz4Love' },
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
