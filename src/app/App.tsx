import {classNames} from 'shared/lib/classNames/classNames';
import {AddCompanyForm} from 'features/AddCompany';
import {CompaniesList} from 'widjets/CompaniesList';

function App() {

    return (
        <div className={classNames('wrapper')}>
            <main className="content-page">
                <AddCompanyForm />
                <CompaniesList />
            </main>
        </div>
    );
}

export default App;
