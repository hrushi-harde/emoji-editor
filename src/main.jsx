import { createRoot } from 'react-dom/client'
import './style.css'
import { useState } from 'react'
import Emojii from './emoji'
import Color from './Color'
import RotateImg from './rotate.png'

function Home() {
  const [emoji, setEmoji] = useState('🌸');
  const [color, setColor] = useState('white');
  const [rotate, setRotate] = useState(0);
  const [imgheight, setimgheight] = useState(50);

  return (
<<<<<<< HEAD
    <div className="container">
      <h1 className="head">
        Welcome To Emoji Picker using <span className="colored">useState</span>
      </h1>
      
      {/* Emoji Display */}
      <div className='emoji-picker' style={{background:`${color}`}}>
        <div className="emoji-container1">
          <span
            style={{
              transform: `rotateZ(${rotate}deg)`,
              fontSize: `${imgheight}px`,
            }}
          >
            {emoji}
          </span>
        </div>
      </div>

      {/* Emoji Buttons */}
=======
    <>
      <h1 className="head">
        Welcome To Emoji Picker using <span className="colored">useState</span>
      </h1>
<div className='emoji-picker' style={{background:`${color}`}}>
     <div className="emoji-container1" style={{ height: "100px", width: "100px", display: "flex", alignItems: "center", justifyContent: "center" }}>
  <span
    style={{
      transform: `rotateZ(${rotate}deg)`,
      fontSize: `${imgheight}px`,
      display: 'inline-block',
    }}
  >
    {emoji}
  </span>
</div>
</div>

>>>>>>> ebb69e746cef5b0e8168233c20ea3b21ba5c225e
      <div className='box'>
        <Emojii emojis={'🌸'} setEmoji1={setEmoji} />
        <Emojii emojis={'🚀'} setEmoji1={setEmoji} />
        <Emojii emojis={'💮'} setEmoji1={setEmoji} />
        <Emojii emojis={'🎇'} setEmoji1={setEmoji} />
        <Emojii emojis={'🌟'} setEmoji1={setEmoji} />
        <Emojii emojis={'❤️'} setEmoji1={setEmoji} />
      </div>

<<<<<<< HEAD
      {/* Color Selection */}
=======
>>>>>>> ebb69e746cef5b0e8168233c20ea3b21ba5c225e
      <div className='color-container'>
        <Color colorSelected={'pink'} setColor={setColor} />
        <Color colorSelected={'red'} setColor={setColor} />
        <Color colorSelected={'green'} setColor={setColor} />
        <Color colorSelected={'orange'} setColor={setColor} />
        <Color colorSelected={'blue'} setColor={setColor} />
        <Color colorSelected={'black'} setColor={setColor} />
        <Color colorSelected={'purple'} setColor={setColor} />
        <Color colorSelected={'yellow'} setColor={setColor} />
        <Color colorSelected={'brown'} setColor={setColor} />
      </div>
<<<<<<< HEAD

      {/* Slider */}
      <div className='slider-container'>
        <input
          type='range'
          className='slider'
          min={10}
          max={100}
          value={imgheight}
          onChange={(e) => setimgheight(e.target.value)}
        />
      </div>

      {/* Rotate Image */}
      <div className='image-container'>
        <img
          src={RotateImg}
          className='img-1'
          style={{ transform: `rotateZ(${rotate}deg)` }}
          alt="Rotating"
          onClick={() => setRotate(prev => prev + 45)}
        />
      </div>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<Home />);
=======
  <input type='range' className='slider' min={10} max={100} onChange={(e)=>{setimgheight(e.target.value)}}></input>
      <img
        src={RotateImg}
        className='img-1'
        style={{ transform: `rotateZ(${rotate}deg)`, cursor: 'pointer' }}
        alt="Rotating"
        onClick={() => setRotate(prev => prev + 45)} 
      />
    
    </>
  );
}

createRoot(document.getElementById('root')).render(<Home />);
>>>>>>> ebb69e746cef5b0e8168233c20ea3b21ba5c225e
