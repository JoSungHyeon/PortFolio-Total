import React from 'react'
import portImg from '../assets/img/tiger.jpg'

const portText = [
    {
        num: "01",
        title: "그냥 포트폴리오",
        desc: "포트폴리오 멘트 들어갈 자리임",
        img: portImg,
        code: "/",
        view: "/",
        name: "포트폴리오"
    },
    {
        num: "02",
        title: "그냥 포트폴리오",
        desc: "포트폴리오 멘트 들어갈 자리임",
        img: portImg,
        code: "/",
        view: "/",
        name: "포트폴리오"
    },
    {
        num: "03",
        title: "그냥 포트폴리오",
        desc: "포트폴리오 멘트 들어갈 자리임",
        img: portImg,
        code: "/",
        view: "/",
        name: "포트폴리오"
    },
    {
        num: "04",
        title: "그냥 포트폴리오",
        desc: "포트폴리오 멘트 들어갈 자리임",
        img: portImg,
        code: "/",
        view: "/",
        name: "포트폴리오"
    },
    {
        num: "05",
        title: "그냥 포트폴리오",
        desc: "포트폴리오 멘트 들어갈 자리임",
        img: portImg,
        code: "/",
        view: "/",
        name: "포트폴리오"
    },
    {
        num: "06",
        title: "그냥 포트폴리오",
        desc: "포트폴리오 멘트 들어갈 자리임",
        img: portImg,
        code: "/",
        view: "/",
        name: "포트폴리오"
    },
    {
        num: "07",
        title: "그냥 포트폴리오",
        desc: "포트폴리오 멘트 들어갈 자리임",
        img: portImg,
        code: "/",
        view: "/",
        name: "포트폴리오"
    },
    {
        num: "08",
        title: "그냥 포트폴리오",
        desc: "포트폴리오 멘트 들어갈 자리임",
        img: portImg,
        code: "/",
        view: "/",
        name: "포트폴리오"
    },
    {
        num: "09",
        title: "그냥 포트폴리오",
        desc: "포트폴리오 멘트 들어갈 자리임",
        img: portImg,
        code: "/",
        view: "/",
        name: "포트폴리오"
    },
    {
        num: "10",
        title: "그냥 포트폴리오",
        desc: "포트폴리오 멘트 들어갈 자리임",
        img: portImg,
        code: "/",
        view: "/",
        name: "포트폴리오"
    },
]

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
                        <a href={port.code} className="img">
                            <img src={port.img} alt="포트폴리오" />
                        </a>
                        <h3 className="title">
                            {port.title}
                        </h3>
                        <div className="desc">
                            {port.desc}
                        </div>
                        <a href={port.view} className="site">사이트 보기</a>
                    </article>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Port