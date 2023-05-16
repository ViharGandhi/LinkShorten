import { useState } from "react";
import {CopyToClipboard} from 'react-copy-to-clipboard';

function App() {
  const [url,seturl] = useState('')
  const[shorturl,setshorturl] = useState('')
  const handlesubmit = async(e)=>{
    e.preventDefault();
    try {
      const response = await fetch(
        `https://api.shrtco.de/v2/shorten?url=${url}`
      )
      const data = await response.json()
      setshorturl(data.result.full_short_link);
    } catch (e) {
      alert(e);
    }
    
  }
  return (
    <div className="App">
     <form onSubmit={handlesubmit}>
      <input value={url} onChange={e => seturl(e.target.value)}/>
      <button>Short</button>
     </form>
    {shorturl&&
  <div className='shortener__viewShot'>
  {shorturl}
  <CopyToClipboard text={shorturl}>
    <button onClick={() => alert("The URL has been copied")}>copy</button>
  </CopyToClipboard>
</div>
}
    </div>
  );
}

export default App;
