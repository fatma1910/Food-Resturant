'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeIn, divVariants, span } from '../variants';
import { Button } from './ui/button';

export const Hero = () => {
  const text =
    'Posuere amet, sed vitae condimentum accumsan aliquam et, aliquam. Tellus in fusce vel gravida lobortis diam dis ut. Bibendum senectus urna, in ultricies sed lorem natoque. Risus pharetra';

  return (
    <div
      className='bg-hero bg-no-repeat xl:bg-cover xl:h-[1098px] pb-32 py-40 xl:py-0 relative'
      id='home'
    >
      <div className='container mx-auto '>
        <div className='flex  items-center xl:h-[960px]'>
          <div className='w-full xl:max-w-[460px] text-center xl:text-left'>
            <motion.h1
              variants={fadeIn('down', 0.2)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.4 }}
              className='text-white mb-7'
            >
              A taste of local <br /> flavours
            </motion.h1>
            <motion.p
              variants={fadeIn('down', 0.4)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.4 }}
              className='text-white font-semibold mb-7'
            >
              by: <span className='text-orange'>Wildan Wari</span>
            </motion.p>
            <motion.div
              className='mb-3'
              variants={divVariants(0.4)}
              initial='hidden'
              whileInView={'visible'}
              viewport={{ once: false, amount: 0.4 }}
            >
              {text.split('').map((char, index) => (
                <motion.span
                  className='text-white mb-12 mx-auto max-w-lg xl:max-w-none xl:mx-0  leading-8'
                  key={index}
                  variants={span()}
                >
                  {char}
                </motion.span>
              ))}
            </motion.div>
            <motion.div
              variants={fadeIn('down', 2)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.4 }}
            >
              <Button>Let's eat</Button>
            </motion.div>
          </div>
          <motion.div
            variants={fadeIn('up', 0.8)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.1 }}
            className='hidden xl:flex xl:absolute xl:top-[200px] xl:right-0 '
          >
            <Image src='/hero/plate.png' width={756} height={682} alt='' />
          </motion.div>
        </div>
      </div>
      <motion.div
        variants={fadeIn('up', 1.2)}
        initial='hidden'
        whileInView={'show'}
        viewport={{ once: false, amount: 0.1 }}
        className='hidden xl:relative xl:flex xl:-top-36 '
      >
        <Image src='/hero/coffee.png' width={386} height={404} alt='' />
      </motion.div>
    </div>
  );
};
