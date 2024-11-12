import React, { useState, useEffect } from "react";
import { TextField, List, ListItem, ListItemText, Typography, Box } from "@mui/material";
import ReactFlow, { MiniMap, Controls } from "react-flow-renderer";
import { mockKnowledgeBase } from "../../MockData";

const KnowledgeSearch = () => {

    const [query, setQuery] = useState('');

    const [filteredKnowledge, setFilteredKnowledge] = useState([]);

    const [selectedKnowledge, setSelectedKnowledge] = useState(null);
  
    useEffect(() => {

      if (query.trim() === '') {

        setFilteredKnowledge([]);

      } else {

        const results = mockKnowledgeBase.filter((item) =>

          item.title.toLowerCase().includes(query.toLowerCase())

        );

        setFilteredKnowledge(results);

      }

    }, [query]);

    const elements = selectedKnowledge

      ? mockKnowledgeBase.flatMap((item) => [

          { id: item.id.toString(), data: { label: item.title }, position: { x: Math.random() * 250, y: Math.random() * 250 } },

          ...item.related.map((relId) => ({

            id: `${item.id}-${relId}`,

            source: item.id.toString(),

            target: relId.toString(),

            animated: true,

          })),

        ])

      : [];
  
    return (

      <Box sx={{ display: 'flex', gap: 4 }}>

        
        <Box sx={{ width: '30%' }}>
          <TextField

            label="Поиск знаний"

            variant="outlined"

            fullWidth

            value={query}

            onChange={(e) => setQuery(e.target.value)}

            sx={{ marginBottom: 2 }}

          />

          <List>

            {filteredKnowledge.map((item) => (

              <ListItem button key={item.id} onClick={() => setSelectedKnowledge(item)}>

                <ListItemText primary={item.title} />

              </ListItem>

            ))}

          </List>

        </Box>

        <Box sx={{ flexGrow: 1, height: 500, border: '1px solid #ccc', borderRadius: 1, padding: 2 }}>

          {selectedKnowledge ? (

            <>

              <Typography variant="h6" gutterBottom>

                Связи для: {selectedKnowledge.title}

              </Typography>

              <ReactFlow elements={elements} style={{ width: '100%', height: '100%' }}>

                <MiniMap />

                <Controls />

              </ReactFlow>

            </>
            
          ) : (

            <Typography>Выберите знание для отображения связей.</Typography>

          )}

        </Box>

      </Box>
    );
  };
  
  export default KnowledgeSearch;

