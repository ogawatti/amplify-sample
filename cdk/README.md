# AWS CDK

Amplify FunctionをVPCに配置するためのVPCを構築します。

## Stacks一覧

```bash
$ cdk ls
AmplifyFunctionNetworkStack-dev
```

# 環境構築

```
## VPCの構築
$ STAGE=dev cdk deploy AmplifyFunctionNetworkStack-dev --profile xxx
```