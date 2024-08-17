import React, { useState } from 'react';
import Button from '../UI/Button';
import Input from '../UI/Input';

const FlashcardEditor = ({ onSave, initialData = {} }) => {
  const [front, setFront] = useState(initialData.front || '');
  const [back, setBack] = useState(initialData.back || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ front, back });
    setFront('');
    setBack('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        label="Front"
        value={front}
        onChange={(e) => setFront(e.target.value)}
        required
      />
      <Input
        label="Back"
        value={back}
        onChange={(e) => setBack(e.target.value)}
        required
      />
      <Button type="submit">Save Flashcard</Button>
    </form>
  );
};

export default FlashcardEditor;
