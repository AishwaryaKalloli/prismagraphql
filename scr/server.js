const { ApolloServer } = require('apollo-server')
const {resolver, typeDefs} = require('./schema')

const port = process.env.PORT || 8080

new ApolloServer({resolver, typeDefs}).listen({ port }, () => 
	console.log(`Server ready at: http://localhost:${port}`),
)
