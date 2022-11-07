import React, { useContext, useEffect } from 'react'
import { GlobalStoreContext } from '../store'
import ListCard from './ListCard.js'
import MUIDeleteModal from './MUIDeleteModal'

import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab'
import List from '@mui/material/List';
import Typography from '@mui/material/Typography'
import Statusbar from './Statusbar';
/*
    This React component lists all the top5 lists in the UI. This uses Material UI
    
    @author McKilla Gorilla
*/
const HomeScreen = () => {
    const { store } = useContext(GlobalStoreContext);

    useEffect(() => {
        store.loadIdNamePairs();
    }, []);

    function handleCreateNewList() {
        store.createNewList();
    }
    let listCard = "";

    let addList = "list-selector-button"
    if(store.ableEdit() || store.ableDelete()) addList += "disabled";


    if (store) {
        listCard = 
            <List sx={{ width: '90%', left: '5%', height: '10%'}}>
            {
                store.idNamePairs.map((pair) => (
                    <ListCard
                        key={pair._id}
                        idNamePair={pair}
                        selected={false}
                    />
                ))
            }
            </List>;
    }
    return (
        <div id="playlist-selector">
            <div id="list-selector-heading">  
            <Fab 
                color="primary" 
                aria-label="add"
                id="add-list-button"
                onClick={handleCreateNewList}
                disabled={store.ableEdit() || store.ableDelete()}
            >
                <AddIcon />
            </Fab>
                <Typography variant="h2">Your Lists</Typography>    
            </div>
            <div id="list-selector-list">
            <div id="list-selector-list">
                {
                    listCard
                }   
            </div>
            
            </div>
            <MUIDeleteModal />
        </div>)
}

export default HomeScreen;