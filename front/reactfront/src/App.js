import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "/node_modules/bootstrap/dist/js/bootstrap.min.js";
import "./App.module.scss";
import Home from "./modules/page/HomePage";
import DocumentsView from "./modules/document/DocumentsView";
import NavBar from "./modules/common/NavBar";
import {
	BrowserRouter as Router,
	Routes,
	Route,
} from "react-router-dom";
import AddDocument from "./modules/document/AddDocument";
import EditDocument from "./modules/document/EditDocument";
import DocumentPofile from "./modules/document/DocumentPofile";

function App() {
	return (
		<main className="container mt-5">
			<Router>
				<NavBar />
				<Routes>
					<Route
						exact
						path="/"
						element={<Home />}></Route>
					<Route
						exact
						path="/view-documents"
						element={<DocumentsView />}></Route>
					<Route
						exact
						path="/add-documents"
						element={<AddDocument />}></Route>
					<Route
						exact
						path="/edit-document/:id"
						element={<EditDocument />}></Route>
					<Route
						exact
						path="/document-profile/:id"
						element={<DocumentPofile />}></Route>
				</Routes>
			</Router>
		</main>
	);
}

export default App;
