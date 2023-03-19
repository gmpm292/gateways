import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';

import {
  ConfigModule,
  ConfigService,
  parseOriginFromEnvironment,
} from '../config';

import { formatError } from './errors/format-error.helper';
import { PubSubProvider } from './pub-sub.provider';

@Module({
  imports: [
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      imports: [ConfigModule],
      useFactory: async () => ({
        playground: true,
        introspection: true,
        cors: {
          credentials: true,
          origin: parseOriginFromEnvironment(),
        },
        includes: ['*.graphql'],
        typePaths: ['./**/*.graphql'],
        formatError,
        subscriptions: {
          'graphql-ws': true,
        },
        context: ({ req, res }): unknown => ({ req, res }),
      }),
      inject: [ConfigService],
    }),
  ],
  providers: [PubSubProvider],
  exports: [PubSubProvider],
})
export class GraphqlModule {}
