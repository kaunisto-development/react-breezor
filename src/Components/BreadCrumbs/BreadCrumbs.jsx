import React from 'react';
import sharePic from '../../Assets/svg/share.svg';
import favPicB from '../../Assets/svg/favB.svg';
import arrowRightPic from '../../Assets/svg/arrowRight.svg';
import styles from './BreadCrumbs.module.css';

const BreadCrumbs = () => {
    return (
        <div className={styles.crumbs}>
                <div className={styles.crumbsArrows}>
                    Франция <img src={arrowRightPic} alt="arrowRightPic" /> Париж <img src={arrowRightPic} alt="arrowRightPic" /> Туры <img src={arrowRightPic} alt="arrowRightPic" /> Туры своими руками
                </div>
                
                <div className={styles.crumbsBtn}>
                    <div>
                        <img src={sharePic} alt="sharePic" />
                        поделиться
                    </div>
                    <div>
                        <img src={favPicB} alt="favPicB" />
                        В избранное
                    </div>
                </div>
            </div>
    )
}

export default BreadCrumbs
