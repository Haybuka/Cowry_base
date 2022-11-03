import Link from 'next/link'
import React from 'react'
import styles from '../../styles/download.module.css'
const Download = () => {
    return (
        <section className={styles.download}>
            <article className={styles.download_article}>
                <h3 className={styles.download_heading}>Download Cowry app to get started.</h3>
                <div className='flex items-center'>
                    <Link href='/'>
                        <img src='./images/common/appstore_btn.svg' alt='download' className='w-full'/>
                    </Link>
                    <span className='inline-block mr-[32px]'></span>
                    <Link href='/'>
                        <img src='./images/common/playstore_btn.svg' alt='download' className='w-full'/>
                    </Link>
                </div>
            </article>
            <aside className={styles.download_aside}>
                 <div className=''>
                   <img src='./images/common/footer_iphone.svg' alt='download' className='w-full'/>
                 </div>
               
            </aside>
        </section>
    )
}

export default Download