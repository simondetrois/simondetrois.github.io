---
title: OAuth2.0
sidebar_position: 1
---

- OAth2.0 is an authorization-standard, which defines the process for the granting a client application access to your data. The data is hold on a resource server, which the  client application can request on your behalf.
- Access Tokens are used for accessing data on behalf of a user. Which kind of token is not specified, however commonly used are e.g. JWTs
- OAuth defines a few different ways for a client to receive an access token. These different ways are called grants

## Roles 
- **Resource Owner**: The entity which owns the data. In case you want to grant e.g. an email-application access to your calendar, you are the owner of the calender / the resource, which the other application wants to have access to 
- **Client**: The entity, which want to access the resource, owned by the resource owner. In the example, it would be the email-application
- **Authorization Server**: This is the server which does the token handling e.g. providing the client with a token after permission from the resource server. It provides two endpoints:
  - Authorization endpoint for interactive user authentication (user gives consent for token issuing)
  - Token endpoint for non interactive token issuing (e.g. the backend issuing an access token)
- **Resource Server**: The server which holds the resource owners data. It protects the data and receives access requests from the application
