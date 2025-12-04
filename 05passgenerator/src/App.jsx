import { useState, useCallback, useEffect, useRef } from 'react'

function App() {

  const [length, setLength] = useState(8);
  const [noallowed, setNoallowed] = useState(false);
  const [charallowed, setCharallowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (charallowed) str += "!@#$%^&*()_+~`|}{[]:;?><,./-=";
    if (noallowed) str += "0123456789";

    for (let i = 0; i < length; i++) {
      let index = Math.floor(Math.random() * str.length);
      pass += str.charAt(index);
    }

    setPassword(pass);
  }, [length, noallowed, charallowed]);

  const copytoClipboard = () => {
    if (passwordRef.current) {
      passwordRef.current.select();
      document.execCommand('copy');
      // alert("Password Copied to Clipboard!");
    }
  };

  useEffect(() => {
    generatePassword();
  }, [length, noallowed, charallowed, generatePassword]);

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>
        <h1 className='text-2xl font-bold text-center py-4'>Password Generator</h1>

        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="w-full py-1 px-3 outline-none"
            placeholder="password"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copytoClipboard}
            className='outline-none bg-blue-500 px-3 text-white font-bold'>
            Copy
          </button>
        </div>

        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input
              type="range"
              min={6}
              max={30}
              value={length}
              className='cursor-pointer'
              onChange={(e) => setLength(e.target.value)}
            />
            <label>Length: {length}</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              checked={noallowed}
              onChange={(e) => setNoallowed(e.target.checked)}
            />
            <label>Include Numbers</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              checked={charallowed}
              onChange={(e) => setCharallowed(e.target.checked)}
            />
            <label>Include Symbols</label>
          </div>
        </div>

        <div className='flex justify-center my-4'>
          <button
            onClick={generatePassword}
            className='outline-none bg-green-500 px-3 py-1 text-white font-bold rounded-lg hover:bg-green-600 duration-200'
          >
            Generate Password
          </button>
        </div>
      </div>
    </>
  )
}

export default App
