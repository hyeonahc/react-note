import {
  Button,
  ButtonGroup,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material'
import { useState } from 'react'

const Article = () => {
  const [open, setOpen] = useState(false)

  return (
    <div>
      <h2>Article</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus urna
        eros, egestas vitae volutpat in, luctus ac arcu. Mauris semper auctor
        orci quis finibus. Vestibulum porttitor eleifend justo, ac efficitur
        diam. Vestibulum sed rutrum mauris. Fusce urna lectus, scelerisque eu
        auctor nec, tincidunt quis nulla. Aenean a posuere diam. Aliquam
        tincidunt non ex vitae dapibus. Phasellus vulputate cursus quam ut
        hendrerit. Nulla blandit elit neque, et sodales justo varius eu.
        Curabitur lobortis pretium nunc, nec bibendum magna vehicula sed.
      </p>
      <ButtonGroup>
        <Button variant='outlined' onClick={() => setOpen(true)}>
          Create
        </Button>
        <Button variant='outlined'>Update</Button>
      </ButtonGroup>
      <Button variant='outlined'>Delete</Button>
      <Dialog open={open}>
        <DialogTitle>Create Dialog</DialogTitle>
        <DialogContent>
          <DialogContentText>Hello World</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant='outlined' onClick={() => setOpen(false)}>
            Close Dialog
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default Article
