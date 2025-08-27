# Fragment Store

A modern e-commerce web application built with React and FastAPI, featuring a responsive UI with Tailwind CSS and Shadcn components.

## Features

- 🛍️ Modern e-commerce interface
- 🎨 Sleek UI with Tailwind CSS and Shadcn components
- 🔒 Secure authentication system
- 💳 Shopping cart functionality
- 🌐 RESTful API backend with FastAPI
- 📦 MongoDB database integration
- 🎯 Responsive design for all devices

## Tech Stack

### Frontend
- React
- Tailwind CSS
- Shadcn UI Components
- React Router DOM
- React Hook Form
- Axios

### Backend
- FastAPI
- MongoDB with Motor
- Python 3.12+
- JWT Authentication
- RESTful API

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- Python 3.12 or higher
- MongoDB

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/fragment-store.git
cd fragment-store
```

2. Set up the backend
```bash
cd backend
python -m venv venv
# For Windows
.\venv\Scripts\activate
# For Unix or MacOS
source venv/bin/activate
pip install -r requirements.txt
```

3. Set up the frontend
```bash
cd frontend
npm install --legacy-peer-deps
```

4. Create a `.env` file in the backend directory with the following content:
```
MONGO_URL=your_mongodb_connection_string
DB_NAME=your_database_name
JWT_SECRET=your_jwt_secret
```

### Running the Application

1. Start the backend server
```bash
cd backend
.\venv\Scripts\activate  # For Windows
uvicorn server:app --reload
```

2. Start the frontend development server
```bash
cd frontend
npm start
```

The application will be available at:
- Frontend: http://localhost:3000
- Backend API: http://localhost:8000

## Project Structure

```
fragment-store/
├── backend/
│   ├── requirements.txt
│   └── server.py
└── frontend/
    ├── public/
    ├── src/
    │   ├── components/
    │   ├── pages/
    │   ├── hooks/
    │   └── lib/
    ├── package.json
    └── tailwind.config.js
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Shadcn UI](https://ui.shadcn.com/) for the beautiful components
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [FastAPI](https://fastapi.tiangolo.com/) for the modern web framework
