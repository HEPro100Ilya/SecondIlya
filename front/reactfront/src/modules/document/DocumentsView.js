import React, {
	useEffect,
	useState,
} from "react";
import axios from "axios";
import {
	FaEdit,
	FaEye,
	FaTrashAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Search from "../common/Search";

const DocumentsView = () => {
	const [documents, setDocuments] = useState([]);
	const [search, setSearch] = useState("");

	useEffect(() => {
		loadDocuments();
	}, []);

	const loadDocuments = async () => {
		const result = await axios.get(
			"http://localhost:9192/documents",
			{
				validateStatus: () => {
					return true;
				},
			}
		);
		if (result.status === 302) {
			setDocuments(result.data);
		}
	};

	const handleDelete = async (id) => {
		await axios.delete(
			`http://localhost:9192/documents/delete/${id}`
		);
		loadDocuments();
	};

	return (
		<section>
			<Search
				search={search}
				setSearch={setSearch}
			/>
			<table className="table table-bordered table-hover shadow">
				<thead>
					<tr className="text-center">
						<th>ID</th>
						<th>First Name</th>
						<th>Last Name</th>
						<th>Email</th>
						<th>Depatment</th>
						<th colSpan="3">Actions</th>
					</tr>
				</thead>

				<tbody className="text-center">
					{documents
						.filter((st) =>
							st.firstName
								.toLowerCase()
								.includes(search)
						)
						.map((document, index) => (
							<tr key={document.id}>
								<th scope="row" key={index}>
									{index + 1}
								</th>
								<td>{document.firstName}</td>
								<td>{document.lastName}</td>
								<td>{document.email}</td>
								<td>{document.department}</td>
								<td className="mx-2">
									<Link
										to={`/document-profile/${document.id}`}
										className="btn btn-info">
										<FaEye />
									</Link>
								</td>
								<td className="mx-2">
									<Link
										to={`/edit-document/${document.id}`}
										className="btn btn-warning">
										<FaEdit />
									</Link>
								</td>
								<td className="mx-2">
									<button
										className="btn btn-danger"
										onClick={() =>
											handleDelete(document.id)
										}>
										<FaTrashAlt />
									</button>
								</td>
							</tr>
						))}
				</tbody>
			</table>
		</section>
	);
};

export default DocumentsView;
