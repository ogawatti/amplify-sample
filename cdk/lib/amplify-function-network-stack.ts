import * as cdk from 'aws-cdk-lib';
import * as ec2 from 'aws-cdk-lib/aws-ec2';

export class AmplifyFunctionNetworkStack extends cdk.Stack {
  public readonly vpcId = `AmplifyFunctionVPC-${this.env}`;
  public readonly sgId = `AmplifyFunctionScurityGroup-${this.env}`;
  public readonly cidr = '10.0.0.0/16';
  public readonly subnetMask = 24;

  /**
   *
   * @param {cdk.Construct} scope
   * @param {string} id
   * @param {cdk.StackProps=} props
   */
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // VPC
    const vpc = new ec2.Vpc(this, this.vpcId, {
      ipAddresses: ec2.IpAddresses.cidr(this.cidr),
      maxAzs: 2,
      natGateways: 1,
      natGatewaySubnets: {
        subnetGroupName: 'public',
      },
      subnetConfiguration: [
        { cidrMask: this.subnetMask, name: 'public',  subnetType: ec2.SubnetType.PUBLIC },
        { cidrMask: this.subnetMask, name: 'private', subnetType: ec2.SubnetType.PRIVATE_WITH_EGRESS }
      ]
    });

    // Secuirty Group
    const securityGroup = new ec2.SecurityGroup(this, this.sgId, {
      securityGroupName: `amplify-function-security-group-${this.env}`,
      vpc,
      description: 'amplify function security group for vpc',
      allowAllOutbound: true
    });
  }

  get env() {
    return process.env.ENV || 'dev';
  }
}
