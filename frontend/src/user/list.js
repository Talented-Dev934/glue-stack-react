import React, { Component } from "react";
import { Link } from "react-router-dom";
import Table, {
	TableBody,
	TableCell,
	TableHead,
	TableRow,
} from "material-ui/Table";
import { LinearProgress } from "material-ui/Progress";

class list extends Component {
	render() {
		const { findAll, listURL } = this.props;
		return (
			<div>
				<Table>
					<TableHead>
						<TableRow>
							<TableCell>ID</TableCell>
							<TableCell>Name</TableCell>
							<TableCell>Email</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{findAll.pending &&
							<TableRow>
								<TableCell colSpan="3">
									<LinearProgress />
								</TableCell>
							</TableRow>}
						{findAll.rejected &&
							<TableRow>
								<TableCell colSpan="3">
									<p>
										{findAll.reason}
									</p>
								</TableCell>
							</TableRow>}
						{findAll.value &&
							findAll.value.data.content.map(row =>
								<TableRow key={row.id}>
									<TableCell>
										{row.id}
									</TableCell>
									<TableCell>
										<Link to={`${listURL}/${row.id}`}>
											{row.firstName} {row.lastName}
										</Link>
									</TableCell>
									<TableCell>
										{row.email}
									</TableCell>
								</TableRow>
							)}
					</TableBody>
				</Table>
			</div>
		);
	}
}
export default list;
