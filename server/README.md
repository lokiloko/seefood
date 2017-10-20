# Server API of Seefood

List of facebook routes

| Routes       | Method | Description | Required Param |
|--------------|--------|-------------|----------------|
|/api/facebook/|GET     |Index        |-               |

List of recipe routes

| Routes       | Method | Description | Required Param |
|--------------|--------|-------------|----------------|
|/api/recipe/  |GET     |Index        |-               |

List of zomato routes

| Routes       | Method | Description | Required Param |
|--------------|--------|-------------|----------------|
|/api/zomato/  |POST    |Get Nearest Restaurants by Cuisine        | <ul><li>[x] latitude (string) </li><li>[x] longitude (string</li> <li>[x] cuisine (string) </li></ul>              |

List of watson routes

| Routes       | Method | Description | Required Param |
|--------------|--------|-------------|----------------|
|/api/watson/  |Post    |Analyze image uploaded        | <ul><li>Choose One</li><li>[ ] image_url (string) </li><li>[ ] image_files (files)</li></ul>              |

List of youtube routes

| Routes       | Method | Description | Required Param |
|--------------|--------|-------------|----------------|
|/api/youtube/ |GET     |Index        |-               |
