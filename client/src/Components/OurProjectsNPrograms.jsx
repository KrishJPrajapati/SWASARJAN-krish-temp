import React from 'react';
import { Box , Typography, styled } from '@mui/material'

const MainContainer = styled(Typography)({
    width : '200px',
    border : '2rem',
    borderColor:'red',
    background: 'blue'
});

const Subcontainer = styled(Box)({
    widht : '200px',
    borderColor:'red',
    border:'2rem',
    background:'green'


});

const Projects = ()=>{
   <MainContainer>
        <Subcontainer>
            
        </Subcontainer>
   </MainContainer>
}

export default Projects;