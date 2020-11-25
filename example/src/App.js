import React from 'react'

import { JanCard } from 'jancard_react_component_library'
import 'jancard_react_component_library/dist/index.css'

// const App = () => {
//   return <ExampleComponent text="Create React Library Example 😄" />
// }

const description = [
  'Translating Ideas to Reality - ',
  <a href='#in'>#REACT</a>,
  ', ',
  <a href='#in'>#JAVASCRIPT</a>,
  ', ',
  <a href='#in'>#CSS</a>,
  ', and ',
  <a href='#in'>#UXDesign</a>
]

const App = () => {
  return (
    <div>
      <JanCard
        image='https://i.imgur.com/WUNEewe.png'
        icon='https://i.imgur.com/j86yLbs.png'
        title='Space Ship'
        description={description}
        subtext='North America & Europe · hanservices.com · Joined March 2009 '
        sociallink='https://www.google.com/'
        iconlink='https://www.google.com/'
      ></JanCard>
      <JanCard
        image='https://i.imgur.com/WUNEewe.png'
        icon='https://i.imgur.com/j86yLbs.png'
        title='Bounteous'
        description={description}
        subtext='North America & Europe · hanservices.com · Joined March 2009 '
        sociallink='https://www.google.com/'
        iconlink='https://www.google.com/'
      >
        Add some content here
      </JanCard>
    </div>
  )
}

export default App
