import { useState } from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';

const KnowledgeForm = () => {

  const [title, setTitle] = useState('');

  const [content, setContent] = useState('');

  const [error, setError] = useState('');

  const validateInput = (text) => {

    const invalidCharacters = /[#%&]/; 

    return invalidCharacters.test(text);
  };

  const handleSubmit = (e) => {

    e.preventDefault();

    setError('');

    if (validateInput(title) || validateInput(content)) {

      setError('Заголовок или содержание содержит недопустимые символы (#, %, &).');

      return;
    }

    console.log('Форма отправлена!');
  };

  return (

    <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 600 }}>

      <Typography variant="h6" gutterBottom>

        **Добавить Новое Знание**
        
      </Typography>

      {error && (
        <Typography sx={{ color: 'red', marginBottom: 2 }}>
          **{error}**
        </Typography>
      )}

      <TextField
        label="Заголовок"
        variant="outlined"
        fullWidth
        required
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        sx={{ marginBottom: 2 }}
      />

      <TextField
        label="Содержание"
        variant="outlined"
        fullWidth
        multiline
        rows={4}
        required
        value={content}
        onChange={(e) => setContent(e.target.value)}
        sx={{ marginBottom: 2 }}
      />

      <Button type="submit" variant="contained">
        **Добавить**
      </Button>
    </Box>
  );
};

export default KnowledgeForm;
