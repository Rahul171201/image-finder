import TextField from "material-ui/TextField";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useState } from "react";

const Search = () => {

    const [state, setState] = useState({
        searchText: '',
        amount: 10,
        url: 'https://pixabay.com/api/',
        apikey: '32486973-baa65e06d218db16b75672cc9',
        images: []
    });

    const onTextChange = (e) => {
        setState({
            searchText: e.target.value,
            amount: state.amount,
            url: state.url,
            apikey: state.apikey,
            images: state.images
        });
    }

    const onAmountChange = (e) => {
        setState({
            searchText: state.searchText,
            amount: e.target.value,
            url: state.url,
            apikey: state.apikey,
            images: state.images
        });
    }

    return (<div>
        <TextField name="searchText"
            value={state.searchText}
            floatingLabelText="Search For Images"
            fullWidth={true}
            onChange={onTextChange}>
        </TextField>
        <br></br>
        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select
                labelId="Amount"
                value={state.amount}
                label="Amount"
                onChange={onAmountChange}
            >
                <MenuItem value={10}>10</MenuItem>
                <MenuItem value={20}>20</MenuItem>
                <MenuItem value={30}>30</MenuItem>
            </Select>
        </FormControl>
        {/* <SelectField
            name="amount"
            floatingLabelText="Amount"
            value={state.amount}
            onChange={onAmountChange}
        >
            <MenuItem value={10} primaryText="10"></MenuItem>
            <MenuItem value={20} primaryText="20"></MenuItem>
            <MenuItem value={30} primaryText="30"></MenuItem>
        </SelectField> */}
        <br></br>
    </div>);
}

export default Search;