import React from "react";
import { Container, Typography } from "@mui/material";
import KnowledgeSearch from './KnowledgeSearch';

const UserDashboard = () => {

    return (

        <Container>

            <Typography variant="h4" gutterBottom>

                Пользовательская панель

            </Typography>

            <KnowledgeSearch />

        </Container>
    );
};

export default UserDashboard;
