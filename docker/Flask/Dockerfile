FROM python:3.13.1-slim-bullseye

WORKDIR /app

ENV FLASK_APP=app.py

COPY ./requirements.txt requirements.txt

RUN pip3 install -r requirements.txt

COPY ./ .

EXPOSE 5000

CMD ["flask", "run", "--host=0.0.0.0"]