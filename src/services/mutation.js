import { gql } from "@apollo/client";

export const SIGNUP = gql`
  mutation signup(
    $firstName: String!
    $lastName: String!
    $email: Email!
    $password: String!
    $phoneNumber: String!
  ) {
    register(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
      phoneNumber: $phoneNumber
    ) {
      ... on UserRegisterResultSuccess {
        token
      }
    }
  }
`;

export const GET_USER = gql`
  query {
    me {
      id
      firstName
      lastName
      email
      phoneNumber
      createdAt
    }
  }
`;

export const LOGIN = gql`
  mutation login($email: Email!, $password: String!) {
    login(email: $email, password: $password) {
      ... on UserLoginResultSuccess {
        token
      }
    }
  }
`;
