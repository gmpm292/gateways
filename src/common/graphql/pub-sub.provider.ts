import { PubSub } from 'graphql-subscriptions';

export const PUB_SUB_TOKEN = 'PUB_SUB';

export const PubSubProvider = {
  provide: PUB_SUB_TOKEN,
  useValue: new PubSub(),
};
