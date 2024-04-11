import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export enum Category {
  Animal = 'ANIMAL',
  Cleaning = 'CLEANING',
  Nature = 'NATURE',
  StudyHelp = 'STUDY_HELP'
}

export type Mutation = {
  __typename?: 'Mutation';
  createUser?: Maybe<User>;
  createVolunteer?: Maybe<Volunteer>;
  deleteVolunteer?: Maybe<Volunteer>;
  registerForVolunteer?: Maybe<Volunteer>;
  signInUser?: Maybe<User>;
  updateVolunteer?: Maybe<Volunteer>;
};


export type MutationCreateUserArgs = {
  input: UserCreateInput;
};


export type MutationCreateVolunteerArgs = {
  input: VolunteerCreateInput;
};


export type MutationDeleteVolunteerArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationRegisterForVolunteerArgs = {
  userId?: InputMaybe<Scalars['ID']['input']>;
  volunteerId?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationSignInUserArgs = {
  input: UserSignInInput;
};


export type MutationUpdateVolunteerArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  input: VolunteerUpdateInput;
};

export type Query = {
  __typename?: 'Query';
  getUser?: Maybe<User>;
  getUsers?: Maybe<Array<Maybe<User>>>;
  getVolunteer?: Maybe<Volunteer>;
  getVolunteers?: Maybe<Array<Maybe<Volunteer>>>;
  getVolunteersByCategory?: Maybe<Array<Maybe<Volunteer>>>;
};


export type QueryGetUserArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryGetVolunteerArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryGetVolunteersByCategoryArgs = {
  category: Category;
};

export type User = {
  __typename?: 'User';
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  username?: Maybe<Scalars['String']['output']>;
};

export type UserCreateInput = {
  email: Scalars['String']['input'];
  password?: InputMaybe<Scalars['String']['input']>;
  username: Scalars['String']['input'];
};

export type UserSignInInput = {
  password?: InputMaybe<Scalars['String']['input']>;
  username: Scalars['String']['input'];
};

export type Volunteer = {
  __typename?: 'Volunteer';
  attendees?: Maybe<Array<Maybe<User>>>;
  category?: Maybe<Category>;
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  img?: Maybe<Scalars['String']['output']>;
  isDone: Scalars['Boolean']['output'];
  leader?: Maybe<User>;
  name: Scalars['String']['output'];
  neededPeople: Scalars['String']['output'];
  when: Scalars['String']['output'];
  where: Scalars['String']['output'];
};

export type VolunteerCreateInput = {
  category?: InputMaybe<Category>;
  description: Scalars['String']['input'];
  img?: InputMaybe<Scalars['String']['input']>;
  isDone: Scalars['Boolean']['input'];
  leaderId: Scalars['String']['input'];
  name: Scalars['String']['input'];
  neededPeople: Scalars['String']['input'];
  when: Scalars['String']['input'];
  where: Scalars['String']['input'];
};

export type VolunteerUpdateInput = {
  category: Category;
  description: Scalars['String']['input'];
  img: Scalars['String']['input'];
  isDone: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
  neededPeople: Scalars['String']['input'];
  when: Scalars['String']['input'];
  where: Scalars['String']['input'];
};

export type GetVolunteersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetVolunteersQuery = { __typename?: 'Query', getVolunteers?: Array<{ __typename?: 'Volunteer', id: string, name: string, where: string, when: string, description: string, neededPeople: string, category?: Category | null, isDone: boolean, leader?: { __typename?: 'User', username?: string | null, password?: string | null, email?: string | null, id?: string | null } | null, attendees?: Array<{ __typename?: 'User', username?: string | null, password?: string | null, email?: string | null, id?: string | null } | null> | null } | null> | null };

export type GetVolunteerQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ID']['input']>;
}>;


export type GetVolunteerQuery = { __typename?: 'Query', getVolunteer?: { __typename?: 'Volunteer', id: string, name: string, where: string, when: string, description: string, neededPeople: string, category?: Category | null, isDone: boolean, leader?: { __typename?: 'User', username?: string | null, password?: string | null, email?: string | null, id?: string | null } | null, attendees?: Array<{ __typename?: 'User', username?: string | null, password?: string | null, email?: string | null, id?: string | null } | null> | null } | null };

export type CreateVolunteerMutationVariables = Exact<{
  input: VolunteerCreateInput;
}>;


export type CreateVolunteerMutation = { __typename?: 'Mutation', createVolunteer?: { __typename?: 'Volunteer', id: string, name: string, where: string, when: string, description: string, neededPeople: string, category?: Category | null, isDone: boolean, img?: string | null, leader?: { __typename?: 'User', username?: string | null, password?: string | null, email?: string | null, id?: string | null } | null, attendees?: Array<{ __typename?: 'User', username?: string | null, password?: string | null, email?: string | null, id?: string | null } | null> | null } | null };

