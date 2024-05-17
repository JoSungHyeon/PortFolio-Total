import Image from 'next/image'
import React from 'react'

import { introText } from '@/constants'

const Intro = () => {
  return (
    <section id="intro">
        <div className="intro_inner">
            <h2 className="intro_title">
                {introText.title}
            </h2>
            <div className="intro_lines" aria-hidden="true">
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
            </div>
            <div className="intro_text">
                <div className="text">
                    <div>{introText.desc[0]}</div>
                    <div>{introText.desc[1]}</div>
                    <div>{introText.desc[2]}</div>
                </div>
                <div className="img">
                    <Image
                        src={introText.img}
                        alt='my img'
                        width={300}
                        height={300}
                    />
                </div>
            </div>
            <div className="intro_lines bottom" aria-hidden="true">
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
            </div>
        </div>
    </section>
  )
}

export default Intro