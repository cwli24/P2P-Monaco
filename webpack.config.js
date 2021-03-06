const path = require('path')

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: {
    monaco: './monaco.js',
    // Package each language's worker and give these filenames in `getWorkerUrl`
    'editor.worker': 'monaco-editor/esm/vs/editor/editor.worker.js',
    'json.worker': 'monaco-editor/esm/vs/language/json/json.worker',
    'css.worker': 'monaco-editor/esm/vs/language/css/css.worker',
    'html.worker': 'monaco-editor/esm/vs/language/html/html.worker',
    'ts.worker': 'monaco-editor/esm/vs/language/typescript/ts.worker'
  },
  output: {
    globalObject: 'self',
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    publicPath: '/monaco/dist/'
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }, {
      test: /\.ttf$/,
      use: ['file-loader']
    }]
  },
  devServer: {
    compress: true,
	open: ['/monaco/index.html'],
	port: 8080,
	server: 'http',
	static: {
		directory: __dirname,
		publicPath: '/monaco'
	},
  },
};
