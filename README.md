# Amplify Sample

## Function

### tstest

- FunctionのTypeScript対応
- src下にjs/tsの同居
- amplify mockでローカル実行
    - mock起動時に自動トランスパイル
- eslint導入
    - js対称外

```bash
$ amplify mock function tstest --event src/event.json
```
