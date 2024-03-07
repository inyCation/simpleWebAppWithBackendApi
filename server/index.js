import express from "express";
import cors from "cors"
const app = express();

app.use(cors())

app.listen(3333,()=>{
    console.log(`server is on http://localhost:3333 `);
})


app.get("/nav",(req,res)=>{
    res.send([
        {
            menu:"Home",
            link: "/",
            subMenu : {
                subList:["test1","test2","test3","test4"]
            }
        },
        {
            menu:"About",
            link: "/about",
            subMenu : {
                subList:["test1","test2","test3","test4"]
            }
        },
        {
            menu:"Blog",
            link: "/blog",
            subMenu : {
                subList:["test1","test2","test3","test4"]
            }
        },
        {
            menu:"Contact",
            link: "/contact",
            subMenu : {
                subList:["test1","test2","test3","test4"]
            }
        },
    ])
})

app.get("/blogs", (req, res) =>{
    res.send([
        {
            "title": "Embracing the Future: Top Technology Trends of 2024",
            "sections": [
                {
                    "sectionTitle": "Introduction",
                    "content": "In the ever-evolving landscape of technology, staying abreast of the latest trends is crucial. In this blog post, we explore the most impactful technology trends shaping the year 2024."
                },
                {
                    "sectionTitle": "Artificial Intelligence (AI) Advancements",
                    "content": "Highlight recent breakthroughs in AI, machine learning, and how they are transforming industries. Discuss applications such as natural language processing, computer vision, and AI in healthcare."
                },
                {
                    "sectionTitle": "Rise of Decentralized Finance (DeFi)",
                    "content": "Examine the surge of decentralized finance, exploring blockchain technologies and their impact on traditional financial systems. Discuss notable projects, trends, and potential future developments in the DeFi space."
                },
                {
                    "sectionTitle": "Sustainable Tech Solutions",
                    "content": "Explore innovations in green technology, from renewable energy sources to eco-friendly products. Discuss the role of technology in addressing environmental challenges and promoting sustainability."
                },
                {
                    "sectionTitle": "The Metaverse Revolution",
                    "content": "Dive into the concept of the metaverse, exploring its current state, key players, and potential societal impacts. Discuss advancements in virtual and augmented reality, shaping the way we interact with digital spaces."
                },
                {
                    "sectionTitle": "Conclusion",
                    "content": "As we navigate through 2024, these technology trends are set to redefine the way we live, work, and connect. Embracing these innovations opens up new possibilities and ensures we are at the forefront of the digital era."
                }
            ]
        },
        {
            "title": "Unlocking the Code: A Beginner's Guide to Programming Languages",
            "sections": [
                {
                    "sectionTitle": "Introduction",
                    "content": "Embarking on a journey into the world of programming can be both exciting and overwhelming. This blog aims to guide beginners through the fundamentals of key programming languages and their applications."
                },
                {
                    "sectionTitle": "Understanding the Basics",
                    "content": "Introduce the foundational concepts of programming, including variables, data types, and control structures. Explain the importance of algorithmic thinking and problem-solving."
                },
                {
                    "sectionTitle": "The Versatility of Python",
                    "content": "Explore Python as a beginner-friendly language with applications in web development, data science, and automation. Provide examples of simple Python programs for hands-on learning."
                },
                {
                    "sectionTitle": "Java for Object-Oriented Programming (OOP)",
                    "content": "Discuss the principles of OOP using Java as an example. Cover concepts like classes, objects, and inheritance, showcasing how Java facilitates building robust and scalable applications."
                },
                {
                    "sectionTitle": "Web Development with JavaScript",
                    "content": "Highlight the significance of JavaScript in web development. Cover basic scripting, DOM manipulation, and interaction with HTML and CSS, providing a glimpse into the dynamic world of front-end development."
                },
                {
                    "sectionTitle": "Conclusion",
                    "content": "By mastering these fundamental programming languages, beginners can establish a solid foundation for further exploration and specialization in the vast realm of software development. Happy coding!"
                }
            ]
        }
    ]
    )
})