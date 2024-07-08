'use client';
import React, { useState, FormEvent } from "react";
import styles from './Form.module.css';
import ReCAPTCHA from 'react-google-recaptcha';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { useRouter } from 'next/navigation'
import Image from 'next/image';
const Form = () => {
    const router = useRouter()
    const initialFormData = {
        name: '',
        email: '',
        country: '',
        company_name: '',
        source: '',
        message: '',
        phone: ''
    };
    const initialErrors = {
        name: '',
        email: '',
        country: '',
        company_name: '',
        source: '',
        phone: '',
        captChaError: ''
    };
    const [formData, setFormData] = useState(initialFormData)
    const [countryCode, setCountryCode] = useState('');
    const [recaptchaToken, setRecaptchaToken] = useState('');
    const [errors, setErrors] = useState(initialErrors);
    const [isSubmitPressed, setIsSubmitPressed] = useState(false);
    const validateForm = () => {
        let errors = {
            name: '',
            email: '',
            country: '',
            company_name: '',
            source: '',
            phone: '',
            captChaError: ''
        };
        let isValid = true;

        if (!formData.name.trim()) {
            errors.name = 'Name is required*';
            isValid = false;
        }

        if (!formData.email.trim()) {
            errors.email = 'Email is required*';
            isValid = false;
        } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
            errors.email = 'Invalid email address';
            isValid = false;
        }
        if (!formData.company_name.trim()) {
            errors.company_name = 'Company Name is required*';
            isValid = false;
        }
        if (!formData.source.trim()) {
            errors.source = 'Source is required*';
            isValid = false;
        }
        if (!formData.country.trim()) {
            errors.country = 'Country is required*';
            isValid = false;
        }
        if (!countryCode) {
            errors.phone = 'Phone number is required*';
            isValid = false;

        }
        // else if (!isValidPhoneNumber(countryCode)) {
        //     errors.phone = 'Invalid phone number';
        //     isValid = false;
        // }
        if (!recaptchaToken) {
            errors.captChaError = 'Please complete the CAPTCHA*';
            isValid = false;
        }

        setErrors(errors);
        return isValid;
    };

    const handleRecaptchaChange = (token: string | null) => {
        if (token) {
            setRecaptchaToken(token);
        } else {
            console.log("Captcha error...")
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };
    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!validateForm()) {
            return;
        }
        setIsSubmitPressed(true);

        // Combine form data with reCAPTCHA token
        const dataWithCaptcha = { ...formData, recaptchaToken };
        dataWithCaptcha.phone = countryCode;
        // Call your API here
        fetch('https://www.digilanterngroup.com/contact/contact_api.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dataWithCaptcha),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                setFormData(initialFormData);
                setCountryCode('');
                router.push('/thankyou');
                setIsSubmitPressed(false);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };

    // const handlePhoneChange = (countryCode?: string) => {
    //     if (countryCode) {
    //         setCountryCode(countryCode);
    //     }
    // };
    return (
        <>
            <section className={styles["form-section"]}>
                <div className="wrapper">
                    <div className={styles["form"]}>
                        <div className={styles["form-left"]}>
                            <div className="main-heading">Redefining Possibilities with ThinkChat</div>
                            <div className={styles["form-heading"]}>Empowering Your Business with AI Innovations</div>
                            <li>
                                <Image width={150} height={59} src="/assets/check-icon.svg" className={styles["form-icon"]} alt='altImage' />
                                <span>Harness advanced AI technologies tailored to your specific business needs</span></li>
                            <li>
                                <Image width={150} height={59} src="/assets/check-icon.svg" className={styles["form-icon"]} alt='altImage' />
                                <span>Revolutionize customer interactions with our WhatsApp Business Automation services, available 24/7</span></li>
                            <li>
                                <Image width={150} height={59} src="/assets/check-icon.svg" className={styles["form-icon"]} alt='altImage' />
                                <span>Benefit from dynamic AI solutions that evolve and improve with every customer interaction, ensuring continual success for your business.</span></li>
                            <div className={styles["form-sm-heading"]}>Our Sales Team is ready to help you</div>
                            <div className={styles["form-stack-imgs"]}>
                                <Image width={150} height={59} src='/assets/b1.webp' alt="" />
                                <Image width={150} height={59} src='/assets/b2.webp' alt="" />
                                <Image width={150} height={59} src='/assets/b3.webp' alt="" />
                                <Image width={150} height={59} src='/assets/b4.webp' alt="" />
                            </div>
                        </div>
                        <div className={styles["form-right"]}>
                            <div className={`sub-heading ${styles['form-sub-heading']}`}>Tell us about yourself and we&apos;ll get back to you shortly.</div>
                            <div className={styles["form-content"]}>
                                <form onSubmit={handleSubmit}>
                                    {errors.name && <span className={styles["input-error"]}>{errors.name}</span>}
                                    <input type="text" name="name" value={formData.name} placeholder="Name*" onChange={handleChange} />

                                    {errors.email && <span className={styles["input-error"]}>{errors.email}</span>}
                                    <input type="email" name="email" placeholder="Buisiness email*" value={formData.email} onChange={handleChange} />

                                    {errors.company_name && <span className={styles["input-error"]}>{errors.company_name}</span>}
                                    <input type="text" name="company_name" placeholder="Company name*" value={formData.company_name} onChange={handleChange} />

                                    {errors.phone && <span className={styles["input-error"]}>{errors.phone}</span>}
                                    {/* <PhoneInput className="phone-input" defaultCountry="IN" name="phone" placeholder="Phone number*" onChange={setCountryCode} value={countryCode} /> */}

                                    <PhoneInput
                                        country={'us'}
                                        countryCodeEditable={false}
                                        value={countryCode}
                                        onChange={setCountryCode}
                                    />

                                    {errors.country && <span className={styles["input-error"]}>{errors.country}</span>}
                                    <select name="country" value={formData.country} onChange={handleSelectChange}>
                                        <option value="">Country*</option>
                                        <option value="Afghanistan">Afghanistan</option>
                                        <option value="Aland Islands">Aland Islands</option>
                                        <option value="Albania">Albania</option>
                                        <option value="Algeria">Algeria</option>
                                        <option value="American Samoa">American Samoa</option>
                                        <option value="Andorra">Andorra</option>
                                        <option value="Angola">Angola</option>
                                        <option value="Anguilla">Anguilla</option>
                                        <option value="Antarctica">Antarctica</option>
                                        <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                                        <option value="Argentina">Argentina</option>
                                        <option value="Armenia">Armenia</option>
                                        <option value="Aruba">Aruba</option>
                                        <option value="Australia">Australia</option>
                                        <option value="Austria">Austria</option>
                                        <option value="Azerbaijan">Azerbaijan</option>
                                        <option value="Bahamas">Bahamas</option>
                                        <option value="Bahrain">Bahrain</option>
                                        <option value="Bangladesh">Bangladesh</option>
                                        <option value="Barbados">Barbados</option>
                                        <option value="Belarus">Belarus</option>
                                        <option value="Belgium">Belgium</option>
                                        <option value="Belize">Belize</option>
                                        <option value="Benin">Benin</option>
                                        <option value="Bermuda">Bermuda</option>
                                        <option value="Bhutan">Bhutan</option>
                                        <option value="Bolivia">Bolivia</option>
                                        <option value="Bonaire, Sint Eustatius and Saba">Bonaire, Sint Eustatius and Saba</option>
                                        <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
                                        <option value="Botswana">Botswana</option>
                                        <option value="Bouvet Island">Bouvet Island</option>
                                        <option value="Brazil">Brazil</option>
                                        <option value="British Indian Ocean Territory">British Indian Ocean Territory</option>
                                        <option value="British Virgin Islands">British Virgin Islands</option>
                                        <option value="Brunei">Brunei</option>
                                        <option value="Bulgaria">Bulgaria</option>
                                        <option value="Burkina Faso">Burkina Faso</option>
                                        <option value="Burundi">Burundi</option>
                                        <option value="Cambodia">Cambodia</option>
                                        <option value="Cameroon">Cameroon</option>
                                        <option value="Canada">Canada</option>
                                        <option value="Cape Verde">Cape Verde</option>
                                        <option value="Cayman Islands">Cayman Islands</option>
                                        <option value="Central African Republic">Central African Republic</option>
                                        <option value="Chad">Chad</option>
                                        <option value="Chile">Chile</option>
                                        <option value="China">China</option>
                                        <option value="Christmas Island">Christmas Island</option>
                                        <option value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option>
                                        <option value="Colombia">Colombia</option>
                                        <option value="Comoros">Comoros</option>
                                        <option value="Congo">Congo</option>
                                        <option value="Cook Islands">Cook Islands</option>
                                        <option value="Costa Rica">Costa Rica</option>
                                        <option value="Cote D'Ivoire (Ivory Coast)">Cote D&apos;Ivoire (Ivory Coast)</option>
                                        <option value="Croatia">Croatia</option>
                                        <option value="Cuba">Cuba</option>
                                        <option value="Curaçao">Curaçao</option>
                                        <option value="Cyprus">Cyprus</option>
                                        <option value="Czech Republic">Czech Republic</option>
                                        <option value="Côte d’Ivoire">Côte d’Ivoire</option>
                                        <option value="Democratic Republic of the Congo">Democratic Republic of the Congo</option>
                                        <option value="Denmark">Denmark</option>
                                        <option value="Djibouti">Djibouti</option>
                                        <option value="Dominica">Dominica</option>
                                        <option value="Dominican Republic">Dominican Republic</option>
                                        <option value="East Timor">East Timor</option>
                                        <option value="Ecuador">Ecuador</option>
                                        <option value="Egypt">Egypt</option>
                                        <option value="El Salvador">El Salvador</option>
                                        <option value="Equatorial Guinea">Equatorial Guinea</option>
                                        <option value="Eritrea">Eritrea</option>
                                        <option value="Estonia">Estonia</option>
                                        <option value="Ethiopia">Ethiopia</option>
                                        <option value="Falkland Islands">Falkland Islands</option>
                                        <option value="Faroe Islands">Faroe Islands</option>
                                        <option value="Fiji">Fiji</option>
                                        <option value="Fiji Islands">Fiji Islands</option>
                                        <option value="Finland">Finland</option>
                                        <option value="France">France</option>
                                        <option value="French Guiana">French Guiana</option>
                                        <option value="French Polynesia">French Polynesia</option>
                                        <option value="French Southern Territories">French Southern Territories</option>
                                        <option value="Gabon">Gabon</option>
                                        <option value="Gambia">Gambia</option>
                                        <option value="Gambia The">Gambia The</option>
                                        <option value="Georgia">Georgia</option>
                                        <option value="Germany">Germany</option>
                                        <option value="Ghana">Ghana</option>
                                        <option value="Gibraltar">Gibraltar</option>
                                        <option value="Greece">Greece</option>
                                        <option value="Greenland">Greenland</option>
                                        <option value="Grenada">Grenada</option>
                                        <option value="Guadeloupe">Guadeloupe</option>
                                        <option value="Guam">Guam</option>
                                        <option value="Guatemala">Guatemala</option>
                                        <option value="Guernsey">Guernsey</option>
                                        <option value="Guernsey and Alderney">Guernsey and Alderney</option>
                                        <option value="Guinea">Guinea</option>
                                        <option value="Guinea-Bissau">Guinea-Bissau</option>
                                        <option value="Guyana">Guyana</option>
                                        <option value="Haiti">Haiti</option>
                                        <option value="Heard Island and McDonald Islands">Heard Island and McDonald Islands</option>
                                        <option value="Honduras">Honduras</option>
                                        <option value="Hong Kong S.A.R.">Hong Kong S.A.R.</option>
                                        <option value="Hong Kong S.A.R., China">Hong Kong S.A.R., China</option>
                                        <option value="HongKong">HongKong</option>
                                        <option value="Hungary">Hungary</option>
                                        <option value="Iceland">Iceland</option>
                                        <option value="India" selected>India</option>
                                        <option value="Indonesia">Indonesia</option>
                                        <option value="Iran">Iran</option>
                                        <option value="Iraq">Iraq</option>
                                        <option value="Ireland">Ireland</option>
                                        <option value="Isle of Man">Isle of Man</option>
                                        <option value="Israel">Israel</option>
                                        <option value="Italy">Italy</option>
                                        <option value="Jamaica">Jamaica</option>
                                        <option value="Japan">Japan</option>
                                        <option value="Jersey">Jersey</option>
                                        <option value="Jordan">Jordan</option>
                                        <option value="Kazakhstan">Kazakhstan</option>
                                        <option value="Kenya">Kenya</option>
                                        <option value="Kiribati">Kiribati</option>
                                        <option value="Kosovo">Kosovo</option>
                                        <option value="Kuwait">Kuwait</option>
                                        <option value="Kyrgyzstan">Kyrgyzstan</option>
                                        <option value="Laos">Laos</option>
                                        <option value="Latvia">Latvia</option>
                                        <option value="Lebanon">Lebanon</option>
                                        <option value="Lesotho">Lesotho</option>
                                        <option value="Liberia">Liberia</option>
                                        <option value="Libya">Libya</option>
                                        <option value="Liechtenstein">Liechtenstein</option>
                                        <option value="Lithuania">Lithuania</option>
                                        <option value="Luxembourg">Luxembourg</option>
                                        <option value="Macao S.A.R., China">Macao S.A.R., China</option>
                                        <option value="Macau S.A.R.">Macau S.A.R.</option>
                                        <option value="Macedonia">Macedonia</option>
                                        <option value="Madagascar">Madagascar</option>
                                        <option value="Malawi">Malawi</option>
                                        <option value="Malaysia">Malaysia</option>
                                        <option value="Maldives">Maldives</option>
                                        <option value="Mali">Mali</option>
                                        <option value="Malta">Malta</option>
                                        <option value="Man (Isle of)">Man (Isle of)</option>
                                        <option value="Marshall Islands">Marshall Islands</option>
                                        <option value="Martinique">Martinique</option>
                                        <option value="Mauritania">Mauritania</option>
                                        <option value="Mauritius">Mauritius</option>
                                        <option value="Mayotte">Mayotte</option>
                                        <option value="Mexico">Mexico</option>
                                        <option value="Micronesia">Micronesia</option>
                                        <option value="Moldova">Moldova</option>
                                        <option value="Monaco">Monaco</option>
                                        <option value="Mongolia">Mongolia</option>
                                        <option value="Montenegro">Montenegro</option>
                                        <option value="Montserrat">Montserrat</option>
                                        <option value="Morocco">Morocco</option>
                                        <option value="Mozambique">Mozambique</option>
                                        <option value="Myanmar">Myanmar</option>
                                        <option value="Namibia">Namibia</option>
                                        <option value="Nauru">Nauru</option>
                                        <option value="Nepal">Nepal</option>
                                        <option value="Netherlands">Netherlands</option>
                                        <option value="New Caledonia">New Caledonia</option>
                                        <option value="New Zealand">New Zealand</option>
                                        <option value="Nicaragua">Nicaragua</option>
                                        <option value="Niger">Niger</option>
                                        <option value="Nigeria">Nigeria</option>
                                        <option value="Niue">Niue</option>
                                        <option value="Norfolk Island">Norfolk Island</option>
                                        <option value="North Korea">North Korea</option>
                                        <option value="North Macedonia">North Macedonia</option>
                                        <option value="Northern Mariana Islands">Northern Mariana Islands</option>
                                        <option value="Norway">Norway</option>
                                        <option value="Oman">Oman</option>
                                        <option value="Pakistan">Pakistan</option>
                                        <option value="Palau">Palau</option>
                                        <option value="Palestinian Territory">Palestinian Territory</option>
                                        <option value="Palestinian Territory, Occupied">Palestinian Territory, Occupied</option>
                                        <option value="Panama">Panama</option>
                                        <option value="Papua New Guinea">Papua New Guinea</option>
                                        <option value="Paraguay">Paraguay</option>
                                        <option value="Peru">Peru</option>
                                        <option value="Philippines">Philippines</option>
                                        <option value="Pitcairn">Pitcairn</option>
                                        <option value="Pitcairn Island">Pitcairn Island</option>
                                        <option value="Poland">Poland</option>
                                        <option value="Portugal">Portugal</option>
                                        <option value="Puerto Rico">Puerto Rico</option>
                                        <option value="Qatar">Qatar</option>
                                        <option value="Reunion">Reunion</option>
                                        <option value="Romania">Romania</option>
                                        <option value="Russia">Russia</option>
                                        <option value="Rwanda">Rwanda</option>
                                        <option value="Réunion">Réunion</option>
                                        <option value="Saint Barthélemy">Saint Barthélemy</option>
                                        <option value="Saint Helena">Saint Helena</option>
                                        <option value="Saint Kitts And Nevis">Saint Kitts And Nevis</option>
                                        <option value="Saint Lucia">Saint Lucia</option>
                                        <option value="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option>
                                        <option value="Saint Vincent And The Grenadines">Saint Vincent And The Grenadines</option>
                                        <option value="Saint-Barthelemy">Saint-Barthelemy</option>
                                        <option value="Saint-Martin (French part)">Saint-Martin (French part)</option>
                                        <option value="Samoa">Samoa</option>
                                        <option value="San Marino">San Marino</option>
                                        <option value="Sao Tome and Principe">Sao Tome and Principe</option>
                                        <option value="Saudi Arabia">Saudi Arabia</option>
                                        <option value="Senegal">Senegal</option>
                                        <option value="Serbia">Serbia</option>
                                        <option value="Seychelles">Seychelles</option>
                                        <option value="Sierra Leone">Sierra Leone</option>
                                        <option value="Singapore">Singapore</option>
                                        <option value="Sint Maarten (Dutch part)">Sint Maarten (Dutch part)</option>
                                        <option value="Slovakia">Slovakia</option>
                                        <option value="Slovenia">Slovenia</option>
                                        <option value="Solomon Islands">Solomon Islands</option>
                                        <option value="Somalia">Somalia</option>
                                        <option value="South Africa">South Africa</option>
                                        <option value="South Georgia">South Georgia</option>
                                        <option value="South Korea">South Korea</option>
                                        <option value="South Sudan">South Sudan</option>
                                        <option value="Spain">Spain</option>
                                        <option value="Sri Lanka">Sri Lanka</option>
                                        <option value="Sudan">Sudan</option>
                                        <option value="Suriname">Suriname</option>
                                        <option value="Svalbard and Jan Mayen">Svalbard and Jan Mayen</option>
                                        <option value="Svalbard And Jan Mayen Islands">Svalbard And Jan Mayen Islands</option>
                                        <option value="Swaziland">Swaziland</option>
                                        <option value="Sweden">Sweden</option>
                                        <option value="Switzerland">Switzerland</option>
                                        <option value="Syria">Syria</option>
                                        <option value="Taiwan">Taiwan</option>
                                        <option value="Tajikistan">Tajikistan</option>
                                        <option value="Tanzania">Tanzania</option>
                                        <option value="Thailand">Thailand</option>
                                        <option value="The Bahamas">The Bahamas</option>
                                        <option value="Timor-Leste">Timor-Leste</option>
                                        <option value="Togo">Togo</option>
                                        <option value="Tokelau">Tokelau</option>
                                        <option value="Tonga">Tonga</option>
                                        <option value="Trinidad And Tobago">Trinidad And Tobago</option>
                                        <option value="Tunisia">Tunisia</option>
                                        <option value="Turkey">Turkey</option>
                                        <option value="Turkmenistan">Turkmenistan</option>
                                        <option value="Turks And Caicos Islands">Turks And Caicos Islands</option>
                                        <option value="Tuvalu">Tuvalu</option>
                                        <option value="U.S. Virgin Islands">U.S. Virgin Islands</option>
                                        <option value="Uganda">Uganda</option>
                                        <option value="Ukraine">Ukraine</option>
                                        <option value="United Arab Emirates">United Arab Emirates</option>
                                        <option value="United Kingdom">United Kingdom</option>
                                        <option value="United States">United States</option>
                                        <option value="United States Minor Outlying Islands">United States Minor Outlying Islands</option>
                                        <option value="Uruguay">Uruguay</option>
                                        <option value="Uzbekistan">Uzbekistan</option>
                                        <option value="Vanuatu">Vanuatu</option>
                                        <option value="Vatican">Vatican</option>
                                        <option value="Vatican City State (Holy See)">Vatican City State (Holy See)</option>
                                        <option value="Venezuela">Venezuela</option>
                                        <option value="Viet Nam">Viet Nam</option>
                                        <option value="Vietnam">Vietnam</option>
                                        <option value="Virgin Islands (British)">Virgin Islands (British)</option>
                                        <option value="Virgin Islands (US)">Virgin Islands (US)</option>
                                        <option value="Wallis and Futuna">Wallis and Futuna</option>
                                        <option value="Wallis And Futuna Islands">Wallis And Futuna Islands</option>
                                        <option value="Western Sahara">Western Sahara</option>
                                        <option value="Yemen">Yemen</option>
                                        <option value="Zambia">Zambia</option>
                                        <option value="Zimbabwe">Zimbabwe</option>
                                    </select>
                                    {errors.source && <span className={styles["input-error"]}>{errors.source}</span>}
                                    <select name="source" value={formData.source} onChange={handleSelectChange}>
                                        <option value="">How did you hear about us?*</option>
                                        <option value="Google/Search">Google/Search</option>
                                        <option value="LinkedIn">LinkedIn</option>
                                        <option value="Instagram">Events</option>
                                        <option value="Facebook">Referral</option>
                                        <option value="Others">Others</option>
                                    </select>

                                    <textarea name="message" value={formData.message} onChange={handleTextAreaChange} placeholder="Tell us more about your industry, challenges, needs, etc."></textarea>
                                    {errors.captChaError && <span className={styles["input-error"]}>{errors.captChaError}</span>}
                                    <div className={styles["captcha-container"]}>
                                        <div className={styles["captcha"]}>
                                            <ReCAPTCHA
                                                sitekey="6Ld049EpAAAAAENRMjTkmQOSvLff4d886YCoCN7a"
                                                onChange={handleRecaptchaChange}
                                            />
                                        </div>
                                        <div className={styles["button-container"]}><button className={styles["form-submit"]} type="submit">
                                            {isSubmitPressed ?
                                                "Sending"
                                                : "Contact"}
                                        </button></div>
                                    </div>
                                    {isSubmitPressed && <div className={styles.loader}></div>}
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Form;