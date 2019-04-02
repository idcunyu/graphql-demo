var graphql = require('graphql');

let myName = "杨文强";

let schema = new graphql.GraphQLSchema({
    query: new graphql.GraphQLObjectType({
        name: 'queryMyName',
        fields: {
            name: {
                type: graphql.GraphQLString,
                resolve: function () {
                    return myName;
                }
            }
        }
    })
});

// 把当前模块的路由暴露出去
module.exports = schema;