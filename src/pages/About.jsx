import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';


export default function About() {
    return (
        <div>
            <div className="content">
                <h1>About</h1>
                <p>Hello, my name is Clara Diva Paramitha but people usually call me Clara. Nice to meet you! I'm currently chasing my bachelor degree at UPN Veteran Jawa Timur and taking Informatics major at 21 years old! I'm a January baby, that's why I'm already on my 20's. I was born in Surabaya on January 5th, 2002, and raised here and there. I excel at Figma, basic front-end coding (HTML, CSS, Bootstrap), basic back-end (PHP, Laravel), and database.</p>
                <p>You can find me here : </p>
                <a href="https://www.instagram.com/msib.claradivap512/" target='_blank'><FontAwesomeIcon icon={faInstagram} size='2x' /></a>  <span>&nbsp;&nbsp;</span>
                <a href="https://github.com/claradivap512" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} size='2x'/></a>
            </div>
        </div>
    );
};

