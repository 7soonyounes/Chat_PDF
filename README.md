# ChatPDF Repository

## Server

The `server` folder contains the FastAPI backend of the application. FastAPI is a modern, fast, web framework for building APIs with Python 3.7+.

### Getting Started

1. Navigate to the `server` directory: `cd server`
2. Create a virtual environment: `python -m venv venv`
3. Activate the virtual environment:
   - On Windows: `venv\Scripts\activate`
   - On macOS and Linux: `source venv/bin/activate`
4. Install the required dependencies: `pip install -r requirements.txt`
5. Run the FastAPI server: `uvicorn main:app --host 0.0.0.0 --port 8000`

The FastAPI server should now be running at `http://localhost:8000`.

## Client

The `client` folder contains the React frontend of the application.

### Getting Started

1. Navigate to the `client` directory: `cd client`
2. Install the dependencies: `npm install`
3. Start the development server: `npm start`

The React development server should now be running at `http://localhost:3000`.

## Contributing

We welcome contributions to this repository! If you would like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix: `git checkout -b feature/new-feature`
3. Make your changes and commit them.
4. Push your changes to your forked repository.
5. Create a pull request targeting the `main` branch of this repository.

## Issues

If you encounter any issues or have suggestions for improvements, please feel free to open an issue on this repository. We appreciate your feedback!

## License

This repository is licensed under the [MIT License](LICENSE), which means you're free to use the code in this repository for your own projects.

---

Thank you for checking out our FastAPI and React Client Repository! If you have any questions or need further assistance, don't hesitate to reach out. Happy coding! 🚀
