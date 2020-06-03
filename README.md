## React Profile
![Logo](public/favicon.ico)

<!-- <p align="center"><img src="./public/favicon.ico" /></p> -->

The project uses the Github API and utilizes the browser's localStorage for persistence. The following instructions will give you a copy of the project on your local machine for development and testing purposes. Its a fully customizable portfolio page, whose content is completely controled by `config.json` file. Just change the details appropriately and your webpage is ready to be deployed.

### The Competition
This project is actually the result of competition me and my brother([https://github.com/manish-dalal](https://github.com/manish-dalal/manish-dalal.github.io)) had for who makes a better portfolio page. We both shared the ideas and hence both ended up using the github APIs. Feel free to comment in issues.

### Prerequisites

Make sure you have NodeJS (v13.0.1 or higher) and npm (v6.12.0 or higher) installed.

### How to build

1.  Clone the repo.
2.  Install all dependencies using `npm install`.
3.  Change the user details in `config.json`, and the logo `public/favicon.ico` as desired.
3.  Start the project by running `npm start`.
4.  Publish the changes to your github portfolio page using `npm run deploy`.

### Customizations

Customize the appearence of your repoositories on `Projects` section of the page by placing a `logo.png`(preferably a 256 x 256 png file with transparent backround) in their master branch. If no logo file is found, then the repository image is choosen based on the programming language used.

### Prettier and Precommit Hooks

Prettier is used for automatic code formatting. It's executed on every commit using a precommit hook.

## Contributing

Pull Requests and Suggestions are highly recommended.

## License

This project is licensed under the MIT License - check the [LICENSE](https://github.com/devanshdalal/devanshdalal.github.io/blob/dev/LICENSE) for details.
