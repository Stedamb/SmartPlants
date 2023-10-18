import {styles} from '../styles';
import {bg} from "../assets";

import { useTranslation } from "react-i18next";

const Hero = () => {
    const { i18n, t } = useTranslation();
    return (
        <section className='relative w-full h-screen mx-auto'>
            <img src={bg} className='w-full h-screen object-cover brightness-50'></img>
            <div
                className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}>

                <div>
                    <h1 className={`${styles.heroHeadText}`}>
                        {t("title_highlighted")}
                    </h1>
                    <p className={`${styles.heroSubText} mt-2`}>
                        {t("subtitle")}<span className=''>{t("subtitle_highlighted")}</span>
                    </p>
                </div>
            </div>

        </section>
    )
}

export default Hero