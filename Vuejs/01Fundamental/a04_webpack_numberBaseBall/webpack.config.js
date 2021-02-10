const VueLoaderPlugin = require ('vue-loader/lib/plugin');    // node 환경에서는 require, vue, react는 import
const path = require('path');  // node.js 제공 모듈

module.exports = {
  mode: 'development',
  devtool: 'eval', // 배포할 때는 hidden source map을 많이 쓴다. eval은 속도가 빠르다.
  resolve: {
    extensions: ['.js', '.vue']// 확장자 처리
  },
  // entry : 가장 대표가 되는 파일 (하나로 합쳐줄)
  entry: {
    app: path.join(__dirname, 'main.js'), // app: 하나로 합쳐질 파일 이름. main : 가장 대표가 되는 핵심 파일
  },
  module: {  // 앱 페이지의 핵심. 어떻게 합칠지, 처리할 지를 정한다.
    rules: [{
      test: /\.vue$/,  //.vue로 끝나는 파일
      loader: 'vue-loader', // use: 'vue-loader'로 써도 됨
    }],
  },
  plugins: [
    new VueLoaderPlugin(),
  ],
  output: {
    // filename: 'app.js'  // 하나로 합쳐질 파일명을 정해줌.
    filename: '[name].js',   // app이 name에 저절로 들어감
    path: path.join(__dirname, 'dist'),        // distribution 폴더 경로. app.js가 최종 결과물로 나옴.
                                              // diraname은 현재 경로
  },
};
