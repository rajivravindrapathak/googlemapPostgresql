import axios from "axios";
import { Button, Form } from "antd";

import React, { useEffect, useState } from "react";

const MapData = () => {

    const [formData, setFormData] = useState({
        locationname: '',
        address: '',
        lat: '',
        lng:'',
    })

    const handleChange = (e) => {
        setFormData((pre)=>{ 
            return({
            ...pre,
            [e.target.name]: e.target.value 
        })})
    }

    const onFinish = async () => {
        try {
            const response = await axios.post("http://localhost:7000/locations", formData)
            console.log('Response from backend:', response.data);
        } catch (error) {
            console.log('Error:', error.response.data)
        }
    }


    return ( 
        <>
            <Form layout="vertical" onFinish={onFinish}>
                <Form.Item label='locationname:' name='locationname'>
                    <input 
                        type="text"
                        name='locationname'
                        placeholder="Enter Your location Name"
                        value={formData?.locationname} 
                        onChange={handleChange}
                    />  
                </Form.Item>
                <Form.Item label='address:' name='address'>
                    <input 
                        type="text" 
                        name='address'
                        placeholder="Enter Your address"
                        value={formData?.address} 
                        onChange={handleChange}
                    />
                </Form.Item>
                <Form.Item label='lat:' name='lat'>
                    <input 
                        type="text"
                        name='lat'
                        placeholder="Enter Your latitude"
                        value={formData.lat} 
                        onChange={handleChange}
                    />
                </Form.Item>
                <Form.Item label='lng:' name='lng'>
                    <input 
                        type="text"
                        name='lng'
                        placeholder="Enter Your longitude"
                        value={formData.lng} 
                        onChange={handleChange}
                    />
                </Form.Item>
                <div>
                    <Form.Item>
                        <Button htmlType="submit" type="primary">Add your Location</Button>
                    </Form.Item>
                </div>
            </Form>
        </>
     );
}
 
export default MapData;