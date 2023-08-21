# ChatPDF Repository

## Server

The `server` folder contains the FastAPI backend of the application.

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

## Docker Image

A Docker image of the project is available on Docker Hub:


- Run the server [Docker Hub - Server Image](https://hub.docker.com/layers/7soonyounes/ai-container/chatpdf-backend/images/sha256-f5e1d96f1ab022862cdf4c00c7b8ffb9d19f87e1280b4f258af5aa5be3eea483?context=repo) using this command: docker run -p 8000:8000 7soonyounes/ai-container:chatpdf-backend
- Run the client [Docker Hub - Client Image](https://hub.docker.com/layers/7soonyounes/ai-container/chatpdf-frontend/images/sha256-2706cc1542fb3f546fd91dc3a6055a5fa09c47119963dcf7aa09a836e6d955e2?context=repo) using this command: docker run -p 3000:3000 7soonyounes/ai-container:chatpdf-frontend

You can pull the image using the following command:


## Usage

1. Pull server image from docker hub.
2. Pull client image from docker hub.
3. Run server image from docker desktop app on port 8000.
4. Run client image from docker desktop app on port 3000.
5. Access app on  localhost:3000.

##Youness AITHASSOUNE 
##Have a GOOD DAY !!! 🚀



