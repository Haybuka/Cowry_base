import Link from 'next/link'
import React from 'react'
import styles from '../../styles/download.module.css'
const Download = () => {
    return (
        <section className={styles.download}>
            <article className={styles.download_article}>
                <h3 className={styles.download_heading}>Download Cowry app to get started.</h3>
                <div className='flex-col flex items-center md:flex-row'>
                    <Link href='https://apps.apple.com/ng/app/cowry-transport-payment/id1556632029' target="_blank">
                        <div className='w-[250px] md:w-auto my-3 md:my-0'>
                        <img src='./images/common/appstore_btn.svg' alt='download' className='w-full'/>
                        </div>
                    </Link>
                    <span className='inline-block mr-[32px]'></span>
                    <Link href='https://play.google.com/store/apps/details?id=com.cowry&hl=en&gl=US' target="_blank">
                        <div className='w-[250px] md:w-auto my-3 md:my-0'>
                        <img src='./images/common/playstore_btn.svg' alt='download' className='w-full'/>

                        </div>
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