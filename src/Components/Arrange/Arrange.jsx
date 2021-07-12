import styles from './Arrange.module.css';
import cheeseMainPic from '../../Assets/cheese.png';
import flowerPic from '../../Assets/svg/flower.svg';
import Calendar from 'react-calendar';
import '../../Components/Calendar/Calendar.css';
import clockPic from '../../Assets/svg/clock.svg';
import peoplePic from '../../Assets/svg/people.svg';
import basketPic from '../../Assets/svg/basket.svg';
import commentPic from '../../Assets/svg/comment.svg';
import { Link } from 'react-router-dom';

const Arrange = () => {
    return (
        <div className={styles.arrangeInner}>
            <div className={styles.picture}>
                <img src={cheeseMainPic} alt="cheeseMain" />
                <div className={styles.overlay}>
                    <img src={flowerPic} alt="flowerPic" />
                    – 30 OFF
                </div>
            </div>
            <div className={styles.info}>
                <div className={styles.maintitle}>Урок сыроделия</div>
                <p className={styles.maintext}>
                    Среди сыроваров есть тенденция, что они не хотят делиться своими секретами и рецептами. Говорят, что это очень сложное дело...что нужно ехать в Европу или идти в подмастерье к настоящему сыровару на несколько лет, да и то не факт, что тебе раскроют все секреты. Но это не так!
                </p>
                <div className={styles.datepickerBox}>
                    <div className={styles.datepicker}>
                        <Calendar />
                        <p>От 1 373 ₽ / Чел.</p>
                    </div>
                    <div className={styles.conditions}>
                        <div>
                            <img src={clockPic} alt="clockPic" />
                            <span>60</span>мин.
                        </div>
                        <div>
                            <img src={peoplePic} alt="peoplePic" />
                            <span>До 10 человек</span>
                        </div>
                        <div>
                            <img src={basketPic} alt="basketPic" />
                            <span>Что включено:</span> ✓ Напитки
                            ✓ Плед ✓ Сувениры
                        </div>
                        <div>
                            <img src={commentPic} alt="commentPic" />
                            <span>Языки тура:</span>✓ Английский
                            ✓ Французкий
                        </div>
                        <ul className={styles.buttons}>
                            <li><Link to='/'>Бесплатная отмена</Link></li>
                            <button>Забронировать</button>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Arrange;
