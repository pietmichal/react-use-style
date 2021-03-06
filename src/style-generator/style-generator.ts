export function generateStyle<T>(css: string): T {
  const hash = getHash(css);
  const existingClassNamesMappings = getExistingClassNamesMappings(hash);

  if (existingClassNamesMappings !== undefined) {
    return existingClassNamesMappings;
  }

  const classNames = getClassNames(css);
  const classNamesMappings = getClassNamesMappings(classNames);
  const hashedStyle = getHashedStyle(css, classNamesMappings);
  saveClassNamesMappings(hash, classNamesMappings);
  appendStyleToPage(hashedStyle);
  return classNamesMappings;
}

const __USE_STYLE_MAP__ = new Map<string, any>();

function getExistingClassNamesMappings(hash: string) {
  return __USE_STYLE_MAP__.get(hash);
}

function saveClassNamesMappings(hash: string, mappings: any) {
  __USE_STYLE_MAP__.set(hash, mappings);
}

// todo: optimize regex
function getClassNames(css: string): string[] {
  let result;
  const arr = [];
  const reg = /\.(.*?)\{/g;
  while ((result = reg.exec(css))) {
    arr.push(result[1].trim());
  }
  return arr;
}

function getClassNamesMappings(classNames: string[]): any {
  return classNames.reduce((prev, curr) => {
    return { ...prev, [curr]: getId() };
  }, {});
}

function getId(): string {
  let firstPart = (Math.random() * 46656) | 0;
  let secondPart = (Math.random() * 46656) | 0;
  return "x" + ("000" + firstPart.toString(36)).slice(-3) + ("000" + secondPart.toString(36)).slice(-3);
}

function getHashedStyle(css: string, classNamesMappings: any) {
  return css.replace(/\.(.*?)\{/g, value => {
    const actualValue: string = (/\.(.*?)\{/g.exec(value) as any)[1].trim();
    return value.replace(actualValue, classNamesMappings[actualValue]);
  });
}

function getHash(str: string): string {
  var hash = 0,
    i,
    chr;
  for (i = 0; i < str.length; i++) {
    chr = str.charCodeAt(i);
    hash = (hash << 5) - hash + chr;
    hash |= 0;
  }
  return hash.toString();
}

function appendStyleToPage(css: string): void {
  let styleElement = document.querySelector("style.use-style");
  if (!styleElement) {
    const e = document.createElement("style");
    e.className = "use-style";
    const head = document.querySelector("head");
    if (head) {
      head.appendChild(e);
    }
    styleElement = document.querySelector("style.use-style");
  }
  if (styleElement) {
    styleElement.innerHTML += css;
  }
}
