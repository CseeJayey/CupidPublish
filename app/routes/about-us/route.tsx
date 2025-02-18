import { type MetaFunction } from '@remix-run/react';
import { FadeIn, Reveal } from '~/src/components/visual-effects';
import styles from './route.module.scss';

export default function AboutUsPage() {
    return (
        <div>
            <div className={styles.header}>Mục tiêu</div>
            <div className={styles.root}>
                <Reveal className={styles.aboutSection} direction="right" duration={1}>
                    <div className={styles.description}>
                        <div className={styles.infoBlock}>
                            <h3 className={styles.highlight}>Giáo dục và nâng cao nhận thức</h3>
                            <p>
                                Cung cấp kiến thức cần thiết để bạn hiểu rõ hơn về hôn nhân và gia
                                đình.
                            </p>
                        </div>
                        <br />

                        <div className={styles.infoBlock}>
                            <h3 className={styles.highlight}>Tự đánh giá và khám phá bản thân</h3>
                            <p>
                                Giúp bạn nhìn nhận chính mình và xác định mức độ sẵn sàng cho cuộc
                                sống gia đình.
                            </p>
                        </div>
                        <br />
                        <div className={styles.infoBlock}>
                            <h3 className={styles.highlight}>Xây dựng thái độ tích cực</h3>
                            <p>
                                Khuyến khích suy nghĩ tích cực và chuẩn bị tinh thần vững vàng cho
                                hôn nhân hạnh phúc.
                            </p>
                        </div>
                    </div>
                </Reveal>

                <FadeIn duration={2}>
                    <img className={styles.image} src="/images/about1.jpg" alt="" />
                </FadeIn>

                <FadeIn duration={2}>
                    <img
                        className={styles.image}
                        src="https://cdn.tuoitrethudo.vn/stores/news_dataimages/tuoitrethudocomvn/052020/30/21/the-he-tre-viet-ngay-cang-luoi-yeu-ngai-tuong-tac-11111320200530214207.2523280.jpg?200530094200"
                        alt=""
                    />
                </FadeIn>
                <Reveal className={styles.aboutSection} direction="left" duration={1}>
                    <div className={styles.description}>
                        Hiện tượng ngại kết hôn và sinh con ngày càng trở nên phổ biến trong giới
                        trẻ. Điều này phản ánh những thay đổi lớn trong lối sống, quan niệm xã hội,
                        đồng thời đặt ra nhiều thách thức đối với sự phát triển bền vững của cộng
                        đồng. Dự án nhằm mang lại góc nhìn toàn diện, đa chiều về hiện tượng này,
                        qua đó thúc đẩy thảo luận tích cực và tìm kiếm giải pháp.
                    </div>
                </Reveal>
            </div>
            <div className={styles.pagebreak} />
            <FadeIn duration={1}>
                <div className={styles.aboutUsSection}>
                    <h2 className={styles.aboutUsSectionTitle}>Nhóm Bánh Ngọt</h2>
                    <div className={styles.aboutUsCardsContainer}>
                        <div className={styles.aboutUsCard}>
                            <div className={styles.aboutUsMember}>
                                <img
                                    src="/images/aboutUs/vy.webp"
                                    alt=""
                                    className={styles.memberImage}
                                />
                                <div className={styles.memberDetails}>
                                    <p className={styles.memberName}>Phạm Nguyễn Tường Vy</p>
                                    <p className={styles.memberTitle}>Content</p>
                                </div>
                                <p className={styles.quoteText}></p>
                            </div>
                        </div>

                        <div className={styles.aboutUsCard}>
                            <div className={styles.aboutUsMember}>
                                <img
                                    src="/images/aboutUs/trang.webp"
                                    alt=""
                                    className={styles.memberImage}
                                />
                                <div className={styles.memberDetails}>
                                    <p className={styles.memberName}>Lâm Thiên Trang</p>
                                    <p className={styles.memberTitle}>Content</p>
                                </div>
                                <p className={styles.quoteText}></p>
                            </div>
                        </div>

                        <div className={styles.aboutUsCard}>
                            <div className={styles.aboutUsMember}>
                                <img
                                    src="/images/aboutUs/nha.webp"
                                    alt=""
                                    className={styles.memberImage}
                                />
                                <div className={styles.memberDetails}>
                                    <p className={styles.memberName}>Trịnh Trung Nhã</p>
                                    <p className={styles.memberTitle}>Content</p>
                                </div>
                                <p className={styles.quoteText}></p>
                            </div>
                        </div>

                        <div className={styles.aboutUsCard}>
                            <div className={styles.aboutUsMember}>
                                <img
                                    src="/images/aboutUs/duc.webp"
                                    alt=""
                                    className={styles.memberImage}
                                />
                                <div className={styles.memberDetails}>
                                    <p className={styles.memberName}>Hoàng Anh Đức</p>
                                    <p className={styles.memberTitle}>Developer</p>
                                </div>
                                <p className={styles.quoteText}>ditto</p>
                            </div>
                        </div>
                    </div>
                </div>
            </FadeIn>
            <div className={styles.pagebreak} />

            <div className={styles.technologiesContainer}>
                <h1>Built With:</h1>
                <div className={styles.technologiesLogos}>
                    <a href="https://remix.run/" target="_blank" rel="noopener noreferrer">
                        <img src="/logos/remix.svg" alt="" />
                    </a>
                    <a href="https://vite.dev/" target="_blank" rel="noopener noreferrer">
                        <img src="/logos/vite.svg" alt="" />
                    </a>
                </div>
            </div>

            <footer></footer>
        </div>
    );
}

export const meta: MetaFunction = () => {
    return [
        { title: 'About Quiz4Love' },
        {
            name: 'description',
            content: 'About us',
        },
        {
            property: 'robots',
            content: 'index, follow',
        },
    ];
};
