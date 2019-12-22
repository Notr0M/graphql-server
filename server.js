const { ApolloServer, gql } = require('apollo-server');
require('dotenv').config();
console.log(process.env.NODE_ENV);
console.log(process.env.MY_NAME);
const books = [
  {
    title: 'Harry Potter and the Chamber of Secrets',
    author: 'J.K. Rowling',
  },
  {
    title: 'Jurassic Park',
    author: 'Michael Crichton',
  },
];

const typeDefs = gql`
	type Book {
    title: String
    author: String
	}
	
	type Query {
    books: [Book]
  }
`;

const resolvers = {
  Query: {
    books: () => books,
  },
};

const server = new ApolloServer({ 
	typeDefs,
	resolvers,
	playground: true,
	introspection: true,
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});