import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { Slot } from 'expo-router';

const RootLayoutNav: React.FC = () => {
  const client = new ApolloClient({
    uri: 'https://demo-day-backend.vercel.app/api/graphql',
    cache: new InMemoryCache(),
  });
  return (
    <ApolloProvider client={client}>
      <Slot />
    </ApolloProvider>
  );
};

export default RootLayoutNav;
