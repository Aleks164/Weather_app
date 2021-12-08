module.exports = api => ({
  "plugins": [
    [
      "@babel/plugin-transform-runtime",
      {
        "absoluteRuntime": false,
        "corejs": false,
        "helpers": true,
        "regenerator": true,
        "version": "7.0.0-beta.0"
      }
    ]
  ],
  presets: [
    [
      "@babel/preset-env",
      {
        useBuiltIns: "entry",
        corejs: "3",
        targets: api.caller(caller => caller && caller.target === "node")
          ? { node: "current" }
          : { chrome: "58", ie: "11" }
      }
    ]
  ]
})
