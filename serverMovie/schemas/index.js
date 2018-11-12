const {
  GraphQLID,
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLSchema,
  GraphQLString,
  GraphQLList,
  GraphQLInt,
} = require('graphql')

const Movie = require('../models/movies')

let listMovie = new GraphQLObjectType({
  name: 'listMovie',  
  fields: () => ({
    id: {
      type: (GraphQLID),
    },
    poster_path: {
      type: GraphQLString,
    },
    popularity: {
      type: GraphQLInt,
    },
    overview: {
      type: GraphQLString,
    },
    title: {
      type: GraphQLString,
    },
    tag: {
      type: GraphQLList({
        type: GraphQLString
      })
    }
  })
});

var schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Root',
    fields: {
      movie: {
        type: new GraphQLList(listMovie),
        args: {
          id: {
            name: 'id',
            type: new GraphQLNonNull(GraphQLID)
          }
        },
        resolve: (data) => {
          return data
        }
      }
    }
  })
  
});

export default schema