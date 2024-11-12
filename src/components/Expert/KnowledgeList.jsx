import React, { useState, useEffect } from 'react';
import { List, ListItem, ListItemText, Typography, Box, Button, TextField } from '@mui/material';
import { mockKnowledgeBase } from '../../MockData';

const KnowledgeList = () => {

  const [knowledgeBase, setKnowledgeBase] = useState([]);

  const [editingId, setEditingId] = useState(null);

  const [editedTitle, setEditedTitle] = useState('');

  useEffect(() => {

    setKnowledgeBase(mockKnowledgeBase);

  }, []);

  const handleDelete = (id) => {

    const updatedKnowledge = knowledgeBase.filter((item) => item.id !== id);

    setKnowledgeBase(updatedKnowledge);
  };

  const handleEdit = (item) => {

    setEditingId(item.id);

    setEditedTitle(item.title);
  };

  const handleSave = (id) => {

    const updatedKnowledge = knowledgeBase.map((item) =>

      item.id === id ? { ...item, title: editedTitle } : item

    );

    setKnowledgeBase(updatedKnowledge);

    setEditingId(null);

    setEditedTitle('');
  };

  const handleCancel = () => {

    setEditingId(null);

    setEditedTitle('');
  };

  return (

    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4, padding: 4, alignItems: 'center' }}>

      <Typography variant="h6" gutterBottom sx={{ textAlign: 'center' }}>

        Список Знаний

      </Typography>

      <List>

        {knowledgeBase.map((item) => (
          
          <ListItem key={item.id} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '480px' }}>
            
            {editingId === item.id ? (

              <>

                <TextField value={editedTitle} onChange={(e) => setEditedTitle(e.target.value)} variant="standard" size="small" sx={{ width: '60%'}}/>

                <Box>

                  <Button variant="contained" color="primary" size="small" onClick={() => handleSave(item.id)} sx={{ mr: 1 }}>
                    
                    Save

                  </Button>

                  <Button variant="outlined" color="secondary" size="small" onClick={handleCancel}>
                    
                    Cancel

                  </Button>

                </Box>

              </>
            ) : (
              <>
                <ListItemText primary={item.title} sx={{ maxWidth: '700px'}}/>

                <Box>

                  <Button variant="outlined" color="primary" size="small" onClick={() => handleEdit(item)} sx={{ mr: 1, fontWeight: 700 }}>
                    
                    Edit

                  </Button>

                  <Button variant="outlined" color="error" size="small"onClick={() => handleDelete(item.id)} sx={{ fontWeight: 700 }}>
    
                    Delete
    
                  </Button>
    
                </Box>
    
              </>
    
            )}
    
          </ListItem>
    
        ))}

      </List>

    </Box>
  );
};

export default KnowledgeList;
