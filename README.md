[![Build Status](https://travis-ci.com/ieee-uottawa/ieeeuottawa.ca.svg?branch=master)](https://travis-ci.com/ieee-uottawa/ieeeuottawa.ca)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/4d27cfd2d9054248838a2bc3dfb1045b)](https://www.codacy.com/gh/ieee-uottawa/ieeeuottawa.ca/dashboard?utm_source=github.com&utm_medium=referral&utm_content=ieee-uottawa/ieeeuottawa.ca&utm_campaign=Badge_Grade)

<table align="center"><tr><td align="center" width="9999">
<img width="200" align="center" alt="logo" src="frontend/static/images/ieee_logo_circle.png">

# IEEE uOttawa Student Branch Website

</td></tr></table>

<p align="center">
  <img width="800" alt="portfolio_view" src="assets/IEEE-uOttawa-Architecture.png">
</p>

## Contributors

1. Rushil Perera (Webmaster 2018/2019)
2. Nevin WS Ganesan (Webmaster 2019/2020)
3. Ryan Fleck (Webmaster 2020/2021)

### Past Webmasters

1. Tamer Sherif (Webmaster 2017/2018)
2. Rushil Perera (Webmaster 2018/2019)
3. Nevin WS Ganesan (Webmaster 2019/2020)

## Installation

**Requirements:**

- `nvm` Node version manager for Windows, OSX, or Linux
- `yarn` package manager

**Steps:**

0. Ensure your Node.js version is the latest build of node 10.x, this is
   **extremely important** as the builds will fail on later versions. Migration
   to a newer version of Node.js is in the works.

```sh
nvm install 10.23.1
nvm use 10.23.1
```

1. Make sure that you have the Gatsby CLI program installed:

```sh
npm install --global gatsby-cli
```

2. Run frontend (Gatsby.js) by running these commands:

```sh
cd frontend && yarn install && yarn start
```

3. Run backend (Express.js) by running these commands:

```sh
cd backend && yarn install && yarn start
```

4. Alternatively:

```sh
(cd frontend && yarn install && yarn start) & (cd backend && yarn install && yarn start)
```

5. OR

```sh
sh run.sh
```
