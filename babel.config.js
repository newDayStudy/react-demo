module.exports = {
  "presets": [
    [
      "@babel/preset-env",

    ],
    "@babel/preset-react"
  ],
  "plugins": [
    [
      "import",
      { "libraryName": "antd", "style": true, 'libraryDirectory': 'es' }
    ]
  ]
}