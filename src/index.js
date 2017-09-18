const { stylus, keyframes, fontFace } = require('stylus-in-react')

typeof window === undefined ? global : {};

// All checks are done in stylus-in-react
function glamorousStylus(stylusCode, { displayName } = {}) {
  return stylus(stylusCode, { displayName })
}

function glamorousKeyframes(rules) {
  return keyframes(rules)
}

function glamorousFontFace(rules) {
  return fontFace(rules)
}

const glamorous = {
  stylus: glamorousStylus,
  keyframes: glamorousKeyframes,
  fontFace: glamorousFontFace
}

module.exports = glamorous
