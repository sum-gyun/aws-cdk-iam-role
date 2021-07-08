import * as cdk from '@aws-cdk/core';
import * as iam from '@aws-cdk/aws-iam'
import { PassThrough } from 'stream';

export class IamRoleStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // 👇 Create role
    const role = new iam.Role(this, 'ansible-control', {
      //assumedBy: new iam.ServicePrincipal('apigateway.amazonaws.com'),
      assumedBy: new iam.AccountPrincipal('157180854577'),
      description: 'ansible-control-role',
      // 👇 created with the role, whereas `addToPolicy` ones are added via a separate CloudFormation reosurce ( allows us to avoid circular dependencies
    });

    // 👇 add an Inline Policy to role
    role.addToPolicy(
      new iam.PolicyStatement({
        actions: ["iam:PassRole", "iam:ListInstanceProfiles",  "sts:AssumeRole",  "ec2:*"],
        resources: ['*'],
      }),
    );

    // 👇 Add the Lambda service as a Principal
    role.assumeRolePolicy?.addStatements(
      new iam.PolicyStatement({
        actions: ['sts:AssumeRole'],
        effect: iam.Effect.ALLOW,
        principals: [new iam.ServicePrincipal('ec2.amazonaws.com')],
      }),
    );
  }
}
