import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { CDKContext } from '../types';

export class LambdaStack extends Stack {
  constructor(scope: Construct, id: string, props: StackProps, context: CDKContext) {
    super(scope, id, props);
  }
}
