module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: ["eslint:recommended", "plugin:react/recommended", "prettier"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
    GLOBAL: false,
    it: false,
    xit: false,
    expect: false,
    describe: false,
    jest: false,
    require: false,
    module: false,
    Promise: false,
    beforeAll: false,
    beforeEach: true
  },
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: "module"
  },
  settings: {
    react: {
      createClass: "createReactClass", // Regex for Component Factory to use,
      // default to "createReactClass"
      pragma: "React", // Pragma to use, default to "React"
      version: "detect", // React version. "detect" automatically picks the version you have installed.
      // You can also use `16.0`, `16.3`, etc, if you want to override the detected value.
      // default to latest and warns if missing
      // It will default to "detect" in the future
      flowVersion: "0.53" // Flow version
    },
    propWrapperFunctions: [
      // The names of any function used to wrap propTypes, e.g. `forbidExtraProps`. If this isn't set, any propTypes wrapped in a function will be skipped.
      "forbidExtraProps",
      {property: "freeze", object: "Object"},
      {property: "myFavoriteWrapper"}
    ],
    linkComponents: [
      // Components used as alternatives to <a> for linking, eg. <Link to={ url } />
      "Hyperlink",
      {name: "Link", linkAttribute: "to"}
    ]
  },
  plugins: ["react", "react-native", "prettier"],
  rules: {
    "react/display-name": 0,
    "react-native/split-platform-components": 2,
    "react/no-did-mount-set-state": 2,
    "react/no-did-update-set-state": 2,
    "react/no-direct-mutation-state": 2,
    "react/jsx-uses-vars": 2,
    "no-unused-vars": [
      "error",
      {
        varsIgnorePattern: "React"
      }
    ],
    "comma-spacing": [
      "error",
      {
        before: false,
        after: true
      }
    ],
    "no-undef": 2,
    indent: ["error", 2],
    "linebreak-style": ["error", "unix"],
    quotes: ["error", "double"],
    semi: ["error", "always"],
    "jsx-quotes": ["error", "prefer-double"],
    quotes: ["error", "double"],
    "react/jsx-indent": [2, 2],
    "react/prop-types": 2,
    "react/jsx-no-bind": 2,
    "react/jsx-no-duplicate-props": 2,
    "space-before-blocks": 2,
    "space-before-function-paren": 0,
    "space-in-parens": 2,
    "space-infix-ops": 2,
    "space-unary-ops": 2,
    "spaced-comment": 2,
    "rest-spread-spacing": 2,
    "semi-spacing": 2,
    "no-unneeded-ternary": 2,
    eqeqeq: 2,
    "dot-location": 2,
    "no-extra-bind": 2,
    "keyword-spacing": 2,
    "key-spacing": 2,
    "func-call-spacing": 2,
    "array-bracket-spacing": 2,
    "block-spacing": 2,
    "brace-style": 2,
    "arrow-body-style": 2,
    "arrow-parens": 2,
    "arrow-spacing": 2,
    "react/self-closing-comp": 2,
    "object-curly-spacing": 2,
    "no-console": 2
  }
};
