// import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
// import { ClerkProvider } from '@clerk/clerk-expo';
// import { Slot } from 'expo-router';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { Slot } from 'expo-router';
// import { KeyboardAvoidingView } from 'react-native';

const RootLayoutNav: React.FC = () => {
  // const client = new ApolloClient({
  //   uri: 'https://demo-day-backend.vercel.app/api/graphql',
  //   cache: new InMemoryCache(),
  // });
  const client = new ApolloClient({
    uri: 'https://demo-day-backend.vercel.app/api/graphql',
    cache: new InMemoryCache(),
  });
  return (
    <ApolloProvider client={client}>
      {/* <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="AboutPage" options={{ headerShown: false }} />
        <Stack.Screen name="Login" options={{ headerShown: false }} />
        <Stack.Screen name="Signup" options={{ headerShown: false }} />
      </Stack> */}
      <Slot />
    </ApolloProvider>
  );
};

export default RootLayoutNav;
