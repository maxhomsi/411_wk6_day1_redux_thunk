import React from 'react'
//coloquei a table na mesma linha para testar o erro
import { Button, Table, TableHead, TableBody, TableRow, TableCell, Container, IconButton, Menu, MenuItem } from '@material-ui/core'
import { MoreVert } from '@material-ui/icons'

const Import = (props) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [selectedIndex, setSelectedIndex] = React.useState(null);

    const open = Boolean(anchorEl);
  
    const handleClick = (event, i) => {
      setAnchorEl(event.currentTarget);
      setSelectedIndex(i)
    };
  
    const handleClose = () => {
      setAnchorEl(null);
      setSelectedIndex(null)
    };

    return (
        <Container maxWidth="sm">
            <Button variant="contained" color="primary" onClick={props.fetchMakes} style={{margin: '20px'}}>
                Import
            </Button>
            <h2>
                Count: {props.makes.length}
            </h2>
            <Table aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell>Id</TableCell>
                    <TableCell align="right">Make</TableCell>
                    <TableCell align="right">Actions</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                    {props.makes.map((row, i) => (
                        <TableRow key={i}>
                            <TableCell scope="row">
                                {row.MakeId}
                            </TableCell>
                            <TableCell align="right">
                                {row.MakeName}
                            </TableCell>
                            <TableCell align="right">
                                <IconButton
                                    onClick={(event) => handleClick(event, i)}
                                >
                                    <MoreVert />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <Menu
                anchorEl={anchorEl}
                keepMounted
                open={open}
                onClose={handleClose}
            >
                <MenuItem
                    onClick={() => {
                        props.deleteMake(selectedIndex)
                        handleClose()}}
                >
                    Delete
                </MenuItem>
            </Menu>
        </Container>
    )
}

export default Import