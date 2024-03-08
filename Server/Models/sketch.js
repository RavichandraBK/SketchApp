const mong = require('mongoose');

const Sketch = mong.model('Sketches',{
    rect:{type:Array,required:true},
    circles:{type:Array,required:true},
    arrows:{type:Array,required:true},
    scribbles:{type:Array,required:true},
})

module.exports = Sketch;