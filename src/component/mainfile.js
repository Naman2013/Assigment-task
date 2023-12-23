import React, { useState } from "react";
import MultipleSelect from "./multiselect";

const RenderComponent = (data) => {
    const [itemName, setItemName] = useState([]);

    const handleChange = (event) => {
      const {
        target: { value },
      } = event;
      setItemName(
        typeof value === 'string' ? value.split(',') : value,
      );
    };

    switch (data?.data?.TypeId) {
        case '1':
            return <label for="html">{data?.data?.FieldLabel}</label>;
        case '2':
            return <select className='select'>
                {data?.data?.Childs.$values?.map(items => (
                    <option key={items?.$id}>{items?.FieldCaption}</option>
                ))}
            </select>;
        case '3':
            return <MultipleSelect handleChange={handleChange} value={itemName} data={data?.data?.Childs.$values} lebal={data?.data?.FieldLabel}/>;

        case '4':
            return <input type="number" name={"number"} placeholder={"Enter number"} />;

        case '5':
            return <input type="date" name={"date"} />;

        case '6':
            return <input type="time" name={"time"} />;

        case '7':
            return <select className='select'>
                <option>{"Yes"}</option>
                <option>{"No"}</option>
            </select>;

        case '8':
            return  <MultipleSelect handleChange={handleChange} value={itemName} data={data?.data?.Childs.$values} lebal={data?.data?.FieldLabel}/>;

        case '9':
            return <input type="Text" name={"text"} placeholder={"Enter Someting"} />;

        default:
            return 'Element Not Found';
    }
}
export default RenderComponent