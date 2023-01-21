import { Outlet } from "react-router-dom";
import { Suspense } from "react";

import Nav from "./Nav";

function WebappTemplate() {
    return (<>
    <header>
        <Nav/>
    </header>
    <main>
        {/*render main */}
        <Suspense fallback={<div>Loading</div>}>
        <Outlet/>
        </Suspense>

    </main>
    <footer>
        <hr/>
        <p>Footer</p>
    </footer>
    </>  );
}

export default WebappTemplate;