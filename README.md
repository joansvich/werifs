# Werifs

## Description

It's a single page application where you can participate in a game to win a car.

## User Stories

-  **404:** As an anon/user I can see a 404 page if I try to reach a page that does not exist so that I know it's my fault
-  **Signup:** As an anon I can sign up in the platform so that I can start saving favorite restaurants
-  **Login:** As a user I can login to the platform so that I can see my favorite restaurants
-  **Logout:** As a user I can logout from the platform so no one else can use it
-  **Add Cars** As a administrator I can add a car so that the users can play for it
-  **Participate to the game** As a user I can select any car and I can play for win it. (Backlog)
-  **Profile** As a user I can edit my profile so no one else can edit my profile.
-  **Detail Cars** As a user I can view de detail cars so I can decide play for it
-  **Add to Cart** As a user I can select a car so I can pay for it

## Backlog

Homepage:
- on mobile, the cars are show in stack

Game:

- add a video game

Checkout

- Pay for participate

# Client

## Routes
| Method | Path           | Component           | Permissions | Behavior                                                     |
| ------ | -------------- | ------------------- | ----------- | ------------------------------------------------------------ |
| `get`  | `/`            | HomePageComponent   | public      | just promotional copy                                        |
| `post` | `/auth/signup` | SignupPageComponent | anon only   | signup form, link to login, navigate to homepage after signup |
| `post` | `/auth/login`  | LoginPageComponent  | anon only   | login form, link to signup, navigate to homepage after login |
| `post` | `/auth/logout` | n/a                 | anon only   | navigate to homepage after logout, expire session            |
| `get`  | `/profile/:id` | ProfileComponent    | anon only   | view user profile                                            |



## Components

- Cars Card component
  - Input: cars: administrator
  - Output: participate(carsId: string, on: boolean)
- Search component
  - Output: cars(carsId: string)
- Navbar component
  - Cart Component


## Services

- Auth Service
  - auth.login(user)
  - auth.signup(user)
  - auth.logout()
  - auth.me()
  - auth.getUser() // synchronous
- Cars Service
  - cars.list()
  - cars.search(terms)
  - cars.create(data)
- Participation Service
  - participate.list(idUser)
  - participate.add(idUser, idCar)
  - participate.edit(idUser, idCars, position)

# Server

## Models

User model

```
username - String // required
email - String // required & unique
password - String // required
```

Cars model

```
name - String // required
power - String // required
retailPrice - String // required
velocity - String // required
torque - String // required
contamination - String // required
drivetrain - String // required
imageUrl - String // required & default: sampleUrl
```

Participation model

```
idUser - ObjectID<User> // required
idCars - ObjectID<Cars> // required
position - Number // required
```

## 

## API Endpoints (backend routes)

- GET /auth/me
  - 404 if no user in session
  - 200 with user object
- POST /auth/signup
  - 401 if user logged in
  - body:
    - username
    - email
    - password
  - validation
    - fields not empty (422)
    - user not exists (409)
  - create user with encrypted password
  - store user in session
  - 200 with user object
- POST /auth/login
  - 401 if user logged in
  - body:
    - username
    - password
  - validation
    - fields not empty (422)
    - user exists (404)
    - passdword matches (404)
  - store user in session
  - 200 with user object
- POST /auth/logout
  - body: (empty)
  - 204
- GET /cars
  - status 200
  - Object:
    - Name car
    - imageUrl
    - Properties of Car
- POST /cars
  - 401 if user is not an administrator
  - body:
    - Name car
    - imageUrl
    - Properties of Car
  - validation
    - fields not empty (422)
    - user not exists (409)
  - 200 with user object

## Links

### Trello/Kanban

[Trello Werifs](<https://trello.com/b/sHQlZArl/werifs>)

### Git

The url to your repository and to your deployed project

[Client repository Link](https://github.com/joansvich/werifs)
[Server repository Link](https://github.com/joansvich/werifs-backend)

[Deploy Link](http://heroku.com)

### Slides

The url to your presentation slides

[Slides Link](http://slides.com)