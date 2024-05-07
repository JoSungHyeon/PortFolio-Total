import React from 'react';

const skillText = [
    {
      title: "HTML",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem magnam doloribus molestiae veritatis, sit ullam culpa pariatur veniam, eum rerum illum, saepe ea dicta   excepturi optio consequatur possimus commodi est."
    },
    {
      title: "CSS",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem magnam doloribus molestiae veritatis, sit ullam culpa pariatur veniam, eum rerum illum, saepe ea dicta   excepturi optio consequatur possimus commodi est."
    },
    {
      title: "JAVASCRIPT",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem magnam doloribus molestiae veritatis, sit ullam culpa pariatur veniam, eum rerum illum, saepe ea dicta   excepturi optio consequatur possimus commodi est."
    },
    {
      title: "REACT",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem magnam doloribus molestiae veritatis, sit ullam culpa pariatur veniam, eum rerum illum, saepe ea dicta   excepturi optio consequatur possimus commodi est."
    }
]

const Skill = () => {
  return (
    <section id="skill">
            <div className="skill_inner">
                <h2 className="skill_title">
                    my <em>personality</em>
                </h2>
                <div className="skill_desc">
                  {skillText.map((skill, key) => (
                    <div key={key}>
                      <span>{key+1}</span>
                      <h3>{skill.title}</h3>
                      <p>{skill.desc}</p>
                    </div>
                  ))}
                </div>
            </div>
        </section>
  )
}

export default Skill