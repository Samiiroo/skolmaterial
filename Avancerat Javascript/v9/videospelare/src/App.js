import React, { useRef, useState } from 'react';

function App() {
  const [progress, updateProgress] = useState(0);
  const myRef = useRef(null);

  function play() {
    myRef.current.play()
  }
  function pause() {
    myRef.current.pause()
  }
  function rewind() {
    myRef.current.currentTime = 0;
  }

  function onProgress(e) {
    let perProg = (e.target.currentTime / e.target.duration);

    updateProgress(perProg);
  }

  return (
    <div className="App">
      <video onTimeUpdate={onProgress} ref={myRef} src="http://download.blender.org/peach/trailer/trailer_400p.ogg"
        width="720">
      </video><br />
      <button onClick={play}>play</button>
      <button onClick={pause}>pause</button>
      <button onClick={rewind}>rewind</button>
      <progress style={{ width: '100%' }} value={progress} max={1} />
    </div>
  );
}

export default App;
