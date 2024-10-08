import React from 'react';
import { FaCode, FaCogs, FaDatabase, FaCloud, FaDocker, FaMobileAlt, FaGithub } from 'react-icons/fa';

const Skills = () => {
    return (
        <section id="skills" className="p-5 bg-light">
            <div className="container">
                {/* Skills Title */}
                <h2 className="text-left">Skills</h2>
                <div className="underline"></div>

                {/* Skills Cards */}
                <div className="row align-items-stretch">
                    {/* Card 1: Programming Languages */}
                    <div className="col-md-6 mb-4">
                        <div className="card h-100 text-center">
                            <div className="card-body">
                                {/* Icon representing Programming Languages */}
                                <FaCode className="icon mb-3" size={50} />
                                <h5 className="card-title">Languages</h5>
                                <p className="skill-text">
                                    <strong>C#, Java</strong><br />
                                    <span className="joke-text">– My battle-hardened warriors, always by my side in the toughest coding quests.</span><br />
                                    <strong>JavaScript, HTML, CSS</strong><br />
                                    <span className="joke-text">– Reliable partners, we tackle front-end challenges like a dynamic trio.</span><br />
                                    <strong>PHP, Python</strong><br />
                                    <span className="joke-text">– We’ve had our adventures, but we're still on good terms.</span>
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Card 2: Frameworks */}
                    <div className="col-md-6 mb-4">
                        <div className="card h-100 text-center">
                            <div className="card-body">
                                {/* Icon representing Frameworks */}
                                <FaCogs className="icon mb-3" size={50} />
                                <h5 className="card-title">Frameworks and Libraries</h5>
                                <p className="skill-text">
                                    <strong>ASP.Net Core, React</strong><br />
                                    <span className="joke-text">– My ride-or-die frameworks, making me look good.</span><br />
                                    <strong>Bootstrap</strong><br />
                                    <span className="joke-text">– Fashion for websites. I keep things slick.</span><br />
                                    <strong>Razor Pages, Blazor</strong><br />
                                    <span className="joke-text">–  We’re getting acquainted, but it’s too early to tell if we’ll become friends.</span>
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Card 3: ORM */}
                    <div className="col-md-6 mb-4">
                        <div className="card h-100 text-center">
                            <div className="card-body">
                                {/* Icon representing ORM */}
                                <FaDatabase className="icon mb-3" size={50} />
                                <h5 className="card-title">Object Relational Mappers</h5>
                                <p className="skill-text">
                                    <strong>ADO.NET, Entity Framework, EF Core</strong><br />
                                    <span className="joke-text">– Besties.</span><br />
                                    <strong>Dapper</strong><br />
                                    <span className="joke-text">– Fast, efficient, and occasionally we grab coffee.</span>
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Card 4: Databases */}
                    <div className="col-md-6 mb-4">
                        <div className="card h-100 text-center">
                            <div className="card-body">
                                {/* Icon representing Databases */}
                                <FaDatabase className="icon mb-3" size={50} />
                                <h5 className="card-title">Databases</h5>
                                <p className="skill-text">
                                    <strong>SQL Server, SQLite</strong><br />
                                    <span className="joke-text">– My go-to, like a home-cooked meal.</span><br />
                                    <strong>MySQL, Oracle DB, MongoDB</strong><br />
                                    <span className="joke-text">– We’ve had some dates, not serious but I know enough.</span>
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Card 5: Cloud Services */}
                    <div className="col-md-6 mb-4">
                        <div className="card h-100 text-center">
                            <div className="card-body">
                                {/* Icon representing Cloud Services */}
                                <FaCloud className="icon mb-3" size={50} />
                                <h5 className="card-title">Cloud Services</h5>
                                <p className="skill-text">
                                    <strong>Microsoft Azure, Firebase</strong><br />
                                    <span className="joke-text">– Figuring out the dance in the cloud, but I’ve got the basics down.</span><br />
                                    <strong>Azure App Services</strong><br />
                                    <span className="joke-text">– I can deploy apps without breaking too many things.</span>
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Card 6: Mobile Development */}
                    <div className="col-md-6 mb-4">
                        <div className="card h-100 text-center">
                            <div className="card-body">
                                {/* Icon representing Mobile Development */}
                                <FaMobileAlt className="icon mb-3" size={50} />
                                <h5 className="card-title">Mobile Development</h5>
                                <p className="skill-text">
                                    <strong>iOS (Swift, Xcode)</strong><br />
                                    <span className="joke-text">– Dipped my toes in the Apple pool, and it’s refreshing.</span><br />
                                    <strong>Android (Java, Android Studio)</strong><br />
                                    <span className="joke-text">– We’ve had some meaningful conversations in code.</span>
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Card 7: Containerization */}
                    <div className="col-md-6 mb-4">
                        <div className="card h-100 text-center">
                            <div className="card-body">
                                {/* Icon representing Containerization */}
                                <FaDocker className="icon mb-3" size={50} />
                                <h5 className="card-title">Containerization</h5>
                                <p className="skill-text">
                                    <strong>Docker</strong><br />
                                    <span className="joke-text">– Containers? Yes, I know how to keep things tidy and organized.</span>
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Card 8: Version Control */}
                    <div className="col-md-6 mb-4">
                        <div className="card h-100 text-center">
                            <div className="card-body">
                                {/* Icon representing Version Control */}
                                <FaGithub className="icon mb-3" size={50} />
                                <h5 className="card-title">Version Control</h5>
                                <p className="skill-text">
                                    <strong>GitHub</strong><br />
                                    <span className="joke-text">– My "Ctrl+Z for life."</span>
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Skills;
