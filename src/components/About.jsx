import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
    
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 1)}
      className='sm:w-[250px] w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-[color:var(--secondary)] rounded-[20px] min-h-[280px] flex flex-col justify-evenly items-center px-4'
      >
        <img
          src={icon}
          alt='card-icon'
          className='w-28 h-28 md:w-16 md:h-16 object-contain'
        />

        <h5 className='text-center'>
          {title}
        </h5>
      </div>
    </motion.div>

);

const About = () => {
    const { i18n, t } = useTranslation();
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>{t('intro_subtitle')}</p>
        <h2 className={styles.sectionHeadText}>{t('intro_title')}</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.5, 1)}
        className='mt-4 text-secondary poppins text-[17px] max-w-3xl leading-[30px]'
      >{t('intro_text')}
      </motion.p>

      <div className='mt-10 flex flex-wrap gap-10 justify-center'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} title={t(service.id)} icon={service.icon}/>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
