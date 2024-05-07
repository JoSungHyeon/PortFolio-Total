import React from 'react';

const siteText = [
    {
        text: ["make", "site compliant with", "webstandard"],
        title: "Create a site using Vite",
        code: "https://github.com/JoSungHyeon/PortFolio-Total",
        view: "/",
        info: [
            "site coding",
            "production period : two days",
            "use stack : html5/css3, CSS Variable, Vite"
        ]
    },
    {
        text: ["make", "site compliant with", "webstandard"],
        title: "Create a site using React",
        code: "https://github.com/JoSungHyeon/PortFolio-Total",
        view: "/",
        info: [
            "site coding",
            "production period : two days",
            "use stack : html5/css3, CSS Variable, React"
        ]
    },
    {
        text: ["make", "site compliant with", "webstandard"],
        title: "Create a site using Vue",
        code: "https://github.com/JoSungHyeon/PortFolio-Total",
        view: "/",
        info: [
            "site coding",
            "production period : two days",
            "use stack : html5/css3, CSS Variable, Vue"
        ]
    },
    {
        text: ["make", "site compliant with", "webstandard"],
        title: "Create a site using Next",
        code: "https://github.com/JoSungHyeon/PortFolio-Total",
        view: "/",
        info: [
            "site coding",
            "production period : two days",
            "use stack : html5/css3, CSS Variable, Next"
        ]
    },
]

const Site = () => {
  return (
    <section id="site">
        <div className="site_inner">
            <h2 className="site_title">
            Site Coding <em>my site</em>
        </h2>
        <div className="site_wrap">
            {siteText.map((site, key) => (
                <article className={`site_item s${key+1}`} key={key}>
                    <span className="num">{key+1}</span>
                    <div className="text">
                        <div>{site.text[0]}</div>
                        <div>{site.text[1]}</div>
                        <div>{site.text[2]}</div>
                    </div>
                    <h3 className="title">
                        {site.title}
                    </h3>
                    <div className="btn">
                      <a href={site.code}>code</a>
                      <a href={site.view}>view</a>
                    </div>
                    <div className="info">
                        <span>{site.info[0]}</span>
                        <span>{site.info[1]}</span>
                        <span>{site.info[2]}</span>
                    </div>
                </article>
            ))}
        </div>
      </div>
    </section>
  )
}

export default Site