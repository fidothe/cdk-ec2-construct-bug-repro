import * as cdk from 'aws-cdk-lib';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import { Construct } from 'constructs';

export class CdkBugStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new ec2.Instance(this, 'CdkBugInstance', {
      vpc: new ec2.Vpc(this, 'CdkBugVpc'),
      instanceType: new ec2.InstanceType('t3.micro'),
      machineImage: new ec2.AmazonLinuxImage(),
      init: ec2.CloudFormationInit.fromElements(
        ec2.InitCommand.argvCommand([
          'useradd', '-u', '1001', '-g', '1001', 'eguser',
        ]),
        ec2.InitCommand.argvCommand([
          'useradd', '-a', '-u', '1001', '-g', '1001', 'eguser',
        ]),
      )
    })
  }
}
