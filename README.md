> ## 🛠 Status: In Development
> useStyle is currently in development. v0.1 is on its way to be released mid-February.

# useStyle
React hook applying scoped CSS to a component.

# Goal
Our goal is to create a go to solution for component styling in React community that is pragmatic, optimized, easy to use and well documented. 

# Potential syntax

```javascript
function Example() {
  const style = useStyle(`
    .red {
      color: red;
      font-weight: bold;
    }
  `);
  
  return (
    <p className={style.red}>Lorem ipsum dolor sit amet.</p>
  );
}
```

# 1.0 Roadmap
* Runtime CSS generation
* Dynamic CSS support through template literals.
* SSR support
* Documentation
* Website



