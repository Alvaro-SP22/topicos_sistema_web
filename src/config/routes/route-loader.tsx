import React from 'react';
import LoadingPage from '../../core/layout/loading-page/loading-page';
import { AnyObject } from '../../utils/base-types';
import { chainHooks, IChainHookProps } from './hooks/chain-hooks';

export const withSuspense = (Component: React.ComponentType<any>, props: AnyObject = {}) => (
  <React.Suspense fallback={<LoadingPage />}>
    <Component {...props} />
  </React.Suspense>
);

export const ChainHookElements: React.FC<IChainHookProps> = React.memo(({ element, hooks }) =>
  chainHooks(hooks, element)
);
