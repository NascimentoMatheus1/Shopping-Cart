import styles from './AboutPage.module.css';
import gitHubLogo from '../../assets/GitHub_Invertocat_White_Clearspace.svg';

function AboutPage() {
    return (
        <div className={styles.aboutPage}>
            <p>
                This is a fictional store project for an assignment of the{' '}
                <a href="https://www.theodinproject.com/about" target="_blank">
                    The Odin Project
                </a>
                .
            </p>
            <p>
                Product data is provided by{' '}
                <a href="https://fakestoreapi.com/" target="_blank">
                    Fake Store API.
                </a>
            </p>
            <p>
                Images provided by{' '}
                <a href="https://www.freepik.com/" target="_blank">
                    freepik
                </a>
            </p>
            <div className={styles.githubLink}>
                <p>NascimentoMatheus1 &copy;</p>
                <a href="https://github.com/NascimentoMatheus1" target="_blank">
                    <img src={gitHubLogo} alt="github logo" />
                </a>
            </div>
        </div>
    );
}

export default AboutPage;
