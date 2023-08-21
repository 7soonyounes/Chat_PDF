FROM python:3.11
WORKDIR /code
COPY ./requirements.txt /code/requirements.txt
RUN pip install --no-cache-dir --upgrade -r /code/requirements.txt
COPY ./app /code/app
COPY .env /code/.env
ENV PYTHONPATH=/code
ENV DOTENV_PATH=/code/.env
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]
