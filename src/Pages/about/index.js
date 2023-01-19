import { Link, Outlet } from "react-router-dom";

function About() {
    return<>
          <p>About a page</p>
          <p> Lorem Ipsum </p>
          <ul className="sub-nav">
            <li>
                <Link to='mission'>Mission</Link>
            </li>
            <li>
                <Link to='team'>Team</Link>
            </li>
            <li>
                <Link to='reviews'>Reviews</Link>
            </li>
          </ul>
          <section>
            <Outlet/>
          </section>
    </>
}

export default About;