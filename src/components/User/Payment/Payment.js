import react from 'react';
import Footer from '../../Landing-Page/Footer';
import './Payment.scss';
 <link href="pricing.css" rel="stylesheet"></link>; 
export default function Payment() {
    return (
        <div id='Payment'>
            <div className="container py-3">
                {/* <header className="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom">
                   
                </header> */}

                <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
                    <h1 className="display-4 fw-normal Text ">Plans</h1>
                    <p className="fs-5 Text ">
                    We offer a variety of plans to meet your needs. The plan you choose will determine the number of devices that you can watch Our Website on, at the same time.
                    With all of our plans, you can download our Website app on all your favorite devices and watch unlimited movies and TV shows.                    
                    </p>
                </div>

                <main>
                    
                    <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
                        <div className="col">
                            <div className="card mb-4 rounded-3 shadow-sm border-dark">
                                <div className="card-header py-3 bg-danger">
                                    <h4 className="my-0 fw-normal">Basic</h4>
                                </div>
                                <div className="card-body">
                                    <h1 className="card-title pricing-card-title">
                                        $10<small className="text-muted fw-light"></small>
                                    </h1>
                                    <ul className="list-unstyled mt-3 mb-4">
                                        <li>10 users included</li>
                                        <li>2 GB of storage</li>
                                        <li>Email support</li>
                                        <li>High Video Quality(720)</li>
                                    </ul>
                                    <button type="button" className="w-100 btn btn-lg btn-outline-danger">
                                    Get Started
                                    </button>
                                </div>
                            </div>
                        </div>
                        
                        
                        <div className="col">
                            <div className="card mb-4 rounded-3 shadow-sm border-dark">
                                <div className="card-header py-3 bg-danger">
                                    <h4 className="my-0 fw-normal">Standard</h4>
                                </div>
                                <div className="card-body">
                                    <h1 className="card-title pricing-card-title">
                                        $20<small className="text-muted fw-light"></small>
                                    </h1>
                                    <ul className="list-unstyled mt-3 mb-4">
                                        <li>20 users included</li>
                                        <li>10 GB of storage</li>
                                        <li>Priority email support</li>
                                        <li>High Video Quality(1080)</li>
                                    </ul>
                                    <button type="button" className="w-100 btn btn-lg btn-outline-danger ">
                                    Get Started
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card mb-4 rounded-3 shadow-sm border-dark">
                                <div className="card-header py-3 bg-danger ">
                                    <h4 className="my-0 fw-normal">Premium</h4>
                                </div>
                                <div className="card-body">
                                    <h1 className="card-title pricing-card-title">
                                        $30<small className="text-muted fw-light"></small>
                                    </h1>
                                    <ul className="list-unstyled mt-3 mb-4">
                                        <li>30 users included</li>
                                        <li>15 GB of storage</li>
                                        <li>Phone and email support</li>
                                        <li>High Video Quality(4K+HDR)</li>
                                    </ul>
                                    <button type="button" className="w-100 btn btn-lg btn-outline-danger">
                                        Get Started
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <h2 className="display-6 text-center Text mb-4">Compare plans</h2>

                    <div className="table-responsive">
                        <table className="table text-center">
                            <thead>
                                <tr>
                                    <th className='Text' style={{width: '34%'}}></th>
                                    <th className='Text' style={{width: '22%'}}>Free</th>
                                    <th className='Text' style={{width: '22%'}}>Pro</th>
                                    <th className='Text' style={{width: '22%'}}>Enterprise</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row" className="text-start Text">
                                        Public
                                    </th>
                                    <td>
                                    <i class="fas fa-check-circle Text"></i>
                                    </td>
                                    <td>
                                    <i class="fas fa-check-circle Text"></i>
                                    </td>
                                    <td>
                                    <i class="fas fa-check-circle Text"></i>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row" className="text-start Text">
                                        Private
                                    </th>
                                    <td></td>
                                    <td>
                                    <i class="fas fa-check-circle Text"></i>
                                    </td>
                                    <td>
                                    <i class="fas fa-check-circle Text"></i>
                                    </td>
                                </tr>
                            </tbody>

                            <tbody>
                                <tr>
                                    <th scope="row" className="text-start Text">
                                        Permissions
                                    </th>
                                    <td>
                                    <i class="fas fa-check-circle Text"></i>
                                    </td>
                                    <td>
                                    <i class="fas fa-check-circle Text"></i>
                                    </td>
                                    <td>
                                    <i class="fas fa-check-circle Text"></i>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row" className="text-start Text">
                                        Sharing
                                    </th>
                                    <td></td>
                                    <td>
                                    <i class="fas fa-check-circle Text"></i>
                                    </td>
                                    <td>
                                    <i class="fas fa-check-circle Text"></i>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row" className="text-start Text">
                                        Unlimited members
                                    </th>
                                    <td></td>
                                    <td>
                                    <i class="fas fa-check-circle Text"></i>
                                    </td>
                                    <td>
                                    <i class="fas fa-check-circle Text"></i>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row" className="text-start Text">
                                        Extra security
                                    </th>
                                    <td></td>
                                    <td></td>
                                    <td>
                                        <i class="fas fa-check-circle Text"></i>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </main>

                <div className='text-center footer'>
                            <Footer/>
                        </div>
            </div>
        </div>
    );
}
