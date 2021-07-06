### 如何使用 `hooks` 管理项目的状态？

1. 在项目的根目录引入 `composeRootApp`
```js
// index.tsx 中
import composeRootApp from './useModelPlugin';

const RootApp = composeRootApp(<App />);

ReactDOM.render(
  RootApp,
  document.getElementById('root')
);

```
2. 在使用的组件中使用 `useModel`
```js
// App.jsx 中
const {
    user,
    signin,
    signout
  } = useModel('useAuthModel') || {};

```
注意： 这个 demo 仅供参考。在 useModelPlugin/Provider.jsx 中，我是手动引入了 models 目录下的 hooks 状态管理。可以处理成自动化引入。