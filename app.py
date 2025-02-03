from flask import Flask, render_template
from character_calls.get_characters import get_characters

app = Flask(__name__)

@app.route('/')
def landing():
    return '''
        <h1>Welcome</h1>
        <p>For documentation, see: </p>
    '''

@app.route('/characters')
def get_chars():
    characters = get_characters()
    return render_template('characters.html', characters=characters)


if __name__ == "__main__":
    app.run(debug=True)
