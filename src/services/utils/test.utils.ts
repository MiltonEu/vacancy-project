import {
  DynamicModule,
  ForwardReference,
  Provider,
  Type,
} from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
export interface WrappedTestingModuleProvider<T> {
  module: TestingModule;
  provider: T;
}
export async function getTestingModuleForProvider<T>(
  classRef: Type<T>,
  additionalImports:
    | (Type | DynamicModule | Promise<DynamicModule> | ForwardReference)[]
    | undefined,
  providers: Provider[],
): Promise<WrappedTestingModuleProvider<T>> {
  const imports = [...(additionalImports || [])];
  const module: TestingModule = await Test.createTestingModule({
    imports,
    providers: [...providers, classRef],
  }).compile();

  return { module, provider: module.get<T>(classRef) };
}
