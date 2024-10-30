# Revlift

**Revlift** is a dynamic car wiki designed for enthusiasts who want a detailed, interactive, and personalized experience. The platform allows users to explore, save, and access a curated collection of car models and brands. It also offers exclusive admin privileges to manage and expand the database.

You can explore Revlift here: [revlift.vercel.app](https://revlift.vercel.app).

## Project Description

Revlift combines modern web technologies with a responsive, intuitive design to offer real-time access to car data. Users can authenticate to save their favorite car models, creating a personalized experience. Additionally, admin-authorized users can directly add new cars to the database, ensuring that Revlift remains current with the latest models and specifications.

## Features

- **Dynamic Content Loading**: Revlift retrieves car data from Supabase, dynamically rendering content without full page reloads.
- **User Authentication**: Allows users to create accounts, save favorite models, and access them from their profiles.
- **Admin Authorization**: Authorized users can add new car entries to the database, keeping the data fresh and comprehensive.
- **Responsive Design**: Designed to provide an optimized user experience on both desktop and mobile devices.
- **Real-Time Updates**: Supabase’s real-time capabilities ensure immediate visibility for new or updated data.

## Technologies Used

- **Next.js**: For server-side rendering, component structure, and frontend logic.
- **Supabase**: Provides real-time database storage, user authentication, and admin management.
- **Node.js & Express.js**: Backend server and API management, facilitating data requests and user authentication.
- **Vercel**: Hosts the Revlift website, ensuring reliability and scalability.
- **JavaScript, HTML, CSS**: Core languages for structuring, styling, and adding interactivity.

## Installation

To run Revlift locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/revlift.git
   ```
2. Navigate to the project directory:
   ```bash
   cd revlift
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Set up environment variables:

   - Create a `.env` file in the root directory and add your Supabase credentials, admin keys, and any other required API keys as specified in `.env.example`.

5. Start the development server:

   ```bash
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser to view the site.

## Usage

- **Browsing and Saving Models**: Users can browse a range of car models and use their account to save favorites for quick access.
- **Admin Access**: Admin-authorized users can access special admin tools to add or edit car entries in the database.

## Contributing

To contribute to Revlift:

1. Fork this repository.
2. Create a new branch for your feature (`git checkout -b feature-name`).
3. Commit your changes (`git commit -m 'Add a new feature'`).
4. Push to the branch (`git push origin feature-name`).
5. Open a pull request.

## Future Enhancements

- **Advanced Search & Filtering**: Add search filters to enable more specific searches by model specifications.
- **Community Contributions**: Enable verified users to suggest edits or add information on car models, subject to admin approval.
- **Performance Optimizations**: Implement caching and optimized data-fetching to further enhance load times.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

---
