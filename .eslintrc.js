module.exports = {
  env: {
    browser: true,
    node: true,
  },
  extends: [
    // vue
    // 'plugin:vue/vue3-essential', // Lv1
    "plugin:vue/vue3-strongly-recommended", // Lv2
    // 'plugin:vue/vue3-recommended' // Lv3

    // js
    "eslint:recommended",
  ],
  parserOptions: {
    parser: "babel-eslint", // babel : es6 이상의 문법을 구형 브라우저에서도 동작할 수 있게 es5로 변환해주는 것
  },
  rules: {
    "vue/html-closing-bracket-newline": [
      "error",
      {
        singleline: "never",
        multiline: "never",
      },
    ],
    "vue/html-self-closing": [
      "error",
      {
        html: {
          void: "always",
          normal: "never",
          component: "always",
        },
        svg: "always",
        math: "always",
      },
    ],
  },
};
