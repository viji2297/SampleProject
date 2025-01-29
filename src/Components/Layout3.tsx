import React, { useState } from "react";
import { handleLinkChange } from "../Common/Common.tsx";

function Layout_Three() {
    const [isHovered_1, setIsHovered_1] = useState(false);
    const [isHovered_2, setIsHovered_2] = useState(false);
    const [isHovered_3, setIsHovered_3] = useState(false);
    const [isHovered_4, setIsHovered_4] = useState(false);

    return (
        <div className="bg-light min-vh-100 d-flex flex-column position-relative">
            <div className="text-center mt-5">
                <h1 className="text-black">Why Hexnode?</h1>
            </div>
            <div className="container mt-5">
                <div className="row justify-content-center">
                     {/* <div className="col-12 text-center mb-5">
                        <img
                            src={require("./../assets/Hexnode_Logo.png")}
                            alt="Hexnode Logo"
                            className="img-fluid center-image"
                            style={{
                                width: "7vw",
                                height: "7vw",
                                maxWidth: "150px",
                                maxHeight: "150px",
                                objectFit: "cover",
                                borderRadius: "20px",
                                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                            }}
                        />
                    </div> */}

                     <div className="col-12 col-md-6 mb-4 hover-container"
                     onMouseEnter={() => setIsHovered_1(true)}
                     onMouseLeave={() => setIsHovered_1(false)}>
                        <div className="custom-card">
                            <h3 className="text-center mt-4 d-flex align-items-center justify-content-center">
                                <img
                                    src={require("./../assets/Adaptive.jpg")}
                                    alt="Adaptive"
                                    className="me-2"
                                    style={{
                                        width: "30px",
                                        height: "30px",
                                    }}
                                />
                                Adapt to the new normal
                            </h3>
                            <p className="text-center text-muted mt-3 fs-5">
                            Hybrid, remote or onsite, you can trust Hexnode UEM to deliver. Create policies that cater to your organization’s protocols. Whether it be BYOD, COPE, or platform limited, Hexnode can manage it all.                            </p>
                            {isHovered_1 && <h5 className="text-danger" onClick={handleLinkChange}>Try Hexnode on your endpoints</h5>}

                        </div>
                    </div>

                    <div className="col-12 col-md-6 mb-4 hover-container"
                     onMouseEnter={() => setIsHovered_2(true)}
                     onMouseLeave={() => setIsHovered_2(false)}>
                        <div className="custom-card">
                            <h3 className="text-center mt-4 d-flex align-items-center justify-content-center">
                                <img
                                    src={require("./../assets/Secured.jpg")}
                                    alt="Secured"
                                    className="me-2"
                                    style={{
                                        width: "30px",
                                        height: "30px",
                                    }}
                                />
                                Zero compromise security
                            </h3>
                            <p className="text-center text-muted mt-3 fs-5 text-md-start">
                                Enable full-fledged device encryption, data loss prevention, and all-rounded device security with Hexnode UEM.
                            </p>
                            {isHovered_2 && <h5 className="text-danger" onClick={handleLinkChange}>Try Hexnode on your endpoints</h5>}

                        </div>
                    </div>

                    <div className="col-12 col-md-6 mb-4 hover-container"
                    onMouseEnter={() => setIsHovered_3(true)}
                    onMouseLeave={() => setIsHovered_3(false)}>
                        <div className="custom-card">
                            <h3 className="text-center mt-4 d-flex align-items-center justify-content-center text-md-start">
                                <img
                                    src={require("./../assets/Settings.jpg")}
                                    alt="Settings"
                                    className="me-2"
                                    style={{
                                        width: "30px",
                                        height: "30px",
                                    }}
                                />
                                Get more done with automation
                            </h3>
                            <p className="text-center text-muted mt-3 fs-5 text-md-start">
                                Hexnode UEM automation features help free up IT’s time spent on mundane and repetitive tasks.
                            </p>
                            {isHovered_3 && <h5 className="text-danger" onClick={handleLinkChange}>Try Hexnode on your endpoints</h5>}

                        </div>
                    </div>

                    <div className="col-12 col-md-6 mb-4 hover-container"
                    onMouseEnter={() => setIsHovered_4(true)}
                    onMouseLeave={() => setIsHovered_4(false)}>
                        <div className="custom-card">
                            <h3 className="text-center mt-4 d-flex align-items-center justify-content-center">
                                <img
                                    src={require("./../assets/Document.jpg")}
                                    alt="Document"
                                    className="me-2"
                                    style={{
                                        width: "30px",
                                        height: "30px",
                                    }}
                                />
                                Unified Policy Management
                            </h3>
                            <p className="text-md-start text-center text-muted mt-3 fs-5">
                                Create a single policy through Hexnode and apply it on all the devices in your organization.
                            </p>
                            {isHovered_4 && <h5 className="text-danger" onClick={handleLinkChange}>Try Hexnode on your endpoints</h5>}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Layout_Three;
