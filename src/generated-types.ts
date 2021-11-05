/* eslint-disable */
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type BooleanInput = {
  ne?: Maybe<Scalars['Boolean']>;
  eq?: Maybe<Scalars['Boolean']>;
};

export type CreateTodoInput = {
  text: Scalars['String'];
  complited: Scalars['Boolean'];
};

export type IdInput = {
  ne?: Maybe<Scalars['ID']>;
  eq?: Maybe<Scalars['ID']>;
  le?: Maybe<Scalars['ID']>;
  lt?: Maybe<Scalars['ID']>;
  ge?: Maybe<Scalars['ID']>;
  gt?: Maybe<Scalars['ID']>;
  in?: Maybe<Array<Scalars['ID']>>;
};

export type MutateTodoInput = {
  id: Scalars['ID'];
  text?: Maybe<Scalars['String']>;
  complited?: Maybe<Scalars['Boolean']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createTODO?: Maybe<Todo>;
  updateTODO?: Maybe<Todo>;
  deleteTODO?: Maybe<Todo>;
};


export type MutationCreateTodoArgs = {
  input: CreateTodoInput;
};


export type MutationUpdateTodoArgs = {
  input: MutateTodoInput;
};


export type MutationDeleteTodoArgs = {
  input: MutateTodoInput;
};

export type OrderByInput = {
  field: Scalars['String'];
  order?: Maybe<SortDirectionEnum>;
};

export type PageRequest = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type Query = {
  __typename?: 'Query';
  getTODO?: Maybe<Todo>;
  findTODOS: TodoResultList;
};


export type QueryGetTodoArgs = {
  id: Scalars['ID'];
};


export type QueryFindTodosArgs = {
  filter?: Maybe<TodoFilter>;
  page?: Maybe<PageRequest>;
  orderBy?: Maybe<OrderByInput>;
};

export enum SortDirectionEnum {
  Desc = 'DESC',
  Asc = 'ASC'
}

export type StringInput = {
  ne?: Maybe<Scalars['String']>;
  eq?: Maybe<Scalars['String']>;
  le?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  ge?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  newTODO: Todo;
  updatedTODO: Todo;
  deletedTODO: Todo;
};


export type SubscriptionNewTodoArgs = {
  filter?: Maybe<TodoSubscriptionFilter>;
};


export type SubscriptionUpdatedTodoArgs = {
  filter?: Maybe<TodoSubscriptionFilter>;
};


export type SubscriptionDeletedTodoArgs = {
  filter?: Maybe<TodoSubscriptionFilter>;
};

/** @model */
export type Todo = {
  __typename?: 'TODO';
  id: Scalars['ID'];
  text: Scalars['String'];
  complited: Scalars['Boolean'];
};

export type TodoFilter = {
  id?: Maybe<IdInput>;
  text?: Maybe<StringInput>;
  complited?: Maybe<BooleanInput>;
  and?: Maybe<Array<TodoFilter>>;
  or?: Maybe<Array<TodoFilter>>;
  not?: Maybe<TodoFilter>;
};

export type TodoResultList = {
  __typename?: 'TODOResultList';
  items: Array<Maybe<Todo>>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  count?: Maybe<Scalars['Int']>;
};

export type TodoSubscriptionFilter = {
  and?: Maybe<Array<TodoSubscriptionFilter>>;
  or?: Maybe<Array<TodoSubscriptionFilter>>;
  not?: Maybe<TodoSubscriptionFilter>;
  id?: Maybe<IdInput>;
  text?: Maybe<StringInput>;
  complited?: Maybe<BooleanInput>;
};
