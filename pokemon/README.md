# Pokemon Card Explorer

A modern web application built with React, TypeScript, and Vite that allows users to explore and view Pokemon cards. This project demonstrates the use of modern web technologies while providing an engaging interface for Pokemon enthusiasts.

## Features

- Display Pokemon cards with detailed information
- TypeScript implementation for type safety
- Modern React components and practices
- Responsive design for various screen sizes
- Fast development environment with Vite

## Tech Stack

- React 19+
- TypeScript
- Vite
- ESLint for code quality
- CSS Modules for styling

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd pokemon
```

2. Install dependencies:
```bash
npm install
# or
yarn
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:5173`

## Project Structure

```
pokemon/
├── src/
│   ├── components/    # React components
│   │   └── PokemonCard.tsx
│   ├── types/        # TypeScript type definitions
│   │   └── pokemon.ts
│   ├── assets/       # Static assets
│   └── App.tsx       # Main application component
├── public/           # Public assets
└── index.html        # Entry HTML file
```

## Development

The project uses Vite for fast development with HMR (Hot Module Replacement). ESLint is configured with TypeScript-aware rules for better code quality.

## Building for Production

To create a production build:

```bash
npm run build
# or
yarn build
```

The built files will be in the `dist` directory.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

[Add your chosen license here]

## Acknowledgments

- Pokemon data and imagery
- React and Vite communities
- TypeScript team
