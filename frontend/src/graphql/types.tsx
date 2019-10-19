/* eslint-disable */
import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  URL: any,
  Date: any,
};

export type Chat = {
  __typename?: 'Chat',
  id: Scalars['ID'],
  name: Scalars['String'],
  picture?: Maybe<Scalars['URL']>,
  lastMessage?: Maybe<Message>,
  messages: Array<Message>,
};


export type Message = {
  __typename?: 'Message',
  id: Scalars['ID'],
  content: Scalars['String'],
  createdAt: Scalars['Date'],
};

export type Mutation = {
  __typename?: 'Mutation',
  addMessage?: Maybe<Message>,
};


export type MutationAddMessageArgs = {
  chatId: Scalars['ID'],
  content: Scalars['String']
};

export type Query = {
  __typename?: 'Query',
  chats: Array<Chat>,
  chat?: Maybe<Chat>,
};


export type QueryChatArgs = {
  chatId: Scalars['ID']
};

export type Subscription = {
  __typename?: 'Subscription',
  messageAdded: Message,
};

export type GetChatQueryVariables = {
  chatId: Scalars['ID']
};


export type GetChatQuery = (
  { __typename?: 'Query' }
  & { chat: Maybe<{ __typename?: 'Chat' }
    & FullChatFragment
  > }
);

export type AddMessageMutationVariables = {
  chatId: Scalars['ID'],
  content: Scalars['String']
};


export type AddMessageMutation = (
  { __typename?: 'Mutation' }
  & { addMessage: Maybe<{ __typename?: 'Message' }
    & MessageFragment
  > }
);

export type ChatFragment = (
  { __typename?: 'Chat' }
  & Pick<Chat, 'id' | 'name' | 'picture'>
  & { lastMessage: Maybe<{ __typename?: 'Message' }
    & MessageFragment
  > }
);

export type FullChatFragment = (
  { __typename?: 'Chat' }
  & { messages: Array<{ __typename?: 'Message' }
    & MessageFragment
  > }
)
  & ChatFragment
;

export type MessageFragment = (
  { __typename?: 'Message' }
  & Pick<Message, 'id' | 'createdAt' | 'content'>
);

export type ChatsQueryVariables = {};


export type ChatsQuery = (
  { __typename?: 'Query' }
  & { chats: Array<{ __typename?: 'Chat' }
    & ChatFragment
  > }
);

export type MessageAddedSubscriptionVariables = {};


export type MessageAddedSubscription = (
  { __typename?: 'Subscription' }
  & { messageAdded: { __typename?: 'Message' }
    & MessageFragment
   }
);
export const MessageFragmentDoc = gql`
    fragment Message on Message {
  id
  createdAt
  content
}
    `;
export const ChatFragmentDoc = gql`
    fragment Chat on Chat {
  id
  name
  picture
  lastMessage {
    ...Message
  }
}
    ${MessageFragmentDoc}`;
export const FullChatFragmentDoc = gql`
    fragment FullChat on Chat {
  ...Chat
  messages {
    ...Message
  }
}
    ${ChatFragmentDoc}
${MessageFragmentDoc}`;
export const GetChatDocument = gql`
    query GetChat($chatId: ID!) {
  chat(chatId: $chatId) {
    ...FullChat
  }
}
    ${FullChatFragmentDoc}`;

    export function useGetChatQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetChatQuery, GetChatQueryVariables>) {
      return ApolloReactHooks.useQuery<GetChatQuery, GetChatQueryVariables>(GetChatDocument, baseOptions);
    };
      export function useGetChatLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetChatQuery, GetChatQueryVariables>) {
        return ApolloReactHooks.useLazyQuery<GetChatQuery, GetChatQueryVariables>(GetChatDocument, baseOptions);
      };
      
export type GetChatQueryHookResult = ReturnType<typeof useGetChatQuery>;
export type GetChatQueryResult = ApolloReactCommon.QueryResult<GetChatQuery, GetChatQueryVariables>;
export const AddMessageDocument = gql`
    mutation AddMessage($chatId: ID!, $content: String!) {
  addMessage(chatId: $chatId, content: $content) {
    ...Message
  }
}
    ${MessageFragmentDoc}`;
export type AddMessageMutationFn = ApolloReactCommon.MutationFunction<AddMessageMutation, AddMessageMutationVariables>;

    export function useAddMessageMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<AddMessageMutation, AddMessageMutationVariables>) {
      return ApolloReactHooks.useMutation<AddMessageMutation, AddMessageMutationVariables>(AddMessageDocument, baseOptions);
    };
export type AddMessageMutationHookResult = ReturnType<typeof useAddMessageMutation>;
export type AddMessageMutationResult = ApolloReactCommon.MutationResult<AddMessageMutation>;
export type AddMessageMutationOptions = ApolloReactCommon.BaseMutationOptions<AddMessageMutation, AddMessageMutationVariables>;
export const ChatsDocument = gql`
    query Chats {
  chats {
    ...Chat
  }
}
    ${ChatFragmentDoc}`;

    export function useChatsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ChatsQuery, ChatsQueryVariables>) {
      return ApolloReactHooks.useQuery<ChatsQuery, ChatsQueryVariables>(ChatsDocument, baseOptions);
    };
      export function useChatsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ChatsQuery, ChatsQueryVariables>) {
        return ApolloReactHooks.useLazyQuery<ChatsQuery, ChatsQueryVariables>(ChatsDocument, baseOptions);
      };
      
export type ChatsQueryHookResult = ReturnType<typeof useChatsQuery>;
export type ChatsQueryResult = ApolloReactCommon.QueryResult<ChatsQuery, ChatsQueryVariables>;
export const MessageAddedDocument = gql`
    subscription MessageAdded {
  messageAdded {
    ...Message
  }
}
    ${MessageFragmentDoc}`;

    export function useMessageAddedSubscription(baseOptions?: ApolloReactHooks.SubscriptionHookOptions<MessageAddedSubscription, MessageAddedSubscriptionVariables>) {
      return ApolloReactHooks.useSubscription<MessageAddedSubscription, MessageAddedSubscriptionVariables>(MessageAddedDocument, baseOptions);
    };
export type MessageAddedSubscriptionHookResult = ReturnType<typeof useMessageAddedSubscription>;
export type MessageAddedSubscriptionResult = ApolloReactCommon.SubscriptionResult<MessageAddedSubscription>;