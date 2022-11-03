import React from 'react'
import LeadHead from './lead_heading'
import styles from '../../styles/about.module.css'
const AboutTwo = () => {
    const transportSection = [
        {
            title: 'Our mission',
            body: 'Connecting Lagosians with people and places they care about by providing safe, accessible, reliable and accountable fare collection services.'
        },
        {
            title: 'Our vision',
            body: 'Cowry will be the first choice for getting around Lagos, and reduce cash transactions.'
        },
        {
            title: 'Value',
            body: 'Accessible Transit, Commuter Satisfaction, Seamless mode of payment in other to make commuting less stressful for you.'
        }
    ]
    return (
        <section className={`${styles.about_container} ${styles.about_two} `}>
            <LeadHead index="02" text="Transport Made Seamless With Cowry" text_style="text-white text-3xl ml-3" />
            <p className='text-white leading-[30px]'>
                As long as you have your smartphone or cowry card, you can never be left stranded in Lagos. Now you can reduce your rush to go out and about in the city because Cowry takes out the queue and wait period.
            </p>
            <article className=' mt-16 text-white'>
                {transportSection.map((section, id) => (
                    <div key={id} className={styles.about_two_transport}>
                        <h3 className='text-2xl font-semibold'>{section.title}</h3>
                        <p className='md:w-[600px]'>{section.body}</p>
                    </div>
                ))}
            </article>
        </section>
    )
}

export default AboutTwo