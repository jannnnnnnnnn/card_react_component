# jancard_react_component_library

# Card Component Developed by Janet

This card is a responsive design (mobile first) that includes width of 300px and 500px
| Width of 500px | Width of 300px |
| :-------------: | :-----------: |
| ![500px Display Demo](https://i.imgur.com/sitFJNu.png) | ![300px Display Demo](https://i.imgur.com/ukNY4Wv.png) |

## Install

```bash
yarn add jancard_react_component_library
```

## Usage

```jsx
import JanCard from 'jancard_react_component_library'

const Example = () => {
  return (
    <JanCard
      image=""
      icon=""
      title=""
      description=[]
      subtext=""
      sociallink=""
      iconlink="">
      Content in here shall be added to the top of the card
    </JanCard>
  )
}
```

## Props

| Prop        | Type   | Default  | Example                                                          |
| ----------- | ------ | -------- | ---------------------------------------------------------------- |
| image       | string | optional | "https://picsum.photos/id/1021/367/267"                          |
| icon        | string | optional | "https://picsum.photos/id/1021/367/267"                          |
| title       | string | optional | "Best Card Ever"                                                 |
| description | array  | optional | ['Content and Coffee - ', <a href='#in'>#AEM/CQ5</a>, 'Content'] |
| subtext     | string | optional | "Best Card Ever"                                                 |
| sociallink  | string | optional | "https://twitter.com/follow"                                     |
| iconlink    | string | optional | "https://github.com/jannnnnnnnnn"                                |

## FAQ

To use this library on Windows Internet Explore. please install [react-app-polyfill](https://www.npmjs.com/package/react-app-polyfill)

```

## License

MIT © [jannnnnnnnnn](https://github.com/jannnnnnnnnn)
```
