import { Outlet } from "react-router-dom";
import Nav from "./Nav";

function WebappTemplate() {
    return (<>
    <header>
        <Nav/>
    </header>
    <main>
        {/*render main */}
        <Outlet/>
    </main>
    <footer>
        <hr/>
        <p>Footer</p>
    </footer>
    </>  );
}

export default WebappTemplate;