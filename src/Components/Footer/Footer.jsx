import React from 'react';
import styles from './Footer.module.css';
import unionPic from '../../Assets/svg/union.svg';
import facebookPic from '../../Assets/svg/facebook.svg';
import instagramPic from '../../Assets/svg/instagram.svg';
import twitterPic from '../../Assets/svg/twitter.svg';


const Footer = () => {
    return (
        <footer className={styles.footer}>
        <div className={styles.footerMain}>
            <div className={styles.footerInner}>
                <div>
                    <h2>О компании</h2>
                    <ul>
                        <li>Кто мы</li>
                        <li>Что мы делаем</li>
                        <li>Команда</li>
                    </ul>
                </div>
                <div>
                    <h2>Для бизнеса</h2>
                    <ul>
                        <li>Добавить пляжи</li>
                        <li>Добавить услуги</li>
                    </ul>
                </div>
                <div>
                    <h2>Поддержка</h2>
                    <ul>
                        <li>Связаться с нами</li>
                        <li>Пользовательское соглашение</li>
                        <li>Политика конфиденциальности</li>
                        <li>Публичная оферта для поставщиков</li>
                    </ul>
                </div>
            </div>
            <div className={styles.footerInner}>
                <div>
                    <h2>Карьера</h2>
                    <ul>
                        <li>Присоединиться к команде</li>
                        <li>Список вакансий</li>
                    </ul>
                </div>
                <div>
                    <h2>Пресс-центр</h2>
                    <ul>
                        <li>Подписка на пресс-релизы</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className={styles.footerCopy}>
            <p>© 2021 GBMS inc. All rights reserved</p>
            <div className={styles.footerCopyItem}>
                <img src={unionPic} alt="unionPic" />
                <span>Русский (RU)</span>
                <img src={facebookPic} alt="facebookPic" />
                <img src={instagramPic} alt="InstagramPic" />
                <img src={twitterPic} alt="TwitterPic" />
            </div>
        </div>
    </footer>
    )
}

export default Footer
