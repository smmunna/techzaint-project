import React from 'react';
import PageTitle from "../../components/PageTitle/PageTitle"
import { useContext } from 'react';
import {darkContext} from "../../context/darkmode/DarkContext"

const TermsCondition = () => {
    const{darkmode} = useContext(darkContext)

    return (
        <div>
            <PageTitle title={`Terms & Condition`} />
            <div className={`px-5 lg:px-24 py-20 ${darkmode?'dark':'light'}`}>
                <div>
                    <div>
                        <h2 className='text-xl py-2'><strong>Terms and Conditions</strong></h2>
                        <hr />

                        <p className='py-5'>Welcome to TechZaint!</p>

                        <p>These terms and conditions outline the rules and regulations for the use of Techzaint Software Innovations's Website, located at https://techzaint.com/.</p> <br />

                        <p>By accessing this website we assume you accept these terms and conditions. Do not continue to use TechZaint if you do not agree to take all of the terms and conditions stated on this page.</p> <br />

                        <p>The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and all Agreements: "Client", "You" and "Your" refers to you, the person log on this website and compliant to the Company's terms and conditions. "The Company", "Ourselves", "We", "Our" and "Us", refers to our Company. "Party", "Parties", or "Us", refers to both the Client and ourselves. All terms refer to the offer, acceptance and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner for the express purpose of meeting the Client's needs in respect of provision of the Company's stated services, in accordance with and subject to, prevailing law of bd. Any use of the above terminology or other words in the singular, plural, capitalization and/or he/she or they, are taken as interchangeable and therefore as referring to same.</p> <br />

                        <h3 className='pb-2'><strong>Cookies</strong></h3>
                        <hr />

                        <p className='pt-2'>We employ the use of cookies. By accessing TechZaint, you agreed to use cookies in agreement with the Techzaint Software Innovations's Privacy Policy. </p> <br />

                        <p>Most interactive websites use cookies to let us retrieve the user's details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies.</p> <br />

                        <h3 className='pb-2'><strong>License</strong></h3>
                        <hr />

                        <p className='pt-2'>Unless otherwise stated, Techzaint Software Innovations and/or its licensors own the intellectual property rights for all material on TechZaint. All intellectual property rights are reserved. You may access this from TechZaint for your own personal use subjected to restrictions set in these terms and conditions.</p> <br />

                        <p className='pb-2'>You must not:</p>
                        <hr />
                        <ul className='space-y-2 pt-2'>
                            <p>1. Republish material from TechZaint</p>
                            <p>2. Sell, rent or sub-license material from TechZaint</p>
                            <p>3. Reproduce, duplicate or copy material from TechZaint</p>
                            <p>4. Redistribute content from TechZaint</p>
                        </ul>
                        <br />

                        <p>Parts of this website offer an opportunity for users to post and exchange opinions and information in certain areas of the website. Techzaint Software Innovations does not filter, edit, publish or review Comments prior to their presence on the website. Comments do not reflect the views and opinions of Techzaint Software Innovations,its agents and/or affiliates. Comments reflect the views and opinions of the person who post their views and opinions. To the extent permitted by applicable laws, Techzaint Software Innovations shall not be liable for the Comments or for any liability, damages or expenses caused and/or suffered as a result of any use of and/or posting of and/or appearance of the Comments on this website.</p> <br />

                        <p>Techzaint Software Innovations reserves the right to monitor all Comments and to remove any Comments which can be considered inappropriate, offensive or causes breach of these Terms and Conditions.</p> <br />

                        <p className='font-bold'>You warrant and represent that:</p>
                        <hr className='py-2 mt-2' />

                        <ul className='space-y-2'>
                            <li>You are entitled to post the Comments on our website and have all necessary licenses and consents to do so;</li>
                            <li>The Comments do not invade any intellectual property right, including without limitation copyright, patent or trademark of any third party;</li>
                            <li>The Comments do not contain any defamatory, libelous, offensive, indecent or otherwise unlawful material which is an invasion of privacy</li>
                            <li>The Comments will not be used to solicit or promote business or custom or present commercial activities or unlawful activity.</li>
                        </ul> <br />

                        <p>You hereby grant Techzaint Software Innovations a non-exclusive license to use, reproduce, edit and authorize others to use, reproduce and edit any of your Comments in any and all forms, formats or media.</p> <br />

                        <p className='font-bold'>Hyperlinking to our content:</p>
                        <hr className='py-2 mt-2' />

                        <p>The following organizations may link to our Website without prior written approval:</p> <br />

                        <ul className='space-y-2'>
                            <li>1. Government agencies;</li>
                            <li>2. Search engines;</li>
                            <li>3. News organizations;</li>
                            <li>4. Online directory distributors may link to our Website in the same manner as they hyperlink to the Websites of other listed businesses; and</li>
                            <li>5. System wide Accredited Businesses except soliciting non-profit organizations, charity shopping malls, and charity fundraising groups which may not hyperlink to our Web site.</li>
                        </ul> <br />

                        <p>These organizations may link to our home page, to publications or to other Website information so long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement or approval of the linking party and its products and/or services; and (c) fits within the context of the linking party's site.</p> <br />



                        <p>We will approve link requests from these organizations if we decide that: (a) the link would not make us look unfavorably to ourselves or to our accredited businesses; (b) the organization does not have any negative records with us; (c) the benefit to us from the visibility of the hyperlink compensates the absence of Techzaint Software Innovations; and (d) the link is in the context of general resource information.</p> <br />

                        <p>These organizations may link to our home page so long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement or approval of the linking party and its products or services; and (c) fits within the context of the linking party's site.</p> <br />

                        <p>If you are one of the organizations listed in paragraph 2 above and are interested in linking to our website, you must inform us by sending an e-mail to Techzaint Software Innovations. Please include your name, your organization name, contact information as well as the URL of your site, a list of any URLs from which you intend to link to our Website, and a list of the URLs on our site to which you would like to link. Wait 2-3 weeks for a response.</p> <br />



                        <p>No use of Techzaint Software Innovations's logo or other artwork will be allowed for linking absent a trademark license agreement.</p> <br />

                        <h3><strong>iFrames</strong></h3>
                        <hr className='py-2' />

                        <p>Without prior approval and written permission, you may not create frames around our Webpages that alter in any way the visual presentation or appearance of our Website.</p> <br />

                        <h3><strong>Content Liability</strong></h3>
                        <hr className='py-2' />

                        <p>We shall not be hold responsible for any content that appears on your Website. You agree to protect and defend us against all claims that is rising on your Website. No link(s) should appear on any Website that may be interpreted as libelous, obscene or criminal, or which infringes, otherwise violates, or advocates the infringement or other violation of, any third party rights.</p> <br />

                        <h3><strong>Reservation of Rights</strong></h3>
                        <hr /> <br />

                        <p>We reserve the right to request that you remove all links or any particular link to our Website. You approve to immediately remove all links to our Website upon request. We also reserve the right to amen these terms and conditions and it's linking policy at any time. By continuously linking to our Website, you agree to be bound to and follow these linking terms and conditions.</p> <br />

                        <h3><strong>Removal of links from our website</strong></h3> <hr /> <br />

                        <p>If you find any link on our Website that is offensive for any reason, you are free to contact and inform us any moment. We will consider requests to remove links but we are not obligated to or so or to respond to you directly.</p> <br />

                        <p>We do not ensure that the information on this website is correct, we do not warrant its completeness or accuracy; nor do we promise to ensure that the website remains available or that the material on the website is kept up to date.</p> <br />

                        <h3><strong>Disclaimer</strong></h3>
                        <hr /> <br />

                        <p>To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our website and the use of this website. Nothing in this disclaimer will:</p> <br />

                        <ul className='space-y-2'>
                            <p>1. limit or exclude our or your liability for death or personal injury;</p>
                            <p>2. limit or exclude our or your liability for fraud or fraudulent misrepresentation;</p>
                            <p>3. limit any of our or your liabilities in any way that is not permitted under applicable law; or</p>
                            <p>4. exclude any of our or your liabilities that may not be excluded under applicable law.</p>
                        </ul> <br />

                        <p>The limitations and prohibitions of liability set in this Section and elsewhere in this disclaimer: (a) are subject to the preceding paragraph; and (b) govern all liabilities arising under the disclaimer, including liabilities arising in contract, in tort and for breach of statutory duty.</p>
                        <br />
                        <p>As long as the website and the information and services on the website are provided free of charge, we will not be liable for any loss or damage of any nature.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TermsCondition;