export type CreateUserMutationVariables = Exact<{
  input: UserCreateInput;
}>;


export type CreateUserMutation = { __typename?: 'Mutation', createUser?: { __typename?: 'User', username?: string | null, password?: string | null, email?: string | null, id?: string | null } | null };

export type MutationMutationVariables = Exact<{
  input: UserSignInInput;
}>;


export type MutationMutation = { __typename?: 'Mutation', signInUser?: { __typename?: 'User', username?: string | null, password?: string | null, email?: string | null, id?: string | null } | null };

export type GetVolunteersByCategoryQueryVariables = Exact<{
  category: Category;
}>;


export type GetVolunteersByCategoryQuery = { __typename?: 'Query', getVolunteersByCategory?: Array<{ __typename?: 'Volunteer', id: string, name: string, where: string, when: string, description: string, neededPeople: string, category?: Category | null, isDone: boolean, img?: string | null, leader?: { __typename?: 'User', username?: string | null, password?: string | null, email?: string | null, id?: string | null } | null, attendees?: Array<{ __typename?: 'User', username?: string | null, password?: string | null, email?: string | null, id?: string | null } | null> | null } | null> | null };


export const GetVolunteersDocument = gql`
    query GetVolunteers {
  getVolunteers {
    id
    name
    where
    when
    description
    neededPeople
    category
    isDone
    leader {
      username
      password
      email
      id
    }
    attendees {
      username
      password
      email
      id
    }
  }
}
    `;

