# AWS CDK IAM Role Example

## How to Use

1. Clone the repository

2. Install the dependencies

```bash
npm install
```

3. Create the CDK stack

```bash
npx cdk deploy
```

4. Open the AWS CloudFormation Console and the stack should be created in your
   default region

5. Cleanup

```bash
npx cdk destroy
```

## cdk_synth

```
Resources:
  ansiblecontrolA3364519:
    Type: AWS::IAM::Role
    Properties:
      AssumeRolePolicyDocument:
        Statement:
          - Action: sts:AssumeRole
            Effect: Allow
            Principal:
              AWS:
                Fn::Join:
                  - ""
                  - - "arn:"
                    - Ref: AWS::Partition
                    - :iam::{ACCOUNT_ID}:root
          - Action: sts:AssumeRole
            Effect: Allow
            Principal:
              Service:
                Fn::Join:
                  - ""
                  - - ec2.
                    - Ref: AWS::URLSuffix
        Version: "2012-10-17"
      Description: ansible-control-role
    Metadata:
      aws:cdk:path: IamRoleStack/ansible-control/Resource
  ansiblecontrolDefaultPolicy9E4F2627:
    Type: AWS::IAM::Policy
    Properties:
      PolicyDocument:
        Statement:
          - Action:
              - iam:PassRole
              - iam:ListInstanceProfiles
              - sts:AssumeRole
              - ec2:*
            Effect: Allow
            Resource: "*"
        Version: "2012-10-17"
      PolicyName: ansiblecontrolDefaultPolicy9E4F2627
      Roles:
        - Ref: ansiblecontrolA3364519
    Metadata:
      aws:cdk:path: IamRoleStack/ansible-control/DefaultPolicy/Resource
  CDKMetadata:
    Type: AWS::CDK::Metadata
    Properties:
      Analytics: v2:deflate64:H4sIAAAAAAAAEyWLSwrDMAwFz5K9o1SQ7gu5QHFPYGQHlI8F/jQU47s3TlYzj+EhICI8upc5Yk92HQpJcFA+ydCqJvExhUxJTbPXLkoO5JqfwXJi8VW1I5sdipbtahffsjH92rytVuXFOlji8MUR8Aljt0TmPmSfeHegb/4BX+rHKZAAAAA=
    Metadata:
      aws:cdk:path: IamRoleStack/CDKMetadata/Default
    Condition: CDKMetadataAvailable
Conditions:
  CDKMetadataAvailable:
    Fn::Or:
      - Fn::Or:
          - Fn::Equals:
              - Ref: AWS::Region
              - af-south-1
          - Fn::Equals:
              - Ref: AWS::Region
              - ap-east-1
          - Fn::Equals:
              - Ref: AWS::Region
              - ap-northeast-1
          - Fn::Equals:
              - Ref: AWS::Region
              - ap-northeast-2
          - Fn::Equals:
              - Ref: AWS::Region
              - ap-south-1
          - Fn::Equals:
              - Ref: AWS::Region
              - ap-southeast-1
          - Fn::Equals:
              - Ref: AWS::Region
              - ap-southeast-2
          - Fn::Equals:
              - Ref: AWS::Region
              - ca-central-1
          - Fn::Equals:
              - Ref: AWS::Region
              - cn-north-1
          - Fn::Equals:
              - Ref: AWS::Region
              - cn-northwest-1
      - Fn::Or:
          - Fn::Equals:
              - Ref: AWS::Region
              - eu-central-1
          - Fn::Equals:
              - Ref: AWS::Region
              - eu-north-1
          - Fn::Equals:
              - Ref: AWS::Region
              - eu-south-1
          - Fn::Equals:
              - Ref: AWS::Region
              - eu-west-1
          - Fn::Equals:
              - Ref: AWS::Region
              - eu-west-2
          - Fn::Equals:
              - Ref: AWS::Region
              - eu-west-3
          - Fn::Equals:
              - Ref: AWS::Region
              - me-south-1
          - Fn::Equals:
              - Ref: AWS::Region
              - sa-east-1
          - Fn::Equals:
              - Ref: AWS::Region
              - us-east-1
          - Fn::Equals:
              - Ref: AWS::Region
              - us-east-2
      - Fn::Or:
          - Fn::Equals:
              - Ref: AWS::Region
              - us-west-1
          - Fn::Equals:
              - Ref: AWS::Region
              - us-west-2
```

## Useful commands

 * `npm run build`   compile typescript to js
 * `npm run watch`   watch for changes and compile
 * `npm run test`    perform the jest unit tests
 * `cdk deploy`      deploy this stack to your default AWS account/region
 * `cdk diff`        compare deployed stack with current state
 * `cdk synth`       emits the synthesized CloudFormation template
