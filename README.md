[ ![Codeship Status for databraid-dashboard/github-api](https://app.codeship.com/projects/b1fbc110-60f4-0135-cb3b-76a002477897/status?branch=master)](https://app.codeship.com/projects/239611)

# Databraid GitHub API

## Description

GraphQL endpoints housed in an Express server to access GitHub's API v3 and serve information to the Databraid GitHub Widget. Authentication happens with Oauth2 where you will be redirected to a GitHub sign in screen to allow Databraid access to some scoped information about your GitHub account. All access is essential to the functionality of this website and nothing more. No user information is stored about the client on our servers such that it cannot be accessed by illicit third parties unless they already have access to your Github login credentials.

We see this as a better practice than storing login credentials in our own server that may lead to a security breach. By not storing client information we remove the vulnerabilities associated with storing credentials that we would leverage to gain access to your public and private Github repository information. 

## Usage

Before beginning make sure you have [Docker](https://www.docker.com/) installed and running, then do:

```
npm i
npm run up
```

When finished developing do:

```
npm run down
```

Testing and linting can all be done respectively with:

```
npm test
npm run lint
```
