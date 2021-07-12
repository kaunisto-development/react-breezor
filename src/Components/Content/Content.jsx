import React from 'react';
import styles from './Content.module.css';
import checkoutPic from '../../Assets/svg/vector.svg';
import ava1 from '../../Assets/yvonick.png';
import maskPic from '../../Assets/svg/mask.svg';
import distancePic from '../../Assets/svg/distance.svg';
import sprayPic from '../../Assets/svg/spray.svg';
import taxiPic from '../../Assets/svg/taxi.svg';
import mapPic from '../../Assets/map.png';
import thumbUpPic from '../../Assets/thumbUp.png';
import ava2 from '../../Assets/ava2.png';
import Offers from '../Offers/Offers';
import Arrange from '../Arrange/Arrange';
import Explore from '../Explore/Explore';


const Content = () => {
    return (
        <div className='content'>
             <Explore />
            <div className={styles.innerWrapper}>
            <div className='mainTitle'>
                <div>
                    <h4>Организатор:</h4>
                </div>
                <div>
                    <p><img src={checkoutPic} alt="checkoutPic" />Личность подтверждена</p>
                </div>
            </div>
            <div className={styles.Description}>
                <div className={styles.Ava}>
                    <div>
                        <img src={ava1} alt="ava1" />
                    </div>
                    <div>
                        <div><span>Yvonnick Alexandrovich</span></div>
                        <div>На сайте с Января 2021 г.</div>
                    </div>
                </div>
                <div>
                    <p>Сейчас я готов передать свою технологию сыроделия!
                        За последний год я смог обучить более 200 000 человек сыроделию онлайн.
                        Уверен, что приготовить сыр получится и у вас!
                        Вы узнаете как на самом деле делается сыр на производстве и на кухне.
                        Увидите и узнаете все тонкости и нюансы реального сыроделия от человека, который развил сыроварню с 0 до 1000л молока в день!

                        Современные молочные заводы, в большинстве своем работают без молока. Сухая сыворотка и химические реагенты - вот что вы купите в магазине под названием "сыр".
                        Хороший сыр можно найти только на небольших частных сыроварнях, да и то не всегда он вкусный, а зачастую ещё и дорогой!
                        Что же, пора вам решать, что вы будете кушать. Химическое сырье из магазина или свой настоящий сыр?</p>
                    <p>Современные молочные заводы, в большинстве своем работают без молока. Сухая сыворотка и химические реагенты - вот что вы купите в магазине под названием "сыр".
                        Хороший сыр можно найти только на небольших частных сыроварнях, да и то не всегда он вкусный, а зачастую ещё и дорогой!
                        Что же, пора вам решать, что вы будете кушать. Химическое сырье из магазина или свой настоящий сыр?</p>
                </div>
            </div>
        </div>
        <div className='section'>
            <div className={styles.servicesBlock}>
                <h4>Важная информация:</h4>
                <div className={styles.services}>
                    <div>
                        <p><h4>Правила отмены:</h4></p>
                        <p>Впечатление можно отменить в течение 24 часов после оплаты или за 7 дней до начала и получить полный возврат.</p>
                        <p>Подробнее ›</p>
                    </div>
                    <div>
                        <p><h4>Требования к гостю:</h4></p>
                        <p>Максимальное число гостей от 18 лет: 10. Родители могут взять с собой детей до 2 лет.</p>
                        <p>Подробнее ›</p>
                    </div>
                    <div>
                        <p><h4>Алкоголь:</h4></p>
                        <p>Мероприятие включает в себя алкоголь. Спиртные напитки будут доступны только гостям, достигшим возраста официально разрешённого потребления спиртных напитков.</p>
                    </div>
                </div>
                <div className={styles.services}>
                    <div>
                        <p><h4>Дополнительно:</h4></p>
                        <p>Вам понадобится кастрюля на 3 литра, молоко 4 литрв, лопатка деревянная и халат и маска и все такое. Лучше запастись этим заранее.</p>
                        <p>Подробнее ›</p>
                    </div>
                    <div>
                        <p><h4>Взять с собой:</h4></p>
                        <div className={styles.withyou}>
                            <p>✓ Кастрюля, 3 литра нержавейка</p>
                            <p>✓ Молоко любое, 4 литра</p>
                            <p>✓ Деревянная лопатка для помешивания</p>
                            <p>✓ Марля медицинская, 1 метр</p>
                            <p>✓ Халат, маска, шапочка тканевая</p>
                        </div>
                    </div>
                    <div className={styles.requirements}>
                        <p><h4>Информация о COVID-19:</h4></p>
                        <p><img src={maskPic} alt="maskPic" />Маска обязательна</p>
                        <p><img src={distancePic} alt="distancePic" />Дистанция 1,5 метра</p>
                        <p><img src={sprayPic} alt="sprayPic" />Проводится дизинфекция</p>
                    </div>
                </div>
            </div>
            <div className='mainTitle'>
                <div><h4>Место проведения</h4></div>
                <div><img src={taxiPic} alt="taxiPic" />Вызвать такси до места</div>
            </div>
            <div className={styles.mapPic}>
                <img src={mapPic} alt="mapPic" />
            </div>
            <div className={styles.smallTitle}>
                <div>
                    <h2>Как нас найти?</h2>
                    <p>Третий поворот налево, возле супермаркета «Перекрёсток»</p>
                    <p>Скачать схему ›</p>
                </div>
                <div>
                    <h2>Подробности</h2>
                    <p>Внимание! Последний автобус отходит в 22:00</p>
                </div>
            </div>
        </div>
        <div className={styles.innerWrapper}>
            <div className='mainTitle'>
                <div>
                    <h4>Отзывы:</h4>
                </div>
                <div>
                    <p><img src={thumbUpPic} alt="thumbUpPic" /> <span>4.6</span>Читать всё ›</p>
                </div>
            </div>
            <div className={styles.Description}>
                <div className={styles.Ava}>
                    <div>
                        <img src={ava2} alt="ava2" />
                    </div>
                    <div>
                        <div><span>Alexandra</span></div>
                        <div>На сайте с Января 2021 г.</div>
                    </div>
                </div>
                <div>
                    <p>Сейчас я готов передать свою технологию сыроделия!
                        За последний год я смог обучить более 200 000 человек сыроделию онлайн.
                        Уверен, что приготовить сыр получится и у вас!
                        Вы узнаете как на самом деле делается сыр на производстве и на кухне.
                        Увидите и узнаете все тонкости и нюансы реального сыроделия от человека, который развил сыроварню с 0 до 1000л молока в день!</p>
                </div>
            </div>
        </div>
        <Arrange />
        <Offers />
        </div>
    )
}

export default Content
