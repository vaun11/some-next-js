import { RocketIcon } from "@radix-ui/react-icons"

export default function AboutVaunatic() {
    return (
        <div className="flex flex-col p-4 w-full h-full border-red-100 rounded-md border-2 text-white gap-2">
            <div className="flex flex-row">
                <h1 className="text-xl font-bold">Maya Vaun - Developer, Artist, Mentor</h1>
            </div>
            <div className="flex flex-row items-center">
                <RocketIcon className="pr-2" width="32" height="32"/>
                <p>Maya has been a programmer for nearly 10 years, and worked professionally in the software/IT industry for 7 years.</p>
            </div>
            <div className="flex flex-row">
                <h2>Here are some of the (many) things Maya has worked on professionally:</h2>
            </div>
            <div className="flex flex-row">
                <ul className="list-disc list-inside space-y-2">
                    {/* Professional Job #1 */}
                    <li>
                        Plastics Manufacturing Industry (2019 - 2021)   
                        <ul className="list-decimal list-inside pl-4">
                            <li>
                                Management System for CAD Project Files & Client Release Data
                            </li>
                            <li>
                                Administrative UI for Control of CNC Tooling Orders and Data
                            </li>
                            <li>
                                Email/Messaging API for Centralized Communication between Applications and Users
                            </li>
                        </ul>
                    </li>
                    {/* Professional Job #2 */}
                    <li>
                        Education Technology (2022)
                        <ul className="list-decimal list-inside pl-4">
                            <li>
                                Administrative UI for Control of Online Student Learning (Courses, Assignments, Assessments)
                            </li>
                            <li>
                                "Accomodations Profiles" for Students using Learning Management Software (LMS)
                            </li>
                            <li>
                                Physical Assessment Sheet - Analysis and Grading Pipeline (Think "ScanTron" sheets, and the tools to "grade" these assignments)
                            </li>
                        </ul>
                    </li>
                    {/* Career Move #3 - Consulting */}
                    <li>
                        Software Consulting (2023-2024)
                        <ul className="list-decimal list-inside pl-4">
                            <li>
                                Dashboard UI for aggregation of Pharmaceutical Study Trial Data
                            </li>
                            <li>
                                ETL Jobs for compiling and reporting of Pharmaceutical Study Trial Data
                            </li>
                            <li>
                                Medical Data (HL7) and Pharmaceutical Structured Product Labeling (SPL) Application Support
                            </li>
                            {/* Separate section for another client */}
                            <h3></h3>
                            <li className="pt-2">
                                SOP (Standard Operating Procedure) Development for Probate Legal Case Management
                            </li>
                            <li>
                                User Interface (UI) Design and Development for Probate Legal Case Management
                            </li>
                            <li>API (Application Programming Interface) Development for probate case data and associated document management</li>
                        </ul>
                    </li>
                    {/* Career Move #4 - Retail Sales Development */}
                    <li>
                        Retail Sales Development (2025-2026)
                        <ul className="list-decimal list-inside pl-4">
                            <li>
                                Storefront Website selling one-of-a-kind oriental rugs
                            </li>
                            <li>
                                Shopify Store design, development, and deployment
                            </li>
                            <li>
                                Inventory Control System design and development; integration with Excel, SQL databases, and messaging platforms
                            </li>
                            <li>
                                System administration of Shopify, eBay, Wayfair, Amazon, and Overstock client sales-front accounts
                            </li>
                            <li>
                                Reporting pipeline covering inventory status, sales/order/customer history, and prospective sales outlooks
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    )
}