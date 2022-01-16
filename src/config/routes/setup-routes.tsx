import React from 'react';
import { RouteObject } from 'react-router-dom';
import { ChainHookElements, withSuspense } from './route-loader';
import { RequireAuth } from './hooks/require-auth';
import { AnotherCheck } from './hooks/another-check';
import { Paths } from '../../constants/route-paths';

const Counter = React.lazy(() => import('../../features/counter/Counter'));
const SignInForm = React.lazy(() => import('../../core/auth/sign-in/sign-in-form'));
const Campaigns = React.lazy(() => import('../../features/campaign/campaigns'));
const Details = React.lazy(() => import('../../features/campaign/details'));
const Manage = React.lazy(() => import('../../features/campaign/manage'));

const Dashboard = React.lazy(() => import('../../features/dashboard/home/dashboard'));
const UsersCreate = React.lazy(() => import ('../../features/dashboard/users/create/users-create'));
const UsersUpdate = React.lazy(() => import ('../../features/dashboard/users/update/users-update'));
const UsersList = React.lazy(() => import ('../../features/dashboard/users/list/users-list'));

export const routes: RouteObject[] = [
  {
    path: Paths.HOME,
    children: [
      {
        element: withSuspense(Counter),
        index: true,
      },
      {
        path: Paths.SIGN_IN,
        element: withSuspense(SignInForm),
      },
      {
        path: Paths.CAMPAIGNS.HOME,
        element: withSuspense(Campaigns),
        children: [
          {
            path: Paths.CAMPAIGNS.DETAILS,
            element: (
              <ChainHookElements
                element={withSuspense(Details)}
                hooks={[<RequireAuth key="auth" />, <AnotherCheck key="another-check" />]}
              />
            ),
          },
          {
            path: Paths.CAMPAIGNS.MANAGE,
            element: withSuspense(Manage),
          },
        ],
      },{
        path: Paths.DASHBOARD.HOME,
        element: withSuspense(Dashboard),
        children: [
          {
            path: Paths.DASHBOARD.USERS.CREATE,
            element: withSuspense(UsersCreate),
          },
          {
            path: Paths.DASHBOARD.USERS.UPDATE,
            element: withSuspense(UsersUpdate),
          },
          {
            path: Paths.DASHBOARD.USERS.LIST,
            element: withSuspense(UsersList),
          }
        ]
      }
    ],
  },
];