/**
 * __useGetVolunteersQuery__
 *
 * To run a query within a React component, call `useGetVolunteersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetVolunteersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetVolunteersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetVolunteersQuery(baseOptions?: Apollo.QueryHookOptions<GetVolunteersQuery, GetVolunteersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetVolunteersQuery, GetVolunteersQueryVariables>(GetVolunteersDocument, options);
      }
export function useGetVolunteersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetVolunteersQuery, GetVolunteersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetVolunteersQuery, GetVolunteersQueryVariables>(GetVolunteersDocument, options);
        }
export function useGetVolunteersSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetVolunteersQuery, GetVolunteersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetVolunteersQuery, GetVolunteersQueryVariables>(GetVolunteersDocument, options);
        }
export type GetVolunteersQueryHookResult = ReturnType<typeof useGetVolunteersQuery>;
export type GetVolunteersLazyQueryHookResult = ReturnType<typeof useGetVolunteersLazyQuery>;
export type GetVolunteersSuspenseQueryHookResult = ReturnType<typeof useGetVolunteersSuspenseQuery>;
export type GetVolunteersQueryResult = Apollo.QueryResult<GetVolunteersQuery, GetVolunteersQueryVariables>;
export const GetVolunteerDocument = gql`
    query GetVolunteer($id: ID) {
  getVolunteer(id: $id) {
    id
    name
    where
    when
    description
    neededPeople
    category
    isDone
    leader {
      username
      password
      email
      id
    }
    attendees {
      username
      password
      email
      id
    }
  }
}
    `;

/**
 * __useGetVolunteerQuery__
 *
 * To run a query within a React component, call `useGetVolunteerQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetVolunteerQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetVolunteerQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetVolunteerQuery(baseOptions?: Apollo.QueryHookOptions<GetVolunteerQuery, GetVolunteerQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetVolunteerQuery, GetVolunteerQueryVariables>(GetVolunteerDocument, options);
      }
export function useGetVolunteerLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetVolunteerQuery, GetVolunteerQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetVolunteerQuery, GetVolunteerQueryVariables>(GetVolunteerDocument, options);
        }
export function useGetVolunteerSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetVolunteerQuery, GetVolunteerQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetVolunteerQuery, GetVolunteerQueryVariables>(GetVolunteerDocument, options);
        }
export type GetVolunteerQueryHookResult = ReturnType<typeof useGetVolunteerQuery>;
export type GetVolunteerLazyQueryHookResult = ReturnType<typeof useGetVolunteerLazyQuery>;
export type GetVolunteerSuspenseQueryHookResult = ReturnType<typeof useGetVolunteerSuspenseQuery>;
export type GetVolunteerQueryResult = Apollo.QueryResult<GetVolunteerQuery, GetVolunteerQueryVariables>;
export const CreateVolunteerDocument = gql`
    mutation CreateVolunteer($input: VolunteerCreateInput!) {
  createVolunteer(input: $input) {
    id
    name
    where
    when
    description
    neededPeople
    category
    isDone
    leader {
      username
      password
      email
      id
    }
    attendees {
      username
      password
      email
      id
    }
    img
  }
}
    `;
export type CreateVolunteerMutationFn = Apollo.MutationFunction<CreateVolunteerMutation, CreateVolunteerMutationVariables>;

/**
 * __useCreateVolunteerMutation__
 *
 * To run a mutation, you first call `useCreateVolunteerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateVolunteerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createVolunteerMutation, { data, loading, error }] = useCreateVolunteerMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateVolunteerMutation(baseOptions?: Apollo.MutationHookOptions<CreateVolunteerMutation, CreateVolunteerMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateVolunteerMutation, CreateVolunteerMutationVariables>(CreateVolunteerDocument, options);
      }
export type CreateVolunteerMutationHookResult = ReturnType<typeof useCreateVolunteerMutation>;
export type CreateVolunteerMutationResult = Apollo.MutationResult<CreateVolunteerMutation>;
export type CreateVolunteerMutationOptions = Apollo.BaseMutationOptions<CreateVolunteerMutation, CreateVolunteerMutationVariables>;
export const CreateUserDocument = gql`
    mutation CreateUser($input: UserCreateInput!) {
  createUser(input: $input) {
    username
    password
    email
    id
  }
}
    `;
export type CreateUserMutationFn = Apollo.MutationFunction<CreateUserMutation, CreateUserMutationVariables>;

/**
 * __useCreateUserMutation__
 *
 * To run a mutation, you first call `useCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateUserMutation(baseOptions?: Apollo.MutationHookOptions<CreateUserMutation, CreateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument, options);
      }
export type CreateUserMutationHookResult = ReturnType<typeof useCreateUserMutation>;
export type CreateUserMutationResult = Apollo.MutationResult<CreateUserMutation>;
export type CreateUserMutationOptions = Apollo.BaseMutationOptions<CreateUserMutation, CreateUserMutationVariables>;
export const MutationDocument = gql`
    mutation Mutation($input: UserSignInInput!) {
  signInUser(input: $input) {
    username
    password
    email
    id
  }
}
    `;
export type MutationMutationFn = Apollo.MutationFunction<MutationMutation, MutationMutationVariables>;

/**
 * __useMutationMutation__
 *
 * To run a mutation, you first call `useMutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [mutationMutation, { data, loading, error }] = useMutationMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useMutationMutation(baseOptions?: Apollo.MutationHookOptions<MutationMutation, MutationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<MutationMutation, MutationMutationVariables>(MutationDocument, options);
      }
export type MutationMutationHookResult = ReturnType<typeof useMutationMutation>;
export type MutationMutationResult = Apollo.MutationResult<MutationMutation>;
export type MutationMutationOptions = Apollo.BaseMutationOptions<MutationMutation, MutationMutationVariables>;
export const GetVolunteersByCategoryDocument = gql`
    query GetVolunteersByCategory($category: Category!) {
  getVolunteersByCategory(category: $category) {
    id
    name
    where
    when
    description
    neededPeople
    category
    isDone
    leader {
      username
      password
      email
      id
    }
    attendees {
      username
      password
      email
      id
    }
    img
  }
}
    `;

/**
 * __useGetVolunteersByCategoryQuery__
 *
 * To run a query within a React component, call `useGetVolunteersByCategoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetVolunteersByCategoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetVolunteersByCategoryQuery({
 *   variables: {
 *      category: // value for 'category'
 *   },
 * });
 */
export function useGetVolunteersByCategoryQuery(baseOptions: Apollo.QueryHookOptions<GetVolunteersByCategoryQuery, GetVolunteersByCategoryQueryVariables> & ({ variables: GetVolunteersByCategoryQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetVolunteersByCategoryQuery, GetVolunteersByCategoryQueryVariables>(GetVolunteersByCategoryDocument, options);
      }
export function useGetVolunteersByCategoryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetVolunteersByCategoryQuery, GetVolunteersByCategoryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetVolunteersByCategoryQuery, GetVolunteersByCategoryQueryVariables>(GetVolunteersByCategoryDocument, options);
        }
export function useGetVolunteersByCategorySuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetVolunteersByCategoryQuery, GetVolunteersByCategoryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetVolunteersByCategoryQuery, GetVolunteersByCategoryQueryVariables>(GetVolunteersByCategoryDocument, options);
        }
export type GetVolunteersByCategoryQueryHookResult = ReturnType<typeof useGetVolunteersByCategoryQuery>;
export type GetVolunteersByCategoryLazyQueryHookResult = ReturnType<typeof useGetVolunteersByCategoryLazyQuery>;
export type GetVolunteersByCategorySuspenseQueryHookResult = ReturnType<typeof useGetVolunteersByCategorySuspenseQuery>;
export type GetVolunteersByCategoryQueryResult = Apollo.QueryResult<GetVolunteersByCategoryQuery, GetVolunteersByCategoryQueryVariables>;