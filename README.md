> ## 🛠 Status: In Development
>
> useStyle is currently in development. v0.1 is on its way to be released mid-February.

# useStyle

[![CircleCI](https://circleci.com/gh/pietmichal/react-use-style/tree/master.svg?style=svg)](https://circleci.com/gh/pietmichal/react-use-style/tree/master)

React hook applying scoped CSS to a component.

# Goal

Providing the simplest and viable way of introducing CSS into React applications. No external dependencies. Just a hook.

# Installation

npm users

```
npm install react-use-style
```

yarn users

```
yarn add react-use-style
```

# How to use

## Static styles

```javascript
import { useStyle } from "react-use-style";

function Example() {
  const style = useStyle(`
    .red {
      color: red;
      font-weight: bold;
    }
  `);

  return <p className={style.red}>Lorem ipsum dolor sit amet.</p>;
}
```

## Dynamic Styles with Themeing

```javascript
import { useStyle } from "react-use-style";

function Example() {
  const theme = useContext(ThemeContext);
  const style = useStyle(`
    .red {
      color: ${theme.red};
      font-weight: ${theme.fontBold};
    }
  `);

  return <p className={style.red}>Lorem ipsum dolor sit amet.</p>;
}
```

# 1.0 Roadmap

- TypeScript support ✅
- Static CSS generation ✅
- Dynamic CSS generation ☑️
- SSR support ☑️
- Documentation ☑️
- Website ☑️
