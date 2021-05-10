import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import cleanup from 'rollup-plugin-cleanup';
import postcss from 'rollup-plugin-postcss';
import pkg from './package.json';

const extensions = ['.js', '.jsx', '.ts', '.tsx']; // 어떤 확장자를 처리 할 지 정함

export default {
  input: './src/index.ts', // 어떤 파일부터 불러올지 정함.
  output: [
    {
      file: pkg.module, // 번들링한 파일을 저장 할 경로
      format: 'es' // ES Module 형태로 번들링함
    }
  ],
  plugins: [
    peerDepsExternal(), // peerDependencies로 설치한 라이브러리들을 external 모듈로 설정 즉, 번들링된 결과에 포함시키지 않음
    resolve({ extensions }), // node_modules 에서 모듈을 불러올 수 있게 해줌. ts/tsx 파일도 불러올 수 있게 해줌
    commonjs({
      include: 'node_modules/**'
    }), // CommonJS 형태로 만들어진 모듈도 불러와서 사용 할 수 있게 해줌. 현재 프로젝트 상황에서는 없어도 무방함
    babel({ extensions, include: ['src/**/*'], babelHelpers: 'bundled' }), // Babel을 사용 할 수 있게 해줌
    cleanup(),
    postcss({
      extensions: ['.css', '.scss']
    })
  ]
};
