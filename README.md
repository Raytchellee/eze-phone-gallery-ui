## Project Overview

The phone gallery UI is a web application built with Next.js and TypeScript, utilizing Recoil for state management. It provides users a simple and intuitive way to browse and view a collection of phone images with description and price listing. This documentation will guide you through the installation process, explain the project structure, and provide details on how to use and customize the UI.

## Features

- Display a grid of phone images with relevant details.
- Filter and search functionality to find specific phones.
- Responsive design for optimal viewing on various devices.

## Demo

You can check out a live demo of the Phone Gallery UI [here](https://phone-gallery-ui-live-fx5z-raytchellee.vercel.app).

## Table of Contents

1. [Installation](#installation)<!-- 2. [Project Structure](#project-structure) -->
2. [Usage](#usage)
3. [Customization](#customization)<!-- 5. [Contributing](#contributing) -->
4. [License](#license)

## Installation

To install and run the phone gallery UI, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/Raytchellee/eze-phone-gallery-ui.git
   ```

2. Navigate to the project directory:

   ```bash
   cd eze-phone-gallery-ui
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open your browser and visit http://localhost:3000 to view the phone gallery UI.

## Project Structure

The project structure is organized as follows:
<!-- 
```
eze-phone-gallery-ui/
├── components/
│   ├── Gallery.js
│   ├── Image.js
│   └── ...
├── pages/
│   ├── index.js
│   └── ...
├── public/
│   ├── images/
│   │   ├── phone1.jpg
│   │   ├── phone2.jpg
│   │   └── ...
│   └── ...
├── styles/
│   ├── global.css
│   └── ...
├── .gitignore
├── next.config.js
├── package.json
├── README.md
└── ...
``` -->
- **components/**: Contains reusable UI components used in the phone gallery.
- **pages/**: Contains the main pages of the application, including `index.tsx` for the gallery page.
- **enums/**: Contains predefined options for variables or properties.
- **interfaces/**: Defines the structure and behavior of objects.
- **actions/**: Holds the implementation of user interactions or system events.
- **styles/**: Holds global CSS styles for the application.
- **.gitignore**: Specifies files and directories to be ignored by Git.
- **next.config.js**: Configuration file for Next.js.
- **package.json**: Lists project dependencies and scripts.
- **README.md**: The main documentation file.


## Usage

The application consists of the following components:

- **Gadgets**: Renders a grid of phone images with basic information.
- **SideBar**: Allows filtering the gallery by brand or other criteria.
- **Header**: Provides a search functionality to find specific phones.

The Recoil library is used for managing the application's state. The relevant Recoil atoms and selectors are defined in the following files:

- **`src/state/index.ts`**: Defines the Recoil atoms and selectors for managing the phone gallery state.

## Customization

The phone gallery UI can be customized to fit your specific needs. Here are some possible customization options:

- **Styling**: Modify the CSS styles in the `styles/` directory to change the appearance of the UI.
- **Layout**: Adjust the grid layout and image size in the `Gallery` component.
- **Functionality**: Extend the UI with additional features like image filters, search, or sorting.

Feel free to explore the project files and experiment with different customizations!

<!-- ## Contributing -->

<!-- Contributions are welcome!

 If you'd like to contribute to the phone gallery UI, please follow these guidelines:

1. Fork the repository.
2. Create a new branch for your feature/bug fix.
3. Make your changes and ensure they are properly tested.
4. Commit your changes and push them to your fork.
5. Submit a pull request with a clear description of your changes.
 -->
## License

The phone gallery UI is open-source and released under the [MIT License](https://opensource.org/licenses/MIT). You are free to use, modify, and distribute the code.

<!-- Please refer to the [LICENSE](https://github.com/raytchellee/eze-phone-gallery-ui/blob/main/LICENSE) file for more details. -->
