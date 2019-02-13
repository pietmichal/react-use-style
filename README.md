> ## 🛠 Status: In Development
>
> useStyle is currently in development. v0.1 is on its way to be released mid-February.

# useStyle

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

```javascript
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

# 1.0 Roadmap

- TypeScript support
- Runtime CSS generation
- Dynamic CSS support through template literals.
- SSR support
- Documentation
- Website
