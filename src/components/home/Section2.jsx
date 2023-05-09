import s from '@/styles/main/Section2.module.css';
import { useState } from 'react';

const Section2 = () => {
    const cards = [
        {
            title: 'FinTech',
            image: './assets/img/fintech.svg',
            text: 'financial systems need innovative optimization, and we know how to do it technologically and one step ahead of time'
        },
        {
            title: 'E-comm',
            image: './assets/img/e-comm.svg',
            text: 'we started with e-commerce before it became a trend, and when online trading flourished, we already understood that it was effective'
        },
        {
            title: 'Big data analysis',
            image: './assets/img/big-data.svg',
            text: 'we have selected a team of specialists with an advanced technology stack, so we process data of any volume'
        },
        {
            title: 'HoReCa',
            image: './assets/img/horeca.svg',
            text: 'the most tricky niche, but it has a lot of nuances and if you don`t take them into account, everything will fail at the start'
        },
        {
            title: 'Entertainment',
            image: './assets/img/enter.svg',
            text: 'here are the most capricious consumers, it took us many years to put together the perfect user experience'
        },
    ];

    const Card = ({ card }) => {
        const [isHovered, setIsHovered] = useState(false);

        return (
            <div
                className={s.card}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <h2>{card.title}</h2>
                <div className={`${s.card_border} ${isHovered ? s.card_border_blurred : ''}`}>
                    <div className={`${s.card_product} ${isHovered ? s.card_product_blurred : ''}`}>
                        <div />
                        <img src={card.image} alt="" />
                    </div>
                    {isHovered && (
                        <div className={s.card_product_text}>
                            <div className={s.exit}>
                                <button><img src="./assets/icons/arr-minus.svg" alt="" /></button>
                            </div>
                            <p>{card.text}</p>
                        </div>
                    )}
                </div>
            </div>
        );
    };

    return (
        <section className={`${s.section_block}`}>
            <div className={`${s.header} container`}>
                <h1>We can do everything</h1>
                <button>but we are experts in</button>
            </div>
            <div className={`${s.card_list} ${s.container}`}>
                {cards.map((card, index) => (
                    <Card key={index} card={card} />
                ))}
            </div>
        </section>
    )
}

export default Section2;