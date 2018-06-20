const QUERY = `
query {
    cardHolders(first: 5) {
       edges {
          node {
             displayName
             age
          }
       }
    }
 }     
`;

function listCardHolders() {
    
    const client = GraphQL.makeClient("https://hml-api.elo.com.br/graphql"); 
    client.setHeader("client_id", "d92b1009-8940-34cc-ae28-5b1dabea9d29");
    client.setHeader("Content-Type", "application/json");
    client.query(QUERY, function(response) {
        console.log(response)
    });
    
}

window.addEventListener('load', function() {
    listCardHolders()
})
