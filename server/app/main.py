from json.tool import main
from fastapi import FastAPI
from dotenv import load_dotenv
from fastapi.middleware.cors import CORSMiddleware

load_dotenv()


from .chat_pdf import controller as chat_pdf
origins = [
    "http://localhost",
    "http://localhost:3000",
    "http://localhost:8080",
]

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


app.include_router(chat_pdf.router)

@app.get("/")
def root():
    return {"message": "Hello from AI Container"}

