//@ts-nocheck
  // DO NOT MODIFY THIS FILE. This file is automatically generated by Tina
  export function gql(strings: TemplateStringsArray, ...args: string[]): string {
    let str = ''
    strings.forEach((string, i) => {
      str += string + (args[i] || '')
    })
    return str
  }
  export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** References another document, used as a foreign key */
  Reference: { input: any; output: any; }
  JSON: { input: any; output: any; }
};

export type SystemInfo = {
  __typename?: 'SystemInfo';
  filename: Scalars['String']['output'];
  title?: Maybe<Scalars['String']['output']>;
  basename: Scalars['String']['output'];
  breadcrumbs: Array<Scalars['String']['output']>;
  path: Scalars['String']['output'];
  relativePath: Scalars['String']['output'];
  extension: Scalars['String']['output'];
  template: Scalars['String']['output'];
  collection: Collection;
};


export type SystemInfoBreadcrumbsArgs = {
  excludeExtension?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Folder = {
  __typename?: 'Folder';
  name: Scalars['String']['output'];
  path: Scalars['String']['output'];
};

export type PageInfo = {
  __typename?: 'PageInfo';
  hasPreviousPage: Scalars['Boolean']['output'];
  hasNextPage: Scalars['Boolean']['output'];
  startCursor: Scalars['String']['output'];
  endCursor: Scalars['String']['output'];
};

export type Node = {
  id: Scalars['ID']['output'];
};

export type Document = {
  id: Scalars['ID']['output'];
  _sys?: Maybe<SystemInfo>;
  _values: Scalars['JSON']['output'];
};

/** A relay-compliant pagination connection */
export type Connection = {
  totalCount: Scalars['Float']['output'];
  pageInfo: PageInfo;
};

export type Query = {
  __typename?: 'Query';
  getOptimizedQuery?: Maybe<Scalars['String']['output']>;
  collection: Collection;
  collections: Array<Collection>;
  node: Node;
  document: DocumentNode;
  post: Post;
  postConnection: PostConnection;
  featured: Featured;
  featuredConnection: FeaturedConnection;
};


export type QueryGetOptimizedQueryArgs = {
  queryString: Scalars['String']['input'];
};


export type QueryCollectionArgs = {
  collection?: InputMaybe<Scalars['String']['input']>;
};


export type QueryNodeArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


export type QueryDocumentArgs = {
  collection?: InputMaybe<Scalars['String']['input']>;
  relativePath?: InputMaybe<Scalars['String']['input']>;
};


export type QueryPostArgs = {
  relativePath?: InputMaybe<Scalars['String']['input']>;
};


export type QueryPostConnectionArgs = {
  before?: InputMaybe<Scalars['String']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Float']['input']>;
  last?: InputMaybe<Scalars['Float']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<PostFilter>;
};


export type QueryFeaturedArgs = {
  relativePath?: InputMaybe<Scalars['String']['input']>;
};


export type QueryFeaturedConnectionArgs = {
  before?: InputMaybe<Scalars['String']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Float']['input']>;
  last?: InputMaybe<Scalars['Float']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<FeaturedFilter>;
};

export type DocumentFilter = {
  post?: InputMaybe<PostFilter>;
  featured?: InputMaybe<FeaturedFilter>;
};

export type DocumentConnectionEdges = {
  __typename?: 'DocumentConnectionEdges';
  cursor: Scalars['String']['output'];
  node?: Maybe<DocumentNode>;
};

export type DocumentConnection = Connection & {
  __typename?: 'DocumentConnection';
  pageInfo: PageInfo;
  totalCount: Scalars['Float']['output'];
  edges?: Maybe<Array<Maybe<DocumentConnectionEdges>>>;
};

export type Collection = {
  __typename?: 'Collection';
  name: Scalars['String']['output'];
  slug: Scalars['String']['output'];
  label?: Maybe<Scalars['String']['output']>;
  path: Scalars['String']['output'];
  format?: Maybe<Scalars['String']['output']>;
  matches?: Maybe<Scalars['String']['output']>;
  templates?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
  fields?: Maybe<Array<Maybe<Scalars['JSON']['output']>>>;
  documents: DocumentConnection;
};


export type CollectionDocumentsArgs = {
  before?: InputMaybe<Scalars['String']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Float']['input']>;
  last?: InputMaybe<Scalars['Float']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<DocumentFilter>;
  folder?: InputMaybe<Scalars['String']['input']>;
};

export type DocumentNode = Post | Featured | Folder;

export type Post = Node & Document & {
  __typename?: 'Post';
  title: Scalars['String']['output'];
  abstract: Scalars['String']['output'];
  banner?: Maybe<Scalars['String']['output']>;
  date: Scalars['String']['output'];
  body?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
  _sys: SystemInfo;
  _values: Scalars['JSON']['output'];
};

export type StringFilter = {
  startsWith?: InputMaybe<Scalars['String']['input']>;
  eq?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ImageFilter = {
  startsWith?: InputMaybe<Scalars['String']['input']>;
  eq?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type DatetimeFilter = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  eq?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type PostBodyYoutubeEmbedFilter = {
  url?: InputMaybe<StringFilter>;
};

export type PostBodyFilter = {
  YoutubeEmbed?: InputMaybe<PostBodyYoutubeEmbedFilter>;
};

export type PostFilter = {
  title?: InputMaybe<StringFilter>;
  abstract?: InputMaybe<StringFilter>;
  banner?: InputMaybe<ImageFilter>;
  date?: InputMaybe<DatetimeFilter>;
  body?: InputMaybe<PostBodyFilter>;
};

export type PostConnectionEdges = {
  __typename?: 'PostConnectionEdges';
  cursor: Scalars['String']['output'];
  node?: Maybe<Post>;
};

export type PostConnection = Connection & {
  __typename?: 'PostConnection';
  pageInfo: PageInfo;
  totalCount: Scalars['Float']['output'];
  edges?: Maybe<Array<Maybe<PostConnectionEdges>>>;
};

export type FeaturedPost = Post;

export type Featured = Node & Document & {
  __typename?: 'Featured';
  post: FeaturedPost;
  id: Scalars['ID']['output'];
  _sys: SystemInfo;
  _values: Scalars['JSON']['output'];
};

export type FeaturedPostFilter = {
  post?: InputMaybe<PostFilter>;
};

export type FeaturedFilter = {
  post?: InputMaybe<FeaturedPostFilter>;
};

export type FeaturedConnectionEdges = {
  __typename?: 'FeaturedConnectionEdges';
  cursor: Scalars['String']['output'];
  node?: Maybe<Featured>;
};

export type FeaturedConnection = Connection & {
  __typename?: 'FeaturedConnection';
  pageInfo: PageInfo;
  totalCount: Scalars['Float']['output'];
  edges?: Maybe<Array<Maybe<FeaturedConnectionEdges>>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addPendingDocument: DocumentNode;
  updateDocument: DocumentNode;
  deleteDocument: DocumentNode;
  createDocument: DocumentNode;
  updatePost: Post;
  createPost: Post;
  updateFeatured: Featured;
  createFeatured: Featured;
};


export type MutationAddPendingDocumentArgs = {
  collection: Scalars['String']['input'];
  relativePath: Scalars['String']['input'];
  template?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateDocumentArgs = {
  collection?: InputMaybe<Scalars['String']['input']>;
  relativePath: Scalars['String']['input'];
  params: DocumentUpdateMutation;
};


export type MutationDeleteDocumentArgs = {
  collection?: InputMaybe<Scalars['String']['input']>;
  relativePath: Scalars['String']['input'];
};


export type MutationCreateDocumentArgs = {
  collection?: InputMaybe<Scalars['String']['input']>;
  relativePath: Scalars['String']['input'];
  params: DocumentMutation;
};


export type MutationUpdatePostArgs = {
  relativePath: Scalars['String']['input'];
  params: PostMutation;
};


export type MutationCreatePostArgs = {
  relativePath: Scalars['String']['input'];
  params: PostMutation;
};


export type MutationUpdateFeaturedArgs = {
  relativePath: Scalars['String']['input'];
  params: FeaturedMutation;
};


export type MutationCreateFeaturedArgs = {
  relativePath: Scalars['String']['input'];
  params: FeaturedMutation;
};

export type DocumentUpdateMutation = {
  post?: InputMaybe<PostMutation>;
  featured?: InputMaybe<FeaturedMutation>;
  relativePath?: InputMaybe<Scalars['String']['input']>;
};

export type DocumentMutation = {
  post?: InputMaybe<PostMutation>;
  featured?: InputMaybe<FeaturedMutation>;
};

export type PostMutation = {
  title?: InputMaybe<Scalars['String']['input']>;
  abstract?: InputMaybe<Scalars['String']['input']>;
  banner?: InputMaybe<Scalars['String']['input']>;
  date?: InputMaybe<Scalars['String']['input']>;
  body?: InputMaybe<Scalars['JSON']['input']>;
};

export type FeaturedMutation = {
  post?: InputMaybe<Scalars['String']['input']>;
};

export type PostPartsFragment = { __typename: 'Post', title: string, abstract: string, banner?: string | null, date: string, body?: any | null };

export type FeaturedPartsFragment = { __typename: 'Featured', post: { __typename: 'Post', title: string, abstract: string, banner?: string | null, date: string, body?: any | null, id: string, _sys: { __typename?: 'SystemInfo', filename: string, basename: string, breadcrumbs: Array<string>, path: string, relativePath: string, extension: string } } };

export type PostQueryVariables = Exact<{
  relativePath: Scalars['String']['input'];
}>;


export type PostQuery = { __typename?: 'Query', post: { __typename: 'Post', id: string, title: string, abstract: string, banner?: string | null, date: string, body?: any | null, _sys: { __typename?: 'SystemInfo', filename: string, basename: string, breadcrumbs: Array<string>, path: string, relativePath: string, extension: string } } };

export type PostConnectionQueryVariables = Exact<{
  before?: InputMaybe<Scalars['String']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Float']['input']>;
  last?: InputMaybe<Scalars['Float']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<PostFilter>;
}>;


export type PostConnectionQuery = { __typename?: 'Query', postConnection: { __typename?: 'PostConnection', totalCount: number, pageInfo: { __typename?: 'PageInfo', hasPreviousPage: boolean, hasNextPage: boolean, startCursor: string, endCursor: string }, edges?: Array<{ __typename?: 'PostConnectionEdges', cursor: string, node?: { __typename: 'Post', id: string, title: string, abstract: string, banner?: string | null, date: string, body?: any | null, _sys: { __typename?: 'SystemInfo', filename: string, basename: string, breadcrumbs: Array<string>, path: string, relativePath: string, extension: string } } | null } | null> | null } };

export type FeaturedQueryVariables = Exact<{
  relativePath: Scalars['String']['input'];
}>;


export type FeaturedQuery = { __typename?: 'Query', featured: { __typename: 'Featured', id: string, _sys: { __typename?: 'SystemInfo', filename: string, basename: string, breadcrumbs: Array<string>, path: string, relativePath: string, extension: string }, post: { __typename: 'Post', title: string, abstract: string, banner?: string | null, date: string, body?: any | null, id: string, _sys: { __typename?: 'SystemInfo', filename: string, basename: string, breadcrumbs: Array<string>, path: string, relativePath: string, extension: string } } } };

export type FeaturedConnectionQueryVariables = Exact<{
  before?: InputMaybe<Scalars['String']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Float']['input']>;
  last?: InputMaybe<Scalars['Float']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<FeaturedFilter>;
}>;


export type FeaturedConnectionQuery = { __typename?: 'Query', featuredConnection: { __typename?: 'FeaturedConnection', totalCount: number, pageInfo: { __typename?: 'PageInfo', hasPreviousPage: boolean, hasNextPage: boolean, startCursor: string, endCursor: string }, edges?: Array<{ __typename?: 'FeaturedConnectionEdges', cursor: string, node?: { __typename: 'Featured', id: string, _sys: { __typename?: 'SystemInfo', filename: string, basename: string, breadcrumbs: Array<string>, path: string, relativePath: string, extension: string }, post: { __typename: 'Post', title: string, abstract: string, banner?: string | null, date: string, body?: any | null, id: string, _sys: { __typename?: 'SystemInfo', filename: string, basename: string, breadcrumbs: Array<string>, path: string, relativePath: string, extension: string } } } | null } | null> | null } };

export const PostPartsFragmentDoc = gql`
    fragment PostParts on Post {
  __typename
  title
  abstract
  banner
  date
  body
}
    `;
export const FeaturedPartsFragmentDoc = gql`
    fragment FeaturedParts on Featured {
  __typename
  post {
    ... on Post {
      __typename
      title
      abstract
      banner
      date
      body
    }
    ... on Document {
      _sys {
        filename
        basename
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
  }
}
    `;
export const PostDocument = gql`
    query post($relativePath: String!) {
  post(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...PostParts
  }
}
    ${PostPartsFragmentDoc}`;
export const PostConnectionDocument = gql`
    query postConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: PostFilter) {
  postConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...PostParts
      }
    }
  }
}
    ${PostPartsFragmentDoc}`;
export const FeaturedDocument = gql`
    query featured($relativePath: String!) {
  featured(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...FeaturedParts
  }
}
    ${FeaturedPartsFragmentDoc}`;
export const FeaturedConnectionDocument = gql`
    query featuredConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: FeaturedFilter) {
  featuredConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...FeaturedParts
      }
    }
  }
}
    ${FeaturedPartsFragmentDoc}`;
export type Requester<C= {}> = <R, V>(doc: DocumentNode, vars?: V, options?: C) => Promise<R>
  export function getSdk<C>(requester: Requester<C>) {
    return {
      post(variables: PostQueryVariables, options?: C): Promise<{data: PostQuery, errors?: { message: string, locations: { line: number, column: number }[], path: string[] }[], variables: PostQueryVariables, query: string}> {
        return requester<{data: PostQuery, errors?: { message: string, locations: { line: number, column: number }[], path: string[] }[], variables: PostQueryVariables, query: string}, PostQueryVariables>(PostDocument, variables, options);
      },
    postConnection(variables?: PostConnectionQueryVariables, options?: C): Promise<{data: PostConnectionQuery, errors?: { message: string, locations: { line: number, column: number }[], path: string[] }[], variables: PostConnectionQueryVariables, query: string}> {
        return requester<{data: PostConnectionQuery, errors?: { message: string, locations: { line: number, column: number }[], path: string[] }[], variables: PostConnectionQueryVariables, query: string}, PostConnectionQueryVariables>(PostConnectionDocument, variables, options);
      },
    featured(variables: FeaturedQueryVariables, options?: C): Promise<{data: FeaturedQuery, errors?: { message: string, locations: { line: number, column: number }[], path: string[] }[], variables: FeaturedQueryVariables, query: string}> {
        return requester<{data: FeaturedQuery, errors?: { message: string, locations: { line: number, column: number }[], path: string[] }[], variables: FeaturedQueryVariables, query: string}, FeaturedQueryVariables>(FeaturedDocument, variables, options);
      },
    featuredConnection(variables?: FeaturedConnectionQueryVariables, options?: C): Promise<{data: FeaturedConnectionQuery, errors?: { message: string, locations: { line: number, column: number }[], path: string[] }[], variables: FeaturedConnectionQueryVariables, query: string}> {
        return requester<{data: FeaturedConnectionQuery, errors?: { message: string, locations: { line: number, column: number }[], path: string[] }[], variables: FeaturedConnectionQueryVariables, query: string}, FeaturedConnectionQueryVariables>(FeaturedConnectionDocument, variables, options);
      }
    };
  }
  export type Sdk = ReturnType<typeof getSdk>;

// TinaSDK generated code
import { createClient, TinaClient } from "tinacms/dist/client";

const generateRequester = (
  client: TinaClient,
) => {
  const requester: (
    doc: any,
    vars?: any,
    options?: {
      branch?: string,
      /**
       * Aside from `method` and `body`, all fetch options are passed
       * through to underlying fetch request
       */
      fetchOptions?: Omit<Parameters<typeof fetch>[1], 'body' | 'method'>,
    },
    client
  ) => Promise<any> = async (doc, vars, options) => {
    let url = client.apiUrl
    if (options?.branch) {
      const index = client.apiUrl.lastIndexOf('/')
      url = client.apiUrl.substring(0, index + 1) + options.branch
    }
    const data = await client.request({
      query: doc,
      variables: vars,
      url,
    }, options)

    return { data: data?.data, errors: data?.errors, query: doc, variables: vars || {} }
  }

  return requester
}

/**
 * @experimental this class can be used but may change in the future
 **/
export const ExperimentalGetTinaClient = () =>
  getSdk(
    generateRequester(
      createClient({
        url: "https://content.tinajs.io/1.4/content/5f8cd26a-f872-46fc-8de1-3a91c79e028b/github/master",
        queries,
      })
    )
  )

export const queries = (
  client: TinaClient,
) => {
  const requester = generateRequester(client)
  return getSdk(requester)
}

  