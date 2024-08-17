from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # This will enable CORS for all routes

# In-memory database (for simplicity)
flashcards = []
flashcard_id = 1

# Route to get all flashcards
@app.route('/api/flashcards', methods=['GET'])
def get_flashcards():
    return jsonify(flashcards)

# Route to add a new flashcard
@app.route('/api/flashcards', methods=['POST'])
def add_flashcard():
    global flashcard_id
    data = request.json
    new_flashcard = {
        'id': flashcard_id,
        'front': data['front'],
        'back': data['back']
    }
    flashcards.append(new_flashcard)
    flashcard_id += 1
    return jsonify(new_flashcard), 201

# Route to update a flashcard
@app.route('/api/flashcards/<int:id>', methods=['PUT'])
def update_flashcard(id):
    data = request.json
    flashcard = next((fc for fc in flashcards if fc['id'] == id), None)
    if flashcard:
        flashcard['front'] = data.get('front', flashcard['front'])
        flashcard['back'] = data.get('back', flashcard['back'])
        return jsonify(flashcard)
    else:
        return jsonify({'error': 'Flashcard not found'}), 404

# Route to delete a flashcard
@app.route('/api/flashcards/<int:id>', methods=['DELETE'])
def delete_flashcard(id):
    global flashcards
    flashcards = [fc for fc in flashcards if fc['id'] != id]
    return jsonify({'message': 'Flashcard deleted'})

if __name__ == '__main__':
    app.run(debug=True)
