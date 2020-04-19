# Express & MongoDB template

This is a boilerplate template for speeding up the development process in making MERN apps.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

To get this boilerplate running locally you will need:

- a node package manager (yarn or npm)
- a command line terminal (iTerm or bash)
- your favorite IDE (vscode, sublime)
- mongoDB installed locally

If you want to use a cloud based solution such as [mLabs](https://mlab.com) that is fine, you just need to replace the `connection string` with the one provided.

### Installing

Clone the repo:

```bash
git clone https://github.com/RickBr0wn/express-mongoose-template <YOUR_PROJECT_NAME> && cd <YOUR_PROJECT_NAME>
```

To start your own repository,

> **important:** make sure you are in the cloned directory.

```bash
rm -rf .git
git init
```

This will remove the existing git history, and allow you to link it to a new repository.

> Please credit this boilerplate if you build something fantastic!

## Routes

Inside of `./src/Controllers/index.js` are a collection of sample routes that involve the five primary `CRUD` functions of persistent storage.

- **GET** `./api/get-all-datas` - Get multiple documents from the database.
- **GET** `./api/get_single_data/:dataId` - Get a single document from the database, based on a dataId.
- **POST** `./api/create_a_data` - Creates a single document and assigns it a dataId.
- **DELETE** `./api/delete_a_data/:dataId` - Deletes a single document from the database, based on a dataId.
- **PATCH** `./api/update_a_data/:dataId` - Updates a single document from the database, based on a dataId.

## Running the tests

No test scripts available

## Built With

- [node](https://nodejs.org/en/about/) - As an asynchronous event-driven JavaScript runtime, Node.js is designed to build scalable network applications.
- [express](https://expressjs.com) - Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
- [mongoDB](https://www.mongodb.com) - MongoDB is a general purpose, document-based, distributed database built for modern application developers and for the cloud era.
- [mongoose](https://mongoosejs.com) - Mongoose provides a straight-forward, schema-based solution to model your application data.
- [dotenv](https://github.com/motdotla/dotenv#readme) - Dotenv is a zero-dependency module that loads environment variables from a `.env` file into `process.env.`
- [nodemon](https://nodemon.io) - Nodemon is a utility that will monitor for any changes in your source and automatically restart your server.

## Contributing

[CONTRIBUTING.md](/CONTRIBUTING.md)

## Author(s)

- **Rick Brown** - _Initial work_ - [RickBr0wn](https://github.com/RickBr0wn)

## License

This project is licensed under the MIT License - see the [LICENSE.md](https://gist.github.com/RickBr0wn/5f95ee6118bb32034e2b94acbd88a99d) file for details
