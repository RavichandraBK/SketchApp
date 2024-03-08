import axios from 'axios';

const sketchUrl = process.env.REACT_APP_BACKEND_URL;
console.log(sketchUrl)
const sendSketch = `${sketchUrl}/api/sketch/add-sketch`

const Sketch = async(items)=>{
    try{
        const shapes = {...items}
        const response = await axios.post(sendSketch,shapes)
        return response;
    }catch(err){
        console.log(err,'Something went wrong while getting the response')
    }
}

export default Sketch;