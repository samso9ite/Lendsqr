import MainLayout from "../components/layout/MainLayout"

const UserDetail = ( ) => {
    return(
        <MainLayout>
            <section>
                <p> <img src="./assets/SVGS/back_arrow.svg"/> Back to Users</p>
                <div className="row">
                    <div className="col-lg-3">
                        <h4>User Details</h4> 
                    </div>
                    <div className="col-lg-6">
                        <span className=" ms-auto" style={{float:'right'}}>
                            <button className="btn btn-outline-danger" style={{border:'1.5px solid #E4033B', fontWeight: '500'}}>BLACLIST USER</button>  <button className="btn btn-outline" style={{border:'1.5px solid #39CDCC', fontWeight: '500', color: '#39CDCC'}}>ACTIVATE USER</button>
                        </span>
                    </div>
                </div>
            </section>

            <section className="mt-5">
                <div className="row">
                    <div className="col-lg-9">
                        <div className="card">
                            <div className="card-body" style={{paddingLeft: '3%'}}>
                                <div className="row mb-4">
                                    <div className="col-lg-4" style={{borderRight: '1px solid #e5e7eb'}}>
                                        <img src="./assets/SVGS/avatar2.svg" style={{float: 'left', marginRight: '2%'}}/> <span className="pt-5"><h5 style={{paddingLeft: '3rem'}}>Grace Effiom</h5><p>LSQFf587g90</p></span>
                                    </div>
                                    <div className="col-lg-2">
                                        <p>User's Tier</p>
                                        <img src="./assets/SVGS/star-fill.svg"/><img src="./assets/SVGS/star.svg"/><img src="./assets/SVGS/star.svg"/>
                                    </div>
                                    <div className="col-lg-2" style={{borderLeft: '1px solid #e5e7eb'}}>
                                        <h5>#200,000.00</h5>
                                        <p>3065073998/Firstbank</p>
                                    </div>
                                </div>
                                <div className="row mt-5">
                                    <div className="col-lg-2">
                                        <p>General Details</p>
                                    </div>
                                    <div className="col-lg-2">
                                        <p>Documents</p>
                                    </div>
                                    <div className="col-lg-2">
                                        <p>Bank Details</p>
                                    </div>
                                    <div className="col-lg-1">
                                        <p>Loans</p>
                                    </div>
                                    <div className="col-lg-1 ms-auto">
                                        <p>Savings</p>
                                    </div>
                                    <div className="col-lg-2 ms-auto" >
                                        <p>App and System</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mt-5">
                <div className="row">
                    <div className="col-lg-9" >
                        <div className="card">
                            <div className="card-body" style={{paddingLeft: '3%'}}>
                                <p style={{fontWeight: '600'}}>Personal Information</p>
                                <div className="row " style={{color: '#545F7D'}}>
                                    <div className="col-lg-2">
                                        <p  className="mb-0" style={{fontSize: '12px'}}>FULL NAME</p>
                                        <p style={{fontWeight: '600'}}>Grace Effiom</p>
                                    </div>
                                    <div className="col-lg-2">
                                        <p  className="mb-0" style={{fontSize: '12px'}}>PHONE NUMBER</p>
                                        <p style={{fontWeight: '600'}}>08112417083</p>
                                    </div>
                                    <div className="col-lg-2">
                                        <p  className="mb-0" style={{fontSize: '12px'}}>EMAIL ADDRESS</p>
                                        <p style={{fontWeight: '600'}}>grace@gmail.com</p>
                                    </div>
                                    <div className="col-lg-2">
                                        <p className="mb-0" style={{fontSize: '12px'}}>BVN</p>
                                        <p style={{fontWeight: '600'}}>08112417083</p>
                                    </div>
                                    <div className="col-lg-2">
                                        <p  className="mb-0" style={{fontSize: '12px'}}>GENDER</p>
                                        <p style={{fontWeight: '600'}}>Female</p>
                                    </div>
                                </div>
                                
                                <div className="row mt-3" style={{color: '#545F7D'}}>
                                    <div className="col-lg-2">
                                        <p className="mb-0" style={{fontSize: '12px'}}>MARITAL STATUS</p>
                                        <p style={{fontWeight: '600'}}>Single</p>
                                    </div>
                                    <div className="col-lg-2">
                                        <p className="mb-0" style={{fontSize: '12px'}}>CHILDREN</p>
                                        <p style={{fontWeight: '600'}}>None</p>
                                    </div>
                                    <div className="col-lg-2">
                                        <p className="mb-0" style={{fontSize: '12px'}}>TYPE OF RESIDENCE</p>
                                        <p style={{fontWeight: '600'}}>Parent's Apartment</p>
                                    </div>
                                </div>
                                <hr />

                                <div>
                                    <p style={{fontWeight: 600}}>Education and Employment</p>
                                            <div className="row " style={{color: '#545F7D'}}>
                                                <div className="col-lg-2">
                                                    <p className="mb-0" style={{fontSize: '12px'}}>LEVEL OF EDUCATION</p>
                                                    <p style={{fontWeight: '600'}}>B.Sc</p>
                                                </div>
                                                <div className="col-lg-3">
                                                    <p className="mb-0" style={{fontSize: '12px'}}>EMPLOYEMENT STATUS</p>
                                                    <p style={{fontWeight: '600'}}>Employed</p>
                                                </div>
                                                <div className="col-lg-3">
                                                    <p className="mb-0" style={{fontSize: '12px'}}>SECTOR OF EMPLOYEMENT</p>
                                                    <p style={{fontWeight: '600'}}>FinTech</p>
                                                </div>
                                                <div className="col-lg-3">
                                                    <p className="mb-0" style={{fontSize: '12px'}}>DURATION OF EMPLOYEMENT</p>
                                                    <p style={{fontWeight: '600'}}>2 years</p>
                                                </div>
                                                
                                            </div>
    
                                            <div className="row mt-3" style={{color: '#545F7D'}}>
                                                <div className="col-lg-2">
                                                <p className="mb-0" style={{fontSize: '12px'}}>OFFICE EMAIL</p>
                                                    <p style={{fontWeight: '600'}}>grace@lendsqr.com</p>
                                                </div>
                                                <div className="col-lg-3">
                                                    <p  className="mb-0" style={{fontSize: '12px'}}>MONTHLY INCOME</p>
                                                    <p style={{fontWeight: '600'}}>#20,000.00 - #40,000.00</p>
                                                </div>
                                                <div className="col-lg-3">
                                                    <p className="mb-0" style={{fontSize: '12px'}}>TYPE OF RESIDENCE</p>
                                                    <p style={{fontWeight: '600'}}>Parent's Apartment</p>
                                                </div>
                                            </div>
                                            <hr />
                                </div>

                                <div className="row">
                                    <div className="col-lg-9">
                                            <p style={{fontWeight: '600'}}>Socials</p>
                                                <div className="row" style={{color: '#545F7D'}}>
                                                    <div className="col-lg-3">
                                                        <p className="mb-0" style={{fontSize: '12px'}}>TWITTER</p>
                                                        <p style={{fontWeight: 600}}>@grace_effiom</p>
                                                    </div>
                                                    <div className="col-lg-3">
                                                        <p className="mb-0" style={{fontSize: '12px'}}>FACEBOOK</p>
                                                        <p style={{fontWeight: '600'}}>Grace Effiom</p>
                                                    </div>
                                                    <div className="col-lg-3">
                                                        <p className="mb-0" style={{fontSize: '12px'}}>INSTAGRAM</p>
                                                        <p style={{fontWeight: '600'}}>grace@gmail.com</p>
                                                    </div>
                                                </div>
        
                                                
                                            </div>
                                            <hr />
                                </div>

                                <div className="row">
                                    <div className="col-lg-9">
                                    <p style={{fontWeight: '600'}}>Guarantor</p>
                                    <div className="row " style={{color: '#545F7D'}}>
                                        <div className="col-lg-3">
                                            <p  className="mb-0"style={{fontSize: '12px'}}>FULL NAME</p>
                                            <p style={{fontWeight: '600'}}>Grace Effiom</p>
                                        </div>
                                        <div className="col-lg-3">
                                            <p className="mb-0" style={{fontSize: '12px'}}>PHONE NUMBER</p>
                                            <p style={{fontWeight: '600'}}>08112417083</p>
                                        </div>
                                        <div className="col-lg-3">
                                            <p className="mb-0" style={{fontSize: '12px'}}>EMAIL ADDRESS</p>
                                            <p style={{fontWeight: '600'}}>grace@gmail.com</p>
                                        </div>
                                        <div className="col-lg-3">
                                            <p className="mb-0" style={{fontSize: '12px'}}>RELATIONSHIP</p>
                                            <p style={{fontWeight: '600'}}>Sister</p>
                                        </div>
                                        
                                    </div>
                                </div>
                                        <hr />
                                        <div className="row " style={{color: '#545F7D'}}>
                                            <div className="col-lg-3">
                                                <p className="mb-0" style={{fontSize: '12px'}}>FULL NAME</p>
                                                <p style={{fontWeight: '600'}}>Grace Effiom</p>
                                            </div>
                                            <div className="col-lg-3">
                                                <p className="mb-0" style={{fontSize: '12px'}}>PHONE NUMBER</p>
                                                <p style={{fontWeight: '600'}}>08112417083</p>
                                            </div>
                                            <div className="col-lg-3">
                                                <p className="mb-0" style={{fontSize: '12px'}}>EMAIL ADDRESS</p>
                                                <p style={{fontWeight: '600'}}>grace@gmail.com</p>
                                            </div>
                                            <div className="col-lg-3">
                                                <p className="mb-0" style={{fontSize: '12px'}}>RELATIONSHIP</p>
                                                <p style={{fontWeight: '600'}}>Sister</p>
                                            </div>
                                            
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </MainLayout>
    )
}

export default UserDetail