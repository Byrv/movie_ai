from flask import Flask, jsonify
from flask_cors import CORS  # Import CORS
from mongo import get_database, get_movies_data
from model import get_top_movies

app = Flask(__name__)
CORS(app)  # Enable CORS for all domains on all routes

@app.route('/top-movies', methods=['GET'])
def top_movies_endpoint():
    try:
        db = get_database()
        movies_data = get_movies_data(db)
        top_movies = get_top_movies(movies_data, n=10)
        return jsonify(top_movies.to_dict(orient='records')), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
