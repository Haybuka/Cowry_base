import Link from 'next/link'
import React from 'react'
import styles from '../../styles/footer.module.css'
const Section = ({ text, items }) => {
    return (
        <section className='my-6 md:my-0'> 
            <h4 className='text-[#011B44] text-xl md:text-2xl mb-4 font-semibold '>{text}</h4>
            <ul className=''>
                {items.map((item, id) => (
                    <li key={id} className={styles.footer_nav_item}>
                        <Link href='/'>
                            {item}
                         </Link>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default Section


