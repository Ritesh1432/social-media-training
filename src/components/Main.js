import React from 'react'
import '../css/Main.css'

function Main() {
  return (
   <>
   <div className='mainContent'>
    <div className='row'>
      <div className='col-md-3 d-none d-md-block rightSidebar'></div>
      <div className='col-md middleSection'>
      <div className='addPostBox'>
      <div className='row addPostText'>
        Add Post
      </div>
      <div>
        <form>
          <div className='row '>
            <div className='col-sm-12 col-md-6'>
              <input type="text" className="form-control rowInput" placeholder = "Enter Post Title" />
            </div>
            <div className='col-sm-12 col-md-6'>
              <input type="text" className="form-control rowInput" placeholder = "Enter Image Url" />
            </div>
          </div>
          <div className='row '>
            <input type="text" className="form-control contentBox" placeholder='Add Post Content' />
          </div>
        </form>

      </div>
    </div>
    <div>
      Content will be displayed here
    </div>
      </div>
      
      <div className='col-md-3 d-none d-md-block rightSidebar'></div>
    </div>
   </div>
   </>
  )
}

export default Main