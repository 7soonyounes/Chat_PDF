from pydantic import BaseModel

class PDFQuery(BaseModel):
    id: str
    query: str 
    answer: str 
