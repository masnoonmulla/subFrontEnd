import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import styles from './stepper.module.css';

const Stepper = () => {
    const location = useLocation();
    let step = location.pathname;
    console.log(step);
    return (
        <section className={styles.stepperContainer}>
            <div className={`${styles.iconContainer} ${step === '/timeline' ? styles.iconContainerActive : ''}`}>
                <div
                    className={`${styles.iconWrapper} ${step === '/timeline' ? styles.iconComplete : ''
                        } ${step === 'customization' || step === 'payment'
                            ? styles.iconActive
                            : ''
                        }`}
                >
                    1
                </div>
            </div>
            <span className={styles.divider}></span>
            <div className={styles.iconContainer}>
                <div
                    className={`${styles.iconWrapper} ${step === 'timeline' ? styles.iconComplete : ''
                        } ${step === 'customization' || step === 'payment'
                            ? styles.iconActive
                            : ''
                        }`}
                >
                    2
                </div>
            </div>
            <span className={styles.divider}></span>
            <div className={styles.iconContainer}>
                <div
                    className={`${styles.iconWrapper} ${step === 'timeline' ? styles.iconComplete : ''
                        } ${step === 'customization' || step === 'payment'
                            ? styles.iconActive
                            : ''
                        }`}
                >
                    3
                </div>
            </div>
        </section>
    );
};

export default Stepper;
