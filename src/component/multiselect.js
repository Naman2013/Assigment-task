import React, { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function MultipleSelect({ data, label, handleChange, value }) {
    const [hoveredItem, setHoveredItem] = useState(null);

    const handleMouseOver = (item) => {
        setHoveredItem(item);
    };

    const handleMouseOut = () => {
        setHoveredItem(null);
    };
    return (
        <FormControl sx={{ width: 190 }}>
            <InputLabel id="demo-multiple-name-label">{"Select"}</InputLabel>
            <Select
                labelId="demo-multiple-name-label"
                id="demo-multiple-name"
                multiple
                value={value}
                onChange={handleChange}
            >
                {data.map((parentItem) => (
                    <MenuItem
                        key={parentItem?.$id}
                        value={parentItem?.FieldCaption}
                        onMouseOver={() => handleMouseOver(parentItem)}
                        onMouseOut={handleMouseOut}
                    >
                        {parentItem?.FieldCaption}
                        {parentItem?.HasChild && hoveredItem === parentItem && (
                            <div>
                                {parentItem?.Childs?.$values.map((child, index) => (
                                    <MenuItem key={index} value={child?.FieldCaption}>
                                        {child?.FieldCaption}
                                    </MenuItem>
                                ))}
                            </div>
                        )}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
}
