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
  participants: Array<User>,
};


export type Message = {
  __typename?: 'Message',
  id: Scalars['ID'],
  content: Scalars['String'],
  createdAt: Scalars['Date'],
  chat?: Maybe<Chat>,
  sender?: Maybe<User>,
  recipient?: Maybe<User>,
  isMine: Scalars['Boolean'],
};

export type Mutation = {
  __typename?: 'Mutation',
  signIn?: Maybe<User>,
  addMessage?: Maybe<Message>,
  addChat?: Maybe<Chat>,
  removeChat?: Maybe<Scalars['ID']>,
};


export type MutationSignInArgs = {
  username: Scalars['String'],
  password: Scalars['String']
};


export type MutationAddMessageArgs = {
  chatId: Scalars['ID'],
  content: Scalars['String']
};


export type MutationAddChatArgs = {
  recipientId: Scalars['ID']
};


export type MutationRemoveChatArgs = {
  chatId: Scalars['ID']
};

export type Query = {
  __typename?: 'Query',
  chats: Array<Chat>,
  chat?: Maybe<Chat>,
  users: Array<User>,
};


export type QueryChatArgs = {
  chatId: Scalars['ID']
};

export type Subscription = {
  __typename?: 'Subscription',
  messageAdded: Message,
  chatAdded: Chat,
  chatsRemoved: Scalars['ID'],
};


export type User = {
  __typename?: 'User',
  id: Scalars['ID'],
  name: Scalars['String'],
  picture: Scalars['URL'],
};
export type AddChatMutationVariables = {
  recipientId: Scalars['ID']
};


export type AddChatMutation = (
  { __typename?: 'Mutation' }
  & { addChat: Maybe<{ __typename?: 'Chat' }
    & ChatFragment
  > }
);

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

export type RemoveChatMutationVariables = {
  chatId: Scalars['ID']
};


export type RemoveChatMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'removeChat'>
);

export type UsersListQueryVariables = {};


export type UsersListQuery = (
  { __typename?: 'Query' }
  & { users: Array<{ __typename?: 'User' }
    & UserFragment
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
  & Pick<Message, 'id' | 'createdAt' | 'content' | 'isMine'>
  & { chat: Maybe<(
    { __typename?: 'Chat' }
    & Pick<Chat, 'id'>
  )> }
);

export type UserFragment = (
  { __typename?: 'User' }
  & Pick<User, 'id' | 'name' | 'picture'>
);

export type SignInMutationVariables = {
  username: Scalars['String'],
  password: Scalars['String']
};


export type SignInMutation = (
  { __typename?: 'Mutation' }
  & { signIn: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id'>
  )> }
);

export type ChatsQueryVariables = {};


export type ChatsQuery = (
  { __typename?: 'Query' }
  & { chats: Array<{ __typename?: 'Chat' }
    & ChatFragment
  > }
);

export type ChatAddedSubscriptionVariables = {};


export type ChatAddedSubscription = (
  { __typename?: 'Subscription' }
  & { chatAdded: { __typename?: 'Chat' }
    & ChatFragment
   }
);

export type ChatRemovedSubscriptionVariables = {};


export type ChatRemovedSubscription = (
  { __typename?: 'Subscription' }
  & Pick<Subscription, 'chatsRemoved'>
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
  isMine
  chat {
    id
  }
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
export const UserFragmentDoc = gql`
    fragment User on User {
  id
  name
  picture
}
    `;
export const AddChatDocument = gql`
    mutation AddChat($recipientId: ID!) {
  addChat(recipientId: $recipientId) {
    ...Chat
  }
}
    ${ChatFragmentDoc}`;
export type AddChatMutationFn = ApolloReactCommon.MutationFunction<AddChatMutation, AddChatMutationVariables>;

    export function useAddChatMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<AddChatMutation, AddChatMutationVariables>) {
      return ApolloReactHooks.useMutation<AddChatMutation, AddChatMutationVariables>(AddChatDocument, baseOptions);
    };
