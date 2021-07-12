import styles from './Offers.module.css';
import thumbUpPic from '../../Assets/thumbUp.png';
import offersPic from '../../Assets/offers.png';
import favPic from '../../Assets/svg/fav.svg';
import locationPic from '../../Assets/svg/location.svg';
import OfferTabs from '../OffersTabs/OfferTabs';
import { useState, useEffect } from 'react';
import { allOffers, funOffers, cookOffers, restOffers, cultureOffers, activeOffers } from '../../data';



export default function Offers() {
    const [selected, setSelected] = useState('Все');
    const [data, setData] = useState([]);
    const list = [
        {
            id:'Все',
            title:'Все',
        },
        {
            id:'Отдых',
            title:'Отдых',
        },
        {
            id:'Развлечения',
            title:'Развлечения',
        },
        {
            id:'Кулинарные',
            title:'Кулинарные',
        },
        {
            id:'Культурные',
            title:'Культурные',
        },
        {
            id:'Активные',
            title:'Активные',
        },
    ];

    useEffect(() => {

        switch(selected){
            case 'Все':
                setData(allOffers);
                break;
                case 'Отдых':
                setData(restOffers);
                break;
                case 'Развлечения':
                setData(funOffers);
                break;
                case 'Кулинарные':
                setData(cookOffers);
                break;
                case 'Культурные':
                setData(cultureOffers);
                break;
                case 'Активные':
                setData(activeOffers);
                break;
                default:
                    setData(allOffers);
        }

    }, [selected])

    return (
        <div className={styles.offers} id='offers'>
            <h1>Вам также может понравиться</h1>
            <p>Всего символов: 321 Без пробелов: 272 Количество слов: 50 Quis exercitation deserunt aliquip Lorem non velit id ad incididunt eu. Eu labore eiusmod duis ad cupidatat occaecat dolor anim eiusmod fugiat labore sunt eu. Officia mollit eu officia excepteur aute nostrud aliquip. Deserunt ullamco irure esse eu labore consequat.</p>
            <ul>
                {list.map((item) => (
                    <OfferTabs
                     title={item.title}
                     active={selected === item.id}
                     setSelected={setSelected}
                     id={item.id}/>
                ))}
            </ul>
            <div className={styles.container}>
                {data.map(d=>(
                                 <div className={styles.card}>
                    <div className={styles.item}>
                    <div className={styles.cardPic}>
                            <img className={styles.mainpic} src={d.img} alt="offersPic" />
                            <div className={styles.overlay}>
                                <div className={styles.part1}>
                                    <a className={styles.bestoffer}>BEST OFFER</a>
                                    <a><img className={styles.fav} src={favPic} alt="favPic" /></a>
                                </div>
                                <div className={styles.part2}>
                                    <img src={locationPic} alt="locationPic" />
                                    <p>Country, Region</p>
                                </div>
                            </div>
                        </div>

                        <h4 className={styles.maintitle}>Your Experience</h4>
                        <div className={styles.cardInfo}>
                            <div className={styles.pricing}>
                                <div className={styles.price}>$ 100 / hour</div>
                                <div className={styles.rate}>
                                    <img src={thumbUpPic} alt="thumbUpPic" />
                                    <span>4.6</span>
                                </div>
                            </div>
                            <div className={styles.info}>
                                <div>Duration: from 60 min</div>
                                <div>Training and Riding Horses and Ponies</div>
                            </div>
                        </div>

                    </div>
                </div>
                ))}
            </div>
        </div>
    )
}

