# Vehicle Filter App

This is a Next.js application that allows users to filter vehicles by make and model year. It integrates with a backend service to fetch vehicle data dynamically and display it in a user-friendly interface.

## Features

- **Filter Vehicles by Make**: Users can select a vehicle make from a dynamically fetched list.
- **Select Model Year**: Users can select a model year from a pre-defined range.
- **Vehicle Models Display**: After selecting a make and year, users are redirected to a page that shows a list of models for the selected vehicle.

## Technologies Used

- **React**: For building the user interface.
- **Next.js**: For server-side rendering and routing.
- **Axios**: For making API requests.
- **Tailwind CSS**: For styling the application.
- **TypeScript**: For type safety.

## Key Files

- **`index.tsx`** (HomePage): This page allows users to select a vehicle make and model year, and redirects them to the result page.
- **`result/[makeId]/[year]/page.tsx`** (ResultPage): Displays the list of vehicle models based on the selected make and year.
- **`service/index.ts`**: Contains the API calls for fetching vehicle makes and models.
- **`components/`**: Reusable UI components like dropdowns, buttons, loaders, etc.

## Installation

To set up this project locally, follow these steps:

1. Clone the repository:

```bash
   git clone <repository-url>
```

2. Install dependencies:

Using npm:

```bash
   npm install
```

Or using yarn:

```bash
   yarn install
```

3. Start the development server:

Using npm:

```bash
   npm run dev
```

Or using yarn:

```bash
yarn dev
```

The app will be available at http://localhost:3000.

## Usage

- **Home Page**
- Select a vehicle make from the dropdown.
- Choose a model year from the year dropdown.
- Click the Next button to navigate to the results page.
- **Results Page**
- Watch a list of vehicle models based on the selected make and year.
- Click the Back button to navigate to the previous page.
