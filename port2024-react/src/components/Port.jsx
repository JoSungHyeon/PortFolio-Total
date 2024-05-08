import React from 'react'
import { portText } from '../constants'

const Port = () => {
  return (
    <section id="port">
        <div className="port_inner">
            <h2 className="port_title">
                portfolio <em>포폴 작업물</em>
            </h2>
            <div className="port_wrap">
                {portText.map((port, key) => (
                    <article className={`port_item p${key+1}`} key={key}>
                        <span className="num">{port.num}</span>
                        <a
                            href={port.code}
                            className="img"
                            target='_blank'
                            rel='noreferrer noopener'
                        >
                            <img src={port.img} alt="포트폴리오" />
                        </a>
                        <h3 className="title">
                            {port.title}
                        </h3>
                        <div className="desc">
                            {port.desc}
                        </div>
                        <a
                            href={port.view}
                            className="site"
                            target='_blank'
                            rel='noreferrer noopener'
                        >사이트 보기</a>
                    </article>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Port