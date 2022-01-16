import React from 'react'
import "../component_styles/Home.css";
const Home = () => {
    return (
        <>
          <div className="banner">
          <div className="left-side">

<h3 className='author text text-success'>Goutham</h3>
        <p className="text text-center text-white">As a</p>
<p className="designation text text-center text-white">Student</p>

</div> 

    <div className="right-side">

<h3 className='author text text-center text-success'>Goutham</h3>
<p className="text text-center text-white">As a </p>
<p className="text text-center text-white">Full STACK Web Developer</p>

</div> 
          </div>



          {/* Skills set */}

            <div className="skill_set">
                <div className="front_end">
                    <p className="text text-center front_end_tech">
                        FRONT END TECH
                    </p>
                    <ul class="list_of_tech">
                        <li>HTML 5</li>
                        <li>CSS 3</li>
                        <li>JAVA SCRIPT</li>
                        <li>REACT.JS</li>
                        <li>BOOTSTRAP 4</li>
                    </ul>
                </div>


                <div className="back_end">
                    <p className="text text-center front_end_tech">
                        BACK END TECH
                    </p>
                    <ul class="list_of_tech">
                        <li>PHP</li>
                        <li>NODE JS</li>
                        <li>EXPRESS</li>
                        
                    </ul>
                </div>

                <div className="database">
                    <p className="text text-center front_end_tech">
                        DATABASES
                    </p>
                    <ul class="list_of_tech">
                        <li>MongoDb</li>
                        <li>MySql</li>
                                                
                    </ul>
                </div>

            </div>
        {/* skills set end */}


        {/* projects starts */}


        {/* projects end */}

        </>
    )
}

export default Home
