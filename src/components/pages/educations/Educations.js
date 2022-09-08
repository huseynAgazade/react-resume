import React from 'react';
import introCS from '../../../images/introCS.pdf';
import CSessentials from '../../../images/CSessentials.pdf';
import NDGLinux from '../../../images/NDGLinux.pdf';

export default function Educations() {
	return (
		<div>
			<div class='card'>
				<div class='card-content'>
					<h6>
						<strong>EDUCATION</strong>
					</h6>
					<table class='striped'>
						<thead>
							<tr>
								<th>Certificate</th>
								<th>Date</th>
								<th></th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>Introduction to CyberSecurity</td>
								<td>Dec 2021</td>
								<td>
									<a href={introCS}>
										View
									</a>
								</td>
							</tr>
							<tr>
								<td>NDG Linux Essentials</td>
								<td>Dec 2021</td>
								<td>
									<a href={NDGLinux}>
										View
									</a>
								</td>
							</tr>
							<tr>
								<td>CyberSecurity Essentials</td>
								<td>Dec 2021</td>
								<td>
									<a href={CSessentials}>
										View
									</a>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}
