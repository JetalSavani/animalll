import React from 'react'
import { Link } from 'react-router-dom';
import "./Disease.css";

export default function Disease() {
    return (
        <> <br /><br />
            <div className="container">
                <h4 style={{ marginTop: "10px", padding: "8px", backgroundColor: "green", color: "white" }}>VETERINARY VIRAL VACCINES</h4><br />
                <div>
                    <table class="table">
                        <caption></caption>
                        <thead class="thead-dark">
                            <tr>
                                <th scope="col">NO</th>
                                <th scope="col">Target pathogen</th>
                                <th scope="col">Target animal</th>
                                <th scope="col">Brand name(s)a</th>
                                <th scope="col">Distributor</th>
                                <th scope="col-span-2">Characteristic</th>
                                <th scope="col">Reference</th>


                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>BHV-1</td>
                                <td>Cattle	</td>
                                <td>Bovilis IBR Marker</td>
                                <td>Intervet	</td>
                                <td>Live or inactivated gE-deleted marker vaccine	</td>

                                <td><Link to="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC1932753/" target="_blank">#1</Link></td>
                            </tr>

                        </tbody>
                    </table>  <br /><br />

                </div>


                <h4 style={{ marginTop: "10px", padding: "8px", backgroundColor: "green", color: "white" }}>VETERINARY BACTERIAL VACCINES</h4> <br />

                <div>
                    <table class="table">
                        <caption></caption>
                        <thead class="thead-dark">
                            <tr>
                                <th scope="col">NO</th>
                                <th scope="col">Target pathogen</th>
                                <th scope="col">Target animal</th>
                                <th scope="col">Brand name</th>
                                <th scope="col">Distributor</th>
                                <th scope="col-span-2">Characteristic</th>
                                <th scope="col">Reference</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Brucella abortus</td>
                                <td>Cattle	</td>
                                <td>RB-51	</td>
                                <td>Colorado Serum Company CZ Veterinaria	</td>
                                <td>Spontaneous rifampin-resistant rough mutant	</td>
                                <td><Link to="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC1932753/" target="_blank">#2</Link></td>
                            </tr>

                        </tbody>
                    </table>    <br /><br />

                </div>


                <h4 style={{ marginTop: "10px", padding: "8px", backgroundColor: "green", color: "white" }}>VETERINARY PARASITE VACCINES</h4> <br />

                <div>
                    <table class="table">
                        <caption></caption>
                        <thead class="thead-dark">
                            <tr>
                                <th scope="col">NO</th>
                                <th scope="col">Target pathogen</th>
                                <th scope="col">Target animal</th>
                                <th scope="col">Brand name</th>
                                <th scope="col">Distributor</th>
                                <th scope="col-span-2">Characteristic</th>
                                <th scope="col">Reference</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Babesia bovis and B. bigemina</td>
                                <td>Cattle	</td>
                                <td> -	</td>
                                <td>Local veterinary institutes</td>
                                <td>Infected blood from splenectomized calves</td>
                                <td><Link to="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC1932753/" target="_blank">#3 </Link></td>
                            </tr>

                        </tbody>
                    </table>    <br /><br />


                </div>



                <h4 style={{ marginTop: "10px", padding: "8px", backgroundColor: "green", color: "white" }}>
                    VACCINES AGAINST REPRODUCTIVE HORMONES</h4> <br />

                <div>
                    <table class="table">
                        <caption></caption>
                        <thead class="thead-dark">
                            <tr>
                                <th scope="col">NO</th>
                                <th scope="col">Target antigen</th>
                                <th scope="col">Target species</th>
                                <th scope="col">Brand name</th>
                                <th scope="col">Distributor</th>
                                <th scope="col-span-2">Characteristic</th>
                                <th scope="col">Reference</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>LHRH</td>
                                <td>Female cattle</td>
                                <td>Vaxstrate</td>
                                <td>Websters Animal Health (withdrawn in 1996)</td>
                                <td>LHRH peptide conjugated to ovalbumin; oil emulsion adjuvant</td>
                                <td><Link to="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC1932753/" target="_blank">#4</Link></td>
                            </tr>

                        </tbody>
                    </table>    <br /><br />


                </div>
            </div>

            <div class="container">


                <h4 style={{ marginTop: "10px", padding: "8px", backgroundColor: "green", color: "white" }}>
                    COW DISEASE AND THEIR TREATMENTS :</h4> <br />

                <table className="table mx-auto  table-striped table-hover table-center">
                    <thead className='table-dark  th1' >
                        <tr>
                            <th>Disease</th>
                            <th>Symptoms</th>
                            <th>Treatment</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Bovine respiratory disease (BRD)</td>
                            <td>Coughing, fever, nasal discharge, rapid breathing</td>
                            <td>Antibiotics, anti-inflammatory drugs, supportive care</td>
                        </tr>
                        <tr>
                            <td>Bovine viral diarrhea (BVD)</td>
                            <td>Diarrhea, fever, lethargy, decreased appetite</td>
                            <td>Vaccination, supportive care</td>
                        </tr>
                        <tr>
                            <td>Foot rot</td>
                            <td>Swollen, painful foot, limping</td>
                            <td>Antibiotics, foot baths, trimming infected tissue</td>
                        </tr>
                        <tr>
                            <td>Mastitis</td>
                            <td>Swollen, painful udder, abnormal milk</td>
                            <td>Antibiotics, supportive care</td>
                        </tr>
                        <tr>
                            <td>Pink eye</td>
                            <td>Red, swollen eye, excessive tearing</td>
                            <td>Antibiotics, fly control</td>
                        </tr>
                        <tr>
                            <td>Ringworm</td>
                            <td>Circular, scaly patches on skin</td>
                            <td>Topical antifungal medication, isolating infected animal</td>
                        </tr>
                        <tr>
                            <td>Scours</td>
                            <td>Diarrhea, dehydration, weakness</td>
                            <td>Fluid therapy, electrolyte solutions, supportive care</td>
                        </tr>
                        <tr>
                            <td>Shipping fever</td>
                            <td>Coughing, fever, rapid breathing, loss of appetite</td>
                            <td>Antibiotics, anti-inflammatory drugs, supportive care</td>
                        </tr>
                        <tr>
                            <td>Tuberculosis (TB)</td>
                            <td>Chronic cough, weight loss, weakness</td>
                            <td>Test and remove infected animals, quarantine herd, monitoring and surveillance</td>
                        </tr>
                    </tbody>
                </table>  <br /> <br /> <br />
            </div>





            <div class="container">
                <h4 style={{ marginTop: "10px", padding: "8px", backgroundColor: "green", color: "white" }}>
                    BUFFALO DISEASE AND THEIR TREATMENTS :</h4> <br />

                <table class="table  table-striped table-hover table-center">
                    <thead className='table-dark'>
                        <tr>
                            <th>Disease</th>
                            <th>Symptoms</th>
                            <th>Treatment</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Foot-and-Mouth Disease</td>
                            <td>Fever, blisters on the mouth, tongue and feet, decreased milk production, and lameness.</td>
                            <td>No specific treatment. Isolation and supportive care. Vaccination is available.</td>
                        </tr>
                        <tr>
                            <td>Haemorrhagic Septicaemia</td>
                            <td>Fever, difficulty breathing, nasal discharge, swollen and painful muscles, and sudden death.</td>
                            <td>Antibiotic treatment. Vaccination is available.</td>
                        </tr>
                        <tr>
                            <td>Theileriosis</td>
                            <td>Fever, anemia, loss of appetite, and reduced milk production.</td>
                            <td>Antibiotic treatment. Vaccination is available.</td>
                        </tr>
                        <tr>
                            <td>Bovine Tuberculosis</td>
                            <td>Weight loss, coughing, fever, decreased milk production, and enlarged lymph nodes.</td>
                            <td>Antibiotic treatment. Slaughter of infected animals may be necessary. Testing and quarantine measures may also be necessary.</td>
                        </tr>
                    </tbody>
                </table> <br /> <br /> <br />
            </div>






            <div class="container">

                <h4 style={{ marginTop: "10px", padding: "8px", backgroundColor: "green", color: "white" }}>
                    OX DISEASE AND THEIR TREATMENTS :</h4> <br />
                <table class="table  table-striped table-hover table-center">


                    <thead className='table-dark'>
                        <tr>
                            <th>Disease</th>
                            <th>Symptoms</th>
                            <th>Treatment</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Anthrax</td>
                            <td>Fever, difficulty breathing, bloody discharge from the nose, and sudden death.</td>
                            <td>Antibiotic treatment. Vaccination is available.</td>
                        </tr>
                        <tr>
                            <td>Blackleg</td>
                            <td>Fever, swollen and painful muscles, lameness, and sudden death.</td>
                            <td>No specific treatment. Vaccination is available.</td>
                        </tr>
                        <tr>
                            <td>Brucellosis</td>
                            <td>Abortion, infertility, decreased milk production, and joint pain.</td>
                            <td>No specific treatment. Vaccination is available. Infected animals should be culled.</td>
                        </tr>
                        <tr>
                            <td>Clostridial Diseases</td>
                            <td>Various symptoms depending on the specific disease, including fever, swelling, and sudden death.</td>
                            <td>No specific treatment. Vaccination is available.</td>
                        </tr>
                    </tbody>
                </table>
            </div>


            {/* <div class="list-group" style={{ width: "500px", textAlign: "center", display: "flex", justifyContent: "center" }}>
                <a href="#" class="list-group-item list-group-item-action active m-9">
                    CATTLE DISEASES
                </a>
                <a href="#" class="list-group-item list-group-item-action">Bovine anaplasmosis</a>
                <a href="#" class="list-group-item list-group-item-action">Bovine babesiosis</a>
                <a href="#" class="list-group-item list-group-item-action">Bovine genital campylobacteriosis</a>
                <a href="#" class="list-group-item list-group-item-action disabled">Bovine spongiform encephalopathy</a>
                <a href="#" class="list-group-item list-group-item-action">Bovine tuberculosis</a>
                <a href="#" class="list-group-item list-group-item-action">Bovine viral diarrhoea</a>
                <a href="#" class="list-group-item list-group-item-action">Contagious bovine pleuropneumonia</a>
                <a href="#" class="list-group-item list-group-item-action disabled">Enzootic bovine leucosis</a>
                <a href="#" class="list-group-item list-group-item-action">Haemorrhagic septicaemia</a>
                <a href="#" class="list-group-item list-group-item-action">Lumpy skin disease</a>
                <a href="#" class="list-group-item list-group-item-action"> Malignant catarrhal fever</a>
                <a href="#" class="list-group-item list-group-item-action disabled">Trypanosomosis</a>
            </div> */}











        </>
    )


}
