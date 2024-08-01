import {classNames} from 'shared/lib/classNames/classNames';
import {AddCompanyForm} from 'features/AddCompany';

function App() {

    return (
        <div className={classNames('wrapper')}>
            <main className="content-page">
                <AddCompanyForm />
            </main>
        </div>
    );
}

export default App;
