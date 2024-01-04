# Resolution Generator

The Resolution Generator is a simple web application tailored for my organization that allows team members to create resolutions for various incidents or issues. User can input information such as team name, diagnosis, action taken, next steps, and comments to generate a resolution output. Additionally, the application provides the option to include today's date in the resolution.

## Table of Contents

- [Usage](#usage)
- [Features](#features)
- [Local Storage](#local-storage)
- [Dark Mode](#dark-mode)
- [Contributing](#contributing)
- [License](#license)

## Usage

1. Open `index.html` in a web browser.
2. Fill in the required fields, including team name, diagnosis, action, next action, and comments.
3. Optionally, check the "Include Today's Date" checkbox.
4. Click the "Generate Resolution" button to create the resolution output.
5. Use the "Copy to Clipboard" button to copy the resolution to the clipboard.
6. The "Clear Fields" button resets the input fields and generates a new resolution.

## Features

- **Dynamic Output:** The generated resolution dynamically includes team name, date, diagnosis, action, next action, and comments.
- **Include Date Option:** Users can choose to include today's date in the resolution.
- **Local Storage:** The application saves and retrieves the team name and include date preferences from local storage.
- **Dark Mode:** A theme toggle allows users to switch between light and dark modes.

## Local Storage

The application utilizes local storage to save and retrieve the team name and include date preferences. The team name is loaded on page load, and changes to it are saved in local storage.

## Dark Mode

The application includes a theme toggle that enables users to switch between light and dark modes. The chosen mode is saved in local storage for a consistent user experience across sessions.

## Contributing

Feel free to contribute to the development of this project. If you have suggestions, bug reports, or feature requests, please [create an issue](https://github.com/iashilraj/resolution-generator/issues).

## License

This project is licensed under the [MIT License](LICENSE.md).