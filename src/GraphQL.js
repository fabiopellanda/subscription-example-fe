import React from 'react';
import { Card } from 'react-bootstrap';

const QUERY_GET_POLL = `
query {
  options {
    id
    name
    count
  }
}`;

const MUTATION_VOTE = `
mutation vote($optionId: String!, $userId: String!) {
    vote(
      userId: $userId
      optionId: $optionId
    ){
      count
    }
}`;

const SUBSCRIPTION_RESULT = `
subscription getResult {
  liveResult{
    name
    count
  }
}`;

const SUBSCRIPTION_ONLINE_USERS = `
subscription getOnlineUsersCount {
  newUser{
    id
    online
  }
}`;

const MUTATION_MARK_USER_ONLINE = `
mutation userOnline($uuid: String!) {
  updateUser(
    id: $uuid
    online: true
  ){
   online
  }
}`;

const MUTATION_NEW_USER = `
mutation newUser($uuid: String!) {
  createUser(ip: $uuid){
    ip,
    id
  }
}`;

const GraphQL = () => (
  <div className="container">
    <div className="col-md-12 cardGraphQL">
      <Card>
        <Card.Header>GraphQL Queries/Mutations/Subscriptions in this page</Card.Header>
        <Card.Body>
          <div className="row">
            <div className="col-md-4">
              Get the Poll question and options:
            <pre>{QUERY_GET_POLL}</pre>

            Create a new user:
            <pre>{MUTATION_NEW_USER}</pre>
            </div>
            <div className="col-md-4">
              Cast a vote:
            <pre>{MUTATION_VOTE}</pre>

            Mark user online:
            <pre>{MUTATION_MARK_USER_ONLINE}</pre>
            </div>
            <div className="col-md-4">
              Show live results:
            <pre>{SUBSCRIPTION_RESULT}</pre>

            Get real-time number of users:
            <pre>{SUBSCRIPTION_ONLINE_USERS}</pre>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  </div>
)

export {
  GraphQL,
  QUERY_GET_POLL,
  MUTATION_VOTE,
  SUBSCRIPTION_RESULT,
  SUBSCRIPTION_ONLINE_USERS,
  MUTATION_MARK_USER_ONLINE,
  MUTATION_NEW_USER,
};
