import { NavLink, type MetaFunction } from '@remix-run/react';
import { LabelWithArrow } from '~/src/components/label-with-arrow/label-with-arrow';
import { BackgroundParallax, FadeIn, FloatIn } from '~/src/components/visual-effects';
import styles from './route.module.scss';
import classNames from 'classnames';
import MetaBalls from '~/src/components/metaballs/MetaBalls';
import { FeaturedPostsSection } from '~/src/components/featured-posts-section/featured-posts-section';

export default function HomePage() {
    return (
        <div className={styles.outletWrapper}>
            <div className={styles.metaBallsWrapper}>
                <MetaBalls
                    color="#ffffff"
                    cursorBallColor="#ffffff"
                    cursorBallSize={5}
                    enableMouseInteraction={false}
                    ballCount={5}
                    animationSize={20}
                    hoverSmoothness={0.05}
                    clumpFactor={1}
                    speed={0.6}
                />
            </div>
            <div className={classNames('heroBanner', styles.heroBanner)}>
                <img src="/images/hero1.jpg" className="heroBannerImage" alt="" />
                <div className="heroBannerOverlay">
                    <div className="heroBannerSubtitle">BanhNgot Group Presents</div>
                    <h1 className="heroBannerTitle">Quiz4Love</h1>
                </div>
            </div>

            <div className="textBannerSection outlinedText">
                <NavLink to="/quiz">
                    <FadeIn className="textBanner" duration={1.8}>
                        <div className="textBannerSubtitle">Bạn đã sẵn sàng trong hôn nhân chưa?</div>
                        <div className="textBannerTitle">Làm Bài Kiểm Tra Ngay!</div>
                        <LabelWithArrow>Kết Quả Ngay Lập Tức</LabelWithArrow>
                    </FadeIn>
                </NavLink>
            </div>

            <div className="cardsSection">
                {/* <CategoryLink categorySlug="kitchen-essentials" className="linkCard">
                    <img
                        className="linkCardBackground"
                        src="./images/banner1.jpg"
                        alt=""
                    />
                    <div className="linkCardTitle">Lorem</div>
                </CategoryLink> */}
                <NavLink to="/post/why" className="linkCard">
                    <img className="linkCardBackground" src="/images/banner1.jpg" alt="" />
                    <div className="linkCardTitle">Vì sao ngại kết hôn?</div>
                </NavLink>
                <NavLink to="/post/context" className="linkCard">
                    <img className="linkCardBackground" src="/images/banner2.jpg" alt="" />
                    <div className="linkCardTitle">Thực trạng ở Việt Nam</div>
                </NavLink>
                <NavLink to="/post/consequence-resolution" className="linkCard">
                    <img className="linkCardBackground" src="/images/banner3.jpg" alt="" />
                    <div className="linkCardTitle">
                        Hệ lụy &<br /> Giải pháp
                    </div>
                </NavLink>
            </div>

            <FeaturedPostsSection
                className="alternateBackground"
                title="Nguồn thông tin bổ ích"
                description={
                    'Khám phá các tài nguyên giúp bạn xây dựng và duy trì hạnh phúc gia đình. Tìm hiểu thêm về tình yêu, hôn nhân và nuôi dạy con cái.'
                }
                postCount={3}
                linkTo="/posts"
            />

            <BackgroundParallax
                className="floatingCardBackground"
                backgroundImageUrl="/images/hero2.jpg"
                parallaxStrength={0.75}
            >
                <FloatIn direction="up" duration={1.2} distance={120}>
                    <div className={classNames('floatingCard', styles.div2)}>
                        <div className="floatingCardHeader">Feedback</div>
                        <div className={classNames('floatingCardContent', styles.div1)}>
                            <h2 className={classNames('floatingCardTitle', styles.header1)}>
                                Bạn đã làm quiz chưa?
                            </h2>
                            <div className="floatingCardDescription">
                                Chúng mình trân trọng mọi ý kiến của bạn! Hãy dành ít phút để chia
                                sẻ cảm nhận và góp ý của bạn qua biểu mẫu này.
                                <br /> Phản hồi của bạn giúp chúng mình cải thiện!
                            </div>
                        </div>
                        <NavLink to="https://forms.gle/mmNkzubV2cXfz2Rc6">
                            <LabelWithArrow>Chia sẻ ý kiến của bạn tại đây.</LabelWithArrow>
                        </NavLink>
                    </div>
                </FloatIn>
            </BackgroundParallax>
            {/* 
            <FeaturedProductsSection
                categorySlug="best-sellers"
                title="Best Sellers"
                description="When quality is eco-friendly. Explore our top picks."
                productCount={4}
            /> */}
        </div>
    );
}

export const meta: MetaFunction = () => {
    const title = 'Quiz4Love';
    const description = 'Are You Prepared For Parenthood?';

    return [
        { title },
        {
            name: 'description',
            content: description,
        },
        {
            property: 'robots',
            content: 'index, follow',
        },
        {
            property: 'og:title',
            content: title,
        },
        {
            property: 'og:description',
            content: description,
        },
        {
            property: 'og:image',
            content: '/images/hero2.jpg',
        },
    ];
};
