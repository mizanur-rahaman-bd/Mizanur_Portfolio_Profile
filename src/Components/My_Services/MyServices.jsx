import React, { useState } from 'react'
import './MyServices.css'

const MyServices = () => {
    const [show , setShow] = useState(false)
    const [show2 , setShow2] = useState(false)
    const [show3 , setShow3] = useState(false)
    const [show4 , setShow4] = useState(false)
    const [show5 , setShow5] = useState(false)
    const [show6 , setShow6] = useState(false)
    const [show7 , setShow7] = useState(false)
    const [show8 , setShow8] = useState(false)
    const [show9 , setShow9] = useState(false)
  return (
    <>
    <section className='myservices'>
        <div className="container">
            <h2>My Services</h2>
            <div className="myservices_row">
                <div className="my_services_single_card">
                    <img src="images/react.png" alt="react" />
                    <h3>React.JS Development
                        <span onClick={()=> setShow(!show) }>See more</span>
                    </h3>
                    {
                        show&&
                        <p>I specialize in delivering top-notch React.js development services tailored to a unique business needs. I’m experienced to develop a dynamic, high-performance web applications using React.js.</p> 


                    }
                    
                </div>

                {/* single Card 2 */}
                <div className="my_services_single_card">
                    <img src="images/html.jpg" alt="html" />
                    <h3>HTML, CSS, Javascript Development
                    <span onClick={()=> setShow2(!show2) }>See more</span>
                    </h3>
                    {
                        show2&&
                        <p>I am a passionate web developer skilled in crafting dynamic and responsive websites. With a strong foundation in HTML, CSS, and JavaScript, I excel at creating visually appealing and functional web experiences.</p>

                    }
                    
                </div>
                {/* Single Card 3 */}
                <div className="my_services_single_card">
                    <img src="images/web_design.jpg" alt="web_design" />
                    <h3>Web Design
                    <span onClick={()=> setShow3(!show3) }>See more</span>
                    </h3>
                    {
                        show3&&
                        <p>As a web developer, my role involves designing, coding, and maintaining websites to ensure they are functional, user-friendly, and visually appealing. I work with various technologies such as HTML, CSS, JavaScript, and renowed frameworks to create seamless and efficient web experiences.</p>

                    }
                    
                </div>
                {/* Single Card 4 */}
                <div className="my_services_single_card">
                    <img src="images/res_img.png" alt="web_design" />
                    <h3>Responsive WebPage Design
                    <span onClick={()=> setShow4(!show4) }>See more</span>
                    </h3>
                    {
                        show4&&
                        <p>Responsive webpage design ensures that websites deliver an optimal viewing experience across a wide range of devices, from desktops to smartphones. It adapts layouts, images, and content dynamically based on screen size, I'll provide a fully responsive webpage design to ensuring usability and accessibility.</p>
                    }
                    
                </div>
                {/* Single Card 5 */}
                <div className="my_services_single_card">
                    <img src="images/b_t.png" alt="web_design" />
                    <h3>Bootstrap and Tailwind CSS
                    <span onClick={()=> setShow5(!show5) }>See more</span>
                    </h3>
                    {
                        show5&&
                        <p>I'm working with very popular framework like Bootstrap and Tailwind CSS to develop a mordern and fully responsive website</p>
                    }
                    
                </div>
                {/* Single Card 6 */}

                <div className="my_services_single_card">
                    <img src="images/custom_front_end_dev_.jpg" alt="single_web_page" />
                    <h3>Custom front end development
                    <span onClick={()=> setShow6(!show6) }>See more</span>
                    </h3>
                    {
                        show6&&
                        <p>Customizing the front end is often an iterative process, involving ongoing adjustments based on feedback and testing. If you have a specific customization in mind or need help with a particular tool or technology, feel free to ask!</p>
                    }
                    
                </div>

                {/* Single Card 7 */}

                <div className="my_services_single_card">
                    <img src="images/single_page_dev.jpg" alt="single_web_page" />
                    <h3>Single Web Page Development
                    <span onClick={()=> setShow7(!show7) }>See more</span>
                    </h3>
                    {
                        show7&&
                        <p>Single Page Web Development (SPA) involves building websites that load a single HTML page and dynamically update content as users interact with the app. SPAs offer faster navigation, smoother transitions, and improved performance by avoiding full page reloads. I'm working with the popular frameworks like React to make a Single Page Website.</p>
                    }
                    
                </div>
                {/* Single Card 8 */}

                <div className="my_services_single_card">
                    <img src="images/firebase.png" alt="single_web_page" />
                    <h3>FireBase Back End Service
                    <span onClick={()=> setShow8(!show8) }>See more</span>
                    </h3>
                    {
                        show8&&
                        <p>Firebase is a platform by Google that provides backend services like real-time databases, authentication, hosting, and cloud functions. I can provide such types of back end feature like real-time databases, authentication by using Firebase Back End System.</p>
                    }
                    
                </div>

                {/* Single Card 9 */}

                <div className="my_services_single_card">
                    <img src="images/support.png" alt="react" />
                    <h3>Maintanence Support
                    <span onClick={()=> setShow9(!show9) }>See more</span>
                    </h3>
                    {
                        show9&&
                        <p>Website maintenance support is more than just fixing broken links or updating content. It encompasses monitoring performance, ensuring security, and adapting to technological advancements. Regular maintenance helps prevent issues before they become problems, keeping your website running smoothly and securely.</p>
                    }
                    
                </div>
                

            </div>
        </div>

    </section>
    
    </>
  )
}

export default MyServices