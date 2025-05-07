# YelpCamp

YelpCamp is a full-stack web application that allows users to browse, add, edit, and review campgrounds. It utilizes Node.js, Express, MongoDB, and integrates services such as Cloudinary for image uploads and Mapbox for geolocation.

## Features
- User authentication and authorization
- CRUD operations for campgrounds
- Image upload with Cloudinary
- Geolocation using Mapbox
- Review and rating system

## Technologies Used
- **Backend**: Node.js, Express, MongoDB, Mongoose
- **Frontend**: EJS, Bootstrap
- **Storage**: Cloudinary (for images)
- **Geolocation**: Mapbox API
- **Authentication**: Passport.js

## Installation

### Prerequisites
Make sure you have the following installed:
- Node.js
- MongoDB
- npm or yarn

### Steps
1. Clone the repository:
   ```sh
   git clone https://github.com/JoeKollie01/Camp.git
   cd Camp
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Set up environment variables: Create a `.env` file in the root directory and add:
   ```env
   CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
   CLOUDINARY_KEY=your_cloudinary_api_key
   CLOUDINARY_SECRET=your_cloudinary_api_secret
   MAPBOX_TOKEN=your_mapbox_token
   ```

4. Run the application:
   ```sh
   node app.js
   ```

## Project Structure
```
YelpCamp/
│── models/            # Mongoose models
│── routes/            # Express routes
│── views/             # EJS templates
│── public/            # Static assets
│── index.js           # Cloudinary configuration
│── campground.js      # Campground CRUD operations
│── review.js          # Review CRUD operations
│── app.js             # Main application file
│── package.json       # Dependencies and scripts
│── .env               # Environment variables
```

## API Endpoints

### Campgrounds
- `GET /campgrounds` - View all campgrounds
- `GET /campgrounds/new` - Form to add a new campground
- `POST /campgrounds` - Create a new campground
- `GET /campgrounds/:id` - View a specific campground
- `GET /campgrounds/:id/edit` - Edit campground form
- `PUT /campgrounds/:id` - Update a campground
- `DELETE /campgrounds/:id` - Delete a campground

### Reviews
- `POST /campgrounds/:id/reviews` - Add a review
- `DELETE /campgrounds/:id/reviews/:reviewId` - Delete a review

## Contributing
Pull requests are welcome. Please open an issue first to discuss any changes.





