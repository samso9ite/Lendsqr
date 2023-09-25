import DashboardStat from "../components/DashboardStat"
import UserList from "../components/UserList"
import MainLayout from "../components/layout/MainLayout"

const Dashboard = () => {
    return (
        <MainLayout>
            <DashboardStat />
            <section className="mt-5">
                <div className="row">
                    <div className="col-lg-10">
                        <div className="card" style={{width: '92%'}}>
                            <div className="card-body">
                                <UserList />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </MainLayout>
    )
}

export default Dashboard