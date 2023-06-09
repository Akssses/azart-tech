import s from '@/styles/cases/Analytics.module.css'
import { useState } from 'react'

const Analytics = ({cases}) => {
    const data = [
        { content: cases.also1},
        { content: cases.also2},
    ]


    const [activeIndex, setActiveIndex] = useState(null);

    return (
        <section className='container'>
            <div className={s.block_01}>
                <p>01</p>
                <h3>Analytics</h3>
            </div>
            <div className={s.text_01}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto assumenda reiciendis sit cum non? Perferendis, tempore. Facere cumque eveniet velit sit accusamus, dolorum autem ullam vel rerum aspernatur odio nisi commodi aut animi, necessitatibus excepturi voluptates quibusdam sunt, nostrum atque.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto assumenda reiciendis sit cum non? Perferendis, tempore. Facere cumque eveniet velit sit accusamus, dolorum autem ullam vel rerum aspernatur odio nisi commodi aut animi, necessitatibus excepturi voluptates quibusdam sunt, nostrum atque.</p>
            </div>
            <p className={s.dashed_p}>It was not difficult to guess that the main mistakes were in the convenience of moving through the pages, intuitively his chain of actions was difficult to logically perform targeted actions that lead to a sale</p>
            <div className={s.rect}>
                <div className={s.blur}>
                    <img src="./assets/img/rect2.svg" alt="" />
                    <div></div>
                </div>
                <div className={s.rect_text}>
                    <p>Building an application architecture using the flowchart method based on user experience analysis</p> 
                    <img src="./assets/images/6041.svg" alt="" />
                    <div className={s.glow1}/>
                </div>
            </div>
            <div className={s.also}>
                <h4>Also</h4>
                <div className={s.accordions}>
                    {
                        data.map((item, index) => {
                            const isActive = index === activeIndex;
                            const arrowIcon = isActive ? './assets/icons/arr-minus.svg' : './assets/icons/arr-plus.svg';

                            return (
                                <div className={isActive ? s.active_accordion : s.accordion} key={index}>
                                    <div className={s.accordion_header}>
                                        <p className={isActive ? s.active_text : s.text}>{item.content}</p>
                                        <button onClick={() => setActiveIndex(isActive ? null : index)}>
                                            <img src={arrowIcon} alt="" />
                                        </button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                    <p className={s.dashed_p2}>{cases.alsoResult}</p>
            </div>
        </section>
    )
}

export default Analytics