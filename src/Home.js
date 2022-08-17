import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home =()=> {
    const [blogs, setBlogs] = useState([
        {title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1},
        {title: 'Welcome party', body: 'lorem ipsum...', author: 'yoshi', id: 2},
        {title: 'web dev top tools', body: 'lorem ipsum...', author: 'mario', id: 3}
    ])

    const [name, setName] = useState("Marioo")

    const handleDelete = (id) =>{
      const newBlogs = blogs.filter((blog) => blog.id !== id)
      setBlogs(newBlogs)
    }
    useEffect(() => {
      console.log("Use effect ran");
      console.log(blogs)
      console.log(name)
    }, [name])

  return (
    <div className="home">
        {/* <BlogList blogs={blogs} titler="All blogs!"/>
        <BlogList blogs={blogs.filter((blog) => blog.author === "mario")} titler="All blogs!"/> */}
        <BlogList blogs={blogs} handleDelete = {handleDelete}/>
        <p>{ name }</p>
      <button onclick={() => setName('luigi')}>change name</button>
    </div>
  );
}

export default Home;
