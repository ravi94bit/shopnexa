import React from 'react';
import HomeLayout from '../components/HomeLayout';

const Dashboard = () => {
  return (
    <>
    <HomeLayout>
           
    <div class="container-fluid">
          <h4 class="page-title">Dashboard</h4>
          <hr className="my-4 border-gray-300" />
           <div class="row">
							<div class="col-md-3">
								<div class="card card-stats card-warning">
									<div class="card-body ">
										<div class="row">
											<div class="col-5">
												<div class="icon-big text-center">
													<i class="la la-users"></i>
												</div>
											</div>
											<div class="col-7 d-flex align-items-center">
												<div class="numbers">
													<p class="card-category">Visitors</p>
													<h4 class="card-title">1,294</h4>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="col-md-3">
								<div class="card card-stats card-success">
									<div class="card-body ">
										<div class="row">
											<div class="col-5">
												<div class="icon-big text-center">
													<i class="la la-bar-chart"></i>
												</div>
											</div>
											<div class="col-7 d-flex align-items-center">
												<div class="numbers">
													<p class="card-category">Sales</p>
													<h4 class="card-title">$ 1,345</h4>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="col-md-3">
								<div class="card card-stats card-danger">
									<div class="card-body">
										<div class="row">
											<div class="col-5">
												<div class="icon-big text-center">
													<i class="la la-newspaper-o"></i>
												</div>
											</div>
											<div class="col-7 d-flex align-items-center">
												<div class="numbers">
													<p class="card-category">Subscribers</p>
													<h4 class="card-title">1303</h4>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="col-md-3">
								<div class="card card-stats card-primary">
									<div class="card-body ">
										<div class="row">
											<div class="col-5">
												<div class="icon-big text-center">
													<i class="la la-check-circle"></i>
												</div>
											</div>
											<div class="col-7 d-flex align-items-center">
												<div class="numbers">
													<p class="card-category">Order</p>
													<h4 class="card-title">576</h4>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							
						</div>
        
           <div className="row row-card-no-pd">
            <div className="col-md-4">
              <div className="card">
                <div className="card-body text-center">
                  <p className="fw-bold mt-1">Total Hours</p>
                  <h2 className="mb-1" >
                    <b id="timer" >00:00:00</b>
                  </h2>

                  <button
                    className="btn btn-success mt-3 mb-1"
                    style={{ width: "150px", height: "50px" }}
                    id="punchBtn"
                  >
                    <i className="la la-clock-o"></i> Punch In
                  </button>
                </div>
                
              </div>
            </div>

             <div className="col-md-5">
               <div className="card">
                 <div className="card-body">
                   <div className="progress-card">
                     <div className="d-flex justify-content-between mb-1">
                       <span className="text-muted">Profit</span>
                       <span className="text-muted fw-bold">$3K</span>
                     </div>
                     <div className="progress mb-2" style={{ height: '7px' }}>
                       <div
                         className="progress-bar bg-success"
                         role="progressbar"
                         style={{ width: '78%' }}
                         aria-valuenow="78"
                         aria-valuemin="0"
                         aria-valuemax="100"
                         data-toggle="tooltip"
                         data-placement="top"
                         title="78%"
                       ></div>
                     </div>
                   </div>
                   <div className="progress-card">
                     <div className="d-flex justify-content-between mb-1">
                       <span className="text-muted">Orders</span>
                       <span className="text-muted fw-bold">576</span>
                     </div>
                     <div className="progress mb-2" style={{ height: '7px' }}>
                       <div
                         className="progress-bar bg-info"
                         role="progressbar"
                         style={{ width: '65%' }}
                         aria-valuenow="65"
                         aria-valuemin="0"
                         aria-valuemax="100"
                         data-toggle="tooltip"
                         data-placement="top"
                         title="65%"
                       ></div>
                     </div>
                   </div>
                   <div className="progress-card">
                     <div className="d-flex justify-content-between mb-1">
                       <span className="text-muted">Tasks Complete</span>
                       <span className="text-muted fw-bold">70%</span>
                     </div>
                     <div className="progress mb-2" style={{ height: '7px' }}>
                       <div
                         className="progress-bar bg-primary"
                         role="progressbar"
                         style={{ width: '70%' }}
                         aria-valuenow="70"
                         aria-valuemin="0"
                         aria-valuemax="100"
                         data-toggle="tooltip"
                         data-placement="top"
                         title="70%"
                       ></div>
                     </div>
                   </div>
                   <div className="progress-card">
                     <div className="d-flex justify-content-between mb-1">
                       <span className="text-muted">Open Rate</span>
                       <span className="text-muted fw-bold">60%</span>
                     </div>
                     <div className="progress mb-2" style={{ height: '7px' }}>
                       <div
                         className="progress-bar bg-warning"
                         role="progressbar"
                         style={{ width: '60%' }}
                         aria-valuenow="60"
                         aria-valuemin="0"
                         aria-valuemax="100"
                         data-toggle="tooltip"
                         data-placement="top"
                         title="60%"
                       ></div>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
             <div className="col-md-3">
               <div className="card card-stats">
                 <div className="card-body">
                   <p className="fw-bold mt-1">Statistic</p>
                   <div className="row">
                     <div className="col-5">
                       <div className="icon-big text-center icon-warning">
                         <i className="la la-pie-chart text-warning"></i>
                       </div>
                     </div>
                     <div className="col-7 d-flex align-items-center">
                       <div className="numbers">
                         <p className="card-category">Number</p>
                         <h4 className="card-title">150GB</h4>
                       </div>
                     </div>
                   </div>
                   <hr />
                   <div className="row">
                     <div className="col-5">
                       <div className="icon-big text-center">
                         <i className="la la-heart-o text-primary"></i>
                       </div>
                     </div>
                     <div className="col-7 d-flex align-items-center">
                       <div className="numbers">
                         <p className="card-category">Followers</p>
                         <h4 className="card-title">+45K</h4>
                       </div>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
           </div>
           
           
          
           <div className="row">
             <div className="col-md-6">
               <div className="card">
                 <div className="card-header">
                   <h4 className="card-title">Table</h4>
                   <p className="card-category">Users Table</p>
                 </div>
                 <div className="card-body">
                   <table className="table table-head-bg-success table-striped table-hover">
                     <thead>
                       <tr>
                         <th scope="col">#</th>
                         <th scope="col">First</th>
                         <th scope="col">Last</th>
                         <th scope="col">Handle</th>
                       </tr>
                     </thead>
                     <tbody>
                       <tr>
                         <td>1</td>
                         <td>Mark</td>
                         <td>Otto</td>
                         <td>@mdo</td>
                       </tr>
                       <tr>
                         <td>2</td>
                         <td>Jacob</td>
                         <td>Thornton</td>
                         <td>@fat</td>
                       </tr>
                       <tr>
                         <td>3</td>
                         <td colSpan="2">Larry the Bird</td>
                         <td>@twitter</td>
                       </tr>
                     </tbody>
                   </table>
                 </div>
               </div>
             </div>
             <div className="col-md-6">
               <div className="card card-tasks">
                 <div className="card-header">
                   <h4 className="card-title">Tasks</h4>
                   <p className="card-category">To Do List</p>
                 </div>
                 <div className="card-body">
                   <div className="table-full-width">
                     <table className="table">
                       <thead>
                         <tr>
                           <th>
                             <div className="form-check">
                               <label className="form-check-label">
                                 <input
                                   className="form-check-input select-all-checkbox"
                                   type="checkbox"
                                   data-select="checkbox"
                                   data-target=".task-select"
                                 />
                                 <span className="form-check-sign"></span>
                               </label>
                             </div>
                           </th>
                           <th>Task</th>
                           <th>Action</th>
                         </tr>
                       </thead>
                       <tbody>
                         <tr>
                           <td>
                             <div className="form-check">
                               <label className="form-check-label">
                                 <input className="form-check-input task-select" type="checkbox" />
                                 <span className="form-check-sign"></span>
                               </label>
                             </div>
                           </td>
                           <td>Planning new project structure</td>
                           <td className="td-actions text-right">
                             <div className="form-button-action">
                               <button
                                 type="button"
                                 data-toggle="tooltip"
                                 title="Edit Task"
                                 className="btn btn-link btn-simple-primary"
                               >
                                 <i className="la la-edit"></i>
                               </button>
                               <button
                                 type="button"
                                 data-toggle="tooltip"
                                 title="Remove"
                                 className="btn btn-link btn-simple-danger"
                               >
                                 <i className="la la-times"></i>
                               </button>
                             </div>
                           </td>
                         </tr>
                         <tr>
                           <td>
                             <div className="form-check">
                               <label className="form-check-label">
                                 <input className="form-check-input task-select" type="checkbox" />
                                 <span className="form-check-sign"></span>
                               </label>
                             </div>
                           </td>
                           <td>Update Fonts</td>
                           <td className="td-actions text-right">
                             <div className="form-button-action">
                               <button
                                 type="button"
                                 data-toggle="tooltip"
                                 title="Edit Task"
                                 className="btn btn-link btn-simple-primary"
                               >
                                 <i className="la la-edit"></i>
                               </button>
                               <button
                                 type="button"
                                 data-toggle="tooltip"
                                 title="Remove"
                                 className="btn btn-link btn-simple-danger"
                               >
                                 <i className="la la-times"></i>
                               </button>
                             </div>
                           </td>
                         </tr>
                         <tr>
                           <td>
                             <div className="form-check">
                               <label className="form-check-label">
                                 <input className="form-check-input task-select" type="checkbox" />
                                 <span className="form-check-sign"></span>
                               </label>
                             </div>
                           </td>
                           <td>Add new Post</td>
                           <td className="td-actions text-right">
                             <div className="form-button-action">
                               <button
                                 type="button"
                                 data-toggle="tooltip"
                                 title="Edit Task"
                                 className="btn btn-link btn-simple-primary"
                               >
                                 <i className="la la-edit"></i>
                               </button>
                               <button
                                 type="button"
                                 data-toggle="tooltip"
                                 title="Remove"
                                 className="btn btn-link btn-simple-danger"
                               >
                                 <i className="la la-times"></i>
                               </button>
                             </div>
                           </td>
                         </tr>
                         <tr>
                           <td>
                             <div className="form-check">
                               <label className="form-check-label">
                                 <input className="form-check-input task-select" type="checkbox" />
                                 <span className="form-check-sign"></span>
                               </label>
                             </div>
                           </td>
                           <td>Finalise the design proposal</td>
                           <td className="td-actions text-right">
                             <div className="form-button-action">
                               <button
                                 type="button"
                                 data-toggle="tooltip"
                                 title="Edit Task"
                                 className="btn btn-link btn-simple-primary"
                               >
                                 <i className="la la-edit"></i>
                               </button>
                               <button
                                 type="button"
                                 data-toggle="tooltip"
                                 title="Remove"
                                 className="btn btn-link btn-simple-danger"
                               >
                                 <i className="la la-times"></i>
                               </button>
                             </div>
                           </td>
                         </tr>
                       </tbody>
                     </table>
                   </div>
                 </div>
                 <div className="card-footer">
                   <div className="stats">
                     <i className="now-ui-icons loader_refresh spin"></i> Updated 3 minutes ago
                   </div>
                 </div>
               </div>
             </div>
           </div>
    </div>
         
       

         </HomeLayout>
    </>
)}

export default Dashboard;
