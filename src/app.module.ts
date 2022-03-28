import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import {
  ApolloFederationDriver,
  ApolloFederationDriverConfig,
} from '@nestjs/apollo';
import responseCachePlugin from 'apollo-server-plugin-response-cache';

import { RecipesModule } from './recipes/recipes.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloFederationDriverConfig>({
      typePaths: ['./**/*.graphql'],
      driver: ApolloFederationDriver,
      plugins: [responseCachePlugin()],
    }),
    RecipesModule,
  ],
})
export class AppModule {}
