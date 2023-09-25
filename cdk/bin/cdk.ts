#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { AmplifyFunctionNetworkStack } from '../lib/amplify-function-network-stack';

const app = new cdk.App();
const env = process.env.ENV || 'dev'
new AmplifyFunctionNetworkStack(app, `AmplifyFunctionNetworkStack-${env}`, {})
