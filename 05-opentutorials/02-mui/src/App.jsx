import { Container, Grid } from '@mui/material'
import React from 'react'
import Article from './Article'
import Header from './Header'
import Nav from './Nav'

const App = () => {
  return (
    <Container fixed>
      <Header></Header>
      <Grid container>
        <Grid item xs='2'>
          <Nav></Nav>
        </Grid>
        <Grid item xs='8'>
          <Article></Article>
        </Grid>
      </Grid>
    </Container>
  )
}

export default App
