import React from 'react'
import './MyServices.css'

const MyServices = () => {
  return (
    <>
    <section className='myservices'>
        <div className="container">
            <h2>My Services</h2>
            <div className="myservices_row">
                <div className="my_services_single_card">
                    <img src="images/react.png" alt="react" />
                    <h3>React.JS Development</h3>
                    <p>I specialize in delivering top-notch React.js development services tailored to a unique business needs. I’m experienced to develop a dynamic, high-performance web applications using React.js.</p>
                </div>

                {/* single Card 2 */}
                <div className="my_services_single_card">
                    <img src="images/html.jpg" alt="html" />
                    <h3>HTML, CSS, Javascript Development</h3>
                    <p>I am a passionate web developer skilled in crafting dynamic and responsive websites. With a strong foundation in HTML, CSS, and JavaScript, I excel at creating visually appealing and functional web experiences.</p>
                </div>
                {/* Single Card 3 */}
                <div className="my_services_single_card">
                    <img src="images/web_design.jpg" alt="web_design" />
                    <h3>Web Design</h3>
                    <p>As a web developer, my role involves designing, coding, and maintaining websites to ensure they are functional, user-friendly, and visually appealing. I work with various technologies such as HTML, CSS, JavaScript, and renowed frameworks to create seamless and efficient web experiences.</p>
                </div>
                {/* Single Card 4 */}
                <div className="my_services_single_card">
                    <img src="images/res_img.png" alt="web_design" />
                    <h3>Responsive WebPage Design</h3>
                    <p>As a web developer, my role involves designing, coding, and maintaining websites to ensure they are functional, user-friendly, and visually appealing. I work with various technologies such as HTML, CSS, JavaScript, and renowed frameworks to create seamless and efficient web experiences.</p>
                </div>
                {/* Single Card 5 */}
                <div className="my_services_single_card">
                    <img src="images/b_t.png" alt="web_design" />
                    <h3>Bootstrap and Tailwind CSS</h3>
                    <p>As a web developer, my role involves designing, coding, and maintaining websites to ensure they are functional, user-friendly, and visually appealing. I work with various technologies such as HTML, CSS, JavaScript, and renowed frameworks to create seamless and efficient web experiences.</p>
                </div>
                {/* Single Card 6 */}

                <div className="my_services_single_card">
                    <img src="images/custom_front_end_dev_.jpg" alt="single_web_page" />
                    <h3>Custom front end development</h3>
                    <p>Customizing the front end is often an iterative process, involving ongoing adjustments based on feedback and testing. If you have a specific customization in mind or need help with a particular tool or technology, feel free to ask!</p>
                </div>

                {/* Single Card 7 */}

                <div className="my_services_single_card">
                    <img src="images/single_page_dev.jpg" alt="single_web_page" />
                    <h3>Single Web Page Development</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat maxime debitis accusamus sunt pariatur recusandae hic est autem, voluptate explicabo omnis, corrupti maiores blanditiis. Ullam praesentium, repellat eaque et sit nulla molestias ea odio aut explicabo ratione iusto quasi veritatis accusantium doloremque vitae voluptatem rerum, porro autem sequi aspernatur? Qui.</p>
                </div>
                {/* Single Card 8 */}

                <div className="my_services_single_card">
                    <img src="images/firebase.png" alt="single_web_page" />
                    <h3>FireBase Back End Service</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat maxime debitis accusamus sunt pariatur recusandae hic est autem, voluptate explicabo omnis, corrupti maiores blanditiis. Ullam praesentium, repellat eaque et sit nulla molestias ea odio aut explicabo ratione iusto quasi veritatis accusantium doloremque vitae voluptatem rerum, porro autem sequi aspernatur? Qui.</p>
                </div>

                {/* Single Card 9 */}

                <div className="my_services_single_card">
                    <img src="images/support.png" alt="react" />
                    <h3>Maintanence Support</h3>
                    <p>Website maintenance support is more than just fixing broken links or updating content. It encompasses monitoring performance, ensuring security, and adapting to technological advancements. Regular maintenance helps prevent issues before they become problems, keeping your website running smoothly and securely.</p>
                </div>
                

            </div>
        </div>

    </section>
    
    </>
  )
}

export default MyServices