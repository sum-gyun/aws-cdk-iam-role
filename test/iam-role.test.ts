import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import * as IamRole from '../lib/iam-role-stack';

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new IamRole.IamRoleStack(app, 'MyTestStack');
    // THEN
    expectCDK(stack).to(matchTemplate({
      "Resources": {}
    }, MatchStyle.EXACT))
});
