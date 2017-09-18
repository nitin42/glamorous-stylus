# glamorous-stylus 💄
![status](https://camo.githubusercontent.com/ea5cfca68ba7fb5b41078a9c4ccd38aae38ead4a/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f7374617475732d737461626c652d627269676874677265656e2e737667)
![size](https://img.shields.io/badge/size-1.59%20KB-brightgreen.svg)
![yarn version](https://camo.githubusercontent.com/957c1b2ba7212e71149d922a8d10d067f2d66758/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f7961726e2d302e32312e332d626c75652e737667)
![license](https://camo.githubusercontent.com/743d6ca437fec2ad80985c1208501b7c7b4b97ae/68747470733a2f2f696d672e736869656c64732e696f2f7061636b61676973742f6c2f646f637472696e652f6f726d2e737667)


> Use glamorous to style React components with Stylus

## Install

```
npm install glamorous-stylus
```

After you're done with the installation, place this in your `index.html`.

> IMPORTANT - This is required for client side usage of Stylus

```
<script src="https://cdn.rawgit.com/nitin42/e860b57e7d72a0cdc34ae0388cd8c6e9/raw/dae9a1a254b26ea951903cbb2d918e13f63db5e0/stylus.min.js"></script>
```

## API Reference

### glamorous.stylus(code, { displayName })

Creates a stylus component with the stylus `code` and accepts an optional argument `displayName`.

**Example**

```js
const Button = glamorous.stylus(
  `
button-styles(radius, size, color, type)
  border-radius radius
  border size type color
  color mistyrose
  background-color white

button
  button-styles(3px, 2px, mistyrose, solid)
`,
  { displayName: 'ButtonComponent' }
);
```

<p align="center">
  <img src="https://i.gyazo.com/1877d86f54964d1fe22424a807babee9.png">
</p>

### fontFace(code)

Loads the given font-face and returns the font family name

**Example**

```js
const Fira = glamorous.fontFace(`
@font-face
  font-family FiraCode
  font-style normalize
  src url(./FiraCode-Retina.ttf)
`);

const Name = glamorous.stylus(`
h2
  font-family ${Fira}
`, { displayName: 'Name' });
```

### keyframes(code)

loads the animation keyframes and returns an animation name

**Example**

```js
const fadeIn = glamorous.keyframes(`
animation-name = fadeIn

@keyframes animation-name
  for i in 0..10
    {10% * i}
      opacity (i/10)
`);

const FadeInButton = glamorous.stylus(
  `
button
  animation ${fadeIn} 4s ease-out
`,
  { displayName: "FadeInButton" }
);
```

<p align="center">
  <img src="https://gyazo.com/8e456cdedcc32f281f91712757e3a4f9.gif">
</p>

## Documentation

Similar to [stylus-in-react](https://github.com/nitin42/stylus-in-react) 😄

## License

MIT
