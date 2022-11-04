import Link from 'next/link'
import React from 'react'
import styles from '../../styles/footer.module.css'
const Section = ({ text, items }) => {
    return (
        <section>
            <h4 className='text-[#011B44] text-2xl mb-4'>{text}</h4>
            <ul>
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


