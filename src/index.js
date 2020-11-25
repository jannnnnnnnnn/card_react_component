import React from 'react'
import styles from './styles.module.css'

// export const ExampleComponent = ({ text }) => {
//   return <div className={styles.test}>Example Component: {text}</div>
// }

export const JanCard = ({
  image,
  icon,
  title,
  description,
  subtext,
  sociallink,
  iconlink,
  children
}) => {
  //setting states
  const [follow, setFollow] = React.useState(true)

  //event handler
  const handleSocialClick = (e) => {
    e.preventDefault()
    console.log('i am in handleSocialClick')
    window.open(sociallink, '_blank')
    setFollow(!follow)
  }

  return (
    <div className={styles.card}>
      {children}
      {image ? <img className={styles.banner} src={image} alt={title} /> : null}
      <section>
        <a href={iconlink}>
          <img className={styles.icon} src={icon} />
        </a>
        {sociallink ? (
          <button
            className={follow ? null : styles.unfollow}
            onClick={handleSocialClick}
          >
            {follow ? 'Follow' : 'UnFollow'}
          </button>
        ) : (
          <div className={styles.nobutton}></div>
        )}
      </section>
      <div className={styles.infosection}>
        <h1>{title}</h1>
        {description ? (
          <h2>
            {description.map((item, idx) => (
              <span key={idx}>{item}</span>
            ))}
          </h2>
        ) : null}
        <div>{subtext}</div>
      </div>
    </div>
  )
}
