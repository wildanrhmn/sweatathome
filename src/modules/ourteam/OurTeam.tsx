'use client'
import "../../styles/ourteam.css";

import Image from "next/image";

import Person1 from "../../assets/images/team/foto_aul.webp";
import Person2 from "../../assets/images/team/foto_misel.webp";
import Person3 from "../../assets/images/team/foto_sofi.webp";

export const OurTeam = (): JSX.Element => {
    return (
        <section className="our-team" id="our_team">
            <div className="container">
                <h1>Tim <span style={{color: "#eae839"}}>Manajemen</span> Kami</h1>
                    <div className="row d-flex align-items-center justify-content-center gap-3 gap-md-0">
                        <div className="col-12 col-md-4 d-flex justify-content-center">
                            <div className="person__card">
                                <div className="person__wrapper d-flex flex-column gap-3">
                                    <div className="person__image">
                                        <Image className="image__profile" alt="Mask group" src={Person3} />
                                    </div>
                                    <div className="person__name">
                                        <h5>Nurul Sofiah</h5>
                                        <span>Commisioner & Head Coach</span>
                                    </div>
                                    <div className="person__position">
                                        <ul>
                                            <li>Bachelor of Sport Science</li>
                                            <li>Ex Sprinter Athlete</li>
                                            <li>Ex Running Target Shooting Athlete</li>
                                            <li>Shotgun Athlete</li>
                                            <li>APKI Certified Trainer</li>
                                            <li>Pre & Post Natal Certified Coach</li>
                                            <li>First Aid Certified</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-4 d-flex justify-content-center">
                            <div className="person__card">
                                <div className="person__wrapper d-flex flex-column gap-3">
                                    <div className="person__image">
                                        <Image className="image__profile" alt="Mask group" src={Person2} />
                                    </div>
                                    <div className="person__name">
                                        <h5>Michelle</h5>
                                        <span>Director & Functional Manager</span>
                                    </div>
                                    <div className="person__position">
                                        <ul>
                                            <li>Bachelor of Arts in Communications</li>
                                            <li>Master of Communication</li>
                                            <li>Certified Sports Nutrition Coach</li>
                                            <li>Content Briefer</li>
                                            <li>Business Development</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-4 d-flex justify-content-center">
                            <div className="person__card">
                                <div className="person__wrapper d-flex flex-column gap-3">
                                    <div className="person__image">
                                        <Image className="image__profile" alt="Mask group" src={Person1} />
                                    </div>
                                    <div className="person__name">
                                        <h5>Aulia Adibah</h5>
                                        <span>Social Media & Administration</span>
                                    </div>
                                    <div className="person__position">
                                        <ul>
                                            <li>Social Media Specialist</li>
                                            <li>Administration</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </section>
        // <div className="frame">
        //     <div className="overlap-group-wrapper">
        //         <div className="overlap-group">
        //             <Image className="BARBEL" alt="Barbel" src={backgroundImg} />
        //             <div className="rectangle" />
        //             <div className="container">
        //                 <div className="text-wrapper">Tim Manajemen Kami</div>
        //                 <div className="row">
        //                     <div className="col-12 col-sm-6 col-md-4">
        //                         <div className="card__person">
        //                             <div className="card__wrapper"></div>
        //                         </div>
        //                     </div>
        //                 </div>
        //                 {/* <div className="rectangle-2" />
        //                 <Image className="mask-group" alt="Mask group" src={Person3} />
        //                 <Image className="mask-group" alt="Mask group" src={Person2} />
        //                 <div className="rectangle-3" />
        //                 <div className="rectangle-4" />
        //                 <div className="text-wrapper-2">Michelle</div>
        //                 <div className="text-wrapper-3">Nurul Sofiah</div>
        //                 <div className="director-functional">
        //                     Director &amp; Functional Manager
        //                 </div>
        //                 <div className="commisioner-head">Commisioner &amp; Head Coach</div>
        //                 <p className="bachelor-of-arts-in">
        //                     Bachelor of Arts in Communications
        //                     <br />
        //                     Master of Communications
        //                     <br />
        //                     Certified Sports Nutrition Coach
        //                     <br />
        //                     Content Briefer
        //                     <br />
        //                     Business Development
        //                 </p>
        //                 <p className="bachelor-of-sport">
        //                     Bachelor of Sport Science
        //                     <br />
        //                     Ex Sprinter Athlete
        //                     <br />
        //                     Ex Running Target Shooting Athlete
        //                     <br />
        //                     APKI Certified Trainer
        //                     <br />
        //                     Pre &amp; Post Natal Certified Coach
        //                     <br />
        //                     First Aid Certified
        //                 </p>
        //                 <div className="rectangle-5" />
        //                 <Image className="mask-group" alt="Mask group" src={Person1} />
        //                 <div className="rectangle-6" />
        //                 <div className="text-wrapper-4">Aulia Adibah</div>
        //                 <div className="social-media">Social Media &amp; Administration</div>
        //                 <div className="social-media-2">
        //                     Social Media Specialist
        //                     <br />
        //                     Administration
        //                 </div> */}
        //             </div>
        //         </div>
        //     </div>
        // </div>
    );
};

export default OurTeam;
