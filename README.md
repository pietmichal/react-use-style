> ## ⚠️ Project has been cancelled.
> Consider using Styled-Components, Emotion or CSS modules instead.
 


# react-use-style

[![CircleCI](https://circleci.com/gh/pietmichal/react-use-style/tree/master.svg?style=svg)](https://circleci.com/gh/pietmichal/react-use-style/tree/master)

`useStyle` React hook applying scoped CSS to a component.

# Goal

No external dependencies. Just a hook.

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
import { useStyle, css } from "react-use-style";

function Example() {
  const style = useStyle(css`
    .red {
      color: red;
      font-weight: bold;
    }
  `);

  return <p className={style.red}>Lorem ipsum dolor sit amet.</p>;
}
```

## Dynamic Styles Based On Component State

```javascript
import React, { useState, useEffect } from "react";
import { useStyle, css } from "react-use-style";

export function Example() {
  const [color, setColor] = useState("red");
  const [number, setNumber] = useState(0);

  const style = useStyle(css`
    .foo {
      color: ${color};
      font-weight: bold;
    }
  `);

  useEffect(() => {
    let interval = setInterval(() => setNumber(Math.floor(Math.random() * 1000)), 1000);
    return () => interval.unref();
  }, []);

  return (
    <>
      <p className={style.foo}>The number is: {number}</p>
      <br />
      <button onClick={() => setColor("red")}>red</button>
      <button onClick={() => setColor("green")}>green</button>
      <button onClick={() => setColor("blue")}>blue</button>
    </>
  );
}
```


## Dynamic Styles with Themeing

```javascript
import React, { useContext } from "react";
import { useStyle, css } from "react-use-style";

const ThemeContext = React.createContext({ red: "red" });

function Example() {
  const theme = useContext(ThemeContext);
  const style = useStyle(css`
    .red {
      color: ${theme.red};
      font-weight: bold;
    }
  `);

  return <p className={style.red}>Lorem ipsum dolor sit amet.</p>;
}
```
