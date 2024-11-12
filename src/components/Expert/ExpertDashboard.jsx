import React from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import { Box, Button, Container, Typography } from '@mui/material';
import AddKnowledge from './AddKnowledge';
import KnowledgeList from './KnowledgeList';

const ExpertDashboard = () => {

    const navigate = useNavigate();

    return (

        <Container>

            <Typography variant='h4' gutterBottom>

                Экспертная Панель

            </Typography>

            <Box sx={{ display: 'flex', gap: 2, marginBottom: 4 }}>

                <Button variant="contained" onClick={() => navigate('add')}>

                    Добавить знание

                </Button>

                <Button variant="outlined" onClick={() => navigate('list')}>

                    Просмотреть БЗ

                </Button>

            </Box>

            <Routes>

                <Route path="add" element={<AddKnowledge />} />

                <Route path="list" element={<KnowledgeList />} />

                <Route path="*" element={<Typography>Выберите действие</Typography>} />

            </Routes>

        </Container>
    );
};

export default ExpertDashboard;