export type AddChatMutationHookResult = ReturnType<typeof useAddChatMutation>;
export type AddChatMutationResult = ApolloReactCommon.MutationResult<AddChatMutation>;
export type AddChatMutationOptions = ApolloReactCommon.BaseMutationOptions<AddChatMutation, AddChatMutationVariables>;
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
export const RemoveChatDocument = gql`
    mutation RemoveChat($chatId: ID!) {
  removeChat(chatId: $chatId)
}
    `;
export type RemoveChatMutationFn = ApolloReactCommon.MutationFunction<RemoveChatMutation, RemoveChatMutationVariables>;

    export function useRemoveChatMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<RemoveChatMutation, RemoveChatMutationVariables>) {
      return ApolloReactHooks.useMutation<RemoveChatMutation, RemoveChatMutationVariables>(RemoveChatDocument, baseOptions);
    };
export type RemoveChatMutationHookResult = ReturnType<typeof useRemoveChatMutation>;
export type RemoveChatMutationResult = ApolloReactCommon.MutationResult<RemoveChatMutation>;
export type RemoveChatMutationOptions = ApolloReactCommon.BaseMutationOptions<RemoveChatMutation, RemoveChatMutationVariables>;
export const UsersListDocument = gql`
    query UsersList {
  users {
    ...User
  }
}
    ${UserFragmentDoc}`;

    export function useUsersListQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<UsersListQuery, UsersListQueryVariables>) {
      return ApolloReactHooks.useQuery<UsersListQuery, UsersListQueryVariables>(UsersListDocument, baseOptions);
    };
      export function useUsersListLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<UsersListQuery, UsersListQueryVariables>) {
        return ApolloReactHooks.useLazyQuery<UsersListQuery, UsersListQueryVariables>(UsersListDocument, baseOptions);
      };
      
export type UsersListQueryHookResult = ReturnType<typeof useUsersListQuery>;
export type UsersListQueryResult = ApolloReactCommon.QueryResult<UsersListQuery, UsersListQueryVariables>;
export const SignInDocument = gql`
    mutation signIn($username: String!, $password: String!) {
  signIn(username: $username, password: $password) {
    id
  }
}
    `;
export type SignInMutationFn = ApolloReactCommon.MutationFunction<SignInMutation, SignInMutationVariables>;

    export function useSignInMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SignInMutation, SignInMutationVariables>) {
      return ApolloReactHooks.useMutation<SignInMutation, SignInMutationVariables>(SignInDocument, baseOptions);
    };
export type SignInMutationHookResult = ReturnType<typeof useSignInMutation>;
export type SignInMutationResult = ApolloReactCommon.MutationResult<SignInMutation>;
export type SignInMutationOptions = ApolloReactCommon.BaseMutationOptions<SignInMutation, SignInMutationVariables>;
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
export const ChatAddedDocument = gql`
    subscription ChatAdded {
  chatAdded {
    ...Chat
  }
}
    ${ChatFragmentDoc}`;

    export function useChatAddedSubscription(baseOptions?: ApolloReactHooks.SubscriptionHookOptions<ChatAddedSubscription, ChatAddedSubscriptionVariables>) {
      return ApolloReactHooks.useSubscription<ChatAddedSubscription, ChatAddedSubscriptionVariables>(ChatAddedDocument, baseOptions);
    };
export type ChatAddedSubscriptionHookResult = ReturnType<typeof useChatAddedSubscription>;
export type ChatAddedSubscriptionResult = ApolloReactCommon.SubscriptionResult<ChatAddedSubscription>;
export const ChatRemovedDocument = gql`
    subscription ChatRemoved {
  chatsRemoved
}
    `;

    export function useChatRemovedSubscription(baseOptions?: ApolloReactHooks.SubscriptionHookOptions<ChatRemovedSubscription, ChatRemovedSubscriptionVariables>) {
      return ApolloReactHooks.useSubscription<ChatRemovedSubscription, ChatRemovedSubscriptionVariables>(ChatRemovedDocument, baseOptions);
    };
export type ChatRemovedSubscriptionHookResult = ReturnType<typeof useChatRemovedSubscription>;
export type ChatRemovedSubscriptionResult = ApolloReactCommon.SubscriptionResult<ChatRemovedSubscription>;
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