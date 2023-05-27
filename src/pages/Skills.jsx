import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBootstrap, faCss3, faHtml5, faLaravel, faPhp } from '@fortawesome/free-brands-svg-icons';
import { FaServer } from "react-icons/fa";


export default function Skills() {
    return (
        <div>
            <div className="content">
                <h1>Skills</h1>
                <table style={{paddingLeft:"20px"}}>
                    <tbody>
                        <tr>
                            <td>
                             <FontAwesomeIcon icon={faHtml5} />
                            </td>
                            <td>HTML</td>
                        </tr>
                        <tr>
                            <td>
                             <FontAwesomeIcon icon={faCss3} />
                            </td>
                            <td>CSS</td>
                        </tr>
                        <tr>
                            <td>
                             <FontAwesomeIcon icon={faBootstrap} />
                            </td>
                            <td>Bootstrap</td>
                        </tr>
                        <tr>
                            <td>
                             <FontAwesomeIcon icon={faPhp} />
                            </td>
                            <td>PHP Native</td>
                        </tr>
                        <tr>
                            <td>
                             <FontAwesomeIcon icon={faLaravel} />
                            </td>
                            <td>Laravel Framework</td>
                        </tr>
                        <tr>
                            <td>
                             <FaServer />
                            </td>
                            <td>MySQL</td>
                        </tr>
                    </tbody>
                </table>
                                {/* <ul>
                                    <FontAwesomeIcon icon={faTwitter} /> HTML
                                    <FontAwesomeIcon icon={faTwitter} />CSS
                                    <li>Bootstrap</li>
                                    <li>PHP Native</li>
                                    <li>Laravel Framework</li>
                                    <li>MySQL</li>
                                </ul> */}
            </div>
        </div>
    );
};


