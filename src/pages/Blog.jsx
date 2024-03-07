import React,{useState,useEffect} from 'react'
import {Header,Footer} from "../components"
import axios from 'axios'
const Blog = () => {

  const [blogs, setBlogs] = useState([])

  useEffect(() =>{
    const data = async () =>{
      try{
        const res = await axios.get("http://localhost:3333/blogs")
        setBlogs(res.data)
      }catch(e){
        console.log(e);
      }
    }
    data();
  },[])



  return (
    <>
      <Header />
        <h2>Welcome To Our Blogs</h2>
        <div className="blog">
          {
            blogs.map((e,i) =>(
              <div key={i}>
                {e.title} 

                {
                  e.sections.map((section,i) =>(
                    <li className={`sectionTitle ${section.sectionTitle} `} key={i} >
                      {section.sectionTitle}
                    </li>
                  ))
                }
              </div>
            ))
          }
        </div>

      <Footer />
    </>
  )
}

export default Blog