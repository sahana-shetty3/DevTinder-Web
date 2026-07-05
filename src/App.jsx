import { BrowserRouter,Routes,Route } from "react-router-dom";
import NavBar from "./NavBar";

function App(){
    return(
    <>
    <BrowserRouter basename="/">
    <Routes>
        <Route path="/"element={<div>Base page</div>}/>
        <Route path="/login" element={<div>Login page</div>}/>
        <Route path="/test" element={<div>Test page</div>}/>

    </Routes>
    
    
    </BrowserRouter>

    <NavBar/>
 




    </>

    );
    
}
export default App;

   