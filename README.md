# Face Recognition Brain

## Overview

Face Recognition Brain is a comprehensive web application that utilizes machine learning to detect faces in images. Users can create accounts, log in, and upload images for face detection. The application leverages the Clarifai API to identify and highlight faces within the provided images. Additionally, it keeps a record of how many faces each user has recognized over time, offering a personalized user experience. Please note that this project is currently under development, and new features and improvements are continually being added.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. Clone the repository
    ```bash
    git clone https://github.com/yourusername/facerecognitionbrain.git
    cd facerecognitionbrain
    ```

2. Install dependencies
    ```bash
    npm install
    ```

3. Set up your PostgreSQL database and update the connection details in the server file

4. Add your Clarifai API key in place of `YOUR_CLARIFAI_API_KEY`
    ```javascript
    const app = new Clarifai.App({
      apiKey: 'YOUR_CLARIFAI_API_KEY'
    });
    ```

## Usage

1. Start the backend server
    ```bash
    node server.js
    ```

2. Start the React development server
    ```bash
    npm start
    ```

3. Open your browser and navigate to `http://localhost:3000`

## Features

- User authentication (signup and login)
- Face recognition using Clarifai API
- Track the number of faces recognized by each user
- Responsive and interactive UI

## Technologies Used

- Frontend:
  - React
  - Tachyons
  - Particles.js
- Backend:
  - Node.js
  - Express.js
  - PostgreSQL
  - bcrypt (for password hashing)
  - Clarifai API

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Note

This project is currently in development. Expect frequent updates and changes.

```bash
Replace `https://github.com/yourusername/facerecognitionbrain.git` with your actual GitHub repository URL. This README file covers the basic structure and usage of your project, and it's designed to be clear and helpful for anyone looking to understand or contribute to your project.
```
