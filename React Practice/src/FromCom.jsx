import React,{useState} from 'react'

const FromCom = () => {
    const [username, setUsername] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        console.log(username);
        setUsername('')
    }

    return (
        <div>
            <form className='flex flex-col mt-2' onSubmit={(e) => {submitHandler(e)}}>
                <input
                    value={username}
                    onChange={(e) => {setUsername(e.target.value)}} 
                    id='input' type="text" 
                    className='bg-white rounded-sm' 
                />
                <button className='p-2 mt-2 bg-blue-600 rounded-md'>Submit</button>
            </form>
        </div>
    )
}

export default FromCom
