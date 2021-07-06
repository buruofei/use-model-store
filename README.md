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

3. hooks 调用顺序
##### mount 阶段
appids: 1
App.jsx:18 parentmemo1
App.jsx:37 parnetmemo2
Son.jsx:5 sonmemo1
Son.jsx:22 sonmemo2
Son.jsx:9 sonEffectcreate1
Son.jsx:26 sonEffectcreate2
App.jsx:22 parentEffectcreate1
App.jsx:41 parentEffectcreate2
##### update 阶段
App.jsx:10 appids: 2
App.jsx:18 parentmemo1
App.jsx:37 parnetmemo2
Son.jsx:5 sonmemo1
Son.jsx:22 sonmemo2
Son.jsx:11 sonEffectdestore1
Son.jsx:28 sonEffectdestore2
App.jsx:24 parentEffectdestore1
App.jsx:43 parentEffectdestore2
Son.jsx:9 sonEffectcreate1
Son.jsx:26 sonEffectcreate2
App.jsx:22 parentEffectcreate1
App.jsx:41 parentEffectcreate2