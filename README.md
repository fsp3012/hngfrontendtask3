# Image Gallery with Drag and Drop and Authentication

This project is a React-based image gallery with the following features:

- View images in a grid layout.
- Search for images by tags.
- Upload new images with tags(authenticated users only).
- Rearrange images using drag and drop functionality (authenticated users only).

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
  - [Viewing the Gallery](#viewing-the-gallery)
  - [Searching for Images](#searching-for-images)
  - [Uploading New Images](#uploading-new-images)
  - [Rearranging Images (Authenticated Users)](#rearranging-images-authenticated-users)
- [Authentication with Auth0](#authentication-with-auth0)
- [License](#license)

## Getting Started

### Prerequisites

Before you begin, ensure you have the following dependencies installed:

- [Node.js](https://nodejs.org/) and npm (Node Package Manager)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/fsp3012/hngfrontendtask3.git
   cd hngfrontend3
   
2. Install the dependencies:
   
   ```bash
   npm install

## Usage

### Viewing the gallery
-  Access the image gallery by opening the index.html file in a web browser or by running a local development server:
  
  ```bash
  npm run dev
  ```
   The gallery will display a grid of images.

### Searching for Images
-  Use the search bar to filter images by tags. Enter a keyword, and the gallery will display matching images.
  
### Uploading New Images (Authenticated Users)
- To add a new image to the gallery, you need to be an authenticated user by signing up then login.
- Authentication is implemented using Auth0 (see Authentication with Auth0).
- Once authenticated, you can drag and drop images to rearrange them.
- Click the "Choose File" button and select an image file.
- Enter a tag in the input field.
- Click "Add" to upload the image with the specified tag.

### Rearranging Images (Authenticated Users)
- To rearrange images using drag and drop functionality, you need to be an authenticated user by signing up then login.
- Authentication is implemented using Auth0 (see Authentication with Auth0).
- Once authenticated, you can drag and drop images to rearrange them.
  
### Authentication with Auth0
- This project uses Auth0 for user authentication. Authenticated users have the privilege to upload and rearrange images using drag and drop.

- To set up Auth0 authentication for this project:

- Create an Auth0 account and configure a new application.
- Set the Auth0 domain and client ID in your project configuration.
- Define the authentication flow and ensure that only authenticated users have access to the drag-and-drop functionality.
- For detailed instructions on integrating Auth0 with your project, refer to the Auth0 documentation.

### License
- This project is licensed under the MIT License - see the LICENSE file for details.

   

