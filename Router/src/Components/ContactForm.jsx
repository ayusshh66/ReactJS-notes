import React from 'react'

function ConactForm() {
  return (
    <div>
        <form >
            <input type="text" placeholder='name' />
            <br />
            <input type="email" placeholder='email id' />
            <br />
            <textarea placeholder='message'></textarea>
            <br />
            <button type='submit'> submit</button>
        </form>
    </div>
  )
}

export default ConactForm